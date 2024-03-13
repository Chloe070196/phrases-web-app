import { useContext } from "react";
import { NewPhrasesContext } from "../context/newPhrases";
import { PhraseType } from "../types";

const useNewPhrases = () => {
  const { setNewPhrases, setOptionList, optionList } = useContext(NewPhrasesContext);

  const shuffle = (arr: Array<string>) => {
    return arr.sort(() => 0.5 - Math.random())
  }

  const onStart = (newPhrases: Array<PhraseType>) => {
    setNewPhrases(newPhrases);
    const optionsInOrder = newPhrases.map((phrase) => phrase.content.toLowerCase());
    const shuffledOptions = shuffle(optionsInOrder)
    setOptionList(shuffledOptions)
  };

  const showNOptions = (num: number, correctOption: string) => {
    const answerIndex = optionList?.indexOf(correctOption)
    const nOptions = optionList?.slice(answerIndex, num)
    return nOptions
  }
  
  const checkAnswer = (displayedOption: string, newPhrase: PhraseType) => {
    return displayedOption === newPhrase.content.toLowerCase()
  }

  return { onStart, showNOptions, checkAnswer };
};
export { useNewPhrases };
