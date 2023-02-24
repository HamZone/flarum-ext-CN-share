import { extend } from 'flarum/common/extend';
import CommentPost from 'flarum/forum/components/CommentPost';
import wx from 'weixin-js-sdk-ts'
import DiscussionHero from 'flarum/forum/components/DiscussionHero';
import IndexPage from 'flarum/components/IndexPage';

export default function () {
    extend(IndexPage.prototype, 'hero', function (items) {
        // console.log(items)
        if(app.current.data.routeName=="discussion"){
            return;
        }
        var ua = window.navigator.userAgent.toLowerCase();
        if (ua.match(/MicroMessenger/i) == 'micromessenger') {
            //微信环境
            wx.miniProgram.getEnv(function (res) {
                if (res.miniprogram) {
                    wx.miniProgram.postMessage({ data:{
                        title: document.title,
                        path: window.location.href,
                        imageUrl: ""
                    }})
                }
            })
        }
    });
}