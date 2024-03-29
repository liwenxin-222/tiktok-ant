﻿export default [
  // {
  //   path: '/user',
  //   layout: false,
  //   routes: [
  //     {
  //       name: 'login',
  //       path: '/user/login',
  //       component: './User/Login',
  //     },
  //     {
  //       component: './404',
  //     },
  //   ],
  // },
  // {
  //   path: '/admin',
  //   name: 'admin',
  //   icon: 'crown',
  //   access: 'canAdmin',
  //   routes: [
  //     {
  //       path: '/admin/sub-page',
  //       name: 'sub-page',
  //       icon: 'smile',
  //       component: './Welcome',
  //     },
  //     {
  //       component: './404',
  //     },
  //   ],
  // },
  // {
  //   name: 'list.table-list',
  //   icon: 'table',
  //   path: '/list',
  //   component: './TableList',
  // },
  // {
  //   path: '/',
  //   redirect: '/app',
  // },
  // {
  //   path: '/app',
  //   routes: [
  //     {
  //       path: '/welcome',
  //       name: 'welcome',
  //       icon: 'smile',
  //       component: './Welcome',
  //     },
  //     {
  //       name: 'douyin.title',
  //       icon: 'table',
  //       path: '/douyin-web',
  //       component: './DouyinWeb',
  //     },
  //     {
  //       name: 'about',
  //       path: '/about',
  //       icon: 'infoCircleOutlined',
  //       component: './About',
  //       // hideInMenu: true
  //     },
  //     {
  //       name: 'douyin.title.list',
  //       path: '/douyin-web/:targetId',
  //       component: './DouyinWeb/listDetail',
  //       hideInMenu: true
  //     },
  //     {
  //       name: 'douyin.title.detail',
  //       path: '/douyin-web-item/:targetUrl',
  //       component: './DouyinWeb/ItemDetail',
  //       hideInMenu: true
  //     },
  //
  //     {
  //       component: './404',
  //     },
  //   ]
  // },
  {
    path: '/',
    redirect: '/xunfeng-tiku',
  },
  {
    path: '/xunfeng-tiku',
    name: 'welcome',
    icon: 'smile',
    component: './XunFengTiKu',
  },
  // {
  //   path: '/',
  //   redirect: '/welcome',
  // },
  // {
  //   path: '/welcome',
  //   name: 'welcome',
  //   icon: 'smile',
  //   component: './Welcome',
  // },
  //
  // {
  //   name: 'douyin.title',
  //   icon: 'table',
  //   path: '/douyin-web',
  //   component: './DouyinWeb',
  // },
  // {
  //   name: 'word.title',
  //   icon: 'table',
  //   path: '/word-to-pdf',
  //   component: './WordToPdf',
  // },
  // {
  //   name: 'alibaba.title',
  //   icon: 'table',
  //   path: '/1688-list',
  //   component: './Alibaba/list'
  // },
  // {
  //   name: 'updateAlibaba.title',
  //   icon: 'table',
  //   path: '/update-1688-list',
  //   component: './UpdateAlibaba/list'
  // },
  // {
  //   name: 'test.title',
  //   icon: 'table',
  //   path: '/page-test',
  //   component: './TestPage'
  // },
  // {
  //   name: 'about',
  //   path: '/about',
  //   icon: 'infoCircleOutlined',
  //   component: './About',
  //   // hideInMenu: true
  // },
  // {
  //   name: 'douyin.title.list',
  //   path: '/douyin-web/:targetId',
  //   component: './DouyinWeb/listDetail',
  //   hideInMenu: true
  // },
  // {
  //   name: 'douyin.title.detail',
  //   path: '/douyin-web-item/:targetUrl',
  //   component: './DouyinWeb/ItemDetail',
  //   hideInMenu: true
  // },
  {
    component: './404',
  },
];
