import { type ReactNode, useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Activity, ArrowDownRight, ArrowRight, CircleDot, Clock3, Dumbbell, Expand, ExternalLink, Mail, MapPin, Menu, Navigation, Phone, X, Zap } from 'lucide-react';
import { Route, Switch, useLocation, Router as WouterRouter } from 'wouter';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import heroImage from './assets/761858802_1039452548974680_5407759804416268139_n_1788457345081.jpg';
import cardioImage from './assets/762944602_1039452595641342_3574350552879939935_n_1788457345081.jpg';
import strengthImage from './assets/765818115_1039452638974671_4634588760706339714_n_1788457345082.jpg';
import cycleImage from './assets/761364841_1039452662308002_5099344615523214717_n_1788457345083.jpg';
import floorImage from './assets/762831267_1039452735641328_3230912919161803703_n_1788457345083.jpg';
import cardioDetailImage from './assets/762944598_1039452795641322_8168193446964578907_n_1788457345084.jpg';
import communityImage from './assets/762803777_1039452878974647_5321701208418338838_n_1788457352273.jpg';
import strengthDetailImage from './assets/760984845_1039452928974642_1199412889289053145_n_1788457352273.jpg';

const queryClient = new QueryClient();

type GalleryImage = {
  src: string;
  alt: string;
  label: string;
};

