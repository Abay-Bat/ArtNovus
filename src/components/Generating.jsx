import { loading } from "../assets";

const Generating = ({ className }) => {
  return (
    <div
      className={`flex items-center h-[3.5rem] px-6 bg-n-8/80 rounded-[1.7rem] ${
        className || ""
      } text-base`}
    >
      <img className="w-5 h-5 mr-4 animate-spin" src={loading} alt="Loading" />
      <span className="hidden sm:inline">Подбираем лучшее для вас</span>
      <span className="inline sm:hidden">Ищем лучшее</span>
    </div>
  );
};

export default Generating;
