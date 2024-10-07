import Contact from "./content/contact";
import Education from "./content/education";
import ExperiencePage from "./content/experience";
import HelloPage from "./content/hello";
import SkillPage from "./content/skill";
import DownloadButton from "./download-button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HelloPage />
      <SkillPage />
      <ExperiencePage />
      <Education />
      <Contact />
      <DownloadButton />
    </main>
  );
}
