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

export type { PhraseType, UserType, AuthContextType };
