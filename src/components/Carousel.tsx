import { CarouselItem, CarouselItemProps } from "./CarouselItem";
interface Props {
  items: Array<CarouselItemProps["item"]>;
}

function Carousel({ items }: Props) {
  return (
    <>
      {/* BOOTSTRAP CAROUSEL */}
      <div
        id="carouselExampleIndicators"
        className="carousel slide w-full h-96 border-2 border-[var(--primaryColour)] bg-[#f8f8f8] drop-shadow-[0px_9px_5px_#c9c9c9] p-[50px]"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner h-100">
          {items.map((item: CarouselItemProps["item"], index: number) => {
            return (
              <CarouselItem key={item.id} item={item} active={index == 0} />
            );
          })}{" "}
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon text-black"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      {/* END OF BOOTSTRAP CAROUSEL */}
      {/* <div className="w-full h-full border-2 border-[var(--primaryColour)] bg-[#f8f8f8]">
        {items.map((item: CarouselItemProps["item"]) => {
          return <CarouselItem key={item.id} item={item} />;
        })}
      </div> */}
    </>
  );
}

export default Carousel;
