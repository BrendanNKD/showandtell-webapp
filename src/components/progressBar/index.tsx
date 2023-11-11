import React from "react";

interface ProgressProps {
  bgcolor: string;
  progress: number;
  max: number | null;
  height: number;
}

const ProgressBar: React.FC<ProgressProps> = ({
  bgcolor,
  progress,
  max,
  height,
}) => {
  const percent = max !== null ? (progress / max) * 100 : 0;

  return (
    <div
      className="h-[40px] w-full bg-[#e2e3e4] rounded-full p-2 flex items-center"
      style={{ height: `${height}px` }}
    >
      <div
        className={
          "h-full rounded-full font-lapsus font-bold text-black text-[40px] flex items-center justify-left p-3"
        }
        style={{ width: `${percent}%`, background: bgcolor }}
      >
        <span className="p-2 text-black font-semibold">{`${progress}/${max}`}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
