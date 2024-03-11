import React, { createContext, useState, ReactNode } from "react";
import type { NewPhrasesContextType, PhraseType } from "../types";

const NewPhrasesContext = createContext<NewPhrasesContextType>({newPhrases: null, setNewPhrases: () => {}, optionList: null, setOptionList: () => {}});

const NewPhrasesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [newPhrases, setNewPhrases] = useState<Array<PhraseType> | null>(null);
  const [optionList, setOptionList] = useState<Array<string> | null>(null);

  const contextValue: NewPhrasesContextType = {
    newPhrases,
    setNewPhrases,
    optionList, 
    setOptionList
  };

  return React.createElement(
    NewPhrasesContext.Provider,
    { value: contextValue },
    children
  );
};

export { NewPhrasesContext, NewPhrasesProvider };
