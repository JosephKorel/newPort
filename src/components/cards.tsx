import { useRef, useState } from "react";
import { IoReturnDownBackOutline } from "react-icons/io5";

export const AboutMe = (): JSX.Element => {
  return (
    <div className="p-5 rounded-sm flex justify-between">
      <img
        src="./eu.png"
        className="bg-slate-300 rounded-3xl border border-stone-700 w-1/3 negativeShadow duration-300 ztrans"
      ></img>
      <div className="p-5 bg-slate-200 rounded-md border border-stone-700 w-[60%] flex flex-col justify-around myshadow duration-300 hover:-translate-x-6 hover:-translate-y-4">
        <div>
          <p className="font-semibold text-3xl italic">
            José Carlos, 22 anos, natural de Porto Alegre, Rio Grande do Sul
          </p>
          <p className="text-2xl italic my-2">
            Estudante de Análise e Desenvolvimento de Sistemas pela UNINTER
          </p>
        </div>
        <p className="text-xl indent-1">
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
    <div className="p-5 rounded-sm flex flex-col justify-center items-center">
      <div className="p-2 grid grid-cols-6 gap-10 w-full">
        <div className="p-5 duration-300 hover:-translate-x-2 hover:-translate-y-2 bg-stone-800 rounded-md border border-slate-100 flex flex-col justify-around items-center">
          <img src="./img/js.png" className="w-20"></img>
          <p className="italic text-center text-slate-100">JAVASCRIPT (ES6+)</p>
        </div>
        <div className="p-5 duration-300 hover:-translate-x-2 hover:-translate-y-2  bg-stone-800 rounded-md border border-slate-100 flex flex-col justify-between items-center">
          <img src="./img/ts.png" className="w-20 "></img>
          <p className="italic text-center text-slate-100 bg-red-200">
            TYPESCRIPT
          </p>
        </div>
        <div className="p-5 duration-300 hover:-translate-x-2 hover:-translate-y-2 bg-stone-800 rounded-md border border-slate-100 flex flex-col justify-between items-center">
          <img src="./img/react.png" className="w-20  animate-spin-slow"></img>
          <p className="italic text-center text-slate-100">REACT</p>
        </div>
        <div className="p-5 duration-300 hover:-translate-x-2 hover:-translate-y-2 bg-stone-800 rounded-md border border-slate-100 flex flex-col justify-between items-center">
          <img src="./img/git-icon.png" className="w-20 "></img>
          <p className="italic text-center text-slate-100">GIT</p>
        </div>
        <div className="p-5 duration-300 hover:-translate-x-2 hover:-translate-y-2 bg-stone-800 rounded-md border border-slate-100 flex flex-col justify-between items-center">
          <img src="./img/tailwind.png" className="w-20 "></img>
          <p className="italic text-center text-slate-100">TAILWIND CSS</p>
        </div>
        <div className="p-5 duration-300 hover:-translate-x-2 hover:-translate-y-2 bg-stone-800 rounded-md border border-slate-100 flex flex-col justify-between items-center">
          <img src="./img/firebase.png" className="w-20"></img>
          <p className="italic text-center text-slate-100">FIREBASE</p>
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
    <div className="p-5 rounded-sm flex flex-col justify-center items-center">
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
        <div className="grid grid-rows-2 grid-cols-3 gap-14">
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
              className={`rounded-md grayscale duration-200 ${
                onFocus[0] && "grayscale-0"
              }`}
            ></img>
            <p
              className={`text-xl text-center duration-200 border border-stone-800 p-2 mt-2 rounded-md bg-slate-200 font-semibold cursor-pointer  ${
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
              className={`rounded-md grayscale duration-200 ${
                onFocus[1] && "grayscale-0"
              }`}
            ></img>
            <p
              className={`text-xl text-center duration-200 border border-stone-800 p-2 mt-2 rounded-md bg-slate-200 font-semibold  ${
                onFocus[1] &&
                "bg-stone-800 text-violet-600 border-violet-600 font-bold"
              }`}
            >
              ENGLISH DICTIONARY
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
              className={`rounded-md grayscale duration-200 ${
                onFocus[2] && "grayscale-0"
              }`}
            ></img>
            <p
              className={`text-xl text-center duration-200 border border-stone-800 p-2 mt-2 rounded-md bg-slate-200 font-semibold  ${
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
              className={`rounded-md grayscale duration-200 ${
                onFocus[3] && "grayscale-0"
              }`}
            ></img>
            <p
              className={`text-xl text-center duration-200 border border-stone-800 p-2 mt-2 rounded-md bg-slate-200 font-semibold  ${
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
              className={`rounded-md grayscale duration-200 ${
                onFocus[4] && "grayscale-0"
              }`}
            ></img>
            <p
              className={`text-xl text-center duration-200 border border-stone-800 p-2 mt-2 rounded-md bg-slate-200 font-semibold  ${
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
              className={`rounded-md grayscale duration-200 ${
                onFocus[5] && "grayscale-0"
              }`}
            ></img>
            <p
              className={`text-xl text-center duration-200 border border-stone-800 p-2 mt-2 rounded-md bg-slate-200 font-semibold  ${
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
