import galS9 from '../assets/galaxyS9+_428x402.png';
import iph8 from '../assets/iphone8_384x505.png';
import iph11 from '../assets/iphone11_640x640.png';
import iphX from '../assets/iphoneX_376x406.png';
import logoSvg from '../assets/logo.svg';
import sep from '../assets/separator-desktop.png';

export const phones = {
  galaxyS9: {
    id: 0,
    src: galS9,
    alt: 'Galaxy S9+',
    w: 428,
    h: 402,
  },
  iphone8: {
    id: 1,
    src: iph8,
    alt: 'iPhone 8',
    w: 371,
    h: 446,
  },
  iphone11: {
    id: 2,
    src: iph11,
    alt: 'iPhone 11',
    w: 425,
    h: 425,
  },
  iphoneX: {
    id: 3,
    src: iphX,
    alt: 'iPhone X',
    w: 376,
    h: 448,
  },
};

export const logo = {
  src: logoSvg,
  alt: 'Mobile Club',
};

export const separator = {
  src: sep,
  alt: 'Séparateur',
};
