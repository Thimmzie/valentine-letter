import { useEffect, useState } from 'react';

const ProgressBar = ({ value = 0, onComplete }) => {
  const [percent, setPercent] = useState(0);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    setPercent(Math.min(100, Math.max(value, 0)));

    if (value >= 100 && !hide) {
      setTimeout(() => {
        setHide(true);
        if (onComplete) onComplete();
      }, 1500);
    }
  }, [value]);
  return (
    <div className={`progress ${hide ? 'hide' : ''}`}>
      <span className="opacity-0">{percent.toFixed()}%</span>
      <div style={{ width: `${percent}%` }} />
    </div>
  );
};

export default ProgressBar;
