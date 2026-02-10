import React from 'react';
import { useEffect, useState } from 'react';
import gsap from 'gsap';
import Sitebg from '../../../public/home-bg.png';
import Confetti from 'react-confetti';

const sequel = () => {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleClick = () => {
    const tl = gsap.timeline();

    tl.to('.main-content', {
      opacity: 0,
      yPercent: -30,
      duration: 0.8,
      ease: 'power3.in',
    })
      .set('.main-content', { display: 'none' })
      .set('.sucess-container', { pointerEvents: 'auto' })
      .to('.sucess-container', {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: 'back.out(1.7)',
        onStart: () => setShowSuccess(true),
      });
  };

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
      {showSuccess && (
        <>
          <Confetti
            numberOfPieces={200}
            gravity={0.25}
            recycle={true}
            origin={{ x: 0.5, y: 0 }}
          />

          <Confetti
            numberOfPieces={200}
            gravity={-0.25}
            recycle={true}
            origin={{ x: 0.5, y: 1 }}
          />
        </>
      )}
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
          <button className="yes-btn" onClick={handleClick}>
            Yes, Olori oko mi 👑💝
          </button>
          <button className="no-btn" onClick={handleClick}>
            Yes, you liee 😅
          </button>
        </div>
      </div>
      <div className="sucess-container">
        <h1 className="text-white font-bold text-2xl"> 🎉🎉🎉Success 🎉🎉🎉</h1>
        <h2 className="mt-4 text-[#e2e2e2] font-bold">
          Signed, Sealed and Delivered!
        </h2>
        <h3 className="text-[#e2e2e2] font-bold pt-2">My heart is yours 💕</h3>
      </div>
    </div>
  );
};

export default sequel;
