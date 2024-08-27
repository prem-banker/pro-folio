import React, { useState, useEffect, useRef } from "react";
import userdata from "../../../../public/data/user.json";
import "./animatedtext.css"; // Add your CSS styles in this file

const AnimatedText = () => {
  const strings = userdata.user.user_preferred_titles;
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 150;
    const timer = setTimeout(() => {
      if (isDeleting) {
        if (charIndex > 0) {
          setDisplayText((prev) => prev.slice(0, -1));
          setCharIndex((prev) => prev - 1);
        } else {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % strings.length);
        }
      } else {
        if (charIndex < strings[index].length) {
          setDisplayText((prev) => prev + strings[index][charIndex]);
          setCharIndex((prev) => prev + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting]);

  return (
    <div className="typing-container">
      <span>&gt; {displayText}</span>
      <span className="text-cursor">|</span>
    </div>
  );
};

export default AnimatedText;
