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
    return (
      <div>{title}</div>
    );
  }