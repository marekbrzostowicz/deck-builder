import Card from "../Card";
import { getColorBorder, getColorText } from "../../constants/color";
import { useState } from "react";

interface CardProps {
  items: Array<{
    elixirCost: number;
    id: number;
    name: string;
    rarity: string;
    iconUrls: {
      medium: string;
    };
  }>;
}

interface CardPropsSpecific {
  elixirCost: number;
  id: number;
  name: string;
  rarity: string;
  iconUrls: {
    medium: string;
  };
}

// interface CardStart {
//   id: number;
// }

interface CardsChoosingPanelProps {
  cardsData: CardProps;
  handleDoubleClick: (cardData: CardPropsSpecific) => void; // <-- Ten interfejs
}

const CardsChoosingPanel = ({
  handleDoubleClick,
  cardsData,
}: CardsChoosingPanelProps) => {
  const [currentRarity, setCurrentRarity] = useState("all");

  const rarity = ["all", "common", "rare", "epic", "legendary", "champion"];

  return (
    <div className="bg-[#2b1c0d] border  border-amber-800/50 rounded-3xl flex flex-col items-center justify-between py-8">
      <div className="flex gap-8  w-11/12 items-center justify-center bg-gradient-to-tr from-orange-950 via-yellow-950 to-amber-950 border border-amber-800 rounded-2xl p-2 mx-auto">
        {rarity.map((element, index) => (
          <button key={index} onClick={() => setCurrentRarity(element)}>
            <p
              className={`${
                currentRarity === element ? "border-b-2" : ""
              } ${getColorBorder(element)} ${getColorText(
                element
              )} font-black hover:cursor-pointer hover:scale-105 hover:brightness-125 transition duration-300 ease-in-out transform hover:-translate-y-1 capitalize pb-1`}
            >
              {element}
            </p>
          </button>
        ))}
      </div>
      <div className="flex flex-wrap gap-6 text-white overflow-y-auto h-[430px] w-10/12 justify-center py-6 bg-gradient-to-tr from-orange-950 via-yellow-950 to-amber-950 border border-amber-800 rounded-2xl scrollbar">
        {cardsData ? (
          cardsData.items.map((card) => {
            if (currentRarity === "all") {
              return (
                <Card
                  key={card.id}
                  cardData={card}
                  onDoubleClick={handleDoubleClick}
                />
              );
            } else {
              if (currentRarity === card.rarity) {
                return (
                  <Card
                    key={card.id}
                    cardData={card}
                    onDoubleClick={handleDoubleClick}
                  />
                );
              }
            }
          })
        ) : (
          <p>Loading ...</p>
        )}
      </div>
    </div>
  );
};

export default CardsChoosingPanel;
