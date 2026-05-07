import { createFileRoute } from "@tanstack/react-router";
import { getAssetPath } from "@/lib/assets";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useLanguage } from "@/context/LanguageContext";
import {
  SiJavascript,
  SiReact,
  SiGithub,
  SiTypescript,
  SiDiscorddotjs,
  SiPython,
  SiGodotengine,
  SiObsidian,
  SiTailwindcss,
  SiDiscord,
  SiRaycast,
  SiAseprite,
  SiAutodesk,
} from "@icons-pack/react-simple-icons";
import { Separator } from "@/components/ui/separator";
import ReactMarkdown from "react-markdown";
import { motion } from "framer-motion";
import { useImages } from "@/context/ImageContext";
import { useState } from "react";

export const Route = createFileRoute("/about")({
  component: RouteComponent,
});

function RouteComponent() {
  const { pfp } = useImages();
  const { t } = useLanguage();

  const [person, setPerson] = useState<string>("joko26");
  const [hyseduxStyle, setHyseduxStyle] = useState<string>(
    "about-person-switcher",
  );
  const [joko26Style, setJoko2Style] = useState<string>(
    "about-person-switcher-active",
  );

  return (
    <div className="flex flex-col items-center text-center m-6 mini-headline">
      <div className="space-x-3">
        <button
          className={joko26Style}
          onClick={() => {
            setPerson("joko26");
            setHyseduxStyle(
              "about-person-switcher",
            );
            setJoko2Style(
              "about-person-switcher-active",
            );
          }}
        >
          Joko26
        </button>
        <button
          className={hyseduxStyle}
          onClick={() => {
            setPerson("hysedux");
            setHyseduxStyle(
              "about-person-switcher-active",
            );
            setJoko2Style(
              "about-person-switcher",
            );
          }}
        >
          Hysedux
        </button>
      </div>
      <div>
        <img
          className="rounded-full justify-self-center self-center max-w-20 md:justify-self-start md:max-w-30 lg:max-w-40 xl:max-w-50"
          src={getAssetPath(pfp[person])}
          alt=""
        />
      </div>
      <h1 className="headline leading-relaxed">
        {t?.aboutPage?.[person]?.head}
      </h1>
      <div className=" mx-4 md:mx-15 lg:mx-20 xl:mx-30">
        <p className="site-headline">
          <ReactMarkdown
            components={{
              a: ({ node, ...props }) => (
                <a
                  {...props}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-highlight-light underline hover:text-highlight-hover"
                />
              ),
            }}
          >
            {t?.aboutPage?.[person]?.overview}
          </ReactMarkdown>
        </p>
        <p className="site-headline">{t?.aboutPage?.transition}</p>
      </div>
      <div className="flex flex-col items-center justify-center gap-y-2 mx-10 sm:mx-5 md:mx-0 w-full max-w-sm sm:max-w-lg md:max-w-xl lg:max-w-3xl xl:max-w-6xl">
        <div className=" card-border p-5 gap-6 w-full max-w-sm sm:max-w-lg md:max-w-xl lg:max-w-3xl xl:max-w-6xl">
          <span className="site-headline">{t?.aboutPage?.tools}</span>
          <p className="text-xs md:sm lg:text-base xl:text-lg">
            {t?.aboutPage?.toolsContent}
          </p>
          <div className=" flex flex-row justify-center gap-4 mt-4 p-5 space-x-2 mx-4 md:mx-15 lg:mx-20 xl:mx-30 ">
            <motion.a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              title="GitHub"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <SiGithub className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12" />
            </motion.a>
            <motion.a
              href="https://www.aseprite.org/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Aseprite"
              title="Aseprite"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <SiAseprite className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12" />
            </motion.a>
            <motion.a
              href="https://godotengine.org/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Godot Engine"
              title="Godot Engine"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <SiGodotengine className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12" />
            </motion.a>
            <motion.a
              href="https://obsidian.md/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Obsidian"
              title="Obsidian"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <SiObsidian className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12" />
            </motion.a>
            <motion.a
              href="https://www.raycast.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Raycast"
              title="Raycast"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <SiRaycast className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12" />
            </motion.a>
            <motion.a
              href="https://www.autodesk.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Autodesk"
              title="Autodesk"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <SiAutodesk className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12" />
            </motion.a>
          </div>
        </div>

        <div className="card-border p-5 gap-6 w-full max-w-sm sm:max-w-lg md:max-w-xl lg:max-w-3xl xl:max-w-6xl">
          <span className="site-headline">{t?.aboutPage?.skills}</span>
          <p className="text-xs md:sm lg:text-base xl:text-lg">
            {t?.aboutPage?.skillsContent}
          </p>
          <div className="flex flex-row justify-center gap-4 mt-4 p-5 space-x-2 mx-4 md:mx-15 lg:mx-20 xl:mx-30">
            <motion.a
              href="https://www.python.org/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Python"
              title="Python"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <SiPython className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12" />
            </motion.a>
            <motion.a
              href="https://www.typescriptlang.org/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TypeScript"
              title="TypeScript"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <SiTypescript className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12" />
            </motion.a>
            <motion.a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="JavaScript"
              title="JavaScript"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <SiJavascript className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12" />
            </motion.a>
            <motion.a
              href="https://tailwindcss.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Tailwind CSS"
              title="Tailwind CSS"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <SiTailwindcss className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12" />
            </motion.a>
            <motion.a
              href="https://discord.js.org/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Discord.js"
              title="Discord.js"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <SiDiscorddotjs className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12" />
            </motion.a>
            <motion.a
              href="https://react.dev/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="React"
              title="React"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <SiReact className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12" />
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
}
