// ${projectRoot}/plugin.ts

// @ts-ignore
import {IApi} from 'https://github.com/umijs/umi';

export default (api: IApi) => {
  api.modifyHTML(($) => {
    $('head').append([
      `<meta http-equiv="X-UA-Compatible" content="IE=edge"/>`,
      `<meta name="viewport" content="width=device-width, initial-scale=1.0"/>`,
      `<meta name="referrer" content="never"/>`,
      `<meta name="description" content="download video without water mesk"/>`,
    ])
    return $;
  });
};
