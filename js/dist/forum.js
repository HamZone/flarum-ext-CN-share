(()=>{var e={38:e=>{var n;n=window,e.exports=function(e,n){if(!e.jWeixin){var i,t,o={config:"preVerifyJSAPI",onMenuShareTimeline:"menu:share:timeline",onMenuShareAppMessage:"menu:share:appmessage",onMenuShareQQ:"menu:share:qq",onMenuShareWeibo:"menu:share:weiboApp",onMenuShareQZone:"menu:share:QZone",previewImage:"imagePreview",getLocation:"geoLocation",openProductSpecificView:"openProductViewWithPid",addCard:"batchAddCard",openCard:"batchViewCard",chooseWXPay:"getBrandWCPayRequest",openEnterpriseRedPacket:"getRecevieBizHongBaoRequest",startSearchBeacons:"startMonitoringBeacons",stopSearchBeacons:"stopMonitoringBeacons",onSearchBeacons:"onBeaconsInRange",consumeAndShareCard:"consumedShareCard",openAddress:"editAddress"},r=function(){var e={};for(var n in o)e[o[n]]=n;return e}(),a=e.document,c=a.title,s=navigator.userAgent.toLowerCase(),d=navigator.platform.toLowerCase(),u=!(!d.match("mac")&&!d.match("win")),l=-1!=s.indexOf("wxdebugger"),p=-1!=s.indexOf("micromessenger"),f=-1!=s.indexOf("android"),m=-1!=s.indexOf("iphone")||-1!=s.indexOf("ipad"),g=(t=s.match(/micromessenger\/(\d+\.\d+\.\d+)/)||s.match(/micromessenger\/(\d+\.\d+)/))?t[1]:"",h={initStartTime:L(),initEndTime:0,preVerifyStartTime:0,preVerifyEndTime:0},v={version:1,appId:"",initTime:0,preVerifyTime:0,networkType:"",isPreVerifyOk:1,systemType:m?1:f?2:-1,clientVersion:g,url:encodeURIComponent(location.href)},S={},y={_completes:[]},I={state:0,data:{}};B((function(){h.initEndTime=L()}));var _=!1,w=[],T=(i={config:function(n){O("config",S=n);var i=!1!==S.check;B((function(){if(i)P(o.config,{verifyJsApiList:C(S.jsApiList),verifyOpenTagList:C(S.openTagList)},function(){y._complete=function(e){h.preVerifyEndTime=L(),I.state=1,I.data=e},y.success=function(e){v.isPreVerifyOk=0},y.fail=function(e){y._fail?y._fail(e):I.state=-1};var e=y._completes;return e.push((function(){!function(){if(!(u||l||S.debug||g<"6.0.2"||v.systemType<0)){var e=new Image;v.appId=S.appId,v.initTime=h.initEndTime-h.initStartTime,v.preVerifyTime=h.preVerifyEndTime-h.preVerifyStartTime,T.getNetworkType({isInnerInvoke:!0,success:function(n){v.networkType=n.networkType;var i="https://open.weixin.qq.com/sdk/report?v="+v.version+"&o="+v.isPreVerifyOk+"&s="+v.systemType+"&c="+v.clientVersion+"&a="+v.appId+"&n="+v.networkType+"&i="+v.initTime+"&p="+v.preVerifyTime+"&u="+v.url;e.src=i}})}}()})),y.complete=function(n){for(var i=0,t=e.length;i<t;++i)e[i]();y._completes=[]},y}()),h.preVerifyStartTime=L();else{I.state=1;for(var e=y._completes,n=0,t=e.length;n<t;++n)e[n]();y._completes=[]}})),T.invoke||(T.invoke=function(n,i,t){e.WeixinJSBridge&&WeixinJSBridge.invoke(n,V(i),t)},T.on=function(n,i){e.WeixinJSBridge&&WeixinJSBridge.on(n,i)})},ready:function(e){0!=I.state?e():(y._completes.push(e),!p&&S.debug&&e())},error:function(e){g<"6.0.2"||(-1==I.state?e(I.data):y._fail=e)},checkJsApi:function(e){P("checkJsApi",{jsApiList:C(e.jsApiList)},(e._complete=function(e){if(f){var n=e.checkResult;n&&(e.checkResult=JSON.parse(n))}e=function(e){var n=e.checkResult;for(var i in n){var t=r[i];t&&(n[t]=n[i],delete n[i])}return e}(e)},e))},onMenuShareTimeline:function(e){x(o.onMenuShareTimeline,{complete:function(){P("shareTimeline",{title:e.title||c,desc:e.title||c,img_url:e.imgUrl||"",link:e.link||location.href,type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareAppMessage:function(e){x(o.onMenuShareAppMessage,{complete:function(n){"favorite"===n.scene?P("sendAppMessage",{title:e.title||c,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""}):P("sendAppMessage",{title:e.title||c,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareQQ:function(e){x(o.onMenuShareQQ,{complete:function(){P("shareQQ",{title:e.title||c,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareWeibo:function(e){x(o.onMenuShareWeibo,{complete:function(){P("shareWeiboApp",{title:e.title||c,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareQZone:function(e){x(o.onMenuShareQZone,{complete:function(){P("shareQZone",{title:e.title||c,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},updateTimelineShareData:function(e){P("updateTimelineShareData",{title:e.title,link:e.link,imgUrl:e.imgUrl},e)},updateAppMessageShareData:function(e){P("updateAppMessageShareData",{title:e.title,desc:e.desc,link:e.link,imgUrl:e.imgUrl},e)},startRecord:function(e){P("startRecord",{},e)},stopRecord:function(e){P("stopRecord",{},e)},onVoiceRecordEnd:function(e){x("onVoiceRecordEnd",e)},playVoice:function(e){P("playVoice",{localId:e.localId},e)},pauseVoice:function(e){P("pauseVoice",{localId:e.localId},e)},stopVoice:function(e){P("stopVoice",{localId:e.localId},e)},onVoicePlayEnd:function(e){x("onVoicePlayEnd",e)},uploadVoice:function(e){P("uploadVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadVoice:function(e){P("downloadVoice",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},translateVoice:function(e){P("translateVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},chooseImage:function(e){P("chooseImage",{scene:"1|2",count:e.count||9,sizeType:e.sizeType||["original","compressed"],sourceType:e.sourceType||["album","camera"]},(e._complete=function(e){if(f){var n=e.localIds;try{n&&(e.localIds=JSON.parse(n))}catch(e){}}},e))},getLocation:function(e){},previewImage:function(e){P(o.previewImage,{current:e.current,urls:e.urls},e)},uploadImage:function(e){P("uploadImage",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadImage:function(e){P("downloadImage",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},getLocalImgData:function(e){!1===_?(_=!0,P("getLocalImgData",{localId:e.localId},(e._complete=function(e){if(_=!1,0<w.length){var n=w.shift();wx.getLocalImgData(n)}},e))):w.push(e)},getNetworkType:function(e){P("getNetworkType",{},(e._complete=function(e){e=function(e){var n=e.errMsg;e.errMsg="getNetworkType:ok";var i=e.subtype;if(delete e.subtype,i)e.networkType=i;else{var t=n.indexOf(":"),o=n.substring(t+1);switch(o){case"wifi":case"edge":case"wwan":e.networkType=o;break;default:e.errMsg="getNetworkType:fail"}}return e}(e)},e))},openLocation:function(e){P("openLocation",{latitude:e.latitude,longitude:e.longitude,name:e.name||"",address:e.address||"",scale:e.scale||28,infoUrl:e.infoUrl||""},e)}},i.getLocation=function(e){P(o.getLocation,{type:(e=e||{}).type||"wgs84"},(e._complete=function(e){delete e.type},e))},i.hideOptionMenu=function(e){P("hideOptionMenu",{},e)},i.showOptionMenu=function(e){P("showOptionMenu",{},e)},i.closeWindow=function(e){P("closeWindow",{},e=e||{})},i.hideMenuItems=function(e){P("hideMenuItems",{menuList:e.menuList},e)},i.showMenuItems=function(e){P("showMenuItems",{menuList:e.menuList},e)},i.hideAllNonBaseMenuItem=function(e){P("hideAllNonBaseMenuItem",{},e)},i.showAllNonBaseMenuItem=function(e){P("showAllNonBaseMenuItem",{},e)},i.scanQRCode=function(e){P("scanQRCode",{needResult:(e=e||{}).needResult||0,scanType:e.scanType||["qrCode","barCode"]},(e._complete=function(e){if(m){var n=e.resultStr;if(n){var i=JSON.parse(n);e.resultStr=i&&i.scan_code&&i.scan_code.scan_result}}},e))},i.openAddress=function(e){P(o.openAddress,{},(e._complete=function(e){e=function(e){return e.postalCode=e.addressPostalCode,delete e.addressPostalCode,e.provinceName=e.proviceFirstStageName,delete e.proviceFirstStageName,e.cityName=e.addressCitySecondStageName,delete e.addressCitySecondStageName,e.countryName=e.addressCountiesThirdStageName,delete e.addressCountiesThirdStageName,e.detailInfo=e.addressDetailInfo,delete e.addressDetailInfo,e}(e)},e))},i.openProductSpecificView=function(e){P(o.openProductSpecificView,{pid:e.productId,view_type:e.viewType||0,ext_info:e.extInfo},e)},i.addCard=function(e){for(var n=e.cardList,i=[],t=0,r=n.length;t<r;++t){var a=n[t],c={card_id:a.cardId,card_ext:a.cardExt};i.push(c)}P(o.addCard,{card_list:i},(e._complete=function(e){var n=e.card_list;if(n){for(var i=0,t=(n=JSON.parse(n)).length;i<t;++i){var o=n[i];o.cardId=o.card_id,o.cardExt=o.card_ext,o.isSuccess=!!o.is_succ,delete o.card_id,delete o.card_ext,delete o.is_succ}e.cardList=n,delete e.card_list}},e))},i.chooseCard=function(e){P("chooseCard",{app_id:S.appId,location_id:e.shopId||"",sign_type:e.signType||"SHA1",card_id:e.cardId||"",card_type:e.cardType||"",card_sign:e.cardSign,time_stamp:e.timestamp+"",nonce_str:e.nonceStr},(e._complete=function(e){e.cardList=e.choose_card_info,delete e.choose_card_info},e))},i.openCard=function(e){for(var n=e.cardList,i=[],t=0,r=n.length;t<r;++t){var a=n[t],c={card_id:a.cardId,code:a.code};i.push(c)}P(o.openCard,{card_list:i},e)},i.consumeAndShareCard=function(e){P(o.consumeAndShareCard,{consumedCardId:e.cardId,consumedCode:e.code},e)},i.chooseWXPay=function(e){P(o.chooseWXPay,A(e),e)},i.openEnterpriseRedPacket=function(e){P(o.openEnterpriseRedPacket,A(e),e)},i.startSearchBeacons=function(e){P(o.startSearchBeacons,{ticket:e.ticket},e)},i.stopSearchBeacons=function(e){P(o.stopSearchBeacons,{},e)},i.onSearchBeacons=function(e){x(o.onSearchBeacons,e)},i.openEnterpriseChat=function(e){P("openEnterpriseChat",{useridlist:e.userIds,chatname:e.groupName},e)},i.launchMiniProgram=function(e){P("launchMiniProgram",{targetAppId:e.targetAppId,path:function(e){if("string"==typeof e&&0<e.length){var n=e.split("?")[0],i=e.split("?")[1];return n+=".html",void 0!==i?n+"?"+i:n}}(e.path),envVersion:e.envVersion},e)},i.openBusinessView=function(e){P("openBusinessView",{businessType:e.businessType,queryString:e.queryString||"",envVersion:e.envVersion},(e._complete=function(e){if(f){var n=e.extraData;if(n)try{e.extraData=JSON.parse(n)}catch(n){e.extraData={}}}},e))},i.miniProgram={navigateBack:function(e){e=e||{},B((function(){P("invokeMiniProgramAPI",{name:"navigateBack",arg:{delta:e.delta||1}},e)}))},navigateTo:function(e){B((function(){P("invokeMiniProgramAPI",{name:"navigateTo",arg:{url:e.url}},e)}))},redirectTo:function(e){B((function(){P("invokeMiniProgramAPI",{name:"redirectTo",arg:{url:e.url}},e)}))},switchTab:function(e){B((function(){P("invokeMiniProgramAPI",{name:"switchTab",arg:{url:e.url}},e)}))},reLaunch:function(e){B((function(){P("invokeMiniProgramAPI",{name:"reLaunch",arg:{url:e.url}},e)}))},postMessage:function(e){B((function(){P("invokeMiniProgramAPI",{name:"postMessage",arg:e.data||{}},e)}))},getEnv:function(n){B((function(){n({miniprogram:"miniprogram"===e.__wxjs_environment})}))}},i),k=1,M={};return a.addEventListener("error",(function(e){if(!f){var n=e.target,i=n.tagName,t=n.src;if(("IMG"==i||"VIDEO"==i||"AUDIO"==i||"SOURCE"==i)&&-1!=t.indexOf("wxlocalresource://")){e.preventDefault(),e.stopPropagation();var o=n["wx-id"];if(o||(o=k++,n["wx-id"]=o),M[o])return;M[o]=!0,wx.ready((function(){wx.getLocalImgData({localId:t,success:function(e){n.src=e.localData}})}))}}}),!0),a.addEventListener("load",(function(e){if(!f){var n=e.target,i=n.tagName;if(n.src,"IMG"==i||"VIDEO"==i||"AUDIO"==i||"SOURCE"==i){var t=n["wx-id"];t&&(M[t]=!1)}}}),!0),T}function P(n,i,t){e.WeixinJSBridge?WeixinJSBridge.invoke(n,V(i),(function(e){b(n,e,t)})):O(n,t)}function x(n,i,t){e.WeixinJSBridge?WeixinJSBridge.on(n,(function(e){t&&t.trigger&&t.trigger(e),b(n,e,i)})):O(n,t||i)}function V(e){return(e=e||{}).appId=S.appId,e.verifyAppId=S.appId,e.verifySignType="sha1",e.verifyTimestamp=S.timestamp+"",e.verifyNonceStr=S.nonceStr,e.verifySignature=S.signature,e}function A(e){return{timeStamp:e.timestamp+"",nonceStr:e.nonceStr,package:e.package,paySign:e.paySign,signType:e.signType||"SHA1"}}function b(e,n,i){"openEnterpriseChat"!=e&&"openBusinessView"!==e||(n.errCode=n.err_code),delete n.err_code,delete n.err_desc,delete n.err_detail;var t=n.errMsg;t||(t=n.err_msg,delete n.err_msg,t=function(e,n){var i=e,t=r[i];t&&(i=t);var o="ok";if(n){var a=n.indexOf(":");"confirm"==(o=n.substring(a+1))&&(o="ok"),"failed"==o&&(o="fail"),-1!=o.indexOf("failed_")&&(o=o.substring(7)),-1!=o.indexOf("fail_")&&(o=o.substring(5)),"access denied"!=(o=(o=o.replace(/_/g," ")).toLowerCase())&&"no permission to execute"!=o||(o="permission denied"),"config"==i&&"function not exist"==o&&(o="ok"),""==o&&(o="fail")}return i+":"+o}(e,t),n.errMsg=t),(i=i||{})._complete&&(i._complete(n),delete i._complete),t=n.errMsg||"",S.debug&&!i.isInnerInvoke&&alert(JSON.stringify(n));var o=t.indexOf(":");switch(t.substring(o+1)){case"ok":i.success&&i.success(n);break;case"cancel":i.cancel&&i.cancel(n);break;default:i.fail&&i.fail(n)}i.complete&&i.complete(n)}function C(e){if(e){for(var n=0,i=e.length;n<i;++n){var t=e[n],r=o[t];r&&(e[n]=r)}return e}}function O(e,n){if(!(!S.debug||n&&n.isInnerInvoke)){var i=r[e];i&&(e=i),n&&n._complete&&delete n._complete,console.log('"'+e+'",',n||"")}}function L(){return(new Date).getTime()}function B(n){p&&(e.WeixinJSBridge?n():a.addEventListener&&a.addEventListener("WeixinJSBridgeReady",n,!1))}}(n)}},n={};function i(t){var o=n[t];if(void 0!==o)return o.exports;var r=n[t]={exports:{}};return e[t](r,r.exports,i),r.exports}i.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return i.d(n,{a:n}),n},i.d=(e,n)=>{for(var t in n)i.o(n,t)&&!i.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},i.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var t={};(()=>{"use strict";i.r(t);const e=flarum.core.compat["forum/app"];var n=i.n(e);const o=flarum.core.compat["common/extend"],r=flarum.core.compat["forum/components/CommentPost"];var a=i.n(r),c=i(38);const s=i.n(c)();flarum.core.compat["forum/components/DiscussionHero"],flarum.core.compat["components/IndexPage"],n().initializers.add("hamzone/share",(function(){(0,o.extend)(a().prototype,"headerItems",(function(e){var n=this.attrs.post.data.relationships.discussion.data.id;"micromessenger"==window.navigator.userAgent.toLowerCase().match(/MicroMessenger/i)&&s.miniProgram.getEnv((function(e){e.miniprogram&&n&&app.store.find("discussions",n).then((function(e){s.miniProgram.postMessage({data:{title:e.title(),path:app.forum.attribute("baseUrl")+"/d/"+n,imageUrl:e.user().data.attributes.avatarUrl?e.user().data.attributes.avatarUrl:""}})}))}))}))}))})(),module.exports=t})();
//# sourceMappingURL=forum.js.map