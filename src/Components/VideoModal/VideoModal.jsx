import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './VideoModal.scss';

const VideoModal = (props) => {
  const [PauseVideo, SetPauseVideo] = useState(true);

  let link = props.data[0];

  // useEffect(() => {
  //   PauseVideo ? SetPauseVideo(false) : SetPauseVideo(true);
  // }, []);

  return (
    <>
      <div
        id='closeVideo'
        onClick={() => {
          props.closeFunc();
          SetPauseVideo(false);
        }}
      >
        &times;
      </div>
      <div
        id='videoPlayer'
        onMouseOver={() => {
          SetPauseVideo(true);
        }}
      >
        <iframe
          src={PauseVideo ? link : ''}
          title='OAKONSULT'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
};

export default VideoModal;
