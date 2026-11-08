import { getTopRated } from "../API/getTopRated";
import { useState, useEffect } from "react";
import { MovieCard } from "./MovieCard";
import styled from "@emotion/styled";
import { Container } from "./Container";

const StyledList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
`;

export const MovieList = ({ page, setPagesCount }) => {
  const [movies, setMoives] = useState([]);
  useEffect(() => {
    (async () => {
      const data = await getTopRated({ page });
      //   console.log(data);
      setMoives(data.results);
      setPagesCount(data.total_pages);
    })();
  }, [page]);

  return (
    <Container>
      <StyledList>
        {movies.map((item) => (
          <MovieCard key={item.id} movie={item} />
        ))}
      </StyledList>
    </Container>
  );
};
