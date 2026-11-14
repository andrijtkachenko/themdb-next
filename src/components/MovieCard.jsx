import styled from "@emotion/styled";
import { baseImagePath } from "../service/baseImagePath";

const StyledCard = styled.li`
  list-style: none;
  background: #111;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);

  & a {
    display: flex;
    flex-direction: column;
    color: white;
    text-decoration: none;
    height: 100%;
  }

  & img {
    display: block;
    width: 100%;
    height: 427px;
    object-fit: cover;
    background: gray;
  }

  & .title {
    padding: 12px 16px 16px;
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.4;
    min-height: 68px;
  }
`;

export const MovieCard = ({ movie }) => {
  const poster = movie.poster_path
    ? `${baseImagePath}${movie.poster_path}`
    : "https://placehold.co/400x600/111/fff?text=No+Poster";

  return (
    <StyledCard>
      <a href={`/${movie.id}`}>
        <img src={poster} alt={movie.title} />
        <div className="title">{movie.title}</div>
      </a>
    </StyledCard>
  );
};
