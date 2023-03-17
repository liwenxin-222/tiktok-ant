import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Input, Affix, List} from 'antd';
import debounce from 'lodash.debounce'


export default function XunFengTiKu() {

  const [list, setList] = useState([]);
  const [v, setV] = useState('');
  const [curList, setCurList] = useState([]);

  useEffect(() => {
    axios.get(`https://liwenxin-oss.oss-cn-beijing.aliyuncs.com/mp.json?v=${Date.now()}`).then((res) => {
      if (res.status === 200 && res.data) {
       setList(res.data.map((item, index) => {
         return {
           ...item,
           id: index
         }
       }));
      }
    })
  }, [])

  const handleChange = (e) => {
    const v = e.target.value;
    console.log(e, v)
    setV(v);
    if (!v) {
      setCurList([]);
      return;
    }

    debounce(function (){
      const filterList = list.filter((item) => {
        console.log(item)
        return item.title.includes(v);
      })

      setCurList(filterList);
    }, 300)();

  }

  const renderItem = (item, ...o) => {
    console.log(o, item)
    const startIndex = item.title.indexOf(v);

    const title = item.title.replace(v, `<b style="color: red">${v}</b>`)

    return (
      <List.Item>
        <div
          key={item.id}
          style={{
            padding: '0 8px',
          }}>
          <div dangerouslySetInnerHTML={{__html: `${item.id + 1}. ${title}<br/>`}}/>
          <div>答案：<b style={{color: 'green'}}>{item.anwser}</b></div>
        </div>
      </List.Item>

    )
  }

  console.log(v)
  return (
    <div>
      <Affix>
        <div>
          <Input
            value={v}
            onChange={handleChange}
            allowClear={true}
            placeholder="请输入关键词，不少于2个字"
            // minLength={2}
            onClick={() => {
              setV('')
            }}
          />
        </div>
      </Affix>
      <div style={{paddingTop: 12}}>
        {
          curList.length > 0 ? (
            <List
              style={{height: '100%', paddingTop: 12}}
              size="small"
              bordered={true}
              dataSource={curList}
              renderItem={renderItem}
            />

          ) : (
            <div>
              <div style={{textAlign: "center"}}>暂无结果，联系管理添加</div>
              <img
                width={"100%"}
                src="https://liwenxin-oss.oss-cn-beijing.aliyuncs.com/ac.jpg"
                showMenuByLongpress={true}
                mode="widthFix"
                alt=""/>
            </div>
          )
        }
      </div>

    </div>
  )
}

