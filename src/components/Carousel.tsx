import { useState } from "react";
interface Props {
  creations: Array<itemProps["item"]>;
}
export interface itemProps {
  item: {
    id: number;
    title: string;
    roleDescription: string;
    company: string;
    companyInfo: string;
    img: string;
    url: string;
  };
  key: number;
}
function MyCarousel({ creations }: Props) {
  const [index, setIndex] = useState(0);
  const findNextIndex = (index: number) => {
    if (index == creations.length - 1) {
      return 0;
    } else {
      return index + 1;
    }
  };
  const handleSelect = (index: number) => {
    setIndex(findNextIndex(index));
  };
  const currentItem: itemProps["item"] = creations[index];
  const nextItem: itemProps["item"] = creations[findNextIndex(index)];
  return (
    <div className="w-full h-96 border-2 border-[var(--primaryColour)] bg-[#f8f8f8] flex flex-col justify-between drop-shadow-[0px_9px_5px_#c9c9c9] p-[50px]">
      <div className="flex gap-2">
        {currentItem.img ? (
          <img
            className="max-w-[45px] max-h-[45px] rounded-lg"
            src={currentItem.img}
            alt={currentItem.company}
          />
        ) : (
          ""
        )}
        <div className="flex flex-col">
          <h2 className="text-[30pt] font-bold">
            {currentItem.title}{" "}
            {currentItem.company ? "@" + currentItem.company : ""}
          </h2>
          <p className="italic">{currentItem.companyInfo}</p>
        </div>
      </div>
      <p>{currentItem.roleDescription}</p>
      <div className="flex flex-col sm:flex-row justify-between gap-2">
        <a
          onClick={() => handleSelect(index)}
          href="javascript:void(0)"
          className="whitespace-nowrap py-2 px-4 text-black bg-white hover:bg-gray-100 border-2 border-gray-300"
        >
          Next: {nextItem.title}
        </a>
        <a
          href={currentItem.url}
          target="_blank"
          className="bg-[var(--primaryColour)] hover:bg-slate-800 border-gray-800 text-white px-4 py-2"
        >
          Take a look
        </a>
      </div>
    </div>
  );
}

export default MyCarousel;
