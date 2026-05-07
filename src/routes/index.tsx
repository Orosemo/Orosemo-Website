import { createFileRoute } from "@tanstack/react-router";
import { useLanguage } from "@/context/LanguageContext";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import DefaultCard from "../components/Cards";
import { ChevronDown } from "lucide-react";
import { getAssetPath } from "@/lib/assets";
import { useImages } from "@/context/ImageContext";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  const { t } = useLanguage();
  const { name, pfp } = useImages()
  const [BgImage, setBgImage] = useState("");
  const images = [
    getAssetPath("/backgrounds/2.png"),
    getAssetPath("/backgrounds/image2.png"),
    getAssetPath("/backgrounds/image3.png"),
  ];

  const scrollToSection = (sectionIn: string) => {
    const section = document.getElementById(sectionIn);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    setBgImage(images[Math.floor(Math.random() * images.length)]);
  }, []);

  const cardsObj = t?.mainPage?.cards || {};

  return (
    <motion.div>
      <div>
        <div className="relative w-full h-screen">
          {BgImage && (
            <motion.img
              className="w-screen h-screen object-cover"
              src={BgImage}
              alt="bg-image"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            />
          )}
          <motion.div
            initial={{ scale: 0.4 }}
            whileInView={{ scale: 1 }}
            exit={{ scale: 0.8, transition: { scale: { duration: 0.2 } } }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-[90%] border-transparent rounded-xl bg-background/30 leading-relaxed shadow-lg text-sm md:text-lg lg:text-xl xl:text-2xl"
          >
            <div className="space-y-3 p-4 text-foreground flex flex-col items-center gap-5 md:flex-row md:items-center">
              <div>
                <h1 className="headline leading-loose">{t.mainPage.Greeting}</h1>
                <p>{t?.mainPage?.subGreeting}</p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <motion.button
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{
                  scale: 0.9,
                  transition: { scale: { type: "spring", duration: 0.01 } },
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className=""
                onClick={() => scrollToSection("content")}
              >
                <ChevronDown className="scale-250 m-5 hover:bg-black/30 rounded-md" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <img
          className="justify-self-center p-5"
          src={getAssetPath(name)}

          alt="orosemo name"
        />
        <div className="flex flex-col items-center justify-center gap-y-2 mx-10 sm:mx-5 md:mx-0" id="content">
          {Object.entries(cardsObj).map(([key, card]: [string, any]) => (
            <DefaultCard
              key={key}
              headline={card.head ?? card.headline ?? ""}
              secondary={card.text ?? card.secondary ?? ""}
              image={card.img ?? card.image ?? ""}
              link={card.link}
              linkName={card.linkName}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
