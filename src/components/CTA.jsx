function CTA() {
  return (
    <section id="contact" className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="rounded-2xl border border-blue-500/30 bg-gradient-to-br from-blue-600/20 to-blue-400/10 p-10">
          <h2 className="text-3xl font-bold text-white mb-3">Ready to refresh your website?</h2>
          <p className="text-blue-100/90 mb-8">We can redesign your pages, improve performance, and align the look with your brand.</p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a
              href="mailto:hello@vegasega.com"
              className="inline-flex items-center rounded-lg bg-blue-500 hover:bg-blue-600 text-white px-5 py-3 font-medium transition-colors"
            >
              Email us
            </a>
            <a
              href="https://vegasega.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-lg border border-white/20 text-white hover:bg-white/10 px-5 py-3 font-medium transition-colors"
            >
              Visit vegasega.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;
