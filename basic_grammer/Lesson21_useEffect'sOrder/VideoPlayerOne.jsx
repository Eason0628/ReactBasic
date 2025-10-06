import { useRef } from 'react';

function VideoPlayerOne({ src, isPlaying }) {
  const ref = useRef(null);
  // 1. 组件挂载时，代码按顺序执行，ref.current 是 null，调用play() 会报错
  if(isPlaying) {
    ref.current.play();
  }else {
    ref.current.pause();
  }

  return <video ref={ref} src={src} loop />
}

export default VideoPlayerOne;