import React from 'react';
import { useEffect } from 'react';
import gsap from 'gsap';
import Sitebg from '../../../public/home-bg.png';

const sequel = () => {
  useEffect(() => {
    const introLines = gsap.utils.toArray('.intro');

    const tl = gsap.timeline({
      defaults: { ease: 'power3.out' },
    });

    tl.from({}, { duration: 1 });
    introLines.forEach((line) => {
      tl.fromTo(
        line,
        { opacity: 0, yPercent: 40 },
        {
          opacity: 1,
          yPercent: 0,
          duration: 1,
        },
      )

        .to({}, { duration: 2 })

        .to(line, {
          opacity: 0,
          yPercent: -30,
          duration: 0.8,
          ease: 'power3.in',
        });
    });

    // small pause after last intro
    tl.to({}, { duration: 0.6 });

    tl.fromTo(
      '.main-content',
      { opacity: 0, yPercent: 30 },
      {
        opacity: 1,
        yPercent: 0,
        duration: 1.2,
      },
    );
  }, []);

  return (
    <div
      className="overall-container-two"
      style={{
        backgroundImage: `url(${Sitebg})`,
      }}
    >
      <div className="intro-content">
        <p className="intro">So I have a question ⌛</p>
        <p className="intro">Hmmmmmmmmmmmmmmmm 👀</p>
        <p className="intro">I'll buy you chocolate ohhh 🍫</p>
        <p className="intro">And amala with ogunfe 🧆🍗</p>
        <p className="intro">And it goes...🕺💃🎶</p>
      </div>
      <div className="main-content">
        <h1 className="text-white text-[1.3rem] font-bold text-center">
          Will you be my valentine? 💖👩‍❤️‍👩💖{' '}
        </h1>
        <div className="flex gap-4 mt-4 flex-col">
          <button className="yes-btn">Yes, Olori oko mi 👑💝</button>
          <button className="no-btn">No, big head 😓</button>
        </div>
      </div>
    </div>
  );
};

export default sequel;
