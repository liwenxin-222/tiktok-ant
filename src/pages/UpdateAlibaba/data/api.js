import {request} from '@umijs/max'

export const getAlibabaList = () => {

  return new Promise((resolve, reject) => {

    request(`/api/getUpdate1688List`, {
      method: "GET",
    }).then(function (response) {
      console.log("response", response)
      if (response.code === 0) {
        resolve(response);
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


export const getCoupangHotWord = () => {
  return new Promise((resolve, reject) => {

    request(`/api/getCoupangHotWord?v=${Date.now()}`, {
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

export const putRemoveBg = (params) => {
  return new Promise((resolve, reject) => {

    request(`/api/remove-bg?v=${Date.now()}`, {
      method: "POST",
      data: params
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
