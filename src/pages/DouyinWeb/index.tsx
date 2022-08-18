import React, {FC, useState} from 'react';
import {Button, Input} from 'antd';
import {GetID} from './data/api';
import { history } from 'umi';

import s from "./index.less";


const DouyinWeb: FC = () => {
  const [targetUrl, setTargetUrl] = useState('https://www.douyin.com/user/MS4wLjABAAAAswO76n1ozrgfn4YMBI4Oq9SWEJTRgajkn0XlzVjxQv9DYJuuETiLoFcUWYLlsqFd?showTab=post');
  // const [videoSrc, setVideoSrc] = useState('https://aweme.snssdk.com/aweme/v1/play/?video_id=v0d00fg10000c9cl7urc77u2m0q2l0gg&ratio=1080p&line=0');
  // const [targetUrl, setTargetUrl] = useState('');


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {value: inputValue} = e.target;
    setTargetUrl(inputValue);
  }

  // @ts-ignore
  const handleSubmit = () => {

    if (!targetUrl) {
      alert("空链接");
      return 0;
    }
    const regexp: RegExp = /((http|https):\/\/([\w\-]+\.)+[\w\-]+(\/[\w\u4e00-\u9fa5\-\.\/?\@\%\!\&=\+\~\:\#\;\,]*)?)/ig;
    // let urlReg = /(http:\/\/|https:\/\/)((\w|=|\?|\.|\/|&|-)+)/g //第二种
    const this_url = targetUrl.match(regexp)
    if (!this_url) {
      alert('请填写正确分享链接或内容');
      return 0;
    }

    GetID(targetUrl).then((response: any) => {

      if (response.code === 0) {
        history.push(`/douyin-web-item/${response.data}`);
      }
    }, () => {});

  }
  //下载作品
  // const handleDowload = () => {
  //
  //   const url = `/douyin/media?url=${videoSrc}&v=${Date.now()}`;
  //   const title = Date.now();
  //   alert('进入getVideo')
  //   const xhr = new XMLHttpRequest();
  //   xhr.open('GET', url, true);
  //   xhr.setRequestHeader("User-Agent", "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1 Edg/92.0.4515.107");
  //   xhr.responseType = 'blob';
  //   xhr.onload = function (e) {
  //     //如果请求执行成功
  //     if (this.status == 200) {
  //       const blob = this.response;
  //       const filename = 'C:\\Users' + title + '.mp4';
  //       const a = document.createElement('a');
  //       blob.type = "application/octet-stream";
  //       //创键临时url
  //       const url = URL.createObjectURL(blob);
  //       a.href = url;
  //       a.download = filename;
  //       a.click();
  //       //释放URL对象
  //       window.URL.revokeObjectURL(url);
  //     }
  //   };
  //   xhr.send();
  // }

  //获取所有作品信息
  // @ts-ignore
  const handleGetAll = () => {

    if (!targetUrl) {
      alert("空链接");
      return 0;
    }
    const regexp: RegExp = /((http|https):\/\/([\w\-]+\.)+[\w\-]+(\/[\w\u4e00-\u9fa5\-\.\/?\@\%\!\&=\+\~\:\#\;\,]*)?)/ig;
    // let urlReg = /(http:\/\/|https:\/\/)((\w|=|\?|\.|\/|&|-)+)/g //第二种
    const this_url = targetUrl.match(regexp)
    if (!this_url) {
      alert('请填写正确分享链接或内容');
      return 0;
    }
    if (!targetUrl.includes('/user/')) {
      alert('请填写正确分享链接或内容');
      return 0;
    }
    // @ts-ignore
    const sec_uid = /\/user\/([\w-]*)/.exec(targetUrl)[1];


    history.push(`/douyin-web/${sec_uid}`);

  }

  // @ts-ignore
  // @ts-ignore
  // @ts-ignore
  return (
    <div className={s.app}>
      <div className={s.containers}>
        <div className={s.title}>tiktok tool</div>
        <div>请输入视频链接</div>
        <div><p>获取视频需输入当前播放，获取所有视频需数据主页地址</p></div>
        <div className={s.input}>
          <Input value={targetUrl} onChange={handleChange} placeholder="请输入视频链接"/>
        </div>
        <div className={s.btnWrapper}>
          <Button className={s.btn} type="primary" onClick={handleSubmit}>获取视频</Button>
          {/*<Button className={s.btn} type="primary" onClick={handleDowload}>下载视频</Button>*/}
          <Button className={s.btn} type="primary" onClick={handleGetAll}>获取所有视频</Button>
        </div>

      </div>
    </div>
  )

};

export default DouyinWeb;
