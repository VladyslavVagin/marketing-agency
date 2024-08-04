import { FC } from 'react';

type Props = {
    progress: number;
    colorProgress: string;
};

const ProgressBar: FC<Props> = ({ progress, colorProgress }) => {
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - progress / 100 * circumference;

  return (
    <svg
      className="transform -rotate-90"
      width="160"
      height="160"
    >
      <circle
        className="transition-all ease-linear duration-350 origin-50 transform scaleX[-1]"
        stroke="#D2D3D4"
        strokeWidth="10"
        fill="transparent"
        r={radius}
        cx="80"
        cy="80"
      />
      <circle
        className="transition-all ease-linear duration-350 origin-50 transform scaleX[-1] animate-stroke-offset"
        stroke={colorProgress}
        strokeWidth="10"
        fill="transparent"
        r={radius}
        cx="80"
        cy="80"
        strokeDasharray={`${circumference} ${circumference}`}
        strokeDashoffset={strokeDashoffset}
      />
    </svg>
  );
};

export default ProgressBar;