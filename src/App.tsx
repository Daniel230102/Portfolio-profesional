/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  ArrowRight, 
  Code, 
  Terminal, 
  Layout, 
  Zap, 
  Smartphone, 
  Globe, 
  Database, 
  Bot, 
  Mail, 
  MapPin, 
  Phone,
  Menu,
  MoveRight,
  ExternalLink
} from "lucide-react";

const Navbar = () => (
  <header className="fixed top-0 w-full z-50 bg-slate-950/60 backdrop-blur-xl border-b border-outline-variant/10">
    <nav className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
      <div className="text-xl font-bold tracking-tighter text-primary font-headline uppercase">
        DANIEL VIDALES BAUTISTA
      </div>
      <div className="hidden md:flex gap-8 items-center font-headline tracking-tight">
        <a className="text-on-surface-variant hover:text-on-surface transition-colors" href="#about">Sobre mí</a>
        <a className="text-on-surface-variant hover:text-on-surface transition-colors" href="#experience">Experiencia</a>
        <a className="text-on-surface-variant hover:text-on-surface transition-colors" href="#projects">Proyectos</a>
        <a className="text-on-surface-variant hover:text-on-surface transition-colors" href="#contact">Contacto</a>
      </div>
      <button className="md:hidden text-primary">
        <Menu size={24} />
      </button>
    </nav>
  </header>
);

const Hero = () => (
  <section className="relative min-h-[80vh] flex items-center px-8 max-w-7xl mx-auto overflow-hidden pt-20">
    <div className="grid md:grid-cols-12 gap-12 items-center w-full">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="md:col-span-7 z-10"
      >
        <div className="inline-block px-4 py-1 rounded-full bg-surface-container-high border border-outline-variant/20 mb-6">
          <span className="text-primary font-label text-xs tracking-widest uppercase">Desarrollador Multiplataforma, Web y Especialista en IA</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-headline font-bold text-on-surface leading-[1.1] mb-6">
          Arquitecto de <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-tertiary">Soluciones Inteligentes</span>
        </h1>
        <p className="text-lg md:text-xl text-on-surface-variant max-w-xl mb-10 leading-relaxed">
          Desarrollador full-stack con formación avanzada en Inteligencia Artificial. Especializado en integrar modelos generativos y automatizaciones inteligentes en aplicaciones multiplataforma de alto rendimiento.
        </p>
        <div className="flex flex-wrap gap-4">
          <button className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-8 py-4 rounded-xl font-bold flex items-center gap-2 group shadow-[0_0_20px_rgba(129,236,255,0.2)]">
            Ver mis proyectos
            <ArrowRight className="transition-transform group-hover:translate-x-1" size={20} />
          </button>
          <button className="border border-outline-variant text-on-surface px-8 py-4 rounded-xl font-bold hover:bg-surface-variant transition-colors">
            Contáctame
          </button>
        </div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="md:col-span-5 flex justify-center items-center relative"
      >
        <div className="relative z-10 w-full max-w-[320px] aspect-square rounded-[2rem] overflow-hidden border border-outline-variant/30 group">
          <img 
            alt="Retrato profesional de Daniel Vidales Bautista" 
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" 
            src="https://lh3.googleusercontent.com/d/1Q8EcYIIPC23WqhuT4Gh7wzIUodd26s3s"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent"></div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/10 blur-[100px] -z-10"></div>
        <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-tertiary/10 blur-[80px] -z-10"></div>
      </motion.div>
    </div>
  </section>
);

