type PhraseType = { content: string; meaning: string; example: string, shortExample?: string };

type UserType = {
  id?: string;
  username?: string;
  token?: string;
};

type AuthContextType = {
  user: UserType | null;
  setUser: (user: UserType | null) => void;
};

type NewPhrasesContextType = {
  newPhrases: Array<PhraseType> | null;
  setNewPhrases: (newPhrases: Array<PhraseType> | null) => void;
  optionList: Array<string> | null;
  setOptionList: (optionList: Array<string> | null) => void;
};


export type { PhraseType, UserType, AuthContextType, NewPhrasesContextType };
