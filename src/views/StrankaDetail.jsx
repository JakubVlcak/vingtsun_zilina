import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PortableText } from '@portabletext/react';
import client, { urlFor } from '../sanityClient';

const portableComponents = {
  types: {
    image: ({ value }) => (
      <img
        src={urlFor(value).width(900).url()}
        alt={value.caption || ''}
        className="w-full my-8 opacity-90"
      />
    ),
  },
};

function StrankaDetail() {
  const { sekcia, slug } = useParams();
  const [stranka, setStranka] = useState(null);
  const [podstranky, setPodstranky] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "stranka" && slug.current == $slug][0] {
          title, slug, perex, obsah,
          "rodic": rodic->{ title, slug },
          "sekcia": sekcia->{ title, slug }
        }`,
        { slug }
      )
      .then((data) => {
        setStranka(data);
        if (data) {
          client
            .fetch(
              `*[_type == "stranka" && rodic._ref == *[_type == "stranka" && slug.current == $slug][0]._id] | order(poradie asc) { title, slug, perex }`,
              { slug }
            )
            .then(setPodstranky);
        }
        setLoading(false);
      });
  }, [slug]);

  if (loading) return <main className="pt-48 px-8 text-on-surface-variant">Načítavam...</main>;
  if (!stranka) return <main className="pt-48 px-8 text-on-surface-variant">Stránka nenájdená.</main>;

  const backTo = stranka.rodic
    ? `/s/${sekcia}/${stranka.rodic.slug.current}`
    : null;

  return (
    <main className="pt-40 pb-32 px-8 md:px-16 max-w-screen-lg mx-auto">
      {backTo && (
        <Link
          to={backTo}
          className="font-label text-xs uppercase tracking-widest text-[#be0000] hover:text-white transition-colors mb-6 block"
        >
          ← {stranka.rodic.title}
        </Link>
      )}
      <h1 className="font-display font-bold uppercase tracking-tighter text-5xl md:text-7xl text-on-surface mb-6">
        {stranka.title}
      </h1>
      {stranka.perex && (
        <p className="font-body text-xl text-on-surface-variant italic border-l-2 border-[#be0000] pl-6 mb-12">
          {stranka.perex}
        </p>
      )}
      {stranka.obsah && (
        <div className="prose prose-invert max-w-none font-body text-on-surface-variant text-lg leading-relaxed">
          <PortableText value={stranka.obsah} components={portableComponents} />
        </div>
      )}
      {podstranky.length > 0 && (
        <div className="mt-16">
          <h2 className="font-display font-bold uppercase tracking-tighter text-2xl text-on-surface mb-8 border-b border-[#353534]/30 pb-4">
            Podstránky
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {podstranky.map((p) => (
              <Link
                key={p.slug.current}
                to={`/s/${sekcia}/${p.slug.current}`}
                className="block p-6 border border-[#353534]/30 hover:border-[#be0000]/50 transition-colors group"
              >
                <span className="font-headline font-bold uppercase tracking-tight text-on-surface group-hover:text-[#be0000] transition-colors">
                  {p.title}
                </span>
                {p.perex && (
                  <p className="font-body text-sm text-on-surface-variant mt-2">{p.perex}</p>
                )}
              </Link>
            ))}
          </div>
        </div>
      )}
    </main>
  );
}

export default StrankaDetail;
