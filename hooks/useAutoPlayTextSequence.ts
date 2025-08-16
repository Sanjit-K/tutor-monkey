import { useState, useEffect } from 'react';

export function useAutoPlayTextSequence() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const textSequence = [
    {
      headline: "Tutoring that speaks your language.",
      subtext: "Student-led, Plano-based, tailored to your classroom."
    },
    {
      headline: "We've taken the same classes as you.",
      subtext: "From Jasper to West to Senior, we know the system."
    },
    {
      headline: "Tutors who remember what it's like to be stuck.",
      subtext: "No judgment. Just straight answers and study strategies."
    },
    {
      headline: "Ask anything. Work at your pace.",
      subtext: "Live sessions online, with flexible scheduling."
    },
    {
      headline: "Better than YouTube. More personal than your classroom.",
      subtext: ""
    },
    {
      headline: "Ready to stop guessing and start understanding?",
      subtext: ""
    }
  ];

  // Auto-play through text sequence
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => 
        prevIndex === textSequence.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(interval);
  }, [textSequence.length]);

  return {
    currentTextIndex,
    textSequence
  };
}
