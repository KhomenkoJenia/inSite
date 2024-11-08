// components/AnimatedSection.js
"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import styles from "./AnimatedSection.module.css";

gsap.registerPlugin(ScrollTrigger);

const AnimatedSection = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: `.${styles.wrapper}`,
        start: "top top",
        end: "+=150%",
        pin: true,
        scrub: true,
        markers: false,
      },
    });

    tl.to(`.${styles.image}`, {
      scale: 2,
      z: 350,
      transformOrigin: "center center",
      ease: "power1.inOut",
    }).to(
      `.${styles.hero}`,
      {
        scale: 1.1,
        transformOrigin: "center center",
        ease: "power1.inOut",
      },
      "<"
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <section className={`${styles.section} ${styles.hero}`}>
          <h1>Hello</h1>
        </section>
        <section
          className={`${styles.section} ${styles.gradientPurple}`}
        ></section>
        <section
          className={`${styles.section} ${styles.gradientBlue}`}
        ></section>
      </div>
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          src="https://assets-global.website-files.com/63ec206c5542613e2e5aa784/643312a6bc4ac122fc4e3afa_main%20home.webp"
          alt="image"
        />
      </div>
    </div>
  );
};

export default AnimatedSection;
