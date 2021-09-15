import HeroIcon from "../assets/hero_icon.svg";

const Home = () => {
  return (
    <div className="bg-gray-100 h-screen flex justify-center ">
      <div className=" w-1/2  border-primary border-r-2 border-l-2 bg-white p-8">
        <img
          className="w-3/4 mx-auto"
          src={HeroIcon}
          alt="laptop illustration that represent about online quiz"
        />

        <div className="w-11/12 mx-auto mt-12">
          <p className="text-center text-4xl text-primary">True Or False</p>
          <p className="text-center text-blue-800">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A odio
            consequuntur consectetur autem facere? Porro, ipsa aliquid debitis
            maiores doloremque ullam eum inventore incidunt voluptatibus
            asperiores expedita repudiandae temporibus animi.
          </p>
        </div>

        <div className="flex justify-center">
          <button className="bg-secondary w-2/3 rounded-md cursor-pointer">
            <p className="py-4 text-center text-2xl text-white">Start quiz</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
