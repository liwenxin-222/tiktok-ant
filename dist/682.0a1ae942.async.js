(self.webpackChunktiktok_ant=self.webpackChunktiktok_ant||[]).push([[682],{7682:function(le,he,v){"use strict";v.d(he,{Z:function(){return Jt}});var D=v(87462),f=v(4942),X=v(94184),R=v.n(X),o=v(67294),Z=v(53124),W=v(65223),de=function(r){var a,n=(0,o.useContext)(Z.E_),t=n.getPrefixCls,i=n.direction,u=r.prefixCls,l=r.className,c=l===void 0?"":l,s=t("input-group",u),x=R()(s,(a={},(0,f.Z)(a,"".concat(s,"-lg"),r.size==="large"),(0,f.Z)(a,"".concat(s,"-sm"),r.size==="small"),(0,f.Z)(a,"".concat(s,"-compact"),r.compact),(0,f.Z)(a,"".concat(s,"-rtl"),i==="rtl"),a),c),d=(0,o.useContext)(W.aM),S=(0,o.useMemo)(function(){return(0,D.Z)((0,D.Z)({},d),{isFormItemInput:!1})},[d]);return o.createElement("span",{className:x,style:r.style,onMouseEnter:r.onMouseEnter,onMouseLeave:r.onMouseLeave,onFocus:r.onFocus,onBlur:r.onBlur},o.createElement(W.aM.Provider,{value:S},r.children))},ae=de,be=v(71002),De=v(43061),Qe=v(21448),me=v.n(Qe);function ye(e){return!!(e.addonBefore||e.addonAfter)}function Me(e){return!!(e.prefix||e.suffix||e.allowClear)}function Be(e,r,a,n){if(!!a){var t=r;if(r.type==="click"){var i=e.cloneNode(!0);t=Object.create(r,{target:{value:i},currentTarget:{value:i}}),i.value="",a(t);return}if(n!==void 0){t=Object.create(r,{target:{value:e},currentTarget:{value:e}}),e.value=n,a(t);return}a(t)}}function Xe(e,r){if(!!e){e.focus(r);var a=r||{},n=a.cursor;if(n){var t=e.value.length;switch(n){case"start":e.setSelectionRange(0,0);break;case"end":e.setSelectionRange(t,t);break;default:e.setSelectionRange(0,t)}}}}function Ve(e){return typeof e>"u"||e===null?"":String(e)}var Je=function(r){var a=r.inputElement,n=r.prefixCls,t=r.prefix,i=r.suffix,u=r.addonBefore,l=r.addonAfter,c=r.className,s=r.style,x=r.affixWrapperClassName,d=r.groupClassName,S=r.wrapperClassName,p=r.disabled,E=r.readOnly,g=r.focused,h=r.triggerFocus,m=r.allowClear,z=r.value,A=r.handleReset,F=r.hidden,j=(0,o.useRef)(null),b=function(O){var U;!((U=j.current)===null||U===void 0)&&U.contains(O.target)&&(h==null||h())},P=function(){var O;if(!m)return null;var U=!p&&!E&&z,Y="".concat(n,"-clear-icon"),w=(0,be.Z)(m)==="object"&&(m==null?void 0:m.clearIcon)?m.clearIcon:"\u2716";return o.createElement("span",{onClick:A,onMouseDown:function(K){return K.preventDefault()},className:me()(Y,(O={},(0,f.Z)(O,"".concat(Y,"-hidden"),!U),(0,f.Z)(O,"".concat(Y,"-has-suffix"),!!i),O)),role:"button",tabIndex:-1},w)},$=(0,o.cloneElement)(a,{value:z,hidden:F});if(Me(r)){var M,H="".concat(n,"-affix-wrapper"),J=me()(H,(M={},(0,f.Z)(M,"".concat(H,"-disabled"),p),(0,f.Z)(M,"".concat(H,"-focused"),g),(0,f.Z)(M,"".concat(H,"-readonly"),E),(0,f.Z)(M,"".concat(H,"-input-with-clear-btn"),i&&m&&z),M),!ye(r)&&c,x),T=(i||m)&&o.createElement("span",{className:"".concat(n,"-suffix")},P(),i);$=o.createElement("span",{className:J,style:s,hidden:!ye(r)&&F,onMouseDown:b,ref:j},t&&o.createElement("span",{className:"".concat(n,"-prefix")},t),(0,o.cloneElement)(a,{style:null,value:z,hidden:null}),T)}if(ye(r)){var k="".concat(n,"-group"),V="".concat(k,"-addon"),ie=me()("".concat(n,"-wrapper"),k,S),q=me()("".concat(n,"-group-wrapper"),c,d);return o.createElement("span",{className:q,style:s,hidden:F},o.createElement("span",{className:ie},u&&o.createElement("span",{className:V},u),(0,o.cloneElement)($,{style:null,hidden:null}),l&&o.createElement("span",{className:V},l)))}return $},_e=Je,xe=v(93433),te=v(1413),ne=v(29439),qe=v(44925);function et(e,r){var a=(0,te.Z)({},e);return Array.isArray(r)&&r.forEach(function(n){delete a[n]}),a}function je(e){var r=o.useRef();r.current=e;var a=o.useCallback(function(){for(var n,t=arguments.length,i=new Array(t),u=0;u<t;u++)i[u]=arguments[u];return(n=r.current)===null||n===void 0?void 0:n.call.apply(n,[r].concat(i))},[]);return a}function tt(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}var Ze=tt()?o.useLayoutEffect:o.useEffect,nt=Ze,at=function(r,a){var n=o.useRef(!0);Ze(function(){if(!n.current)return r()},a),Ze(function(){return n.current=!1,function(){n.current=!0}},[])};function rt(e){var r=o.useRef(!1),a=o.useState(e),n=(0,ne.Z)(a,2),t=n[0],i=n[1];o.useEffect(function(){return r.current=!1,function(){r.current=!0}},[]);function u(l,c){c&&r.current||i(l)}return[t,u]}var re;(function(e){e[e.INNER=0]="INNER",e[e.PROP=1]="PROP"})(re||(re={}));function ze(e){return e!==void 0}function ot(e,r){var a=r||{},n=a.defaultValue,t=a.value,i=a.onChange,u=a.postState,l=rt(function(){var h=void 0,m;return ze(t)?(h=t,m=re.PROP):ze(n)?(h=typeof n=="function"?n():n,m=re.PROP):(h=typeof e=="function"?e():e,m=re.INNER),[h,m,h]}),c=(0,ne.Z)(l,2),s=c[0],x=c[1],d=ze(t)?t:s[0],S=u?u(d):d;at(function(){x(function(h){var m=(0,ne.Z)(h,1),z=m[0];return[t,re.PROP,z]})},[t]);var p=o.useRef(),E=je(function(h,m){x(function(z){var A=(0,ne.Z)(z,3),F=A[0],j=A[1],b=A[2],P=typeof h=="function"?h(F):h;if(P===F)return z;var $=j===re.INNER&&p.current!==b?b:F;return[P,re.INNER,$]},m)}),g=je(i);return nt(function(){var h=(0,ne.Z)(s,3),m=h[0],z=h[1],A=h[2];m!==A&&z===re.INNER&&(g(m,A),p.current=A)},[s]),[S,E]}var it=["autoComplete","onChange","onFocus","onBlur","onPressEnter","onKeyDown","prefixCls","disabled","htmlSize","className","maxLength","suffix","showCount","type","inputClassName"],ut=(0,o.forwardRef)(function(e,r){var a=e.autoComplete,n=e.onChange,t=e.onFocus,i=e.onBlur,u=e.onPressEnter,l=e.onKeyDown,c=e.prefixCls,s=c===void 0?"rc-input":c,x=e.disabled,d=e.htmlSize,S=e.className,p=e.maxLength,E=e.suffix,g=e.showCount,h=e.type,m=h===void 0?"text":h,z=e.inputClassName,A=(0,qe.Z)(e,it),F=ot(e.defaultValue,{value:e.value}),j=(0,ne.Z)(F,2),b=j[0],P=j[1],$=(0,o.useState)(!1),M=(0,ne.Z)($,2),H=M[0],J=M[1],T=(0,o.useRef)(null),k=function(C){T.current&&Xe(T.current,C)};(0,o.useImperativeHandle)(r,function(){return{focus:k,blur:function(){var C;(C=T.current)===null||C===void 0||C.blur()},setSelectionRange:function(C,K,y){var N;(N=T.current)===null||N===void 0||N.setSelectionRange(C,K,y)},select:function(){var C;(C=T.current)===null||C===void 0||C.select()},input:T.current}}),(0,o.useEffect)(function(){J(function(w){return w&&x?!1:w})},[x]);var V=function(C){e.value===void 0&&P(C.target.value),T.current&&Be(T.current,C,n)},ie=function(C){u&&C.key==="Enter"&&u(C),l==null||l(C)},q=function(C){J(!0),t==null||t(C)},L=function(C){J(!1),i==null||i(C)},O=function(C){P(""),k(),T.current&&Be(T.current,C,n)},U=function(){var C=et(e,["prefixCls","onPressEnter","addonBefore","addonAfter","prefix","suffix","allowClear","defaultValue","showCount","affixWrapperClassName","groupClassName","inputClassName","wrapperClassName","htmlSize"]);return o.createElement("input",(0,te.Z)((0,te.Z)({autoComplete:a},C),{},{onChange:V,onFocus:q,onBlur:L,onKeyDown:ie,className:me()(s,(0,f.Z)({},"".concat(s,"-disabled"),x),z,!ye(e)&&!Me(e)&&S),ref:T,size:d,type:m}))},Y=function(){var C=Number(p)>0;if(E||g){var K=(0,xe.Z)(Ve(b)).length,y=(0,be.Z)(g)==="object"?g.formatter({count:K,maxLength:p}):"".concat(K).concat(C?" / ".concat(p):"");return o.createElement(o.Fragment,null,!!g&&o.createElement("span",{className:me()("".concat(s,"-show-count-suffix"),(0,f.Z)({},"".concat(s,"-show-count-has-suffix"),!!E))},y),E)}return null};return o.createElement(_e,(0,te.Z)((0,te.Z)({},A),{},{prefixCls:s,className:S,inputElement:U(),handleReset:O,value:Ve(b),focused:H,triggerFocus:k,suffix:Y(),disabled:x}))}),lt=ut,st=lt,$e=v(42550),Le=v(98866),Ae=v(97647),oe=v(9708);function ct(e){return!!(e.prefix||e.suffix||e.allowClear)}var ft=function(e,r){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)r.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(a[n[t]]=e[n[t]]);return a};function dt(e){return typeof e>"u"||e===null?"":String(e)}function Ne(e,r,a,n){if(!!a){var t=r;if(r.type==="click"){var i=e.cloneNode(!0);t=Object.create(r,{target:{value:i},currentTarget:{value:i}}),i.value="",a(t);return}if(n!==void 0){t=Object.create(r,{target:{value:e},currentTarget:{value:e}}),e.value=n,a(t);return}a(t)}}function vt(e,r){if(!!e){e.focus(r);var a=r||{},n=a.cursor;if(n){var t=e.value.length;switch(n){case"start":e.setSelectionRange(0,0);break;case"end":e.setSelectionRange(t,t);break;default:e.setSelectionRange(0,t)}}}}var mt=(0,o.forwardRef)(function(e,r){var a,n,t,i=e.prefixCls,u=e.bordered,l=u===void 0?!0:u,c=e.status,s=e.size,x=e.disabled,d=e.onBlur,S=e.onFocus,p=e.suffix,E=e.allowClear,g=e.addonAfter,h=e.addonBefore,m=ft(e,["prefixCls","bordered","status","size","disabled","onBlur","onFocus","suffix","allowClear","addonAfter","addonBefore"]),z=o.useContext(Z.E_),A=z.getPrefixCls,F=z.direction,j=z.input,b=A("input",i),P=(0,o.useRef)(null),$=o.useContext(Ae.Z),M=s||$,H=o.useContext(Le.Z),J=x||H,T=(0,o.useContext)(W.aM),k=T.status,V=T.hasFeedback,ie=T.feedbackIcon,q=(0,oe.F)(k,c),L=ct(e)||!!V,O=(0,o.useRef)(L);(0,o.useEffect)(function(){var N;L&&O.current,O.current=L},[L]);var U=(0,o.useRef)([]),Y=function(){U.current.push(window.setTimeout(function(){var G,ve,ce,ge;((G=P.current)===null||G===void 0?void 0:G.input)&&((ve=P.current)===null||ve===void 0?void 0:ve.input.getAttribute("type"))==="password"&&((ce=P.current)===null||ce===void 0?void 0:ce.input.hasAttribute("value"))&&((ge=P.current)===null||ge===void 0||ge.input.removeAttribute("value"))}))};(0,o.useEffect)(function(){return Y(),function(){return U.current.forEach(function(N){return window.clearTimeout(N)})}},[]);var w=function(G){Y(),d==null||d(G)},C=function(G){Y(),S==null||S(G)},K=(V||p)&&o.createElement(o.Fragment,null,p,V&&ie),y;return(0,be.Z)(E)==="object"&&(E==null?void 0:E.clearIcon)?y=E:E&&(y={clearIcon:o.createElement(De.Z,null)}),o.createElement(st,(0,D.Z)({ref:(0,$e.sQ)(r,P),prefixCls:b,autoComplete:j==null?void 0:j.autoComplete},m,{disabled:J||void 0,onBlur:w,onFocus:C,suffix:K,allowClear:y,addonAfter:g&&o.createElement(W.Ux,{override:!0,status:!0},g),addonBefore:h&&o.createElement(W.Ux,{override:!0,status:!0},h),inputClassName:R()((a={},(0,f.Z)(a,"".concat(b,"-sm"),M==="small"),(0,f.Z)(a,"".concat(b,"-lg"),M==="large"),(0,f.Z)(a,"".concat(b,"-rtl"),F==="rtl"),(0,f.Z)(a,"".concat(b,"-borderless"),!l),a),!L&&(0,oe.Z)(b,q)),affixWrapperClassName:R()((n={},(0,f.Z)(n,"".concat(b,"-affix-wrapper-sm"),M==="small"),(0,f.Z)(n,"".concat(b,"-affix-wrapper-lg"),M==="large"),(0,f.Z)(n,"".concat(b,"-affix-wrapper-rtl"),F==="rtl"),(0,f.Z)(n,"".concat(b,"-affix-wrapper-borderless"),!l),n),(0,oe.Z)("".concat(b,"-affix-wrapper"),q,V)),wrapperClassName:R()((0,f.Z)({},"".concat(b,"-group-rtl"),F==="rtl")),groupClassName:R()((t={},(0,f.Z)(t,"".concat(b,"-group-wrapper-sm"),M==="small"),(0,f.Z)(t,"".concat(b,"-group-wrapper-lg"),M==="large"),(0,f.Z)(t,"".concat(b,"-group-wrapper-rtl"),F==="rtl"),t),(0,oe.Z)("".concat(b,"-group-wrapper"),q,V))}))}),Re=mt,ht={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z"}},{tag:"path",attrs:{d:"M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z"}}]},name:"eye-invisible",theme:"outlined"},xt=ht,pt=v(30076),Ke=function(r,a){return o.createElement(pt.Z,(0,te.Z)((0,te.Z)({},r),{},{ref:a,icon:xt}))};Ke.displayName="EyeInvisibleOutlined";var gt=o.forwardRef(Ke),Ct=v(95357),ke=v(98423),bt=function(e,r){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)r.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(a[n[t]]=e[n[t]]);return a},yt={click:"onClick",hover:"onMouseOver"},Ge=o.forwardRef(function(e,r){var a=(0,o.useState)(!1),n=(0,ne.Z)(a,2),t=n[0],i=n[1],u=function(){var x=e.disabled;x||i(!t)},l=function(x){var d,S=e.action,p=e.iconRender,E=p===void 0?function(){return null}:p,g=yt[S]||"",h=E(t),m=(d={},(0,f.Z)(d,g,u),(0,f.Z)(d,"className","".concat(x,"-icon")),(0,f.Z)(d,"key","passwordIcon"),(0,f.Z)(d,"onMouseDown",function(A){A.preventDefault()}),(0,f.Z)(d,"onMouseUp",function(A){A.preventDefault()}),d);return o.cloneElement(o.isValidElement(h)?h:o.createElement("span",null,h),m)},c=function(x){var d=x.getPrefixCls,S=e.className,p=e.prefixCls,E=e.inputPrefixCls,g=e.size,h=e.visibilityToggle,m=bt(e,["className","prefixCls","inputPrefixCls","size","visibilityToggle"]),z=d("input",E),A=d("input-password",p),F=h&&l(A),j=R()(A,S,(0,f.Z)({},"".concat(A,"-").concat(g),!!g)),b=(0,D.Z)((0,D.Z)({},(0,ke.Z)(m,["suffix","iconRender"])),{type:t?"text":"password",className:j,prefixCls:z,suffix:F});return g&&(b.size=g),o.createElement(Re,(0,D.Z)({ref:r},b))};return o.createElement(Z.C,null,c)});Ge.defaultProps={action:"click",visibilityToggle:!0,iconRender:function(r){return r?o.createElement(Ct.Z,null):o.createElement(gt,null)}};var St=Ge,Et=v(76570),Zt=v(80226),Se=v(96159),zt=function(e,r){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)r.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(a[n[t]]=e[n[t]]);return a},At=o.forwardRef(function(e,r){var a,n=e.prefixCls,t=e.inputPrefixCls,i=e.className,u=e.size,l=e.suffix,c=e.enterButton,s=c===void 0?!1:c,x=e.addonAfter,d=e.loading,S=e.disabled,p=e.onSearch,E=e.onChange,g=e.onCompositionStart,h=e.onCompositionEnd,m=zt(e,["prefixCls","inputPrefixCls","className","size","suffix","enterButton","addonAfter","loading","disabled","onSearch","onChange","onCompositionStart","onCompositionEnd"]),z=o.useContext(Z.E_),A=z.getPrefixCls,F=z.direction,j=o.useContext(Ae.Z),b=o.useRef(!1),P=u||j,$=o.useRef(null),M=function(y){y&&y.target&&y.type==="click"&&p&&p(y.target.value,y),E&&E(y)},H=function(y){var N;document.activeElement===((N=$.current)===null||N===void 0?void 0:N.input)&&y.preventDefault()},J=function(y){var N,G;p&&p((G=(N=$.current)===null||N===void 0?void 0:N.input)===null||G===void 0?void 0:G.value,y)},T=function(y){b.current||J(y)},k=A("input-search",n),V=A("input",t),ie=typeof s=="boolean"?o.createElement(Et.Z,null):null,q="".concat(k,"-button"),L,O=s||{},U=O.type&&O.type.__ANT_BUTTON===!0;U||O.type==="button"?L=(0,Se.Tm)(O,(0,D.Z)({onMouseDown:H,onClick:function(y){var N,G;(G=(N=O==null?void 0:O.props)===null||N===void 0?void 0:N.onClick)===null||G===void 0||G.call(N,y),J(y)},key:"enterButton"},U?{className:q,size:P}:{})):L=o.createElement(Zt.Z,{className:q,type:s?"primary":void 0,size:P,disabled:S,key:"enterButton",onMouseDown:H,onClick:J,loading:d,icon:ie},s),x&&(L=[L,(0,Se.Tm)(x,{key:"addonAfter"})]);var Y=R()(k,(a={},(0,f.Z)(a,"".concat(k,"-rtl"),F==="rtl"),(0,f.Z)(a,"".concat(k,"-").concat(P),!!P),(0,f.Z)(a,"".concat(k,"-with-button"),!!s),a),i),w=function(y){b.current=!0,g==null||g(y)},C=function(y){b.current=!1,h==null||h(y)};return o.createElement(Re,(0,D.Z)({ref:(0,$e.sQ)($,r),onPressEnter:T},m,{size:P,onCompositionStart:w,onCompositionEnd:C,prefixCls:V,addonAfter:L,suffix:l,onChange:M,className:Y,disabled:S}))}),Nt=At,we=v(15671),Ie=v(43144),Pe=v(79340),Oe=v(98557),Rt=v(8189);function wt(e,r){var a=(0,te.Z)({},e);return Array.isArray(r)&&r.forEach(function(n){delete a[n]}),a}var It=v(68554),Pt=v.n(It),Ot=`
  min-height:0 !important;
  max-height:none !important;
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important
`,Ft=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","font-variant","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing","word-break"],Fe={},_;function Tt(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=e.getAttribute("id")||e.getAttribute("data-reactid")||e.getAttribute("name");if(r&&Fe[a])return Fe[a];var n=window.getComputedStyle(e),t=n.getPropertyValue("box-sizing")||n.getPropertyValue("-moz-box-sizing")||n.getPropertyValue("-webkit-box-sizing"),i=parseFloat(n.getPropertyValue("padding-bottom"))+parseFloat(n.getPropertyValue("padding-top")),u=parseFloat(n.getPropertyValue("border-bottom-width"))+parseFloat(n.getPropertyValue("border-top-width")),l=Ft.map(function(s){return"".concat(s,":").concat(n.getPropertyValue(s))}).join(";"),c={sizingStyle:l,paddingSize:i,borderSize:u,boxSizing:t};return r&&a&&(Fe[a]=c),c}function Dt(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:null;_||(_=document.createElement("textarea"),_.setAttribute("tab-index","-1"),_.setAttribute("aria-hidden","true"),document.body.appendChild(_)),e.getAttribute("wrap")?_.setAttribute("wrap",e.getAttribute("wrap")):_.removeAttribute("wrap");var t=Tt(e,r),i=t.paddingSize,u=t.borderSize,l=t.boxSizing,c=t.sizingStyle;_.setAttribute("style","".concat(c,";").concat(Ot)),_.value=e.value||e.placeholder||"";var s=Number.MIN_SAFE_INTEGER,x=Number.MAX_SAFE_INTEGER,d=_.scrollHeight,S;if(l==="border-box"?d+=u:l==="content-box"&&(d-=i),a!==null||n!==null){_.value=" ";var p=_.scrollHeight-i;a!==null&&(s=p*a,l==="border-box"&&(s=s+i+u),d=Math.max(s,d)),n!==null&&(x=p*n,l==="border-box"&&(x=x+i+u),S=d>x?"":"hidden",d=Math.min(x,d))}return{height:d,minHeight:s,maxHeight:x,overflowY:S,resize:"none"}}var Mt=v(96774),Bt=v.n(Mt),se;(function(e){e[e.NONE=0]="NONE",e[e.RESIZING=1]="RESIZING",e[e.RESIZED=2]="RESIZED"})(se||(se={}));var Vt=function(e){(0,Pe.Z)(a,e);var r=(0,Oe.Z)(a);function a(n){var t;return(0,we.Z)(this,a),t=r.call(this,n),t.nextFrameActionId=void 0,t.resizeFrameId=void 0,t.textArea=void 0,t.saveTextArea=function(i){t.textArea=i},t.handleResize=function(i){var u=t.state.resizeStatus,l=t.props,c=l.autoSize,s=l.onResize;u===se.NONE&&(typeof s=="function"&&s(i),c&&t.resizeOnNextFrame())},t.resizeOnNextFrame=function(){cancelAnimationFrame(t.nextFrameActionId),t.nextFrameActionId=requestAnimationFrame(t.resizeTextarea)},t.resizeTextarea=function(){var i=t.props.autoSize;if(!(!i||!t.textArea)){var u=i.minRows,l=i.maxRows,c=Dt(t.textArea,!1,u,l);t.setState({textareaStyles:c,resizeStatus:se.RESIZING},function(){cancelAnimationFrame(t.resizeFrameId),t.resizeFrameId=requestAnimationFrame(function(){t.setState({resizeStatus:se.RESIZED},function(){t.resizeFrameId=requestAnimationFrame(function(){t.setState({resizeStatus:se.NONE}),t.fixFirefoxAutoScroll()})})})})}},t.renderTextArea=function(){var i=t.props,u=i.prefixCls,l=u===void 0?"rc-textarea":u,c=i.autoSize,s=i.onResize,x=i.className,d=i.disabled,S=t.state,p=S.textareaStyles,E=S.resizeStatus,g=wt(t.props,["prefixCls","onPressEnter","autoSize","defaultValue","onResize"]),h=Pt()(l,x,(0,f.Z)({},"".concat(l,"-disabled"),d));"value"in g&&(g.value=g.value||"");var m=(0,te.Z)((0,te.Z)((0,te.Z)({},t.props.style),p),E===se.RESIZING?{overflowX:"hidden",overflowY:"hidden"}:null);return o.createElement(Rt.Z,{onResize:t.handleResize,disabled:!(c||s)},o.createElement("textarea",(0,D.Z)({},g,{className:h,style:m,ref:t.saveTextArea})))},t.state={textareaStyles:{},resizeStatus:se.NONE},t}return(0,Ie.Z)(a,[{key:"componentDidUpdate",value:function(t){(t.value!==this.props.value||!Bt()(t.autoSize,this.props.autoSize))&&this.resizeTextarea()}},{key:"componentWillUnmount",value:function(){cancelAnimationFrame(this.nextFrameActionId),cancelAnimationFrame(this.resizeFrameId)}},{key:"fixFirefoxAutoScroll",value:function(){try{if(document.activeElement===this.textArea){var t=this.textArea.selectionStart,i=this.textArea.selectionEnd;this.textArea.setSelectionRange(t,i)}}catch{}}},{key:"render",value:function(){return this.renderTextArea()}}]),a}(o.Component),jt=Vt,$t=function(e){(0,Pe.Z)(a,e);var r=(0,Oe.Z)(a);function a(n){var t;(0,we.Z)(this,a),t=r.call(this,n),t.resizableTextArea=void 0,t.focus=function(){t.resizableTextArea.textArea.focus()},t.saveTextArea=function(u){t.resizableTextArea=u},t.handleChange=function(u){var l=t.props.onChange;t.setValue(u.target.value,function(){t.resizableTextArea.resizeTextarea()}),l&&l(u)},t.handleKeyDown=function(u){var l=t.props,c=l.onPressEnter,s=l.onKeyDown;u.keyCode===13&&c&&c(u),s&&s(u)};var i=typeof n.value>"u"||n.value===null?n.defaultValue:n.value;return t.state={value:i},t}return(0,Ie.Z)(a,[{key:"setValue",value:function(t,i){"value"in this.props||this.setState({value:t},i)}},{key:"blur",value:function(){this.resizableTextArea.textArea.blur()}},{key:"render",value:function(){return o.createElement(jt,(0,D.Z)({},this.props,{value:this.state.value,onKeyDown:this.handleKeyDown,onChange:this.handleChange,ref:this.saveTextArea}))}}],[{key:"getDerivedStateFromProps",value:function(t){return"value"in t?{value:t.value}:null}}]),a}(o.Component),Lt=$t,Kt=v(57189),kt=v(93355),Gt=(0,kt.b)("text","input");function Ht(e){return!!(e.addonBefore||e.addonAfter)}var Ut=function(e){(0,Pe.Z)(a,e);var r=(0,Oe.Z)(a);function a(){return(0,we.Z)(this,a),r.apply(this,arguments)}return(0,Ie.Z)(a,[{key:"renderClearIcon",value:function(t){var i,u=this.props,l=u.value,c=u.disabled,s=u.readOnly,x=u.handleReset,d=u.suffix,S=!c&&!s&&l,p="".concat(t,"-clear-icon");return o.createElement(De.Z,{onClick:x,onMouseDown:function(g){return g.preventDefault()},className:R()((i={},(0,f.Z)(i,"".concat(p,"-hidden"),!S),(0,f.Z)(i,"".concat(p,"-has-suffix"),!!d),i),p),role:"button"})}},{key:"renderTextAreaWithClearIcon",value:function(t,i,u){var l,c=this.props,s=c.value,x=c.allowClear,d=c.className,S=c.style,p=c.direction,E=c.bordered,g=c.hidden,h=c.status,m=u.status,z=u.hasFeedback;if(!x)return(0,Se.Tm)(i,{value:s});var A=R()("".concat(t,"-affix-wrapper"),"".concat(t,"-affix-wrapper-textarea-with-clear-btn"),(0,oe.Z)("".concat(t,"-affix-wrapper"),(0,oe.F)(m,h),z),(l={},(0,f.Z)(l,"".concat(t,"-affix-wrapper-rtl"),p==="rtl"),(0,f.Z)(l,"".concat(t,"-affix-wrapper-borderless"),!E),(0,f.Z)(l,"".concat(d),!Ht(this.props)&&d),l));return o.createElement("span",{className:A,style:S,hidden:g},(0,Se.Tm)(i,{style:null,value:s}),this.renderClearIcon(t))}},{key:"render",value:function(){var t=this;return o.createElement(W.aM.Consumer,null,function(i){var u=t.props,l=u.prefixCls,c=u.inputType,s=u.element;if(c===Gt[0])return t.renderTextAreaWithClearIcon(l,s,i)})}}]),a}(o.Component),Wt=Ut,Yt=function(e,r){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)r.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(a[n[t]]=e[n[t]]);return a};function He(e,r){return(0,xe.Z)(e||"").slice(0,r).join("")}function Ue(e,r,a,n){var t=a;return e?t=He(a,n):(0,xe.Z)(r||"").length<a.length&&(0,xe.Z)(a||"").length>n&&(t=r),t}var Qt=o.forwardRef(function(e,r){var a,n=e.prefixCls,t=e.bordered,i=t===void 0?!0:t,u=e.showCount,l=u===void 0?!1:u,c=e.maxLength,s=e.className,x=e.style,d=e.size,S=e.disabled,p=e.onCompositionStart,E=e.onCompositionEnd,g=e.onChange,h=e.status,m=Yt(e,["prefixCls","bordered","showCount","maxLength","className","style","size","disabled","onCompositionStart","onCompositionEnd","onChange","status"]),z=o.useContext(Z.E_),A=z.getPrefixCls,F=z.direction,j=o.useContext(Ae.Z),b=o.useContext(Le.Z),P=S||b,$=o.useContext(W.aM),M=$.status,H=$.hasFeedback,J=$.isFormItemInput,T=$.feedbackIcon,k=(0,oe.F)(M,h),V=o.useRef(null),ie=o.useRef(null),q=o.useState(!1),L=(0,ne.Z)(q,2),O=L[0],U=L[1],Y=o.useRef(),w=o.useRef(0),C=(0,Kt.Z)(m.defaultValue,{value:m.value}),K=(0,ne.Z)(C,2),y=K[0],N=K[1],G=m.hidden,ve=function(B,I){m.value===void 0&&(N(B),I==null||I())},ce=Number(c)>0,ge=function(B){U(!0),Y.current=y,w.current=B.currentTarget.selectionStart,p==null||p(B)},_t=function(B){var I;U(!1);var Q=B.currentTarget.value;if(ce){var ue=w.current>=c+1||w.current===((I=Y.current)===null||I===void 0?void 0:I.length);Q=Ue(ue,Y.current,Q,c)}Q!==y&&(ve(Q),Ne(B.currentTarget,B,g,Q)),E==null||E(B)},qt=function(B){var I=B.target.value;if(!O&&ce){var Q=B.target.selectionStart>=c+1||B.target.selectionStart===I.length||!B.target.selectionStart;I=Ue(Q,y,I,c)}ve(I),Ne(B.currentTarget,B,g,I)},en=function(B){var I,Q,ue;ve(""),(I=V.current)===null||I===void 0||I.focus(),Ne((ue=(Q=V.current)===null||Q===void 0?void 0:Q.resizableTextArea)===null||ue===void 0?void 0:ue.textArea,B,g)},ee=A("input",n);o.useImperativeHandle(r,function(){var fe;return{resizableTextArea:(fe=V.current)===null||fe===void 0?void 0:fe.resizableTextArea,focus:function(I){var Q,ue;vt((ue=(Q=V.current)===null||Q===void 0?void 0:Q.resizableTextArea)===null||ue===void 0?void 0:ue.textArea,I)},blur:function(){var I;return(I=V.current)===null||I===void 0?void 0:I.blur()}}});var tn=o.createElement(Lt,(0,D.Z)({},(0,ke.Z)(m,["allowClear"]),{disabled:P,className:R()((a={},(0,f.Z)(a,"".concat(ee,"-borderless"),!i),(0,f.Z)(a,s,s&&!l),(0,f.Z)(a,"".concat(ee,"-sm"),j==="small"||d==="small"),(0,f.Z)(a,"".concat(ee,"-lg"),j==="large"||d==="large"),a),(0,oe.Z)(ee,k)),style:l?void 0:x,prefixCls:ee,onCompositionStart:ge,onChange:qt,onCompositionEnd:_t,ref:V})),Ee=dt(y);!O&&ce&&(m.value===null||m.value===void 0)&&(Ee=He(Ee,c));var We=o.createElement(Wt,(0,D.Z)({disabled:P},m,{prefixCls:ee,direction:F,inputType:"text",value:Ee,element:tn,handleReset:en,ref:ie,bordered:i,status:h,style:l?void 0:x}));if(l||H){var Ce,Ye=(0,xe.Z)(Ee).length,Te="";return(0,be.Z)(l)==="object"?Te=l.formatter({count:Ye,maxLength:c}):Te="".concat(Ye).concat(ce?" / ".concat(c):""),o.createElement("div",{hidden:G,className:R()("".concat(ee,"-textarea"),(Ce={},(0,f.Z)(Ce,"".concat(ee,"-textarea-rtl"),F==="rtl"),(0,f.Z)(Ce,"".concat(ee,"-textarea-show-count"),l),(0,f.Z)(Ce,"".concat(ee,"-textarea-in-form-item"),J),Ce),(0,oe.Z)("".concat(ee,"-textarea"),k,H),s),style:x,"data-count":Te},We,H&&o.createElement("span",{className:"".concat(ee,"-textarea-suffix")},T))}return We}),Xt=Qt,pe=Re;pe.Group=ae,pe.Search=Nt,pe.TextArea=Xt,pe.Password=St;var Jt=pe},21448:function(le,he){var v,D;(function(){"use strict";var f={}.hasOwnProperty;function X(){for(var R=[],o=0;o<arguments.length;o++){var Z=arguments[o];if(!!Z){var W=typeof Z;if(W==="string"||W==="number")R.push(Z);else if(Array.isArray(Z)){if(Z.length){var de=X.apply(null,Z);de&&R.push(de)}}else if(W==="object")if(Z.toString===Object.prototype.toString)for(var ae in Z)f.call(Z,ae)&&Z[ae]&&R.push(ae);else R.push(Z.toString())}}return R.join(" ")}le.exports?(X.default=X,le.exports=X):(v=[],D=function(){return X}.apply(he,v),D!==void 0&&(le.exports=D))})()},68554:function(le,he){var v,D;(function(){"use strict";var f={}.hasOwnProperty;function X(){for(var R=[],o=0;o<arguments.length;o++){var Z=arguments[o];if(!!Z){var W=typeof Z;if(W==="string"||W==="number")R.push(Z);else if(Array.isArray(Z)){if(Z.length){var de=X.apply(null,Z);de&&R.push(de)}}else if(W==="object")if(Z.toString===Object.prototype.toString)for(var ae in Z)f.call(Z,ae)&&Z[ae]&&R.push(ae);else R.push(Z.toString())}}return R.join(" ")}le.exports?(X.default=X,le.exports=X):(v=[],D=function(){return X}.apply(he,v),D!==void 0&&(le.exports=D))})()}}]);