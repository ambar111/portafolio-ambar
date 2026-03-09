import { useState } from "react";
import { motion } from "motion/react";
import { ProjectCard } from "./components/ProjectCard";
import { Code2, Sparkles, Palette, Mail, Github, Linkedin, Award, Zap, Users, Target } from "lucide-react";

const categories = ["Todos", "Web Apps", "E-commerce", "Mobile", "Dashboards"];

const projects = [
  {
    id: 1,
    title: "PrixRD",
    description: "Sistema Integral de Gestión Técnico Vehicular en la República Dominicana. Diseño UI/UX completo con prototipo interactivo.",
    image: "https://images.unsplash.com/vector-1773083145742-fa8a92d4bf99?q=80&w=2232&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Web Apps",
    technologies: ["Figma", "UI Design", "Prototype"],
    gradient: "bg-gradient-to-br from-purple-500 to-purple-700",
    figmaLink: "https://www.figma.com/proto/cTzZmX2jt6nplHZJvbJpXT/PRIXRD?node-id=48-36&p=f&t=KpTZgnIoSfFIpA56-1&scaling=scale-down&content-scaling=responsive&page-id=0%3A1&starting-point-node-id=48%3A36",
  },
  {
    id: 2,
    title: "The Revenge - Ecommerce",
    description: "Plataforma web de e-commerce con sistema de autenticación y login. Diseño moderno con frontend funcional.",
    image: "https://images.unsplash.com/vector-1773080421722-dffbc045b35b?q=80&w=1116&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "E-commerce",
    technologies: ["Figma", "JavaScript", "CSS", "HTML"],
    gradient: "bg-gradient-to-br from-green-500 to-green-700",
    figmaLink: "https://www.figma.com/proto/EJcCoPokH83v0Vy0isdN3L/Ecommerce---The-Revenge---Front-de-Autenticaci%C3%B3n?node-id=232-479&p=f&t=obZhLaA7TZE2pQXt-1&scaling=contain&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=232%3A479",
    githubLink: "https://github.com/IDS326-Construccion-de-Software/ago-oct-pf-ecommerce-frontend.git",
  },
  {
    id: 3,
    title: "BioMuestra - Gestión de Muestras de Alimentos",
    description: "Sistema web para la gestión de muestras de alimentos con interfaz intuitiva y flujos de trabajo optimizados.",
    image: "https://images.unsplash.com/vector-1773080244379-bf4ec79eba65?q=80&w=1116&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Web Apps",
    technologies: ["Figma", "JavaScript", "UI Design"],
    gradient: "bg-gradient-to-br from-violet-500 to-purple-700",
    figmaLink: "https://www.figma.com/proto/SdEy2tTyOdVf4r39BCkLp6/Frontend-del-sistema-de-gestion-de-muestras-de-alimentos?node-id=2015-455&p=f&t=ieUUJraqCnTuasxf-1&scaling=contain&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2015%3A455",
    githubLink: "https://github.com/WebDevGroup6",
  },
];

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const filteredProjects =
    selectedCategory === "Todos"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const skills = [
    { name: "UX/UI Design", icon: Palette, color: "from-purple-500 to-purple-600" },
    { name: "Frontend Development", icon: Code2, color: "from-green-500 to-green-600" },
    { name: "Requirements Engineering", icon: Target, color: "from-purple-500 to-green-500" },
    { name: "User Research", icon: Users, color: "from-green-500 to-teal-500" },
    { name: "Wireframing & Prototyping", icon: Sparkles, color: "from-violet-500 to-purple-600" },
    { name: "Information Architecture", icon: Zap, color: "from-teal-500 to-green-500" },
    { name: "Agile / Scrum", icon: Award, color: "from-green-500 to-emerald-600" },
    { name: "Problem Solving", icon: Code2, color: "from-purple-600 to-violet-600" },
    { name: "Trabajo en Equipo", icon: Users, color: "from-green-500 to-teal-500" },
    { name: "Aprendizaje Rápido", icon: Zap, color: "from-purple-500 to-green-500" },
  ];

  const languages = [
    { name: "JavaScript", color: "bg-yellow-400" },
    { name: "TypeScript", color: "bg-blue-500" },
    { name: "React", color: "bg-cyan-400" },
    { name: "HTML/CSS", color: "bg-orange-500" },
    { name: "Node.js", color: "bg-green-500" },
    { name: "Python", color: "bg-blue-600" },
    { name: "Next.js", color: "bg-slate-400" },
    { name: "Tailwind CSS", color: "bg-teal-400" },
    { name: "MySQL", color: "bg-orange-400" },
    { name: "C#", color: "bg-purple-500" },
    { name: "C++", color: "bg-blue-700" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900">
      {/* Header */}
      <header className="relative overflow-hidden border-b border-purple-500/20 bg-slate-900/80 backdrop-blur-md">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-green-500/10" />
        <div className="relative mx-auto max-w-7xl px-6 py-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center justify-between gap-6 md:flex-row"
          >
            <div className="text-center md:text-left">
              <div className="mb-2 flex items-center justify-center gap-2 md:justify-start">
                <div className="rounded-lg bg-gradient-to-br from-purple-500 to-green-500 p-2">
                  <Code2 className="h-6 w-6 text-white" />
                </div>
                <h1 className="bg-gradient-to-r from-purple-400 to-green-400 bg-clip-text text-transparent">
                  Ámbar Tiburcio
                </h1>
              </div>
              <p className="text-gray-400"></p>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="mailto:ambarlucia2707@gmail.com"
                className="flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 px-6 py-3 text-white shadow-lg shadow-purple-500/50 transition-all hover:scale-105 hover:shadow-xl hover:shadow-purple-500/50"
              >
                <Mail className="h-4 w-4" />
                Contacto
              </a>
              <a
                href="https://github.com/ambar111"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border-2 border-gray-700 bg-slate-800 p-3 transition-all hover:border-purple-400 hover:bg-slate-700"
              >
                <Github className="h-5 w-5 text-gray-300" />
              </a>
              <a
                href="https://www.linkedin.com/in/ámbar-lucía-tiburcio-ynoa-559281291/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border-2 border-gray-700 bg-slate-800 p-3 transition-all hover:border-green-400 hover:bg-slate-700"
              >
                <Linkedin className="h-5 w-5 text-gray-300" />
              </a>
            </div>
          </motion.div>
        </div>
      </header>

      {/* About Me Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-purple-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-green-500/20 blur-3xl" />
        
        <div className="relative mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center"
          >
            {/* Photo */}
            <div className="flex justify-center md:justify-end">
              <div className="relative">
                <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-purple-500 to-green-500 opacity-30 blur-2xl" />
                <div className="relative h-80 w-80 overflow-hidden rounded-full border-4 border-purple-500/30 shadow-2xl shadow-purple-500/20">
                  <img
                  src="/perfil.jpeg"
                    alt="Perfil"
                    className="h-full w-full object-cover"
                  />
                </div>
                {/* Floating Badge */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -bottom-4 -right-4 rounded-2xl bg-slate-800 border border-purple-500/30 p-4 shadow-xl shadow-purple-500/20"
                >
                  <div className="flex items-center gap-2">
                    <Award className="h-6 w-6 text-purple-400" />
                    <div>
                      <p className="text-xs text-gray-400">Estado</p>
                      <p className="font-semibold text-white">Estudiante</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Bio */}
            <div className="text-center md:text-left">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-500/20 to-green-500/20 border border-purple-500/30 px-4 py-2">
                  <Target className="h-4 w-4 text-purple-400" />
                  <span className="text-sm text-purple-300">Sobre Mí</span>
                </div>
                
                <h2 className="mb-4 bg-gradient-to-r from-purple-400 to-green-400 bg-clip-text text-4xl text-transparent">
                  Hola, Soy Ámbar Lucía
                </h2>
                
                <p className="mb-6 text-gray-300 leading-relaxed">
                  Soy estudiante de Ingeniería en Software en INTEC (Instituto Tecnológico de Santo Domingo), enfocado en el diseño y 
                  desarrollo de productos digitales centrados en el usuario. Me interesa transformar necesidades y requerimientos en 
                  soluciones claras, funcionales y bien estructuradas.
                </p>
                
                <p className="mb-8 text-gray-300 leading-relaxed">
                  Mi enfoque combina UX/UI Design y desarrollo Frontend, creando interfaces modernas, intuitivas y responsivas que 
                  equilibran diseño visual, usabilidad y código limpio. A través de proyectos académicos y personales, busco 
                  construir experiencias digitales que no solo se vean bien, sino que realmente resuelvan problemas reales.
                </p>

                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <div className="rounded-xl bg-slate-800 border border-purple-500/30 p-4 shadow-lg shadow-purple-500/10">
                    <p className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent">
                      15+
                    </p>
                    <p className="text-sm text-gray-400">Proyectos</p>
                  </div>
                  <div className="rounded-xl bg-slate-800 border border-green-500/30 p-4 shadow-lg shadow-green-500/10">
                    <p className="text-3xl font-bold bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent">
                      20+
                    </p>
                    <p className="text-sm text-gray-400">Cursos</p>
                  </div>
                  <div className="rounded-xl bg-slate-800 border border-purple-500/30 p-4 shadow-lg shadow-purple-500/10">
                    <p className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-green-400 bg-clip-text text-transparent">
                      2027
                    </p>
                    <p className="text-sm text-gray-400">Graduación</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-500/20 to-green-500/20 border border-purple-500/30 px-6 py-2">
              <Sparkles className="h-5 w-5 text-purple-400" />
              <span className="text-sm text-purple-300">Mis Fortalezas</span>
            </div>
            <h2 className="mb-4 bg-gradient-to-r from-purple-400 to-green-400 bg-clip-text text-4xl text-transparent">
              Habilidades Destacadas
            </h2>
            <p className="mx-auto max-w-2xl text-gray-400">
              Competencias desarrolladas durante mi formación académica y proyectos personales
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -5 }}
                className="group relative overflow-hidden rounded-2xl bg-slate-800 border border-purple-500/20 p-6 shadow-lg shadow-purple-500/10 transition-all hover:shadow-xl hover:shadow-purple-500/20 hover:border-purple-500/40"
              >
                <div className="flex items-center gap-3">
                  <div className={`rounded-lg bg-gradient-to-br ${skill.color} p-3 shadow-lg`}>
                    <skill.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-white text-sm font-semibold">{skill.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Languages Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-500/20 to-green-500/20 border border-green-500/30 px-6 py-2">
              <Code2 className="h-5 w-5 text-green-400" />
              <span className="text-sm text-green-300">Tecnologías</span>
            </div>
            <h2 className="mb-4 bg-gradient-to-r from-purple-400 to-green-400 bg-clip-text text-4xl text-transparent">
              Lenguajes y Frameworks
            </h2>
            <p className="mx-auto max-w-2xl text-gray-400">
              Herramientas y tecnologías que domino para crear proyectos excepcionales
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {languages.map((lang, index) => (
              <motion.div
                key={lang.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                className="group relative overflow-hidden rounded-xl bg-slate-800 border border-gray-700 p-5 shadow-lg transition-all hover:shadow-xl hover:border-purple-500/40"
              >
                <div className={`absolute -right-8 -top-8 h-24 w-24 rounded-full ${lang.color} opacity-20 transition-all group-hover:scale-150`} />
                <div className="relative flex items-center gap-3">
                  <span className={`h-3 w-3 rounded-full ${lang.color} shadow-lg flex-shrink-0`} />
                  <h4 className="font-semibold text-white text-sm">{lang.name}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 bg-slate-900/50">
        <div className="absolute left-1/4 top-20 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />
        <div className="absolute bottom-20 right-1/4 h-72 w-72 rounded-full bg-green-500/20 blur-3xl" />
        
        <div className="relative mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-500/20 to-green-500/20 border border-purple-500/30 px-6 py-2">
              <Sparkles className="h-5 w-5 text-purple-400" />
              <span className="bg-gradient-to-r from-purple-600 to-green-600 bg-clip-text text-sm text-transparent">
                Portafolio Destacado
              </span>
            </div>
            
            <h2 className="mb-4 bg-gradient-to-r from-purple-600 via-purple-500 to-green-600 bg-clip-text text-5xl text-transparent">
              Proyectos Creativos
            </h2>
            
            <p className="mx-auto max-w-2xl text-gray-400">
              Explora la colección de proyectos que he desarrollado durante mi formacion academica.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="mx-auto max-w-7xl px-6 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`flex items-center gap-2 rounded-full border-2 px-6 py-2 transition-all ${
                selectedCategory === category
                  ? "border-purple-500 bg-gradient-to-r from-purple-500 to-green-500 text-white shadow-lg shadow-purple-500/50"
                  : "border-gray-700 bg-slate-800 text-gray-300 hover:border-purple-400 hover:bg-slate-700 hover:text-white"
              }`}
            >
              <Palette className="h-4 w-4" />
              {category}
            </button>
          ))}
        </motion.div>
      </section>

      {/* Projects Grid */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <motion.div
          layout
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-purple-500/20 bg-slate-900/80 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="text-center md:text-left">
              <p className="mb-2 bg-gradient-to-r from-purple-400 to-green-400 bg-clip-text text-transparent">
                ¿Listo para colaborar?
              </p>
              <p className="text-sm text-gray-400">
                Transforma tus ideas en experiencias digitales excepcionales
              </p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-400">Sígueme en:</span>
              <div className="flex gap-3">
                <a
                  href="https://github.com/ambar111"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-gradient-to-br from-purple-500 to-purple-600 p-2 text-white transition-transform hover:scale-110 shadow-lg shadow-purple-500/50"
                >
                  <Github className="h-4 w-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/ámbar-lucía-tiburcio-ynoa-559281291/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-gradient-to-br from-green-500 to-green-600 p-2 text-white transition-transform hover:scale-110 shadow-lg shadow-green-500/50"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-purple-500/20 pt-6 text-center">
            <p className="text-sm text-gray-500">
              © 2025 Ámbar Lucía Tiburcio Ynoa. Diseñado con pasión.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}