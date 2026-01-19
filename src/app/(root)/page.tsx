import ActiveProjects from "../_components/ActiveProjects";
import ArchivedProjects from "../_components/ArchivedProjects";
import ExProjects from "../_components/ExProjects";
import Projects from "../_components/Projects";

// ISR
export const revalidate = 3600;

export default function HomePage() {
  return (
    <main className="via-primary flex flex-col items-center justify-center bg-gradient-to-b from-transparent to-transparent">
      <div className="container flex flex-col items-center justify-center gap-12 p-8 mt-12">
        <h1 className="font-paprika text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl xl:text-6xl text-shadow-lg">
          Starboy<span className="text-primary">&apos;</span>s Projects
        </h1>
      </div>
      <Projects></Projects>
      <br />
      <hr />
      <div className="container flex flex-col items-center justify-center gap-12 p-8 mt-12">
        <h1 className="font-paprika text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl xl:text-6xl text-shadow-lg">
          Active Projects<span className="text-primary">!</span>
        </h1>
      </div>
      <ActiveProjects></ActiveProjects>
      <br />
      <hr />
      <div className="container flex flex-col items-center justify-center gap-12 p-8 mt-12">
        <h1 className="font-paprika text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl xl:text-6xl text-shadow-lg">
          Ex<span className="text-primary">-</span>Projects
        </h1>
      </div>
      <ExProjects></ExProjects>
      <br />
      <hr />
      <div className="container flex flex-col items-center justify-center gap-12 p-8 mt-12">
        <h1 className="font-paprika text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl xl:text-6xl text-shadow-lg">
          Archives<span className="text-primary">.</span>
        </h1>
      </div>
      <ArchivedProjects></ArchivedProjects>
      <br />
      <hr />
    </main>
  );
}
