import { useState, useEffect } from 'react';
import tactileImg from '../images/MAJ_4851a-2e866.jpg';
import skolaImg from '../images/PB030049-11e866.jpg';
import ponukaImg from '../images/PB030048-1e866.jpg';
import bgImg from '../images/background.png';
import hand1 from '../images/hand1.png';
import hand2 from '../images/hand2.png';
import hand3 from '../images/hand3.png';
import hand4 from '../images/hand4.png';
import client from '../sanityClient';

function Home() {
  const [kontakt, setKontakt] = useState({ telefon: '0948 20 99 13', email: 'info@umenieboja.sk' });

  useEffect(() => {
    client.fetch(`*[_type == "kontakt"][0]{ telefon, email }`).then((data) => {
      if (data) setKontakt(data);
    });
  }, []);

  return (
    <main className="pt-32 relative overflow-x-hidden">

      {/* Scattered hand gestures */}
      {[
        { src: hand1, top: '2%',  left: '2%',  size: 260, rotate: -20, opacity: 0.12 },
        { src: hand2, top: '3%',  left: '78%', size: 240, rotate: 15,  opacity: 0.10 },
        //{ src: hand3, top: '18%', left: '40%', size: 180, rotate: 35,  opacity: 0.07 },
        { src: hand4, top: '30%', left: '72%', size: 220, rotate: -10, opacity: 0.10 },
        { src: hand1, top: '42%', left: '4%',  size: 240, rotate: 25,  opacity: 0.09 },
        //{ src: hand2, top: '52%', left: '55%', size: 200, rotate: -40, opacity: 0.08 },
        { src: hand3, top: '63%', left: '70%', size: 260, rotate: 10,  opacity: 0.11 },
        { src: hand4, top: '70%', left: '8%',  size: 200, rotate: -15, opacity: 0.09 },
        { src: hand1, top: '80%', left: '44%', size: 220, rotate: 50,  opacity: 0.08 },
        { src: hand2, top: '88%', left: '5%',  size: 240, rotate: -30, opacity: 0.10 },
        { src: hand3, top: '87%', left: '72%', size: 220, rotate: 20,  opacity: 0.09 },
      ].map((h, i) => (
        <img key={i} src={h.src} alt="" className="absolute pointer-events-none select-none z-[1]" style={{
          top: h.top, left: h.left,
          width: h.size, opacity: h.opacity,
          transform: `rotate(${h.rotate}deg)`,
        }} />
      ))}

      {/* Hero */}
      <section className="pt-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-no-repeat w-full" style={{ backgroundImage: `url(${bgImg})`, backgroundSize: '10%', backgroundPosition: 'center', opacity: 0.18 }} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0e0e0e]" />
        <div className="px-8 md:px-16 max-w-screen-2xl mx-auto flex flex-col md:flex-row items-end justify-between gap-12 relative z-10">
          <div className="max-w-2xl">
            <span className="font-label text-tertiary uppercase tracking-widest text-xs mb-4 block">Začnite dnes</span>
            <h1 className="font-display  text-6xl md:text-8xl font-bold tracking-tighter leading-none text-on-surface uppercase mb-8 font-display">
              WingTsun <br /> <span className="text-primary-container font-display">Žilina</span>
            </h1>
          </div>
          <p className="font-body text-xl md:text-2xl text-on-surface-variant max-w-md italic border-l-2 border-primary-container pl-6 pb-2">
            "Trenuj tvrdo, bojuj lahko"
          </p>
        </div>
      </section>

      {/* Umenie Boja */}
      <section className="py-32 px-8 md:px-16 overflow-hidden" style={{
        backgroundColor: '#1c1b1b',
        backgroundImage: [
          'linear-gradient(0deg, transparent 24%, rgba(114,114,114,0.15) 25%, rgba(114,114,114,0.15) 26%, transparent 27%, transparent 74%, rgba(114,114,114,0.15) 75%, rgba(114,114,114,0.15) 76%, transparent 77%, transparent)',
          'linear-gradient(90deg, transparent 24%, rgba(114,114,114,0.15) 25%, rgba(114,114,114,0.15) 26%, transparent 27%, transparent 74%, rgba(114,114,114,0.15) 75%, rgba(114,114,114,0.15) 76%, transparent 77%, transparent)',
        ].join(', '),
        backgroundSize: '55px 55px',
      }}>
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
          <div className="md:col-span-5">
            <h2 className="font-display font-headline text-4xl font-bold uppercase tracking-tighter mb-8 leading-none text-on-surface">
              - UMENIE BOJA -
            </h2>
            <div className="space-y-6 text-lg text-on-surface-variant">
              <p>
                WingTsun, WingChun, VingTsun vznikol v Cine cca. pred 400 rokmi. Ide o vysoko ucelne bojove umenie. WingTsun je systemom, ktory uci s minimom pohybov sposobit superovi co najvacsiu skodu a boj ukoncit pokial mozno v par sekundach.
              </p>
            </div>
          </div>
          <div className="md:col-span-7 relative">
            <div className="aspect-video bg-surface-container-highest relative group overflow-hidden">
              <img
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-700"
                alt="martial artists sticky hands drill"
                src={tactileImg}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-10"></div>
              <div className="absolute bottom-8 left-8 flex items-center gap-4">
                <span className="w-12 h-[1px] bg-primary"></span>
                <span className="font-label text-xs uppercase tracking-[0.3em]">Trenuj tvrdo, bojuj lahko</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NASA SKOLA */}
      <section className="py-32 px-8 md:px-16 max-w-screen-2xl mx-auto relative overflow-hidden" style={{
        backgroundImage: `url(${bgImg})`,
        backgroundRepeat: 'repeat',
        backgroundSize: '500px',
        backgroundPosition: 'center',
      }}>
        <div className="absolute inset-0 bg-[#131313]/90 pointer-events-none" />
        <div className="flex flex-col md:flex-row gap-24 relative z-10">
          <div className="md:w-1/3 shrink-0">
            <span className="font-label text-tertiary uppercase tracking-widest text-xs mb-4 block">Co ponukame</span>
            <h2 className="font-display text-5xl font-bold uppercase tracking-tighter leading-none text-on-surface">
              Nasa <br /><span className="text-primary-container">skola</span>
            </h2>
            <div className="w-16 h-[2px] bg-primary-container mt-8 mb-8"></div>
            <img src={skolaImg} alt="NASA SKOLA" className="w-full object-cover grayscale opacity-80" />
          </div>
          <div className="flex-1 border-t border-outline-variant/20">
            
            {[
              'Drinu, pot, kvalitu, nie kvantitu.',
              'Realisticky progres, nie zazraky.',
              'Systematicky treningovy program, individualny pristup.',
              'Metodicky rozvoj bojovych schopnosti pre sebaobranu.',
              'Intenzivny silovy a kondicny trening.',
              'Sukromne hodiny, standardne a tematicke vikendove seminare.',
              'Seminare so zahranicnymi ucitelmi.',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-8 py-6 border-b border-outline-variant/20 group">
                <span className="font-headline text-sm text-outline-variant group-hover:text-primary-container transition-colors shrink-0 pt-1">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="font-body text-lg text-on-surface-variant group-hover:text-on-surface transition-colors">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KEDY A AKO */}
      <section id="zacat" className="bg-surface-container-low py-32 px-8 md:px-16">
        <div className="max-w-screen-2xl mx-auto">
          <div className="mb-16 flex items-center justify-between gap-12">
            <div>
              <span className="font-label text-tertiary uppercase tracking-widest text-xs mb-4 block">Zacnite dnes</span>
              <h2 className="font-display text-5xl font-bold uppercase tracking-tighter leading-none text-on-surface">
                Kedy a ako je mozne <br /><span className="text-primary-container">zacat cvicit?</span>
              </h2>
            </div>
            <img src={ponukaImg} alt="Kedy zacat" className="w-1/3 h-68 object-cover grayscale opacity-80 shrink-0" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-outline-variant/20">
            <div className="p-10 border-r border-outline-variant/20">
              <span className="font-headline text-4xl text-outline-variant">01</span>
              <h3 className="font-headline text-xl font-bold uppercase tracking-tighter mt-8 mb-4">Kontaktujte nas</h3>
              <p className="font-body text-on-surface-variant leading-relaxed mb-6">
                Kontaktujte instruktora skoly a dohovortesa na prvom treningu.
              </p>
              <a href={`tel:${kontakt.telefon?.replace(/\s/g, '')}`} className="font-label text-sm font-bold tracking-widest text-primary-container hover:text-primary transition-colors uppercase">
                {kontakt.telefon}
              </a>
            </div>
            <div className="p-10 border-r border-outline-variant/20">
              <span className="font-headline text-4xl text-outline-variant">02</span>
              <h3 className="font-headline text-xl font-bold uppercase tracking-tighter mt-8 mb-4">Pridte na trening</h3>
              <p className="font-body text-on-surface-variant leading-relaxed">
                Staci si vziat tricko, teplaky, tenisky a chut si zacvicit a naucit sa nieco nove.
              </p>
            </div>
            <div className="p-10">
              <span className="font-headline text-4xl text-outline-variant">03</span>
              <h3 className="font-headline text-xl font-bold uppercase tracking-tighter mt-8 mb-4">Otvorte skolu vo vasom meste</h3>
              <p className="font-body text-on-surface-variant leading-relaxed mb-6">
                Ak sa vo vasom okoli nenachadza nasa skola, ponukame systematicky program vyuky a komplexnu podporu. Staci dat dokopy min. 5 zaujemcov.
              </p>
              <a href={`mailto:${kontakt.email}`} className="font-label text-sm font-bold tracking-widest text-primary-container hover:text-primary transition-colors uppercase">
                {kontakt.email}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FORMY */}
      <section className="py-32 px-8 md:px-16 max-w-screen-2xl mx-auto">
        <div className="mb-20">
          <h2 className="font-headline text-5xl font-bold uppercase tracking-tighter text-on-surface">WingTsun Formy</h2>
          <div className="w-24 h-1 bg-primary-container mt-4"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-0 border-t border-outline-variant/20">
          {[
            {
              name: 'Siu Nim Tau', sub: 'Mala myslienka — zakladna zostava',
              desc: 'Prva zostava systemu. Ziak sa uci spravne drzat telo, stabilitu v postoji, zbavit sa svaloveho napatia a pracovat s vybusnou silou. Zahrna zakladne principy pouzitia sily a nadviazanie kontaktu so superom.',
              tags: ['Stabilita postoja', 'Vybusna sila', 'Kontakt so superom'],
            },
            {
              name: 'Chum Kiu', sub: 'Hladanie mostov — zostava s krokmi a kopmi',
              desc: 'Druha zostava sa zaobera rotaciou tela a silou z nej plynucej. Obsahuje kroky, ukroky, kopy, udery pastiami, dlanami a laktami. Hladanim mostov je myslene stavanie si cesty cez utoky supera.',
              tags: ['Rotacia tela', 'Kroky a kopy', 'Explozivna sila'],
            },
            {
              name: 'Biu Gee', sub: 'Bodajuce prsty — kratkа sila',
              desc: 'Tretia zostava — nacvik kratke a vybusnej sily, podrazy, prehody a udery laktami. Ziak sa uci vypustat plnu silu svihom a premyslat o boji velmi utocne. Aplikacie su agresivne a zakerne.',
              tags: ['Kratka sila', 'Svih a explózia', 'Utocne myslenie'],
            },
            {
              name: 'Muk Yan Chong', sub: 'Zostava na drevenom panakovi',
              desc: 'Zahrnuje kombinacie krokov a pohyby ruk, noh a pusobenie sily. Sluzi na trening plynuleho prechodu z techniky do techniky, otuzovanie koncatin a nacvik uderov a kopov v plnej sile.',
              tags: ['Plynulost technik', 'Otuzovanie', 'Plna sila'],
            },
            {
              name: 'Saam Sing Jong', sub: 'Tri koly na nacvik kopov',
              desc: 'Tri koly zapustene v zemi na nacvik kopov, oblukových krokov, podmetov a krokových variácií. Rozvíja metódu ChiGerk (lepiace nohy) a simuluje boj proti viacerym superom.',
              tags: ['Kopy a podmety', 'ChiGerk', 'Boj s viacerymi'],
            },
            {
              name: 'Luk Dim Boon Kwan', sub: 'Sest a pol techniky dlhej tyce',
              desc: 'Klasicka zostava s dlhou tycom (2,5–3,5 m). Sklada sa z bodania, zrazania a odrazania. Zbran je cestou k lepsemu pochopeniu boja bez zbrane — vplyv na neozbrojeny boj je zasadny.',
              tags: ['Dlha zbran', 'Bodanie a odrazanie', 'ChiKwan'],
            },
            {
              name: 'Bart Cham Dao', sub: 'Osem ciest motylich mecov',
              desc: 'Vyvrcholenie celeho systemu. Parova zbran — dva asi 40 cm dlhe noze. Obsahuje osem sekcii zameranych na techniky a principy boja. Zbrane pomahaju lepsie pochopit mechanizmus boja bez zbrane.',
              tags: ['Parova zbran', 'Osem sekcii', 'Vrchol systemu'],
            },
            {
              name: 'Hong Jong', sub: 'Zostava dreveného panáka do vzduchu',
              desc: 'Este pred postavenim ku skutocnemu panakovi sa ziak nauci celu zostavu do vzduchu v plnom rozsahu a plnej sile. Pohyby su zhodne s MukYanJong, dolezity je plynuly a svihy prechod bez zahavania.',
              tags: ['Príprava na panáka', 'Plný rozsah', 'Plynulost'],
            },
          ].map((form, i, arr) => {
            const isLastRow = i >= arr.length - (arr.length % 4 || 4);
            const isLastCol = (i + 1) % 4 === 0;
            return (
              <div key={i} className={[
                'p-8 group hover:bg-surface-container transition-colors duration-500',
                !isLastCol ? 'border-r border-outline-variant/20' : '',
                !isLastRow ? 'border-b border-outline-variant/20' : '',
              ].join(' ')}>
                <span className="font-headline text-3xl text-outline-variant group-hover:text-primary transition-colors">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="font-headline text-lg font-bold uppercase tracking-tighter mt-6 mb-1">{form.name}</h3>
                <p className="font-label text-xs text-primary-container uppercase tracking-widest mb-4">{form.sub}</p>
                <p className="font-body text-sm text-on-surface-variant mb-6 leading-relaxed">{form.desc}</p>
                <ul className="font-label text-xs space-y-1 uppercase tracking-widest text-tertiary">
                  {form.tags.map((t, j) => <li key={j}>- {t}</li>)}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      {/* QUOTE */}
      <section className="py-40 px-8 flex justify-center text-center relative overflow-hidden">
        <img src={hand1} alt="" className="absolute left-0 top-1/2 -translate-y-1/2 h-64 opacity-10 pointer-events-none select-none" />
        <img src={hand2} alt="" className="absolute right-0 top-1/2 -translate-y-1/2 h-64 opacity-10 pointer-events-none select-none" />
        <div className="max-w-4xl relative z-10">
          <blockquote className="font-headline text-4xl md:text-6xl font-bold uppercase tracking-tighter leading-tight">
            "Trenuj tvrdo, bojuj lahko"
          </blockquote>
        </div>
      </section>

    </main>
  );
}

export default Home;
