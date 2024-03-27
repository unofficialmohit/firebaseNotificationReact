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
        <div><img src={data?.icon} width={"100px"}></img></div>
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
    <div><Toaster/></div>
  )
}

export default App