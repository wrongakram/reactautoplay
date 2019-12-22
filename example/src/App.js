import React from "react";
import VideoThumbnail from "reactautoplay";

const App = () => {

  return (
    <div className="example">
      <div className="flex">
        <VideoThumbnail  classname='customClassName' /> 
        <VideoThumbnail
          title='The Bachelor Premieres January 6'
          preview='https://media1.giphy.com/media/llsb2HU9sKfK57pcnf/giphy480p.mp4'
          badge='Premiere'
          badgeBG='#EF798A'
          message='1.2M Watching Now 🔥🔥'
          muted={false}
          width={350} 
          classname='customClassName' /> 
          <VideoThumbnail  
            title='Boogie With A Bear | Planet Earth II'
            preview='https://media1.giphy.com/media/mFvxw25Jxy4TsHfjQE/giphy480p.mp4'
            badge='Live'
            message='24k Watching Now'
            classname='customClassName'
            /> 
      </div>
    </div>
  );
}



export default App