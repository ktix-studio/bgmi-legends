import { useState, useEffect } from 'react';

// ============ NAVBAR ============
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = ['Tournaments', 'Prize Pool', 'Teams', 'Process', 'Winners', 'Register'];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${scrolled ? 'bg-[#050505]/95 backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="flex items-center gap-3">
            <span className="font-display text-xl tracking-wider gold-gradient font-semibold">BGMI LEGENDS</span>
          </a>
          <div className="hidden lg:flex items-center gap-10">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(/ /g, '-')}`}
                className="nav-link"
              >
                {link}
              </a>
            ))}
          </div>
          <a href="#register" className="hidden lg:block btn-luxury !py-3 !px-6 !text-[10px]">
            <span>Enquire</span>
          </a>
          <button className="lg:hidden gold-text" onClick={() => setMobileOpen(!mobileOpen)}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        {mobileOpen && (
          <div className="lg:hidden pb-8 pt-4 fade-in">
            <div className="gold-line mb-6" />
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(/ /g, '-')}`}
                className="block py-3 text-white/60 hover:text-[#D4AF37] transition-colors text-xs tracking-[3px] uppercase"
                onClick={() => setMobileOpen(false)}
              >
                {link}
              </a>
            ))}
          </div>
        )}
      </div>
      {scrolled && <div className="gold-line opacity-30" />}
    </nav>
  );
}

