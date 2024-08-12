import React, { useEffect, useRef } from "react";

const ParticleAnimation = () => {
  const canvasRef = useRef(null);
  const cursor = useRef({ x: 300, y: 200 });
  const particlesArray = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.globalAlpha = 0.5;

    const generateParticles = (amount) => {
      for (let i = 0; i < amount; i++) {
        particlesArray.current[i] = new Particle(
          300,
          200,
          4,
          generateColor(),
          0.02
        );
      }
    };

    const generateColor = () => {
      let hexSet = "0123456789ABCDEF";
      let finalHexString = "#";
      for (let i = 0; i < 6; i++) {
        finalHexString += hexSet[Math.ceil(Math.random() * 15)];
      }
      return finalHexString;
    };

    function Particle(x, y, particleTrailWidth, strokeColor, rotateSpeed) {
      this.x = x;
      this.y = y;
      this.particleTrailWidth = particleTrailWidth;
      this.strokeColor = strokeColor;
      this.theta = Math.random() * Math.PI * 2;
      this.rotateSpeed = rotateSpeed;
      this.t = Math.random() * 150;

      this.rotate = () => {
        const ls = {
          x: this.x,
          y: this.y,
        };
        this.theta += this.rotateSpeed;
        this.x = cursor.current.x + Math.cos(this.theta) * this.t;
        this.y = cursor.current.y + Math.sin(this.theta) * this.t;
        context.beginPath();
        context.lineWidth = this.particleTrailWidth;
        context.strokeStyle = this.strokeColor;
        context.moveTo(ls.x, ls.y);
        context.lineTo(this.x, this.y);
        context.stroke();
      };
    }

    const anim = () => {
      requestAnimationFrame(anim);
      context.fillStyle = "rgb(0 0 0 / 5%)";
      context.fillRect(0, 0, canvas.width, canvas.height);
      particlesArray.current.forEach((particle) => particle.rotate());
    };

    const handleMouseMove = (e) => {
      cursor.current.x = e.clientX - canvas.getBoundingClientRect().left;
      cursor.current.y = e.clientY - canvas.getBoundingClientRect().top;
    };

    const handleTouchMove = (e) => {
      e.preventDefault();
      cursor.current.x =
        e.touches[0].clientX - canvas.getBoundingClientRect().left;
      cursor.current.y =
        e.touches[0].clientY - canvas.getBoundingClientRect().top;
    };

    generateParticles(101);
    anim();

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="cw"
      width={600}
      height={400}
      style={{ display: "block", backgroundColor: "rgb(0 0 0 / 5%)" }}
    >
      Animation creating multi-colored disappearing stream of light that follow
      the cursor as it moves over the image
    </canvas>
  );
};

export default ParticleAnimation;
