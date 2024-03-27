
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyA-pRgDE9DJ8mWnBxwzKbYccY-K59kcJLE",
    authDomain: "fir-e2a2a.firebaseapp.com",
    projectId: "fir-e2a2a",
    storageBucket: "fir-e2a2a.appspot.com",
    messagingSenderId: "593479622444",
    appId: "1:593479622444:web:be972d31de303d4a5f1689",
    measurementId: "G-7FS3XL56HC"
});

const messaging = firebase.messaging();
messaging.onBackgroundMessage((payload) => {
    console.log(
      '[firebase-messaging-sw.js] Received background message ',
      payload
    );
    // Customize notification here
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
      body: payload.notification.body,
      icon: payload.notification.icon
    };
  
    self.registration.showNotification(notificationTitle, notificationOptions);
  });