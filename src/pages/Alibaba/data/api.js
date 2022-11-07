import { request } from '@umijs/max'

export const getAlibabaList = () => {

  return new Promise((resolve, reject) => {

    request(`/test/api?key_word=%E5%8A%A0%E6%B9%BF%E5%99%A8&size=1&v=${Date.now()}`, {
      method: "GET",
    }).then(function (response) {
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
