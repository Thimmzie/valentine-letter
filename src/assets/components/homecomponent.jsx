import { useEffect, useState, useRef } from 'react';
import Sitebg from '../../../public/home-bg.png';
import ProgressBar from './progressbar';
import gsap from 'gsap';
import { useNavigate } from 'react-router-dom';

const homecomponent = () => {
  const [value, setValue] = useState(0);
  const timelineRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((val) => Math.min(val + 1, 100));
    }, 110);
    // return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const lines = gsap.utils.toArray('.nuggets');

    const tl = gsap.timeline({
      defaults: { ease: 'power2.out' },
    });

    lines.forEach((line) => {
      tl.fromTo(
        line,
        { yPercent: 60, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 1.1,
        },
      ).to(
        line,
        {
          yPercent: -20,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.in',
        },
        '+=1',
      );
    });
  }, []);

  const startAnimations = () => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.fromTo(
      '.lovehead',
      { opacity: 0, yPercent: 80 },
      { opacity: 1, yPercent: 0, delay: 1, duration: 0.8 },
    );

    tl.to({}, { duration: 0.3 });

    tl.fromTo(
      '.lovetext',
      { opacity: 0, yPercent: 50 },
      { opacity: 1, yPercent: 0, delay: -1, stagger: 0.2, duration: 1.5 },
    );
    tl.fromTo(
      '.btn',
      { opacity: 0, yPercent: 80 },
      { opacity: 1, yPercent: 0 },
    );
  };

  const navigate = useNavigate();

  return (
    <div
      className="overall-container"
      style={{
        backgroundImage: `url(${Sitebg})`,
      }}
    >
      <ProgressBar value={value} onComplete={startAnimations} />
      <div className="mt-5 relative overflow-hidden h-10">
        <h4 className="nuggets">Beauty is in the eyes of the beholder</h4>
        <h4 className="nuggets">But with you, it is the standard</h4>
        <h4 className="nuggets">I must give you all the available credits</h4>
        <h4 className="nuggets">Cus you make being divine look easy</h4>
      </div>
      <div className="-mt-8 flex flex-col items-center ">
        <h1 className="text-[#f7f7f7] font-extrabold text-[1.7rem] text-center lovehead">
          Mine 💖💋 💞
        </h1>
        <div className="px-10 text-[#f7f7f7] text-center lovetext mt-5 ">
          <p className="lovetext">To my favorite person: your name is my</p>
          <p className="lovetext">heartbeat 💓, your love is my home 🏡.</p>
          <p className="lovetext">Your smile 💫✨ is the reward I want to</p>
          <p className="lovetext">
            get every single day, it’s the quiet reason
          </p>
          <p className="lovetext">I keep breathing beautifully.😍</p>
          <br />
          <p className="lovetext">Here’s a little secret (well, not really):</p>
          <p className="lovetext">
            I keep a list 📝 in my head of all the little
          </p>
          <p className="lovetext">things you do to me. It’s the longest and</p>
          <p className="lovetext"> happiest list I own.🎁✨</p>
        </div>
      </div>
      <div className="flex flex-col items-center mt-6">
        <button className="btn" onClick={() => navigate('/intersection')}>
          Click me joor 😎
        </button>
      </div>
    </div>
  );
};

export default homecomponent;
