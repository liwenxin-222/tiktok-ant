import { Settings as LayoutSettings } from '@ant-design/pro-components';

const Settings: LayoutSettings & {
  pwa?: boolean;
  logo?: string;
} = {
  navTheme: 'light',
  // 拂晓蓝
  primaryColor: '#1890ff',
  layout: 'mix',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixSiderbar: true,
  colorWeak: false,
  title: '巽分堂大课堂',
  pwa: false,
  logo: '/img/WeChat558145f27aef0fdd001e0d0fb195dae4.png',
  iconfontUrl: '',
  menuRender: false,
  headerRender: false,
  footerRender: false, //不显示脚
};

export default Settings;
