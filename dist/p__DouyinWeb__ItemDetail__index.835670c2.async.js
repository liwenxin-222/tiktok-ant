"use strict";(self.webpackChunktiktok_ant=self.webpackChunktiktok_ant||[]).push([[909],{35281:function(x,r,a){a.d(r,{Cw:function(){return D},EO:function(){return l},TM:function(){return u}});var s=a(59841),I=/[\\\\/:*?\"<>|]/g,m="",D=function(_){return new Promise(function(e,o){try{(0,s.request)("/api/getId?url=".concat(_,"&v=").concat(Date.now()),{method:"GET"}).then(function(n){n.status===200?e(n.data):e(n)}).catch(function(n){o(n)})}catch(n){console.log(n)}})},u=function(_){return new Promise(function(e,o){(0,s.request)("/api/getInfo?item_ids=".concat(_,"&v=").concat(Date.now()),{method:"GET"}).then(function(n){console.log("item_ids ok",n),n.status===200?e(n.data):e(n)}).catch(function(n){console.log(n),o(n)})})},M=function(_){var e=_.url;return new Promise(function(o,n){request("/api/getSnssdkInfo?url=".concat(e,"&v=").concat(Date.now()),{method:"GET"}).then(function(t){t.status===200?o(t.data):o(t)}).catch(function(t){console.log(t),n(t)})})};function l(i){var _=i.sec_uid,e=i.count;return new Promise(function(o,n){(0,s.request)("/api/getAll?sec_uid=".concat(_,"&count=").concat(e,"&v=").concat(Date.now()),{method:"GET"}).then(function(t){t.status===200?o(t.data):o(t)}).catch(function(t){console.log(t),n(t)})})}},45807:function(x,r,a){a.r(r);var s=a(42122),I=a.n(s),m=a(27424),D=a.n(m),u=a(67294),M=a(19650),l=a(7229),i=a(59841),_=a(35281),e=a(22263),o=a(58812),n=a(75491),t=a(85893),P=function(d){var E=d.icon,f=d.text;return(0,t.jsxs)(M.Z,{children:[u.createElement(E),f]})},g=function(){var d=(0,u.useState)(null),E=D()(d,2),f=E[0],O=E[1],j=(0,i.useParams)(),A=function(){var c=j.targetUrl;(0,_.TM)(c).then(function(h){if(h.code===0){var T=h.data.item_list,v=T[0].video.play_addr.url_list[0].replace("playwm","play");v=v.replace("720p","1080p"),O(I()({url:v},T[0]))}})};return(0,u.useEffect)(function(){return A(),function(){O(null)}},[]),(0,t.jsx)("div",{children:(0,t.jsx)(l.ZP,{itemLayout:"vertical",size:"large",dataSource:f?[f]:[],renderItem:function(c){return(0,t.jsx)(l.ZP.Item,{actions:[(0,t.jsx)(P,{icon:e.Z,text:c.statistics.digg_count},1),(0,t.jsx)(P,{icon:o.Z,text:c.statistics.comment_count},2),(0,t.jsx)(P,{icon:n.Z,text:c.statistics.share_count},3)],extra:c.url?(0,t.jsx)("video",{autoPlay:!0,width:"500",controls:!0,children:(0,t.jsx)("source",{src:c.url,type:"video/mp4"})}):null,children:(0,t.jsx)(l.ZP.Item.Meta,{title:c.desc})},c.desc)}})})};r.default=g}}]);
