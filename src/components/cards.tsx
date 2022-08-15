import { useRef, useState } from "react";
import { IoReturnDownBackOutline } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import {
  BsLinkedin,
  BsEnvelopeFill,
  BsGithub,
  BsPersonSquare,
} from "react-icons/bs";

export const AboutMe = (): JSX.Element => {
  return (
    <div className="p-2 lg:p-5 rounded-sm flex flex-col lg:flex-row gap-4 items-center lg:justify-between">
      <img
        src="./eu.png"
        className="bg-slate-300 rounded-3xl border border-stone-700 w-1/2 sm:w-1/3 lg:w-1/3 negativeShadow duration-300 ztrans"
      ></img>
      <div className="p-2 lg:p-5 bg-slate-200 rounded-md border border-stone-700 w-full lg:w-[60%] flex flex-col justify-around myshadow duration-300 hover:-translate-x-6 hover:-translate-y-4">
        <div>
          <p className="font-semibold text-lg lg:text-3xl italic">
            José Carlos, 22 anos, natural de Porto Alegre, Rio Grande do Sul
          </p>
          <p className="text-base lg:text-2xl italic my-2">
            Estudante de Análise e Desenvolvimento de Sistemas pela UNINTER
          </p>
        </div>
        <p className="text-sm lg:text-xl indent-1">
          Sempre gostei de estudar de forma autodidata, a quantidade de conteúdo
          que podemos aprender online hoje em dia é algo incrível. Sou dedicado
          e diligente em relação às metas que me proponho. Além do interesse por
          programação, também sou apaixonado por idiomas, atualmente falando
          fluentemente português, inglês, japonês, e estudando coreano.
        </p>
      </div>
    </div>
  );
};

export const Skills = (): JSX.Element => {
  return (
    <div className="rounded-sm flex flex-col justify-center items-center">
      <div className="p-2 grid grid-rows-3 grid-cols-2 gap-5 lg:grid-cols-6 lg:gap-10 w-full md:w-5/6">
        <div className="lg:p-5 lg:py-10 sm:py-3 duration-300 hover:scale-110 bg-slate-200 rounded-md border-2 border-stone-800 flex flex-col justify-around hover:border-violet-600 items-center js">
          <img src="./img/js.png" className="w-20"></img>
          <p className="italic text-center text-stone-800 font-semibold p-2">
            JAVASCRIPT (ES6+)
          </p>
        </div>
        <div className="lg:p-5 lg:py-10 duration-300 hover:scale-110  bg-slate-200 rounded-md border-2 border-stone-800 flex flex-col justify-around hover:border-violet-600 items-center ts">
          <img src="./img/ts.png" className="w-20 "></img>
          <p className="italic text-center text-stone-800 font-semibold p-2">
            TYPESCRIPT
          </p>
        </div>
        <div className="lg:p-5 lg:py-10 duration-300 hover:scale-110 bg-slate-200 rounded-md border-2 border-stone-800 flex flex-col justify-around hover:border-violet-600 items-center react">
          <img src="./img/react.png" className="w-20  animate-spin-slow"></img>
          <p className="italic text-center text-stone-800 font-semibold p-2">
            REACT
          </p>
        </div>
        <div className="lg:p-5 lg:py-10 duration-300 hover:scale-110 bg-slate-200 rounded-md border-2 border-stone-800 flex flex-col justify-around hover:border-violet-600 items-center git">
          <img src="./img/git-icon.png" className="w-20 "></img>
          <p className="italic text-center text-stone-800 font-semibold p-2">
            GIT
          </p>
        </div>
        <div className="lg:p-5 lg:py-10 duration-300 hover:scale-110 bg-slate-200 rounded-md border-2 border-stone-800 flex flex-col justify-around hover:border-violet-600 items-center tail">
          <img src="./img/tailwind.png" className="w-20 "></img>
          <p className="italic text-center text-stone-800 font-semibold p-2">
            TAILWIND CSS
          </p>
        </div>
        <div className="lg:p-5 lg:py-10 duration-300 hover:scale-110 bg-slate-200 rounded-md border-2 border-stone-800 flex flex-col justify-around hover:border-violet-600 items-center fire">
          <img src="./img/firebase.png" className="w-20"></img>
          <p className="italic text-center text-stone-800 font-semibold p-2">
            FIREBASE
          </p>
        </div>
      </div>
    </div>
  );
};

