import { useRef } from "react";
import useTestimonialsContext from "./useTestimonialsContext";

const useTestimonialsScroll = () => {
  const { itemRef, listRef } = useTestimonialsContext();

  const getAmountOfScroll = (direction) => {
    return itemRef.current.clientWidth * direction;
  };

  const goToNext = () => {
    listRef.current?.scrollBy({
      left: getAmountOfScroll(1),
      behavior: "smooth",
    });
  };
  const goToPrev = () => {
    listRef.current?.scrollBy({
      left: getAmountOfScroll(-1),
      behavior: "smooth",
    });
  };

  return { goToPrev, goToNext };
};

export default useTestimonialsScroll;
