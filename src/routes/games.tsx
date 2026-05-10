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

export const Route = createFileRoute("/games")({
  component: RouteComponent,
});

function RouteComponent() {
  const { t } = useLanguage();

  const [query, SetQuery] = useState("");
  const games = Object.entries(t.gamesPage?.games ?? {}).map(([name, game]) => ({
    name,
    ...game,
  }));

  const fuse = new Fuse(games, {
    keys: ["name"],
    includeScore: true,
  });

  const filteredGames = query
    ? fuse.search(query).map(({ item }) => item)
    : games;

  function resetSearch() {
    SetQuery("");
  }

  return (
    <div className="flex flex-col self-center text-center ">
      <div className="site-headline">
        <h1 className="headline">{t?.gamesPage?.headline}</h1>
        <p>{t.gamesPage?.subHeadline}</p>
        <div className="flex justify-center">
          <div className=" relative w-fit">
            <motion.input
              initial={{ scale: 0.95 }}
              whileHover={{ scale: 1 }}
              whileFocus={{ scale: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="px-4 py-2 pr-10 input"
              placeholder={t?.gamesPage?.search}
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
        {filteredGames.map((game) => (
          <ProjectCard
            Name={game.name}
            description={game.description}
            image={game.img}
            link={game.link}
            linkName={t.gamesPage?.play}
            plattforms={game?.platforms}
            devs={game?.devs}
          />
        ))}
      </div>
    </div>
  );
}
