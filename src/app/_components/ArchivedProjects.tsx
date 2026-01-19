import { archivesList } from "_data/projects/archives";
import Link from "next/link";

export default function ArchivedProjects() {
  return (
    <>
      <div className="mx-auto grid max-w-3xl grid-cols-1 p-8 md:grid-cols-2 gap-6 md:gap-8 lg:max-w-4xl xl:max-w-5xl">
        {archivesList.map((project) => (
          <Link
            key={project.title}
            className="flex max-w-xl flex-col gap-4 rounded-3xl bg-black/20 px-8 py-6 shadow-lg hover:scale-105"
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
            <h3 className="font-paprika text-shadow-lg text-xl font-semibold">
              {project.title}
            </h3>
            <div className="tracking-tight text-shadow-lg">
              {project.description}
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