// ============ HERO SECTION ============
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
      {/* Subtle gold particles */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'radial-gradient(circle, #D4AF37 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Trophy */}
        <div className="animate-float mb-12">
          <div className="trophy-glow inline-block">
            <span className="text-7xl sm:text-8xl">🏆</span>
          </div>
        </div>

        {/* Overline */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="w-12 h-px bg-[#D4AF37]/40" />
          <span className="text-[11px] tracking-[4px] uppercase text-[#D4AF37]/80 font-light">India's Premier Battleground</span>
          <div className="w-12 h-px bg-[#D4AF37]/40" />
        </div>

        {/* Main Title */}
        <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-bold mb-6 leading-[0.9]">
          <span className="gold-gradient gold-glow">BGMI</span>
          <br />
          <span className="text-white font-light italic">Legends</span>
        </h1>

        {/* Subtitle */}
        <p className="text-white/40 text-sm sm:text-base tracking-[2px] uppercase font-light mb-4">
          Tournament Series 2026
        </p>
        <p className="text-white/30 text-sm font-light max-w-md mx-auto leading-relaxed mb-12">
          Where India's finest battle for glory, prestige, and a prize pool of one lakh rupees.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
          <a href="#register" className="btn-luxury-filled">
            Register Now
          </a>
          <a href="#tournaments" className="btn-luxury">
            <span>View Tournaments</span>
          </a>
        </div>

        {/* Stats */}
        <div className="mt-20 flex items-center justify-center gap-12 sm:gap-16">
          <div className="text-center">
            <div className="font-display text-3xl sm:text-4xl gold-gradient font-bold">500+</div>
            <div className="text-[10px] tracking-[2px] uppercase text-white/30 mt-1">Teams</div>
          </div>
          <div className="w-px h-10 bg-[#D4AF37]/20" />
          <div className="text-center">
            <div className="font-display text-3xl sm:text-4xl gold-gradient font-bold">₹1L</div>
            <div className="text-[10px] tracking-[2px] uppercase text-white/30 mt-1">Prize Pool</div>
          </div>
          <div className="w-px h-10 bg-[#D4AF37]/20" />
          <div className="text-center">
            <div className="font-display text-3xl sm:text-4xl gold-gradient font-bold">10K+</div>
            <div className="text-[10px] tracking-[2px] uppercase text-white/30 mt-1">Players</div>
          </div>
        </div>
      </div>

      {/* Bottom gold line */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="gold-line" />
      </div>
    </section>
  );
}

// ============ SECTION HEADER ============
function SectionHeader({ number, title, subtitle }: { number: string; title: string; subtitle: string }) {
  return (
    <div className="mb-20">
      <div className="flex items-center gap-4 mb-6">
        <span className="font-display text-sm gold-text/50 italic">{number}</span>
        <div className="w-8 h-px bg-[#D4AF37]/30" />
        <span className="text-[10px] tracking-[3px] uppercase text-white/30">{subtitle}</span>
      </div>
      <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white font-bold leading-tight">
        {title}
      </h2>
    </div>
  );
}

// ============ TOURNAMENTS SECTION ============
function TournamentsSection() {
  const tournaments = [
    { name: 'Legends Championship', date: '15 February 2026', map: 'Erangel', mode: 'Squad', prize: '₹50,000', status: 'Open' },
    { name: 'Night Ops Showdown', date: '22 February 2026', map: 'Miramar', mode: 'Squad', prize: '₹25,000', status: 'Open' },
    { name: 'Urban Warfare Cup', date: '01 March 2026', map: 'Sanhok', mode: 'Squad', prize: '₹25,000', status: 'Upcoming' },
    { name: 'Grand Finale', date: '15 March 2026', map: 'All Maps', mode: 'Squad', prize: '₹1,00,000', status: 'Upcoming' },
  ];

  return (
    <section id="tournaments" className="section-padding px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <SectionHeader number="01" title="Upcoming Tournaments" subtitle="The Arena Awaits" />

        <div className="space-y-0">
          {tournaments.map((t, i) => (
            <div key={i}>
              <div className="py-8 sm:py-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group cursor-pointer hover:pl-4 transition-all duration-500">
                <div className="flex-1">
                  <h3 className="font-display text-xl sm:text-2xl text-white group-hover:text-[#D4AF37] transition-colors duration-300">
                    {t.name}
                  </h3>
                  <p className="text-white/30 text-sm mt-2 font-light tracking-wide">
                    {t.date} — {t.map} — {t.mode}
                  </p>
                </div>
                <div className="flex items-center gap-8">
                  <div className="text-right">
                    <span className="font-display text-xl sm:text-2xl gold-gradient font-semibold">{t.prize}</span>
                  </div>
                  <div className="hidden sm:block">
                    <span className={`text-[10px] tracking-[2px] uppercase font-medium ${
                      t.status === 'Open' ? 'text-[#D4AF37]' : 'text-white/30'
                    }`}>
                      {t.status}
                    </span>
                  </div>
                  <div className="gold-text opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-lg">→</div>
                </div>
              </div>
              <div className="gold-line opacity-20" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ PRIZE POOL SECTION ============
function PrizePoolSection() {
  const prizes = [
    { place: 'First', amount: '₹50,000', detail: 'Champion' },
    { place: 'Second', amount: '₹25,000', detail: 'Runner Up' },
    { place: 'Third', amount: '₹15,000', detail: 'Second Runner Up' },
    { place: 'Fourth', amount: '₹5,000', detail: 'Semi-Finalist' },
    { place: 'Fifth', amount: '₹3,000', detail: 'Semi-Finalist' },
    { place: 'Sixth', amount: '₹2,000', detail: 'Quarter-Finalist' },
  ];

  return (
    <section id="prize-pool" className="section-padding px-6 lg:px-12 relative">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-20">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-8 h-px bg-[#D4AF37]/30" />
            <span className="text-[10px] tracking-[3px] uppercase text-white/30">The Stakes</span>
            <div className="w-8 h-px bg-[#D4AF37]/30" />
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white font-bold">
            Prize Pool
          </h2>
        </div>

        {/* Big Total */}
        <div className="mb-24">
          <div className="font-display text-7xl sm:text-8xl lg:text-9xl font-bold gold-gradient gold-glow animate-shimmer">
            ₹1,00,000
          </div>
          <p className="text-white/30 text-sm tracking-[3px] uppercase mt-4 font-light">One Lakh Rupees</p>
        </div>

        {/* Prize Breakdown */}
        <div className="max-w-2xl mx-auto">
          {prizes.map((p, i) => (
            <div key={i}>
              <div className="py-6 flex items-center justify-between group">
                <div className="flex items-center gap-6">
                  <span className="font-display text-sm text-white/20 italic w-16 text-left">{p.place}</span>
                  <span className="text-white/40 text-sm font-light">{p.detail}</span>
                </div>
                <span className="font-display text-xl sm:text-2xl gold-gradient font-semibold">
                  {p.amount}
                </span>
              </div>
              {i < prizes.length - 1 && <div className="gold-line opacity-15" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ TEAMS SECTION ============
function TeamsSection() {
  const teams = [
    { name: 'Soul Raiders', tag: 'SR', wins: 12, rank: 'S', region: 'Mumbai' },
    { name: 'Phantom Squad', tag: 'PS', wins: 10, rank: 'S', region: 'Delhi' },
    { name: 'Death Strikers', tag: 'DS', wins: 9, rank: 'A', region: 'Bangalore' },
    { name: 'Venom Hunters', tag: 'VH', wins: 8, rank: 'A', region: 'Hyderabad' },
    { name: 'Shadow Wolves', tag: 'SW', wins: 7, rank: 'A', region: 'Chennai' },
    { name: 'Thunder Bolts', tag: 'TB', wins: 6, rank: 'B', region: 'Kolkata' },
    { name: 'Night Stalkers', tag: 'NS', wins: 6, rank: 'B', region: 'Pune' },
    { name: 'Fire Dragons', tag: 'FD', wins: 5, rank: 'B', region: 'Jaipur' },
  ];

  return (
    <section id="teams" className="section-padding px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <SectionHeader number="03" title="Elite Teams" subtitle="The Contenders" />

        {/* Table Header */}
        <div className="hidden sm:grid grid-cols-12 gap-4 pb-4 mb-2">
          <div className="col-span-1 text-[10px] tracking-[2px] uppercase text-white/20">Rank</div>
          <div className="col-span-4 text-[10px] tracking-[2px] uppercase text-white/20">Team</div>
          <div className="col-span-3 text-[10px] tracking-[2px] uppercase text-white/20">Region</div>
          <div className="col-span-2 text-[10px] tracking-[2px] uppercase text-white/20 text-center">Wins</div>
          <div className="col-span-2 text-[10px] tracking-[2px] uppercase text-white/20 text-right">Grade</div>
        </div>
        <div className="gold-line opacity-20 mb-0" />

        {teams.map((team, i) => (
          <div key={i}>
            <div className="grid grid-cols-12 gap-4 py-6 items-center group hover:bg-[#D4AF37]/[0.02] transition-all duration-300 px-2 -mx-2 rounded">
              <div className="col-span-1">
                <span className="font-display text-sm text-white/20 italic">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <div className="col-span-4 sm:col-span-4">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] tracking-[1px] text-[#D4AF37]/60 font-medium">[{team.tag}]</span>
                  <span className="font-display text-base sm:text-lg text-white group-hover:text-[#D4AF37] transition-colors">
                    {team.name}
                  </span>
                </div>
              </div>
              <div className="col-span-3 hidden sm:block">
                <span className="text-white/30 text-sm font-light">{team.region}</span>
              </div>
              <div className="col-span-4 sm:col-span-2 text-center">
                <span className="font-display text-lg text-white/70">{team.wins}</span>
              </div>
              <div className="col-span-3 sm:col-span-2 text-right">
                <span className={`font-display text-sm font-semibold ${
                  team.rank === 'S' ? 'gold-text' : 'text-white/40'
                }`}>
                  {team.rank}
                </span>
              </div>
            </div>
            <div className="gold-line opacity-10" />
          </div>
        ))}
      </div>
    </section>
  );
}

// ============ HOW TO JOIN SECTION ============
function HowToJoinSection() {
  const steps = [
    { num: '01', title: 'Register', desc: 'Submit your team details through our registration portal with all player information.' },
    { num: '02', title: 'Verify', desc: 'Complete team verification with in-game IDs. Our team will confirm your eligibility within 24 hours.' },
    { num: '03', title: 'Compete', desc: 'Receive exclusive room credentials before each match. Join custom rooms and battle it out.' },
    { num: '04', title: 'Triumph', desc: 'Climb the leaderboard, claim your position, and collect your prize with honour.' },
  ];

  return (
    <section id="process" className="section-padding px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <SectionHeader number="04" title="The Process" subtitle="How to Participate" />

        <div className="space-y-0">
          {steps.map((step, i) => (
            <div key={i}>
              <div className="py-12 sm:py-16 flex flex-col sm:flex-row gap-6 sm:gap-16 items-start group">
                {/* Number */}
                <div className="flex items-start gap-8 sm:w-48 shrink-0">
                  <span className="font-display text-5xl sm:text-6xl gold-gradient font-bold opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                    {step.num}
                  </span>
                </div>
                {/* Content */}
                <div className="flex-1 pt-2">
                  <h3 className="font-display text-2xl sm:text-3xl text-white mb-3 group-hover:text-[#D4AF37] transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-white/30 font-light leading-relaxed max-w-lg text-sm sm:text-base">
                    {step.desc}
                  </p>
                </div>
              </div>
              {i < steps.length - 1 && <div className="gold-line opacity-15" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ WINNERS SECTION ============
function WinnersSection() {
  const winners = [
    { tournament: 'Season 1 Finals', team: 'Soul Raiders', kills: 47, prize: '₹50,000', date: 'December 2025' },
    { tournament: 'Night Ops Cup', team: 'Phantom Squad', kills: 38, prize: '₹25,000', date: 'November 2025' },
    { tournament: 'Erangel Masters', team: 'Death Strikers', kills: 42, prize: '₹25,000', date: 'October 2025' },
    { tournament: 'Sanhok Showdown', team: 'Venom Hunters', kills: 35, prize: '₹15,000', date: 'September 2025' },
    { tournament: 'Miramar Mayhem', team: 'Shadow Wolves', kills: 31, prize: '₹15,000', date: 'August 2025' },
  ];

  return (
    <section id="winners" className="section-padding px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <SectionHeader number="05" title="Hall of Fame" subtitle="Past Champions" />

        {/* Table Header */}
        <div className="hidden sm:grid grid-cols-12 gap-4 pb-4">
          <div className="col-span-4 text-[10px] tracking-[2px] uppercase text-white/20">Tournament</div>
          <div className="col-span-3 text-[10px] tracking-[2px] uppercase text-white/20">Champion</div>
          <div className="col-span-1 text-[10px] tracking-[2px] uppercase text-white/20 text-center">Kills</div>
          <div className="col-span-2 text-[10px] tracking-[2px] uppercase text-white/20 text-right">Prize</div>
          <div className="col-span-2 text-[10px] tracking-[2px] uppercase text-white/20 text-right">Date</div>
        </div>
        <div className="gold-line opacity-20" />

        {winners.map((w, i) => (
          <div key={i}>
            <div className="grid grid-cols-12 gap-4 py-6 items-center group hover:bg-[#D4AF37]/[0.02] transition-all duration-300 px-2 -mx-2 rounded">
              <div className="col-span-12 sm:col-span-4">
                <span className="font-display text-base sm:text-lg text-white group-hover:text-[#D4AF37] transition-colors">
                  {w.tournament}
                </span>
              </div>
              <div className="col-span-6 sm:col-span-3">
                <span className="gold-gradient font-display text-base font-semibold">{w.team}</span>
              </div>
              <div className="col-span-2 sm:col-span-1 text-center">
                <span className="text-white/50 font-light text-sm">{w.kills}</span>
              </div>
              <div className="col-span-4 sm:col-span-2 text-right">
                <span className="gold-text font-display text-base font-semibold">{w.prize}</span>
              </div>
              <div className="hidden sm:block col-span-2 text-right">
                <span className="text-white/25 text-sm font-light">{w.date}</span>
              </div>
            </div>
            <div className="gold-line opacity-10" />
          </div>
        ))}
      </div>
    </section>
  );
}

// ============ REGISTRATION SECTION ============
function RegistrationSection() {
  const [formData, setFormData] = useState({ name: '', email: '', teamName: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: '', email: '', teamName: '', phone: '', message: '' });
  };

  return (
    <section id="register" className="section-padding px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left - Info */}
          <div>
            <div className="mb-20">
              <div className="flex items-center gap-4 mb-6">
                <span className="font-display text-sm gold-text/50 italic">06</span>
                <div className="w-8 h-px bg-[#D4AF37]/30" />
                <span className="text-[10px] tracking-[3px] uppercase text-white/30">Begin Your Journey</span>
              </div>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white font-bold leading-tight">
                Register
              </h2>
            </div>

            <div className="space-y-8">
              <p className="text-white/40 font-light leading-relaxed text-base">
                Submit your details below and our team will reach out within 24 hours with your tournament credentials and match schedule.
              </p>

              <div className="gold-line opacity-20" />

              <div className="space-y-6">
                <div>
                  <span className="text-[10px] tracking-[2px] uppercase text-white/20 block mb-1">WhatsApp</span>
                  <span className="text-white/70 font-light">+91 98765 43210</span>
                </div>
                <div>
                  <span className="text-[10px] tracking-[2px] uppercase text-white/20 block mb-1">Email</span>
                  <span className="text-white/70 font-light">contact@bgmilegends.in</span>
                </div>
                <div>
                  <span className="text-[10px] tracking-[2px] uppercase text-white/20 block mb-1">Discord</span>
                  <span className="text-white/70 font-light">discord.gg/bgmilegends</span>
                </div>
              </div>

              <div className="gold-line opacity-20" />

              <div className="space-y-3">
                <span className="text-[10px] tracking-[2px] uppercase text-white/20">What's Included</span>
                <div className="space-y-2">
                  {['Free registration', 'No entry fee', 'Anti-cheat enforced', 'Live streaming', 'Instant prize distribution'].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span className="gold-text text-xs">◆</span>
                      <span className="text-white/40 text-sm font-light">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="lg:pt-28">
            {submitted ? (
              <div className="text-center py-20 fade-in">
                <div className="gold-text text-4xl mb-6 font-display">✓</div>
                <h3 className="font-display text-2xl text-white mb-3">Registration Received</h3>
                <p className="text-white/30 font-light text-sm">We will contact you shortly with match details.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <input
                    type="text"
                    placeholder="Full Name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="luxury-input"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="luxury-input"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Team Name"
                    required
                    value={formData.teamName}
                    onChange={(e) => setFormData({ ...formData, teamName: e.target.value })}
                    className="luxury-input"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone / WhatsApp"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="luxury-input"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Team Members — In-Game IDs (Optional)"
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="luxury-input resize-none"
                  />
                </div>
                <div className="pt-6">
                  <button type="submit" className="btn-luxury-filled w-full sm:w-auto">
                    Submit Registration
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// ============ FOOTER ============
function Footer() {
  return (
    <footer className="px-6 lg:px-12 pb-12 pt-20">
      <div className="max-w-6xl mx-auto">
        <div className="gold-line opacity-20 mb-16" />
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          <div>
            <span className="font-display text-lg gold-gradient font-semibold tracking-wider">BGMI LEGENDS</span>
            <p className="text-white/20 text-xs mt-2 font-light tracking-wide">India's Premier BGMI Tournament Platform</p>
          </div>
          <div className="flex items-center gap-8">
            <a href="#" className="text-white/30 hover:text-[#D4AF37] transition-colors text-xs tracking-[1px] uppercase">Instagram</a>
            <a href="#" className="text-white/30 hover:text-[#D4AF37] transition-colors text-xs tracking-[1px] uppercase">YouTube</a>
            <a href="#" className="text-white/30 hover:text-[#D4AF37] transition-colors text-xs tracking-[1px] uppercase">Discord</a>
          </div>
        </div>
        <div className="mt-12 text-center">
          <p className="text-white/15 text-[10px] tracking-[2px] uppercase">
            © 2026 BGMI Legends. All rights reserved. Not affiliated with Krafton.
          </p>
        </div>
      </div>
    </footer>
  );
}

// ============ SCROLL TO TOP ============
function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-8 right-8 z-50 w-10 h-10 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#050505] transition-all duration-300 text-xs"
    >
      ↑
    </button>
  );
}

// ============ MAIN APP ============
export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Navbar />
      <HeroSection />
      <TournamentsSection />
      <PrizePoolSection />
      <TeamsSection />
      <HowToJoinSection />
      <WinnersSection />
      <RegistrationSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
