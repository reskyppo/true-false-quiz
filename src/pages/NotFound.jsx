import NotfoundIcon from "../assets/not_found.svg";

const NotFound = () => {
  return (
    <div className="bg-gray-100 h-screen flex justify-center items-center px-4">
      <div>
        <img
          src={NotfoundIcon}
          alt="Icon that tell you, this website not found and you can't access it."
        />
        <p className="text-center my-4 text-lg md:text-2xl">
          The page you are looking for does not exist!
        </p>

        <div className="flex justify-center mt-8">
          <button className="bg-primary-500 rounded-md cursor-pointer">
            <p className="py-2 md:py-4 px-4 md:px-8 text-center md:text-xl font-medium text-white">
              GO BACK HOME
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
