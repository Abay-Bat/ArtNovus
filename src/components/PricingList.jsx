import { check } from "../assets";
import { pricing } from "../constants";
import Button from "./Button";

const PricingList = () => {
  return (
    <div className="flex gap-[1rem] max-lg:flex-wrap">
      {pricing.map((item) => (
        <div
          key={item.id}
          className="w-[19rem] max-lg:w-full h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-4 [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3"
        >
          <h4 className="h4 mb-4">{item.title}</h4>

          <p className="body-2 min-h-[4rem] mb-3 text-n-1/50">
            {item.description}
          </p>

          <div className="flex items-center justify-center h-[4rem] mb-6">
            {item.price && (
              <div className="text-xl font-semibold text-center text-n-1 whitespace-pre-line leading-snug">
                {item.price}
              </div>
            )}
          </div>

          <div className="mb-6">
            <Button
              className="w-full"
              href={
                item.price
                  ? "https://drive.google.com/file/d/10KHZZyaKXTaKj183odryBl3dt2KSbFyT/view?usp=sharing"
                  : "https://wa.me/77477871077"
              }
              white={!!item.price}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.price ? "Узнать больше" : "Связаться с нами"}
            </Button>

            {!item.price && (
              <a
                href="https://wa.me/77477871077"
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-2 text-xs text-n-1/40 text-center italic blur-[0.3px] hover:text-n-1/70 transition"
              >
                Связаться с нами
              </a>
            )}
          </div>

          <ul>
            {item.features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start py-5 border-t border-n-6"
              >
                <img src={check} width={24} height={24} alt="Check" />
                <p className="body-2 ml-4">{feature}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PricingList;
