import app from 'flarum/admin/app';

app.initializers.add('hamzone/share', () => {
  console.log('[hamzone/share] Hello, admin!');
});
