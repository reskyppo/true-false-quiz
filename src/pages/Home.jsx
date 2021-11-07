import HeroIcon from "../assets/hero_icon.svg";
import Button from "../components/Button";

const Home = () => {
  return (
    <div className="bg-gray-100 h-screen flex justify-center ">
      <div className="lg:w-1/2  border-primary border-r-2 border-l-2 bg-white md:p-8">
        <img
          className="w-11/12 my-20 mx-auto"
          src={HeroIcon}
          alt="laptop illustration that represent about online quiz"
        />

        <div className="w-11/12 mx-auto md:px-6 mb-12">
          <p className=" text-2xl md:text-4xl text-primary-900 font-semibold">
            Feeling bored and want to test your intelligence?
          </p>
          <p className=" text-primary-500 font-medium md:text-xl mt-4">
            By answering these question, we can help you to test your
            intelligence and increase your knowledge.
          </p>
        </div>

        <div className="flex justify-center md:mt-16">
          <Button url="/quiz" text="Start quiz" size={5/6} />
        </div>
      </div>
    </div>
  );
};

export default Home;
