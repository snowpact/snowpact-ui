import { Hero as HeroComponent } from './Hero';
import { HeroCallToActions } from './HeroCallToActions';
import { HeroForeground } from './HeroForeground';

export const Hero = Object.assign(HeroComponent, { Foreground: HeroForeground, CallToActions: HeroCallToActions });
