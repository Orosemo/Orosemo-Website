import { AnimatePresence, motion } from "framer-motion";
import { DiWindows, DiLinux, DiApple, DiHtml5 } from "react-icons/di";
import { AiFillAndroid } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
import { getAssetPath } from "@/lib/assets";
import { Avatar, AvatarFallback, AvatarGroup, AvatarImage } from "@/components/ui/avatar"
import { useImages } from "@/context/ImageContext";
import type React from "react";

export default function DefaultCard({
  headline,
  secondary,
  image,
  link,
  linkName,
}: {
  headline: string;
  secondary: string;
  image: string;
  link?: string;
  linkName?: string;
}) {
  const linkElement = link ? (
    <motion.a
      className="btn-link"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.04 }}
      whileTap={{
        scale: 0.9,
        transition: { scale: { type: "spring", duration: 0.01 } },
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {linkName}
    </motion.a>
  ) : null;

  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ scale: 0.8, y: 100 }}
          whileInView={{ scale: 1, y: 0 }}
          exit={{ scale: 0.8, transition: { scale: { duration: 0.2 } } }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="card-border flex flex-col w-full gap-6 p-5 text-sm lg:flex-row md:text-lg lg:text-xl xl:text-2xl max-w-sm sm:max-w-lg md:max-w-xl lg:max-w-3xl xl:max-w-6xl"
        >
          <div className="flex flex-col">
            <h1 className="headline text-center pb-5">{headline}</h1>
            <div className="flex flex-col items-center gap-6 md:flex-row md:items-start md:justify-between">
              <img
                className="h-32 w-32 object-contain md:h-48 md:w-48"
                src={getAssetPath(image)}
                alt="image"
              />
              <div className="flex flex-1 flex-col items-center md:items-start gap-4 text-center md:text-left">
                <p className="leading-relaxed">{secondary}</p>
              </div>
            </div>
            <div className="items-center">
              {linkElement && (
                <div className="flex justify-center">{linkElement}</div>
              )}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export function ProjectCard({
  Name,
  description,
  image,
  link,
  linkName,
  link2,
  linkName2,
  plattforms,
  devs
}: {
  Name: string;
  description: string;
  image: string;
  link?: string;
  linkName?: string;
  link2?: string;
  linkName2?: string;
  plattforms?: string;
  devs?: string;
}) {

  const { pfp } = useImages();

  const linkElement = link ? (
    <motion.a
      className="btn-link"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.04 }}
      whileTap={{
        scale: 0.9,
        transition: { scale: { type: "spring", duration: 0.01 } },
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {linkName}
    </motion.a>
  ) : null;

  const linkElement2 = link2 ? (
    <motion.a
      className="btn-link"
      href={link2}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.04 }}
      whileTap={{
        scale: 0.9,
        transition: { scale: { type: "spring", duration: 0.01 } },
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {linkName2}
    </motion.a>
  ) : null;

  const plattformElement = plattforms ? (
    <div className="flex flex-row">
      {plattforms.split(":").map((plattform, id) => {
        if (plattform == "Win") {
          return (
            <motion.div
              key={id}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <DiWindows />
            </motion.div>
          );
        }
        if (plattform == "Web") {
          return (
            <motion.div
              key={id}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <DiHtml5 />
            </motion.div>
          );
        }
        if (plattform == "Mac") {
          return (
            <motion.div
              key={id}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <DiApple />
            </motion.div>
          );
        }
        if (plattform == "Lin") {
          return (
            <motion.div
              key={id}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <DiLinux />
            </motion.div>
          );
        }
        if (plattform == "And") {
          return (
            <motion.div
              key={id}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <AiFillAndroid />
            </motion.div>
          );
        }
        if (plattform == "Dis") {
          return (
            <motion.div
              key={id}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <FaDiscord />
            </motion.div>
          );
        }
      })}
    </div>
  ) : null;

  const devElement: React.ReactNode = devs ? (() => {
      {
        if (devs.split(";").length === 1) {
          return(
            <Avatar>
              <AvatarImage src={getAssetPath(pfp[devs])} />
              <AvatarFallback>{devs}</AvatarFallback>
            </Avatar>
          )
        } else {
          return (
            <AvatarGroup>
              {
              devs.split(";").map((dev, id) => {
              return (
                <Avatar key={id}>
                  <AvatarImage src={getAssetPath(pfp[dev])} />
                  <AvatarFallback>{devs}</AvatarFallback>
                </Avatar>
              )
              })
              }
            </AvatarGroup>
          )

        }
      }
})() : null

  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ scale: 0.8, y: 100 }}
          whileInView={{ scale: 1, y: 0 }}
          exit={{ scale: 0.8, transition: { scale: { duration: 0.2 } } }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="card-border flex w-full flex-col gap-6 p-5 text-sm md:text-lg lg:text-xl xl:text-2xl max-w-sm sm:max-w-lg md:max-w-xl lg:max-w-3xl xl:max-w-6xl"
        >
          <h1 className="headline text-center">{Name}</h1>
          <div className="flex flex-col items-center gap-6 md:flex-row md:items-start md:justify-between">
            <img
              className="h-32 w-32 object-contain md:h-48 md:w-48"
              src={getAssetPath(image)}
              alt="image"
            />
            <div className="flex flex-1 flex-col items-center md:items-start text-center md:text-left gap-4">
              <p className="leading-relaxed">{description}</p>
              <div className="flex flex-row">{plattformElement}
              </div>
              <div className="flex flex-row">
                {devElement}
              </div>
              <div className="flex flex-wrap justify-center md:justify-start gap-3">
                {linkElement}
                {linkElement2}
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export function ContactCard({
  headline,
  dict,
  direction,
}: {
  headline: string;
  buttonName: string;
  dict: { [key: string]: { img: string; link: string } };
  direction: number;
}) {
  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ scale: 0.8, x: direction }}
          whileInView={{ scale: 1, x: 0 }}
          exit={{ scale: 0.8, transition: { scale: { duration: 0.2 } } }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="card-border flex flex-col w-full gap-6 p-5 text-sm  md:text-lg lg:text-xl xl:text-2xl max-w-sm sm:max-w-lg md:max-w-xl lg:max-w-3xl xl:max-w-6xl"
        >
          <div className="flex flex-col">
            <h1 className="headline text-center pb-5">{headline}</h1>
            <div className="flex flex-col gap-8">
              {Object.entries(dict).map(([name, item], index) => {
                return (
                  <div>
                    <div
                      className="flex flex-row justify-between items-center w-full"
                      key={index}
                    >
                      <div className="flex flex-row flex-grow items-center gap-2">
                        <img className="max-h-9 md:max-h-11 lg:max-h-13 xl:max-h-15 max-w-9 md:max-w-11 lg:max-w-13 xl:max-w-15" src={getAssetPath(item.img)} alt="" />
                        <h1 className="text-md  md:text-xl lg:text-2xl xl:text-4xl">{name}</h1>
                      </div>
                      <motion.a
                        className="btn-link"
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.04 }}
                        whileTap={{
                          scale: 0.9,
                          transition: {
                            scale: { type: "spring", duration: 0.01 },
                          },
                        }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      >
                        {item.button}
                      </motion.a>
                    </div>                    
                  </div>

                  
                );
              })}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
}
