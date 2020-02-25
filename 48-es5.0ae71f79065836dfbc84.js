var __awaiter=this&&this.__awaiter||function(n,i,t,e){return new(t||(t=Promise))((function(r,o){function l(n){try{c(e.next(n))}catch(i){o(i)}}function s(n){try{c(e.throw(n))}catch(i){o(i)}}function c(n){n.done?r(n.value):new t((function(i){i(n.value)})).then(l,s)}c((e=e.apply(n,i||[])).next())}))},__generator=this&&this.__generator||function(n,i){var t,e,r,o,l={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(t)throw new TypeError("Generator is already executing.");for(;l;)try{if(t=1,e&&(r=2&o[0]?e.return:o[0]?e.throw||((r=e.return)&&r.call(e),0):e.next)&&!(r=r.call(e,o[1])).done)return r;switch(e=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o;break;case 4:return l.label++,{value:o[1],done:!1};case 5:l.label++,e=o[1],o=[0];continue;case 7:o=l.ops.pop(),l.trys.pop();continue;default:if(!(r=(r=l.trys).length>0&&r[r.length-1])&&(6===o[0]||2===o[0])){l=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){l.label=o[1];break}if(6===o[0]&&l.label<r[1]){l.label=r[1],r=o;break}if(r&&l.label<r[2]){l.label=r[2],l.ops.push(o);break}r[2]&&l.ops.pop(),l.trys.pop();continue}o=i.call(n,l)}catch(s){o=[6,s],e=0}finally{t=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}};(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{"0no5":function(n,i,t){"use strict";t.r(i),t.d(i,"ion_infinite_scroll",(function(){return l})),t.d(i,"ion_infinite_scroll_content",(function(){return s}));var e=t("zNCD"),r=t("FHoI"),o=t("HNQN"),l=function(){function n(n){var i=this;Object(e.l)(this,n),this.thrPx=0,this.thrPc=0,this.didFire=!1,this.isBusy=!1,this.isLoading=!1,this.threshold="15%",this.disabled=!1,this.position="bottom",this.onScroll=function(){var n=i.scrollEl;if(!n||!i.canStart())return 1;var t=i.el.offsetHeight;if(0===t)return 2;var e=n.scrollTop,r=n.offsetHeight,o=0!==i.thrPc?r*i.thrPc:i.thrPx;if(("bottom"===i.position?n.scrollHeight-t-e-o-r:e-t-o)<0){if(!i.didFire)return i.isLoading=!0,i.didFire=!0,i.ionInfinite.emit(),3}else i.didFire=!1;return 4},this.ionInfinite=Object(e.d)(this,"ionInfinite",7)}return n.prototype.thresholdChanged=function(){var n=this.threshold;n.lastIndexOf("%")>-1?(this.thrPx=0,this.thrPc=parseFloat(n)/100):(this.thrPx=parseFloat(n),this.thrPc=0)},n.prototype.disabledChanged=function(){var n=this.disabled;n&&(this.isLoading=!1,this.isBusy=!1),this.enableScrollEvents(!n)},n.prototype.connectedCallback=function(){return __awaiter(this,void 0,void 0,(function(){var n,i,t=this;return __generator(this,(function(r){switch(r.label){case 0:return(n=this.el.closest("ion-content"))?(i=this,[4,n.getScrollElement()]):[3,2];case 1:return i.scrollEl=r.sent(),this.thresholdChanged(),this.disabledChanged(),"top"===this.position&&Object(e.m)((function(){t.scrollEl&&(t.scrollEl.scrollTop=t.scrollEl.scrollHeight-t.scrollEl.clientHeight)})),[3,3];case 2:console.error("<ion-infinite-scroll> must be used inside an <ion-content>"),r.label=3;case 3:return[2]}}))}))},n.prototype.disconnectedCallback=function(){this.enableScrollEvents(!1),this.scrollEl=void 0},n.prototype.complete=function(){return __awaiter(this,void 0,void 0,(function(){var n,i,t=this;return __generator(this,(function(r){return n=this.scrollEl,this.isLoading&&n&&(this.isLoading=!1,"top"===this.position)&&(this.isBusy=!0,i=n.scrollHeight-n.scrollTop,requestAnimationFrame((function(){Object(e.g)((function(){var r=n.scrollHeight-i;requestAnimationFrame((function(){Object(e.m)((function(){n.scrollTop=r,t.isBusy=!1}))}))}))}))),[2]}))}))},n.prototype.canStart=function(){return!(this.disabled||this.isBusy||!this.scrollEl||this.isLoading)},n.prototype.enableScrollEvents=function(n){this.scrollEl&&(n?this.scrollEl.addEventListener("scroll",this.onScroll):this.scrollEl.removeEventListener("scroll",this.onScroll))},n.prototype.render=function(){var n,i=Object(e.e)(this),t=this.disabled;return Object(e.i)(e.a,{class:(n={},n[i]=!0,n["infinite-scroll-loading"]=this.isLoading,n["infinite-scroll-enabled"]=!t,n)})},Object.defineProperty(n.prototype,"el",{get:function(){return Object(e.f)(this)},enumerable:!0,configurable:!0}),Object.defineProperty(n,"watchers",{get:function(){return{threshold:["thresholdChanged"],disabled:["disabledChanged"]}},enumerable:!0,configurable:!0}),Object.defineProperty(n,"style",{get:function(){return"ion-infinite-scroll{display:none;width:100%}.infinite-scroll-enabled{display:block}"},enumerable:!0,configurable:!0}),n}(),s=function(){function n(n){Object(e.l)(this,n)}return n.prototype.componentDidLoad=function(){if(void 0===this.loadingSpinner){var n=Object(e.e)(this);this.loadingSpinner=r.b.get("infiniteLoadingSpinner",r.b.get("spinner","ios"===n?"lines":"crescent"))}},n.prototype.render=function(){var n,i=Object(e.e)(this);return Object(e.i)(e.a,{class:(n={},n[i]=!0,n["infinite-scroll-content-"+i]=!0,n)},Object(e.i)("div",{class:"infinite-loading"},this.loadingSpinner&&Object(e.i)("div",{class:"infinite-loading-spinner"},Object(e.i)("ion-spinner",{name:this.loadingSpinner})),this.loadingText&&Object(e.i)("div",{class:"infinite-loading-text",innerHTML:Object(o.a)(this.loadingText)})))},Object.defineProperty(n,"style",{get:function(){return"ion-infinite-scroll-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;min-height:84px;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.infinite-loading{margin-left:0;margin-right:0;margin-top:0;margin-bottom:32px;display:none;width:100%}.infinite-loading-text{margin-left:32px;margin-right:32px;margin-top:4px;margin-bottom:0}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.infinite-loading-text{margin-left:unset;margin-right:unset;-webkit-margin-start:32px;margin-inline-start:32px;-webkit-margin-end:32px;margin-inline-end:32px}}.infinite-scroll-loading ion-infinite-scroll-content>.infinite-loading{display:block}.infinite-scroll-content-md .infinite-loading-text{color:var(--ion-color-step-600,#666)}.infinite-scroll-content-md .infinite-loading-spinner .spinner-crescent circle,.infinite-scroll-content-md .infinite-loading-spinner .spinner-lines-md line,.infinite-scroll-content-md .infinite-loading-spinner .spinner-lines-small-md line{stroke:var(--ion-color-step-600,#666)}.infinite-scroll-content-md .infinite-loading-spinner .spinner-bubbles circle,.infinite-scroll-content-md .infinite-loading-spinner .spinner-circles circle,.infinite-scroll-content-md .infinite-loading-spinner .spinner-dots circle{fill:var(--ion-color-step-600,#666)}"},enumerable:!0,configurable:!0}),n}()}}]);