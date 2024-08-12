import React, { useEffect, useRef } from "react";

const BubbleAnimation = () => {
  const interBubbleRef = useRef<HTMLDivElement>(null);
  let curX = 0;
  let curY = 0;
  let tgX = 0;
  let tgY = 0;

  useEffect(() => {
    const move = () => {
      curX += (tgX - curX) / 20;
      curY += (tgY - curY) / 20;
      if (interBubbleRef.current) {
        interBubbleRef.current.style.transform = `translate(${Math.round(
          curX
        )}px, ${Math.round(curY)}px)`;
      }
      requestAnimationFrame(move);
    };

    const handleMouseMove = (event: MouseEvent) => {
      tgX = event.clientX;
      tgY = event.clientY;
    };

    move();

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0">
      <div className="relative w-full h-full overflow-hidden bg-gradient-to-r from-purple-800 to-blue-900">
        <svg xmlns="http://www.w3.org/2000/svg" className="hidden">
          <defs>
            <filter id="goo">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="10"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                result="goo"
              />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>
        <div
          className="absolute inset-0 w-full h-full"
          style={{ filter: "url(#goo) blur(40px)" }}
        >
          <div className="absolute w-4/5 h-4/5 bg-[radial-gradient(circle_at_center,rgba(18,113,255,0.8)_0,rgba(18,113,255,0)_50%)] mix-blend-hard-light animate-vertical" />
          <div className="absolute w-4/5 h-4/5 bg-[radial-gradient(circle_at_center,rgba(221,74,255,0.8)_0,rgba(221,74,255,0)_50%)] mix-blend-hard-light animate-circle-left" />
          <div className="absolute w-4/5 h-4/5 bg-[radial-gradient(circle_at_center,rgba(100,220,255,0.8)_0,rgba(100,220,255,0)_50%)] mix-blend-hard-light animate-circle-right top-[calc(50%-200px)] left-[calc(50%-500px)]" />
          <div className="absolute w-4/5 h-4/5 bg-[radial-gradient(circle_at_center,rgba(200,50,50,0.8)_0,rgba(200,50,50,0)_50%)] mix-blend-hard-light animate-horizontal" />
          <div className="absolute w-[160%] h-[160%] bg-[radial-gradient(circle_at_center,rgba(180,180,50,0.8)_0,rgba(180,180,50,0)_50%)] mix-blend-hard-light animate-circle-bottom" />
          <div
            ref={interBubbleRef}
            className="absolute w-full h-full bg-[radial-gradient(circle_at_center,rgba(140,100,255,0.8)_0,rgba(140,100,255,0)_50%)] mix-blend-hard-light top-[-50%] left-[-50%] opacity-70"
          />
        </div>
      </div>
    </div>
  );
};

export default BubbleAnimation;
