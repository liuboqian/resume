import Contact from "./content/contact";
import Education from "./content/education";
import ExperiencePage from "./content/experience";
import HelloPage from "./content/hello";
import SkillPage from "./content/skill";
import DownloadButton from "./download-button";
import { fromUnixTime, parse } from "date-fns";

export default function Home() {
  const date = fromUnixTime(
    parseInt(process.env.BUILD_AT ?? "")
  ).toDateString();
  return (
    <main className="flex min-h-screen flex-col">
      <HelloPage />
      <SkillPage />
      <ExperiencePage />
      <Education />
      <Contact />
      <DownloadButton />
      <footer className="text-sm text-gray-400 relative bottom-1 float-left">
        Version: {process.env.VERSION}
        <br />
        Update At: {date}
      </footer>
    </main>
  );
}
