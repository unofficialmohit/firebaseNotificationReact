import React from 'react'
import { generateToken ,messaging} from './firebase'
import { onMessage } from 'firebase/messaging';
import toast,{Toaster} from "react-hot-toast";
function App() {
  const[data,setData]=React.useState(null);
  const notify=()=>{data && toast(<ToastDisplay/>)}
  function ToastDisplay(){
    return(
      <div style={{display:"flex"}}>
        {data?.icon && <div><img src={data?.icon} width={"100px"}></img></div>}
        <div>
          <div>{data?.title}</div>
          <div>{data?.body}</div>
        </div>
      </div>
    )
  }
    React.useEffect(()=>{
    generateToken();
    onMessage(messaging,(payload)=>{
      console.log(payload);
      setData({title:payload?.notification.title,body:payload?.notification.body,icon:payload?.notification.image})
      console.log(data);
    })
    notify();
  },[data])
  return (
    <div>
      <Toaster/>
      <h1>This is a Test App, It will recieve Notification from FireBase</h1>
      </div>
  )
}

export default App