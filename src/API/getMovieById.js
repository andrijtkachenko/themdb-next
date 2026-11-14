import axios from "axios";
import { token } from "../service/token";

export const getMovieById = async ({ id }) => {
  try {
    const data = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}`,
      {
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