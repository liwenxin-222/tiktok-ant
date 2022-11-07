import React, {useEffect, useState} from 'react';
import {Table} from 'antd';
import {getAlibabaList} from '../data/api';
import s from './index.less';
import moment from 'moment';


function AlibabaList() {

  const [dataSource, setDataSource] = useState([]);
  const columns = [
    {
      title: '商品目录',
      dataIndex: 'brief',
      ellipsis: true
    },
    {
      title: '商品名称（中文）',
      dataIndex: 'title',
      ellipsis: true

      // render(text) {
      // return <div dangerouslySetInnerHTML={{__html: text}}></div>
      // }
    },
    {
      title: '主图',
      dataIndex: 'imgUrl',
      ellipsis: true,

      render(text) {
        // const url = JSON.parse(text);
        // return <img src={url.imgUrl} alt=""/>
        return '';
      }
    },

    {
      title: '追加主图',
      dataIndex: '',
      ellipsis: true,

    },

    {

      title: '属性图',
      dataIndex: '',
      ellipsis: true,

    },
    {
      title: '详情图',
      dataIndex: '',
      ellipsis: true,

    },
    {
      title: '售价',
      dataIndex: 'price',
      ellipsis: true,

    },
    {
      title: '运费',
      dataIndex: 'logistics_text',
      ellipsis: true,

    },
    {
      title: '属性',
      dataIndex: 'attribute',
      ellipsis: true,

    },
    {
      title: '重量',
      dataIndex: 'unitWeight',
      ellipsis: true,

      render(text) {
        return text + 'kg'
      }
    },
    {
      title: '体积',
      dataIndex: '',
      ellipsis: true,

    },
    {
      title: '详情分类',
      dataIndex: '',
      ellipsis: true,

    },
    {
      title: '库存',
      dataIndex: 'skuInfoMap',
      // ellipsis: true,

      render(text) {
        console.log(text)
        if (text) {
          const desc = JSON.parse(text);
          const arr = Object.entries(desc).map(([title, content]) => {
            return (
              <div className={s.skuInfoMap}>
                <span>{title.replace('&gt;', '')}:</span>
                <span>
                  <span>价格-></span><span className={s.red}>{content.discountPrice}</span>
                  <br/>
                  <span>库存-></span><span className={s.green}>{content.canBookCount}</span>
                </span>
              </div>
            )
          })
          console.log(arr);
          return  arr;
        }
        return '';
      }
    },
    {
      title: '抓取日期',
      ellipsis: true,

      dataIndex: 'ctime',
      render(text){
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

    },
    {
      title: '原产地',
      dataIndex: 'city',
      ellipsis: true,

    },
    // {
    //   title: '本地储存功能',
    //   dataIndex: '',
    // },
    {
      title: '商品网址',
      dataIndex: 'detailUrl',
      ellipsis: true,

      render(text) {
        return <a href={text}>详情</a>;
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
