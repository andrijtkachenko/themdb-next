import { useState, useEffect } from "react";
import styled from "@emotion/styled";

const StyledControl = styled.div``;
// 1 2 3 4 5 6 7 8 .. last
export const Pagination = ({ pagesCount, setPage }) => {
  const [buttons, setButtons] = useState([]);
  useEffect(() => {
    const arr = [];
    if (pagesCount > 10) {
      for (let i = 1; i < 9; i++) {
        arr.push(i);
      }
      arr.push("...");
      arr.push(pagesCount);
    }
    setButtons(arr);
  }, [pagesCount]);

  const onButtonClick = (page) => {
    setPage(page);
  };

  return (
    <StyledControl>
      {buttons.map((item) => (
        <button onClick={() => onButtonClick(item)} key={item}>
          {item}
        </button>
      ))}
    </StyledControl>
  );
};
