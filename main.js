if (navigator.serviceWorker) {
  navigator.serviceWorker.register('/sw.js').then((registration) => {
    registration.active.postMessage('Message from main.js');
    Notification.requestPermission();
  }).catch(console.log);
}
