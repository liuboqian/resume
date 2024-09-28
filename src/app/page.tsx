import HelloPage from "./content/hello";
import SkillPage from "./content/skill";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HelloPage />
      <SkillPage />
      <section className="h-screen snap-start flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-semibold">Experience</h2>
          <p className="text-lg">Details about work experience...</p>
        </div>
      </section>
      <section className="h-screen snap-start flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-semibold">Education</h2>
          <p className="text-lg">Details about education...</p>
        </div>
      </section>
      <section className="h-screen snap-start flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-semibold">Contact</h2>
          <p className="text-lg">Details about contact information...</p>
        </div>
      </section>
    </main>
  );
}
