import app from 'flarum/forum/app';
import Post from './wechat/Post';

app.initializers.add('hamzone/share', () => {
  Post();
});
