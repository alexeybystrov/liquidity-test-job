(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{221:function(t,e,r){var content=r(303);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(67).default)("3a3359aa",content,!0,{sourceMap:!1})},226:function(t,e,r){"use strict";r.d(e,"a",(function(){return l}));var n=r(9),o=(r(70),r(77)),c=r.n(o).a.create({baseURL:"https://swapi.dev/api/"}),l=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(e){var r,text,n,o,l=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=l.length>1&&void 0!==l[1]?l[1]:1,text=l.length>2&&void 0!==l[2]?l[2]:"",t.prev=2,n={search:text,page:r},t.next=6,c.get(e,{params:n});case 6:return o=t.sent,t.abrupt("return",o.data);case 10:return t.prev=10,t.t0=t.catch(2),alert(t.t0),t.abrupt("return",null);case 14:case"end":return t.stop()}}),t,null,[[2,10]])})));return function(e){return t.apply(this,arguments)}}()},240:function(t,e,r){"use strict";var n=r(349),o=r(351),c=r(350),l=r(79),component=Object(l.a)({},(function(){var t=this._self._c;return t(n.a,[t(c.a,[t(o.a,[t("Nuxt")],1)],1)],1)}),[],!1,null,null,null);e.a=component.exports},250:function(t,e,r){r(251),t.exports=r(252)},302:function(t,e,r){"use strict";r(221)},303:function(t,e,r){var n=r(66)((function(i){return i[1]}));n.push([t.i,"h1[data-v-bfedb7fe]{font-size:20px}",""]),n.locals={},t.exports=n},320:function(t,e,r){"use strict";r.r(e);var n=r(9),o=(r(70),r(173),r(226)),c={setCharactersByPage:function(t){var e=arguments;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,c,l;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=t.commit,c=e.length>1&&void 0!==e[1]?e[1]:1,r.next=4,Object(o.a)("people",c);case 4:l=r.sent,n("setCharacters",l.results),n("setTotalCount",l.count);case 7:case"end":return r.stop()}}),r)})))()}};e.default={state:function(){return{list:[],totalCount:0}},mutations:{setCharacters:function(t,e){t.list=e},editCharacter:function(t,e){var r=e.payload,i=e.i;t.list.splice(i,1,r)},deleteCharacter:function(t,i){t.list.splice(i,1)},addCharacter:function(t,e){t.list.push(e)},setTotalCount:function(t,e){t.totalCount=e}},actions:c}},63:function(t,e,r){"use strict";var n=r(349),o={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},c=(r(302),r(79)),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e(n.a,{attrs:{dark:""}},[404===t.error.statusCode?e("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):e("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),e("NuxtLink",{attrs:{to:"/"}},[t._v("\n    Home page\n  ")])],1)}),[],!1,null,"bfedb7fe",null);e.a=component.exports}},[[250,15,5,16]]]);