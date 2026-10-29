'use client';

import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Header from './Header';
import Hero from './Hero';
import Ribbon from './Ribbon';
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Asterisk, BarChart3, Check,
  ChevronDown, Code2, Dribbble, Heart, Instagram, Layers3, Lightbulb,
  Linkedin, Menu, MousePointer2, Palette, PenTool, Play, Send, Sparkles,
  Target, TrendingUp, X, Zap, BookOpen,
} from 'lucide-react';

const services = [
  { n: '01', title: 'Social media marketing', desc: 'Campaigns with a clear point of view—and a plan to turn attention into action.', tag: 'Make some noise', color: 'pink', icon: <Target /> },
  { n: '02', title: 'Social media management', desc: 'Thoughtful content, consistent publishing, and a community that feels heard.', tag: 'Show up beautifully', color: 'mint', icon: <Layers3 /> },
  { n: '03', title: 'UI / UX design', desc: 'Intuitive digital experiences that feel effortless to use and hard to forget.', tag: 'Make it click', color: 'blue', icon: <MousePointer2 /> },
  { n: '04', title: 'Web development', desc: 'Fast, responsive websites built to tell your story and move your business forward.', tag: 'Built to grow', color: 'lilac', icon: <Code2 /> },
  { n: '05', title: 'Graphics & brand artwork', desc: 'Distinctive visuals, brand systems, and creative assets with real personality.', tag: 'Look like you', color: 'yellow', icon: <PenTool /> },
];

const projects = [
  { title: 'The Good Table', category: 'Food & hospitality', type: 'Social campaign', color: 'project-peach', label: 'GOOD FOOD\nGOOD MOOD', mark: '✳' },
  { title: 'Bloomwell', category: 'Health & wellness', type: 'Brand identity', color: 'project-green', label: 'A LITTLE MORE\nWELLNESS', mark: '✿' },
  { title: 'Forma Studio', category: 'Fashion & lifestyle', type: 'Digital experience', color: 'project-lilac', label: 'STYLE THAT\nSPEAKS', mark: '◌' },
  { title: 'Pulse Fit', category: 'Fitness & technology', type: 'UI / UX design', color: 'project-blue', label: 'MOVE WITH\nPURPOSE', mark: '↗' },
];

const approach = [
  { step: '01', title: 'Get curious.', text: 'We ask questions, listen closely, and get to know the people behind the brand.', icon: <MousePointer2 />, note: 'THE DISCOVERY' },
  { step: '02', title: 'Find your spark.', text: 'We shape your positioning, visual direction, voice, and creative strategy.', icon: <Lightbulb />, note: 'THE DIRECTION' },
  { step: '03', title: 'Make it real.', text: 'We turn the big idea into a cohesive identity, content, campaigns, and experiences.', icon: <Palette />, note: 'THE CREATION' },
  { step: '04', title: 'Keep it growing.', text: 'We learn from the results, refine the work, and help your brand evolve.', icon: <TrendingUp />, note: 'THE MOMENTUM' },
];

const industries = [
  { name: 'Food & drink', line: 'Warm, sensory, full of flavour.', swatches: ['#f6a67b', '#f5d66e', '#3c5943'], symbol: '✳' },
  { name: 'Tech & SaaS', line: 'Clear thinking, clever systems.', swatches: ['#8ecfe6', '#202d43', '#c4b4f3'], symbol: '⌘' },
  { name: 'Beauty & lifestyle', line: 'Expressive, considered, unmistakable.', swatches: ['#f2b4ca', '#d7c5b7', '#714b5c'], symbol: '✿' },
  { name: 'Health & wellness', line: 'Human, calm, quietly confident.', swatches: ['#b8d7bb', '#f4e8c9', '#648c80'], symbol: '♡' },
];

function Doodle({ className = '', children }: { className?: string; children: React.ReactNode }) {
  return <span aria-hidden="true" className={`doodle ${className}`}>{children}</span>;
}

function SectionTitle({ eyebrow, title, text }: { eyebrow: string; title: React.ReactNode; text?: string }) {
  return <div className="section-title"><span className="eyebrow"><span />{eyebrow}<span /></span><h2>{title}</h2>{text && <p>{text}</p>}</div>;
}

