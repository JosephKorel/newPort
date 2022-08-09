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

  const AboutCard = (): JSX.Element => {
    return (
      <div className="p-5 rounded-sm flex justify-between items-center">
        <img src="./eu.png" className=""></img>
        <p className="text-center flex-1 p-2 bg-slate-200 rounded-sm">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
          Evil) by Cicero, written in 45 BC. This book is a treatise on the
          theory of ethics, very popular during the Renaissance. The first line
          of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
          section 1.10.32. The standard chunk of Lorem Ipsum used since the
          1500s is reproduced below for those interested. Sections 1.10.32 and
          1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
          reproduced in their exact original form, accompanied by English
          versions from the 1914 translation by H. Rackham.
        </p>
      </div>
    );
  };

  const Modal = ({
    children,
  }: {
    children: null | JSX.Element;
  }): JSX.Element => {
    const onClose = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      /*  e.currentTarget.id === "mymodal" ? setShow(true) : setShow(false); */

      console.log(e.currentTarget.id);
    };

    return (
      <div
        className="absolute top-0 w-full h-screen flex flex-col justify-center items-center backdrop-blur-md backdrop-brightness-50 z-10"
        onClick={() => setShow(false)}
      >
        <div className="w-2/3" onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </div>
    );
  };

  return (
    <>
      {show && <Modal children={modalChildren} />}
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
              className={`p-5 rounded-sm bg-green-600 flex-col justify-center items-center border border-stone-700 cursor-pointer duration-150 hover:scale-125 ${
                cardSlide ? "firstSlide" : "invisible"
              }`}
              onClick={() => {
                setModalChildren(AboutCard);
                setShow(true);
              }}
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
    </>
  );
}

export default HomePage;
