const Progressbar = ({ currentPage, totalPage }) => {
  return (
    <div className="flex">
      <span
        className="h-4 bg-secondary-300" style={{"width": currentPage/totalPage * 100 + "%"}}
      ></span>
      <span
        className="h-4 bg-gray-300" style={{"width": (totalPage-currentPage)/totalPage * 100 + "%"}}
      ></span>
      {totalPage === currentPage && (
        <span className={`h-4 w-full bg-secondary-300`}></span>
      )}
    </div>
  );
};

export default Progressbar;
