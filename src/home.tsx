import React, { useEffect, useState } from "react";
import { useWindupString } from "windups";
import { AboutMe, Contact, Projects, Skills } from "./components/cards";
import { IoReturnDownBackOutline } from "react-icons/io5";
import {
  BsPersonSquare,
  BsBriefcaseFill,
  BsCardHeading,
  BsCodeSquare,
  BsFillMoonStarsFill,
  BsFillSunFill,
  BsFillHeartFill,
} from "react-icons/bs";

function MyWindup() {
  const [initialText] = useWindupString(
    "Programador que gosta de idiomas, jogos, musculação e duvida fortemente do seu gosto para design",
    {
      pace: (char) => 30,
    }
  );

  return (
    <div>
      <div className="slideDown w-full bg-black dark:bg-slate-100 border border-black dark:border-slate-100 rounded-md">
        <div className="hover:-translate-x-2 hover:-translate-y-2 duration-150 rounded-md bg-royal dark:bg-gem-300 border border-black dark:border-slate-100 w-full flex justify-center text-center">
          <p
            className={`absolute italic mx-auto text-4xl text-stone-800 p-2 duration-150 font-bold`}
          >
            {`<FRONTEND DEVELOPER/>`}
          </p>
          <p
            className={`italic txtshadow text-4xl text-slate-200 p-2 duration-150 font-bold`}
          >
            {`<FRONTEND DEVELOPER/>`}
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center gap-8 mt-4">
        <p className="text-xl font-bold text-stone-800 dark:text-slate-100 dark:decoration-gem-300 underline-offset-4 lg:text-2xl mt-2 italic text-left underline">
          <span>" </span>
          {initialText}
          <span> "</span>
        </p>
        <div
          className={`lg:w-fit text-xl slideUp italic bg-slate-100 dark:bg-stone-900 rounded-md`}
        >
          <p className="bg-stone-800 dark:bg-gem-300 font-semibold rounded-md text-slate-100 p-2 lg:px-10 ztrans cursor-pointer duration-150 text-center">
            - JOSÉ CARLOS, 22 ANOS
          </p>
        </div>
      </div>
    </div>
  );
}

