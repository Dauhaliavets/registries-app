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

export { ItemNews, Registry, User, AuthState,};
