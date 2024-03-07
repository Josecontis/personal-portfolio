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
    const duration = Math.random() * 10 + 20; // Durata casuale tra 20 e 30 secondi

    star.style.transitionDuration = `${duration}s`;
    star.style.left = `${offsetX}px`;
    star.style.top = `${offsetY}px`;

    // Richiama ricorsivamente moveStar dopo che l'animazione è terminata
    setTimeout(() => moveStar(star), duration * 1000);
  };

  const twinkleStar = (star) => {
    const duration = Math.random() * 3 + 1; // Durata casuale tra 1 e 4 secondi
    const delay = Math.random() * 5; // Ritardo casuale tra 0 e 5 secondi

    star.style.animation = `twinkle ${duration}s ${delay}s infinite`;
  };

  const numberOfStars = 300; // Imposta il numero di stelle

  return (
    <div className="starry-background">
      {[...Array(numberOfStars)].map((_, index) => (
        <div className="star" key={index} />
      ))}
    </div>
  );
}

export default StarryBackground;
