import { request } from '@umijs/max'

export const getAlibabaList = () => {

  return new Promise((resolve, reject) => {
    request(`/alibaba/test/api?v=${Date.now()}`, {
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
