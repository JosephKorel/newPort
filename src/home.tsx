import React, { useContext, useEffect, useState } from "react";
import { useWindupString } from "windups";

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

  useEffect(() => {
    setTimeout(() => {
      setSlide(true);
    }, 3000);

    setTimeout(() => {
      setCardSlide(true);
    }, 5000);
  }, []);

  const AboutCard = (): JSX.Element => {
    return (
      <div className="p-5 rounded-sm bg-green-600 flex-col justify-center items-center border border-stone-700">
        <img src="./img/about black.png"></img>
        <p className="text-center">SOBRE MIM</p>
      </div>
    );
  };

  return (
    <div className="w-2/3 m-auto bg-red-300 h-screen overflow-hidden">
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
        <div className="flex justify-around p-2 gap-2">
          <div
            className={`p-5 rounded-sm bg-green-600 flex-col justify-center items-center border border-stone-700 ${
              cardSlide ? "firstSlide" : "invisible"
            }`}
          >
            <img src="./img/about black.png"></img>
            <p className="text-center">SOBRE MIM</p>
          </div>
          <div
            className={`p-5 rounded-sm bg-green-600 flex-col justify-center items-center border border-stone-700 ${
              cardSlide ? "secondSlide" : "invisible"
            }`}
          >
            <img src="./img/code black.png"></img>
            <p className="text-center">TECNOLOGIAS</p>
          </div>
          <div
            className={`p-5 rounded-sm bg-green-600 flex-col justify-center items-center border border-stone-700 ${
              cardSlide ? "thirdSlide" : "invisible"
            }`}
          >
            <img src="./img/projects black.png"></img>
            <p className="text-center">PROJETOS</p>
          </div>
          <div
            className={`p-5 rounded-sm bg-green-600 flex-col justify-center items-center border border-stone-700 ${
              cardSlide ? "fourthSlide" : "invisible"
            }`}
          >
            <img src="./img/contact black.png"></img>
            <p className="text-center">CONTATO</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
