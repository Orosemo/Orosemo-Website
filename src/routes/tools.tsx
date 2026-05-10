import { createFileRoute, Link } from "@tanstack/react-router";
import { useLanguage } from "@/context/LanguageContext";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { GanttChart, Search } from "lucide-react";
import { useState } from "react";
import { ProjectCard } from "../components/Cards";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import Fuse from 'fuse.js'

export const Route = createFileRoute("/tools")({
  component: RouteComponent,
});

function RouteComponent() {
  const { t } = useLanguage();

  const [query, SetQuery] = useState("");
  const tools = Object.entries(t.toolsPage?.tools ?? {}).map(([name, tool]) => ({
    name,
    ...tool,
  }));

  const fuse = new Fuse(tools, {
    keys: ["name"],
    includeScore: true,
  });

  const filteredTools = query
    ? fuse.search(query).map(({ item }) => item)
    : tools;

  function resetSearch() {
    SetQuery("");
  }

  return (
    <div className="flex flex-col self-center text-center ">
      <div className="site-headline">
        <h1 className="headline">{t?.toolsPage?.headline}</h1>
        <p>{t.toolsPage?.subHeadline}</p>
        <div className="flex justify-center">
          <div className=" relative w-fit">
            <motion.input
              initial={{ scale: 0.95 }}
              whileHover={{ scale: 1 }}
              whileFocus={{ scale: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="px-4 py-2 pr-10 input"
              placeholder={t?.toolsPage?.search}
              onChange={(e) => SetQuery(e.target.value)}
              value={query}
            />
            { query && (
              <motion.button
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.2 }}
                whileTap={{
                  scale: 1.3,
                  transition: { scale: { type: "spring", duration: 0.01 } },
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-highlight-light justify-end hover:text-highlight-light md:text-highlight  scale-125 cursor-pointer"
                onClick={resetSearch}
              >
                <X className="max-h-4 max-w-4 md:max-h-9 max-w-9"/>
              </motion.button>
            )

            }

          </div>          
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-y-2 mx-10 sm:mx-5 md:mx-0">
        {filteredTools.map((tool) => (
          <ProjectCard
            Name={tool.name}
            description={tool.description}
            image={tool.img}
            link={tool.link1.split("*")[0]}
            link2={tool.link2.split("*")[0]}
            linkName={tool.link1.split("*")[1]}
            linkName2={tool.link2.split("*")[1]}
            plattforms={tool?.platforms}
            devs={tool?.devs}
          />
        ))}
      </div>
    </div>
  );
}
