import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";

const StyledControl = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin: 40px 0;

  & button {
    min-width: 40px;
    height: 40px;
    border: 1px solid #d1d5db;
    border-radius: 10px;
    background: #fff;
    color: #111827;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease;
    font-weight: 600;
    padding: 0 12px;
  }

  & button:hover:not(:disabled) {
    background: #f3f4f6;
    transform: translateY(-1px);
  }

  & button:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  & button.active {
    background: #111827;
    color: #fff;
    border-color: #111827;
  }
`;

export const Pagination = ({ pagesCount, setPage, page }) => {
  const [buttons, setButtons] = useState([]);
  const maxPage = Math.max(1, Math.min(pagesCount || 1, 300));

  useEffect(() => {
    const safePage = Math.min(Math.max(1, Number(page) || 1), maxPage);
    if (safePage !== page) {
      setPage(safePage);
    }

    const arr = [];

    if (maxPage <= 7) {
      for (let i = 1; i <= maxPage; i += 1) {
        arr.push(i);
      }
    } else if (safePage <= 4) {
      arr.push(1, 2, 3, 4, 5, "...", maxPage);
    } else if (safePage >= maxPage - 3) {
      arr.push(1, "...", maxPage - 4, maxPage - 3, maxPage - 2, maxPage - 1, maxPage);
    } else {
      arr.push(1, "...", safePage - 1, safePage, safePage + 1, "...", maxPage);
    }

    setButtons(arr);
  }, [page, maxPage, setPage]);

  const onButtonClick = (nextPage) => {
    if (typeof nextPage === "number" && nextPage >= 1 && nextPage <= maxPage) {
      setPage(nextPage);
    }
  };

  return (
    <StyledControl>
      <button
        type="button"
        disabled={page <= 1}
        onClick={() => setPage((prev) => Math.max(1, prev - 1))}
      >
        <AiFillCaretLeft />
      </button>

      {buttons.map((item, index) => (
        <button
          key={`${item}-${index}`}
          type="button"
          className={item === page ? "active" : ""}
          onClick={() => onButtonClick(item)}
          disabled={item === "..."}
        >
          {item}
        </button>
      ))}

      <button
        type="button"
        disabled={page >= maxPage}
        onClick={() => setPage((prev) => Math.min(maxPage, prev + 1))}
      >
        <AiFillCaretRight />
      </button>
    </StyledControl>
  );
};
