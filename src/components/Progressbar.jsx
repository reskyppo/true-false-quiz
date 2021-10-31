const Progressbar = ({ currentPage, totalPage }) => {
  return (
    <div className="flex">
      <span
        className={`h-4 w-${currentPage}/${totalPage} bg-secondary-300 `}
      ></span>
      <span
        className={`h-4 w-${
          totalPage - currentPage
        }/${totalPage} bg-primary-100`}
      ></span>
      {totalPage === currentPage && (
        <span className={`h-4 w-full bg-secondary-300`}></span>
      )}
    </div>
  );
};

export default Progressbar;
