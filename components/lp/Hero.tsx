import React from "react";

const Hero = () => {
  return (
    <div className="bg-black text-white">
      <div
        className="container mx-auto  h-screen flex flex-col gap-5
       justify-center items-center text-center"
      >
        <p>Le leader de ta vie, c’est toi.</p>
        <h2 className="lg:text-7xl text-4xl uppercase font-semibold">
          La vie répond <br /> au mouvement.
        </h2>

        <p className="lg:w-3/4 mx-auto">
          Une théorie contemporaine du mouvement vivant, incarnée par REVEL —
          les conférences immersives — et SELMER — les voyages transformateurs.
          Une invitation à retrouver votre élan et à devenir pleinement le
          leader de votre propre vie.
        </p>
      </div>
    </div>
  );
};

export default Hero;
