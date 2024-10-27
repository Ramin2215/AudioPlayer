import React, { useRef, useState, useEffect } from 'react';
import { FaGooglePlay } from "react-icons/fa";
import { IoMdPause } from "react-icons/io";
import { VscDebugReverseContinue } from "react-icons/vsc";
import audio from "@/audio/K.B. Caps - Do You Realy Need Me (Extended Version).mp3"

const AudioPlayer = () => {


    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(10);

   
    
   
    const togglePlayPause = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

  

    const Forward = () => {
        audioRef.current.currentTime = Math.min(audioRef.current.currentTime + 10, duration);
    };

   
    const Backward = () => {
        audioRef.current.currentTime = Math.max(audioRef.current.currentTime - 10, 0);
    };

   
    const handleTimeUpdate = () => {
        setCurrentTime(audioRef.current.currentTime);
    };

    const handleLoadedMetadata = () => {
        setDuration(audioRef.current.duration);
    };

   
    const handleProgressChange = (e) => {
        const newTime = e.target.value;
        setCurrentTime(newTime);
        audioRef.current.currentTime = newTime;
    };

   
  

    return (
        <div className="audio-player">
            <h1>K.B. Caps - Do You Really Need Me (12" Version)</h1>
            <audio
                ref={audioRef}
                src={audio} 
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
                autoPlay={true}
             
            />



            <div>
                <button onClick={Backward}><VscDebugReverseContinue /></button>
                <button style={{margin:"10px"}} onClick={togglePlayPause}>
                    {isPlaying ? <IoMdPause /> : <FaGooglePlay />}
                </button>
                <button onClick={Forward}> <VscDebugReverseContinue style={{ transform: "rotate(180deg)" }} /></button>
            </div>

            <div>
                <input
                    type="range"
                    min="0"
                    max={duration}
                    value={currentTime}
                    onChange={handleProgressChange}
                    style={{ width: '300px' }}
                />
            </div>

            <div>
                {Math.floor(currentTime / 60)}:{Math.floor(currentTime % 60).toString().padStart(2, '0')} /
                {Math.floor(duration / 60)}:{Math.floor(duration % 60).toString().padStart(2, '0')}
            </div>
        </div>
    );
};

export default AudioPlayer;
