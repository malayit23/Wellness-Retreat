import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrevious = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  return (
    <>
      <div className="flex justify-center items-center space-x-4">
        <button className="py-2 px-4 text-white text-md font-medium rounded-md bg-blue-400 disabled:bg-blue-200" onClick={handlePrevious} disabled={currentPage === 1}>
          Previous
        </button>
        <span>
          {currentPage} / {totalPages}
        </span>
        <button className="py-2 px-4 text-white text-md font-medium rounded-md bg-blue-400 disabled:bg-blue-200" onClick={handleNext} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </>
  );
};

export default Pagination;
