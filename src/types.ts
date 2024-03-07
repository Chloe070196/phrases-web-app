type PhraseType = { content: string; meaning: string; example: string };

type UserInContextType = {
  id?: string;
  username?: string;
  token?: string;
};

type AuthContextType = {
  user: UserInContextType | null;
  setUser: (user: UserInContextType | null) => void;
};

export type { PhraseType, UserInContextType, AuthContextType };
