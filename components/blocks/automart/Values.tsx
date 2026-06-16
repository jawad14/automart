const items = [
  {
    title: 'Best price, guaranteed',
    desc: "We beat any competitor's written quote.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2 4 6v6c0 5 3.5 8 8 10 4.5-2 8-5 8-10V6l-8-4z" strokeLinejoin="round" />
        <path d="m9 12 2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Delivered twice daily',
    desc: 'Our own fleet, our own drivers.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M1 3h13v10H1z" />
        <path d="M14 7h4l3 3v3h-7" strokeLinejoin="round" />
        <circle cx="5.5" cy="16.5" r="2" />
        <circle cx="17.5" cy="16.5" r="2" />
      </svg>
    ),
  },
  {
    title: 'Largest call center',
    desc: 'A real parts pro on every call.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 18v-6a9 9 0 0 1 18 0v6" strokeLinecap="round" />
        <path
          d="M21 19a2 2 0 0 1-2 2h-1v-7h1a2 2 0 0 1 2 2zM3 19a2 2 0 0 0 2 2h1v-7H5a2 2 0 0 0-2 2z"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: '25 years of trust',
    desc: 'Family-run since 2001.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="8" r="6" />
        <path d="m8.5 13.5-1.5 8 5-3 5 3-1.5-8" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export function Values() {
  return (
    <section className="am-values">
      <div className="am-wrap">
        {items.map((it) => (
          <div className="am-value" key={it.title}>
            <span className="am-vi">{it.icon}</span>
            <div>
              <b>{it.title}</b>
              <span>{it.desc}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
