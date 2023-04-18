/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function rangeArray(start, end) {
  let array = [];

  for (let i = start; i <= end; i++) {
    array.push(i);
  }

  return array;
}

const PaginationNumber = ({ page, isActive, onSetPage, disabled }) => {
  return (
    <li>
      <button
        disabled={disabled}
        className={`block py-1.5 px-3 mx-1 border-0 transition-all duration-300 rounded-full hover:bg-neutral-700 ${
          !!isActive ? "bg-neutral-800" : "bg-transparent"
        } ${!!disabled ? "text-gray-500" : "text-gray-200"}`}
        href="#"
        onClick={onSetPage}
      >
        {page}
      </button>
    </li>
  );
};

const Pagination = ({ setCurrentPage, currentPage, postsPerPage, total }) => {
  const range = 2;

  const totalPages = Math.ceil(total / postsPerPage);

  const previousPage = rangeArray(
    Math.max(1, currentPage - range),
    currentPage - 1
  );
  const nextPage = rangeArray(
    currentPage + 1,
    Math.min(totalPages, currentPage + range)
  );

  return (
    <div className="flex justify-center mt-8">
      <nav aria-label="Page navigation example">
        <ul className="flex list-style-none">
          <PaginationNumber
            page="Previous"
            isActive={false}
            disabled={currentPage === 1}
            onSetPage={() => {
              if (currentPage > 1) setCurrentPage(currentPage - 1);
            }}
          />

          {previousPage.map((numberPage) => (
            <PaginationNumber
              key={numberPage}
              page={numberPage}
              isActive={false}
              onSetPage={() => setCurrentPage(numberPage)}
            />
          ))}

          <PaginationNumber
            page={currentPage}
            isActive={true}
            onSetPage={() => {}}
          />

          {nextPage.map((numberPage) => (
            <PaginationNumber
              key={numberPage}
              page={numberPage}
              isActive={false}
              onSetPage={() => setCurrentPage(numberPage)}
            />
          ))}

          <PaginationNumber
            page="Next"
            disabled={currentPage >= totalPages}
            isActive={false}
            onSetPage={() => setCurrentPage(currentPage + 1)}
          />
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
