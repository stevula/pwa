const webpush = require('web-push');
const vapid = require('./vapid.json');

webpush.setVapidDetails(
  'mailto:brodericksteven@gmail.com',
  vapid.publicKey,
  vapid.privateKey,
);

const pushSubscription = {
  endpoint:
    'https://fcm.googleapis.com/fcm/send/fjWTJM8NOF4:APA91bGqqnqUeGkin9Z6p_9Z0VZFLXjZ8vfgktLsoCoL6M4uimzp3I3Nw6hMJDd3jfQ9OQ_m87zYF6sQkJy3I59KKrTpIhpD_V6S3kNQzfU2hIaE5W0NX0x5B0Q7Q2Ggorlx0-RtFGxU',
  keys: {
    auth: '0YpMcczMpndUMCu5tLzokQ',
    p256dh:
      'BMaBQ7aRH48OJi_mfIuVKjSWgwe2rLJf8oaGajS52DT-P5zYmoNbYOMQX5c0Wr4G11In4xwr3yACdv6cTYh6IOE',
  },
};

webpush.sendNotification(pushSubscription, 'Notification from push server');
console.log('Push sent to client');
