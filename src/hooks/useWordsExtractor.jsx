import { useState, useEffect } from "react";

function useWordsExtractor(initialString, amountOfWords) {
  const [words, setWords] = useState([]);

  useEffect(() => {
    if (typeof initialString !== "string") return;

    const extractWords = () => {
      const wordArray = initialString.split(" ");
      const extractedWords = wordArray.slice(0, amountOfWords);
      setWords(extractedWords);
    };

    extractWords();
  }, [initialString, amountOfWords]);

  return words.join(" ");
}

export default useWordsExtractor;
