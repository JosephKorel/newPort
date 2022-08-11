import React, { useContext, useEffect, useState } from "react";
import { useWindupString } from "windups";
import { AboutMe, Projects, Skills } from "./components/cards";
import { IoReturnDownBackOutline } from "react-icons/io5";

function MyWindup() {
  const [frontText, setFrontText] = useState(false);
  const [secondText, setSecondText] = useState(false);
  const [txtRightSlide, setTxtRightSlide] = useState(false);
  const [slide, setSlide] = useState(false);
  const [text] = useWindupString("<Frontend Developer/>", {
    pace: (char) => (char === " " ? 600 : 40),
  });

  const [initialText] = useWindupString(
    "Programador que gosta de idiomas, jogos, musculação e duvida fortemente do seu gosto para design",
    {
      pace: (char) => 30,
    }
  );

  const firstText = () => {
    setTimeout(() => {
      setFrontText(true);
    }, 3100);
  };

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
    firstText();

    secondTxt();
  }, []);

  return (
    <div>
      {frontText ? (
        <div className="bg-green-500 fronttext inline-block">
          <div className="hover:-translate-x-5 hover:-translate-y-5 duration-150 inline-block bg-blue-400">
            <p className={`italic text-4xl p-2 duration-150  cursor-pointer `}>
              {text}
            </p>
          </div>
        </div>
      ) : (
        <div className="h-14 py-3 w-10"></div>
      )}

      <div className="text-center mt-4">
        <p className="text-xl mt-2 bg-red-200 text-left">{initialText}</p>
        {secondText && (
          <div
            className={`w-fit text-xl italic ${slide ? "slide" : "hidden"} ${
              txtRightSlide && "rightslide  border-2 border-white bg-green-100"
            }`}
          >
            <p
              className={`${slide && ""} ${
                txtRightSlide &&
                "bg-green-400 text-slate-100 p-4 px-10 ztrans cursor-pointer duration-150"
              }`}
            >
              José Carlos, 22 anos
            </p>
          </div>
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
        <div className="w-2/3 showup" onClick={(e) => e.stopPropagation()}>
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
      <div className="w-2/3 m-auto bg-red-300 flex flex-col justify-center gap-10 h-screen overflow-hidden">
        <section className="containerSlide">
          <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-3 bg-slate-200 p-5 rounded-lg w-5/6 h-96 m-auto">
            <div className="col-span-2">
              <MyWindup />
            </div>
            <div className="-translate-y-12 translate-x-10">
              <div
                className={`relative border-2 border-stone-800  mb-7 z-auto hover:z-10  duration-150 cursor-pointer bg-red-600 ${
                  slide ? "imgslide" : "hidden"
                }`}
              >
                <img
                  src="./eu.png"
                  className={`bg-stone-800 ztrans duration-150 `}
                ></img>
              </div>
            </div>
          </div>
        </section>
        <div className="flex justify-around p-2">
          <div
            className={`relative p-10 py-14 rounded-sm bg-green-600 flex-col justify-center items-center border border-stone-700 cursor-pointer duration-300 hover:bg-blue-400 ${
              cardSlide ? "firstSlide" : "invisible"
            }`}
            onClick={() => {
              setModalChildren(<AboutMe />);
              setShow(true);
            }}
          >
            <img src="./img/about black.png"></img>
            <p className="text-center">SOBRE MIM</p>
          </div>
          <div
            className={`p-10 py-14 rounded-sm bg-green-600 flex-col justify-center items-center border border-stone-700 cursor-pointer duration-300 hover:bg-blue-400 ${
              cardSlide ? "secondSlide" : "invisible"
            }`}
            onClick={() => {
              setModalChildren(<Skills />);
              setShow(true);
            }}
          >
            <img src="./img/code black.png"></img>
            <p className="text-center">TECNOLOGIAS</p>
          </div>
          <div
            className={`p-10 py-14 rounded-sm bg-green-600 flex-col justify-center items-center border border-stone-700 cursor-pointer duration-300 hover:bg-blue-400 ${
              cardSlide ? "thirdSlide" : "invisible"
            }`}
            onClick={() => {
              setModalChildren(<Projects />);
              setShow(true);
            }}
          >
            <img src="./img/projects black.png"></img>
            <p className="text-center">PROJETOS</p>
          </div>
          <div
            className={`p-10 py-14 rounded-sm bg-green-600 flex-col justify-center items-center border border-stone-700 ${
              cardSlide ? "fourthSlide" : "invisible"
            }`}
          >
            <img src="./img/contact black.png"></img>
            <p className="text-center">CONTATO</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
