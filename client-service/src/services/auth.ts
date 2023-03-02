import axios from "axios";

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
