import { Popover } from "@headlessui/react";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Button from "../Button";
// Local Data
import data from "../../data/portfolio.json";
import Socials from "../Socials";

const Header = ({ handleWorkScroll, handleAboutScroll, isBlog }) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const socialId = {'github':0, 'linkedin':1, 'instagram':2}
  const { socials } = data;

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <>
      <Popover className="block tablet:hidden mt-5">
        {({ open }) => (
          <>
            <div className="flex items-center justify-between p-2 laptop:p-0">
              <div className="flex items-center">
                {data.darkMode && (
                  <Button
                    onClick={() =>
                      setTheme(theme === "dark" ? "light" : "dark")
                    }
                  >
                    <img
                      className="h-6"
                      src={`/images/${theme === "dark" ? "moon.svg" : "sun.svg"
                        }`}
                    ></img>
                  </Button>
                )}

                <Popover.Button>
                  <img
                    className="h-5"
                    src={`/images/${!open
                      ? theme === "dark"
                        ? "menu-white.svg"
                        : "menu.svg"
                      : theme === "light"
                        ? "cancel.svg"
                        : "cancel-white.svg"
                      }`}
                  ></img>
                </Popover.Button>
              </div>
            </div>
            <Popover.Panel
              className={`absolute right-0 z-10 w-11/12 p-4 ${theme === "dark" ? "bg-slate-800" : "bg-white"
                } shadow-md rounded-md`}
            >
              <div className="grid grid-cols-1">
                <Button onClick={handleAboutScroll}>About</Button>
                <Button onClick={handleWorkScroll}>Projects</Button>
                <Button onClick={() => window.open(socials[socialId.github].link)}>Github</Button>
                <Button onClick={() => window.open(socials[socialId.linkedin].link)}>Linkedin</Button>
                <Button onClick={() => window.open(socials[socialId.instagram].link)}>Instagram</Button>
                <Button onClick={() => window.open("mailto:shreyaskumar52@gmail.com")}>Contact</Button>

              </div>
            </Popover.Panel>
          </>
        )}
      </Popover>
      <div
        className={`mt-10 hidden flex-row items-center justify-between sticky ${theme === "light" && "bg-white"
          } dark:text-white top-0 z-10 tablet:flex`}
      >


        <div className="flex">
          <Button onClick={handleAboutScroll}>About</Button>
          <Button onClick={handleWorkScroll}>Projects</Button>
          <Button onClick={() => window.open("mailto:shreyaskumar52@gmail.com")}>Work-Experience</Button>
          {mounted && theme && data.darkMode && (
            <Button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <img
                className="h-6"
                src={`/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`}
              ></img>
            </Button>
          )}
        </div>
        <Socials />
      </div>
    </>
  );
};

export default Header;
