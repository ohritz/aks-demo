import { makeVar, useReactiveVar } from "@apollo/client";
import { useCallback } from "react";

const selectedCategories = makeVar<string[]>([]);

export const useSelectedCategories = () => {
  const onChangeHandler = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const currentSelection = selectedCategories();
      const { checked, value } = event.target;
      if (checked) {
        selectedCategories([...currentSelection, value]);
      } else {
        selectedCategories(currentSelection.filter((id) => id !== value));
      }
    },
    []
  );

  return {
    currentSelection: useReactiveVar(selectedCategories),
    onChangeHandler,
  };
};
