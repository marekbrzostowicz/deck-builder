import Navbar from "../components/main-layout/Navbar";
import CardsChoosingPanel from "../components/main-layout/CardsChoosingPanel";
import { useState, useEffect } from "react";
import { getColor } from "../constants/color";
import elixirImage from "../assets/elixir.png";
import { toast } from "react-toastify";
import crown from "../assets/crown.png";
import { IoCloseSharp } from "react-icons/io5";
import { HiOutlineCursorClick } from "react-icons/hi";

interface CardPropsSpecific {
  elixirCost: number;
  id: number;
  name: string;
  rarity: string;
  iconUrls: {
    medium: string;
  };
}

interface CardStart {
  elixirCost: number;
  id: number;
  name: string;
  rarity: string;
  iconUrls: {
    medium: string;
  };
}

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

const MainLayout = () => {
  const deckArray: CardStart[] = [
    { id: 0, elixirCost: 0, name: " ", rarity: "", iconUrls: { medium: "" } },
    { id: 1, elixirCost: 0, name: " ", rarity: "", iconUrls: { medium: "" } },
    { id: 2, elixirCost: 0, name: " ", rarity: "", iconUrls: { medium: "" } },
    { id: 3, elixirCost: 0, name: " ", rarity: "", iconUrls: { medium: "" } },
    { id: 4, elixirCost: 0, name: " ", rarity: "", iconUrls: { medium: "" } },
    { id: 5, elixirCost: 0, name: " ", rarity: "", iconUrls: { medium: "" } },
    { id: 6, elixirCost: 0, name: " ", rarity: "", iconUrls: { medium: "" } },
    { id: 7, elixirCost: 0, name: " ", rarity: "", iconUrls: { medium: "" } },
  ];

  const [cardsData, setCardsData] = useState<CardProps | null>(null);
  const [deck, setDeck] = useState<CardPropsSpecific[] | CardStart[]>(
    deckArray
  );
  const [averageElixirCost, setAverageElixirCost] = useState("0.0");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://localhost:7286/clashroyale/cards"
        );
        const data = await response.json();
        setCardsData(data);
        console.log(data);
      } catch (error) {
        console.log("Error during fetching", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const filledCards = deck.filter((card) => card.name.trim() !== "");

    if (filledCards.length > 0) {
      const sum = filledCards.reduce((acc, current) => {
        return acc + current.elixirCost;
      }, 0);
      const average = (sum / filledCards.length).toFixed(1);
      setAverageElixirCost(average);
    } else {
      setAverageElixirCost("0.0");
    }
  }, [deck]);

  const handleDoubleClick = (cardData: CardPropsSpecific) => {
    const isAlreadyTaken = deck.some((card) => card.id === cardData.id);
    if (isAlreadyTaken) {
      toast.info("Card is already taken");
      return;
    }

    const emptySlotIndex = deck.findIndex((card) => card.name.trim() === "");

    if (emptySlotIndex !== -1) {
      setDeck((prevDeck) => {
        const newDeck = [...prevDeck];
        newDeck[emptySlotIndex] = cardData;
        return newDeck;
      });
    } else {
      toast.info("Deck is full");
    }
  };

  const handleDeleteCard = (id: number) => {
    const emptySlotIndex = deck.findIndex((card) => card.id === id);
    // deck.filter((card) => card.id !== id);

    setDeck((prevDeck) => {
      const newDeck = [...prevDeck];
      newDeck[emptySlotIndex] = deckArray[emptySlotIndex];
      return newDeck;
    });
  };

  return (
    <div className="flex justify-center items-center h-screen w-screen bg-slate-950">
      <div className="w-full h-full p-8 flex flex-col gap-8">
        <Navbar />
        <div className="flex flex-col lg:grid lg:grid-cols-[3fr_2fr] h-full gap-8">
          <CardsChoosingPanel
            handleDoubleClick={handleDoubleClick}
            cardsData={cardsData}
          />

          <div className="bg-[#2b1c0d] border border-amber-800/50 rounded-3xl flex flex-col items-center justify-between py-8">
            <h2 className="text-3xl font-black max-w-11/12 w-full flex  justify-center text-indigo-300 bg-gradient-to-tr  from-orange-950 via-yellow-950 to-amber-950 border border-amber-800 py-1 rounded-2xl">
              Deck
            </h2>
            <div
              className="grid grid-cols-4 gap-4 p-4  rounded-2xl bg-gradient-to-tr  from-orange-950 via-yellow-950 
             to-amber-950 border border-amber-800 h-72 w-auto items-center justify-center relative"
            >
              {deck.map((card) => (
                <button
                  onClick={() => handleDeleteCard(card.id)}
                  key={card.id}
                  className="relative group rounded-md border bg-amber-800 border-amber-800 "
                >
                  {card.iconUrls.medium === "" ? (
                    <div className="w-20 h-28 "></div>
                  ) : (
                    <>
                      <img
                        src={card.iconUrls.medium}
                        alt="card photo"
                        className={`w-20 border ${getColor(
                          card.rarity
                        )}  border-amber-900 rounded-md `}
                      />
                      <div className="absolute inset-0 opacity-0 transition-opacity duration-100 flex items-center justify-center bg-amber-950/70 text-red-500 cursor-pointer group-hover:opacity-100 rounded-md">
                        <span>
                          <IoCloseSharp />
                        </span>
                      </div>
                    </>
                  )}
                </button>
              ))}
              {averageElixirCost === "0.0" && (
                <div className="absolute -bottom-35 left-1/2 -translate-x-1/2 flex items-center gap-2">
                  <HiOutlineCursorClick className="text-indigo-700" size={30} />
                  <p className="text-indigo-300 text-xs">
                    double-click on a card to add it to the deck
                  </p>
                </div>
              )}
            </div>
            <div
              className="flex items-center justify-evenly gap-2 bg-gradient-to-tr  from-orange-950 via-yellow-950 
             to-amber-950 border border-amber-800 w-full max-w-7/12 rounded-2xl py-1"
            >
              <p className="text-indigo-300">
                Average Elixir Cost
                <span className="text-xl font-black">:</span>
              </p>
              <div className="flex items-center ">
                <span className="text-pink-400 font-semibold">
                  {averageElixirCost}
                </span>
                <img src={elixirImage} alt="elixir icon" className="w-6 " />
              </div>
            </div>
            <button
              className="bg-gradient-to-tl self-end mr-8 from-purple-950 via-indigo-950 to-purple-950 border border-purple-600 
            py-2 px-4 rounded-2xl"
            >
              <div className="flex items-center gap-2">
                <img src={crown} alt="clash royale crown" className="w-8" />
                <span className="text-indigo-300">Save</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
