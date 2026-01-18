import { exProjectsList } from "_data/projects/ex-projects";
import Link from "next/link";

export default function Projects() {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 md:gap-8">
        {exProjectsList.map((project) => (
          <Link
            key={project.title}
            className="flex max-w-xl flex-col gap-4 rounded-3xl bg-black/10 px-8 py-4 shadow-lg hover:scale-105"
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
              />
            </span>
            <h3 className="font-paprika text-xl font-semibold">
              {project.title}
            </h3>
            <div className="tracking-tight">{project.description}</div>
          </Link>
        ))}
      </div>
    </>
  );
}
