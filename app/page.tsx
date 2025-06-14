import Logo from "@/icons/Logo.svg";
import Card from "@/components/Card";
import { DarkModeToggle } from '@/components/DarkModeToggle';
import { GET } from '@/api/putzplan/route';

export const dynamic = 'force-dynamic';

export default async function HomePage() {
  const res = await GET();
  const data = await res.json();
  return (
    <div className="max-w-sm mx-auto">
      <header className="text-center">
        <div className="flex justify-between bg-white shadow-md dark:bg-zinc-900 px-4 py-2 rounded-2xl">
          <div className="flex items-center gap-2">
            <Logo className="size-8 transition-all hover:scale-110"/>
            <h1 className="text-lg font-semibold tracking-wider">Putzplaner</h1>
          </div>
          <DarkModeToggle />
        </div>
      </header>
      <section className="text-center my-8">
        <h2 className="text-2xl font-bold dark:font-medium tracking-widest">Wochenplan</h2>
        <p className="tracking-wide">Kalenderwoche {data.kw}</p>
      </section>
      <section className="flex flex-col gap-4">
      <Card
        title="Oben"
        user={data.plan[0]}
        tasks={[
          { icon: 'bath', title: 'Badezimmer', desc: 'Waschbecken, Toilette, Dusche, Boden, Spiegel' },
          { icon: 'stairs', title: 'Treppen', desc: 'obere Treppenstufen' },
          { icon: 'vacuum', title: 'Staubsaugen', desc: 'Flur, Zimmer, Badezimmer' },
        ]}
      />
       <Card
        title="Mitte"
        user={data.plan[1]}
        tasks={[
          { icon: 'toilet', title: 'Gäste WC', desc: 'Waschbecken, Toilette, Boden, Spiegel' },
          { icon: 'washingmachine', title: 'Spülmaschine', desc: 'Geschirr ausräumen & einräumen' },
          { icon: 'vacuum', title: 'Staubsaugen', desc: 'Flur, Gäste WC, Zimmer, Küche' },
        ]}
      />
       <Card
        title="Unten"
        user={data.plan[2]}
        tasks={[
          { icon: 'vacuum', title: 'Staubsaugen', desc: 'Wohnzimmer, Keller & Staubwischen' },
          { icon: 'stairs', title: 'Treppen', desc: 'untere Treppenstufen' },
          { icon: 'broom', title: 'Boden wischen', desc: 'Toilette, Dusche, Boden, Spiegel' }
        ]}
      />
      </section>
      <footer className="flex flex-col text-foreground/60 items-center text-xs gap-2 my-8 tracking-widest italic">
        <div>Copyright © 2025 Leonard Rudi.</div>
        <div>Alle Rechte vorbehalten.</div>
      </footer>
    </div>
  );
}