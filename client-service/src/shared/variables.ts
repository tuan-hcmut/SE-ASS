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
  id?: string;
  email?: string;
  fullName?: string;
  photo?: string;
}

export interface UserPayload {
  email?: string;
  id?: string;
  fullName?: string;
  role?: string;
  photo?: string;
  status?: string;
}

export interface VehiclePayload {
  type: string;
  weight: string;
  capacity: string;
  description: string;
  fuelConsumptions: string;
  photo?: string;
}

export const fakeUsers: UserPayload[] = [
  {
    photo: "",
    fullName: "Trần Văn Toàn",
    role: "Janitor",
    id: "234234",
    status: "Working",
  },
  {
    photo: "",
    fullName: "Lê Thanh Tuấn",
    role: "Janitor",
    id: "23345644234",
    status: "Ready",
  },
  {
    photo: "",
    fullName: "Nguyễn Minh Thư",
    role: "Janitor",
    id: "345345",
    status: "Busy",
  },
  {
    photo: "",
    fullName: "Hồ Thu Hà",
    role: "Janitor",
    id: "23423432",
    status: "Ready",
  },
  {
    photo: "",
    fullName: "Huỳnh Xuân Minh",
    role: "Janitor",
    id: "23433234",
    status: "Working",
  },
  {
    photo: "",
    fullName: "Đào Duy Nghĩa",
    role: "Collector",
    id: "568",
    status: "Working",
  },
  {
    photo: "",
    fullName: "Hinh Đạo Vinh",
    role: "Collector",
    id: "2342121234",
    status: "Busy",
  },
  {
    photo: "",
    fullName: "Trần Công Phượng",
    role: "Collector",
    id: "5678567",
    status: "Ready",
  },
  {
    photo: "",
    fullName: "Trần Bá Duy",
    role: "Collector",
    id: "23434534",
    status: "Working",
  },
  {
    photo: "",
    fullName: "Lương Xuân Trường",
    role: "Collector",
    id: "34534654",
    status: "Ready",
  },
  {
    photo: "",
    fullName: "Trần Văn Toàn",
    role: "Collector",
    id: "456546546456",
    status: "Busy",
  },
];
