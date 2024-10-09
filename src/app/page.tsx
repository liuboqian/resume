import Contact from "./content/contact";
import Education from "./content/education";
import ExperiencePage from "./content/experience";
import HelloPage from "./content/hello";
import SkillPage from "./content/skill";
import DownloadButton from "./download-button";
import { fromUnixTime } from "date-fns";
import version from "@/../version.json";

export default function Home() {
  const date = fromUnixTime(version.BuildAt).toISOString();
  return (
    <main className="flex min-h-screen flex-col">
      <HelloPage />
      <SkillPage />
      <ExperiencePage />
      <Education />
      <Contact />
      <DownloadButton />
      <footer className="text-sm text-gray-400 relative bottom-1 float-left">
        Version: {version.AppVersion}
        <br />
        Update At: {date}
      </footer>
    </main>
  );
}