export default function StudioHome() {
  const [activeIndustry, setActiveIndustry] = useState(0);
  const [activeFilter, setActiveFilter] = useState('All work');
  const [formSent, setFormSent] = useState(false);
  const reduceMotion = useReducedMotion();
  const reveal = reduceMotion ? {} : { initial: { opacity: 0, y: 22 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.15 }, transition: { duration: 0.55 } };
  const filteredProjects = activeFilter === 'All work' ? projects : projects.filter(p => p.type === activeFilter);

  function submitContact(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormSent(true);
  }

  return (
    <main>
      <div className="wallpaper" aria-hidden="true" />
      <Header />
      <Hero />
      <Ribbon />

      <section className="section services-section wrap" id="services">
        <motion.div {...reveal}><SectionTitle eyebrow="A few things we’re good at" title={<>A good brand has <span className="scribble-underline">many sides.</span></>} text="One creative partner, all the right moving parts. We bring strategy, design, and digital together so everything feels like you." /></motion.div>
        <div className="service-grid">{services.map((service, i) => <motion.article className={`service-card ${service.color}`} key={service.n} {...reveal} transition={{ duration: 0.45, delay: i * 0.07 }}><div className="service-card-top"><span>{service.n} / 05</span><span className="service-icon">{service.icon}</span></div><h3>{service.title}</h3><p>{service.desc}</p><div className="service-card-bottom"><span>{service.tag}</span><a href="#contact" aria-label={`Ask about ${service.title}`}><ArrowUpRight size={18} /></a></div><span className="card-scribble">✳</span></motion.article>)}</div>
        <div className="section-footnote"><span className="hand-note">Need a little bit of everything? <span>That’s kind of our thing.</span></span><a className="text-link" href="#contact">Let’s find your mix <ArrowRight size={16} /></a></div>
      </section>

      <section className="approach-band" id="approach"><div className="wrap approach-wrap"><motion.div className="approach-intro" {...reveal}><span className="eyebrow"><span />THE WAY WE WORK<span /></span><h2>From “what if?”<br />to <span className="highlight highlight-yellow">“that’s so us.”</span></h2><p>We don’t believe in one-size-fits-all creative. We get to know your world first, then build something that belongs in it.</p><a className="button button-outline" href="#contact">Get to know us <ArrowRight size={16} /></a><Doodle className="approach-doodle">✎</Doodle></motion.div>
          <div className="approach-steps">{approach.map((item, i) => <motion.article className="approach-step" key={item.step} {...reveal} transition={{ duration: 0.45, delay: i * 0.09 }}><div className={`step-illustration step-${i + 1}`}><span>{item.icon}</span><b>{item.step}</b></div><span className="step-note">{item.note}</span><h3>{item.title}</h3><p>{item.text}</p>{i < approach.length - 1 && <ArrowRight className="step-arrow" size={23} />}</motion.article>)}</div>
        </div></section>

      <section className="section wrap" id="work"><motion.div {...reveal}><SectionTitle eyebrow="A peek at the possibilities" title={<>Different worlds. <span className="scribble-underline">Distinctive stories.</span></>} text="Every project starts with a different challenge. Here’s a little taste of how we make each brand feel like its own universe." /></motion.div>
        <div className="portfolio-toolbar"><p>THE LITTLE BLACK BOOK <span>— A FEW FAVOURITES</span></p><div className="filter-list">{['All work', 'Brand identity', 'UI / UX design', 'Social campaign'].map(f => <button key={f} className={activeFilter === f ? 'filter active' : 'filter'} onClick={() => setActiveFilter(f)}>{f}</button>)}</div></div>
        <div className="portfolio-grid">{filteredProjects.map((project, i) => <motion.article className={`project-card ${project.color}`} key={project.title} layout {...reveal} transition={{ duration: 0.4, delay: i * 0.06 }}><div className="project-art"><span className="project-symbol">{project.mark}</span><div className="project-type">{project.category}</div><div className="project-bigtype">{project.label.split('\n').map((line, j) => <span key={j}>{line}</span>)}</div><div className="project-sticker">A BRAND<br />STORY ↗</div><div className="project-lines" /></div><div className="project-caption"><div><span>{project.type}</span><h3>{project.title}</h3></div><a href="#contact" aria-label={`Discuss a project like ${project.title}`}><ArrowUpRight size={19} /></a></div></motion.article>)}</div>
        <div className="portfolio-bottom"><span className="hand-note">Your brand could be next <Heart size={15} /></span><a className="button button-dark" href="#contact">Let’s make your case study <ArrowRight size={16} /></a></div>
      </section>

      <section className="brand-lab section" id="brand-lab"><div className="wrap brand-lab-wrap"><motion.div className="brand-lab-copy" {...reveal}><span className="eyebrow"><span />WELCOME TO THE BRAND LAB<span /></span><h2>Same studio.<br /><span className="highlight highlight-blue">Different personalities.</span></h2><p>A skincare brand shouldn’t feel like a fintech app. A café shouldn’t sound like a consultancy. Pick a world and see how we start shaping its look, feel, and voice.</p><div className="lab-tip"><Sparkles size={17} /><span>Tap a world. Get a feel for the direction.</span></div><Doodle className="lab-doodle">♡</Doodle></motion.div>
          <motion.div className="lab-demo" {...reveal}><div className="lab-tabs" role="tablist" aria-label="Explore brand styles">{industries.map((item, i) => <button key={item.name} role="tab" aria-selected={activeIndustry === i} className={activeIndustry === i ? 'lab-tab selected' : 'lab-tab'} onClick={() => setActiveIndustry(i)}><span style={{ background: item.swatches[0] }} />{item.name}</button>)}</div><motion.div className={`brand-board board-${activeIndustry}`} key={activeIndustry} initial={reduceMotion ? false : { opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.35 }}><div className="board-top"><span>STUDIO 14 / CREATIVE EXPLORATION</span><span>MOODBOARD 0{activeIndustry + 1}</span></div><div className="board-main"><div className="board-wordmark">{['the good table', 'NORTH / STAR', 'soft ritual', 'wellkind'][activeIndustry]}<span>{industries[activeIndustry].symbol}</span></div><p>{industries[activeIndustry].line}</p><div className="board-stamps"><span>BRAND<br />VOICE</span><span>VISUAL<br />WORLD</span><span>FEEL<br />SOMETHING</span></div></div><div className="board-bottom"><div className="swatches">{industries[activeIndustry].swatches.map(color => <span key={color} style={{ backgroundColor: color }} title={color} />)}</div><span>COLOUR / TYPE / FEELING</span></div><div className="board-orbit">{industries[activeIndustry].symbol}</div></motion.div><p className="lab-caption"><span>✳</span> Just a starting point. Your brand story is uniquely yours.</p></motion.div>
        </div></section>

      <section className="section wrap about-section" id="about"><motion.div className="about-heading" {...reveal}><span className="eyebrow"><span />A LITTLE ABOUT US<span /></span><h2>Small enough to <span className="scribble-underline">care.</span><br />Curious enough to <span className="highlight highlight-yellow">think bigger.</span></h2></motion.div><motion.div className="about-content" {...reveal}><div className="about-sticker"><span>INDEPENDENT<br />BY NATURE</span><Asterisk size={43} /><small>CREATIVE BY CHOICE</small></div><div><p className="about-lead">We’re a curious, collaborative creative studio that believes the best work happens when good people and brave ideas get in a room together.</p><p>We connect the dots between how your brand looks, what it says, and how people experience it. No cookie-cutter formulas. No creativity for creativity’s sake. Just considered work, made with you—not handed down to you.</p><a className="text-link" href="#contact">A little more about working together <ArrowRight size={16} /></a></div></motion.div></section>

      <section className="values-band"><div className="wrap values-wrap"><div className="values-title"><span className="eyebrow"><span />THE GOOD STUFF<span /></span><h2>Good energy.<br />Good work.</h2></div>{[{ icon: <Heart />, title: 'People before pixels', text: 'We listen first and design for real humans.' }, { icon: <Lightbulb />, title: 'Ideas with a reason', text: 'Every creative choice has a job to do.' }, { icon: <Check />, title: 'Partners, not passengers', text: 'We build the thing together, all the way.' }, { icon: <TrendingUp />, title: 'Progress over perfection', text: 'We keep learning, improving, and moving.' }].map((v, i) => <motion.div className="value-item" key={v.title} {...reveal} transition={{ delay: i * 0.06 }}><span className={`value-icon value-${i}`}>{v.icon}</span><h3>{v.title}</h3><p>{v.text}</p></motion.div>)}</div></section>

      <section className="section wrap testimonials"><motion.div {...reveal}><SectionTitle eyebrow="Nice things people have said" title={<>The best part is <span className="scribble-underline">the people.</span></>} text="Good work is a team sport. We’re lucky to work with people who bring the ideas, trust the process, and make the journey fun." /></motion.div><div className="quote-grid"><motion.blockquote {...reveal}><span className="quote-mark">“</span><p>Studio 14 got what we were trying to say before we had the words for it. The whole brand finally feels like us.</p><footer><span className="avatar avatar-one">S</span><span><strong>Samira K.</strong><small>Founder, lifestyle brand</small></span><span className="quote-stars">★★★★★</span></footer></motion.blockquote><motion.blockquote {...reveal} transition={{ delay: 0.1 }}><span className="quote-mark">“</span><p>Thoughtful, responsive, and full of ideas. It felt less like hiring an agency and more like finding our creative people.</p><footer><span className="avatar avatar-two">A</span><span><strong>Ali R.</strong><small>Marketing lead, tech brand</small></span><span className="quote-stars">★★★★★</span></footer></motion.blockquote></div><p className="testimonial-disclaimer">Sample testimonial content — replace with approved client feedback before launch.</p></section>

      <section className="section wrap" id="blog">
        <motion.div {...reveal}>
          <SectionTitle
            eyebrow="Notes & Observations"
            title={<>Thoughts from the <span className="scribble-underline">creative desk.</span></>}
            text="A peek behind the scenes on branding, design trends, digital culture, and making things with heart."
          />
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {[
            { tag: 'BRAND STRATEGY', title: 'Why your brand needs more play and less polish', date: '3 min read', color: 'bg-[#fff7dd]' },
            { tag: 'DIGITAL DESIGN', title: 'The art of the scroll: Designing for thumb-stoppers', date: '5 min read', color: 'bg-[#edf8fc]' },
            { tag: 'IDENTITY & TYPE', title: 'Typography with feeling: Finding your genuine brand voice', date: '4 min read', color: 'bg-[#fff0f4]' },
          ].map((post, i) => (
            <motion.article
              key={post.title}
              {...reveal}
              transition={{ delay: i * 0.08 }}
              className={`${post.color} rounded-2xl p-7 border border-[#19263a]/10 flex flex-col justify-between hover:-translate-y-1 hover:shadow-md transition-all duration-200 cursor-pointer`}
            >
              <div>
                <span className="text-[10px] font-mono tracking-widest text-[#626e7c] uppercase font-bold">{post.tag}</span>
                <h3 className="font-extrabold text-[19px] leading-snug tracking-tight text-[#162132] mt-3 mb-4">{post.title}</h3>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-[#19263a]/10 text-xs font-mono text-[#687282]">
                <span>{post.date}</span>
                <span className="inline-flex items-center gap-1 font-bold text-[#162132]">Read note <ArrowUpRight size={14} /></span>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact"><div className="wrap contact-wrap"><div className="contact-copy"><span className="eyebrow"><span />YOUR TURN<span /></span><h2>Got a good<br />feeling about <span className="highlight highlight-yellow">this?</span></h2><p>Tell us what you’re dreaming up. The half-formed ideas are welcome, too. We’ll take it from there.</p><div className="contact-aside"><Send size={19} /><span>Big idea, tiny question, or just saying hello.<br /><strong>We’re all ears.</strong></span></div><Doodle className="contact-doodle">✳</Doodle></div><form className="contact-form" onSubmit={submitContact}><div className="form-heading"><span>LET’S START SOMEWHERE</span><span>✳</span></div>{formSent ? <div className="form-success"><span><Check size={24} /></span><h3>That’s a lovely start.</h3><p>Your demo form has been submitted locally. Connect an email service or API route to receive real enquiries.</p><button type="button" className="text-link" onClick={() => setFormSent(false)}>Send another message <ArrowRight size={15} /></button></div> : <><label>Your name<input required name="name" placeholder="What should we call you?" /></label><label>Your email<input required name="email" type="email" placeholder="you@yourbrand.com" /></label><label>What are you dreaming up?<div className="select-wrap"><select name="service" defaultValue=""><option value="" disabled>Pick a starting point</option><option>Social media marketing</option><option>Social media management</option><option>UI / UX design</option><option>Web development</option><option>Graphics & brand artwork</option><option>A little bit of everything</option></select><ChevronDown size={16} /></div></label><label>A little more about it<textarea required name="message" rows={3} placeholder="The big idea, the challenge, the daydream…" /></label><button className="button button-dark form-submit" type="submit">Send the good stuff <ArrowRight size={17} /></button><small className="form-note">No awkward sales pitch. Just a real conversation.</small></>}</form></div></section>

      <footer className="site-footer"><div className="wrap footer-top"><a className="brand footer-brand transition-transform hover:scale-105" href="#home" aria-label="Studio 14 home"><img src="/logo.png" alt="Studio 14 Logo" width={56} height={84} className="h-[68px] sm:h-[76px] w-auto object-contain" /></a><p>Good ideas deserve<br /><span>a good place to grow.</span></p><div className="footer-links"><a href="#services">Services</a><a href="#work">Work</a><a href="#brand-lab">Brand lab</a><a href="#blog">Blog</a><a href="#contact">Contact</a></div><div className="footer-social"><a href="https://www.instagram.com/" aria-label="Instagram"><Instagram size={17} /></a><a href="https://www.linkedin.com/" aria-label="LinkedIn"><Linkedin size={17} /></a><a href="https://dribbble.com/" aria-label="Dribbble"><Dribbble size={17} /></a></div></div><div className="wrap footer-bottom"><span>© {new Date().getFullYear()} Studio 14 Creative Co. Made with curiosity.</span><a href="#home">Back to the top ↑</a><span>DESIGN / DEVELOP / MAKE SOME NOISE</span></div></footer>
    </main>
  );
}
