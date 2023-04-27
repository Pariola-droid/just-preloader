import gsap from 'gsap';
import { CSSRulePlugin } from 'gsap/CSSRulePlugin';

// Init CSSRulePlugin
gsap.registerPlugin(CSSRulePlugin);

export const NavbarNime = () => {
  // Declarations
  const tl = gsap.timeline();
  //
  const navbar = document.querySelector('.cm_nav');

  // Set:
  tl.set(navbar, { y: '-100%' });

  tl.to(navbar, 1, {
    y: '0%',
    delay: 8.5,
    ease: 'power2.easeIn',
  });
};
