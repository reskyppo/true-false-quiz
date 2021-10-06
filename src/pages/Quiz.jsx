import { useState } from "react";

const Quiz = () => {
  const [answer, setAnswer] = useState();
  console.log(answer);
  return (
    <div className="bg-gray-100 h-screen flex justify-center ">
      <div className=" w-1/2  border-primary border-r-2 border-l-2 bg-white p-8">
        <p className="text-xl">Question 1 / 5</p>
        <div className="flex">
          <span className="h-4 w-1/5 bg-secondary-700 "></span>
          <span className="h-4 w-4/5 bg-primary-100"></span>
        </div>

        <div className="mt-8">
          <p>Questions</p>

          <div className="mt-8 flex flex-col">
            <button onClick={() => setAnswer(true)}>True</button>
            <button onClick={() => setAnswer(false)}>False</button>
          </div>

          <div className="mt-8">
            <button className="bg-primary-500">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
