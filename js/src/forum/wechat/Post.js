import { extend } from 'flarum/common/extend';
// import CommentPost from 'flarum/forum/components/CommentPost';
import wx from 'weixin-js-sdk-ts'
import HeaderSecondary from 'flarum/common/components/HeaderSecondary';

export default function () {

    extend(HeaderSecondary.prototype, 'items', function (items) {
        console.log(1)
        var ua = window.navigator.userAgent.toLowerCase();
        if (ua.match(/MicroMessenger/i) == 'micromessenger') {
            //微信环境
            wx.miniProgram.getEnv(function (res) {
                if (res.miniprogram) {
                    wechat({
                        title: document.title,
                        path: window.location.href,
                    })
                }
            })
        }
    });

    function wechat(data){
        wx.miniProgram.postMessage({ data: data })
    }
}
