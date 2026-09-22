import CssIcon from "../../assets/skills/css.svg?react";
import GitIcon from "../../assets/skills/git.svg?react";
import HtmlIcon from "../../assets/skills/html.svg?react";
import JavaScriptIcon from "../../assets/skills/javascript.svg?react";
import ReactIcon from "../../assets/skills/react.svg?react";
import TailwindCssIcon from "../../assets/skills/tailwindcss.svg?react";
import NodeJsIcon from "../../assets/skills/nodedotjs.svg?react";
import FireBaseIcon from "../../assets/skills/firebase (1).svg?react";
import SqlIcon from "../../assets/skills/mysql.svg?react";
import FastApiIcon from "../../assets/skills/fastapi.svg?react";
import SkillCard from "./SkillCard";

export default function Skills() {
  return (
    <section
      className="bg-primary-white px-4 py-10 lg:pb-25 sm:px-6 md:px-20 lg:px-28 2xl:px-36"
      id="skills"
    >
      <h2 className="mb-10 text-center text-[28px]/[114%] tracking-tight lg:text-[48px]/[114%]">
        <span className="pr-2 md:pr-4">My</span>
        <span className="font-extrabold">Skills</span>
      </h2>
      <ul className="grid grid-cols-2 justify-items-center gap-5 md:grid-cols-3 md:gap-5 lg:grid-cols-4 lg:gap-12 xl:grid-cols-5">
        <SkillCard title="SQL">
          <SqlIcon className="h-12 w-12 group-hover:fill-primary-white" />
        </SkillCard>
        <SkillCard title="Power BI">
          <TailwindCssIcon className="h-12 w-12 group-hover:fill-primary-white group-hover:stroke-primary-white" />
        </SkillCard>
        <SkillCard title="Excel">
          <HtmlIcon className="h-12 w-12 group-hover:fill-primary-white" />
        </SkillCard>
        <SkillCard title="Python">
          <JavaScriptIcon className="h-12 w-12 group-hover:fill-primary-white" />
        </SkillCard>
        <SkillCard title="Pandas">
          <ReactIcon className="h-12 w-12 group-hover:fill-primary-white" />
        </SkillCard>
        <SkillCard title="NumPy">
          <FastApiIcon className="h-12 w-12 group-hover:fill-primary-white" />
        </SkillCard>
        <SkillCard title="Matplotlib">
          <FireBaseIcon className="h-12 w-12 group-hover:fill-primary-white" />
        </SkillCard>
        <SkillCard title="React">
          <NodeJsIcon className="h-12 w-12 group-hover:fill-primary-white" />
        </SkillCard>
        <SkillCard title="JavaScript">
          <CssIcon className="h-12 w-12  group-hover:fill-primary-white" />
        </SkillCard>
        <SkillCard title="Git">
          <GitIcon className="h-12 w-12 group-hover:fill-primary-white" />
        </SkillCard>
      </ul>
    </section>
  );
}
