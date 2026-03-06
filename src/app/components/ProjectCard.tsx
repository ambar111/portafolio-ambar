import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  gradient: string;
}

export function ProjectCard({
  title,
  description,
  image,
  category,
  technologies,
  gradient,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="group relative overflow-hidden rounded-2xl bg-slate-800 border border-purple-500/20 shadow-lg shadow-purple-500/10 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 hover:border-purple-500/40"
    >
      {/* Image Container */}
      <div className="relative h-56 overflow-hidden">
        <div
          className={`absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-30 ${gradient}`}
        />
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="absolute bottom-4 left-4 right-4 flex gap-3">
            <button className="flex items-center gap-2 rounded-lg bg-white/95 px-4 py-2 backdrop-blur-sm transition-all hover:bg-white hover:shadow-lg">
              <ExternalLink className="h-4 w-4 text-gray-900" />
              <span className="text-sm text-gray-900">Ver Proyecto</span>
            </button>
            <button className="flex items-center justify-center rounded-lg bg-white/95 p-2 backdrop-blur-sm transition-all hover:bg-white hover:shadow-lg">
              <Github className="h-4 w-4 text-gray-900" />
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Category Badge */}
        <span
          className={`mb-3 inline-block rounded-full px-3 py-1 text-xs ${gradient} text-white bg-opacity-80`}
        >
          {category}
        </span>

        {/* Title */}
        <h3 className="mb-2 text-white transition-colors group-hover:text-purple-400">
          {title}
        </h3>

        {/* Description */}
        <p className="mb-4 text-sm text-gray-400 line-clamp-2">{description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="rounded-md bg-slate-700 px-2 py-1 text-xs text-gray-300 border border-gray-600"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Decorative Corner */}
      <div className={`absolute -right-12 -top-12 h-24 w-24 rounded-full opacity-10 ${gradient}`} />
    </motion.div>
  );
}