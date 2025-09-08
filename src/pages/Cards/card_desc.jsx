import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import JobCards from "./job_cards";
import card_one from '../../assets/card_one.png';
import previous_half from '../../assets/previous_half.png';
import next_full from '../../assets/next_full.png';
import use from '../../assets/use.png';
import previous_full from '../../assets/previous_full.png';
import next_half from '../../assets/next_half.png';
import battle_board from '../../assets/battle_board.png';
import card_two from '../../assets/card_two.png';
import { getCardImageUrl, getFallbackImageUrl } from '../../utils/cardImageLoader';


export default function CardDesc() {
  const navigate = useNavigate();
  const [selectedCards, setSelectedCards] = useState(null);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  useEffect(() => {
    // Load the selected job cards from localStorage
    const cardsData = localStorage.getItem('selectedJobCards');
    if (cardsData) {
      try {
        const parsedCards = JSON.parse(cardsData);
        setSelectedCards(parsedCards);
        console.log('CardDesc: Loaded selected cards:', parsedCards);
      } catch (error) {
        console.error('CardDesc: Error parsing selected cards:', error);
        navigate('/jobcard');
      }
    } else {
      console.log('CardDesc: No selected cards found, redirecting to jobcard');
      navigate('/jobcard');
    }
  }, [navigate]);

  const handleUseClick = () => {
    if (selectedCards) {
      // Store the selected job card and associated card in localStorage
      const equippedCards = [selectedCards.jobCard, selectedCards.associatedCard];
      localStorage.setItem('equippedCards', JSON.stringify(equippedCards));
      localStorage.setItem('characterJob', JSON.stringify(selectedCards.jobCard));
      
      // Clear the selected cards
      localStorage.removeItem('selectedJobCards');
      
      // Navigate to character room
      navigate('/character-room');
    }
  };

  const handlePreviousClick = () => {
    setCurrentCardIndex(0);
  };

  const handleNextClick = () => {
    setCurrentCardIndex(1);
  };

  const getCardImage = (card) => {
    if (!card) return getFallbackImageUrl();
    
    // Try to get the dynamic image URL for cards from /assets/cards/
    const dynamicImageUrl = getCardImageUrl(card.image);
    if (dynamicImageUrl) {
      return dynamicImageUrl;
    }
    
    // Fallback to blank card if no image found
    return getFallbackImageUrl();
  };

  if (!selectedCards) {
    return <div>Loading...</div>;
  }

  const cards = [selectedCards.jobCard, selectedCards.associatedCard];
  const currentCard = cards[currentCardIndex];

  return (
    <div className="w-full h-[200vh] flex justify-center items-center">
      <div className="w-full h-full flex justify-center items-center flex-col">
        <div className="w-full h-screen justify-center items-center relative">
          <div className="w-full h-full opacity-50">
            <JobCards />
          </div>
          <div className="w-full h-screen flex justify-center items-center absolute top-0 left-0 flex-col z-[100] gap-1 lg:gap-5 xl:gap-10 xl:flex-row ">
            <div className="w-[300px] lg:w-[600px] xl:w-[400px] flex justify-center items-center  ">
              <img src={getCardImage(currentCard)} alt={currentCard.name} className="w-full h-auto" />
            </div>
            <div className="w-auto h-auto flex justify-center items-center flex-col gap-5 xl:mb-[100px] ">
              <div className="w-[300px] lg:w-[600px] flex justify-center items-center relative ">
                <img src={battle_board} alt="" className="w-full h-auto" />
                <div className="absolute top-7 lg:top-18 left-7 lg:left-13 w-[250px] lg:w-[500px] lg:text-[35px]">
                  <p className="font-bold">{currentCard.type} {currentCard.name} {currentCard.rarity}</p>
                  <p className="mt-2">{currentCard.description}</p>
                </div>
              </div>
              <div className="w-full h-auto justify-center items-center flex flex-col gap-5 lg:mt-[60px] xl:mt-[10px] ">
                <div className="w-auto h-auto flex justify-center items-center gap-10">
                  <img 
                    src={previous_half} 
                    alt="" 
                    className="w-[90px] lg:w-[150px] cursor-pointer hover:opacity-80" 
                    onClick={handlePreviousClick}
                  />
                  <img 
                    src={next_full} 
                    alt="" 
                    className="w-[90px] lg:w-[150px] cursor-pointer hover:opacity-80" 
                    onClick={handleNextClick}
                  />
                </div>
                <div className="w-full h-auto flex justify-end items-center lg:absolute lg:bottom-[50px] lg:right-[80px] ">
                  <img 
                    src={use} 
                    alt="" 
                    className="w-[140px] lg:w-[200px] cursor-pointer hover:opacity-80" 
                    onClick={handleUseClick}
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
        <div className="w-full h-screen justify-center items-center relative ">
          <div className="w-full h-full opacity-50">
            <JobCards />
          </div>
          <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center flex-col z-[100] gap-1 lg:gap-5 xl:gap-10 xl:flex-row ">
            <div className="w-[300px] lg:w-[600px] xl:w-[400px] flex justify-center items-center  ">
              <img src={getCardImage(cards[1])} alt={cards[1].name} className="w-full h-auto" />
            </div>
            <div className=" w-auto h-auto flex justify-center items-center flex-col gap-5 xl:mb-[70px] ">
              <div className="w-[300px] lg:w-[600px] flex justify-center items-center relative ">
                <img src={battle_board} alt="" className="w-full h-auto" />
                <div className="absolute top-7 left-7 w-[250px] lg:left-13 lg:top-10 lg:w-[500px] lg:text-[35px]">
                  <p className="font-bold">{cards[1].type} {cards[1].name} {cards[1].rarity}</p>
                  <p className="mt-2">{cards[1].description}</p>
                </div>
              </div>
              <div className="w-full h-auto justify-center items-center flex flex-col gap-5 lg:mt-[60px] xl:mt-[20px] ">
                <div className="w-auto h-auto flex justify-center items-center gap-10">
                  <img 
                    src={previous_full} 
                    alt="" 
                    className="w-[90px] lg:w-[150px] cursor-pointer hover:opacity-80" 
                    onClick={handlePreviousClick}
                  />
                  <img 
                    src={next_half} 
                    alt="" 
                    className="w-[90px] lg:w-[150px] cursor-pointer hover:opacity-80" 
                    onClick={handleNextClick}
                  />
                </div>
                <div className="w-full h-auto flex justify-end items-center lg:absolute lg:bottom-[60px] lg:right-[80px]">
                  <img 
                    src={use} 
                    alt="" 
                    className="w-[140px] lg:w-[200px] cursor-pointer hover:opacity-80" 
                    onClick={handleUseClick}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}