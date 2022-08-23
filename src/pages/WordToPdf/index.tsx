import {FC, useState} from 'react';
import { request } from '@umijs/max'
// @ts-ignore
import FileSaver from "file-saver";
import type { UploadFile, UploadProps } from 'antd/es/upload/interface';
import { InboxOutlined } from '@ant-design/icons';
import moment from "moment";

// import type { UploadProps } from 'antd';
import { message, Upload, Button, Spin } from 'antd';
import s from './index.less';


const { Dragger } = Upload;

const About: FC = () => {

  // const [fileData, setFileData] = useState<UploadFile[]>([]);
  const [fileName, setFileName] = useState();
  const [loading, setLoading] = useState(false);


  const props: UploadProps = {
    name: 'file',
    // multiple: false,
    maxCount: 1,
    action: '/api/uploadWord',
    onChange(info: any) {
      const { status } = info.file;
      if (status !== 'uploading') {
        // console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        console.log(info);
        message.success(`${info.file.name} 上传成功！`);
        setFileName(info.file.response.data?.imgUrl);

      } else if (status === 'error') {
        message.error(`${info.file.name} 上传失败！`);
      }

      // setFileData(info.file);
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    },
    beforeUpload: file => {
      const isWord = file.name.includes('doc') || file.name.includes('docx');
      if (!isWord) {
        message.error(`${file.name} 不是一个word文件`);
      }
      return isWord || Upload.LIST_IGNORE;
    },
  };

  const handleUpload = () => {
    const formData = new FormData();
    // @ts-ignore
    formData.append('filename', fileName);
    setLoading(true);
    request(`/api/wordToPdf`, {
      method: "POST",
      headers: {
        ContentType: 'application/pdf',
      },
      data: formData,
      responseType: 'blob',

    }).then((response) => {

      if (response) {
        const blob = new Blob([response], {type: "application/pdf"});
        FileSaver.saveAs(blob, `${fileName}-${moment(new Date()).format('YYYY-MM-DD')}.pdf`);
      } else {
        message.error('转换失败');
      }

    }).finally(() => {
      setLoading(false);
      message.error('转换失败');
    })
  }

  return (
    <div className={s.content}>
      <Spin spinning={false}>
        <div>
          <Dragger {...props}>
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className={s.text}>单击或拖动文件到此区域上传</p>
            <p className={s.text}>
              严禁上传公司资料或其他非法文件（目前只支持上次doc，docx文件）
            </p>
          </Dragger>
        </div>

        <div className={s.btnWrap}>
          <Button onClick={handleUpload} loading={loading} type="primary">转换为PDF</Button>
        </div>
      </Spin>

    </div>
  );
}

export default About;
