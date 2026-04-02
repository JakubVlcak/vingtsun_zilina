import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import client from '../sanityClient';

function Clanky() {
  const [clanky, setClanky] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client
      .fetch(`*[_type == "clanek"] | order(datum desc) {
        title, slug, datum, perex,
        "imageUrl": obrazok.asset->url
      }`)
      .then((data) => { setClanky(data); setLoading(false); });
  }, []);

  return (
    <main className="pt-40 pb-32 px-8 md:px-16 max-w-screen-2xl mx-auto">
      <div className="mb-20">
        <span className="font-label text-tertiary uppercase tracking-widest text-xs mb-4 block">Obsah</span>
        <h1 className="font-display text-6xl md:text-8xl font-bold uppercase tracking-tighter leading-none text-on-surface">
          Články
        </h1>
        <div className="w-24 h-1 bg-primary-container mt-6"></div>
      </div>

      {loading ? (
        <p className="font-body text-on-surface-variant">Nacitavam...</p>
      ) : clanky.length === 0 ? (
        <p className="font-body text-on-surface-variant">Zatial ziadne clanky.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-outline-variant/20">
          {clanky.map((c) => (
            <Link
              key={c.slug.current}
              to={`/clanky/${c.slug.current}`}
              className="p-10 border-r border-b border-outline-variant/20 group hover:bg-surface-container transition-colors duration-300 block"
            >
              {c.imageUrl && (
                <img
                  src={c.imageUrl}
                  alt={c.title}
                  className="w-full h-48 object-cover mb-6 grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              )}
              <span className="font-label text-xs text-tertiary uppercase tracking-widest mb-3 block">
                {c.datum}
              </span>
              <h2 className="font-headline text-xl font-bold uppercase tracking-tighter mb-3 group-hover:text-primary-container transition-colors">
                {c.title}
              </h2>
              {c.perex && (
                <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                  {c.perex}
                </p>
              )}
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}

export default Clanky;
