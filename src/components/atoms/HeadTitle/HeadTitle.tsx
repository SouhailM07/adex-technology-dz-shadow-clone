export default function HeadTitle({
  title,
  subTitle,
  txt,
  middleImg,
  customStyles,
}: {
  title: string;
  subTitle: string;
  txt: string;
  middleImg?: string;
  customStyles?: string;
}) {
  return (
    <article className={`text-center mx-auto w-[30rem] ${customStyles}`}>
      <h1 className="text-mainRed ">{title}</h1>
      <h2 className="text-[2rem] leading-[2.5rem] mt-[0.3rem] mb-[2rem]">
        {subTitle}
      </h2>
      {middleImg && (
        <img
          className="mx-auto mb-[2rem] rounded-lg"
          src={middleImg}
          alt="img"
        />
      )}
      <p className=" leading-[2rem]">{txt}</p>
    </article>
  );
}
