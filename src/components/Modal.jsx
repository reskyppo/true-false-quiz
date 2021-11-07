import Warning from "../assets/warning.svg";

const Modal = () => {
  return (
    <div className="lg:w-1/2">
      <div className="fixed z-20 m-auto inset-x-0 inset-y-0 bg-gray-600 bg-opacity-75">
        <div className="bg-white w-5/6 h-1/2 rounded-xl m-auto fixed inset-x-0 inset-y-0 p-6">
          <img
            src={Warning}
            alt="Ilustration that represent warning u cant do anything"
          />
          <p className="mt-8 mb-4 text-red-500 font-bold text-lg">
            Please select the answer first!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
