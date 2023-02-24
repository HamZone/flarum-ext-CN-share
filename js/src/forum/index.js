import app from 'flarum/forum/app';
import Index from './wechat/Index';
import Post from './wechat/Post';

app.initializers.add('hamzone/share', () => {
  Post();
  Index();
});
