import { extend } from 'flarum/common/extend';
import CommentPost from 'flarum/forum/components/CommentPost';
import wx from 'weixin-js-sdk-ts'
import DiscussionHero from 'flarum/forum/components/DiscussionHero';

export default function () {
    extend(CommentPost.prototype, 'headerItems', function (items) {
        const post = this.attrs.post;
        const id = post.relationships.discussion.data.id;
        console.log(post)
        var ua = window.navigator.userAgent.toLowerCase();
        console.log(ua)
        if (ua.match(/MicroMessenger/i) == 'micromessenger') {
            console.log(wx)
            //微信环境
            wx.miniProgram.getEnv(function (res) {
                if (res.miniprogram && id) {
                    console.log(res)
                    app.store.find('discussions', id).then(discussion => {
                        wx.miniProgram.postMessage({ data: { 
                            title: discussion.title(), 
                            path: app.forum.attribute('baseUrl')+"/d/"+post.data.id, 
                            imageUrl: discussion.user().data.attributes.avatarUrl?
                                discussion.user().data.attributes.avatarUrl:"" 
                        } })
                    });
                   
                }
            })
        }
    })
}