import React from "react";
import { useContextSelector } from "use-context-selector";
import { TestimonialsContext } from "../providers/TestimonialsProvider";

function useTestimonialsContext() {
  const contextValues = useContextSelector(
    TestimonialsContext,
    (state) => state,
  );

  return contextValues;
}
export default useTestimonialsContext;
