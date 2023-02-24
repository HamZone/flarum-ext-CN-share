import app from 'flarum/forum/app';
import Index from './wechat/Index';

app.initializers.add('hamzone/share', () => {
  Index();
});
