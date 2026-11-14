import styled from "@emotion/styled";
import { baseImagePath } from "../service/baseImagePath";

const StyledCard = styled.li`
  & .thumb {
    height: 427px;
    background-color: gray;
    background-image: url(${(props) => props.bgImage});
    background-size: cover;
  }
  & a {
  }
`;

export const MovieCard = ({ movie }) => {
  return (
    <StyledCard bgImage={`${baseImagePath}${movie.poster_path}`}>
      <a href={`/films/${movie.id}`}>
        <div className="thumb"></div>
        <p>{movie.title}</p>
      </a>
    </StyledCard>
  );
};
