import { extend } from 'flarum/common/extend';
import CommentPost from 'flarum/forum/components/CommentPost';
import wx from 'weixin-js-sdk-ts'
import DiscussionHero from 'flarum/forum/components/DiscussionHero';
import IndexPage from 'flarum/components/IndexPage';


export default function () {
    extend(CommentPost.prototype, 'headerItems', function (items) {
        const post = this.attrs.post;
        const id = post.data.relationships.discussion.data.id;
        var ua = window.navigator.userAgent.toLowerCase();
        if (ua.match(/MicroMessenger/i) == 'micromessenger') {
            //微信环境
            wx.miniProgram.getEnv(function (res) {
                if (res.miniprogram && id) {
                    app.store.find('discussions', id).then(discussion => {
                        wechat({ 
                            title: discussion.title(), 
                            path: app.forum.attribute('baseUrl')+"/d/"+id, 
                            imageUrl: discussion.user().data.attributes.avatarUrl?
                                discussion.user().data.attributes.avatarUrl:"" 
                        })
                    });
                   
                }

            })

        }
    })

    extend(IndexPage.prototype, 'hero', function (items) {
        // console.log(app)
        // console.log(document.title)
        // console.log(window.location.href)
        var ua = window.navigator.userAgent.toLowerCase();
        if (ua.match(/MicroMessenger/i) == 'micromessenger') {
            //微信环境
            wx.miniProgram.getEnv(function (res) {
                if (res.miniprogram) {
                    wechat({
                        title: document.title,
                        path:window.location.href,
                        imageUrl: ""
                    })
                }
            })
        }
    });

    function wechat(data){
        wx.miniProgram.postMessage({ data: data })
    }
}
