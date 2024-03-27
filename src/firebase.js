import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";


const firebaseConfig = {
    apiKey: "AIzaSyA-pRgDE9DJ8mWnBxwzKbYccY-K59kcJLE",
    authDomain: "fir-e2a2a.firebaseapp.com",
    projectId: "fir-e2a2a",
    storageBucket: "fir-e2a2a.appspot.com",
    messagingSenderId: "593479622444",
    appId: "1:593479622444:web:be972d31de303d4a5f1689",
    measurementId: "G-7FS3XL56HC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);
export const generateToken=async()=>{
const permission=await Notification.requestPermission();
console.log(permission);
if(permission=="granted")
{
    const token=await getToken(messaging,{
        vapidKey:"BDSjqqXE_mVPd4EV0qfRru1NdUWFsNYV67ozi5xW6mwZit39eotQsscSsYzEkcx7rceTQW44bcGgU8DkA3kSYVE"
    })
    console.log(token);
    return 
}
}