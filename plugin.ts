// ${projectRoot}/plugin.ts

// @ts-ignore
import {IApi} from 'https://github.com/umijs/umi';

export default (api: IApi) => {
  api.modifyHTML(($) => {
    $('head').append([
      `<meta http-equiv="X-UA-Compatible" content="IE=edge"/>`,
      `<meta name="viewport" content="width=device-width, initial-scale=1.0"/>`,
      `<meta name="referrer" content="never"/>`,
      // `<meta name="description" content="download video without water mesk"/>`,
      `<meta name="keywords" content="word转换成pdf转换器,word转换成pdf,在线word转pdf,word转pdf免费" />`,
      `<meta name="description" content="word转换成pdf转换器为广大用户提供在线word转pdf、word转pdf免费等服务，让你轻松畅游在不同版本word转换pdf中。" />`,
      `<meta name="keywords" content="抖音小工具,抖音视频下载,抖音视频排序" />`,
      `<meta name="description" content="抖音视频下载，抖音视频列表排序" />`
    ])
    return $;
  });
};
