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
      <div className="slideDown w-full bg-black border border-black dark:border-slate-100 rounded-md">
        <div className="hover:-translate-x-2 hover:-translate-y-2 duration-150 rounded-md bg-royal border border-black w-full flex justify-center text-center">
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
        <p className="text-xl font-bold text-stone-800 underline-offset-4 lg:text-2xl mt-2 italic text-left underline">
          <span>" </span>
          {initialText}
          <span> "</span>
        </p>
        <div
          className={`lg:w-fit text-xl slideUp italic bg-slate-100 rounded-md`}
        >
          <p className="bg-stone-800 font-semibold rounded-md text-slate-100 p-2 lg:px-10 ztrans cursor-pointer duration-150 text-center">
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

  /*   useEffect(() => {
    if (theme === "light") {
      document.body.style.backgroundColor = "#FFE252";
    } else {
      document.body.style.backgroundColor = "black";
    }
  }, []); */

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.body.style.backgroundColor = "black";
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
        className="absolute top-0 w-full h-screen flex flex-col justify-center items-center backdrop-blur-md backdrop-brightness-50 backdrop-invert z-10 overflow-hidden"
        onClick={() => setShow(false)}
      >
        <div
          className="w-full 2xl:w-5/6 showup"
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
        <div className="text-right mt-10 sm:mt-6 w-full 2xl:w-5/6 mr-6">
          <button
            className="bg-black rounded-md border border-r-2 border-b-2 border-black"
            onClick={() => setShow(false)}
          >
            <div className="p-2 flex items-center bg-royal duration-200 hover:-translate-y-1 hover:-translate-x-1 rounded-md">
              <p className="px-2 text-slate-100 font-bold">VOLTAR</p>
              <IoReturnDownBackOutline className="text-slate-100" />
            </div>
          </button>
        </div>
      </div>
    );
  };

  return (
    <>
      <div
        className="sticky top-0 p-2"
        onClick={() =>
          setTheme((prev) => (prev === "light" ? "dark" : "light"))
        }
      >
        {theme === "light" ? (
          <BsFillMoonStarsFill size={20} className="text-gem" />
        ) : (
          <BsFillSunFill size={20} />
        )}
      </div>
      {show && <Modal children={modalChildren} />}
      {/* <Modal children={<Skills />} /> */}
      <div className="w-full lg:w-11/12 m-auto flex flex-col justify-center lg:gap-10 lg:h-screen lg:overflow-hidden">
        <section className={`${window.innerWidth >= 1024 ? "" : ""}`}>
          <div className="grid grid-flow-row-dense grid-cols-1 grid-rows-1 lg:gap-5 p-5 lg:grid-cols-3 rounded-lg w-full 2xl:w-2/3 2xl:m-auto">
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
        <div className="grid grid-cols-2 grid-rows-2 gap-2 justify-items-center lg:flex lg:flex-row lg:justify-around p-2 2xl:w-2/3 2xl:mx-auto">
          <div
            className={`rounded-md sm:w-[72%] md:w-[62%] w-full bg-royal flex flex-col justify-around items-center border-2 border-black cursor-pointer duration-300 hover:bg-stone-800 firstSlide`}
            onClick={() => {
              setModalChildren(<AboutMe />);
              setShow(true);
            }}
          >
            <BsPersonSquare size="60%" className="text-slate-100" />
            <p className="text-center text-slate-100 font-bold">SOBRE MIM</p>
          </div>
          <div
            className={`rounded-md sm:w-[72%] md:w-[62%] w-full bg-royal flex flex-col justify-around items-center border-2 border-stone-800 cursor-pointer duration-300 hover:bg-stone-800 secondSlide `}
            onClick={() => {
              setModalChildren(<Skills />);
              setShow(true);
            }}
          >
            <BsCodeSquare size="60%" className="text-slate-100" />
            <p className="text-center text-slate-100 font-bold">TECNOLOGIAS</p>
          </div>
          <div
            className={`rounded-md sm:w-[72%] md:w-[62%] w-full bg-royal flex flex-col justify-around items-center border-2 border-stone-800 cursor-pointer duration-300 hover:bg-stone-800 thirdSlide`}
            onClick={() => {
              setModalChildren(<Projects />);
              setShow(true);
            }}
          >
            <BsBriefcaseFill size="60%" className="text-slate-100" />
            <p className="text-center text-slate-100 font-bold">PROJETOS</p>
          </div>
          <div
            className={`rounded-md sm:w-[72%] md:w-[62%] w-full bg-royal flex flex-col justify-around items-center border-2 border-stone-800 cursor-pointer duration-300 hover:bg-stone-800 fourthSlide`}
            onClick={() => {
              setModalChildren(<Contact />);
              setShow(true);
            }}
          >
            <BsCardHeading size="60%" className="text-slate-100" />
            <p className="text-center text-slate-100 font-bold">CONTATO</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
