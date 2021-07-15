import React from 'react';
import ReactDom from 'react-dom';

import dashjs from 'dashjs'

// CSS
import './index.css';


// const url = "https://livesim.dashif.org/livesim/testpic_2s/Manifest.mpd";
var url = "http://localhost:8080/out.mpd"
// var player = dashjs.MediaPlayer().create();


function VideoStream() {
  return (
    <div>
      <div class="code">
        <video data-dashjs-player="" autoplay="true" src={url}
               width="1080px" height="720px" controls="true"></video>
      </div>
    </div>
  );
}


ReactDom.render(<VideoStream />, document.getElementById('root'));
