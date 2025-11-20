function Features() {
  const features = [
    {
      title: "Clear messaging",
      desc: "Explain what you do in simple terms with a strong headline and short supporting copy.",
    },
    {
      title: "Services overview",
      desc: "Highlight your core offerings with concise descriptions and clear benefits.",
    },
    {
      title: "Strong calls-to-action",
      desc: "Guide visitors to contact you, request a quote, or view your portfolio.",
    },
  ];

  return (
    <section id="services" className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-8">What we improve</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-white/10 bg-slate-800/50 p-6">
              <h3 className="text-xl font-semibold text-white mb-2">{f.title}</h3>
              <p className="text-blue-100/90 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