export const Projects = (): JSX.Element => {
  const [onFocus, setOnFocus] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const [show, setShow] = useState<JSX.Element | null>(null);

  const DietApp = (): JSX.Element => {
    return (
      <div className="flex-col justify-center">
        <div className="flex justify-center">
          <img src="./img/macro.png" className={`rounded-md w-1/2`}></img>
        </div>
        <div className="p-2 rounded-md bg-slate-200 border border-stone-800 negativeShadow mt-2 w-2/3 m-auto">
          <p className="font-bold text-lg">
            JavaScript (ES6+) <span className="text-blue-500 text-xl">♦</span>{" "}
            Typescript <span className="text-blue-500 text-xl">♦</span> React{" "}
            <span className="text-blue-500 text-xl">♦</span> React Native{" "}
            <span className="text-blue-500 text-xl">♦</span> Git{" "}
            <span className="text-blue-500 text-xl">♦</span> Tailwind CSS{" "}
            <span className="text-blue-500 text-xl">♦</span> Firebase
          </p>
          <div className="w-full h-1 rounded-full bg-stone-800 mt-1"></div>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32. The standard chunk of
            Lorem Ipsum used since the 1500s is reproduced below for those
            interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
            Malorum" by Cicero are also reproduced in their exact original form,
            accompanied by English versions from the 1914 translation by H.
            Rackham.
          </p>
        </div>
      </div>
    );
  };

  const Dictionary = (): JSX.Element => {
    return (
      <div className="flex-col justify-center">
        <div className="flex justify-center">
          <img src="./img/dictionary.png" className={`rounded-md w-1/2`}></img>
        </div>
        <div className="p-2 rounded-md bg-slate-200 border border-stone-800 negativeShadow mt-2 w-2/3 m-auto">
          <p className="font-bold text-lg">
            JavaScript (ES6+) <span className="text-blue-500 text-xl">♦</span>{" "}
            Typescript <span className="text-blue-500 text-xl">♦</span> React{" "}
            <span className="text-blue-500 text-xl">♦</span> React Native{" "}
            <span className="text-blue-500 text-xl">♦</span> Git{" "}
            <span className="text-blue-500 text-xl">♦</span> Tailwind CSS{" "}
            <span className="text-blue-500 text-xl">♦</span> Firebase
          </p>
          <div className="w-full h-1 rounded-full bg-stone-800 mt-1"></div>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32. The standard chunk of
            Lorem Ipsum used since the 1500s is reproduced below for those
            interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
            Malorum" by Cicero are also reproduced in their exact original form,
            accompanied by English versions from the 1914 translation by H.
            Rackham.
          </p>
        </div>
      </div>
    );
  };

  const BlogApp = (): JSX.Element => {
    return (
      <div className="flex-col justify-center">
        <div className="flex justify-center">
          <img src="./img/blog.png" className={`rounded-md w-1/2`}></img>
        </div>
        <div className="p-2 rounded-md bg-slate-200 border border-stone-800 negativeShadow mt-2 w-2/3 m-auto">
          <p className="font-bold text-lg">
            JavaScript (ES6+) <span className="text-blue-500 text-xl">♦</span>{" "}
            Typescript <span className="text-blue-500 text-xl">♦</span> React{" "}
            <span className="text-blue-500 text-xl">♦</span> React Native{" "}
            <span className="text-blue-500 text-xl">♦</span> Git{" "}
            <span className="text-blue-500 text-xl">♦</span> Tailwind CSS{" "}
            <span className="text-blue-500 text-xl">♦</span> Firebase
          </p>
          <div className="w-full h-1 rounded-full bg-stone-800 mt-1"></div>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32. The standard chunk of
            Lorem Ipsum used since the 1500s is reproduced below for those
            interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
            Malorum" by Cicero are also reproduced in their exact original form,
            accompanied by English versions from the 1914 translation by H.
            Rackham.
          </p>
        </div>
      </div>
    );
  };

  const ChatApp = (): JSX.Element => {
    return (
      <div className="flex-col justify-center">
        <div className="flex justify-center">
          <img src="./img/chat.png" className={`rounded-md w-1/2`}></img>
        </div>
        <div className="p-2 rounded-md bg-slate-200 border border-stone-800 negativeShadow mt-2 w-2/3 m-auto">
          <p className="font-bold text-lg">
            JavaScript (ES6+) <span className="text-blue-500 text-xl">♦</span>{" "}
            Typescript <span className="text-blue-500 text-xl">♦</span> React{" "}
            <span className="text-blue-500 text-xl">♦</span> React Native{" "}
            <span className="text-blue-500 text-xl">♦</span> Git{" "}
            <span className="text-blue-500 text-xl">♦</span> Tailwind CSS{" "}
            <span className="text-blue-500 text-xl">♦</span> Firebase
          </p>
          <div className="w-full h-1 rounded-full bg-stone-800 mt-1"></div>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32. The standard chunk of
            Lorem Ipsum used since the 1500s is reproduced below for those
            interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
            Malorum" by Cicero are also reproduced in their exact original form,
            accompanied by English versions from the 1914 translation by H.
            Rackham.
          </p>
        </div>
      </div>
    );
  };

  const Platform = (): JSX.Element => {
    return (
      <div className="flex-col justify-center">
        <div className="flex justify-center">
          <img src="./img/blog.png" className={`rounded-md w-1/2`}></img>
        </div>
        <div className="p-2 rounded-md bg-slate-200 border border-stone-800 negativeShadow mt-2 w-2/3 m-auto">
          <p className="font-bold text-lg">
            JavaScript (ES6+) <span className="text-blue-500 text-xl">♦</span>{" "}
            Typescript <span className="text-blue-500 text-xl">♦</span> React{" "}
            <span className="text-blue-500 text-xl">♦</span> React Native{" "}
            <span className="text-blue-500 text-xl">♦</span> Git{" "}
            <span className="text-blue-500 text-xl">♦</span> Tailwind CSS{" "}
            <span className="text-blue-500 text-xl">♦</span> Firebase
          </p>
          <div className="w-full h-1 rounded-full bg-stone-800 mt-1"></div>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32. The standard chunk of
            Lorem Ipsum used since the 1500s is reproduced below for those
            interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
            Malorum" by Cicero are also reproduced in their exact original form,
            accompanied by English versions from the 1914 translation by H.
            Rackham.
          </p>
        </div>
      </div>
    );
  };

  const Quizzer = (): JSX.Element => {
    return (
      <div className="flex-col justify-center">
        <div className="flex justify-center">
          <img src="./img/blog.png" className={`rounded-md w-1/2`}></img>
        </div>
        <div className="p-2 rounded-md bg-slate-200 border border-stone-800 negativeShadow mt-2 w-2/3 m-auto">
          <p className="font-bold text-lg">
            JavaScript (ES6+) <span className="text-blue-500 text-xl">♦</span>{" "}
            Typescript <span className="text-blue-500 text-xl">♦</span> React{" "}
            <span className="text-blue-500 text-xl">♦</span> React Native{" "}
            <span className="text-blue-500 text-xl">♦</span> Git{" "}
            <span className="text-blue-500 text-xl">♦</span> Tailwind CSS{" "}
            <span className="text-blue-500 text-xl">♦</span> Firebase
          </p>
          <div className="w-full h-1 rounded-full bg-stone-800 mt-1"></div>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32. The standard chunk of
            Lorem Ipsum used since the 1500s is reproduced below for those
            interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
            Malorum" by Cicero are also reproduced in their exact original form,
            accompanied by English versions from the 1914 translation by H.
            Rackham.
          </p>
        </div>
      </div>
    );
  };

  const handleFocus = (index: number): void => {
    if (onFocus.includes(true)) {
      setOnFocus([false, false, false, false, false, false]);
    } else {
      const focus = onFocus.slice();
      focus[index] = true;
      setOnFocus(focus);
    }
  };

  const showElement = (element: JSX.Element): void => {
    setShow(element);
    setOnFocus([false, false, false, false, false, false]);
  };

  return (
    <div className="p-5 sm:p-2 rounded-sm flex flex-col justify-center items-center">
      {show ? (
        <>
          <button
            onClick={() => setShow(null)}
            className="bg-slate-200 p-2 rounded-md duration-200 hover:bg-slate-400 self-start mb-2"
          >
            <IoReturnDownBackOutline size={24} />
          </button>
          <div className="">{show}</div>
        </>
      ) : (
        <div className="mt-2 grid grid-rows-3 grid-cols-2 gap-5 justify-items-center sm:grid-rows-2 sm:grid-cols-3 lg:grid-rows-2 lg:grid-cols-3 lg:gap-14">
          <div
            className={`cursor-pointer duration-200 ${
              onFocus[0] && "scale-105"
            }`}
            onClick={() => showElement(<DietApp />)}
            onMouseEnter={() => handleFocus(0)}
            onMouseLeave={() => handleFocus(0)}
          >
            <img
              src="./img/macro.png"
              className={`rounded-md lg:grayscale border border-stone-800 duration-200 ${
                onFocus[0] && "grayscale-0"
              }`}
            ></img>
            <p
              className={`text-base lg:text-xl text-center duration-200 border border-stone-800 p-1 mt-1 lg:p-2 lg:mt-2 rounded-md bg-gold text-stone-800 font-semibold cursor-pointer  ${
                onFocus[0] &&
                "bg-stone-800 text-violet-600 border-violet-600 font-bold"
              }`}
            >
              DIET APP
            </p>
          </div>
          <div
            onClick={() => showElement(<Dictionary />)}
            className={`cursor-pointer duration-200 ${
              onFocus[1] && "scale-105"
            }`}
            onMouseEnter={() => handleFocus(1)}
            onMouseLeave={() => handleFocus(1)}
          >
            <img
              src="./img/dictionary.png"
              className={`rounded-md lg:grayscale border border-stone-800 duration-200 ${
                onFocus[1] && "grayscale-0"
              }`}
            ></img>
            <p
              className={`text-base lg:text-xl text-center duration-200 border border-stone-800  p-1 mt-1 lg:p-2 lg:mt-2 rounded-md bg-gold text-stone-800 font-semibold  ${
                onFocus[1] &&
                "bg-stone-800 text-violet-600 border-violet-600 font-bold"
              }`}
            >
              DICTIONARY
            </p>
          </div>
          <div
            onClick={() => showElement(<BlogApp />)}
            className={`cursor-pointer duration-200 ${
              onFocus[2] && "scale-105"
            }`}
            onMouseEnter={() => handleFocus(2)}
            onMouseLeave={() => handleFocus(2)}
          >
            <img
              src="./img/blog.png"
              className={`rounded-md lg:grayscale border border-stone-800 duration-200 ${
                onFocus[2] && "grayscale-0"
              }`}
            ></img>
            <p
              className={`text-base lg:text-xl text-center duration-200 border border-stone-800  p-1 mt-1 lg:p-2 lg:mt-2 rounded-md bg-gold text-stone-800 font-semibold  ${
                onFocus[2] &&
                "bg-stone-800 text-violet-600 border-violet-600 font-bold"
              }`}
            >
              PERSONAL BLOG
            </p>
          </div>
          <div
            onClick={() => showElement(<ChatApp />)}
            className={`cursor-pointer duration-200 ${
              onFocus[3] && "scale-105"
            }`}
            onMouseEnter={() => handleFocus(3)}
            onMouseLeave={() => handleFocus(3)}
          >
            <img
              src="./img/chat.png"
              className={`rounded-md lg:grayscale border border-stone-800 duration-200 ${
                onFocus[3] && "grayscale-0"
              }`}
            ></img>
            <p
              className={`text-base lg:text-xl text-center duration-200 border border-slate-100  p-1 mt-1 lg:p-2 lg:mt-2 rounded-md bg-royal text-slate-100 font-semibold  ${
                onFocus[3] &&
                "bg-stone-800 text-violet-600 border-violet-600 font-bold"
              }`}
            >
              CHAT
            </p>
          </div>
          <div
            onClick={() => showElement(<Platform />)}
            className={`cursor-pointer duration-200 ${
              onFocus[4] && "scale-105"
            }`}
            onMouseEnter={() => handleFocus(4)}
            onMouseLeave={() => handleFocus(4)}
          >
            <img
              src="./img/dictionary.png"
              className={`rounded-md lg:grayscale border border-stone-800 duration-200 ${
                onFocus[4] && "grayscale-0"
              }`}
            ></img>
            <p
              className={`text-base lg:text-xl text-center duration-200 border border-slate-100  p-1 mt-1 lg:p-2 lg:mt-2 rounded-md bg-royal text-slate-100 font-semibold  ${
                onFocus[4] &&
                "bg-stone-800 text-violet-600 border-violet-600 font-bold"
              }`}
            >
              PLATAFORMA
            </p>
          </div>
          <div
            onClick={() => showElement(<Quizzer />)}
            className={`cursor-pointer duration-200 ${
              onFocus[5] && "scale-105"
            }`}
            onMouseEnter={() => handleFocus(5)}
            onMouseLeave={() => handleFocus(5)}
          >
            <img
              src="./img/dictionary.png"
              className={`rounded-md lg:grayscale border border-stone-800 lg:border-none duration-200 ${
                onFocus[5] && "grayscale-0"
              }`}
            ></img>
            <p
              className={`text-base lg:text-xl text-center duration-200 border border-slate-100  p-1 mt-1 lg:p-2 lg:mt-2 rounded-md bg-royal text-slate-100 font-semibold  ${
                onFocus[5] &&
                "bg-stone-800 text-violet-600 border-violet-600 font-bold"
              }`}
            >
              QUIZZER
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export const Contact = (): JSX.Element => {
  const [onFocus, setOnFocus] = useState([false, false, false, false]);

  const handleFocus = (index: number): void => {
    if (onFocus.includes(true)) {
      setOnFocus([false, false, false, false]);
    } else {
      const focus = onFocus.slice();
      focus[index] = true;
      setOnFocus(focus);
    }
  };
  return (
    <div className="flex flex-col justify-between sm:gap-10 gap-20">
      <div className="p-1 lg:p-5 bg-royal rounded-md border border-stone-700 myshadow duration-300 hover:-translate-x-6 hover:-translate-y-4 w-fit m-auto">
        <p className="font-semibold p-2 text-xl lg:text-3xl italic text-center text-slate-100">
          ENTRE EM CONTATO COMIGO
        </p>
      </div>
      <div className="p-2 grid grid-rows-2 grid-cols-2 gap-5 justify-items-center lg:flex lg:justify-around lg:items-center">
        <div
          className="bg-gold w-2/3 lg:w-1/6 duration-300 hover:scale-110 cursor-pointer border border-stone-800 flex flex-col justify-around items-center rounded-md lg:p-5 lg:py-16 js hover:bg-violet-600"
          onMouseEnter={() => handleFocus(0)}
          onMouseLeave={() => handleFocus(0)}
        >
          <BsLinkedin size="50%" className="text-stone-800" />
          <p className="mt-4 font-semibold text-stone-800">LINKEDIN</p>
        </div>
        <div
          className="bg-gold w-2/3 lg:w-1/6 duration-300 hover:scale-110 cursor-pointer border border-stone-800 flex flex-col justify-around items-center rounded-md lg:p-5 lg:py-16 ts hover:bg-violet-600"
          onMouseEnter={() => handleFocus(1)}
          onMouseLeave={() => handleFocus(1)}
        >
          <BsEnvelopeFill size="50%" className="text-stone-800" />

          <p className="mt-4 font-semibold text-stone-800">EMAIL</p>
        </div>
        <div
          className="bg-gold w-2/3 lg:w-1/6 duration-300 hover:scale-110 cursor-pointer border border-stone-800 flex flex-col justify-around items-center rounded-md lg:p-5 lg:py-16 react hover:bg-violet-600"
          onMouseEnter={() => handleFocus(2)}
          onMouseLeave={() => handleFocus(2)}
        >
          <BsGithub size="50%" className="text-stone-800" />

          <p className="mt-4 font-semibold text-stone-800">GITHUB</p>
        </div>
        <div
          className="bg-gold w-2/3 lg:w-1/6 duration-300 hover:scale-110 cursor-pointer border border-stone-800 flex flex-col justify-around items-center rounded-md lg:p-5 lg:py-16 git hover:bg-violet-600"
          onMouseEnter={() => handleFocus(3)}
          onMouseLeave={() => handleFocus(3)}
        >
          <BsPersonSquare size="50%" className="text-stone-800" />

          <p className="mt-4 font-semibold text-stone-800">CURRICULUM</p>
        </div>
      </div>
    </div>
  );
};
