/*! For license information please see 6056.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[6056],{6056:(t,e,n)=>{n.r(e),n.d(e,{calcite_navigation:()=>m,calcite_navigation_logo:()=>v,calcite_navigation_user:()=>b});var i=n(9113),o=n(7146),a=n(8545);n(8220);const s="hide",l="logo",r="user",c="progress",h="navigation-secondary",d="navigation-tertiary",m=class{constructor(t){(0,i.r)(this,t),this.calciteNavigationActionSelect=(0,i.c)(this,"calciteNavigationActionSelect",6),this.actionClickHandler=()=>{this.calciteNavigationActionSelect.emit()},this.handleUserSlotChange=t=>{this.isPrimaryLevel()&&(this.userSlotHasElements=(0,o.b)(t))},this.handleLogoSlotChange=t=>{this.isPrimaryLevel()&&(this.logoSlotHasElements=(0,o.b)(t))},this.handleContentStartSlotChange=t=>{this.isPrimaryLevel()&&(this.primaryContentStartSlotHasElements=(0,o.b)(t))},this.handleContentEndSlotChange=t=>{this.isPrimaryLevel()&&(this.primaryContentEndSlotHasElements=(0,o.b)(t))},this.handleContentCenterSlotChange=t=>{this.isPrimaryLevel()&&(this.primaryContentCenterSlotHasElements=(0,o.b)(t))},this.handleSecondarySlotChange=t=>{this.secondarySlotHasElements=(0,o.b)(t)},this.handleTertiarySlotChange=t=>{this.tertiarySlotHasElements=(0,o.b)(t)},this.handleMenuActionSlotChange=t=>{this.isPrimaryLevel()&&(this.navigationActionSlotHasElements=(0,o.b)(t),this.navigationActionSlotHasElements&&(this.navigationAction=!1))},this.handleProgressSlotChange=t=>{this.isPrimaryLevel()&&(this.progressSlotHasElement=(0,o.b)(t))},this.label=void 0,this.navigationAction=!1,this.logoSlotHasElements=void 0,this.navigationActionSlotHasElements=void 0,this.primaryContentCenterSlotHasElements=void 0,this.primaryContentEndSlotHasElements=void 0,this.primaryContentStartSlotHasElements=void 0,this.progressSlotHasElement=void 0,this.secondarySlotHasElements=void 0,this.tertiarySlotHasElements=void 0,this.userSlotHasElements=void 0}async setFocus(){return await(0,a.c)(this),this.navigationActionEl?.setFocus()}componentWillLoad(){(0,a.s)(this)}componentDidLoad(){(0,a.a)(this)}isPrimaryLevel(){return this.el.slot!==h&&this.el.slot!==d}renderMenuAction(){return(0,i.h)("slot",{name:"navigation-action",onSlotchange:this.handleMenuActionSlotChange},this.navigationAction&&(0,i.h)("calcite-action",{icon:"hamburger",onClick:this.actionClickHandler,text:this.label,ref:t=>this.navigationActionEl=t}))}render(){const t=this.logoSlotHasElements||this.userSlotHasElements||this.navigationActionSlotHasElements||this.primaryContentCenterSlotHasElements||this.primaryContentEndSlotHasElements||this.primaryContentStartSlotHasElements||this.navigationAction,e=this.el.slot;return(0,i.h)(i.H,null,(0,i.h)("div",{class:{container:!0,secondary:e===h,tertiary:e===d,primary:t}},(0,i.h)("div",{class:{[s]:!this.progressSlotHasElement,[c]:!0}},(0,i.h)("slot",{name:c,onSlotchange:this.handleProgressSlotChange})),(0,i.h)("div",{class:{"container-content":!0,"progress-bar":this.progressSlotHasElement}},this.renderMenuAction(),(0,i.h)("div",{class:{[s]:!this.logoSlotHasElements,[l]:!0}},(0,i.h)("slot",{name:l,onSlotchange:this.handleLogoSlotChange})),(0,i.h)("slot",{name:"content-start",onSlotchange:this.handleContentStartSlotChange}),(0,i.h)("slot",{name:"content-center",onSlotchange:this.handleContentCenterSlotChange}),(0,i.h)("slot",{name:"content-end",onSlotchange:this.handleContentEndSlotChange}),(0,i.h)("div",{class:{[s]:!this.userSlotHasElements,[r]:!0}},(0,i.h)("slot",{name:r,onSlotchange:this.handleUserSlotChange})))),(0,i.h)(i.F,null,(0,i.h)("slot",{name:h,onSlotchange:this.handleSecondarySlotChange}),(0,i.h)("slot",{name:d,onSlotchange:this.handleTertiarySlotChange})))}get el(){return(0,i.g)(this)}};m.style=":host([hidden]){display:none}[hidden]{display:none}.container{margin-inline:auto;display:flex;inline-size:100%;flex-direction:column;margin-block:0;margin-inline:auto;background-color:var(--calcite-navigation-background, var(--calcite-color-foreground-1))}.container.primary,.container.secondary,.container.tertiary{border-block-end:1px solid;border-block-end-color:var(--calcite-navigation-border-color, var(--calcite-color-border-3))}.user,.logo{display:flex}.hide{display:none}.primary{block-size:4rem}.secondary{block-size:3rem}.tertiary{block-size:3rem}.container-content{margin-inline:auto;display:flex;block-size:100%;inline-size:100%;margin-block:0;inline-size:var(--calcite-navigation-width, 100%);max-inline-size:100%}.container-content.progress-bar{margin-block-start:0.125rem}slot[name]{display:flex;flex-direction:row}slot[name=navigation-secondary]::slotted(calcite-navigation),slot[name=navigation-tertiary]::slotted(calcite-navigation){inline-size:100%}slot[name=content-start]::slotted(*),slot[name=content-center]::slotted(*),slot[name=content-end]::slotted(*){display:flex;flex-direction:row;align-items:center}slot[name=progress],slot[name=progress] calcite-progress{inset-block-start:0;inset-inline:0}slot[name=content-end]{margin-inline-start:auto}slot[name=content-start]{margin-inline-end:auto}slot[name=content-end],slot[name=logo]~slot[name=user],slot[name=user]:only-child{margin-inline-start:auto}slot[name=content-center]{margin-inline-start:auto;margin-inline-end:auto}slot[name=content-start]~slot[name=content-center]{margin-inline-start:0px}slot[name=content-start]~slot[name=content-end],slot[name=content-center]~slot[name=content-end],slot[name=content-center]~slot[name=user],slot[name=content-end]~slot[name=user]{margin:0px}";const g="heading",u="description",v=class{constructor(t){(0,i.r)(this,t),this.active=void 0,this.href=void 0,this.icon=void 0,this.iconFlipRtl=!1,this.label=void 0,this.rel=void 0,this.description=void 0,this.target=void 0,this.heading=void 0,this.thumbnail=void 0}async setFocus(){await(0,a.c)(this),this.href&&this.el.focus()}componentWillLoad(){(0,a.s)(this)}componentDidLoad(){(0,a.a)(this)}renderIcon(){return(0,i.h)("calcite-icon",{class:"icon",flipRtl:this.iconFlipRtl,icon:this.icon,scale:"l"})}render(){const{heading:t,description:e,thumbnail:n}=this;return(0,i.h)(i.H,null,(0,i.h)("a",{class:"anchor",href:this.href,rel:this.rel,target:this.target},n&&(0,i.h)("img",{alt:this.label||"",class:"image",src:n}),this.icon&&this.renderIcon(),(t||e)&&(0,i.h)("div",{class:"container"},t&&(0,i.h)("span",{"aria-label":this.heading,class:{[g]:!0,standalone:!this.description},key:g},t),e&&(0,i.h)("span",{"aria-label":this.description,class:u,key:u},e))))}static get delegatesFocus(){return!0}get el(){return(0,i.g)(this)}};v.style=":host{display:inline-flex;outline:2px solid transparent;outline-offset:2px}.anchor{margin:0px;display:flex;cursor:pointer;align-items:center;justify-content:center;font-size:var(--calcite-font-size-0);line-height:1.25rem;text-decoration-line:none;outline-color:transparent;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;border-block-end:2px solid transparent}.anchor:hover,.anchor:focus{background-color:var(--calcite-color-foreground-2)}.anchor:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand-hover, var(--calcite--color-brand)));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}.anchor:active{background-color:var(--calcite-color-foreground-3)}.image,.icon{margin:0px;display:flex;block-size:1.75rem;padding-inline:1rem}.image~.icon{padding-inline-start:0px}.image~.container,.icon~.container{padding-inline-start:0px}:host(:active) .anchor{color:var(--calcite-color-text-1)}:host([active]) .anchor{color:var(--calcite-color-text-1);border-color:var(--calcite-color-brand);--calcite-ui-icon-color:var(--calcite-color-brand)}.container{margin-block-start:0.125rem;display:flex;flex-direction:column;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding-inline:1rem;text-align:start}.heading{margin-inline-start:0px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:var(--calcite-font-size-0);font-weight:var(--calcite-font-weight-medium);color:var(--calcite-color-text-1)}.standalone{font-size:var(--calcite-font-size-1)}.description{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host([hidden]){display:none}[hidden]{display:none}";const p="full-name",f="username",b=class{constructor(t){(0,i.r)(this,t),this.active=void 0,this.fullName=void 0,this.label=void 0,this.textDisabled=!1,this.thumbnail=void 0,this.userId=void 0,this.username=void 0}async setFocus(){await(0,a.c)(this),this.el.focus()}componentWillLoad(){(0,a.s)(this)}componentDidLoad(){(0,a.a)(this)}render(){return(0,i.h)(i.H,null,(0,i.h)("button",{"aria-label":this.label,class:"button"},(0,i.h)("calcite-avatar",{"full-name":this.fullName,label:this.label,thumbnail:this.thumbnail,"user-id":this.userId,username:this.username}),(this.fullName||this.username)&&!this.textDisabled&&(0,i.h)("div",{class:"text-container"},this.fullName&&(0,i.h)("span",{class:p,key:p},this.fullName),this.username&&(0,i.h)("span",{class:f,key:f},this.username))))}static get delegatesFocus(){return!0}get el(){return(0,i.g)(this)}};b.style=":host{display:inline-flex;outline:2px solid transparent;outline-offset:2px}:host .button{background-color:transparent;border:none;margin:0px;display:flex;cursor:pointer;align-items:center;justify-content:center;font-family:var(--calcite-sans-family);font-size:var(--calcite-font-size-0);line-height:1.25rem;outline-color:transparent;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;border-block-end:2px solid transparent}:host(:hover) .button,:host(:focus) .button{background-color:var(--calcite-color-foreground-2)}:host(:focus) .button{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand-hover, var(--calcite--color-brand)));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}:host(:active) .button{background-color:var(--calcite-color-foreground-3);color:var(--calcite-color-text-1)}calcite-avatar{padding-inline:1rem}calcite-avatar~.text-container{padding-inline-start:0px}:host([active]) .button{border-color:var(--calcite-color-brand);color:var(--calcite-color-text-1);--calcite-ui-icon-color:var(--calcite-color-brand)}.text-container{margin-block-start:0.125rem;display:flex;flex-direction:column;padding-inline:1rem;text-align:start}.full-name{margin-inline-start:0px;font-size:var(--calcite-font-size-0);font-weight:var(--calcite-font-weight-medium);color:var(--calcite-color-text-1)}.username{color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host([hidden]){display:none}[hidden]{display:none}"},8545:(t,e,n)=>{n.d(e,{a:()=>l,b:()=>r,c:()=>c,s:()=>s});var i=n(9113);const o=new WeakMap,a=new WeakMap;function s(t){a.set(t,new Promise((e=>o.set(t,e))))}function l(t){o.get(t)()}function r(t){return a.get(t)}async function c(t){return await r(t),(0,i.f)(t),new Promise((t=>requestAnimationFrame((()=>t()))))}}}]);