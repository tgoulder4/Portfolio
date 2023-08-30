import { CarouselItem, CarouselItemProps } from "./CarouselItem";
function Carousel(items: Array<CarouselItemProps>) {
  return (
    <>
      <div className="w-100 h-100 border-2 border-[var(--primary)]">
        {items.map((item) => {
          return CarouselItem(item);
        })}
      </div>
    </>
  );
}

export default Carousel;
