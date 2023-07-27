// Replace 'song.mp3' with the actual name of your MP3 file
import React, { useState, useEffect, useRef } from "react";
import { FaVolumeMute, FaPlay, FaPause, FaVolumeUp } from "react-icons/fa";
import musicFile from "./ho.mp3";
import pla from './pla.gif';
import pl from './po.png';
import { Grid } from "@mui/material";
const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current.loop = true;
  }, []);

  const handleToggle = () => {
    setIsPlaying(!isPlaying);
    if (!isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  };

  const handleMuteToggle = () => {
    setIsMuted(!isMuted);
    audioRef.current.muted = !isMuted;
  };

  return (
    <><Grid container className='logo_to_center'>  
     <div
   style={{
    position: "fixed",
    bottom: 0,

    backgroundColor: "",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
    color: "#fff",
    zIndex: 9999,
  }}
  className="slider-nav-item"
  >
    <button
      onClick={handleToggle}d
      style={{
       
        backgroundColor: "transparent",
        border: "none",
        outline: "none",
      }}
    >
      {isPlaying ? (
          <img src={pla} style={{ width:"40px", color: "#fff" }} />
      ) : (
        <img src={pl} style={{ width:"40px", color: "#fff" }} />
      )}
    </button>

    <audio ref={audioRef} src={musicFile} />
  </div>
  </Grid></>
    
  
  );
};

export default MusicPlayer;
