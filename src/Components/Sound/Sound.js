import React, { useState, useEffect } from "react";

import './Sound.css';

const useAudio = preview_url => {
  const [audio] = useState(new Audio(preview_url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(

    () => {
      playing ? audio.play() : audio.pause();
    },
    [playing]
  );

  return [playing, toggle];
};

const Player = ({ preview_url }) => {

  const [playing, toggle] = useAudio(preview_url);

  return (
    <div>
      <button className="play" onClick={toggle}>{playing ? "II" : ">"}</button>
    </div>
  );
};


export default Player;
