import { useState } from 'react'

// ─── Data ──────────────────────────────────────────────────────────────────

const quickFacts = [
  { label: 'Nama Panggilan', value: 'udah disebut ya 😄' },
  { label: 'Usia / Domisili', value: '31 th / Gunung Putri, Bogor' },
  { label: 'Kesibukan', value: 'IT di Puskesmas Jakarta' },
  { label: 'Zodiak / MBTI', value: 'ISTJ' },
  { label: 'Tinggi', value: '172 cm' },
  { label: 'Berat Terakhir', value: '74 kg' },
]

const traits = [
  {
    icon: '🌿',
    title: 'Sabar & Kalem',
    desc: 'Alhamdulillah bukan orang yang gampang kesulut emosi. Kalau ada masalah, lebih milih tenang dulu baru mikir. Daripada langsung marah, yang ada perang besar.',
  },
  {
    icon: '👂',
    title: 'Pendengar yang Baik',
    desc: 'Lebih suka merhatiin dan nemenin. Walau kadang masih belajar buat lebih peka sama kode-kode emosi dari cewek.',
  },
  {
    icon: '🪞',
    title: 'Apa Adanya',
    desc: 'Karena aku introvert, caraku recharge energi mungkin terkesan menarik diri. Tapi itu maksudnya aku butuh ruang sendiri dan bukan berarti aku nggak peduli.',
  },
  {
    icon: '🏡',
    title: 'Agak Rumahan',
    desc: 'Lebih suka suasana yang tenang dan nyaman ketimbang tempat yang terlalu berisik dan ramai. Bukan orang yang suka nongkrong, Alhamdulillah bukan perokok.',
  },
]

const hobbies = [
  { icon: '🎮', label: 'Nge-game', desc: 'Bisa nemenin kamu main apa aja. Kalo mau main bareng, ayooo!' },
  { icon: '💻', label: 'Ngoding', desc: 'Dari dulu suka aja bikin website kecil-kecilan. Sekarang lagi nyoba bikin sistem yang bisa jadi cuan' },
  { icon: '⚽', label: 'Nonton Bola', desc: 'Khususnya Man Utd & Timnas Indonesia. Aku fans MU dari zaman Beckham masih jomblo' },
  { icon: '🏋️', label: 'Nge-gym', desc: 'Biar nggak gampang tumbang. Badannya masih belum berotot sii 😄' },
  { icon: '🎬', label: 'Nonton Film', desc: 'Bioskop atau Netflix santai. Suka genre fantasi sama sci-fi' },
  { icon: '🚶', label: 'Jalan-jalan', desc: 'Plesiran santai tanpa tujuan. Pernah sendirian motoran sampe Ciletuh karena gabut haha.' },
  { icon: '✍️', label: 'Nulis Cerita', desc: 'Pengen jadi penulis fantasi kayak J.R.R. Tolkien. Ini yang bikin aku suka sama dunia fantasi. Bukan Dufan, ya' },
  { icon: '📚', label: 'Baca Buku', desc: 'Sekarang lagi suka baca buku non-fiksi. Kalo dulu Novel & manga jadi favorit' },
]

const likes = [
  'Perhatian tulus dan bisa menghargai usaha dan keberadaanku',
  'Waktu berkualitas saat lagi bareng (bisa ngobrol lama atau cerita keseharian)',
  'Komunikasi yang jelas, langsung to the point dan ga jaim, tanpa harus main tebak-tebakan pikiran',
]

const dislikes = [
  'Ngambek atau didiamkan berlama-lama tanpa kejelasan',
  'Drama yang sebenernya nggak perlu diperbesar',
  'Suasana atau tempat yang terlalu ramai dan bikin pusing',
]

const relationshipCards = [
  {
    label: 'Pendekatan',
    icon: '🔮',
    title: 'Komitmen Jangka Panjang',
    desc: 'Saling support, mau belajar nerima kekurangan masing-masing, dan jalanin komitmen yang tulus untuk jangka panjang.',
  },
  {
    label: 'Suasana',
    icon: '🏠',
    title: 'Rumah & Tempat Pulang',
    desc: 'Pengen hubungan yang jadi "rumah" sekaligus tempat pulang paling aman dan tenang — sekaligus berkomunikasi secara dewasa dan jelas tanpa kode-kode.',
  },
  {
    label: 'Batasan',
    icon: '🌙',
    title: 'Hargai Me-time Masing-masing',
    desc: 'Saling menghargai waktu istirahat atau me-time, karena nggak harus nempel 24/7 kaya perangko buat nunjukin rasa sayang.',
  },
]

