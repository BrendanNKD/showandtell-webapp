import { TextToSpeechProps } from "domain/types/textToSpeech";
import React, { useState, useEffect } from "react";
import { BsPlayFill, BsPauseFill, BsStopFill } from "react-icons/bs";

const TextToSpeech: React.FC<TextToSpeechProps> = ({ text }) => {
  const [isPaused, setIsPaused] = useState(false);
  const [utterance, setUtterance] = useState<SpeechSynthesisUtterance | null>(
    null
  );

  useEffect(() => {
    const synth = window.speechSynthesis;
    const u = new SpeechSynthesisUtterance(text);

    setUtterance(u);

    return () => {
      synth.cancel();
    };
  }, [text]);

  const handlePlay = () => {
    const synth = window.speechSynthesis;

    if (isPaused) {
      synth.resume();
    }

    if (utterance) {
      synth.speak(utterance);
    }

    setIsPaused(false);
  };

  const handlePause = () => {
    const synth = window.speechSynthesis;

    synth.pause();

    setIsPaused(true);
  };

  const handleStop = () => {
    const synth = window.speechSynthesis;

    synth.cancel();

    setIsPaused(false);
  };

  return (
    <div className=" pt-2 space-x-6 ">
      <button onClick={handlePlay}>
        <BsPlayFill size={20} /> {/* Play Icon */}
      </button>
      <button onClick={handlePause}>
        <BsPauseFill size={20} /> {/* Pause Icon */}
      </button>
      <button onClick={handleStop}>
        <BsStopFill size={20} /> {/* Stop Icon */}
      </button>
    </div>
  );
};

export default TextToSpeech;
