import VacuumIcon from '../icons/vacuum.svg';
import BathIcon from '../icons/bath.svg';
import ToiletIcon from '../icons/toilet.svg';
import WashingMachineIcon from '../icons/washingmachine.svg';
import StairsIcon from '../icons/stairs.svg';
import BroomIcon from '../icons/broom.svg';

interface Task {
    icon: string;
    title: string;
    desc: string;
  }
  
  interface Props {
    title: string;
    user: string;
    tasks: Task[];
  }
  
  export default function Card({ title, user, tasks }: Props) {
     const { bgClass, cardBgClass, textClass } = getUserColors(user);
    return (
      <div className="flex flex-col bg-white shadow-md dark:bg-zinc-900 rounded-2xl p-4">
        <div className="flex justify-between items-center mb-4">
          <div className="text-lg font-bold tracking-widest">{title}</div>
          <div className="flex gap-2 items-center bg-foreground/5 px-3 py-1.5 rounded-full">
          
            <div className={`${bgClass} size-1.5 rounded-full`}/>
            <div className={`${textClass} font-bold text-xs`}>{user}</div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          {tasks.map((task, idx) => (
             <TaskItem key={idx} task={task} cardBgClass={cardBgClass} textClass={textClass} />
          ))}
        </div>
      </div>
    );
  }

function TaskItem({task, cardBgClass, textClass}: 
  { 
    task: { title: string; desc: string; icon: string; };
    cardBgClass: string;
    textClass: string;
  }) {
  const Icon = iconMap[task.icon];
  if(!Icon) console.warn(`Icon '${task.icon}' could not be found.`)
  return (
    <div className="flex gap-2.5">
      <div className={`${cardBgClass} size-15 rounded-xl flex flex-none items-center justify-center`}>
        {Icon ? <Icon className={`${textClass}`} width={24} height={24} /> : null}
      </div>
      <div className="flex flex-col gap-1 justify-center">
        <div className="font-semibold tracking-wide">{task.title}</div>
        <div className="text-foreground/60 text-xs tracking-wide">{task.desc}</div>
      </div>
    </div>
  );
}

const iconMap: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
  vacuum: VacuumIcon,
  bath: BathIcon,
  toilet: ToiletIcon,
  washingmachine: WashingMachineIcon,
  stairs: StairsIcon,
  broom: BroomIcon
};

function getUserColors(userName: string) {
  const defaultColors = { bgClass: 'bg-black', cardBgClass: 'bg-white/10', textClass: 'text-black' };
  if (!userName) return defaultColors;

  const lowerUser = userName.toLowerCase();
  const colorMap: Record<string, { bgClass: string; cardBgClass: string; textClass: string }> = {
    alex: { bgClass: 'bg-alex', cardBgClass: 'bg-alex/10' , textClass: 'text-alex' },
    leon: { bgClass: 'bg-leon', cardBgClass: 'bg-leon/10', textClass: 'text-leon' },
    elja: { bgClass: 'bg-elja', cardBgClass: 'bg-elja/10', textClass: 'text-elja' },
  };

  return colorMap[lowerUser] || defaultColors;
}
