import React, {useEffect, useState} from 'react';
import {Table, Popover, Button, Image} from 'antd';
import {getAlibabaList} from '../data/api';
import s from './index.less';
import moment from 'moment';


function AlibabaList() {

  const [dataSource, setDataSource] = useState([]);
  const columns = [
    {
      title: '商品目录',
      dataIndex: 'brief',
      ellipsis: true,
      align: 'center',

    },
    {
      title: '商品名称（中文）',
      dataIndex: 'title',
      // ellipsis: true,
      align: 'center',

      // render(text) {
      // return <div dangerouslySetInnerHTML={{__html: text}}></div>
      // }
    },
    {
      title: '主图',
      dataIndex: 'image',
      ellipsis: true,
      align: 'center',
      render(text) {
        let html = [];
        try {
          const obj = JSON.parse(text.replace('\\', ''));
          if (obj) {
            html.push(
              <div className={s.marginB8}>
                <Image
                  src={obj['imgUrlOf120x120']}
                  preview={{
                    src: obj['imgUrlOf290x290'],
                  }}
                />
              </div>
            )
          }
        } catch (e) {
          //
        }
        return html;
      }
    },

    {
      title: '追加主图',
      dataIndex: 'images',
      ellipsis: true,
      align: 'center',
      render(text) {
        // {
        //   "imageURI":"img/ibank/O1CN01KIWpcp2J2J8oXVXhH_!!2200733139363-0-cib.jpg",
        //   "summImageURI":"https://cbu01.alicdn.com/img/ibank/O1CN01KIWpcp2J2J8oXVXhH_!!2200733139363-0-cib.summ.jpg",
        //   "searchImageURI":"https://cbu01.alicdn.com/img/ibank/O1CN01KIWpcp2J2J8oXVXhH_!!2200733139363-0-cib.search.jpg",
        //   "fullPathImageURI":"https://cbu01.alicdn.com/img/ibank/O1CN01KIWpcp2J2J8oXVXhH_!!2200733139363-0-cib.jpg",
        //   "size220x220ImageURI":"https://cbu01.alicdn.com/img/ibank/O1CN01KIWpcp2J2J8oXVXhH_!!2200733139363-0-cib.220x220.jpg",
        //   "size310x310ImageURI":"https://cbu01.alicdn.com/img/ibank/O1CN01KIWpcp2J2J8oXVXhH_!!2200733139363-0-cib.310x310.jpg"
        // }
        let html = [];
        try {
          const obj = JSON.parse(text.replace('\\', ''));
          if (obj && Array.isArray(obj)) {
            obj.forEach((item) => {
              html.push(
                <Image
                  width={50}
                  src={item['summImageURI']}
                  preview={{
                    src: obj['size310x310ImageURI'],
                  }}
                />
              )
            })
          }
        } catch (e) {
          //
        }
        return (
          <Popover
            overlayClassName={s.detailImagesPopover} placement="left"
            content={
              <div className={s.detailImagesPopoverContent}>{html}</div>
            } title="追加主图列表" trigger="click"
          >
            <Button type="primary">点击查看列表</Button>
          </Popover>
        );
      }
    },

    {

      title: '属性图',
      dataIndex: 'detail_group',
      ellipsis: true,
      align: 'center',
      render(text) {
        let html = [];
        try {
          const obj = JSON.parse(text.replace('\\', ''));
          if (obj) {
            if (obj['颜色']) {
              obj['颜色'].forEach((item) => {
                html.push(
                  <div className={s.detailGroupRow}>
                    <b>{item.name}: </b>
                    <a target="_blank" href={item.imageUrl}>
                      <img className={s.detailGroupImg} src={item.imageUrl} alt={item.name}/>
                    </a>
                  </div>
                )
              })
            }
          }
        } catch (e) {
          //
        }
        return html;
      }
    },
    {
      title: '详情图',
      dataIndex: 'detail_images',
      align: 'center',
      render(text) {
        let html = [];
        try {
          const obj = JSON.parse(text.replace('\\', ''));
          if (obj && Array.isArray(obj)) {
            obj.forEach((item) => {
              html.push(
                <Image
                  width={50}
                  src={item}
                />
              )
            })
          }
        } catch (e) {
          //
        }

        return (
          <Popover overlayClassName={s.detailImagesPopover} placement="left"
                   content={
                     <div className={s.detailImagesPopoverContent}>{html}</div>
                   } title="详情图列表" trigger="click"
          >
            <Button type="primary">点击查看列表</Button>
          </Popover>
        )
      }
    },
    {
      title: '售价',
      dataIndex: 'price',
      ellipsis: true,
      align: 'center',
      width: 80,
    },
    {
      title: '运费',
      dataIndex: 'logistics_text',
      ellipsis: true,
      align: 'center',

    },
    {
      title: '属性',
      dataIndex: 'attribute',
      // align: 'center',
      render(text, record, index) {
        let html = [];
        try {
          const obj = JSON.parse(text.replace('\\', ''));
          if (obj) {
            if (obj['颜色']) {
              html.push(<div><b>颜色：</b>{obj['颜色']}</div>);
            }
            if (obj['尺寸']) {
              html.push(<div><b>尺寸：</b>{obj['尺寸']}</div>);
            }
          }
        } catch (e) {
          //
        }
        return html;
      }
    },
    {
      title: '重量',
      dataIndex: 'unitWeight',
      ellipsis: true,
      align: 'center',
      width: 80,

      render(text) {
        return text + 'kg'
      }
    },
    {
      title: '体积',
      dataIndex: 'attribute',
      ellipsis: true,
      align: 'center',
      render(text, record, index) {
        let html = '';
        try {
          const obj = JSON.parse(text.replace('\\', ''));
          if (obj) {
            html = obj['尺寸'];
          }
        } catch (e) {
          //
        }
        return html;
      }
    },
    {
      title: '详情分类',
      dataIndex: '',
      ellipsis: true,
      align: 'center',

    },
    {
      title: '库存',
      dataIndex: 'skuInfoMap',
      // ellipsis: true,
      // align: 'center',

      render(text) {
        if (text) {
          const desc = JSON.parse(text);
          const arr = Object.entries(desc).map(([title, content]) => {
            return (
              <div className={s.skuInfoMap}>
                <div><strong>{title.replace('&gt;', '')}:</strong></div>
                <div className={s.kuInfoContent}>
                  <span>价格-></span><span className={s.red}>{content.discountPrice}</span>
                  <br/>
                  <span>库存-></span><span className={s.green}>{content.canBookCount}</span>
                </div>
              </div>
            )
          })
          return arr;
        }
        return '';
      }
    },
    {
      title: '抓取日期',
      ellipsis: true,
      align: 'center',

      dataIndex: 'ctime',
      render(text) {
        // moment(text).format('YYYY-MM-DD HH:mm:ss')
        if (text) {
          return text.split('.')[0]
        }
        return '';
      }
    },
    {
      title: '出库时间',
      dataIndex: 'sendTime',
      ellipsis: true,
      align: 'center',

    },
    {
      title: '原产地',
      dataIndex: 'city',
      ellipsis: true,
      align: 'center',
      render(text) {
        return '中国'
      }
    },
    // {
    //   title: '本地储存功能',
    //   dataIndex: '',
    // },
    {
      title: '商品网址',
      dataIndex: 'detail_url',
      ellipsis: true,
      width: 80,
      align: 'center',
      render(text) {
        return <a target="_blank" href={text}>点击跳转详情</a>;
      }
    },
  ]


  useEffect(() => {
    getAlibabaList().then((response) => {
      setDataSource(response.result);
    })
  }, [])


  return (
    <div className={s.babawrapper}>
      <div className={s.wrapper}>
        <Table size="small" columns={columns} dataSource={dataSource}/>
      </div>
    </div>
  );
}

export default AlibabaList;
