
export interface SectionProps {
  title: string;
  subtitle: string;
  description: string;
  index: number;
  animationType?: 'reveal' | 'parallax' | 'kinetic' | 'zoom' | 'split' | 'float' | 'stat' | 'marquee' | 'glass';
}

export interface NavLink {
  label: string;
  href: string;
}
