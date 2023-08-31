export type CarouselItemProps = {
  active: boolean;
  item: {
    id: number;
    title: string;
    roleDescription: string;
    company: string;
    companyInfo: string;
    img: string;
    url: string;
    nextItemTitle: string;
  };
  key: number;
};
export function CarouselItem(Props: CarouselItemProps) {
  const { item, active } = Props;
  return (
    <>
      <div
        className={`carousel-item flex-col justify-between h-100 first-line:${
          active ? "active flex" : ""
        }`}
      >
        <span>
          <img src={item.img} alt={item.company} />
          <div className="flex flex-col">
            <h2 className="text-[30pt] font-bold">
              {item.title} {item.company ? "@" + item.company : ""}
            </h2>
            <p className="italic">{item.companyInfo}</p>
          </div>
        </span>
        <p>{item.roleDescription}</p>
        <div className="flex justify-between">
          <div className="flex">
            <a
              href={item.url}
              target="_blank"
              className="bg-[var(--primaryColour)] hover:bg-slate-800 border-gray-800 text-white px-4 py-2"
            >
              Take a look
            </a>
          </div>
          <a className="whitespace-nowrap py-2 px-4 text-black bg-white hover:bg-gray-100 border-2 border-gray-300">
            Next: {item.nextItemTitle}
          </a>
        </div>
      </div>
    </>
  );
}
