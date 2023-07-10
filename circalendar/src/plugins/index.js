/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import { loadFonts } from './webfontloader'
import vuetify from './vuetify'
import pinia from '../store'
import router from '../router'

!function(){var u={d:function(){return("0"+this.getDate()).slice(-2)},D:function(t){return new Intl.DateTimeFormat(t,{weekday:"short"}).format(this)},j:function(){return this.getDate()},l:function(t){return new Intl.DateTimeFormat(t,{weekday:"long"}).format(this)},N:function(){var t=this.getDay();return 0===t?7:t},S:function(){var t=this.getDate();return t%10==1&&11!==t?"st":t%10==2&&12!==t?"nd":t%10==3&&13!==t?"rd":"th"},w:function(){return this.getDay()},z:function(){return Math.floor((this-new Date(this.getFullYear(),0,1))/864e5)},W:function(){let t=new Date(this.valueOf());var e=(this.getDay()+6)%7;t.setDate(t.getDate()-e+3);e=t.valueOf();return t.setMonth(0,1),4!==t.getDay()&&t.setMonth(0,1+(4-t.getDay()+7)%7),Math.ceil((e-t)/6048e5)+1},F:function(t){return new Intl.DateTimeFormat(t,{month:"long"}).format(this)},m:function(){return("0"+(this.getMonth()+1)).slice(-2)},M:function(t){return new Intl.DateTimeFormat(t,{month:"short"}).format(this)},n:function(){return this.getMonth()+1},t:function(){let t=this.getFullYear(),e=this.getMonth()+1;return 12===e&&(t=t++,e=0),new Date(t,e,0).getDate()},L:function(){var t=this.getFullYear();return t%400==0||t%100!=0&&t%4==0?1:0},o:function(){let t=new Date(this.valueOf());return t.setDate(t.getDate()-(this.getDay()+6)%7+3),t.getFullYear()},Y:function(){return this.getFullYear()},y:function(){return(""+this.getFullYear()).slice(-2)},a:function(){return this.getHours()<12?"am":"pm"},A:function(){return this.getHours()<12?"AM":"PM"},B:function(){return("00"+Math.floor(1e3*((this.getUTCHours()+1)%24+this.getUTCMinutes()/60+this.getUTCSeconds()/3600)/24)).slice(-3)},g:function(){return this.getHours()%12||12},G:function(){return this.getHours()},h:function(){return("0"+(this.getHours()%12||12)).slice(-2)},H:function(){return("0"+this.getHours()).slice(-2)},i:function(){return("0"+this.getMinutes()).slice(-2)},s:function(){return("0"+this.getSeconds()).slice(-2)},v:function(){return("00"+this.getMilliseconds()).slice(-3)},e:function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},I:function(){let n=null;for(let e=0;e<12;++e){let t=new Date(this.getFullYear(),e,1);var r=t.getTimezoneOffset();if(null===n)n=r;else{if(r<n){n=r;break}if(r>n)break}}return this.getTimezoneOffset()===n|0},O:function(){var t=this.getTimezoneOffset();return(-t<0?"-":"+")+("0"+Math.floor(Math.abs(t/60))).slice(-2)+("0"+Math.abs(t%60)).slice(-2)},P:function(){var t=this.getTimezoneOffset();return(-t<0?"-":"+")+("0"+Math.floor(Math.abs(t/60))).slice(-2)+":"+("0"+Math.abs(t%60)).slice(-2)},T:function(t){t=this.toLocaleTimeString(t,{timeZoneName:"short"}).split(" "),t=t[t.length-1];return"GMT+1"==t?"CET":"GMT+2"==t?"CEST":t},Z:function(){return 60*-this.getTimezoneOffset()},c:function(){return this.format("Y-m-d\\TH:i:sP")},r:function(){return this.format("D, d M Y H:i:s O")},U:function(){return Math.floor(this.getTime()/1e3)}};Date.prototype.format=function(t,r=navigator.language){var i=this;return t.replace(/(\\?)(.)/g,function(t,e,n){return""===e&&u[n]?u[n].call(i,r):n})}}.call(this);

export function registerPlugins (app) {
  loadFonts()
  app
    .use(vuetify)
    .use(router)
    .use(pinia)
  app.config.globalProperties.$fakeUser = {loggedIn: false, dialog: false};
}
