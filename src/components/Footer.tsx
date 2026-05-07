"use client";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { BotOff } from "lucide-react";
import { getAssetPath } from "@/lib/assets";
import {
  SiItchdotio,
  SiGithub,
  SiBluesky,
  SiYoutube
} from "@icons-pack/react-simple-icons";

export default function Footer() {
  const { t } = useLanguage();
  return (
    <div className="flex items-strech self-center justify-self-center py-4 bg-background border-t gap-4">
      <div className="flex gap-2">
        <motion.a
          href="https://orosemo.itch.io/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Itch.io"
          title="Itch.io"
          whileHover={{ scale: 1.2, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <SiItchdotio size={32} />
        </motion.a>
        <motion.a
          href="https://github.com/Orosemo"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Github"
          title="Github"
          whileHover={{ scale: 1.2, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <SiGithub size={32} />
        </motion.a>
        <motion.a
          href="https://bsky.app/profile/orosemo.de"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Bluesky"
          title="Bluesky"
          whileHover={{ scale: 1.2, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <SiBluesky size={32} />
        </motion.a>
        <motion.a
          href="https://www.youtube.com/@Orosemo"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Youtube"
          title="Youtube"
          whileHover={{ scale: 1.2, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <SiYoutube size={32} />
        </motion.a>
      </div>
      <div className="flex gap-1">
        <BotOff />
        <p>{t.ai}</p>
      </div>
      <p>© 2025 Orosemo</p>
    </div>
  );
}
