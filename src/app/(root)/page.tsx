import { Cards } from "../_components/Cards";
import {
  activeProjects,
  personalProjects,
  oneOones,
  archives,
} from "../projects-index";

// ISR
export const revalidate = 3600;

export default function HomePage() {
  return (
    <main className="relaxed via-primary flex flex-col items-center justify-center bg-linear-to-b from-transparent to-transparent">
      <div className="container mt-12 flex flex-col items-center justify-center gap-12 p-8">
        <h2 className="font-paprika text-3xl font-bold text-shadow-xs md:text-4xl lg:text-5xl xl:text-6xl">
          Active
        </h2>
      </div>
      <Cards projects={activeProjects}></Cards>
      <br />
      <hr />
      <div className="container mt-12 flex flex-col items-center justify-center gap-12 p-8">
        <h2 className="font-paprika text-3xl font-bold text-shadow-xs md:text-4xl lg:text-5xl xl:text-6xl">
          Personal
        </h2>
      </div>
      <Cards projects={personalProjects}></Cards>
      <br />
      <hr />
      <div className="container mt-12 flex flex-col items-center justify-center gap-12 p-8">
        <h2 className="font-paprika text-3xl font-bold text-shadow-xs md:text-4xl lg:text-5xl xl:text-6xl">
          101s
        </h2>
      </div>
      <Cards projects={oneOones}></Cards>
      <br />
      <hr />
      <div className="container mt-12 flex flex-col items-center justify-center gap-12 p-8">
        <h2 className="font-paprika text-3xl font-bold text-shadow-xs md:text-4xl lg:text-5xl xl:text-6xl">
          Archives
        </h2>
      </div>
      <Cards projects={archives}></Cards>
      <br />
      <hr />
    </main>
  );
}
