(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{boDV:function(n,l,t){"use strict";t.r(l);var e=t("kZht");class u{}var i=t("C9Ky"),a=t("yY9A"),o=t("s/1W"),r=t("An66"),s=t("3kIJ"),c=t("YtkY"),b=t("ETkI"),d=t("l2r0");class p extends d.a{constructor(n){super(),this.store=n,this.STATE="authCheck"}dispatchCheckAuthAction(){this.dispatchAction(new b.b)}dispatchLoginAction(n){this.dispatchAction(new b.h(n))}dispatchLogoutAction(){this.dispatchAction(new b.j)}dispatchCreateAction(n){this.dispatchAction(new b.e(n))}dispatchTokenSaveAction(){this.dispatchAction(new b.m)}dispatchTokenDeleteAction(){this.dispatchAction(new b.l)}dispatchLoadAction(n){}dispatchUpdateAction(n){}dispatchRemoveAction(n){}getAuthCheck(){return this.storeSelectFeatureState().pipe(Object(c.a)(n=>n))}isAuthenticated(){let n=!1;return this.getAuthCheck().subscribe(l=>n=l),n}}class g{constructor(n){this._store=n,this.loginBtn=!0}ngOnInit(){this.authForm=new s.f({email:new s.d("demo@demo.ch",s.p.compose([s.p.required,s.p.email])),password:new s.d("A123456",s.p.compose([s.p.required,s.p.minLength(6)])),firstname:new s.d("",s.p.compose(this.loginBtn?[]:[s.p.required,s.p.minLength(6)])),lastname:new s.d("",s.p.compose(this.loginBtn?[]:[s.p.required,s.p.minLength(6)]))})}send(n="login"){if(this.authForm.valid)switch(!0){case"login"===n:this._store.dispatchLoginAction(this.authForm.value);break;case"create"===n:this._store.dispatchCreateAction(this.authForm.value)}else console.log("form not valid",this.authForm.valid)}}class h extends g{constructor(n){super(n),this.loginBtn=!0}}var m=e.zb({encapsulation:2,styles:[["nomades-network-auth-page ion-img{max-width:200px;margin:0 auto 2rem}nomades-network-auth-page .flex-container{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;flex-wrap:nowrap;-webkit-box-pack:justify;justify-content:space-between;-webkit-box-align:center;align-items:center;align-content:stretch;height:100%}nomades-network-auth-page .flex-container .center-content{width:100%}nomades-network-auth-page .flex-container .center-content h1{margin-top:0;line-height:3rem;font-weight:400;border-bottom:solid 1px var(--ion-color-primary)}nomades-network-auth-page .flex-container .center-content.margin-login{margin-top:6rem!important}nomades-network-auth-page .flex-container .footer{width:100%}"]],data:{}});function j(n){return e.Vb(0,[(n()(),e.Bb(0,0,null,null,1,"ion-img",[["src","./assets/images/logo-nomades.png"]],null,null,null,a.M,a.m)),e.Ab(1,49152,null,0,o.A,[e.j,e.p,e.F],{src:[0,"src"]},null)],(function(n,l){n(l,1,0,"./assets/images/logo-nomades.png")}),null)}function f(n){return e.Vb(0,[(n()(),e.Bb(0,0,null,null,3,"ion-text",[["color","primary"]],null,null,null,a.Y,a.y)),e.Ab(1,49152,null,0,o.ub,[e.j,e.p,e.F],{color:[0,"color"]},null),(n()(),e.Bb(2,0,null,0,1,"h1",[],null,null,null,null,null)),(n()(),e.Tb(-1,null,[" Cr\xe9ation de compte "]))],(function(n,l){n(l,1,0,"primary")}),null)}function A(n){return e.Vb(0,[(n()(),e.Bb(0,0,null,null,2,"span",[],null,null,null,null,null)),(n()(),e.Tb(-1,null,["Vous avez d\xe9ja un compte?"])),(n()(),e.Bb(2,0,null,null,0,"br",[],null,null,null,null,null))],null,null)}function C(n){return e.Vb(0,[(n()(),e.Bb(0,0,null,null,3,"ion-note",[["class","ion-text-left"]],null,null,null,a.T,a.t)),e.Ab(1,49152,null,0,o.V,[e.j,e.p,e.F],null,null),(n()(),e.Bb(2,0,null,0,1,"p",[],null,null,null,null,null)),(n()(),e.Tb(-1,null,[" Nomades tribes est l'association des \xe9l\xe8ves, des alumnis et des enseignants Nomades qui permet de partager, communiquer et collaborer. Cr\xe9ons ensemble notre monde de demain. "]))],null,null)}function O(n){return e.Vb(0,[(n()(),e.Bb(0,0,null,null,78,"ion-content",[["class","ion-padding"]],null,null,null,a.H,a.h)),e.Ab(1,49152,null,0,o.r,[e.j,e.p,e.F],null,null),(n()(),e.Bb(2,0,null,0,76,"div",[["class","flex-container"]],null,null,null,null,null)),(n()(),e.Bb(3,0,null,null,65,"div",[],null,null,null,null,null)),e.Qb(512,null,r.s,r.t,[e.x,e.y,e.p,e.K]),e.Ab(5,278528,null,0,r.j,[r.s],{ngClass:[0,"ngClass"]},null),e.Ob(6,{"center-content":0,"margin-login":1}),(n()(),e.qb(16777216,null,null,1,null,j)),e.Ab(8,16384,null,0,r.l,[e.W,e.S],{ngIf:[0,"ngIf"]},null),(n()(),e.qb(16777216,null,null,1,null,f)),e.Ab(10,16384,null,0,r.l,[e.W,e.S],{ngIf:[0,"ngIf"]},null),(n()(),e.Bb(11,0,null,null,57,"form",[["class","ion-text-center ion-margin-bottom"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],(function(n,l,t){var u=!0;return"submit"===l&&(u=!1!==e.Mb(n,13).onSubmit(t)&&u),"reset"===l&&(u=!1!==e.Mb(n,13).onReset()&&u),u}),null,null)),e.Ab(12,16384,null,0,s.t,[],null,null),e.Ab(13,540672,null,0,s.g,[[8,null],[8,null]],{form:[0,"form"]},null),e.Qb(2048,null,s.a,null,[s.g]),e.Ab(15,16384,null,0,s.m,[[4,s.a]],null,null),(n()(),e.Bb(16,0,null,null,24,"div",[],[[8,"hidden",0]],null,null,null,null)),(n()(),e.Bb(17,0,null,null,11,"ion-item",[],null,null,null,a.O,a.o)),e.Ab(18,49152,null,0,o.E,[e.j,e.p,e.F],null,null),(n()(),e.Bb(19,0,null,0,2,"ion-label",[],null,null,null,a.P,a.p)),e.Ab(20,49152,null,0,o.K,[e.j,e.p,e.F],null,null),(n()(),e.Tb(-1,0,["Nom:"])),(n()(),e.Bb(22,0,null,0,6,"ion-input",[["formControlName","lastname"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(n,l,t){var u=!0;return"ionBlur"===l&&(u=!1!==e.Mb(n,24)._handleBlurEvent(t.target)&&u),"ionChange"===l&&(u=!1!==e.Mb(n,24)._handleInputEvent(t.target)&&u),u}),a.N,a.n)),e.Ab(23,49152,null,0,o.D,[e.j,e.p,e.F],{type:[0,"type"]},null),e.Ab(24,16384,null,0,o.Hb,[e.p],null,null),e.Qb(1024,null,s.j,(function(n){return[n]}),[o.Hb]),e.Ab(26,671744,null,0,s.e,[[3,s.a],[8,null],[8,null],[6,s.j],[2,s.s]],{name:[0,"name"]},null),e.Qb(2048,null,s.k,null,[s.e]),e.Ab(28,16384,null,0,s.l,[[4,s.k]],null,null),(n()(),e.Bb(29,0,null,null,11,"ion-item",[],null,null,null,a.O,a.o)),e.Ab(30,49152,null,0,o.E,[e.j,e.p,e.F],null,null),(n()(),e.Bb(31,0,null,0,2,"ion-label",[],null,null,null,a.P,a.p)),e.Ab(32,49152,null,0,o.K,[e.j,e.p,e.F],null,null),(n()(),e.Tb(-1,0,["Pr\xe9nom:"])),(n()(),e.Bb(34,0,null,0,6,"ion-input",[["formControlName","firstname"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(n,l,t){var u=!0;return"ionBlur"===l&&(u=!1!==e.Mb(n,36)._handleBlurEvent(t.target)&&u),"ionChange"===l&&(u=!1!==e.Mb(n,36)._handleInputEvent(t.target)&&u),u}),a.N,a.n)),e.Ab(35,49152,null,0,o.D,[e.j,e.p,e.F],{type:[0,"type"]},null),e.Ab(36,16384,null,0,o.Hb,[e.p],null,null),e.Qb(1024,null,s.j,(function(n){return[n]}),[o.Hb]),e.Ab(38,671744,null,0,s.e,[[3,s.a],[8,null],[8,null],[6,s.j],[2,s.s]],{name:[0,"name"]},null),e.Qb(2048,null,s.k,null,[s.e]),e.Ab(40,16384,null,0,s.l,[[4,s.k]],null,null),(n()(),e.Bb(41,0,null,null,11,"ion-item",[],null,null,null,a.O,a.o)),e.Ab(42,49152,null,0,o.E,[e.j,e.p,e.F],null,null),(n()(),e.Bb(43,0,null,0,2,"ion-label",[],null,null,null,a.P,a.p)),e.Ab(44,49152,null,0,o.K,[e.j,e.p,e.F],null,null),(n()(),e.Tb(-1,0,["Email:"])),(n()(),e.Bb(46,0,null,0,6,"ion-input",[["formControlName","email"],["type","email"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(n,l,t){var u=!0;return"ionBlur"===l&&(u=!1!==e.Mb(n,48)._handleBlurEvent(t.target)&&u),"ionChange"===l&&(u=!1!==e.Mb(n,48)._handleInputEvent(t.target)&&u),u}),a.N,a.n)),e.Ab(47,49152,null,0,o.D,[e.j,e.p,e.F],{type:[0,"type"]},null),e.Ab(48,16384,null,0,o.Hb,[e.p],null,null),e.Qb(1024,null,s.j,(function(n){return[n]}),[o.Hb]),e.Ab(50,671744,null,0,s.e,[[3,s.a],[8,null],[8,null],[6,s.j],[2,s.s]],{name:[0,"name"]},null),e.Qb(2048,null,s.k,null,[s.e]),e.Ab(52,16384,null,0,s.l,[[4,s.k]],null,null),(n()(),e.Bb(53,0,null,null,11,"ion-item",[],null,null,null,a.O,a.o)),e.Ab(54,49152,null,0,o.E,[e.j,e.p,e.F],null,null),(n()(),e.Bb(55,0,null,0,2,"ion-label",[],null,null,null,a.P,a.p)),e.Ab(56,49152,null,0,o.K,[e.j,e.p,e.F],null,null),(n()(),e.Tb(-1,0,["Password:"])),(n()(),e.Bb(58,0,null,0,6,"ion-input",[["formControlName","password"],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(n,l,t){var u=!0;return"ionBlur"===l&&(u=!1!==e.Mb(n,60)._handleBlurEvent(t.target)&&u),"ionChange"===l&&(u=!1!==e.Mb(n,60)._handleInputEvent(t.target)&&u),u}),a.N,a.n)),e.Ab(59,49152,null,0,o.D,[e.j,e.p,e.F],{type:[0,"type"]},null),e.Ab(60,16384,null,0,o.Hb,[e.p],null,null),e.Qb(1024,null,s.j,(function(n){return[n]}),[o.Hb]),e.Ab(62,671744,null,0,s.e,[[3,s.a],[8,null],[8,null],[6,s.j],[2,s.s]],{name:[0,"name"]},null),e.Qb(2048,null,s.k,null,[s.e]),e.Ab(64,16384,null,0,s.l,[[4,s.k]],null,null),(n()(),e.Bb(65,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),e.Bb(66,0,null,null,2,"ion-button",[["class","ion-margin-top"]],null,[[null,"click"]],(function(n,l,t){var e=!0,u=n.component;return"click"===l&&(e=!1!==u.send(u.loginBtn?"login":"create")&&e),e}),a.B,a.b)),e.Ab(67,49152,null,0,o.h,[e.j,e.p,e.F],null,null),(n()(),e.Tb(68,0,[" "," "])),(n()(),e.Bb(69,0,null,null,9,"div",[["class","footer"]],null,null,null,null,null)),(n()(),e.Bb(70,0,null,null,6,"ion-note",[["class","ion-text-center"]],null,null,null,a.T,a.t)),e.Ab(71,49152,null,0,o.V,[e.j,e.p,e.F],null,null),(n()(),e.Bb(72,0,null,0,4,"p",[],null,null,null,null,null)),(n()(),e.qb(16777216,null,null,1,null,A)),e.Ab(74,16384,null,0,r.l,[e.W,e.S],{ngIf:[0,"ngIf"]},null),(n()(),e.Bb(75,0,null,null,1,"a",[["class","ion-color-light"],["href","#"]],null,[[null,"click"]],(function(n,l,t){var e=!0,u=n.component;return"click"===l&&(t.preventDefault(),e=0!=(u.loginBtn=!u.loginBtn)&&e),e}),null,null)),(n()(),e.Tb(76,null,[" "," "])),(n()(),e.qb(16777216,null,null,1,null,C)),e.Ab(78,16384,null,0,r.l,[e.W,e.S],{ngIf:[0,"ngIf"]},null)],(function(n,l){var t=l.component,e=n(l,6,0,!0,t.loginBtn);n(l,5,0,e),n(l,8,0,t.loginBtn),n(l,10,0,!t.loginBtn),n(l,13,0,t.authForm),n(l,23,0,"text"),n(l,26,0,"lastname"),n(l,35,0,"text"),n(l,38,0,"firstname"),n(l,47,0,"email"),n(l,50,0,"email"),n(l,59,0,"password"),n(l,62,0,"password"),n(l,74,0,!t.loginBtn),n(l,78,0,t.loginBtn)}),(function(n,l){var t=l.component;n(l,11,0,e.Mb(l,15).ngClassUntouched,e.Mb(l,15).ngClassTouched,e.Mb(l,15).ngClassPristine,e.Mb(l,15).ngClassDirty,e.Mb(l,15).ngClassValid,e.Mb(l,15).ngClassInvalid,e.Mb(l,15).ngClassPending),n(l,16,0,t.loginBtn),n(l,22,0,e.Mb(l,28).ngClassUntouched,e.Mb(l,28).ngClassTouched,e.Mb(l,28).ngClassPristine,e.Mb(l,28).ngClassDirty,e.Mb(l,28).ngClassValid,e.Mb(l,28).ngClassInvalid,e.Mb(l,28).ngClassPending),n(l,34,0,e.Mb(l,40).ngClassUntouched,e.Mb(l,40).ngClassTouched,e.Mb(l,40).ngClassPristine,e.Mb(l,40).ngClassDirty,e.Mb(l,40).ngClassValid,e.Mb(l,40).ngClassInvalid,e.Mb(l,40).ngClassPending),n(l,46,0,e.Mb(l,52).ngClassUntouched,e.Mb(l,52).ngClassTouched,e.Mb(l,52).ngClassPristine,e.Mb(l,52).ngClassDirty,e.Mb(l,52).ngClassValid,e.Mb(l,52).ngClassInvalid,e.Mb(l,52).ngClassPending),n(l,58,0,e.Mb(l,64).ngClassUntouched,e.Mb(l,64).ngClassTouched,e.Mb(l,64).ngClassPristine,e.Mb(l,64).ngClassDirty,e.Mb(l,64).ngClassValid,e.Mb(l,64).ngClassInvalid,e.Mb(l,64).ngClassPending),n(l,68,0,t.loginBtn?"Se connecter":"Cr\xe9er un compte"),n(l,76,0,t.loginBtn?"Creer mon compte":"Se connecter avec un compte existant")}))}function v(n){return e.Vb(0,[(n()(),e.Bb(0,0,null,null,1,"nomades-network-auth-page",[],null,null,null,O,m)),e.Ab(1,114688,null,0,h,[p],null,null)],(function(n,l){n(l,1,0)}),null)}var w=e.xb("nomades-network-auth-page",h,v,{},{},[]),y=t("ofez"),B=t("FUUT");const _=!1;function M(n=_,l){switch(l.type){case b.a.LOGIN_SUCCESS:case b.a.CHECK_AUTH_SUCCESS:return!0;case b.a.ERROR:case b.a.CHECK_AUTH_NO_USER:case b.a.TOKEN_DELETE:return!1;case b.a.LOGOUT_SUCCESS:return _;default:return n}}var k=t("D57K"),E=t("DyCy"),K=t("TLy2"),S=t("4e/d"),x=t("w0kG"),T=t("8j5Y"),U=t("ROBh"),F=t("qZtG"),I=t("gB8p");let $=(()=>{class n{constructor(n,l,t,e,u){this._action$=n,this._auth=l,this._router=t,this._route=e,this._store=u,this.loginAction$=this._action$.pipe(Object(E.f)(b.a.LOGIN),Object(K.a)(n=>this._auth.doAuth(n.payload)),Object(K.a)(n=>n.currentUser?Object(U.a)(new b.i(n)):this._handleErrors(n)),Object(S.a)(n=>Object(U.a)(new b.g(n)))),this.checkMainAction$=this._action$.pipe(Object(E.f)(b.a.CHECK_AUTH),Object(x.a)(this._store.pipe(Object(y.z)(n=>n.currentUser))),Object(K.a)(n=>{const[l,t=null]=n;return this._auth.isAuth(l.payload)}),Object(K.a)(n=>n.currentUser?Object(F.a)(Object(U.a)(new b.d(n),new I.c({currentUser:n.currentUser}))):Object(F.a)(Object(U.a)(new b.c))),Object(T.a)(n=>console.log("in effect ...")),Object(S.a)(n=>this._handleErrors(n))),this.logoutAction$=this._action$.pipe(Object(E.f)(b.a.LOGOUT),Object(K.a)(()=>this._auth.doLogout()),Object(K.a)(n=>Object(F.a)(Object(U.a)(new b.l,new b.k))),Object(K.a)(n=>(this._router.navigate(["/auth"]),Object(U.a)(n))),Object(S.a)(n=>this._handleErrors(n))),this.createUserAction$=this._action$.pipe(Object(E.f)(b.a.CREATE),Object(K.a)(n=>this._auth.doCreateUser(n.payload)),Object(K.a)(n=>n.currentUser?Object(U.a)(new b.f(n)):this._handleErrors(n)),Object(S.a)(n=>this._handleErrors(n))),this.createUserSuccessAction$=this._action$.pipe(Object(E.f)(b.a.CREATE_SUCCESS),Object(K.a)(n=>n&&n.payload?Object(U.a)(new b.n(n.payload),new b.b):this._handleErrors({message:"No payload or no user data on payload"})),Object(T.a)(n=>k.b(this,void 0,void 0,(function*(){yield this._router.navigate(["./confirme"]).catch(n=>n)}))),Object(S.a)(n=>this._handleErrors(n))),this.userSuccessAction$=this._action$.pipe(Object(E.f)(b.a.LOGIN_SUCCESS),Object(K.a)(n=>{const{payload:l=null}=n;return l?Object(F.a)(Object(U.a)(new b.n(l)),Object(U.a)(new b.b)):this._handleErrors()}),Object(S.a)(n=>this._handleErrors(n)),Object(T.a)(n=>{this._router.navigate(["/index"])}))}_handleErrors(n={message:null}){return Object(F.a)(Object(U.a)(new b.g(n)))}}return k.c([Object(E.b)(),k.f("design:type",Object)],n.prototype,"loginAction$",void 0),k.c([Object(E.b)(),k.f("design:type",Object)],n.prototype,"checkMainAction$",void 0),k.c([Object(E.b)(),k.f("design:type",Object)],n.prototype,"logoutAction$",void 0),k.c([Object(E.b)(),k.f("design:type",Object)],n.prototype,"createUserAction$",void 0),k.c([Object(E.b)(),k.f("design:type",Object)],n.prototype,"createUserSuccessAction$",void 0),k.c([Object(E.b)(),k.f("design:type",Object)],n.prototype,"userSuccessAction$",void 0),n})();var N=t("Zx/g"),L=t("1VvW"),q=t("SKbq");class D{constructor(n){Object(q.a)(n,"AuthStoreModule")}}var P=t("SYbc");class V{}t.d(l,"AuthModuleNgFactory",(function(){return H}));var H=e.yb(u,[],(function(n){return e.Jb([e.Kb(512,e.m,e.jb,[[8,[i.a,w]],[3,e.m],e.D]),e.Kb(4608,r.n,r.m,[e.z,[2,r.v]]),e.Kb(4608,o.a,o.a,[e.F,e.g]),e.Kb(4608,o.Cb,o.Cb,[o.a,e.m,e.w]),e.Kb(4608,o.Eb,o.Eb,[o.a,e.m,e.w]),e.Kb(4608,s.c,s.c,[]),e.Kb(4608,s.r,s.r,[]),e.Kb(4608,p,p,[y.o]),e.Kb(1073742336,r.c,r.c,[]),e.Kb(1073742336,o.Bb,o.Bb,[]),e.Kb(1073742336,B.a,B.a,[]),e.Kb(1073742336,s.q,s.q,[]),e.Kb(1073742336,s.n,s.n,[]),e.Kb(1024,y.J,(function(){return[{}]}),[]),e.Kb(1024,y.k,(function(){return[{key:"auth",reducerFactory:y.v,metaReducers:[],initialState:void 0}]}),[]),e.Kb(1024,y.K,y.Q,[e.w,y.J,y.k]),e.Kb(1024,y.I,(function(){return[M]}),[]),e.Kb(1024,y.L,(function(n){return[n]}),[y.I]),e.Kb(1024,y.b,(function(n,l,t){return[y.R(n,l,t)]}),[e.w,y.I,y.L]),e.Kb(1073873408,y.p,y.p,[y.K,y.b,y.h,y.r]),e.Kb(512,$,$,[E.a,N.a,L.m,L.a,y.o]),e.Kb(1024,E.k,(function(n){return[E.g(n)]}),[$]),e.Kb(1073742336,E.d,E.d,[E.e,E.k,[2,y.r],[2,y.p]]),e.Kb(1073742336,y.q,y.q,[]),e.Kb(1073742336,D,D,[[3,D]]),e.Kb(1073742336,L.p,L.p,[[2,L.u],[2,L.m]]),e.Kb(1073742336,V,V,[]),e.Kb(1073742336,u,u,[]),e.Kb(1024,L.k,(function(){return[[{path:"",component:h,canActivate:[P.a]}]]}),[])])}))}}]);