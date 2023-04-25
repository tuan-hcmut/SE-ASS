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
  distance?: string;
  isCreate?: boolean;
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
    photo: "artem-beliaikin-6SPU6-KkyhA-unsplash-min.jpg",
    fullName: "Trần Văn Toàn",
    role: "Janitor",
    id: "234234",
    status: "Working",
    distance: "3.4km",
    isCreate: false,
  },
  {
    photo: "christina-wocintechchat-com-0Zx1bDv5BNY-unsplash-min.jpg",
    fullName: "Lê Thanh Tuấn",
    role: "Janitor",
    id: "23345644234",
    status: "Ready",
    distance: "5.8km",
    isCreate: false,
  },
  {
    photo: "foto-sushi-6anudmpILw4-unsplash-min.jpg",
    fullName: "Nguyễn Minh Thư",
    role: "Janitor",
    id: "345345",
    status: "Busy",
    distance: "2.5km",
    isCreate: false,
  },
  {
    photo: "jeffery-erhunse-Z9lbmEjyYjU-unsplash-min.jpg",
    fullName: "Hồ Thu Hà",
    role: "Janitor",
    id: "23423432",
    status: "Ready",
    distance: "1.2km",
    isCreate: false,
  },
  {
    photo: "jonas-kakaroto-KIPqvvTOC1s-unsplash-min.jpg",
    fullName: "Huỳnh Xuân Minh",
    role: "Janitor",
    id: "23433234",
    status: "Working",
    distance: "1.4km",
    isCreate: false,
  },
  {
    photo: "joseph-pearson-827XUhVSp8M-unsplash-min.jpg",
    fullName: "Đào Duy Nghĩa",
    role: "Collector",
    id: "568",
    status: "Working",
    distance: "2.2km",
    isCreate: false,
  },
  {
    photo: "lachlan-dempsey-6VPEOdpFNAs-unsplash-min.jpg",
    fullName: "Hinh Đạo Vinh",
    role: "Collector",
    id: "2342121234",
    status: "Busy",
    distance: "2.3km",
    isCreate: false,
  },
  {
    photo: "michael-austin-jgSAuqMmJUE-unsplash-min.jpg",
    fullName: "Trần Công Phượng",
    role: "Collector",
    id: "5678567",
    status: "Ready",
    distance: "1.9km",
    isCreate: false,
  },
  {
    photo: "mubariz-mehdizadeh-t3zrEm88ehc-unsplash-min.jpg",
    fullName: "Trần Bá Duy",
    role: "Collector",
    id: "23434534",
    status: "Working",
    distance: "0.5km",
    isCreate: false,
  },
  {
    photo: "naim-ahmed-8BcVHmAHtlw-unsplash-min.jpg",
    fullName: "Lương Xuân Trường",
    role: "Collector",
    id: "34534654",
    status: "Ready",
    distance: "2.8km",
    isCreate: false,
  },
  {
    photo: "vicky-hladynets-C8Ta0gwPbQg-unsplash-min.jpg",
    fullName: "Trần Văn Toàn",
    role: "Collector",
    id: "456546546456",
    status: "Busy",
    distance: "4.1km",
    isCreate: false,
  },
];
