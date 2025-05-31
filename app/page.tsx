import Card from "./components/Card";

// app/page.tsx
export default function HomePage() {
  return (
    <div className="max-w-md mx-auto">
      <header className="text-center mb-6">
        <div className="border border-white/20 p-4 rounded-xl">
          <h1 className="text-2xl font-bold">🧼 Putzplaner</h1>
        </div>
      </header>

      <section className="text-center">
        <h2 className="text-lg font-bold">Wochenplan</h2>
        <p className="text-sm font-normal">Kalenderwoche 27</p>
      </section>
      <Card
        title="Oben"
        user="Elja"
        tasks={[
          { icon: '', title: 'Badezimmer', desc: 'Waschbecken, Toilette, Dusche, Boden, Spiegel' },
          { icon: '../stairs.svg', title: 'Treppen', desc: 'obere Treppenstufen' },
          { icon: '../vacuum.svg', title: 'Staubsaugen', desc: 'Flur, Zimmer, Badezimmer' },
        ]}
      />
       <Card
        title="Mitte"
        user="Leon"
        tasks={[
          { icon: '', title: 'Badezimmer', desc: 'Waschbecken, Toilette, Dusche, Boden, Spiegel' },
          { icon: '../stairs.svg', title: 'Treppen', desc: 'obere Treppenstufen' },
          { icon: '../vacuum.svg', title: 'Staubsaugen', desc: 'Flur, Zimmer, Badezimmer' },
        ]}
      />
       <Card
        title="Unten"
        user="Alex"
        tasks={[
          { icon: '', title: 'Badezimmer', desc: 'Waschbecken, Toilette, Dusche, Boden, Spiegel' },
          { icon: '../stairs.svg', title: 'Treppen', desc: 'obere Treppenstufen' },
          { icon: '../vacuum.svg', title: 'Staubsaugen', desc: 'Flur, Zimmer, Badezimmer' },
        ]}
      />
    </div>
  );
}