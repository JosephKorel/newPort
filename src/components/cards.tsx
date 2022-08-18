import { useState } from "react";
import { IoReturnDownBackOutline } from "react-icons/io5";
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
        className="bg-slate-300 dark:bg-stone-700 rounded-3xl border border-stone-700 w-1/2 sm:w-1/3 lg:w-1/3 xl:w-1/4 negativeShadow duration-300 ztrans"
      ></img>
      <div className="p-2 lg:p-6 2xl:py-10 bg-slate-200 dark:bg-stone-800 rounded-md border border-stone-700 w-full 2xl:w-2/3 flex flex-col justify-around myshadow duration-300 hover:-translate-x-6 hover:-translate-y-4 text-stone-800 dark:text-slate-100">
        <div>
          <p className="font-semibold text-lg lg:text-2xl xl:text-3xl italic">
            José Carlos, 22 anos, natural de Porto Alegre, Rio Grande do Sul
          </p>
          <p className="text-base lg:text-xl xl:text-2xl italic my-2">
            Estudante de Análise e Desenvolvimento de Sistemas pela UNINTER
          </p>
        </div>
        <p className="text-sm lg:text-base xl:text-lg indent-1 2xl:mt-10">
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
      <div className="p-2 grid grid-rows-3 grid-cols-2 gap-5 lg:grid-cols-6 lg:grid-rows-1 lg:gap-10 w-full md:w-5/6 lg:w-full 2xl:w-5/6">
        <div className="lg:p-5 sm:py-3 duration-300 hover:scale-110 bg-slate-200 dark:bg-stone-800 dark:text-slate-100 dark:border-slate-100 dark:hover:bg-stone-900 rounded-md border-2 border-stone-800 flex flex-col justify-around hover:border-royal hover:bg-stone-800 items-center js hover:text-slate-100 text-stone-800">
          <img src="./img/js.png" className="w-20"></img>
          <p className="italic text-center font-semibold p-2">
            JAVASCRIPT (ES6+)
          </p>
        </div>
        <div className="lg:p-5 duration-300 hover:scale-110  bg-slate-200 dark:bg-stone-800 dark:text-slate-100 dark:border-slate-100 dark:hover:bg-stone-900 rounded-md border-2 border-stone-800 flex flex-col justify-around hover:border-royal hover:bg-stone-800 items-center ts hover:text-slate-100 text-stone-800">
          <img src="./img/ts.png" className="w-20 "></img>
          <p className="italic text-center font-semibold p-2">TYPESCRIPT</p>
        </div>
        <div className="lg:p-5 duration-300 hover:scale-110 bg-slate-200 dark:bg-stone-800 dark:text-slate-100 dark:border-slate-100 dark:hover:bg-stone-900 rounded-md border-2 border-stone-800 flex flex-col justify-around hover:border-royal hover:bg-stone-800 items-center react hover:text-slate-100 text-stone-800">
          <img src="./img/react.png" className="w-20  animate-spin-slow"></img>
          <p className="italic text-center font-semibold p-2">REACT</p>
        </div>
        <div className="lg:p-5 duration-300 hover:scale-110 bg-slate-200 dark:bg-stone-800 dark:text-slate-100 dark:border-slate-100 dark:hover:bg-stone-900 rounded-md border-2 border-stone-800 flex flex-col justify-around hover:border-royal hover:bg-stone-800 items-center git hover:text-slate-100 text-stone-800">
          <img src="./img/git-icon.png" className="w-20 "></img>
          <p className="italic text-center font-semibold p-2">GIT</p>
        </div>
        <div className="lg:p-5 duration-300 hover:scale-110 bg-slate-200 dark:bg-stone-800 dark:text-slate-100 dark:border-slate-100 dark:hover:bg-stone-900 rounded-md border-2 border-stone-800 flex flex-col justify-around hover:border-royal hover:bg-stone-800 items-center tail hover:text-slate-100 text-stone-800">
          <img src="./img/tailwind.png" className="w-20 "></img>
          <p className="italic text-center font-semibold p-2">TAILWIND CSS</p>
        </div>
        <div className="lg:p-5 duration-300 hover:scale-110 bg-slate-200 dark:bg-stone-800 dark:text-slate-100 dark:border-slate-100 dark:hover:bg-stone-900 rounded-md border-2 border-stone-800 flex flex-col justify-around hover:border-royal hover:bg-stone-800 items-center fire hover:text-slate-100 text-stone-800">
          <img src="./img/firebase.png" className="w-20"></img>
          <p className="italic text-center font-semibold p-2">FIREBASE</p>
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
      <div className="flex flex-col justify-center">
        <div className="flex justify-center">
          <video
            src="./videos/diet_preview.mp4"
            autoPlay
            className="rounded-md w-2/3 sm:w-1/2 hover:translate-x-3 hover:-translate-y-3 duration-200"
          ></video>
        </div>
        <div className="p-2 rounded-md bg-slate-200 dark:bg-stone-800 text-stone-800 dark:text-slate-100 border border-stone-800 negativeShadow mt-2 lg:w-2/3 m-auto hover:translate-x-3 hover:-translate-y-3 duration-200">
          <p className="font-bold text-base xl:text-lg">
            <span className="text-royal">♦ </span> React
          </p>
          <div className="w-full h-1 rounded-full bg-stone-800 dark:bg-gold my-1"></div>
          <p className="text-sm xl:text-lg indent-1">
            Aplicação para calcular as calorias ingeridas diariamente. Como
            fonte de informações foi utlizada a Tabela de Composição de
            Alimentos (TACO). Depois de escolhido o alimento e a quantidade, é
            mostrada as quantidades de carboidratos, proteínas e gorduras.
            Inserindo algumas informações pessoais são obtidos valores
            recomendados de ingestão diária de calorias e macronutrientes. Além
            disso, há uma seção para ver cada alimento separadamente e sua
            composição.
          </p>
          <a href="https://josephkorel.github.io/diet-app/" target="_blank">
            <button className="p-2 bg-royal dark:bg-gem dark:hover:bg-gem-600 font-bold text-slate-100 rounded-md mt-2 text-sm hover:bg-royal-600 duration-200">
              ACESSAR
            </button>
          </a>
        </div>
      </div>
    );
  };

  const Dictionary = (): JSX.Element => {
    return (
      <div className="flex flex-col justify-center">
        <div className="flex justify-center">
          <video
            src="./videos/dictionary_preview.mp4"
            autoPlay
            className="rounded-md w-2/3 sm:w-1/2 hover:translate-x-3 hover:-translate-y-3 duration-200"
          ></video>
        </div>
        <div className="p-2 rounded-md bg-slate-200 dark:bg-stone-800 text-stone-800 dark:text-slate-100 border border-stone-800 negativeShadow mt-2 lg:w-2/3 m-auto hover:translate-x-3 hover:-translate-y-3 duration-200">
          <p className="font-bold text-base xl:text-lg">
            <span className="text-royal">♦ </span>React
          </p>
          <div className="w-full h-1 rounded-full bg-stone-800 dark:bg-gold my-1"></div>
          <p className="text-sm xl:text-lg indent-1">
            Dicionário inglês-inglês que mostra definição, frases de exemplo e a
            pronúncia da palavra. É possível salvar palavras e posteriormente
            filtrá-las por substantivos, verbos e adjetivos. Além disso, é
            possível colar um texto e pesquisar cada palavra clicando na mesma.
          </p>
          <a href="https://josephkorel.github.io/dictionary/" target="_blank">
            <button className="p-2 bg-royal dark:bg-gem dark:hover:bg-gem-600 font-bold text-slate-100 rounded-md mt-2 text-sm hover:bg-royal-600 duration-200">
              ACESSAR
            </button>
          </a>
        </div>
      </div>
    );
  };

  const BlogApp = (): JSX.Element => {
    return (
      <div className="flex flex-col justify-center">
        <div className="flex justify-center">
          <video
            src="./videos/blog_preview.mkv"
            autoPlay
            className="rounded-md w-2/3 sm:w-1/2 hover:translate-x-3 hover:-translate-y-3 duration-200"
          ></video>
        </div>
        <div className="p-2 rounded-md bg-slate-200 dark:bg-stone-800 text-stone-800 dark:text-slate-100 border border-stone-800 negativeShadow mt-2 lg:w-2/3 m-auto hover:translate-x-3 hover:-translate-y-3 duration-200">
          <p className="font-bold text-base xl:text-lg">
            <span className="text-royal">♦ </span> React{" "}
            <span className="text-royal">♦ </span> Firebase{" "}
            <span className="text-royal">♦ </span> Tailwind CSS
          </p>
          <div className="w-full h-1 rounded-full bg-stone-800 dark:bg-gold my-1 text-sm"></div>
          <p className="text-sm xl:text-lg indent-1">
            Blog que possui autenticação por email e conta do Google. Uma vez
            logado é possível criar postagens e curtir e comentar outras
            postagens.
          </p>
          <a href="https://josephkorel.github.io/blog-app/" target="_blank">
            <button className="p-2 bg-royal dark:bg-gem dark:hover:bg-gem-600 font-bold text-slate-100 rounded-md mt-2 text-sm hover:bg-royal-600 duration-200">
              ACESSAR
            </button>
          </a>
        </div>
      </div>
    );
  };

  const ChatApp = (): JSX.Element => {
    return (
      <div className="flex flex-col justify-center">
        <div className="flex justify-center">
          <video
            src="./videos/chat_preview.mp4"
            autoPlay
            className="rounded-md w-2/3 sm:w-1/2 hover:translate-x-3 hover:-translate-y-3 duration-200"
          ></video>
        </div>
        <div className="p-2 rounded-md bg-slate-200 dark:bg-stone-800 text-stone-800 dark:text-slate-100 border border-stone-800 negativeShadow mt-2 lg:w-2/3 m-auto hover:translate-x-3 hover:-translate-y-3 duration-200">
          <p className="font-bold text-base xl:text-lg">
            <span className="text-royal">♦ </span> React{" "}
            <span className="text-royal">♦ </span> Typescript{" "}
            <span className="text-royal">♦ </span> Firebase{" "}
            <span className="text-royal">♦ </span> Tailwind CSS{" "}
          </p>
          <div className="w-full h-1 rounded-full bg-stone-800 dark:bg-gold my-1"></div>
          <p className="text-sm xl:text-lg indent-1">
            Aplicação de chat em tempo real que utiliza o Firebase. É possível
            autenticar com email e senha, número de telefone e conta do google.
            É possível também criar grupos.
          </p>
          <a href="https://josephkorel.github.io/FlyChat" target="_blank">
            <button className="p-2 bg-royal dark:bg-gem dark:hover:bg-gem-600 font-bold text-slate-100 rounded-md mt-2 text-sm hover:bg-royal-600 duration-200">
              ACESSAR
            </button>
          </a>
        </div>
      </div>
    );
  };

  const Platform = (): JSX.Element => {
    return (
      <div className="flex-col justify-center">
        <div className="flex justify-center">
          <img
            src="./img/platform.png"
            className="rounded-md w-2/3 sm:w-1/2 hover:translate-x-3 hover:-translate-y-3 duration-200"
          ></img>
        </div>
        <div className="p-2 rounded-md bg-slate-200 dark:bg-stone-800 text-stone-800 dark:text-slate-100 border border-stone-800 negativeShadow mt-2 lg:w-2/3 m-auto hover:translate-x-3 hover:-translate-y-3 duration-200">
          <p className="font-bold text-base xl:text-lg">
            <span className="text-royal">♦ </span> React{" "}
            <span className="text-royal">♦ </span> Typescript{" "}
            <span className="text-royal">♦ </span> Firebase{" "}
            <span className="text-royal">♦ </span> Tailwind CSS{" "}
          </p>
          <div className="w-full h-1 rounded-full bg-stone-800 dark:bg-gold my-1"></div>
          <p className="text-sm xl:text-lg indent-1">
            Plataforma feita para uma empresa num projeto freelancer. Há três
            tipos de usuários, administradores, coordenadores e profissionais
            terceirizados. As contas de coordenadores e profissionais são
            criadas pelos administradores. Uma vez criada a conta o usuário faz
            login pela primeira vez e cria uma senha para si. Os administradores
            delegam tarefas àos profissionais terceirizados. Estes tem um tempo
            limite para responder às tarefas.
          </p>
        </div>
      </div>
    );
  };

  const Quizzer = (): JSX.Element => {
    return (
      <div className="flex-col justify-center">
        <div className="flex justify-center">
          <video
            src="./videos/quizzer_preview.mp4"
            autoPlay
            className="rounded-md h-64 sm:h-80 md:h-96 lg:h-[28rem] 2xl:h-[34rem] hover:translate-x-3 hover:-translate-y-3 duration-200"
          ></video>
        </div>
        <div className="p-2 rounded-md bg-slate-200 dark:bg-stone-800 text-stone-800 dark:text-slate-100 border border-stone-800 negativeShadow mt-2 lg:w-2/3 m-auto hover:translate-x-3 hover:-translate-y-3 duration-200">
          <p className="font-bold text-base xl:text-lg">
            <span className="text-royal">♦ </span> React{" "}
            <span className="text-royal">♦ </span> React Native{" "}
            <span className="text-royal">♦ </span> Typescript{" "}
            <span className="text-royal">♦ </span> Firebase{" "}
            <span className="text-royal">♦ </span> Tailwind CSS{" "}
          </p>
          <div className="w-full h-1 rounded-full bg-stone-800 dark:bg-gold my-1"></div>
          <p className="text-sm xl:text-lg indent-1">
            Projeto que decidi me arriscar no React Native. A ideia é uma rede
            social de enquetes e perguntas. É possível fazer perguntas de "Sim
            ou não", enquete e escala de 0 a 10. As perguntas que aparecem no
            feed são de pessoas que você segue. As perguntas possuem tags, então
            é possível pesquisar por perguntas com alguma tag específica.
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
            className="bg-royal dark:bg-gem text-slate-100 p-2 rounded-md duration-200 hover:bg-slate-400 dark:hover:bg-gem-600 self-start mb-2"
          >
            <IoReturnDownBackOutline size={24} />
          </button>
          <div className="">{show}</div>
        </>
      ) : (
        <div className="lg:p-2 grid grid-rows-3 grid-cols-2 gap-5 justify-items-center sm:grid-rows-2 sm:grid-cols-3 lg:grid-rows-2 lg:grid-cols-3 lg:gap-10 xl:gap-14">
          <div
            className={`cursor-pointer duration-200 lg:w-5/6 ${
              onFocus[0] && "scale-105"
            }`}
            onClick={() => showElement(<Dictionary />)}
            onMouseEnter={() => handleFocus(0)}
            onMouseLeave={() => handleFocus(0)}
          >
            <img
              src="./img/dictionary.png"
              className={`rounded-md border border-stone-800 duration-200 ${
                onFocus[0] ? "grayscale-0" : "lg:grayscale"
              }`}
            ></img>
            <p
              className={`text-base lg:text-lg text-center duration-200 border border-slate-100 p-1 mt-1 lg:p-2 lg:mt-2 rounded-md bg-royal dark:bg-gem text-slate-100 font-semibold cursor-pointer  ${
                onFocus[0] &&
                "bg-stone-800 text-slate-100 border-slate-100 font-bold"
              }`}
            >
              DICTIONARY
            </p>
          </div>
          <div
            onClick={() => showElement(<DietApp />)}
            className={`cursor-pointer duration-200 lg:w-5/6 ${
              onFocus[1] && "scale-105"
            }`}
            onMouseEnter={() => handleFocus(1)}
            onMouseLeave={() => handleFocus(1)}
          >
            <img
              src="./img/diet.png"
              className={`rounded-md border border-stone-800 duration-200 ${
                onFocus[1] ? "grayscale-0" : "lg:grayscale"
              }`}
            ></img>
            <p
              className={`text-base lg:text-lg text-center duration-200 border border-slate-100  p-1 mt-1 lg:p-2 lg:mt-2 rounded-md bg-royal dark:bg-gem text-slate-100 font-semibold  ${
                onFocus[1] &&
                "bg-stone-800 text-slate-100 border-slate-100 font-bold"
              }`}
            >
              DIET APP
            </p>
          </div>
          <div
            onClick={() => showElement(<BlogApp />)}
            className={`cursor-pointer duration-200 lg:w-5/6 ${
              onFocus[2] && "scale-105"
            }`}
            onMouseEnter={() => handleFocus(2)}
            onMouseLeave={() => handleFocus(2)}
          >
            <img
              src="./img/blog.png"
              className={`rounded-md border border-stone-800 duration-200 ${
                onFocus[2] ? "grayscale-0" : "lg:grayscale"
              }`}
            ></img>
            <p
              className={`text-base lg:text-lg text-center duration-200 border border-slate-100  p-1 mt-1 lg:p-2 lg:mt-2 rounded-md bg-royal dark:bg-gem text-slate-100 font-semibold  ${
                onFocus[2] &&
                "bg-stone-800 text-slate-100 border-slate-100 font-bold"
              }`}
            >
              PERSONAL BLOG
            </p>
          </div>
          <div
            onClick={() => showElement(<ChatApp />)}
            className={`cursor-pointer duration-200 lg:w-5/6 ${
              onFocus[3] && "scale-105"
            }`}
            onMouseEnter={() => handleFocus(3)}
            onMouseLeave={() => handleFocus(3)}
          >
            <img
              src="./img/chat.png"
              className={`rounded-md border border-stone-800 duration-200 ${
                onFocus[3] ? "grayscale-0" : "lg:grayscale"
              }`}
            ></img>
            <p
              className={`text-base lg:text-lg text-center duration-200 border border-slate-100  p-1 mt-1 lg:p-2 lg:mt-2 rounded-md bg-royal dark:bg-gem text-slate-100 font-semibold  ${
                onFocus[3] &&
                "bg-stone-800 text-slate-100 border-slate-100 font-bold"
              }`}
            >
              CHAT
            </p>
          </div>
          <div
            onClick={() => showElement(<Platform />)}
            className={`cursor-pointer duration-200 lg:w-5/6 ${
              onFocus[4] && "scale-105"
            }`}
            onMouseEnter={() => handleFocus(4)}
            onMouseLeave={() => handleFocus(4)}
          >
            <img
              src="./img/platform.png"
              className={`rounded-md border border-stone-800 duration-200 ${
                onFocus[4] ? "grayscale-0" : "lg:grayscale"
              }`}
            ></img>
            <p
              className={`text-base lg:text-lg text-center duration-200 border border-slate-100  p-1 mt-1 lg:p-2 lg:mt-2 rounded-md bg-royal dark:bg-gem text-slate-100 font-semibold  ${
                onFocus[4] &&
                "bg-stone-800 text-slate-100 border-slate-100 font-bold"
              }`}
            >
              PLATAFORMA
            </p>
          </div>
          <div
            onClick={() => showElement(<Quizzer />)}
            className={`cursor-pointer duration-200 lg:w-5/6 ${
              onFocus[5] && "scale-105"
            }`}
            onMouseEnter={() => handleFocus(5)}
            onMouseLeave={() => handleFocus(5)}
          >
            <img
              src="./img/quizzer.png"
              className={`rounded-md border border-stone-800 lg:border-none duration-200 ${
                onFocus[5] ? "grayscale-0" : "lg:grayscale"
              }`}
            ></img>
            <p
              className={`text-base lg:text-lg text-center duration-200 border border-slate-100 p-1 mt-1 lg:p-2 lg:mt-2 rounded-md bg-royal dark:bg-gem text-slate-100 font-semibold  ${
                onFocus[5] &&
                "bg-stone-800 text-slate-100 border-slate-100 font-bold"
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
  return (
    <div className="flex flex-col justify-between sm:gap-10 gap-20">
      <div className="p-1 bg-royal rounded-md border border-stone-700 myshadow duration-300 hover:-translate-x-6 hover:-translate-y-4 w-fit m-auto">
        <p className="font-semibold p-2 text-xl lg:text-3xl italic text-center text-slate-100">
          ENTRE EM CONTATO COMIGO
        </p>
      </div>
      <div className="p-2 grid grid-rows-2 grid-cols-2 gap-5 justify-items-center lg:flex lg:justify-around lg:items-center">
        <a
          href="https://www.linkedin.com/in/josecretchepare/"
          target="_blank"
          className="bg-gold dark:bg-gem dark:text-slate-100 dark:hover:bg-stone-800 w-full sm:w-2/3 lg:w-1/6 duration-300 hover:scale-110 cursor-pointer border border-stone-800 flex flex-col justify-around items-center rounded-md lg:p-5 lg:py-16 js hover:bg-stone-800 text-stone-800 hover:text-slate-100"
        >
          <BsLinkedin size="50%" />
          <p className="mt-4 font-semibold">LINKEDIN</p>
        </a>
        <a
          href="mailto:jcjosecarlos03@gmail.com"
          className="bg-gold dark:bg-gem dark:text-slate-100 dark:hover:bg-stone-800 w-full sm:w-2/3 lg:w-1/6 duration-300 hover:scale-110 cursor-pointer border border-stone-800 flex flex-col justify-around items-center rounded-md lg:p-5 lg:py-16 ts hover:bg-stone-800 text-stone-800 hover:text-slate-100"
        >
          <BsEnvelopeFill size="50%" />
          <p className="mt-4 font-semibold">EMAIL</p>
        </a>
        <a
          href="https://github.com/JosephKorel"
          target="_blank"
          className="bg-gold dark:bg-gem dark:text-slate-100 dark:hover:bg-stone-800 w-full sm:w-2/3 lg:w-1/6 duration-300 hover:scale-110 cursor-pointer border border-stone-800 flex flex-col justify-around items-center rounded-md lg:p-5 lg:py-16 react hover:bg-stone-800 text-stone-800 hover:text-slate-100"
        >
          <BsGithub size="50%" />
          <p className="mt-4 font-semibold">GITHUB</p>
        </a>
        <a
          href="./CV.pdf"
          download
          className="bg-gold dark:bg-gem dark:text-slate-100 dark:hover:bg-stone-800 w-full sm:w-2/3 lg:w-1/6 duration-300 hover:scale-110 cursor-pointer border border-stone-800 flex flex-col justify-around items-center rounded-md lg:p-5 lg:py-16 git hover:bg-stone-800 text-stone-800 hover:text-slate-100"
        >
          <BsPersonSquare size="50%" />
          <p className="mt-4 font-semibold">CURRICULUM</p>
        </a>
      </div>
    </div>
  );
};
