import axios from "axios";
import { signUpAttr, signInAttr, dataUpdateUser } from "../shared/variables";

export const isLogin = async () => {
  // const currentPath = window.location.href.split(process.env.REACT_APP_BASE_URL!);
  /// neu co time thi update authentication in every server
  try {
    const user = await axios({
      method: "GET",
      url: `${process.env.REACT_APP_BASE_URL}/api/users/currentuser`,
    });

    return user.data;
  } catch (err) {
    console.error(err);
  }
};

export const signUp = async (data: signUpAttr) => {
  // const currentPath = window.location.href.split(process.env.REACT_APP_BASE_URL!);
  /// neu co time thi update authentication in every server
  try {
    const user = await axios({
      method: "POST",
      url: `${process.env.REACT_APP_BASE_URL}/api/users/signup`,
      data: data,
    });

    return {
      status: user.status,
      user: user.data,
      message: "Created",
    };
  } catch (err: any) {
    // console.error(err.response!);
    return {
      status: err.response.status,
      message: err.response.data.errors[0].message,
    };
  }
};

export const signIn = async (data: signInAttr) => {
  try {
    const res = await axios({
      method: "POST",
      url: `${process.env.REACT_APP_BASE_URL}/api/users/signin`,
      data: data,
    });
    return {
      status: res.status,
      user: res.data,
      message: "success",
    };
  } catch (err: any) {
    return {
      status: err.response.status,
      message: err.response.data.errors[0].message,
    };
  }
};

export const logout = async () => {
  try {
    const res = await axios({
      method: "POST",
      url: `${process.env.REACT_APP_BASE_URL}/api/users/signout`,
    });

    return {
      status: res.status,
      message: "Done",
    };
  } catch (e: any) {
    return e;
  }
};

export const photoUploadUrl = async (data: any) => {
  try {
    const res = await axios({
      method: "POST",
      url: `${process.env.REACT_APP_BASE_URL}/api/users/photoUploadUrl`,
      data: { type: data },
    });

    return {
      status: res.status,
      data: res.data,
      message: "success",
    };
  } catch (err: any) {
    return {
      status: err.response.status,
      message: err.response.data.errors[0].message,
    };
  }
};

export const updateUserInfor = async (data: dataUpdateUser) => {
  try {
    const res = await axios({
      method: "POST",
      url: `${process.env.REACT_APP_BASE_URL}/api/users/updateUserInfor`,
      data,
    });

    return {
      status: res.status,
      data: res.data,
      message: "success",
    };
  } catch (err: any) {
    return {
      status: err.response.status,
      message: err.response.data.errors[0].message,
    };
  }
};

export const updateUserRole = async (data: any) => {
  try {
    const res = await axios({
      method: "POST",
      url: `${process.env.REACT_APP_BASE_URL}/api/users/updateUserRole`,
      data: {
        role: data,
      },
    });

    return {
      status: res.status,
      data: res.data,
      message: "success",
    };
  } catch (err: any) {
    return {
      status: err.response.status,
      message: err.response.data.errors[0].message,
    };
  }
};
