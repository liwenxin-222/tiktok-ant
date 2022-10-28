import React, {useEffect, useState} from 'react';
import {Table} from 'antd';
import {getAlibabaList} from '../data/api';


function AlibabaList() {

  const [dataSource, setDataSource] = useState([]);
  const columns = [
    {
      title: '商品目录',
      dataIndex: 'brief',
    },
    {
      title: '商品名称（中文）',
      dataIndex: 'subject',
      render(text) {
        return <div dangerouslySetInnerHTML={{__html: text}}></div>
      }
    },
    {
      title: '主图',
      dataIndex: 'imgUrl',
      render(text) {
        // const url = JSON.parse(text);
        // return <img src={url.imgUrl} alt=""/>
      }
    },

    {
      title: '追加主图',
      dataIndex: '',
    },

    {
      title: '属性图',
      dataIndex: '',
    },
    {
      title: '详情图',
      dataIndex: '',
    },
    {
      title: '售价',
      dataIndex: 'caigouPriceYuan',
    },
    {
      title: '运费',
      dataIndex: '',
    },
    {
      title: '属性',
      dataIndex: '',
    },
    {
      title: '重量',
      dataIndex: '',
    },
    {
      title: '体积',
      dataIndex: '',
    },
    {
      title: '详情分类',
      dataIndex: '',
    },
    {
      title: '库存',
      dataIndex: '',
    },
    {
      title: '抓取日期',
      dataIndex: '',
    },
    {
      title: '出库时间',
      dataIndex: 'sendTime',
    },
    {
      title: '原产地',
      dataIndex: 'city',
    },
    {
      title: '本地储存功能',
      dataIndex: '',
    },
    {
      title: '商品网址',
      dataIndex: 'detailUrl',
      render(text) {
        return <a href={text}>详情</a>;
      }
    },
  ]


  useEffect(() => {
    getAlibabaList().then((response) => {
      console.log(response, 88888)
      setDataSource(response);
    })
  }, [])


  return (
    <Table size="small" columns={columns} dataSource={dataSource}/>
  );
}

export default AlibabaList;
