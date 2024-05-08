import { useState } from "react";
import useWordsExtractor from "../../hooks/useWordsExtractor";
import Button from "../common/Button";

const WhyWeAreSpecialListItem = ({
  baseClassName,
  image,
  name,
  description,
}) => {
  const extractedDescription = useWordsExtractor(description, 6);
  const [readMore, setReadMore] = useState(false);

  const renderDescription = () => {
    if (!readMore) return extractedDescription;
    return description;
  };

  const toggleReadMore = () => {
    setReadMore(!readMore);
  };

  return (
    <div className={`${baseClassName}__item`}>
      <img src={image} alt={name} className={`${baseClassName}__image`} />
      <div className={`${baseClassName}__info`}>
        <h5 className={`${baseClassName}__title`}>{name}</h5>
        <p className={`${baseClassName}__description`}>
          {renderDescription()}{" "}
          <Button
            className={`${baseClassName}__read-more-button`}
            type="button"
            variant="tertiary"
            size="small"
            onClick={toggleReadMore}
          >
            {!readMore ? "Read more..." : "Read less"}
          </Button>
        </p>
      </div>
    </div>
  );
};

export default WhyWeAreSpecialListItem;
