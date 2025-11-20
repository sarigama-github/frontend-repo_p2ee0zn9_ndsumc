function Hero() {
  return (
    <section className="relative pt-28 pb-16">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.25),transparent_50%)]" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4">
              Build a modern presence for your business
            </h1>
            <p className="text-lg text-blue-100/90 leading-relaxed mb-8">
              Clean design, fast performance, and clear messaging. This refreshed layout highlights what you do and guides visitors to take action.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center rounded-lg bg-blue-500 hover:bg-blue-600 text-white px-5 py-3 font-medium transition-colors"
              >
                Get a quote
              </a>
              <a
                href="https://vegasega.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-lg border border-white/20 text-white hover:bg-white/10 px-5 py-3 font-medium transition-colors"
              >
                Visit current site
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800 to-slate-900 p-4">
              <div className="h-full w-full rounded-xl bg-[url('https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center" />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-blue-500 text-white text-xs px-3 py-1 rounded-full shadow-lg">
              Demo layout
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
