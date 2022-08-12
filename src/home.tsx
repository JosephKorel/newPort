import React, { useContext, useEffect, useState } from "react";
import { useWindupString } from "windups";
import { AboutMe, Contact, Projects, Skills } from "./components/cards";
import { IoReturnDownBackOutline } from "react-icons/io5";
import { DiYeoman, DiCode } from "react-icons/di";
import { BiCodeBlock } from "react-icons/bi";
import {
  BsPersonSquare,
  BsBriefcaseFill,
  BsCardHeading,
  BsCodeSquare,
} from "react-icons/bs";

function MyWindup() {
  const [secondText, setSecondText] = useState(false);
  const [txtRightSlide, setTxtRightSlide] = useState(false);
  const [slide, setSlide] = useState(false);

  const [initialText] = useWindupString(
    "Programador que gosta de idiomas, jogos, musculação e duvida fortemente do seu gosto para design",
    {
      pace: (char) => 30,
    }
  );

  const secondTxt = () => {
    setTimeout(() => {
      setSecondText(true);
    }, 4000);

    setTimeout(() => {
      setSlide(true);
    }, 1800);

    setTimeout(() => {
      setTxtRightSlide(true);
    }, 4800);
  };

  useEffect(() => {
    secondTxt();
  }, []);

  return (
    <div>
      <div
        className={`${
          window.innerWidth > 750
            ? "fronttext inline-block bg-black border border-black rounded-md"
            : "slideDown"
        }`}
      >
        <div className="hover:-translate-x-2 hover:-translate-y-2 duration-150 inline-block rounded-md bg-royal">
          <p
            className={`italic text-center text-4xl text-slate-200 p-2 duration-150 font-bold`}
          >
            {`<FRONTEND DEVELOPER/>`}
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center gap-8 mt-4">
        <p className="text-xl lg:text-2xl mt-2 italic text-left underline">
          <span>"</span>
          {initialText}
          <span>"</span>
        </p>
        {window.innerWidth > 750 ? (
          <>
            {secondText && (
              <div
                className={`w-fit text-xl italic ${
                  slide ? "slide" : "hidden"
                } ${
                  txtRightSlide &&
                  "rightslide border border-black bg-black rounded-md"
                }`}
              >
                <p
                  className={`${slide && ""} ${
                    txtRightSlide &&
                    "bg-[#560BAD] font-semibold rounded-md text-slate-100 p-4 px-10 ztrans cursor-pointer duration-150"
                  }`}
                >
                  JOSÉ CARLOS, 22 ANOS
                </p>
              </div>
            )}
          </>
        ) : (
          <>
            <div>
              <p className="bg-stone-800 font-semibold text-center rounded-md text-slate-100 p-4 slideUp">
                JOSÉ CARLOS, 22 ANOS
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function HomePage() {
  const [slide, setSlide] = useState(false);
  const [cardSlide, setCardSlide] = useState(false);
  const [show, setShow] = useState(false);
  const [modalChildren, setModalChildren] = useState<null | JSX.Element>(null);

  useEffect(() => {
    document.body.style.backgroundColor = "#e2e8f0";
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setSlide(true);
    }, 3000);

    setTimeout(() => {
      setCardSlide(true);
    }, 5000);
  }, []);

  const Modal = ({
    children,
  }: {
    children: null | JSX.Element;
  }): JSX.Element => {
    return (
      <div
        className="absolute top-0 w-full h-screen flex flex-col justify-center items-center backdrop-blur-md backdrop-brightness-50 backdrop-invert z-10"
        onClick={() => setShow(false)}
      >
        <div
          className="w-full lg:w-2/3 showup"
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
        <div className="text-right mt-10 w-2/3">
          <button
            className="bg-black rounded-md border border-r-2 border-b-2 border-black"
            onClick={() => setShow(false)}
          >
            <div className="p-2 flex items-center bg-slate-200 duration-200 hover:-translate-y-1 hover:-translate-x-1 rounded-md">
              <p className="px-2">VOLTAR</p>
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
      {/* <Modal children={<Skills />} /> */}
      <div className="w-full lg:w-2/3 m-auto flex flex-col justify-center lg:gap-10 lg:h-screen lg:overflow-hidden">
        <section
          className={`${window.innerWidth > 750 ? "containerSlide" : "flex-1"}`}
        >
          <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-3 p-5 rounded-lg w-full lg:w-5/6 h-96 m-auto">
            <div className="col-span-3 lg:col-span-2">
              <MyWindup />
            </div>
            {window.innerWidth > 750 && (
              <div className="-translate-y-12 translate-x-10">
                <div
                  className={`relative border-2 border-stone-800 z-auto hover:z-10  duration-150 cursor-pointer bg-black rounded-md ${
                    slide ? "imgslide" : "hidden"
                  }`}
                >
                  <img
                    src="./eu.png"
                    className={`bg-slate-200 ztrans duration-150 rounded-md`}
                  ></img>
                </div>
              </div>
            )}
          </div>
        </section>
        <div className="grid grid-cols-2 grid-rows-2 gap-2 lg:flex lg:flex-row justify-around p-2">
          <div
            className={`rounded-md bg-royal flex flex-col justify-center items-center border border-black cursor-pointer duration-300 hover:bg-blue-400 ${
              cardSlide ? "firstSlide" : "invisible"
            }`}
            onClick={() => {
              setModalChildren(<AboutMe />);
              setShow(true);
            }}
          >
            <BsPersonSquare size="60%" color="white" />
            <p className="text-center text-slate-100 font-bold">SOBRE MIM</p>
          </div>
          <div
            className={`rounded-md bg-green-600 flex flex-col justify-center items-center border border-stone-700 cursor-pointer duration-300 hover:bg-blue-400 ${
              cardSlide ? "secondSlide" : "invisible"
            }`}
            onClick={() => {
              setModalChildren(<Skills />);
              setShow(true);
            }}
          >
            <BsCodeSquare size="60%" color="white" />
            <p className="text-center text-slate-100 font-bold">TECNOLOGIAS</p>
          </div>
          <div
            className={`rounded-md bg-green-600 flex flex-col justify-center items-center border border-stone-700 cursor-pointer duration-300 hover:bg-blue-400 ${
              cardSlide ? "thirdSlide" : "invisible"
            }`}
            onClick={() => {
              setModalChildren(<Projects />);
              setShow(true);
            }}
          >
            <BsBriefcaseFill size="60%" color="white" />
            <p className="text-center text-slate-100 font-bold">PROJETOS</p>
          </div>
          <div
            className={`rounded-md bg-green-600 flex flex-col justify-center items-center border border-stone-700 cursor-pointer duration-300 hover:bg-blue-400 ${
              cardSlide ? "fourthSlide" : "invisible"
            }`}
          >
            <BsCardHeading size="60%" color="white" />
            <p className="text-center text-slate-100 font-bold">CONTATO</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
