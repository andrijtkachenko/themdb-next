import axios from "axios";
import { token } from "../service/token";

export const getTopRated = async ({ page = 1 }) => {
  try {
    const data = await axios.get(
      "https://api.themoviedb.org/3/movie/top_rated",
      {
        params: { page },
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return data.data;
  } catch (err) {
    console.log(err);
  }
};
