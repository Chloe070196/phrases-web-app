type PhraseType = {
  id?:number;
  category: string;
  content: string;
  meaning: string;
  example: string;
  shortExample?: string;
};

type UserType = {
  id?: string;
  username?: string;
  token?: string;
};

type NewUserPhraseType = {
  phraseId: number;
  userId: number;
  status: string;
  timesAttempted: number;
  timesSeen: number;
  timesUsed: number;
};

type UserPhraseType = {
  phrase: PhraseType;
  user: {username: string};
  status: string;
  timesAttempted: number;
  timesSeen: number;
  timesUsed: number;
};

type TextType = {
  id?: number;
  content: string;
  userId: number;
  userPhraseId?: Array<number>;
}

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

export type {
  PhraseType,
  UserType,
  AuthContextType,
  NewPhrasesContextType,
  UserPhraseType,
  NewUserPhraseType,
  TextType,
};