const galleryImages: GalleryImage[] = [
  { src: heroImage, alt: 'Main training floor with strength machines and Reds Gym mural', label: 'The main floor' },
  { src: cardioImage, alt: 'Cardio floor with treadmills facing the windows', label: 'Cardio floor' },
  { src: strengthImage, alt: 'Red strength machines in a bright training room', label: 'Strength zone' },
  { src: cycleImage, alt: 'Yellow indoor cycling machines and cable equipment', label: 'Cycle & machines' },
  { src: floorImage, alt: 'Open gym floor with dumbbells and benches', label: 'Open training' },
  { src: cardioDetailImage, alt: 'Rowing machines and cardio equipment by the windows', label: 'Conditioning' },
  { src: communityImage, alt: 'Members training together across the open gym floor', label: 'The room' },
  { src: strengthDetailImage, alt: 'Power racks and red plate-loaded strength machines', label: 'Power corner' },
];

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function Brand() {
  return (
    <a className="brand" href="#top" data-testid="link-brand" aria-label="Reds Gym home">
      <span className="brand-mark" aria-hidden="true" />
      <span>
        <span className="brand-name"><span>R</span>EDS GYM</span>
        <span className="brand-sub">Transform your life</span>
      </span>
    </a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className={`site-header${open ? ' open' : ''}`} data-testid="site-header">
      <div className="header-inner">
        <Brand />
        <nav className="nav-links" aria-label="Main navigation">
          <a href="#about" onClick={() => setOpen(false)} data-testid="link-about">About</a>
          <a href="#training" onClick={() => setOpen(false)} data-testid="link-training">Training</a>
          <a href="#gallery" onClick={() => setOpen(false)} data-testid="link-gallery">Gallery</a>
          <a href="#contact" onClick={() => setOpen(false)} data-testid="link-contact">Find us</a>
        </nav>
        <a className="header-cta" href="tel:+201007777134" data-testid="link-header-call">Call the gym</a>
        <button className="menu-button" type="button" onClick={() => setOpen((value) => !value)} aria-label={open ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={open} data-testid="button-mobile-menu">
          {open ? <X size={19} /> : <Menu size={19} />}
        </button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <img className="hero-image" src={heroImage} alt="Reds Gym main training floor in Alexandria" data-testid="img-hero-gym" />
      <div className="hero-inner">
        <div className="eyebrow reveal">Alexandria / Est. for the work</div>
        <h1 id="hero-title" className="reveal delay-1">Show up.<br /><em>Get stronger.</em></h1>
        <p className="hero-copy reveal delay-2">A serious neighborhood gym for people who train with purpose. Real equipment, a focused room, and the energy to keep going.</p>
        <div className="hero-actions reveal delay-3">
          <button className="button-red" type="button" onClick={() => scrollToId('contact')} data-testid="button-hero-find-us">Find the gym <ArrowDownRight size={15} /></button>
          <button className="button-outline" type="button" onClick={() => scrollToId('gallery')} data-testid="button-hero-see-gym">See the gym</button>
        </div>
      </div>
      <div className="hero-stamp" aria-hidden="true">NO SHORTCUTS<span>REDs GYM / ALEX</span></div>
      <div className="scroll-note" aria-hidden="true">Scroll to explore ↓</div>
    </section>
  );
}

function About() {
  const principles = [
    { number: '01', title: 'Come as you are', text: 'No performance for the room. Walk in, get your session done, and keep building.' },
    { number: '02', title: 'Train with intent', text: 'From your first set to your last rep, every corner is set up for focused work.' },
    { number: '03', title: 'Stay consistent', text: 'Strength is built in the ordinary sessions you choose not to skip.' },
  ];
  return (
    <section className="section about" id="about" aria-labelledby="about-title">
      <div className="section-inner about-grid">
        <div>
          <div className="section-kicker">01 / The place</div>
          <h2 className="section-title" id="about-title">A gym for the <span className="red">long game.</span></h2>
          <div className="about-copy">
            <p>Reds Gym is a local training floor in Alexandria for people who want to make showing up part of their life. The atmosphere is straightforward: solid equipment, room to work, and people who take their sessions seriously.</p>
            <p><strong>Whether you are learning the basics, building strength, or keeping your conditioning sharp, there is space here for your next session.</strong></p>
          </div>
          <div className="about-rule">Built for the everyday athlete</div>
        </div>
        <div className="principles" aria-label="Reds Gym principles">
          {principles.map((principle) => (
            <div className="principle" key={principle.number} data-testid={`principle-${principle.number}`}>
              <div className="principle-number">{principle.number}</div>
              <div><h3>{principle.title}</h3><p>{principle.text}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Training() {
  const offerings = [
    { icon: <Dumbbell size={23} />, title: 'Strength', text: 'Plate-loaded machines, benches, racks, and the space to put in the work.' },
    { icon: <Activity size={23} />, title: 'Conditioning', text: 'Treadmills, rowers, ellipticals, and bikes for a complete engine.' },
    { icon: <Zap size={23} />, title: 'Free weights', text: 'Dumbbells and open floor space for focused, flexible training.' },
    { icon: <CircleDot size={23} />, title: 'Every level', text: 'A practical room for first sessions, steady progress, and hard-earned strength.' },
  ];
  return (
    <>
      <section className="section offerings" id="training" aria-labelledby="training-title">
        <div className="section-inner">
          <div className="section-kicker">02 / Your session</div>
          <h2 className="section-title" id="training-title">Bring the effort.<br /><span className="red">We bring the room.</span></h2>
          <div className="offering-grid">
            {offerings.map((offering, index) => (
              <article className="offering" key={offering.title} data-testid={`card-offering-${index + 1}`}>
                <div className="offering-icon">{offering.icon}</div>
                <span className="offering-index">0{index + 1}</span>
                <h3>{offering.title}</h3>
                <p>{offering.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="feature-photo" aria-labelledby="feature-title">
        <img src={strengthDetailImage} alt="Power rack and red plate-loaded machines at Reds Gym" data-testid="img-feature-strength" />
        <div className="feature-content">
          <div className="section-kicker">The training floor</div>
          <h2 id="feature-title">Nothing fancy.<br />Everything useful.</h2>
          <p>Mirrors, plates, machines, and enough room to move. Reds is built around the simple idea that a good gym should make it easier to train hard.</p>
          <button className="button-red" type="button" onClick={() => scrollToId('contact')} data-testid="button-feature-visit">Plan a visit <ArrowRight size={15} /></button>
        </div>
      </section>
    </>
  );
}

function Gallery() {
  const [selected, setSelected] = useState<GalleryImage | null>(null);
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelected(null);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <section className="section gallery" id="gallery" aria-labelledby="gallery-title">
      <div className="section-inner">
        <div className="gallery-intro">
          <div>
            <div className="section-kicker">03 / Inside Reds</div>
            <h2 className="section-title" id="gallery-title">See your next<br /><span className="red">session.</span></h2>
          </div>
          <p>Take a look around the actual room before you come in. Tap any photo to open it.</p>
        </div>
        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <button className="gallery-item" type="button" key={image.label} onClick={() => setSelected(image)} aria-label={`Open photo: ${image.label}`} data-testid={`button-gallery-${index + 1}`}>
              <img src={image.src} alt={image.alt} data-testid={`img-gallery-${index + 1}`} />
              <span className="gallery-caption">{image.label}</span>
              <span className="gallery-expand" aria-hidden="true"><Expand size={14} /></span>
            </button>
          ))}
        </div>
      </div>
      {selected && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={`${selected.label} photo`} onClick={() => setSelected(null)} data-testid="gallery-lightbox">
          <button className="lightbox-close" type="button" aria-label="Close photo viewer" onClick={() => setSelected(null)} data-testid="button-close-lightbox"><X size={21} /></button>
          <img src={selected.src} alt={selected.alt} onClick={(event) => event.stopPropagation()} data-testid="img-lightbox-selected" />
          <div className="lightbox-caption">{selected.label} / Reds Gym Alexandria</div>
        </div>
      )}
    </section>
  );
}

function Contact() {
  return (
    <section className="section contact" id="contact" aria-labelledby="contact-title">
      <div className="section-inner contact-inner">
        <div>
          <div className="section-kicker">04 / Come through</div>
          <h2 className="section-title" id="contact-title">Your next<br />workout starts<br /><span>here.</span></h2>
          <div className="contact-detail">
            <div className="contact-row" data-testid="contact-address">
              <MapPin size={19} aria-hidden="true" />
              <div><small>Find us</small><span>السيوف شماعة - شارع جميلة أبو حريد - برج الرعايا,<br />أمام صيدلية القبرصي, فوق ريش نعام وقصر المحروسة للموبيليا,<br />Alexandria, Egypt</span></div>
            </div>
            <div className="contact-row" data-testid="contact-phone">
              <Phone size={19} aria-hidden="true" />
              <div><small>Call</small><a href="tel:+201007777134" data-testid="link-contact-phone">+20 10 07777134</a></div>
            </div>
            <div className="contact-row" data-testid="contact-email">
              <Mail size={19} aria-hidden="true" />
              <div><small>Email</small><a href="mailto:redsgym.0@gmail.com" data-testid="link-contact-email">redsgym.0@gmail.com</a></div>
            </div>
          </div>
        </div>
        <div className="map-card">
          <div className="map-label"><span className="map-pin"><Navigation size={18} /></span><span>Alexandria / El Seyouf</span></div>
          <div>
            <h3>Make the trip<br />worth it.</h3>
            <p>Questions about the gym or finding the entrance? Call or email before you head over. We will point you in the right direction.</p>
          </div>
          <a className="map-link" href="https://www.google.com/maps/search/?api=1&query=Reds+Gym+Alexandria+Egypt" target="_blank" rel="noreferrer" data-testid="link-open-map">Open in maps <ExternalLink size={14} /></a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-copy" data-testid="text-footer-copyright">© {new Date().getFullYear()} Reds Gym / Alexandria, Egypt</div>
        <div className="footer-social">
          <Clock3 size={15} aria-hidden="true" />
          <span>Real gym. Real work.</span>
          <a href="https://www.tiktok.com/@reds6897" target="_blank" rel="noreferrer" data-testid="link-tiktok">@reds6897 <ExternalLink size={12} /></a>
        </div>
      </div>
    </footer>
  );
}

function Home() {
  return (
    <div className="min-h-[100dvh]" data-testid="page-home">
      <div className="noise" aria-hidden="true" />
      <Header />
      <main>
        <Hero />
        <About />
        <Training />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function Router() {
  return (
    <RoutedErrorBoundary>
      <Switch>
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </RoutedErrorBoundary>
  );
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;