import React, { useEffect, useRef } from "react";
import "./style/Video.css";
const VideoPreview = ({ videoFile }) => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const playVideo = () => {
      video.play();
      drawFrame();
    };

    const drawFrame = () => {
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      requestAnimationFrame(drawFrame);
    };

    video.addEventListener("play", playVideo);

    return () => {
      video.removeEventListener("play", playVideo);
    };
  }, []);

  return (
    <div className="video-preview">
      <video ref={videoRef} src={URL.createObjectURL(videoFile)} muted playsInline />
      <canvas ref={canvasRef} width="320" height="320" />
    </div>
  );
};

export default VideoPreview;
