// import axios from 'axios';
import { request } from '@umijs/max'

const errwin = /[\\\\/:*?\"<>|]/g;
const subwin = ``;
// 获取作品ID
export const GetID = function (dyurl) {
  // axios.get(`/douyin/getId?url=${dyurl}&v=${Date.now()}`, {
  //   headers: {
  //     'user-agent': ' Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1'
  //   }
  // })
  return new Promise((resolve, reject) => {
    try {
      request(`/api/getId?url=${dyurl}&v=${Date.now()}`, {method: "GET"}).then(function (response) {
        if (response.status === 200) {
          resolve(response.data);
        } else {
          resolve(response);
        }
      }).catch(function (error) {
        reject(error)
      })
    } catch (error) {
      console.log(error)
    }
  })
}

export const GetInfo = (item_ids) => {

  return new Promise((resolve, reject) => {
    request(`/api/getInfo?item_ids=${item_ids}&v=${Date.now()}`, {method: "GET"}).then(function (response) {
      console.log('item_ids ok', response)
      // console.log("response", response.data)
      if (response.status === 200) {
        resolve(response.data);
      } else {
        resolve(response);
      }
      // let {
      //   status_code,
      //   item_list
      // } = response.data
      // if (status_code === 0) {
      //   // 无水印视频链接
      //   let url = item_list[0].video.play_addr.url_list[0].replace(
      //       'playwm',
      //       'play'
      //   )
      //   // 转换成1080p
      //   url = url.replace('720p','1080p')
      //   console.log('1080p',url)
      //   // 视频文案
      //   let desc = item_list[0].desc;
      //   // 文案过滤非法字符
      //   desc.replace(errwin, subwin);
      //
      //   console.log('video play url', url)
      //   console.log('video desc', desc)
      //
      //   var data = ({
      //     url: url,
      //     desc: desc
      //   })
      //   resolve(data)
      // } else {
      //   reject(status_code)
      // }
    })
    .catch(function (error) {
      console.log(error)
      reject(error)
    })
  })
}


export const GetSnssdkInfo = ({url}) => {

  return new Promise((resolve, reject) => {
    request(`/api/getSnssdkInfo?url=${url}&v=${Date.now()}`, {method: "GET"}).then(function (response) {
      // console.log("response", response.data)
      if (response.status === 200) {
        resolve(response.data);
      } else {
        resolve(response);
      }
    })
    .catch(function (error) {
      console.log(error)
      reject(error)
    })
  })
}



//获取所有作品信息
export function getAllInfo ({sec_uid, count}) {
  // alert('进入getAllInfo')
  return new Promise((resolve, reject) => {
    request(`/api/getAll?sec_uid=${sec_uid}&count=${count}&v=${Date.now()}`, {method: "GET"}).then(function (response) {
      // console.log("response", response.data)
      if (response.status === 200) {
        resolve(response.data);
      } else {
        resolve(response);
      }
    })
    .catch(function (error) {
      console.log(error)
      reject(error)
    })
  })

}
