import { useState } from "react";
import {
  ChevronDown,
  Menu,
  X,
  Eye,
  Cpu,
  Wifi,
  Battery,
  Heart,
  ShieldCheck,
  Truck,
  Mic,
  Users,
  Layers,
  Glasses,
  Navigation,
} from "lucide-react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Helps", href: "#helps" },
  { label: "Features", href: "#features" },
  { label: "Future", href: "#future" },
  { label: "Team", href: "#team" },
];

const HELPS = [
  {
    icon: Heart,
    title: "Healthcare Workers",
    desc: "Delivers supplies and medications across hospital floors, freeing nurses and staff to focus entirely on patients.",
  },
  {
    icon: Truck,
    title: "Warehouse Teams",
    desc: "Moves goods autonomously through busy fulfillment centers, reducing manual load and speeding up operations.",
  },
  {
    icon: ShieldCheck,
    title: "Facility Managers",
    desc: "Monitors large spaces, routes autonomously without pre-mapping, and adapts to layout changes on its own.",
  },
  {
    icon: Users,
    title: "People with Mobility Needs",
    desc: "Acts as a smart guide companion in airports, malls, and public spaces — helping people navigate with ease.",
  },
];

const FEATURES = [
  {
    icon: Eye,
    title: "360° Awareness",
    desc: "LiDAR and stereo cameras build a live 3D map of the surroundings, detecting obstacles at up to 50 meters in any lighting condition.",
  },
  {
    icon: Cpu,
    title: "Onboard AI",
    desc: "Runs full navigation models directly on the device — no internet or cloud required. Works even in offline environments.",
  },
  {
    icon: Navigation,
    title: "Smart Path Planning",
    desc: "Recalculates the best route 100 times per second, smoothly adapting to moving people, doors, and unexpected objects.",
  },
  {
    icon: Wifi,
    title: "Fleet Sync",
    desc: "Multiple GuideX units share what they learn with each other in real time, making the whole fleet smarter with every run.",
  },
  {
    icon: Battery,
    title: "Long Battery Life",
    desc: "Up to 48 hours of continuous operation on a single charge, with a hot-swap battery option for non-stop deployment.",
  },
];

const FUTURE = [
  {
    icon: Mic,
    title: "Voice Interaction",
    desc: "Respond to spoken instructions from people nearby, making GuideX easier to direct without any app or controller.",
  },
  {
    icon: Users,
    title: "Multi-Robot Coordination",
    desc: "Groups of GuideX units working together to cover large areas efficiently — like a coordinated team.",
  },
  {
    icon: Layers,
    title: "Predictive Navigation",
    desc: "Learn from repeated environments to anticipate crowd flow, busy zones, and optimal timing throughout the day.",
  },
  {
    icon: Glasses,
    title: "AR Companion Mode",
    desc: "Guide people using augmented reality — showing directions visually on their phone or AR glasses in real time.",
  },
];

const TEAM = [
  {
    name: "Hamid Isgandarli",
    role: "The Captain & Coder",
    focus: "Strategy & Vision",
    desc: "PhD in Autonomous Systems. Leads the company direction and research partnerships across healthcare and logistics.",
    img: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=600&h=600&fit=crop&crop=faces&auto=format",
  },
  {
    name: "Banu Isgandarli",
    role: "Electronics",
    focus: "Engineering & AI",
    desc: "Expert in real-time sensor fusion and edge AI. Leads all technical development and system architecture.",
    img: "https://images.unsplash.com/photo-1581092334247-44dd684e3c82?w=600&h=600&fit=crop&crop=faces&auto=format",
  },
  {
    name: "Alina Qasimova",
    role: "Designer of the robot",
    focus: "Navigation & Sensing",
    desc: "Specialist in path-planning algorithms and robotics hardware. Ensures GuideX moves safely in every environment.",
    img: "https://images.unsplash.com/photo-1581094284541-0a41371083aa?w=600&h=600&fit=crop&crop=faces&auto=format",
  },
];

