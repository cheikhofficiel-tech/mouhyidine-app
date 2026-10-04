import { BookOpenText, Headphones, MoonStar, Play, Search, Sparkles } from 'lucide-react';
import { useMemo, useState } from 'react';
import { SPEAKERS } from './data/speakersData';
import { Speaker } from './types';

export default function App() {
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(SPEAKERS[0]);
  const [query, setQuery] = useState('');

  const filteredSpeakers = useMemo(() => {
    if (!query.trim()) return SPEAKERS;
    const q = query.toLowerCase();
    return SPEAKERS.filter(
      (speaker) =>
        speaker.name.toLowerCase().includes(q) ||
        speaker.role.toLowerCase().includes(q) ||
        speaker.specialty.toLowerCase().includes(q),
    );
  }, [query]);

  return (
    <div className="min-h-screen bg-[#090A0D] text-[#F5E8D3]">
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
        <header className="mb-8 flex flex-col gap-4 rounded-3xl border border-[#d4a359]/20 bg-[#11151d]/80 p-5 shadow-2xl shadow-black/20">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#d4a359]">Mouhyidine</p>
              <h1 className="mt-2 text-3xl font-semibold text-[#f8ead3]">Discours & Lecture Spirituelle</h1>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-[#d4a359]/30 bg-[#090a0d] px-3 py-2 text-sm text-[#f4d39b]">
              <MoonStar size={16} />
              Mode mobile
            </div>
          </div>

          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div className="relative w-full md:max-w-md">
              <Search className="absolute left-3 top-3.5 h-4 w-4 text-[#d4a359]" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Rechercher un guide, un thème..."
                className="w-full rounded-full border border-[#d4a359]/20 bg-[#0b0f17] py-2.5 pl-10 pr-4 text-sm text-[#f5e8d3] outline-none ring-0 placeholder:text-[#b8a98e]"
              />
            </div>

            <div className="flex gap-2 text-sm text-[#e9d7b7]">
              <button className="rounded-full border border-[#d4a359]/20 bg-[#171b22] px-3 py-2">Accueil</button>
              <button className="rounded-full border border-[#d4a359]/20 bg-[#171b22] px-3 py-2">Livres</button>
              <button className="rounded-full border border-[#d4a359]/20 bg-[#171b22] px-3 py-2">Tasbih</button>
            </div>
          </div>
        </header>

        <main className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <section className="space-y-5">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Guides spirituels</h2>
              <span className="rounded-full border border-[#d4a359]/20 bg-[#12171e] px-2.5 py-1 text-xs text-[#d9b57f]">
                {filteredSpeakers.length} profils
              </span>
            </div>

            <div className="grid gap-4">
              {filteredSpeakers.map((speaker) => {
                const isActive = selectedSpeaker?.id === speaker.id;
                return (
                  <button
                    key={speaker.id}
                    type="button"
                    onClick={() => setSelectedSpeaker(speaker)}
                    className={`w-full rounded-3xl border p-4 text-left transition ${
                      isActive
                        ? 'border-[#d4a359]/40 bg-[#141b23] shadow-lg shadow-[#d4a359]/10'
                        : 'border-[#d4a359]/10 bg-[#0f141b] hover:border-[#d4a359]/30'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <img
                        src={speaker.image}
                        alt={speaker.name}
                        className="h-20 w-20 rounded-2xl object-cover"
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between gap-3">
                          <h3 className="text-lg font-semibold text-[#f6e9d6]">{speaker.name}</h3>
                          <span className="rounded-full bg-[#d4a359]/15 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-[#e8c97f]">
                            {speaker.category}
                          </span>
                        </div>
                        <p className="mt-1 text-sm text-[#d7c79e]">{speaker.role}</p>
                        <p className="mt-1 text-xs text-[#a7a29a]">{speaker.location}</p>
                        <div className="mt-3 flex items-center gap-3 text-xs text-[#d4a359]">
                          <span className="inline-flex items-center gap-1"><Headphones size={14} /> {speaker.sermons.length} sermons</span>
                          <span className="inline-flex items-center gap-1"><Sparkles size={14} /> {speaker.specialty}</span>
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </section>

          <aside className="space-y-4">
            {selectedSpeaker && (
              <div className="spiritual-card rounded-3xl p-4">
                <div className="mb-4 flex items-center gap-3">
                  <img src={selectedSpeaker.image} alt={selectedSpeaker.name} className="h-14 w-14 rounded-2xl object-cover" />
                  <div>
                    <h3 className="text-lg font-semibold text-[#f5e8d3]">{selectedSpeaker.name}</h3>
                    <p className="text-sm text-[#d7b77a]">{selectedSpeaker.role}</p>
                  </div>
                </div>

                <p className="text-sm leading-6 text-[#e6d9c0]">{selectedSpeaker.bio}</p>

                <blockquote className="mt-4 border-l-2 border-[#d4a359]/40 pl-3 text-sm italic text-[#f3d7a8]">
                  “{selectedSpeaker.quote}”
                </blockquote>

                <div className="mt-5 space-y-3">
                  {selectedSpeaker.sermons.map((sermon) => (
                    <div key={sermon.id} className="rounded-2xl border border-[#d4a359]/15 bg-[#111821] p-3">
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <p className="font-medium text-[#f3e9d7]">{sermon.title}</p>
                          <p className="mt-1 text-xs text-[#c6b896]">{sermon.category} • {sermon.duration}</p>
                        </div>
                        <button
                          type="button"
                          className="flex items-center gap-1 rounded-full border border-[#d4a359]/30 bg-[#181e27] px-2.5 py-1.5 text-xs text-[#f4d39b]"
                        >
                          <Play size={12} />
                          Lire
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="spiritual-card rounded-3xl p-4">
              <div className="mb-3 flex items-center gap-2 text-[#d4a359]">
                <BookOpenText size={18} />
                <h3 className="font-semibold">Lecture & méditation</h3>
              </div>
              <p className="text-sm text-[#d9d0bf]">
                Accédez à des textes de sagesse, de khassaides et de réflexions spirituelles adaptées à la lecture mobile.
              </p>
            </div>
          </aside>
        </main>
      </div>
    </div>
  );
}
