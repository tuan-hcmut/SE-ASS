export interface isLoginAttr {
  currentuser?: {
    email: string;
    role: string;
    id: string;
  };
}

export interface signUpAttr {
  fullName: string;
  email: string;
  password: string;
}

export interface signInAttr {
  email: string;
  password: string;
}

export interface dataUpdateUser {
  id: string;
  email: string;
  fullName: string;
  photo: string;
}
