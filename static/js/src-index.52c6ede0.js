(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"./src/components/NotificationsProvider/NotificationsProvider.js":function(e,n,t){"use strict";var i=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),o=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),a=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js"),r=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),c=t("./node_modules/react/index.js"),s=t.n(c),u=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),l=t("./node_modules/styled-components/dist/styled-components.browser.esm.js"),b=t("./node_modules/prop-types/index.js"),m=t.n(b),f=["top","right","bottom","left"],d=function(e){return e.map(function(e,n){return"".concat(f[n],": ").concat(e,";")})};d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"convertToCssPosition",filename:"src/helpers/utils.js"}});var p=function(e){return"".concat((e/1e3).toString(),"s")};p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"convertToCssDuration",filename:"src/helpers/utils.js"}});var j=function(e){return"auto"!==e[f.indexOf("top")]?"column":"column-reverse"};j&&j===Object(j)&&Object.isExtensible(j)&&Object.defineProperty(j,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getFlexDirection",filename:"src/helpers/utils.js"}});var O=function(e){return"auto"!==e[f.indexOf("top")]?"top":"bottom"};function v(){var e=Object(u.a)(["\n  position: fixed;\n  display: flex;\n  z-index: 999999;\n  height: 0;\n  flex-direction: ",";\n  ","\n"]);return v=function(){return e},e}O&&O===Object(O)&&Object.isExtensible(O)&&Object.defineProperty(O,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getAnimatedMargin",filename:"src/helpers/utils.js"}});var g={position:m.a.array.isRequired},y=l.d.div(v(),function(e){return j(e.position)},function(e){return d(e.position)});y.propTypes=g;var h=y;function x(){var e=Object(u.a)(["\n    0%{\n      margin-",": 0;\n      opacity: 1;\n      transform: translateX(0%);\n    }\n    50% {\n      margin-",": 0;\n      opacity: 0;\n      transform: translateX(","%);\n    }\n    100% {\n      margin-",": ","px;\n      opacity: 0;\n      transform: translateX(","%);\n    }\n  "]);return x=function(){return e},e}function _(){var e=Object(u.a)(["\n    0% {\n      margin-",": ","px;\n      opacity: 0;\n      transform: translateX(","%);\n    }\n    50% {\n      margin-",": 0;\n      opacity: 0;\n      transform: translateX(","%);\n    }\n    100% {\n      margin-",": 0;\n      opacity: 1;\n      transform: translateX(0%);\n    }\n  "]);return _=function(){return e},e}function N(){var e=Object(u.a)(["\n    0% {\n      margin-",": 0px;\n      opacity: 1;\n    }\n    100% {\n      margin-",": ","px;\n      opacity: 0;\n    }\n  "]);return N=function(){return e},e}function P(){var e=Object(u.a)(["\n    0% {\n      margin-",": ","px;\n      opacity: 0;\n    }\n    100% {\n      margin-",": 0px;\n      opacity: 1;\n    }\n  "]);return P=function(){return e},e}"undefined"!==typeof y&&y&&y===Object(y)&&Object.isExtensible(y)&&Object.defineProperty(y,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Container",filename:"src/components/Container/Container.js"}});var E=function(e,n){return Object(l.e)(P(),n,-e,n)};E&&E===Object(E)&&Object.isExtensible(E)&&Object.defineProperty(E,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"verticalShow",filename:"src/animations/animations.js"}});var w=function(e,n){return Object(l.e)(N(),n,n,-e)};w&&w===Object(w)&&Object.isExtensible(w)&&Object.defineProperty(w,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"verticalHide",filename:"src/animations/animations.js"}});var C=function(e,n,t){return Object(l.e)(_(),n,-e,"left"===t?-60:60,n,"left"===t?-60:60,n)};C&&C===Object(C)&&Object.isExtensible(C)&&Object.defineProperty(C,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"horizontalShow",filename:"src/animations/animations.js"}});var D=function(e,n,t){return Object(l.e)(x(),n,n,"left"===t?-60:60,n,-e,"left"===t?-60:60)};function k(){var e=Object(u.a)(["\n  position: relative;\n  z-index: ",";\n  animation: ",";\n  animation-timing-function: ",";\n  animation-duration: ",";\n  animation-fill-mode: forwards;\n"]);return k=function(){return e},e}D&&D===Object(D)&&Object.isExtensible(D)&&Object.defineProperty(D,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"horizontalHide",filename:"src/animations/animations.js"}});var S={isVisible:m.a.bool.isRequired,notificationHeight:m.a.number.isRequired,position:m.a.array.isRequired,animationDuration:m.a.number.isRequired,animationEasing:m.a.string.isRequired,slideFromSide:m.a.string.isRequired},T=l.d.div(k(),function(e){return e.isVisible?999999:-1},function(e){var n=e.isVisible,t=e.position,i=e.slideFromSide,o=e.notificationHeight,a=O(t);return i?n?C(o,a,i):D(o,a,i):n?E(o,a):w(o,a)},function(e){return e.animationEasing},function(e){return p(e.animationDuration)});T.propTypes=S;var A=T;"undefined"!==typeof T&&T&&T===Object(T)&&Object.isExtensible(T)&&Object.defineProperty(T,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Notification",filename:"src/components/Notification/Notification.js"}});var F=function(e){var n=e.children,t=e.position,i=e.isVisible,o=e.animationDuration,a=e.animationEasing,u=e.slideFromSide,l=Object(c.useRef)(null),b=Object(c.useState)(0),m=Object(r.a)(b,2),f=m[0],d=m[1];return Object(c.useLayoutEffect)(function(){l.current&&d(l.current.clientHeight)},[l]),s.a.createElement(A,{ref:l,position:t,notificationHeight:f,isVisible:i,slideFromSide:u,animationEasing:a,animationDuration:o},n)},R=F;F&&F===Object(F)&&Object.isExtensible(F)&&Object.defineProperty(F,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"NotificationContainer",filename:"src/components/NotificationContainer/NotificationContainer.js"}}),t.d(n,"a",function(){return X});var X=Object(c.createContext)({});"undefined"!==typeof X&&X&&X===Object(X)&&Object.isExtensible(X)&&Object.defineProperty(X,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"NotificationsContext",filename:"src/components/NotificationsProvider/NotificationsProvider.js"}});var M=function(e){var n=e.children,t=e.renderNotification,u=e.position,l=e.animationDuration,b=e.animationEasing,m=e.slideFromSide,f=e.dismissAfter,d=Object(c.useRef)({}),p=Object(c.useRef)({}),j=Object(c.useState)({}),O=Object(r.a)(j,2),v=O[0],g=O[1],y=Object(c.useCallback)(function(e){return function(){clearTimeout(d.current[e]),function(e){g(function(n){return Object(a.a)({},n,Object(o.a)({},e,Object(a.a)({},n[e],{isVisible:!1})))})}(e),p.current[e]=setTimeout(function(){!function(e){g(function(n){return Object.keys(n).filter(function(n){return n!==e}).reduce(function(e,t){return Object(a.a)({},e,Object(o.a)({},t,n[t]))},{})})}(e)},l)}},[l]),x=Object(c.useCallback)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return g(function(n){var t=Date.now().toString();return d.current[t]=setTimeout(function(){y(t)()},f),Object(a.a)({},n,Object(o.a)({},t,{id:t,isVisible:!0,payload:e}))})},[f,y]),_=function(){[].concat(Object(i.a)(Object.values(p.current)),Object(i.a)(Object.values(d.current))).forEach(function(e){return clearTimeout(e)})};Object(c.useEffect)(function(){return _},[]);var N=Object(c.useMemo)(function(){return{showNotification:x,removeNotification:y}},[y,x]);return s.a.createElement(X.Provider,{value:N},s.a.createElement(h,{position:u},Object.values(v).map(function(e){var n=e.id,i=e.payload,o=e.isVisible;return s.a.createElement(R,{key:n,position:u,animationDuration:l,animationEasing:b,slideFromSide:m,dismissAfter:f,isVisible:o},t({removeNotification:y(n),payload:i}))})),n)};M.defaultProps={position:["40px","40px","auto","auto"],animationDuration:400,animationEasing:"ease",dismissAfter:6e3,slideFromSide:""};n.b=M;M&&M===Object(M)&&Object.isExtensible(M)&&Object.defineProperty(M,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"NotificationsProvider",filename:"src/components/NotificationsProvider/NotificationsProvider.js"}})},"./src/index.mdx":function(e,n,t){"use strict";t.r(n);var i=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),o=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),a=t("./node_modules/react/index.js"),r=t("./node_modules/@mdx-js/react/dist/index.es.js"),c=t("./node_modules/docz/dist/index.esm.js"),s=t("./src/components/NotificationsProvider/NotificationsProvider.js"),u=function(){return Object(a.useContext)(s.a)},l=u;u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useNotification",filename:"src/hooks/useNotification/useNotification.js"}}),"undefined"!==typeof l&&l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useNotification",filename:"src/index.js"}}),"undefined"!==typeof s.a&&s.a&&s.a===Object(s.a)&&Object.isExtensible(s.a)&&Object.defineProperty(s.a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"NotificationsContext",filename:"src/index.js"}}),"undefined"!==typeof s.b&&s.b&&s.b===Object(s.b)&&Object.isExtensible(s.b)&&Object.defineProperty(s.b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"NotificationsProvider",filename:"src/index.js"}}),t.d(n,"default",function(){return d});var b=function(e){return function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",n)}},m=(b("Demo"),b("App"),{}),f="wrapper";function d(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(r.b)(f,Object(i.a)({},m,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"rr-notifications"},"rr-notifications"),Object(r.b)("p",null,Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://opensource.org/licenses/MIT"}),Object(r.b)("img",{alt:"License: MIT",src:"https://img.shields.io/badge/License-MIT-yellow.svg"})),"\xa0","\n",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://www.npmjs.com/package/rr-notifications"}),Object(r.b)("img",{alt:"version",src:"https://img.shields.io/npm/v/rr-notifications.svg?style=flat"})),"\xa0","\n",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://travis-ci.org/thegrinder/rr-notifications"}),Object(r.b)("img",{alt:"Build Status",src:"https://travis-ci.org/thegrinder/rr-notifications.svg?branch=master"})),"\xa0","\n",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/semantic-release/semantic-release"}),Object(r.b)("img",{alt:"semantic-release",src:"https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg"})),"\xa0","\n",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://codecov.io/gh/thegrinder/rr-notifications"}),Object(r.b)("img",{alt:"Codecov",src:"https://img.shields.io/codecov/c/github/thegrinder/rr-notifications.svg"})),"\xa0","\n",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/styled-components/styled-components"}),Object(r.b)("img",{alt:"style: styled-components",src:"https://img.shields.io/badge/style-%F0%9F%92%85%20styled--components-orange.svg?colorB=daa357&colorA=db748e"})),"\xa0"),Object(r.b)("p",null,"rr-notifications is a flexible and customizable react notification system. Create your own notification component with the content you want,\nstyle it however you want and with technology of your choice and it will work."),Object(r.b)("h3",{id:"example"},"Example"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js"}),"import React from 'react';\nimport { useNotification } from 'rr-notifications';\n\nconst Demo = () => {\n  const { showNotification } = useNotification();\n  return (\n    <div>\n      <button onClick={() => showNotification({ text: 'notification' })}>\n        Add notification\n      </button>\n    </div>\n  );\n};\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js"}),"import { NotificationsProvider } from 'rr-notifications';\nimport Demo from 'path/to/demo';\n\nconst App = () => (\n  <NotificationsProvider\n    position={[ '80px', '80px', 'auto', 'auto']}\n    animationDuration={400}\n    animationEasing=\"ease\"\n    slideFromSide=\"right\"\n    renderNotification={({ removeNotification, payload }) => (\n      <div style={{\n        backgroundColor: '#333',\n        padding: '16px',\n        marginBottom: '8px',\n      }}>\n        <p style={{ color: '#fff' }}>\n          {payload.text}\n        </p>\n        <button type=\"button\" onClick={removeNotification}>\n          Click to close\n        </button>\n      </div>\n    )}\n  >\n    <Demo />\n  </NotificationsProvider>\n);\n")),Object(r.b)(c.c,{__position:0,__code:"() => {\n  const Demo = () => {\n    const { showNotification } = useNotification()\n    return (\n      <div>\n        <button onClick={() => showNotification({ text: 'notification' })}>\n          Add notification\n        </button>\n      </div>\n    )\n  }\n  const App = () => (\n    <NotificationsProvider\n      position={['80px', '80px', 'auto', 'auto']}\n      animationDuration={400}\n      animationEasing=\"ease\"\n      slideFromSide=\"right\"\n      renderNotification={({ removeNotification, payload }) => (\n        <div\n          style={{\n            backgroundColor: '#333',\n            padding: '16px',\n            marginBottom: '8px',\n          }}\n        >\n          <p style={{ color: '#fff' }}>{payload.text}</p>\n          <button type=\"button\" onClick={removeNotification}>\n            Click to close\n          </button>\n        </div>\n      )}\n    >\n      <Demo />\n    </NotificationsProvider>\n  )\n\n  return <App />\n}",__scope:{props:this?this.props:t,Playground:c.c,NotificationsProvider:s.b,useNotification:l},mdxType:"Playground"},function(){var e=function(){var e=l().showNotification;return Object(r.b)("div",null,Object(r.b)("button",{onClick:function(){return e({text:"notification"})}},"Add notification"))};return Object(r.b)(function(){return Object(r.b)(s.b,{position:["80px","80px","auto","auto"],animationDuration:400,animationEasing:"ease",slideFromSide:"right",renderNotification:function(e){var n=e.removeNotification,t=e.payload;return Object(r.b)("div",{style:{backgroundColor:"#333",padding:"16px",marginBottom:"8px"}},Object(r.b)("p",{style:{color:"#fff"}},t.text),Object(r.b)("button",{type:"button",onClick:n},"Click to close"))},mdxType:"NotificationsProvider"},Object(r.b)(e,{mdxType:"Demo"}))},{mdxType:"App"})}))}d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/index.mdx"}}),d.isMDXComponent=!0}}]);
//# sourceMappingURL=src-index.30267da358d9b6c40831.js.map