function urlBase64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

if (navigator.serviceWorker) {
  navigator.serviceWorker
    .register('/sw.js')
    .then(async (registration) => {
      const PUBLIC_KEY = 'BF7lT0sfoVzOq__qQFe8CipAV2CHu7PoW1766rI7dho1oSaB_a7YlAYplRlMuZT_rmAomevKy2JyQ5FQuQbLsrI';

      const subscription = await registration.pushManager.getSubscription();
      if (subscription) {
        return subscription.toJSON();
      }

      const applicationServerKey = urlBase64ToUint8Array(PUBLIC_KEY);

      return registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey,
      });
    })
    .then(console.log)
    .catch(console.log);
}
