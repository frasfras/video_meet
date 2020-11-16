
import React, {useEffect, useRef} from 'react';

import TwilioVideo from 'twilio-video';

function TwilioVideos({token,room}) {
    const localVideoref = useRef('https://video-call-3993-dev.twil.io/video.html');
    const remoteVideoref = useRef();
   
    useEffect (() => {
        TwilioVideo.connect  ( token ,{
          video:true, 
          audio:true,
          name:room ,
          
        }).then((r) => {
          console.log('connected to twilio');
          console.log(r);
        })
      
         return () => {
          console.log('' );
         }
       }, [token, room]) ;
     

       
    return (
        <div >
          <h1>You are in Mag:{room}</h1>
          <div id='cal'> </div>
          <a href='https://video-call-3993-dev.twil.io/video.html'>Click to start</a>
         <div ref= {localVideoref} ></div>
         <div ref= {remoteVideoref} ></div>
      
      </div>
    )
  }
  
  export default TwilioVideos;