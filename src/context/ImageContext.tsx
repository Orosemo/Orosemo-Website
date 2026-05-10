"use client";

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { useTheme } from "@/hooks/useTheme.tsx";

type ImageContextValue = {
  logo: string | null;
  name: string | null;
  logo_small: string | null;
  name_small: string | null;
  pfp: string | null;
};

const ImageContext = createContext<ImageContextValue | undefined>(undefined);

export function ImageContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme } = useTheme();

  const [image, SetImages] = useState<ImageContextValue>({
    // Default to the standard theme assets so the initial render has valid values
    logo: "/logos/orosemo_logo_trans_1000.png",
    name: "/logos/orosemo_name_1000.png",
    logo_small: "/logos/orosemo_logo_trans",
    name_small: "/logos/orosemo_name.png",
    pfp: {
      joko26: "/pfp/pfp-normal.jpeg",
      hysedux: "/pfp/hysedux_pfp.png",
    },
  });

  useEffect(() => {
    if (theme === "halloween") {
      SetImages({
        logo: "/logos/halloween_logo_1000.png",
        name: "/logos/halloween_name_1000.png",
        logo_small: "/logos/halloween_logo.png",
        name_small: "/logos/halloween_name.png",
        pfp: {
          joko26: "/pfp/pfp_halloween.jpg",
          hysedux: "/pfp/hysedux_halloween.png",
        },
      });
    } else if (theme === "christmas") {
      SetImages({
        logo: "/logos/christmas_logo_1000.png",
        name: "/logos/christmas_name_1000.png",
        logo_small: "/logos/christmas_logo.png",
        name_small: "/logos/christmas_name.png",
        pfp: {
          joko26: "/pfp/pfp-christmas.jpeg",
          hysedux: "/pfp/hysedux_christmas.png",
        },
      });
    } else if (theme === "dark") {
      SetImages({
        logo: "/logos/ororsemo_logo_trans.png",
        name: "/logos/orosemo_name_1000.png",
        logo_small: "/logos/ororsemo_logo_trans_100.png",
        name_small: "/logos/orosemo_name.png",
        pfp: {
          joko26: "/pfp/pfp-normal.jpeg",
          hysedux: "/pfp/hysedux_pfp.png",
        },
      });
    } else if (theme === "light") {
      SetImages({
        logo: "/logos/ororsemo_logo_trans.png",
        name: "/logos/orosemo_name_1000.png",
        logo_small: "/logos/ororsemo_logo_trans_100.png",
        name_small: "/logos/orosemo_name.png",
        pfp: {
          joko26: "/pfp/pfp-normal.jpeg",
          hysedux: "/pfp/hysedux_pfp.png",
        },
      });
    }
  }, [theme]);

  return (
    <ImageContext.Provider value={image}>{children}</ImageContext.Provider>
  );
}

export function useImages() {
  const ctx = useContext(ImageContext);
  if (!ctx)
    throw new Error("useImages must be used inside ImageContextProvider");
  return ctx;
}
