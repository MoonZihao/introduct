webpackJsonp([0],{"+rTr":function(t,s,i){"use strict";s.a={name:"slide1",props:["message"],data:function(){return{lis:[{title:"出生年月：",content:"1995.08"},{title:"政治面貌：",content:"共青团员"},{title:"联系电话：",content:"15220037627"},{title:"联系邮箱：",content:"719457865@qq.com"},{title:"所在地：",content:"广东广州"},{title:"生源地：",content:"广东汕头"},{title:"毕业院校：",content:"广东轻工职业技术学院"}]}}}},"1Ggk":function(t,s,i){"use strict";s.a={name:"swiper-slide",data:function(){return{slideClass:"swiper-slide"}},ready:function(){this.update()},mounted:function(){this.update(),this.$parent.options.slideClass&&(this.slideClass=this.$parent.options.slideClass)},updated:function(){this.update()},attached:function(){this.update()},methods:{update:function(){this.$parent&&this.$parent.swiper&&this.$parent.swiper.update&&(this.$parent.swiper.update(!0),this.$parent.options.loop&&this.$parent.swiper.reLoop())}}}},"1bNq":function(t,s,i){t.exports=i.p+"static/img/company1.2a52966.png"},"3N2D":function(t,s,i){"use strict";function e(t){i("Km3n")}var a=i("NRpK"),n=i("QDov"),r=i("46Yf"),c=e,l=r(a.a,n.a,!1,c,"data-v-6f6fbaf8",null);s.a=l.exports},"4vUd":function(t,s,i){"use strict";s.a={name:"slide4",props:["message"],data:function(){return{}}}},"6oPy":function(t,s,i){"use strict";s.a={name:"slide5",props:["message"],data:function(){return{}}}},"7HYK":function(t,s){},"8Y7e":function(t,s){},"90/E":function(t,s,i){t.exports=i.p+"static/img/photo2.4b96874.jpg"},B33R:function(t,s,i){"use strict";function e(t){i("IFWK")}var a=i("+rTr"),n=i("pR33"),r=i("46Yf"),c=e,l=r(a.a,n.a,!1,c,"data-v-6f61a377",null);s.a=l.exports},CBTw:function(t,s){},DICR:function(t,s,i){"use strict";var e=i("41jX"),a=(i.n(e),i("B33R")),n=i("3N2D"),r=i("Qo5r"),c=i("QMym"),l=i("gFzr"),o=i("spLH");s.a={name:"app",components:{swiper:e.swiper,swiperSlide:e.swiperSlide,slide1:a.a,slide2:n.a,slide3:r.a,slide4:c.a,slide5:l.a,slide6:l.a,pagination:o.a},data:function(){return{swiperOption:{paginationindex:0,autoplay:!1,speed:200,direction:"vertical",grabCursor:!1,prevButton:".swiper-button-prev",nextButton:".swiper-button-next",mousewheelControl:!0,observeParents:!0,resistanceRatio:.5,onTransitionStart:function(t){this.paginationindex=t.activeIndex}}}},methods:{pi1:function(){return this.swiperOption.paginationindex},nexthide:function(){return 4==this.swiperOption.paginationindex},recieveindex:function(t){this.swiperOption.paginationindex=t,this.swiper.slideTo(this.swiperOption.paginationindex,200,!0)}},computed:{swiper:function(){return this.$refs.mySwiper.swiper}}}},IFWK:function(t,s){},JQa5:function(t,s){},Jurw:function(t,s,i){t.exports=i.p+"static/img/photo1.bb9619d.jpg"},JyXB:function(t,s,i){"use strict";s.a={name:"slide3",props:["message"],data:function(){return{lists:[{name:"HTML(5)/CSS(3)：",classname:"li1"},{name:"Java：",classname:"li2"},{name:"JavaScript/JQuery：",classname:"li3"},{name:"Vue.js/React.js：",classname:"li4"},{name:"photoshop：",classname:"li5"}]}}}},Kg1o:function(t,s,i){"use strict";var e=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"inner"},[e("div",{staticClass:"line"}),t._v(" "),e("div",{staticClass:"now"},[t._v("NOW")]),t._v(" "),e("div",{staticClass:"box-a"},[e("div",{staticClass:"line1"}),t._v(" "),t._m(0),t._v(" "),e("transition",{attrs:{name:"rightanim"}},[3==t.message?e("div",{staticClass:"right-div"},[e("div",{staticClass:"tri"}),t._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"company"},[t._v("太平洋网络有限公司(PCgroup)")]),t._v(" "),e("div",{staticClass:"intro"},[t._v("前端开发工程师")]),t._v(" "),e("div",{staticClass:"m"},[t._v("在太平洋网络有限公司广州总部担任前端开发工程师，按照公司前端技术规范，负责太平洋电脑网、汽车网、家居网、亲子网、时尚网五网(PC端/移动端)专题页面单页开发。与后端、设计、编辑、销售等需求方交流对接。")])]),t._v(" "),e("div",{staticClass:"trapezoid"},[e("div",{staticClass:"white"}),t._v(" "),e("img",{attrs:{src:i("1bNq")}})])]):t._e()])],1),t._v(" "),e("div",{staticClass:"box-b"},[e("div",{staticClass:"line1"}),t._v(" "),t._m(1),t._v(" "),e("transition",{attrs:{name:"rightanim1"}},[3==t.message?e("div",{staticClass:"right-div"},[e("div",{staticClass:"tri"}),t._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"company"},[t._v("深圳市来福儿网络科技有限公司")]),t._v(" "),e("div",{staticClass:"intro"},[t._v("H5前端工程师")]),t._v(" "),e("div",{staticClass:"m"},[t._v("在深圳市来福儿网络科技有限公司（广州分部）担任前端工程师，负责独立开发公司购物官网（移动端/PC端）前端页面，与美工设计人员沟通设计页面，与后台对接。学习 React.JS 框架，学习微信小程序。")])]),t._v(" "),e("div",{staticClass:"trapezoid"},[e("div",{staticClass:"white"}),t._v(" "),e("img",{attrs:{src:i("uqR9")}})])]):t._e()])],1)])},a=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"time"},[t._v("2017.07 ~ "),i("br"),t._v("2017.10")])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"time"},[t._v("2017.02 ~ "),i("br"),t._v("2017.06")])}],n={render:e,staticRenderFns:a};s.a=n},Km3n:function(t,s){},M93x:function(t,s,i){"use strict";function e(t){i("O7ms")}var a=i("DICR"),n=i("Q1xB"),r=i("46Yf"),c=e,l=r(a.a,n.a,!1,c,"data-v-282aab82",null);s.a=l.exports},NHnr:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=i("MVSX"),a=i("M93x"),n=i("41jX"),r=i.n(n);e.a.config.productionTip=!1,e.a.use(r.a),new e.a({el:"#app",template:"<App/>",components:{App:a.a}})},NRpK:function(t,s,i){"use strict";s.a={name:"slide2",props:["message"],data:function(){return{lists:[{title:"出生年月：",content:"1995年08月",classname:"li1"},{title:"联系电话：",content:"15220037627",classname:"li2"},{title:"联系邮箱：",content:"719457865@qq.com",classname:"li1"},{title:"所在地：",content:"广东广州",classname:"li2"},{title:"生源地：",content:"广东汕头",classname:"li1"},{title:"毕业院校：",content:"广东轻工职业技术学院",classname:"li2"},{title:"学历：",content:"大专",classname:"li1"},{title:"目前状态：",content:"离职",classname:"li2"}]}}}},O7ms:function(t,s){},Q1xB:function(t,s,i){"use strict";var e=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{attrs:{id:"app"}},[i("swiper",{ref:"mySwiper",attrs:{options:t.swiperOption}},[i("swiper-slide",{staticClass:"slide1"},[i("slide1",{attrs:{message:t.pi1()}})],1),t._v(" "),i("swiper-slide",{staticClass:"slide2"},[i("slide2",{attrs:{message:t.pi1()}})],1),t._v(" "),i("swiper-slide",{staticClass:"slide3"},[i("slide3",{attrs:{message:t.pi1()}})],1),t._v(" "),i("swiper-slide",{staticClass:"slide4"},[i("slide4",{attrs:{message:t.pi1()}})],1),t._v(" "),i("swiper-slide",{staticClass:"slide5"},[i("slide5",{attrs:{message:t.pi1()}})],1),t._v(" "),i("div",{staticClass:"swiper-button-next",class:{hide:t.nexthide()},attrs:{slot:"button-next"},slot:"button-next"})],1),t._v(" "),i("pagination",{attrs:{message:t.pi1()},on:{receive:t.recieveindex}})],1)},a=[],n={render:e,staticRenderFns:a};s.a=n},QDov:function(t,s,i){"use strict";var e=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"inner"},[e("ul",t._l(t.lists,function(s){return e("li",{class:s.classname},[e("div",{staticClass:"title"},[t._v(t._s(s.title))]),t._v(" "),e("div",{staticClass:"content"},[t._v(t._s(s.content))])])})),t._v(" "),t._m(0),t._v(" "),e("img",{attrs:{src:i("90/E")}}),t._v(" "),e("div",{staticClass:"line"})])},a=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"intro"},[t._v("一年前端工作经验，三年前端学习经验"),i("br"),t._v("性格乐观，良好的人际关系和沟通能力"),i("br"),t._v("自学能力强，对待问题能冷静解决")])}],n={render:e,staticRenderFns:a};s.a=n},QMym:function(t,s,i){"use strict";function e(t){i("JQa5")}var a=i("4vUd"),n=i("Kg1o"),r=i("46Yf"),c=e,l=r(a.a,n.a,!1,c,"data-v-6f8be9fa",null);s.a=l.exports},Qo5r:function(t,s,i){"use strict";function e(t){i("7HYK")}var a=i("JyXB"),n=i("wppp"),r=i("46Yf"),c=e,l=r(a.a,n.a,!1,c,"data-v-6f7dd279",null);s.a=l.exports},"Svk/":function(t,s){},Tv6U:function(t,s,i){"use strict";var e=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"swiper-container"},[t._t("parallax-bg"),t._v(" "),i("div",{class:t.defaultSwiperClasses.wrapperClass},[t._t("default")],2),t._v(" "),t._t("pagination"),t._v(" "),t._t("button-prev"),t._v(" "),t._t("button-next"),t._v(" "),t._t("scrollbar")],2)},a=[],n={render:e,staticRenderFns:a};s.a=n},UCak:function(t,s){},UGy7:function(t,s,i){"use strict";function e(t){i("8Y7e")}Object.defineProperty(s,"__esModule",{value:!0});var a=i("1Ggk"),n=i("wsO1"),r=i("46Yf"),c=e,l=r(a.a,n.a,!1,c,"data-v-7f8b95fa",null);s.default=l.exports},eRWV:function(t,s,i){"use strict";s.a={name:"pagination",props:["message"],data:function(){return{items:[{num:"0",title:"首页"},{num:"1",title:"个人信息"},{num:"2",title:"专业技能"},{num:"3",title:"工作经历"},{num:"4",title:"项目经验"}]}},methods:{liclick:function(t){this.$emit("receive",t)}}}},fKDH:function(t,s,i){"use strict";var e=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"inner"},[i("ul",[i("transition",{attrs:{name:"lianim1"}},[4==t.message?i("li",{staticClass:"li-1"},[i("div",{staticClass:"title"},[t._v("太平洋网络五网专题活动页面")]),t._v(" "),i("div",{staticClass:"time"},[t._v("2017.07 ~ 2017.10")]),t._v(" "),i("div",{staticClass:"content"},[t._v("包括太平洋电脑网、汽车网、家居网、时尚网、亲子网五网(PC端/移动端)专题活动页面单页开发。涉及HTML(5)+CSS+JS+JQ技术。高度还原PSD设计稿，可兼容至ie7及各大浏览器。高性能、高效率完成页面，曾获公司月度前端做单量第一。与设计、编辑、销售等需求方进行需求交流，与后端对接。")]),t._v(" "),i("div",{staticClass:"bottom"},[i("div",{staticClass:"jiantou"}),t._v(" "),i("div",{staticClass:"word"},[t._v("示例：PC：                              WAP：")]),t._v(" "),i("a",{staticClass:"li1-a1",attrs:{href:"http://www1.pconline.com.cn/zhuanti/20170815/angdaxiaoma/pconline20170811xiaoma/index.html",target:"_blank"}}),t._v(" "),i("a",{staticClass:"li1-a2",attrs:{href:"http://www1.pclady.com.cn/zt/wellatva/index.html",target:"_blank"}}),t._v(" "),i("a",{staticClass:"li1-a3",attrs:{href:"http://m.pcbaby.com.cn/x/369/zt3698656.html",target:"_blank"}})])]):t._e()]),t._v(" "),i("transition",{attrs:{name:"lianim2"}},[4==t.message?i("li",{staticClass:"li-2"},[i("div",{staticClass:"title"},[t._v("来福掌柜官方网站（移动端）")]),t._v(" "),i("div",{staticClass:"time"},[t._v("2017.02 ~ 2017.06")]),t._v(" "),i("div",{staticClass:"content"},[t._v("该项目主要是完成来福掌柜官方购物网站系统的开发，包括美工设计阶段，后台开发阶段，前端开发阶段，后期上线阶段。前端部分使用的技术有html+css+javascript+jquery，包括主页、产品列表页、产品详情页、个人中心页、抽奖页等50个页面。与美工沟通设计页面，使用Ajax与后台接口进行对接。")]),t._v(" "),i("div",{staticClass:"bottom"},[i("div",{staticClass:"jiantou"}),t._v(" "),i("a",{attrs:{href:"http://m.laifuzg.com/",target:"_blank"}})])]):t._e()]),t._v(" "),i("transition",{attrs:{name:"lianim3"}},[4==t.message?i("li",{staticClass:"li-3"},[i("div",{staticClass:"title"},[t._v("个人简历 -- Vue（本页）")]),t._v(" "),i("div",{staticClass:"time"},[t._v("2017.10 ~ 2017.11")]),t._v(" "),i("div",{staticClass:"content"},[t._v("基于vue的前端个人简历，vue-cli脚手架搭建单页面项目组件化开发。使用vue-awesome-swiper插件实现分页功能。css3实现页面动画效果。webpack打包上传至github。")]),t._v(" "),i("div",{staticClass:"bottom"},[i("div",{staticClass:"jiantou"}),t._v(" "),i("a",{attrs:{href:"https://moonzihao.github.io/introduct/",target:"_blank"}})])]):t._e()]),t._v(" "),i("transition",{attrs:{name:"lianim4"}},[4==t.message?i("li",{staticClass:"li-4"},[i("div",{staticClass:"title"},[t._v("H5小游戏")]),t._v(" "),i("div",{staticClass:"time"},[t._v("2016.07 ~ 2016.08")]),t._v(" "),i("div",{staticClass:"content"},[t._v("经典复古游戏俄罗斯方块、贪吃蛇，使用H5中的canvas配合JS的setInterval方法对界面进行反复绘制，难点为JS中逻辑代码的实现。")])]):t._e()])],1)])},a=[],n={render:e,staticRenderFns:a};s.a=n},gFzr:function(t,s,i){"use strict";function e(t){i("CBTw")}var a=i("6oPy"),n=i("fKDH"),r=i("46Yf"),c=e,l=r(a.a,n.a,!1,c,"data-v-6f9a017b",null);s.a=l.exports},h9hw:function(t,s,i){"use strict";var e=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"pag"},[i("div",{staticClass:"bg-line"}),t._v(" "),i("ul",t._l(t.items,function(s,e){return i("li",{ref:"liref",refInFor:!0,on:{click:function(s){t.liclick(e)}}},[i("div",{staticClass:"round"}),t._v(" "),i("div",{staticClass:"title1"},[t._v(t._s(s.title))]),t._v(" "),e==t.message?i("div",{staticClass:"title"},[t._v(t._s(s.title))]):t._e()])}))])},a=[],n={render:e,staticRenderFns:a};s.a=n},"lU/Z":function(t,s,i){"use strict";var e="undefined"!=typeof window;e&&(window.Swiper=i("Bnvi")),s.a={name:"swiper",props:{options:{type:Object,default:function(){return{autoplay:3500}}},notNextTick:{type:Boolean,default:function(){return!1}}},data:function(){return{defaultSwiperClasses:{wrapperClass:"swiper-wrapper"}}},ready:function(){!this.swiper&&e&&(this.swiper=new Swiper(this.$el,this.options))},mounted:function(){var t=this,s=function(){if(!t.swiper&&e){delete t.options.notNextTick;var s=!1;for(var i in t.defaultSwiperClasses)t.defaultSwiperClasses.hasOwnProperty(i)&&t.options[i]&&(s=!0,t.defaultSwiperClasses[i]=t.options[i]);var a=function(){t.swiper=new Swiper(t.$el,t.options)};s?t.$nextTick(a):a()}}(this.options.notNextTick||this.notNextTick)?s():this.$nextTick(s)},updated:function(){this.swiper&&this.swiper.update()},beforeDestroy:function(){this.swiper&&(this.swiper.destroy(),delete this.swiper)}}},pR33:function(t,s,i){"use strict";var e=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"inner"},[e("transition",{attrs:{name:"photoanim"}},[e("div",[e("div",{staticClass:"round"},[e("div",{staticClass:"tri"})]),t._v(" "),0==t.message?e("img",{staticClass:"photo",attrs:{src:i("Jurw")}}):t._e(),t._v(" "),0==t.message?e("div",{staticClass:"name"},[t._v("程子豪")]):t._e(),t._v(" "),0==t.message?e("div",{staticClass:"position"},[t._v("前端开发工程师")]):t._e(),t._v(" "),0==t.message?e("div",{staticClass:"bottom-m"},[e("div",{staticClass:"email"},[t._v("E-mail：719457865@qq.com")]),t._v(" "),e("div",{staticClass:"tel"},[t._v("Tel：15220037627")])]):t._e()])]),t._v(" "),e("div",{staticClass:"line"})],1)},a=[],n={render:e,staticRenderFns:a};s.a=n},spLH:function(t,s,i){"use strict";function e(t){i("Svk/")}var a=i("eRWV"),n=i("h9hw"),r=i("46Yf"),c=e,l=r(a.a,n.a,!1,c,"data-v-483bc41e",null);s.a=l.exports},syvT:function(t,s,i){"use strict";function e(t){i("UCak")}Object.defineProperty(s,"__esModule",{value:!0});var a=i("lU/Z"),n=i("Tv6U"),r=i("46Yf"),c=e,l=r(a.a,n.a,!1,c,"data-v-24658116",null);s.default=l.exports},uqR9:function(t,s,i){t.exports=i.p+"static/img/company2.84027e4.png"},wppp:function(t,s,i){"use strict";var e=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"inner"},[i("ul",t._l(t.lists,function(s){return i("li",{class:s.classname},[i("div",{staticClass:"name"},[t._v(t._s(s.name))]),t._v(" "),i("div",{staticClass:"gray"}),t._v(" "),i("div",{staticClass:"blue-div"},[i("transition",{attrs:{name:"blueanim"}},[2==t.message?i("div",{staticClass:"blue"}):t._e()])],1)])})),t._v(" "),t._m(0)])},a=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"skill-intro"},[t._v("\n  精通HTML(5)/CSS(3)页面布局，高度还原设计稿"),i("br"),t._v("\n  高兼容性代码，兼容IE7+等各大主流浏览器"),i("br"),t._v("\n  原生JS编程，熟悉JS设计模式，熟练使用Ajax"),i("br"),t._v("\n  精通JQuery库，熟悉vue.js和react.js框架"),i("br"),t._v("\n  熟悉PS，对微信小程序有初步了解，熟悉github")])}],n={render:e,staticRenderFns:a};s.a=n},wsO1:function(t,s,i){"use strict";var e=function(){var t=this,s=t.$createElement;return(t._self._c||s)("div",{class:t.slideClass},[t._t("default")],2)},a=[],n={render:e,staticRenderFns:a};s.a=n}},["NHnr"]);
//# sourceMappingURL=app.56bc2d2f31b90df27189.js.map