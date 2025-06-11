// components/Icon.tsx
import SunIcon from '@/icons/sun.svg';
import MoonIcon from '@/icons/moon.svg';
import VacuumIcon from '@/icons/vacuum.svg';
import ToiletIcon from '@/icons/toilet.svg';
import BathIcon from '@/icons/bath.svg';
import WashingMachineIcon from '@/icons/washingmachine.svg';
import StairsIcon from '@/icons/stairs.svg';
import BroomIcon from '@/icons/broom.svg';

const icons = {
  sun: SunIcon,
  moon: MoonIcon,
  vacuum: VacuumIcon,
  bath: BathIcon,
  toilet: ToiletIcon,
  washingmachine: WashingMachineIcon,
  stairs: StairsIcon,
  broom: BroomIcon
};

export type IconName = keyof typeof icons;

export default function Icon({ 
  name, 
  className = '', 
  width = 24, 
  height = 24 
}: { 
  name: IconName; 
  className?: string; 
  width?: number; 
  height?: number; 
}) {
  const IconComponent = icons[name];
  return <IconComponent className={className} width={width} height={height} />;
}