const About = () => (
  <section className="py-24 px-8 max-w-7xl mx-auto" id="about">
    <div className="grid md:grid-cols-4 gap-6">
      <motion.div 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        viewport={{ once: true }}
        className="md:col-span-2 bg-surface-container rounded-[2rem] p-8 border border-outline-variant/10"
      >
        <h2 className="text-3xl font-headline font-bold mb-6 text-primary">Sobre mí</h2>
        <p className="text-on-surface-variant leading-relaxed text-lg mb-4">
          Desarrollador de aplicaciones multiplataforma y web con una especialización estratégica en Inteligencia Artificial. Mi formación técnica se ha potenciado con el uso de herramientas de IA generativa y automatización de procesos.
        </p>
        <p className="text-on-surface-variant leading-relaxed">
          Comprometido con la innovación, aplico metodologías modernas como el Vibe Coding para acelerar el desarrollo sin sacrificar la calidad. Mi objetivo es fusionar el desarrollo tradicional con el potencial ilimitado de la IA.
        </p>
      </motion.div>
      <motion.div 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="bg-surface-container-high rounded-[2rem] p-8 border border-outline-variant/10 flex flex-col justify-center text-center"
      >
        <span className="text-5xl font-headline font-bold text-primary mb-2">4+</span>
        <span className="text-on-surface-variant font-label text-sm tracking-widest uppercase">Años de experiencia</span>
      </motion.div>
      <motion.div 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="bg-surface-container-high rounded-[2rem] p-8 border border-outline-variant/10 flex flex-col justify-center text-center"
      >
        <span className="text-5xl font-headline font-bold text-tertiary mb-2">15+</span>
        <span className="text-on-surface-variant font-label text-sm tracking-widest uppercase">Proyectos entregados</span>
      </motion.div>
      <div className="md:col-span-4 bg-surface-bright/40 backdrop-blur-md rounded-[2rem] p-8 border border-outline-variant/20 flex flex-wrap gap-8 justify-around items-center">
        <div className="flex items-center gap-3">
          <Code className="text-primary" size={32} />
          <span className="font-headline font-medium">Código Limpio</span>
        </div>
        <div className="flex items-center gap-3">
          <Terminal className="text-primary" size={32} />
          <span className="font-headline font-medium">Stack Moderno</span>
        </div>
        <div className="flex items-center gap-3">
          <Layout className="text-primary" size={32} />
          <span className="font-headline font-medium">Arquitectura Robusta</span>
        </div>
        <div className="flex items-center gap-3">
          <Zap className="text-primary" size={32} />
          <span className="font-headline font-medium">Alto Rendimiento</span>
        </div>
      </div>
    </div>
  </section>
);

