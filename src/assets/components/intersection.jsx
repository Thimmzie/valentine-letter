import React from 'react';
import { useEffect } from 'react';
import gsap from 'gsap';
import { useNavigate } from 'react-router-dom';
import Sitebg from '../../../public/home-bg.png';

const intersection = () => {
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.fromTo(
      '.lovetext',
      { opacity: 0, yPercent: 50 },
      {
        opacity: 1,
        yPercent: 0,
        stagger: 0.2,
        duration: 1.5,
      },
    );

    tl.fromTo(
      '.btn',
      { opacity: 0, yPercent: 80 },
      {
        opacity: 1,
        yPercent: 0,
        duration: 0.6,
      },
    );
  }, []);

  const navigate = useNavigate();

  return (
    <div
      className="overall-container"
      style={{
        backgroundImage: `url(${Sitebg})`,
      }}
    >
      <div className="px-10 text-[#f7f7f7] pt-15 text-center lovetext ">
        <p className="lovetext">Your love gladdens my heart;</p>
        <p className="lovetext">it soothes me, and wraps me in comfort.</p>
        <p className="lovetext">
          The Yoruba will come and say a snail never abandons its shell.
        </p>
        <p className="lovetext">
          Our story has become that of the snail and its shell:
        </p>
        <p className="lovetext"> wherever I go, let my shell follow.</p>
        <p className="lovetext"> If I were to come into this world again,</p>
        <p className="lovetext">
          I wouldn’t walk this path of love any differently
        </p>
        <p className="lovetext">I’d choose you every time.</p>
        <p className="lovetext">Oh my Shaylaaaa, our love is the,</p>
        <p className="lovetext">
          relationship Amala and catfish head looks forward to 😇🥰.
        </p>
      </div>
      <div className="flex flex-col items-center mt-6">
        <button className="btn" onClick={() => navigate('/sequel')}>
          Let's go 👉
        </button>
      </div>
    </div>
  );
};

export default intersection;
