interface ItemNews {
  id: number;
  title: string;
  date: string;
  text: string;
  imageSrc: string;
}

interface Registry {
  id: number;
  name: string;
  code: string;
  classSW: string;
  dataReg: string;
  link: string;
  [index: string]: number | string;
}

interface SortConfig {
  key: string;
  direction: string;
}

interface User {
  id: number;
  firstName: string;
  lastName?: string;
  patronymic?: string;
  country?: string;
  city?: string;
  phone?: string;
  photo?: string;
  password: string;
}

interface AuthState {
  isAuth: boolean;
  currentUser: User | null;
}

type FormValues = {
  firstName: string;
  password: string;
  remember?: boolean;
  lastName?: string;
  patronymic?: string;
  country?: string;
  city?: string;
  phone?: string;
  photo?: string;
  repeatPassword?: string;
};

export { ItemNews, Registry, SortConfig, User, AuthState, FormValues };
