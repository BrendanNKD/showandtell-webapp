import React, { useState, useEffect } from "react";
import { BsPlayFill, BsPauseFill, BsStopFill } from "react-icons/bs";
interface AudioPlayerProps {
  bufferData: number[];
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ bufferData }) => {
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [audio] = useState(new Audio());

  useEffect(() => {
    // Convert Buffer data to Uint8Array
    const uint8Array = new Uint8Array(bufferData);

    // Create a Blob from the Uint8Array
    const blob = new Blob([uint8Array], { type: "audio/mp3" });

    // Create a Blob URL
    const url = URL.createObjectURL(blob);

    // Set the audio URL and load it
    setAudioUrl(url);
    audio.src = url;
    audio.load();

    return () => {
      // Cleanup: Revoke the Blob URL
      URL.revokeObjectURL(url);
    };
  }, [bufferData, audio]);

  const handlePlay = () => {
    audio.play();
  };

  const handlePause = () => {
    audio.pause();
  };

  const handleStop = () => {
    audio.pause();
    audio.currentTime = 0;
  };

  return (
    <div>
      {audioUrl && (
        <>
          <div>
            {audioUrl && (
              <>
                <button
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
                  onClick={handlePlay}
                >
                  <BsPlayFill className="inline-block" size={20} /> Play
                </button>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                  onClick={handlePause}
                >
                  <BsPauseFill className="inline-block" size={20} /> Pause
                </button>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  onClick={handleStop}
                >
                  <BsStopFill className="inline-block" size={20} /> Stop
                </button>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default AudioPlayer;
