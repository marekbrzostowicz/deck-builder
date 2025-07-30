import { getColor, getColorBorder, getColorShadow } from "../constants/color";
import elixirImage from "../assets/elixir.png";

interface CardComponentProps {
  cardData: CardProps;
  onDoubleClick: (cardData: CardProps) => void;
}

interface CardProps {
  elixirCost: number;
  id: number;
  name: string;
  rarity: string;
  iconUrls: {
    medium: string;
  };
}

const Card = ({ cardData, onDoubleClick }: CardComponentProps) => {
  return (
    <button
      onClick={() => console.log("single click", cardData.id)}
      onDoubleClick={() => onDoubleClick(cardData)}
    >
      <div className="flex flex-col justify-between items-center hover:scale-110 transition-all duration-150 hover:cursor-pointer">
        {/* <p>{card.name}</p>
                    <p>{card.rarity}</p> */}
        <div
          className={`${getColor(
            cardData.rarity
          )} rounded-lg relative border ${getColorBorder(
            cardData.rarity
          )} shadow-2xl ${getColorShadow(cardData.rarity)}`}
        >
          <img
            src={cardData.iconUrls.medium}
            alt="Card photo"
            className="w-26  border-emerald-400"
          />
          <img
            src={elixirImage}
            alt="elixir image"
            className="absolute left-18 -top-5  w-13 z-40"
          />
          <p className="absolute left-23 font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] -top-2 z-50 text-xl">
            {cardData.elixirCost}
          </p>
        </div>
      </div>
    </button>
  );
};

export default Card;