const mono = { fontFamily: "'DM Mono', monospace" };
const display = { fontFamily: "var(--font-display)" };

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="bg-background text-foreground min-h-screen overflow-x-hidden" style={{ fontFamily: "'Outfit', sans-serif" }}>

      {/* ── NAV ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 lg:px-12 py-4 bg-background/80 backdrop-blur-xl border-b border-border">
        <span className="text-lg font-bold tracking-[0.15em]" style={display}>
          GUIDE<span className="text-primary">X</span>
        </span>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <button
              key={l.label}
              onClick={() => scrollTo(l.href)}
              className="text-xs text-muted-foreground hover:text-foreground uppercase tracking-widest transition-colors duration-150"
              style={mono}
            >
              {l.label}
            </button>
          ))}
        </div>

        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-background pt-20 px-8 flex flex-col gap-1 md:hidden">
          {NAV_LINKS.map((l) => (
            <button
              key={l.label}
              onClick={() => scrollTo(l.href)}
              className="text-left text-2xl font-bold py-5 border-b border-border text-foreground hover:text-primary transition-colors"
              style={display}
            >
              {l.label}
            </button>
          ))}
        </div>
      )}

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* soft glow blobs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[55vw] h-[55vw] bg-primary/6 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-1/3 w-[25vw] h-[25vw] bg-accent/6 rounded-full blur-[70px]" />
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0,188,212,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,188,212,1) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
            }}
          />
        </div>

        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center py-16">
          {/* Text */}
          <div>
            <div className="inline-flex items-center gap-2 border border-primary/25 bg-primary/5 rounded-full px-4 py-1.5 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span className="text-xs text-primary tracking-[0.2em] uppercase" style={mono}>
                Autonomous Navigation Robot
              </span>
            </div>

            <h1 className="text-6xl lg:text-7xl font-bold leading-[0.92] mb-6 tracking-tight" style={display}>
              Navigate
              <br />
              <span className="text-primary">Any</span>
              <br />
              Space.
            </h1>

            <p className="text-muted-foreground text-lg leading-relaxed max-w-md mb-8">
              GuideX is an autonomous robot that moves through real-world
              environments safely and intelligently — no maps needed, no
              human guidance required.
            </p>

            <div className="flex flex-wrap gap-6 pt-6 border-t border-border">
              {[
                { val: "360°", lbl: "Vision" },
                { val: "48h", lbl: "Battery" },
                { val: "0", lbl: "Pre-mapping" },
              ].map((s) => (
                <div key={s.lbl}>
                  <div className="text-2xl font-bold text-primary" style={display}>{s.val}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-widest mt-0.5" style={mono}>{s.lbl}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden bg-secondary aspect-[3/4]">
              <img
                src="https://images.unsplash.com/photo-1717538855595-c2025a0755bb?w=800&h=1050&fit=crop&auto=format"
                alt="GuideX robot navigating an outdoor environment"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/10 to-transparent" />
              {/* corner brackets */}
              <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-primary/50 rounded-tl-lg" />
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-primary/50 rounded-tr-lg" />
              {/* status chip */}
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between bg-background/75 backdrop-blur-md border border-border rounded-xl px-5 py-3">
                <div>
                  <div className="text-xs text-muted-foreground mb-0.5" style={mono}>Status</div>
                  <div className="text-sm font-semibold text-foreground">Navigating autonomously</div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span className="text-xs text-accent" style={mono}>LIVE</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <ChevronDown size={14} className="animate-bounce text-muted-foreground" />
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="text-xs text-primary tracking-[0.25em] uppercase mb-5" style={mono}>What is GuideX</div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight" style={display}>
              A robot that moves<br />
              <span className="text-primary">where it needs to.</span>
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                GuideX is an autonomous navigation robot designed to operate
                in unpredictable, real-world environments — hospitals,
                warehouses, airports, and public spaces.
              </p>
              <p>
                Unlike traditional robots that require pre-programmed maps or
                controlled settings, GuideX sees and adapts to its surroundings
                in real time using onboard AI and a suite of advanced sensors.
              </p>
              <p>
                It moves independently, avoids obstacles, and finds the best
                path to its destination — all without any human input.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT HELPS ── */}
      <section id="helps" className="py-24 lg:py-32 bg-secondary/15">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="text-xs text-primary tracking-[0.25em] uppercase mb-5" style={mono}>How it helps</div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight" style={display}>
              Designed to help<br />
              <span className="text-primary">real people.</span>
            </h2>
            <p className="text-muted-foreground lg:max-w-xs leading-relaxed">
              GuideX takes on the repetitive, physical, and time-consuming tasks so people can focus on what matters most.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {HELPS.map((h, i) => (
              <div
                key={i}
                className="bg-card border border-border rounded-2xl p-8 hover:border-primary/35 transition-all duration-250 group"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/18 transition-colors">
                  <h.icon size={20} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2" style={display}>{h.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section id="features" className="py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="text-xs text-primary tracking-[0.25em] uppercase mb-5" style={mono}>Features & Abilities</div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight" style={display}>
              What GuideX<br />
              <span className="text-primary">can do.</span>
            </h2>
            <p className="text-muted-foreground lg:max-w-xs leading-relaxed">
              A set of tightly integrated capabilities that work together to make navigation reliable in any situation.
            </p>
          </div>

          {/* First feature large */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 mb-5">
            <div className="lg:col-span-3 bg-card border border-border rounded-2xl p-9 hover:border-primary/35 transition-all duration-250 group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/18 transition-colors">
                <Eye size={22} className="text-primary" />
              </div>
              <div className="text-xs text-muted-foreground uppercase tracking-widest mb-3" style={mono}>Core System</div>
              <h3 className="text-2xl font-bold text-foreground mb-4" style={display}>360° Awareness</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                LiDAR and stereo cameras build a live 3D map of the surroundings,
                detecting obstacles up to 50 meters away in any lighting — day,
                night, or low-visibility conditions.
              </p>
              <div className="flex gap-8">
                {[{ v: "50m", l: "Range" }, { v: "±1cm", l: "Precision" }, { v: "120fps", l: "Map Rate" }].map((s) => (
                  <div key={s.l}>
                    <div className="text-2xl font-bold text-primary" style={display}>{s.v}</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wide mt-0.5" style={mono}>{s.l}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-2 flex flex-col gap-5">
              {FEATURES.slice(1, 3).map((f, i) => (
                <div key={i} className="bg-card border border-border rounded-2xl p-7 hover:border-primary/35 transition-all duration-250 group flex-1">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/18 transition-colors">
                    <f.icon size={18} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2" style={display}>{f.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Remaining features in a row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {FEATURES.slice(3).map((f, i) => (
              <div key={i} className="bg-card border border-border rounded-2xl p-7 hover:border-primary/35 transition-all duration-250 group">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/18 transition-colors">
                  <f.icon size={18} className="text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2" style={display}>{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FUTURE ── */}
      <section id="future" className="py-24 lg:py-32 bg-secondary/15">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="text-xs text-primary tracking-[0.25em] uppercase mb-5" style={mono}>What's Coming</div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight" style={display}>
              Future improvements<br />
              <span className="text-primary">we're building.</span>
            </h2>
            <p className="text-muted-foreground lg:max-w-xs leading-relaxed">
              GuideX is already capable — and we&apos;re continuously expanding what it can do next.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {FUTURE.map((f, i) => (
              <div
                key={i}
                className="bg-card border border-border rounded-2xl p-7 hover:border-primary/35 transition-all duration-250 group"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/18 transition-colors">
                  <f.icon size={18} className="text-accent" />
                </div>
                <div className="text-xs text-accent uppercase tracking-widest mb-3" style={mono}>Planned</div>
                <h3 className="text-lg font-bold text-foreground mb-2" style={display}>{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section id="team" className="py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="text-xs text-primary tracking-[0.25em] uppercase mb-5" style={mono}>The Team</div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight" style={display}>
              Three people,<br />
              <span className="text-primary">one mission.</span>
            </h2>
            <p className="text-muted-foreground lg:max-w-xs leading-relaxed">
              A focused team of robotics and AI specialists building GuideX from the ground up.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TEAM.map((m, i) => (
              <div key={i} className="group">
                {/* Photo */}
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-secondary mb-6">
                  <img
                    src={m.img}
                    alt={`${m.name} — ${m.role}`}
                    className="w-full h-full object-cover object-top transition-all duration-500 scale-105 group-hover:scale-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 bg-primary/10 border border-primary/25 backdrop-blur-sm rounded-lg px-3 py-1">
                    <span className="text-xs text-primary" style={mono}>{m.focus}</span>
                  </div>
                </div>
                {/* Info */}
                <div className="text-xs text-primary font-bold mb-2" style={mono}>0{i + 1}</div>
                <h3 className="text-xl font-bold text-foreground mb-0.5" style={display}>{m.name}</h3>
                <div className="text-sm text-muted-foreground mb-3" style={mono}>{m.role}</div>
                <p className="text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-border py-8 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-lg font-bold tracking-[0.15em]" style={display}>
            GUIDE<span className="text-primary">X</span>
          </span>
          <span className="text-xs text-muted-foreground" style={mono}>
            Autonomous Navigation · Built for the Real World
          </span>
        </div>
      </footer>

    </div>
  );
}
