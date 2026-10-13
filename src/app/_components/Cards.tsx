import type { Projects } from "../projects-index";
import Link from "next/link";

type CardsProps = {
  projects: Projects[];
};

export function Cards({ projects }: CardsProps) {
  return (
    <div className="mx-auto grid max-w-3xl grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:max-w-4xl xl:max-w-5xl">
      {projects.map((project) => (
        <Link
          key={project.title}
          className="flex max-w-xl flex-col gap-4 rounded-3xl bg-primary/60 px-12 py-8 shadow-lg hover:scale-110 hover:bg-primary transition-transform hover:text-sky-100"
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="flex justify-start">
            <img
              src="/github-logo.svg"
              alt="GitHub Logo"
              width={21}
              height={21}
              className="shadow-xl"
            />
          </span>
          <h3 className="font-paprika text-xl text-shadow-sm">
            {project.title}
          </h3>
          <div className="font-sans text-shadow-xs text-center">{project.description}</div>
        </Link>
      ))}
    </div>
  );
}
