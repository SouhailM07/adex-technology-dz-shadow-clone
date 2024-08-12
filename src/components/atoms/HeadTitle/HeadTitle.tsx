export default function HeadTitle({
  title,
  subTitle,
  txt,
}: {
  title: string;
  subTitle: string;
  txt: string;
}) {
  return (
    <article className="text-center mx-auto w-[30rem]">
      <h1 className="text-mainRed ">{title}</h1>
      <h2 className="text-[2rem] leading-[2.5rem] mt-[0.3rem] mb-[2rem]">
        {subTitle}
      </h2>
      <p className=" leading-[2rem]">{txt}</p>
    </article>
  );
}
