import Splitting from 'splitting';
import { IO } from '../utils/observe';
import gsap from 'gsap';

export const HeaderNime = () => {
  const H = document.querySelectorAll("[data-animation='split-header']");
  const f = document.querySelectorAll("[data-animation='fade-header']");

  H.forEach((item) => {
    Splitting({
      target: item,
      by: 'chars',
    });
    gsap.set(item.querySelectorAll('.char'), {
      opacity: 0,
      yPercent: 100,
      transformStyle: 'preserve-3d',
    });
    IO(item, {
      threshold: 1,
    }).then(() => {
      const elem = item.querySelectorAll('.char');
      gsap.to(elem, {
        opacity: 1,
        yPercent: 0,
        stagger: elem.length > 100 ? 0.01 : 0.02,
        duration: elem.length > 100 ? 0.5 : 0.6,
        delay: 9,
        ease: 'easeOut',
      });
    });
  });

  f.forEach((item) => {
    gsap.set(item, {
      autoAlpha: 0,
      yPercent: 50,
      transformStyle: 'preserve-3d',
    });
    IO(item, { threshold: 0.3 }).then(() => {
      gsap.to(item, {
        autoAlpha: 1,
        yPercent: 0,
        duration: item.length > 100 ? 0.5 : 0.6,
        ease: 'easeOut',
        delay: 9,
      });
    });
  });
};
