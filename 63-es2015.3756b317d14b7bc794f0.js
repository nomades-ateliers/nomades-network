(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{qRLi:function(e,t,o){"use strict";o.r(t),o.d(t,"ion_popover",(function(){return b}));var i=o("zNCD"),n=(o("FHoI"),o("3Wki"),o("6SRO")),r=(o("aIfp"),o("nt3P")),s=o("bYud"),a=o("A9zv"),p=o("dFzW");const l=(e,t)=>{let o="top",i="left";const r=e.querySelector(".popover-content"),s=r.getBoundingClientRect(),a=s.width,p=s.height,l=e.ownerDocument.defaultView.innerWidth,d=e.ownerDocument.defaultView.innerHeight,h=t&&t.target&&t.target.getBoundingClientRect(),m=null!=h&&"top"in h?h.top:d/2-p/2,b=null!=h&&"left"in h?h.left:l/2,v=h&&h.width||0,f=h&&h.height||0,u=e.querySelector(".popover-arrow"),g=u.getBoundingClientRect(),w=g.width,x=g.height;null==h&&(u.style.display="none");const y={top:m+f,left:b+v/2-w/2},O={top:m+f+(x-1),left:b+v/2-a/2};let j=!1,D=!1;O.left<c+25?(j=!0,O.left=c):a+c+O.left+25>l&&(D=!0,O.left=l-a-c,i="right"),m+f+p>d&&m-p>0?(y.top=m-(x+1),O.top=m-p-(x-1),e.className=e.className+" popover-bottom",o="bottom"):m+f+p>d&&(r.style.bottom=c+"%"),u.style.top=y.top+"px",u.style.left=y.left+"px",r.style.top=O.top+"px",r.style.left=O.left+"px",j&&(r.style.left=`calc(${O.left}px + var(--ion-safe-area-left, 0px))`),D&&(r.style.left=`calc(${O.left}px - var(--ion-safe-area-right, 0px))`),r.style.transformOrigin=o+" "+i;const k=Object(n.a)(),P=Object(n.a)(),E=Object(n.a)();return P.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.01,.08),E.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.01,1),k.addElement(e).easing("ease").duration(100).addAnimation([P,E])},c=5,d=e=>{const t=Object(n.a)(),o=Object(n.a)(),i=Object(n.a)();return o.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.08,0),i.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.99,0),t.addElement(e).easing("ease").duration(500).addAnimation([o,i])},h=(e,t)=>{const o=e.ownerDocument,i="rtl"===o.dir;let r="top",s=i?"right":"left";const a=e.querySelector(".popover-content"),p=a.getBoundingClientRect(),l=p.width,c=p.height,d=o.defaultView.innerWidth,h=o.defaultView.innerHeight,m=t&&t.target&&t.target.getBoundingClientRect(),b=null!=m&&"bottom"in m?m.bottom:h/2-c/2,v=m&&m.height||0,f={top:b,left:null!=m&&"left"in m?i?m.left-l+m.width:m.left:d/2-l/2};f.left<12?(f.left=12,s="left"):l+12+f.left>d&&(f.left=d-l-12,s="right"),b+v+c>h&&b-c>0?(f.top=b-c-v,e.className=e.className+" popover-bottom",r="bottom"):b+v+c>h&&(a.style.bottom="12px");const u=Object(n.a)(),g=Object(n.a)(),w=Object(n.a)(),x=Object(n.a)(),y=Object(n.a)();return g.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.01,.32),w.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.01,1),x.addElement(a).beforeStyles({top:`${f.top}px`,left:`${f.left}px`,"transform-origin":`${r} ${s}`}).fromTo("transform","scale(0.001)","scale(1)"),y.addElement(e.querySelector(".popover-viewport")).fromTo("opacity",.01,1),u.addElement(e).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(300).addAnimation([g,w,x,y])},m=e=>{const t=Object(n.a)(),o=Object(n.a)(),i=Object(n.a)();return o.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.32,0),i.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.99,0),t.addElement(e).easing("ease").duration(500).addAnimation([o,i])},b=class{constructor(e){Object(i.l)(this,e),this.presented=!1,this.mode=Object(i.e)(this),this.keyboardClose=!0,this.backdropDismiss=!0,this.showBackdrop=!0,this.translucent=!1,this.animated=!0,this.onDismiss=e=>{e.stopPropagation(),e.preventDefault(),this.dismiss()},this.onBackdropTap=()=>{this.dismiss(void 0,r.a)},this.onLifecycle=e=>{const t=this.usersElement,o=v[e.type];if(t&&o){const i=new CustomEvent(o,{bubbles:!1,cancelable:!1,detail:e.detail});t.dispatchEvent(i)}},Object(r.e)(this.el),this.didPresent=Object(i.d)(this,"ionPopoverDidPresent",7),this.willPresent=Object(i.d)(this,"ionPopoverWillPresent",7),this.willDismiss=Object(i.d)(this,"ionPopoverWillDismiss",7),this.didDismiss=Object(i.d)(this,"ionPopoverDidDismiss",7)}async present(){if(this.presented)return;const e=this.el.querySelector(".popover-content");if(!e)throw new Error("container is undefined");const t=Object.assign(Object.assign({},this.componentProps),{popover:this.el});return this.usersElement=await Object(a.a)(this.delegate,e,this.component,["popover-viewport",this.el["s-sc"]],t),await Object(p.a)(this.usersElement),Object(r.f)(this,"popoverEnter",l,h,this.event)}async dismiss(e,t){const o=await Object(r.g)(this,e,t,"popoverLeave",d,m,this.event);return o&&await Object(a.b)(this.delegate,this.usersElement),o}onDidDismiss(){return Object(r.h)(this.el,"ionPopoverDidDismiss")}onWillDismiss(){return Object(r.h)(this.el,"ionPopoverWillDismiss")}render(){const e=Object(i.e)(this),{onLifecycle:t}=this;return Object(i.i)(i.a,{"aria-modal":"true","no-router":!0,style:{zIndex:`${2e4+this.overlayIndex}`},class:Object.assign(Object.assign({},Object(s.b)(this.cssClass)),{[e]:!0,"popover-translucent":this.translucent}),onIonPopoverDidPresent:t,onIonPopoverWillPresent:t,onIonPopoverWillDismiss:t,onIonPopoverDidDismiss:t,onIonDismiss:this.onDismiss,onIonBackdropTap:this.onBackdropTap},Object(i.i)("ion-backdrop",{tappable:this.backdropDismiss,visible:this.showBackdrop}),Object(i.i)("div",{class:"popover-wrapper"},Object(i.i)("div",{class:"popover-arrow"}),Object(i.i)("div",{class:"popover-content"})))}get el(){return Object(i.f)(this)}static get style(){return".sc-ion-popover-md-h{--background:var(--ion-background-color,#fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;color:var(--ion-text-color,#000);z-index:1001}.overlay-hidden.sc-ion-popover-md-h{display:none}.popover-wrapper.sc-ion-popover-md{opacity:0;z-index:10}.popover-content.sc-ion-popover-md{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport.sc-ion-popover-md{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px}.sc-ion-popover-md-h{--width:250px;--max-height:90%;--box-shadow:0 5px 5px -3px rgba(0,0,0,0.2),0 8px 10px 1px rgba(0,0,0,0.14),0 3px 14px 2px rgba(0,0,0,0.12)}.popover-content.sc-ion-popover-md{border-radius:4px;-webkit-transform-origin:left top;transform-origin:left top}[dir=rtl].sc-ion-popover-md-h .popover-content.sc-ion-popover-md, [dir=rtl] .sc-ion-popover-md-h .popover-content.sc-ion-popover-md, [dir=rtl].sc-ion-popover-md .popover-content.sc-ion-popover-md{-webkit-transform-origin:right top;transform-origin:right top}.popover-viewport.sc-ion-popover-md{-webkit-transition-delay:.1s;transition-delay:.1s}"}},v={ionPopoverDidPresent:"ionViewDidEnter",ionPopoverWillPresent:"ionViewWillEnter",ionPopoverWillDismiss:"ionViewWillLeave",ionPopoverDidDismiss:"ionViewDidLeave"}}}]);