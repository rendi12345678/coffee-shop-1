import React, { useRef } from "react";
import { createContext } from "use-context-selector";

export const TestimonialsContext = createContext(null);

function TestimonialsProvider({ children }) {
  const listRef = useRef();
  const itemRef = useRef();

  const contextValues = {
    listRef,
    itemRef,
  };

  return (
    <TestimonialsContext.Provider value={contextValues}>
      {children}
    </TestimonialsContext.Provider>
  );
}

export default TestimonialsProvider;
