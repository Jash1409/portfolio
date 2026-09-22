
import boy from "../../assets/boy.png";
import { useCursorHover } from "../../hooks/useCursorHover";
import { motion } from "motion/react";

export default function AboutMe() {
  const { handleMouseEnter, handleMouseLeave } = useCursorHover();
  return (
    <section
      className="bg-primary-black flex flex-col gap-10 px-4 py-5 sm:p-6 md:p-20 lg:flex-row lg:px-28"
      id="about"
    >
      <div className="lg:w-1/2 flex flex-col justify-center max-h-[520px] lg:max-h-[600px]">
        <img src={boy} alt="boy illustration"
         className="max-h-[520px] w-auto object-contain" />
      </div>
      <div className="lg:w-1/2">
        <h3 className="text-primary-white mb-10 text-[28px]/[114%] tracking-tight lg:text-5xl/[117%]">
          <span className="pr-2 md:pr-4">About</span>{" "}
          <span className="font-extrabold">Me</span>
        </h3>
        <article
          className="flex flex-col gap-4 text-zinc-300"
          onMouseEnter={() => handleMouseEnter(150)}
          onMouseLeave={() => handleMouseLeave(40)}
        >
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, type: "spring" }}
            viewport={{ once: true }}
          >
          I’m an aspiring data analyst who enjoys working with data to uncover patterns, answer real business questions, and turn raw information into meaningful insights. I work with SQL, Excel, Python, Pandas, and Power BI to clean datasets, explore trends, and create clear, useful visuals.          </motion.p>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 2, type: "spring" }}
            viewport={{ once: true }}
          >
          I’m comfortable working with messy data, validating assumptions, and finding the story behind the numbers. I like breaking down problems step by step, building dashboards, and presenting findings in a way that supports better decisions.          </motion.p>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 3, type: "spring" }}
            viewport={{ once: true }}
          >
          I enjoy learning by exploring datasets, improving my analysis process, and applying analytical thinking to practical problems. I’m looking for opportunities where I can contribute to data-driven decisions and keep growing as an analyst.          </motion.p>
        </article>
      </div>
    </section>
  );
}
