# reactautoplay

> Auto play video when you hover on the thumbnail. 

[![NPM](https://img.shields.io/npm/v/reactautoplay.svg)](https://www.npmjs.com/package/reactautoplay) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save reactautoplay
```

## Usage

```jsx
import React from 'react'
import VideoThumbnail from "reactautoplay";

const App = () => {
    return (
        <VideoThumbnail
          title='The Bachelor Premieres January 6'
          preview='https://media1.giphy.com/media/llsb2HU9sKfK57pcnf/giphy480p.mp4'
          badge='Premiere'
          badgeBG='#EF798A'
          message='1.2M Watching Now 🔥🔥'
          muted={false}
          width={350} 
          classname='customClassName' /> 
    )
}
```

## License

MIT © [wrongakram](https://github.com/wrongakram)