function HomePage() {
  const [show, setShow] = useState(false);
  const [modalChildren, setModalChildren] = useState<null | JSX.Element>(null);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
      document.body.style.backgroundColor = "#1B053F";
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
      document.body.style.backgroundColor = "#FFE252";
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.body.style.backgroundColor = "#1B053F";
    } else {
      document.documentElement.classList.remove("dark");
      document.body.style.backgroundColor = "#FFE252";
    }
  }, [theme]);

  const Modal = ({
    children,
  }: {
    children: null | JSX.Element;
  }): JSX.Element => {
    return (
      <div
        className="absolute top-0 w-full h-screen flex flex-col justify-center items-center backdrop-blur-md backdrop-brightness-50 z-10 overflow-hidden"
        onClick={() => setShow(false)}
      >
        <div
          className="w-full 2xl:w-5/6 showup"
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
        <div className="text-right mt-6 w-full 2xl:w-5/6 mr-6">
          <button
            className="bg-black rounded-md border border-r-2 border-b-2 border-black"
            onClick={() => setShow(false)}
          >
            <div className="p-2 flex items-center bg-royal dark:bg-stone-800 duration-200 hover:-translate-y-1 hover:-translate-x-1 rounded-md text-slate-100 dark:text-slate-100 hover:bg-royal-600 dark:hover:bg-gem-600">
              <p className="px-2  font-bold">VOLTAR</p>
              <IoReturnDownBackOutline />
            </div>
          </button>
        </div>
      </div>
    );
  };

  return (
    <>
      {show && <Modal children={modalChildren} />}
      <div className="h-screen flex flex-col justify-center">
        <div className="w-full lg:w-11/12 lg:m-auto flex flex-col justify-between lg:gap-10 lg:overflow-hidden lg:h-[90vh] h-[98vh]">
          <div
            className="w-fit p-1 ml-1 lg:p-2 xl:p-3 rounded-full hover:bg-slate-100 dark:hover:bg-gem-200 cursor-pointer duration-200"
            onClick={() =>
              setTheme((prev) => (prev === "light" ? "dark" : "light"))
            }
          >
            {theme === "light" ? (
              <BsFillMoonStarsFill size={20} className="text-stone-800" />
            ) : (
              <BsFillSunFill size={20} className="text-gold" />
            )}
          </div>
          <div>
            <section>
              <div className="grid grid-flow-row-dense grid-cols-1 grid-rows-1 lg:gap-5 px-2 lg:grid-cols-3 rounded-lg w-full 2xl:w-2/3 2xl:m-auto">
                <div className="col-span-3 lg:col-span-2">
                  <MyWindup />
                </div>
                {window.innerWidth >= 1024 && (
                  <div>
                    <div className="relative border-2 border-stone-800 z-auto hover:z-10 duration-150 cursor-pointer bg-black rounded-md imgSlide">
                      <img
                        src="./eu.png"
                        className={`bg-slate-200 ztrans duration-150 rounded-md`}
                      ></img>
                    </div>
                  </div>
                )}
              </div>
            </section>
            <section className="grid grid-cols-2 grid-rows-2 gap-2 justify-items-center lg:flex lg:flex-row lg:justify-around p-2 2xl:w-2/3 2xl:mx-auto sm:mt-6">
              <div
                className="rounded-md sm:w-5/6 w-full bg-royal dark:bg-gold flex flex-col justify-around items-center border-2 border-stone-800 dark:border-slate-100 cursor-pointer duration-300 hover:bg-stone-800 firstSlide text-slate-100 dark:text-stone-800 dark:hover:bg-gem dark:hover:text-slate-100"
                onClick={() => {
                  setModalChildren(<AboutMe />);
                  setShow(true);
                }}
              >
                <BsPersonSquare size="60%" className="" />
                <p className="text-center font-bold">SOBRE MIM</p>
              </div>
              <div
                className="rounded-md sm:w-5/6 w-full bg-royal dark:bg-gold flex flex-col justify-around items-center border-2 border-stone-800 dark:border-slate-100 cursor-pointer duration-300 hover:bg-stone-800 secondSlide text-slate-100 dark:text-stone-800 dark:hover:bg-gem dark:hover:text-slate-100"
                onClick={() => {
                  setModalChildren(<Skills />);
                  setShow(true);
                }}
              >
                <BsCodeSquare size="60%" className="" />
                <p className="text-center  font-bold">TECNOLOGIAS</p>
              </div>
              <div
                className="rounded-md sm:w-5/6 w-full bg-royal dark:bg-gold flex flex-col justify-around items-center border-2 border-stone-800 dark:border-slate-100 cursor-pointer duration-300 hover:bg-stone-800 thirdSlide text-slate-100 dark:text-stone-800 dark:hover:bg-gem dark:hover:text-slate-100"
                onClick={() => {
                  setModalChildren(<Projects />);
                  setShow(true);
                }}
              >
                <BsBriefcaseFill size="60%" className="" />
                <p className="text-center  font-bold">PROJETOS</p>
              </div>
              <div
                className="rounded-md sm:w-5/6 w-full bg-royal dark:bg-gold flex flex-col justify-around items-center border-2 border-stone-800 dark:border-slate-100 cursor-pointer duration-300 hover:bg-stone-800 fourthSlide text-slate-100 dark:text-stone-800 dark:hover:bg-gem dark:hover:text-slate-100"
                onClick={() => {
                  setModalChildren(<Contact />);
                  setShow(true);
                }}
              >
                <BsCardHeading size="60%" className="" />
                <p className="text-center  font-bold">CONTATO</p>
              </div>
            </section>
          </div>
          <div className=" p-2 text-right gap-2 flex items-center w-full place-content-end dark:text-slate-100">
            <p>Made with</p>
            <BsFillHeartFill className="text-red-600" />
            <p>by</p>
            <span className="mr-4 font-semibold">José C. R. Etchepare</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
