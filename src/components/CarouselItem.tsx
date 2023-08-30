export type CarouselItemProps = {
  title: string;
  roleDescription: string;
  company: string;
  companyInfo: string;
  img: string;
  url: string;
  nextItemTitle: string;
};
export function CarouselItem(item: CarouselItemProps) {
  return (
    <>
      <div className="carousel-item">
        <span>
          <img src={item.img} alt={item.company} />
          <div className="flex flex-col">
            <h2>
              {item.title} @{item.company}
            </h2>
            <p className="italic">{item.companyInfo}</p>
          </div>
        </span>
        <p>{item.roleDescription}</p>
        <div className="flex justify-between">
          <div className="flex">
            <button>Go to site</button>
            <button>See more</button>
          </div>
          <button>Next project: {item.nextItemTitle}</button>
        </div>
      </div>
    </>
  );
}
