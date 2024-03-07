import React, { useEffect } from "react";
import "./StarryBackground.css";

function StarryBackground() {
  useEffect(() => {
    const stars = document.querySelectorAll(".star");

    stars.forEach((star) => {
      moveStar(star);
      twinkleStar(star);
    });
  }, []);

  const moveStar = (star) => {
    const starryBackground = document.querySelector(".starry-background");
    const offsetX = Math.random() * starryBackground.offsetWidth;
    const offsetY = Math.random() * starryBackground.offsetHeight;

    star.style.left = `${offsetX}px`;
    star.style.top = `${offsetY}px`;
  };

  const twinkleStar = (star) => {
    const duration = Math.random() * 10 + 5; // Durata casuale tra 5 e 15 secondi per un lampeggio più lento
    const delay = Math.random() * 3; // Ritardo casuale tra 0 e 3 secondi

    star.style.animation = `twinkle ${duration}s ${delay}s infinite`;
  };

  const numberOfStars = 150; // Imposta il numero di stelle

  return (
    <div className="starry-background">
      {[...Array(numberOfStars)].map((_, index) => (
        <div className="star" key={index} />
      ))}
    </div>
  );
}

export default StarryBackground;
