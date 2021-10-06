import datas from "../utils/data.json";
import QuizDetails from "../components/QuizDetails";
const Quiz = () => {
  console.log(datas);
  return (
    <div className="bg-gray-100 h-screen flex justify-center ">
      <div className=" w-1/2  border-primary border-r-2 border-l-2 bg-white p-8">
        {datas?.map((data) => (
          <QuizDetails
            number={data.number}
            total={datas.length}
            question={data.question}
            answer={data.answer}
          />
        ))}
      </div>
    </div>
  );
};

export default Quiz;
