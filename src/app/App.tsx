import { useState } from "react";
import { motion } from "motion/react";
import { ProjectCard } from "./components/ProjectCard";
import { Code2, Sparkles, Palette, Mail, Github, Linkedin, Award, Zap, Users, Target } from "lucide-react";

const categories = ["Todos", "Web Apps", "E-commerce", "Mobile", "Dashboards"];

const projects = [
  {
    id: 1,
    title: "Dashboard Analytics Pro",
    description: "Panel de control empresarial con visualizaciones de datos en tiempo real y métricas avanzadas.",
    image: "https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjBhbmFseXRpY3MlMjBkZXNpZ258ZW58MXx8fHwxNzY5NTAwMTM1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Dashboards",
    technologies: ["React", "TypeScript", "Recharts", "Tailwind"],
    gradient: "bg-gradient-to-br from-purple-500 to-purple-700",
  },
  {
    id: 2,
    title: "EcoShop Platform",
    description: "Plataforma de e-commerce sostenible con sistema de pagos integrado y gestión de inventario.",
    image: "https://images.unsplash.com/photo-1650373773073-a8920f3edf34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwZ3JlZW58ZW58MXx8fHwxNzY5NTE5NDQ5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "E-commerce",
    technologies: ["Next.js", "Stripe", "PostgreSQL", "Framer Motion"],
    gradient: "bg-gradient-to-br from-green-500 to-green-700",
  },
  {
    id: 3,
    title: "Creative Portfolio Hub",
    description: "Sitio web de portafolio interactivo para artistas y diseñadores con galería dinámica.",
    image: "https://images.unsplash.com/photo-1720293049481-c0299876d90f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHBvcnRmb2xpbyUyMHdlYnNpdGV8ZW58MXx8fHwxNzY5NDgxMzIzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Web Apps",
    technologies: ["React", "Three.js", "GSAP", "CSS3"],
    gradient: "bg-gradient-to-br from-purple-500 to-pink-500",
  },
  {
    id: 4,
    title: "FitTrack Mobile",
    description: "Aplicación móvil para seguimiento de fitness con planes personalizados y estadísticas detalladas.",
    image: "https://images.unsplash.com/photo-1605108222700-0d605d9ebafe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzY5NDc3NjA1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Mobile",
    technologies: ["React Native", "Firebase", "Redux", "Expo"],
    gradient: "bg-gradient-to-br from-green-500 to-teal-500",
  },
  {
    id: 5,
    title: "SocialConnect App",
    description: "Red social innovadora con funciones de mensajería en tiempo real y contenido multimedia.",
    image: "https://images.unsplash.com/photo-1710870509663-16f20f75d758?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGFwcCUyMGludGVyZmFjZXxlbnwxfHx8fDE3Njk0OTI2ODl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Web Apps",
    technologies: ["Vue.js", "Socket.io", "Node.js", "MongoDB"],
    gradient: "bg-gradient-to-br from-purple-600 to-indigo-600",
  },
  {
    id: 6,
    title: "Modern Web Studio",
    description: "Sitio web corporativo con diseño moderno, animaciones fluidas y optimización SEO.",
    image: "https://images.unsplash.com/photo-1762716514229-739f6769e282?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXNpZ24lMjBwdXJwbGV8ZW58MXx8fHwxNzY5NTE5NDQ5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Web Apps",
    technologies: ["Astro", "React", "Tailwind", "Vercel"],
    gradient: "bg-gradient-to-br from-violet-500 to-purple-700",
  },
];

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const filteredProjects =
    selectedCategory === "Todos"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const skills = [
    { name: "Diseño UI/UX", level: 75, icon: Palette, color: "from-purple-500 to-purple-600" },
    { name: "Desarrollo Frontend", level: 80, icon: Code2, color: "from-green-500 to-green-600" },
    { name: "Aprendizaje Rápido", level: 95, icon: Zap, color: "from-purple-500 to-green-500" },
    { name: "Trabajo en Equipo", level: 85, icon: Users, color: "from-green-500 to-teal-500" },
  ];

  const languages = [
    { name: "JavaScript", level: 95, color: "bg-yellow-400" },
    { name: "TypeScript", level: 90, color: "bg-blue-500" },
    { name: "React", level: 98, color: "bg-cyan-400" },
    { name: "HTML/CSS", level: 97, color: "bg-orange-500" },
    { name: "Node.js", level: 85, color: "bg-green-500" },
    { name: "Python", level: 80, color: "bg-blue-600" },
    { name: "Next.js", level: 92, color: "bg-black" },
    { name: "Tailwind CSS", level: 96, color: "bg-teal-400" },
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
                  Frontend Developer
                </h1>
              </div>
              <p className="text-gray-400">Creando experiencias web excepcionales</p>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="#"
                className="flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 px-6 py-3 text-white shadow-lg shadow-purple-500/50 transition-all hover:scale-105 hover:shadow-xl hover:shadow-purple-500/50"
              >
                <Mail className="h-4 w-4" />
                Contacto
              </a>
              <a
                href="#"
                className="rounded-full border-2 border-gray-700 bg-slate-800 p-3 transition-all hover:border-purple-400 hover:bg-slate-700"
              >
                <Github className="h-5 w-5 text-gray-300" />
              </a>
              <a
                href="#"
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
                    src="https://images.unsplash.com/photo-1737575655055-e3967cbefd03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3Njk0NzQ1NDF8MA&ixlib=rb-4.1.0&q=80&w=1080"
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
                  Hola, Soy Developer
                </h2>
                
                <p className="mb-6 text-gray-300 leading-relaxed">
                  Soy estudiante de desarrollo web apasionado por crear experiencias digitales 
                  innovadoras y funcionales. Actualmente terminando mi formación universitaria, 
                  me dedico a aprender y aplicar las últimas tecnologías del ecosistema frontend.
                </p>
                
                <p className="mb-8 text-gray-300 leading-relaxed">
                  Mi enfoque está en construir interfaces modernas y responsivas que combinen 
                  diseño atractivo con código limpio. Busco constantemente mejorar mis habilidades 
                  a través de proyectos personales y académicos que desafíen mis capacidades.
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
                      2025
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

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl bg-slate-800 border border-purple-500/20 p-6 shadow-lg shadow-purple-500/10 transition-all hover:shadow-xl hover:shadow-purple-500/20 hover:border-purple-500/40"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`rounded-lg bg-gradient-to-br ${skill.color} p-3 shadow-lg`}>
                      <skill.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-white">{skill.name}</h3>
                  </div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-green-400 bg-clip-text text-transparent">
                    {skill.level}%
                  </span>
                </div>
                
                <div className="relative h-3 overflow-hidden rounded-full bg-gray-700">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                    className={`h-full rounded-full bg-gradient-to-r ${skill.color} shadow-lg`}
                  />
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

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {languages.map((lang, index) => (
              <motion.div
                key={lang.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                className="group relative overflow-hidden rounded-xl bg-slate-800 border border-gray-700 p-6 shadow-lg transition-all hover:shadow-xl hover:border-purple-500/40"
              >
                <div className={`absolute -right-8 -top-8 h-24 w-24 rounded-full ${lang.color} opacity-20 transition-all group-hover:scale-150`} />
                
                <div className="relative">
                  <div className="mb-3 flex items-center justify-between">
                    <h4 className="font-semibold text-white">{lang.name}</h4>
                    <span className={`h-3 w-3 rounded-full ${lang.color} shadow-lg`} />
                  </div>
                  
                  <div className="relative h-2 overflow-hidden rounded-full bg-gray-700">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${lang.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.05 + 0.2 }}
                      className={`h-full rounded-full ${lang.color} shadow-lg`}
                    />
                  </div>
                  
                  <p className="mt-2 text-sm text-gray-400">{lang.level}% Dominio</p>
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
              Explora una colección de proyectos innovadores que combinan diseño moderno,
              funcionalidad excepcional y las últimas tecnologías web.
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
                  href="#"
                  className="rounded-full bg-gradient-to-br from-purple-500 to-purple-600 p-2 text-white transition-transform hover:scale-110 shadow-lg shadow-purple-500/50"
                >
                  <Github className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="rounded-full bg-gradient-to-br from-green-500 to-green-600 p-2 text-white transition-transform hover:scale-110 shadow-lg shadow-green-500/50"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-purple-500/20 pt-6 text-center">
            <p className="text-sm text-gray-500">
              © 2025 Frontend Developer Portfolio. Diseñado con pasión.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}