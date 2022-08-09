export const AboutMe = (): JSX.Element => {
  return (
    <div className="p-5 rounded-sm flex justify-between">
      <img
        src="./eu.png"
        className="bg-slate-300 rounded-3xl border border-stone-700 w-1/3 negativeShadow"
      ></img>
      <div className="p-5 bg-slate-200 rounded-md border border-stone-700 w-[60%] flex flex-col justify-around myshadow">
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
      <div className="p-2 flex justify-around items-center border-l-4 border rounded-lg border-stone-800 bg-slate-300">
        <img src="./img/js.png" className="w-20"></img>
        <img src="./img/ts.png" className="w-20"></img>
        <img src="./img/react.png" className="w-20"></img>
        <img src="./img/git-icon.png" className="w-20"></img>
        <img src="./img/tailwind.png" className="w-20"></img>
        <img src="./img/firebase.png" className="w-20"></img>
      </div>
      <div className="w-full h-10 my-5"></div>
      <div className="text-center p-2 bg-slate-200 rounded-md negativeShadow">
        <p className="font-bold text-lg">
          JavaScript (ES6+) <span className="text-blue-500 text-xl">|</span>{" "}
          Typescript <span className="text-blue-500 text-xl">|</span> React{" "}
          <span className="text-blue-500 text-xl">|</span> React Native{" "}
          <span className="text-blue-500 text-xl">|</span> Git{" "}
          <span className="text-blue-500 text-xl">|</span> Tailwind CSS{" "}
          <span className="text-blue-500 text-xl">|</span> Firebase
        </p>
        <p>
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
    </div>
  );
};

export const Projects = (): JSX.Element => {
  return (
    <div className="p-5 rounded-sm flex flex-col justify-center items-center">
      <div className="grid grid-rows-2 grid-cols-3">
        <div className="w-20 h-20 bg-violet-500 border border-black rounded-md">
          MACRO
        </div>
        <div className="w-20 h-20 bg-violet-500 border border-black rounded-md">
          DICTIONARY
        </div>
        <div className="w-20 h-20 bg-violet-500 border border-black rounded-md">
          BLOG
        </div>
        <div className="w-20 h-20 bg-violet-500 border border-black rounded-md">
          CHAT
        </div>
        <div className="w-20 h-20 bg-violet-500 border border-black rounded-md">
          PLATAFORMA
        </div>
        <div className="w-20 h-20 bg-violet-500 border border-black rounded-md">
          QUIZZER
        </div>
      </div>
    </div>
  );
};