const dateOptions = [
  {
    letter: 'A',
    title: 'Ngopi Santai',
    desc: 'Ngopi di kafe yang tenang, lanjut ngobrol ngalur-ngidul tentang diri masing-masing.',
    tags: ['Santai', 'Ngobrol', 'Tenang'],
  },
  {
    letter: 'B',
    title: 'Movie Date',
    desc: 'Nonton film yang lagi rame di bioskop. Setelah itu ngobrol santai.',
    tags: ['Sore', 'Nonton', 'Santai'],
  },
  {
    letter: 'C',
    title: 'Kulineran Malam',
    desc: 'Cari jajanan atau kulineran malam yang enak sambil ngobrol santai. Seru dan nggak kaku!',
    tags: ['Seru', 'Makan', 'Ngobrol'],
  },
]

const commPrefs = [
  {
    title: 'Chat & Video Call',
    icon: '💬',
    items: [
      'Lebih suka chat untuk kabar harian',
      'Seneng banget kalau bisa video call-an sebelum tidur. Ga harus ngobrol berat, tatapan muka aja udah bikin seneng',
      'Saat lagi sibuk aku pastiin ngabarin dan ngasih estimasi waktunya',
    ],
  },
  {
    title: 'Waktu Paling Nyaman',
    icon: '🕐',
    items: [
      'Setelah jam kerja selesai',
      'Malam hari pas suasana udah mulai tenang',
      'Lebih responsif di luar jam sibuk kantor',
    ],
  },
]

const icebreakers = [
  {
    q: 'Biasanya kalau lagi capek atau stres, cara paling ampuh buat balikin mood kamu tuh ngapain?',
    tag: 'Energi & Mood',
  },
  {
    q: 'Film atau serial apa yang akhir-akhir ini lagi seru banget buat ditonton?',
    tag: 'Selera Tontonan',
  },
  {
    q: 'Kalau disuruh pilih: kulineran malam di pinggir jalan atau makan malam di tempat yang tenang, kamu tim yang mana?',
    tag: 'Kencan Pertama',
  },
]

// ─── Sub-components ────────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span
        className="text-xs font-semibold tracking-widest uppercase"
        style={{ fontFamily: 'var(--font-body)', color: '#c4622d' }}
      >
        {children}
      </span>
      <div className="flex-1 h-px" style={{ background: '#ddd0c0' }} />
    </div>
  )
}

function PageHeader({ page, title, subtitle }: { page: number; title: string; subtitle: string }) {
  return (
    <div className="relative mb-10 pb-8" style={{ borderBottom: '1px solid #ddd0c0' }}>
      <div
        className="absolute top-0 right-0 text-8xl font-bold select-none"
        style={{
          fontFamily: 'var(--font-display)',
          color: '#c4622d',
          opacity: 0.08,
          lineHeight: 1,
        }}
      >
        0{page}
      </div>
      <p
        className="text-xs font-semibold tracking-widest uppercase mb-3"
        style={{ fontFamily: 'var(--font-body)', color: '#7a6a5a' }}
      >
        Halaman {page} dari 2
      </p>
      <h1
        className="text-4xl md:text-5xl font-bold leading-tight mb-2"
        style={{ fontFamily: 'var(--font-display)', color: '#2c2825' }}
      >
        {title}
      </h1>
      <p
        className="text-base italic"
        style={{ fontFamily: 'var(--font-display)', color: '#7a6a5a' }}
      >
        {subtitle}
      </p>
    </div>
  )
}

// ─── Page 1 ────────────────────────────────────────────────────────────────

