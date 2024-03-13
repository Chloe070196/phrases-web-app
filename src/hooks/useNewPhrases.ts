import { useContext } from "react";
import { NewPhrasesContext } from "../context/newPhrases";
import { PhraseType, UserType } from "../types";
import { postUserPhrase } from "../service/apiClient";

const useNewPhrases = () => {
  const { setNewPhrases, setOptionList, optionList } =
    useContext(NewPhrasesContext);

  const shuffle = (arr: Array<string>) => {
    return arr.sort(() => 0.5 - Math.random());
  };

  const onStart = (newPhrases: Array<PhraseType>) => {
    setNewPhrases(newPhrases);
    const optionsInOrder = newPhrases.map((phrase) =>
      phrase.content.toLowerCase()
    );
    const shuffledOptions = shuffle(optionsInOrder);
    setOptionList(shuffledOptions);
  };

  const showNOptions = (num: number, correctOption: string) => {
    const answerIndex = optionList?.indexOf(correctOption);
    const nOptions = optionList?.slice(answerIndex, num);
    return nOptions;
  };

  const checkAnswer = (displayedOption: string, newPhrase: PhraseType) => {
    return displayedOption === newPhrase.content.toLowerCase();
  };

  const saveNewUserPhrase = (
    user: UserType | null,
    newPhrase: PhraseType,
    attemptCounter: number
  ) => {
    if (!user || !user.id || !newPhrase.id) {
      return;
    }
    const newUserPhrase = {
      phraseId: newPhrase.id,
      userId: Number(user.id),
      timesSeen: 1,
      timesAttempted: attemptCounter,
      timesUsed: 0,
      status: "WIP",
    };
    return postUserPhrase(newUserPhrase);
  };

  return { onStart, showNOptions, checkAnswer, saveNewUserPhrase };
};
export { useNewPhrases };
