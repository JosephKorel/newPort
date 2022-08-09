export const AboutMe = (): JSX.Element => {
  return (
    <div className="p-5 rounded-sm flex justify-between items-center">
      <img src="./eu.png" className="bg-slate-300 rounded-md"></img>
      <p className="text-center flex-1 p-2 bg-slate-200 rounded-sm">
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia, looked up one of the more obscure
        Latin words, consectetur, from a Lorem Ipsum passage, and going through
        the cites of the word in classical literature, discovered the
        undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
        of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
        Cicero, written in 45 BC. This book is a treatise on the theory of
        ethics, very popular during the Renaissance. The first line of Lorem
        Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section
        1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is
        reproduced below for those interested. Sections 1.10.32 and 1.10.33 from
        "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their
        exact original form, accompanied by English versions from the 1914
        translation by H. Rackham.
      </p>
    </div>
  );
};

export const Skills = (): JSX.Element => {
  return (
    <div className="p-5 rounded-sm flex flex-col justify-center items-center">
      <div className="grid grid-rows-1 grid-cols-5">
        <img src="./img/js.png" className="w-20"></img>
        <img src="./img/react.png" className="w-20"></img>
        <img src="./img/git-icon.png" className="w-20"></img>
        <img src="./img/tailwind.png" className="w-20"></img>
        <img src="./img/firebase.png" className="w-20"></img>
      </div>
      <div className="w-full h-10 my-5"></div>
      <p className="text-center p-2 bg-slate-200 rounded-sm">
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia, looked up one of the more obscure
        Latin words, consectetur, from a Lorem Ipsum passage, and going through
        the cites of the word in classical literature, discovered the
        undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
        of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
        Cicero, written in 45 BC. This book is a treatise on the theory of
        ethics, very popular during the Renaissance. The first line of Lorem
        Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section
        1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is
        reproduced below for those interested. Sections 1.10.32 and 1.10.33 from
        "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their
        exact original form, accompanied by English versions from the 1914
        translation by H. Rackham.
      </p>
    </div>
  );
};
