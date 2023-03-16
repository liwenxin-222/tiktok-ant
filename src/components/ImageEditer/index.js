import ImageEditor from '@toast-ui/react-image-editor';
import {localeZh, customTheme} from './data/locale';
import React, {useState, useRef, useImperativeHandle} from 'react';

import 'tui-image-editor/dist/tui-image-editor.css';
import 'tui-color-picker/dist/tui-color-picker.css';
import {Drawer, Space, Button} from 'antd'
import s from './index.less'

function ImageEditer(props, ref) {
  const {data} = props;
  const [open, setOpen] = useState();

  const ImageEditorRef = useRef();

  useImperativeHandle(ref,() => {
    return {
      ImageEditorRef,
      publicSetOpen: onOpenChange
    }
  })

  function onOpenChange(v) {
    setOpen(v);
  }

  function handleSave() {

    const base64String = ImageEditorRef.current.getInstance().toDataURL() // base64 文件

    const data = window.atob(base64String.split(',')[1])
    const ia = new Uint8Array(data.length)
    for (let i = 0; i < data.length; i++) {
      ia[i] = data.charCodeAt(i)
    }
    const blob = new Blob([ia], { type: 'image/png' }) // blob 文件
    const form = new FormData()
    form.append('image', blob)
    console.log(ImageEditorRef, form, blob, '图片');
    // upload file
  }

  return (

    <Drawer
      width={1000}
      title="编辑图片"
      open={open}
      onOpenChange={onOpenChange}
      onClose={() => setOpen(false)}
      // maskClosable={false}
      wrapClassName={s.ImageEditerWrap}
      extra={
        <Space>
          <Button onClick={handleSave} type="primary">保存</Button>
        </Space>
      }
    >
      <ImageEditor
        ref={ImageEditorRef}
        includeUI={{
          loadImage: {
            path: data.url,
            name: 'SampleImage',
          },
          locale: localeZh,
          theme: customTheme,
          menu: ['crop', 'draw', 'text', 'rotate', 'flip', 'shape', 'icon','mask', 'filter'],
          initMenu: 'crop',
          uiSize: {
            width: '1000px',
            height: '700px',
          },
          menuBarPosition: 'bottom',
        }}
        cssMaxHeight={1100}
        cssMaxWidth={800}
        selectionStyle={{
          cornerSize: 20,
          rotatingPointOffset: 70,
        }}
        usageStatistics={false}
      />
    </Drawer>

  )
}

export default React.forwardRef(ImageEditer);
