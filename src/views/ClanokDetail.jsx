import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PortableText } from '@portabletext/react';
import client from '../sanityClient';

function ClanokDetail() {
  const { slug } = useParams();
  const [clanek, setClanek] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client
      .fetch(`*[_type == "clanek" && slug.current == $slug][0] {
        title, datum, perex, obsah,
        "imageUrl": obrazok.asset->url
      }`, { slug })
      .then((data) => { setClanek(data); setLoading(false); });
  }, [slug]);

  if (loading) return <main className="pt-40 px-8 md:px-16 max-w-screen-2xl mx-auto"><p className="font-body text-on-surface-variant">Nacitavam...</p></main>;
  if (!clanek) return <main className="pt-40 px-8 md:px-16 max-w-screen-2xl mx-auto"><p className="font-body text-on-surface-variant">Clanek nebol najdeny.</p></main>;

  return (
    <main className="pt-40 pb-32 px-8 md:px-16 max-w-screen-2xl mx-auto">
      <Link to="/clanky" className="font-label text-xs uppercase tracking-widest text-tertiary hover:text-primary-container transition-colors mb-12 block">
        &larr; Vsetky clanky
      </Link>

      {clanek.imageUrl && (
        <img src={clanek.imageUrl} alt={clanek.title} className="w-full max-h-[500px] object-cover mb-12" />
      )}

      <span className="font-label text-xs text-tertiary uppercase tracking-widest mb-4 block">{clanek.datum}</span>
      <h1 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-none text-on-surface mb-8">
        {clanek.title}
      </h1>

      {clanek.perex && (
        <p className="font-body text-xl text-on-surface-variant italic border-l-2 border-primary-container pl-6 mb-12 max-w-2xl">
          {clanek.perex}
        </p>
      )}

      <div className="font-body text-lg text-on-surface-variant leading-relaxed max-w-3xl prose prose-invert">
        <PortableText value={clanek.obsah} />
      </div>
    </main>
  );
}

export default ClanokDetail;
