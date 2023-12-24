"use client";
import Particles, { IParticlesProps } from "@tsparticles/react";
import { loadFull } from "tsparticles";

const ParticlesComponent = () => {
  async function loadParticles(main) {
    await loadFull(main);
  }

  return <Particles id="tsparticles" init={loadParticles} options={{}} />;
};

export default ParticlesComponent;