function Page1() {
  return (
    <div className="space-y-12">
      {/* Section 1 – Quick Facts */}
      <section>
        <SectionLabel>§ 01 — Fakta Singkat</SectionLabel>

        {/* Abstract bio */}
        <p
          className="text-sm leading-relaxed mb-5 italic"
          style={{ fontFamily: 'var(--font-body)', color: '#7a6a5a', borderLeft: '3px solid #c4622d', paddingLeft: '1rem' }}
        >
          Aku tumbuh dari lingkungan yang mengajarkan bahwa segala sesuatu diraih dengan usaha sendiri — bukan warisan dan jalan pintas.
          Terbiasa jadi sandaran bagi yang lebih muda, namun tetap punya ruang untuk bermimpi.
          Di titik ini, sedang mencari seseorang yang sefrekuensi: yang bisa diajak tumbuh bersama,
          membangun dari hal-hal sederhana, dan saling menguatkan dalam diam maupun dalam bicara.
        </p>

        <div className="grid grid-cols-2 gap-3">
          {quickFacts.map((f) => (
            <div
              key={f.label}
              className="rounded-xl px-5 py-4 flex flex-col gap-1 transition-transform duration-200 hover:-translate-y-0.5"
              style={{ background: '#faf6f0', border: '1px solid #ddd0c0' }}
            >
              <span
                className="text-xs font-semibold tracking-widest uppercase"
                style={{ fontFamily: 'var(--font-body)', color: '#7a6a5a' }}
              >
                {f.label}
              </span>
              <span
                className="text-xl font-semibold"
                style={{ fontFamily: 'var(--font-display)', color: '#2c2825' }}
              >
                {f.value}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Section 2 – Personality Traits */}
      <section>
        <SectionLabel>§ 02 — Sifat Diri</SectionLabel>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {traits.map((t) => (
            <div
              key={t.title}
              className="rounded-xl p-5 flex gap-4 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
              style={{ background: '#faf6f0', border: '1px solid #ddd0c0' }}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 text-lg"
                style={{ background: '#f0e6d8' }}
              >
                {t.icon}
              </div>
              <div>
                <h3
                  className="font-semibold text-sm mb-1"
                  style={{ fontFamily: 'var(--font-body)', color: '#2c2825' }}
                >
                  {t.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ fontFamily: 'var(--font-body)', color: '#7a6a5a' }}
                >
                  {t.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3 – Hobbies */}
      <section>
        <SectionLabel>§ 03 — Hobi & Cara Recharge</SectionLabel>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {hobbies.map((h) => (
            <div
              key={h.label}
              className="rounded-xl px-4 py-4 flex flex-col items-center gap-2 text-center transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 cursor-default"
              style={{ background: '#faf6f0', border: '1px solid #ddd0c0' }}
            >
              <span className="text-2xl">{h.icon}</span>
              <span
                className="text-xs font-semibold leading-tight"
                style={{ fontFamily: 'var(--font-body)', color: '#2c2825' }}
              >
                {h.label}
              </span>
              {'desc' in h && (
                <span
                  className="text-xs leading-tight"
                  style={{ fontFamily: 'var(--font-body)', color: '#7a6a5a' }}
                >
                  {(h as { label: string; icon: string; desc: string }).desc}
                </span>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Section 4 – Likes & Dislikes */}
      <section>
        <SectionLabel>§ 04 — Hal yang Disukai & Tidak</SectionLabel>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Likes */}
          <div
            className="rounded-xl p-5"
            style={{ background: '#eef5ee', border: '1px solid #b8d8b8' }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-6 h-6 rounded-full flex items-center justify-center text-sm"
                style={{ background: '#4a8a4a', color: '#fff' }}
              >
                ✓
              </div>
              <h3
                className="font-semibold text-sm"
                style={{ fontFamily: 'var(--font-body)', color: '#2c4a2c' }}
              >
                Hal yang Disukai ✓
              </h3>
            </div>
            <ul className="space-y-2">
              {likes.map((l) => (
                <li
                  key={l}
                  className="text-sm flex items-start gap-2"
                  style={{ fontFamily: 'var(--font-body)', color: '#2c4a2c' }}
                >
                  <span className="mt-0.5 text-xs" style={{ color: '#4a8a4a' }}>
                    ●
                  </span>
                  {l}
                </li>
              ))}
            </ul>
          </div>

          {/* Dislikes */}
          <div
            className="rounded-xl p-5"
            style={{ background: '#f9edec', border: '1px solid #e0b0aa' }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-6 h-6 rounded-full flex items-center justify-center text-sm"
                style={{ background: '#c0504a', color: '#fff' }}
              >
                ✕
              </div>
              <h3
                className="font-semibold text-sm"
                style={{ fontFamily: 'var(--font-body)', color: '#4a1a18' }}
              >
                Kurang Suka ✕
              </h3>
            </div>
            <ul className="space-y-2">
              {dislikes.map((d) => (
                <li
                  key={d}
                  className="text-sm flex items-start gap-2"
                  style={{ fontFamily: 'var(--font-body)', color: '#4a1a18' }}
                >
                  <span className="mt-0.5 text-xs" style={{ color: '#c0504a' }}>
                    ●
                  </span>
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

// ─── Page 2 ────────────────────────────────────────────────────────────────

function Page2() {
  return (
    <div className="space-y-12">
      {/* Section 5 – Relationship Expectations */}
      <section>
        <SectionLabel>§ 05 — Harapan dalam Hubungan</SectionLabel>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {relationshipCards.map((r) => (
            <div
              key={r.label}
              className="rounded-xl p-5 flex flex-col gap-3 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
              style={{ background: '#faf6f0', border: '1px solid #ddd0c0' }}
            >
              <div className="flex items-center gap-2">
                <span className="text-lg">{r.icon}</span>
                <span
                  className="text-xs font-semibold tracking-widest uppercase"
                  style={{ fontFamily: 'var(--font-body)', color: '#c4622d' }}
                >
                  {r.label}
                </span>
              </div>
              <h3
                className="font-bold text-base"
                style={{ fontFamily: 'var(--font-display)', color: '#2c2825' }}
              >
                {r.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ fontFamily: 'var(--font-body)', color: '#7a6a5a' }}
              >
                {r.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 6 – First Date Options */}
      <section>
        <SectionLabel>§ 06 — Ide Kencan Pertama</SectionLabel>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {dateOptions.map((d) => (
            <div
              key={d.letter}
              className="rounded-xl overflow-hidden transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
              style={{ border: '1px solid #ddd0c0' }}
            >
              <div
                className="px-5 pt-5 pb-4"
                style={{ background: '#f0e6d8' }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0"
                    style={{ background: '#c4622d', color: '#faf6f0', fontFamily: 'var(--font-display)' }}
                  >
                    {d.letter}
                  </div>
                  <h3
                    className="font-bold text-base"
                    style={{ fontFamily: 'var(--font-display)', color: '#2c2825' }}
                  >
                    {d.title}
                  </h3>
                </div>
              </div>
              <div className="px-5 py-4" style={{ background: '#faf6f0' }}>
                <p
                  className="text-sm leading-relaxed mb-3"
                  style={{ fontFamily: 'var(--font-body)', color: '#7a6a5a' }}
                >
                  {d.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {d.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full font-medium"
                      style={{
                        background: '#f0e6d8',
                        color: '#c4622d',
                        fontFamily: 'var(--font-body)',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 7 – Communication Style */}
      <section>
        <SectionLabel>§ 07 — Gaya Komunikasi</SectionLabel>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {commPrefs.map((c) => (
            <div
              key={c.title}
              className="rounded-xl p-5"
              style={{ background: '#faf6f0', border: '1px solid #ddd0c0' }}
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-lg">{c.icon}</span>
                <h3
                  className="font-semibold text-sm"
                  style={{ fontFamily: 'var(--font-body)', color: '#2c2825' }}
                >
                  {c.title}
                </h3>
              </div>
              <ul className="space-y-2.5">
                {c.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm flex items-start gap-2.5"
                    style={{ fontFamily: 'var(--font-body)', color: '#7a6a5a' }}
                  >
                    <span
                      className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: '#c4622d' }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Section 8 – Icebreakers */}
      <section>
        <SectionLabel>§ 08 — Pintu Masuk Obrolan 💬</SectionLabel>
        <div className="grid grid-cols-1 gap-4">
          {icebreakers.map((item, i) => (
            <div
              key={i}
              className="rounded-xl p-5 flex gap-4 transition-all duration-200 hover:shadow-md"
              style={{ background: '#faf6f0', border: '1px solid #ddd0c0' }}
            >
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5"
                style={{
                  background: '#c4622d',
                  color: '#faf6f0',
                  fontFamily: 'var(--font-display)',
                }}
              >
                {i + 1}
              </div>
              <div className="flex-1">
                <div
                  className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold mb-2"
                  style={{
                    background: '#f0e6d8',
                    color: '#c4622d',
                    fontFamily: 'var(--font-body)',
                  }}
                >
                  {item.tag}
                </div>
                <p
                  className="text-sm leading-relaxed italic"
                  style={{ fontFamily: 'var(--font-display)', color: '#2c2825' }}
                >
                  "{item.q}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

// ─── Root ──────────────────────────────────────────────────────────────────

export default function App() {
  const [activePage, setActivePage] = useState<1 | 2>(1)

  return (
    <div
      className="min-h-screen py-10 px-4"
      style={{ background: '#f5f0ea' }}
    >
      {/* Outer wrapper — paper card */}
      <div
        className="mx-auto max-w-2xl rounded-2xl overflow-hidden shadow-xl"
        style={{ background: '#faf6f0', border: '1px solid #ddd0c0' }}
      >
        {/* CV Header Banner */}
        <div
          className="relative px-8 pt-10 pb-8 overflow-hidden"
          style={{ background: '#2c2825' }}
        >
          {/* decorative terracotta accent bar */}
          <div
            className="absolute top-0 left-0 right-0 h-1"
            style={{ background: 'linear-gradient(90deg, #c4622d, #d4804a, #e8a070)' }}
          />
          {/* large ghost text */}
          <div
            className="absolute right-6 bottom-0 text-9xl font-bold select-none leading-none"
            style={{
              fontFamily: 'var(--font-display)',
              color: '#ffffff',
              opacity: 0.04,
            }}
          >
            CV
          </div>

          <div className="relative">
            <p
              className="text-xs font-semibold tracking-widest uppercase mb-2"
              style={{ fontFamily: 'var(--font-body)', color: '#c4622d' }}
            >
              Personal Introduction
            </p>
            <h1
              className="text-3xl md:text-4xl font-bold mb-1"
              style={{ fontFamily: 'var(--font-display)', color: '#faf6f0' }}
            >
              CV
            </h1>
            <p
              className="text-base italic"
              style={{ fontFamily: 'var(--font-display)', color: '#a89a8a' }}
            >
              Ini CV perkenalan, bukan CV kerja :D
            </p>
          </div>

          {/* Page tabs */}
          <div className="relative flex gap-2 mt-7">
            {([1, 2] as const).map((p) => (
              <button
                key={p}
                onClick={() => { setActivePage(p); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
                className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                style={{
                  fontFamily: 'var(--font-body)',
                  background: activePage === p ? '#c4622d' : 'transparent',
                  color: activePage === p ? '#faf6f0' : '#a89a8a',
                  border: activePage === p ? '1px solid #c4622d' : '1px solid #50403044',
                  cursor: 'pointer',
                }}
              >
                {p === 1 ? 'All About Me' : 'Relationship Vibe & Icebreakers'}
              </button>
            ))}
          </div>
        </div>

        {/* Page content */}
        <div className="px-6 md:px-8 py-8">
          {activePage === 1 ? (
            <>
              <PageHeader
                page={1}
                title="All About Me"
                subtitle="Versi jujur dan apa adanya — tanpa bumbu marketing."
              />
              <Page1 />
            </>
          ) : (
            <>
              <PageHeader
                page={2}
                title="Relationship Vibe & Icebreakers"
                subtitle="Yang aku cari dan gimana cara mulai ngobrol yang enak."
              />
              <Page2 />
            </>
          )}

          {/* Footer */}
          <div
            className="mt-12 pt-6 flex items-center justify-between"
            style={{ borderTop: '1px solid #ddd0c0' }}
          >
            <p
              className="text-xs"
              style={{ fontFamily: 'var(--font-body)', color: '#a89a8a' }}
            >
              Dibuat oleh Willy Andha · {new Date().getFullYear()}
            </p>
            <button
              onClick={() => { setActivePage(activePage === 1 ? 2 : 1); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
              className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg transition-all duration-200 hover:opacity-80"
              style={{
                fontFamily: 'var(--font-body)',
                color: '#c4622d',
                background: '#f0e6d8',
                border: '1px solid #ddd0c0',
                cursor: 'pointer',
              }}
            >
              {activePage === 1 ? 'Lanjut: Relationship Vibe →' : '← Kembali: All About Me'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}