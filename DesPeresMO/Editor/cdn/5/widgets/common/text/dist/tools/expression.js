System.register(["jimu-core","jimu-ui"],(function(e,t){var n={},o={};return{setters:[function(e){n.Immutable=e.Immutable,n.appActions=e.appActions,n.getAppStore=e.getAppStore,n.i18n=e.i18n},function(e){o.defaultMessages=e.defaultMessages}],execute:function(){e((()=>{var e={2534:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M15 3.5v9c0 1.933-3.134 3.5-7 3.5s-7-1.567-7-3.5v-9C1 1.567 4.134 0 8 0s7 1.567 7 3.5M2 5.304V6.5C2 7.692 4.615 9 8 9s6-1.308 6-2.5V5.304C12.775 6.32 10.546 7 8 7s-4.775-.68-6-1.696M8 10c2.546 0 4.775-.68 6-1.696V9.5c0 1.192-2.615 2.5-6 2.5s-6-1.308-6-2.5V8.304C3.225 9.32 5.454 10 8 10m6 1.304C12.775 12.32 10.546 13 8 13s-4.775-.68-6-1.696V12.5C2 13.692 4.615 15 8 15s6-1.308 6-2.5zM14 3.5C14 4.692 11.385 6 8 6S2 4.692 2 3.5 4.615 1 8 1s6 1.308 6 2.5" clip-rule="evenodd"></path></svg>'},48891:e=>{"use strict";e.exports=n},30726:e=>{"use strict";e.exports=o}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var s=t[n]={exports:{}};return e[n](s,s.exports,r),s.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var s={};return(()=>{"use strict";r.r(s),r.d(s,{default:()=>a});var e=r(48891),t=r(30726),n=r(2534),o=r.n(n);const i=t=>{var n,o,r;const s=t.layoutItem.widgetId,i=null===(o=null===(n=(0,e.getAppStore)().getState().appConfig)||void 0===n?void 0:n.widgets)||void 0===o?void 0:o[s];return null!=(null==i?void 0:i.useDataSources)&&(null===(r=null==i?void 0:i.useDataSources)||void 0===r?void 0:r.length)>0&&(null==i?void 0:i.useDataSourcesEnabled)};class a{constructor(){this.index=1,this.id="text-expression"}disabled(e){return!i(e)}getGroupId(){return null}getTitle(n){const o=i(n)?"dynamicContent":"dynamicContentTip",r=e.i18n.getIntl("_jimu");return r?r.formatMessage({id:o,defaultMessage:t.defaultMessages[o]}):o}checked(t){var n;const o=t.layoutItem.widgetId;return!!(null!==(n=(0,e.getAppStore)().getState().widgetsState[o])&&void 0!==n?n:(0,e.Immutable)({})).showExpression}getIcon(){return o()}onClick(t){var n;const o=t.layoutItem.widgetId,r=(0,e.getAppStore)().getState(),s=!(null!==(n=r.widgetsState[o])&&void 0!==n?n:(0,e.Immutable)({})).showExpression;s&&(r.widgetsRuntimeInfo[o].isInlineEditing||(0,e.getAppStore)().dispatch(e.appActions.setWidgetIsInlineEditingState(o,!0))),(0,e.getAppStore)().dispatch(e.appActions.widgetStatePropChange(o,"showExpression",s))}getSettingPanel(){return null}}})(),s})())}}}));