const Experience = () => (
  <section className="py-24 bg-surface-container-low/50" id="experience">
    <div className="max-w-7xl mx-auto px-8">
      <div className="flex flex-col md:flex-row gap-16">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-headline font-bold mb-12 flex items-center gap-4">
            Experiencia <span className="text-primary">Laboral</span>
          </h2>
          <div className="space-y-12">
            {[
              {
                title: "Técnico en reparación (prácticas)",
                company: "Servicio oficial Samsung - Electrónica Jopal S.L.",
                period: "ABR 2020 — JUN 2020",
                desc: "Servicios de reparación, instalación y comercialización de dispositivos Samsung. Desarrollo de habilidades técnicas en mantenimiento de equipos electrónicos.",
                color: "bg-primary"
              },
              {
                title: "Desarrollador web (prácticas)",
                company: "Intelligentlife",
                period: "MAR 2025 — JUN 2025",
                desc: "Realización de un rastreador web con Python. Control del posicionamiento web de la empresa y desarrollo de sitios web publicitarios para servicios comerciales.",
                color: "bg-surface-container-highest"
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -20 }}
                viewport={{ once: true }}
                className="relative pl-10 border-l border-outline-variant/30"
              >
                <div className={`absolute -left-2.5 top-0 w-5 h-5 rounded-full ${item.color} ring-8 ${item.color}/10`}></div>
                <div className="mb-2 flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-headline font-bold">{item.title}</h3>
                    <p className="text-primary font-medium">{item.company}</p>
                  </div>
                  <span className="font-label text-xs text-on-surface-variant tracking-wider">{item.period}</span>
                </div>
                <p className="text-on-surface-variant leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-headline font-bold mb-12 flex items-center gap-4">
            Educación y <span className="text-tertiary">Formación</span>
          </h2>
          <div className="space-y-12">
            {[
              { title: "Programa Superior en Inteligencia Artificial", school: "Fedeto", color: "bg-tertiary" },
              { title: "CFGS de Desarrollo de Aplicaciones Multiplataforma", school: "IES Julio Verne", color: "bg-surface-container-highest" },
              { title: "CFGM de Sistemas Microinformáticos y Redes", school: "IES Azarquiel", color: "bg-surface-container-highest" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 20 }}
                viewport={{ once: true }}
                className="relative pl-10 border-l border-outline-variant/30"
              >
                <div className={`absolute -left-2.5 top-0 w-5 h-5 rounded-full ${item.color} ring-8 ${item.color}/10`}></div>
                <div className="mb-2">
                  <h3 className="text-xl font-headline font-bold">{item.title}</h3>
                  <p className="text-on-surface-variant">{item.school}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Skills = () => (
  <section className="py-24 px-8 max-w-7xl mx-auto">
    <h2 className="text-3xl font-headline font-bold mb-16 text-center">Habilidades y <span className="text-primary">Tecnologías</span></h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        { 
          title: "Desarrollo de Apps", 
          icon: <Smartphone size={32} />, 
          skills: ["Java / Kotlin / C#", "Python", "Android Studio"],
          color: "hover:border-primary/30",
          iconBg: "bg-primary/10",
          iconColor: "text-primary"
        },
        { 
          title: "Desarrollo Web", 
          icon: <Globe size={32} />, 
          skills: ["HTML / Tailwind CSS", "JavaScript / Node.js", "EJS / Bootstrap"],
          color: "hover:border-tertiary/30",
          iconBg: "bg-tertiary/10",
          iconColor: "text-tertiary"
        },
        { 
          title: "Bases de Datos", 
          icon: <Database size={32} />, 
          skills: ["Oracle / MySQL", "MongoDB / Mongoose", "JSON"],
          color: "hover:border-primary/30",
          iconBg: "bg-primary/10",
          iconColor: "text-primary"
        },
        { 
          title: "IA", 
          icon: <Bot size={32} />, 
          skills: ["Automatizaciones", "Vibe Coding", "Chatbot"],
          color: "hover:border-tertiary/30",
          iconBg: "bg-tertiary/10",
          iconColor: "text-tertiary"
        }
      ].map((group, i) => (
        <motion.div 
          key={i}
          whileHover={{ y: -5 }}
          className={`bg-surface-container rounded-[2rem] p-8 border border-outline-variant/10 group transition-all duration-500 ${group.color}`}
        >
          <div className={`w-14 h-14 rounded-2xl ${group.iconBg} flex items-center justify-center ${group.iconColor} mb-6 group-hover:scale-110 transition-transform`}>
            {group.icon}
          </div>
          <h3 className="text-xl font-headline font-bold mb-4">{group.title}</h3>
          <ul className="space-y-3">
            {group.skills.map((skill, j) => (
              <li key={j} className="flex items-center gap-3">
                <span className={`w-1.5 h-1.5 rounded-full ${group.iconColor.replace('text-', 'bg-')}`}></span>
                <span className="text-on-surface-variant text-sm">{skill}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  </section>
);

const Projects = () => (
  <section className="py-24 px-8 max-w-7xl mx-auto" id="projects">
    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
      <div>
        <h2 className="text-4xl font-headline font-bold mb-4">Proyectos destacados</h2>
        <p className="text-on-surface-variant max-w-md">Explorando la intersección entre el rendimiento y la estética a través del código.</p>
      </div>
      <button className="text-primary font-headline font-bold flex items-center gap-2 group">
        Ver todos los proyectos
        <MoveRight className="transition-transform group-hover:translate-x-2" size={24} />
      </button>
    </div>
    <div className="grid md:grid-cols-2 gap-10">
      {[
        {
          title: "Plataforma Multi-Chatbot IA",
          desc: "Aplicación avanzada que permite gestionar múltiples chatbots para diferentes empresas, cada uno con su propia base de conocimientos y configuración personalizada.",
          tags: ["IA", "React", "Tailwind CSS", "Gemini API", "Node.js"],
          img: "https://cdn.leonardo.ai/users/f2fa8b85-4354-4668-9ea0-18e63dd31c89/generations/1f137185-1353-63e0-9018-0bbc7eb06cfd/gemini-2.5-flash-image_Mejora_esta_imagen_y_hazla_m%C3%A1s_profesional_y_llamativa_es_sobre_chatbots-0.jpg",
          overlay: "bg-primary/20",
          link: "https://chatbots-psi-seven.vercel.app/"
        },
        {
          title: "Local Commerce Hub (TFG)",
          desc: "Plataforma web diseñada para unificar y digitalizar el comercio local en localidades de pequeño y mediano tamaño, impulsando la economía de proximidad.",
          tags: ["Web", "React", "Node.js", "JavaScript", "Bootstrap", "MongoDB"],
          img: "https://r2.nanobananaimg.com/images/2026-04-13/f29d2e1f-0043-43c2-9680-96a4eb176d64.png",
          overlay: "bg-tertiary/20",
          link: "http://localhost:3000/"
        },
        {
          title: "Ecosistema de Apps Vibe Coding",
          desc: "Colección de aplicaciones desarrolladas mediante metodologías de Vibe Coding, optimizando el ciclo de desarrollo y la respuesta a necesidades del usuario.",
          tags: ["Vibe Coding", "Innovation", "Fast-Dev"],
          img: "https://miro.medium.com/v2/resize:fit:1358/format:webp/1*uCTdAhlsclSR2kg9-9D0uw.png",
          overlay: "bg-primary/20",
          link: "https://9000-firebase-studio-1775729243380.cluster-64pjnskmlbaxowh5lzq6i7v4ra.cloudworkstations.dev"
        },
        {
          title: "Web crawler",
          desc: "Sistemas de IA para conseguir información de clientes potenciales mediante scraping avanzado y procesamiento inteligente de datos.",
          tags: ["Scraping", "Node.js", "IA", "Automation"],
          img: "https://gologin.com/wp-content/uploads/image9.png",
          overlay: "bg-tertiary/20",
          link: "https://scraping-swart.vercel.app/"
        }
      ].map((project, i) => (
        <motion.div 
          key={i}
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          viewport={{ once: true }}
          className="group"
        >
          <a 
            href={project.link || "#"} 
            target={project.link ? "_blank" : "_self"} 
            rel="noopener noreferrer"
            className={project.link ? "cursor-pointer block" : "cursor-default block"}
          >
            <div className="relative overflow-hidden rounded-[2rem] aspect-video mb-6 border border-outline-variant/20">
              <img 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                src={project.img}
                referrerPolicy="no-referrer"
              />
              <div className={`absolute inset-0 ${project.overlay} opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center`}>
                {project.link && (
                  <div className="bg-white/10 backdrop-blur-md px-6 py-2 rounded-full border border-white/20 text-white font-bold opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0">
                    Ver Proyecto
                  </div>
                )}
              </div>
            </div>
            <div className="flex gap-2 mb-4">
              {project.tags.map((tag, j) => (
                <span key={j} className="px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container text-xs font-label">{tag}</span>
              ))}
            </div>
            <h3 className="text-2xl font-headline font-bold mb-2 group-hover:text-primary transition-colors flex items-center gap-2">
              {project.title}
              {project.link && <ExternalLink size={20} />}
            </h3>
            <p className="text-on-surface-variant leading-relaxed">
              {project.desc}
            </p>
          </a>
        </motion.div>
      ))}
    </div>
  </section>
);

const Contact = () => (
  <section className="py-24 px-8 max-w-7xl mx-auto" id="contact">
    <div className="bg-surface-container rounded-[3rem] overflow-hidden border border-outline-variant/10">
      <div className="grid md:grid-cols-2">
        <div className="p-12 md:p-20 bg-primary/5">
          <h2 className="text-4xl font-headline font-bold mb-8 leading-tight">Construyamos algo <span className="text-primary">extraordinario</span> juntos.</h2>
          <div className="space-y-8">
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-primary">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-xs font-label text-on-surface-variant uppercase tracking-widest mb-1">Envíame un email</p>
                <p className="font-headline font-bold">danielvidalesbautista@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-primary">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-xs font-label text-on-surface-variant uppercase tracking-widest mb-1">Ubicación</p>
                <p className="font-headline font-bold">Toledo, España</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-primary">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-xs font-label text-on-surface-variant uppercase tracking-widest mb-1">Teléfono</p>
                <p className="font-headline font-bold">(+34) 656367060</p>
              </div>
            </div>
          </div>
        </div>
        <div className="p-12 md:p-20">
          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="relative">
              <input 
                className="w-full bg-transparent border-0 border-b border-outline py-4 px-0 focus:ring-0 focus:border-primary text-on-surface placeholder:text-outline transition-all duration-300" 
                placeholder="Nombre completo" 
                type="text"
              />
            </div>
            <div className="relative">
              <input 
                className="w-full bg-transparent border-0 border-b border-outline py-4 px-0 focus:ring-0 focus:border-primary text-on-surface placeholder:text-outline transition-all duration-300" 
                placeholder="Correo electrónico" 
                type="email"
              />
            </div>
            <div className="relative">
              <textarea 
                className="w-full bg-transparent border-0 border-b border-outline py-4 px-0 focus:ring-0 focus:border-primary text-on-surface placeholder:text-outline transition-all duration-300" 
                placeholder="Tu mensaje" 
                rows={4}
              ></textarea>
            </div>
            <button className="w-full py-5 bg-primary text-on-primary rounded-2xl font-bold text-lg hover:bg-primary-dim transition-all active:scale-[0.98]">
              Enviar mensaje
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="w-full border-t border-outline-variant/10 bg-slate-950">
    <div className="flex flex-col md:flex-row justify-between items-center px-8 py-12 max-w-7xl mx-auto gap-6 text-sm tracking-wide">
      <div className="flex gap-8">
        <a className="text-on-surface-variant hover:text-primary transition-colors" href="https://github.com/Daniel230102" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a className="text-on-surface-variant hover:text-primary transition-colors" href="https://www.linkedin.com/in/daniel-vidales-bautista-a2963228a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="relative bg-background min-h-screen">
      <div className="fixed inset-0 noise-overlay pointer-events-none z-[100]"></div>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
