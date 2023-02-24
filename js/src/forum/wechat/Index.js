import { extend } from 'flarum/common/extend';
import wx from 'weixin-js-sdk-ts'
import HeaderSecondary from 'flarum/common/components/HeaderSecondary';

export default function () {
    extend(HeaderSecondary.prototype, 'items', function (items) {
        var ua = window.navigator.userAgent.toLowerCase();
        if (ua.match(/MicroMessenger/i) == 'micromessenger') {
            //微信环境
            wx.miniProgram.getEnv(function (res) {
                if (res.miniprogram) {
                    wx.miniProgram.postMessage({ data:{
                        title: window.document.title,
                        path: window.location.href,
                        imageUrl: ""
                    }})
                }
            })
        }
    });
}