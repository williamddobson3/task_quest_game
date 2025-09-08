import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Room from './room';
import card from '../../assets/card.png';
import use from '../../assets/use.png';
import board_phone from '../../assets/board_phone.png';
import possession from '../../assets/possession.png';
import back from '../../assets/back.png';
import { getCardImageUrl, getFallbackImageUrl } from '../../utils/cardImageLoader';

export default function Ticket() {
  const navigate = useNavigate();
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    // Load the selected card data from localStorage
    const cardData = localStorage.getItem('selectedCard');
    console.log('Ticket-ency: Loading card data:', cardData);
    
    if (cardData) {
      try {
        const parsedCard = JSON.parse(cardData);
        console.log('Ticket-ency: Parsed card:', parsedCard);
        setSelectedCard(parsedCard);
      } catch (error) {
        console.error('Ticket-ency: Error parsing card data:', error);
        localStorage.removeItem('selectedCard');
        navigate('/character-room');
      }
    } else {
      console.log('Ticket-ency: No card data found, redirecting to character room');
      navigate('/character-room');
    }
  }, [navigate]);

  const handleBackClick = () => {
    // Clear the selected card when going back
    localStorage.removeItem('selectedCard');
    console.log('Ticket-ency: Cleared selectedCard on back navigation');
    navigate('/character-room');
  };

  const handleUseClick = () => {
    if (!selectedCard) return;
    
    console.log('Using card from encyclopedia:', selectedCard);
    
    // Get current equipped cards from localStorage
    const equippedCards = JSON.parse(localStorage.getItem('equippedCards') || '[]');
    console.log('Current equipped cards:', equippedCards);
    
    // Check if card is already equipped
    const isAlreadyEquipped = equippedCards.some(card => card.id === selectedCard.id);
    if (isAlreadyEquipped) {
      //alert('This card is already equipped!');
      return;
    }
    
    // Remove ALL instances of the card from collected cards (item-box)
    const collectedCards = JSON.parse(localStorage.getItem('playerCards') || '[]');
    const updatedCollectedCards = collectedCards.filter(card => {
      // Remove ALL instances of the same card completely
      const key = card.id || card.name || card.image;
      const selectedKey = selectedCard.id || selectedCard.name || selectedCard.image;
      
      // If it's the same card, remove it completely (regardless of quantity)
      return key !== selectedKey;
    });
    
    // Save updated collected cards
    localStorage.setItem('playerCards', JSON.stringify(updatedCollectedCards));
    console.log('✅ Removed ALL instances of card from item-box:', selectedCard);
    console.log('✅ Updated collected cards:', updatedCollectedCards);
    
    // Special handling for job cards
    if (selectedCard.type === 'job') {
      // Check if there's already a job card equipped
      const existingJobCard = equippedCards.find(card => card.type === 'job');
      if (existingJobCard) {
        //alert('You can only equip one job card at a time! Please unequip the current job card first.');
        return;
      }
      
      // Job cards can only be equipped in the main_item slot (first slot)
      // If there's already a card in the main_item slot, replace it
      const updatedEquippedCards = [...equippedCards];
      if (updatedEquippedCards.length > 0) {
        // Move the current main_item card to the end if it's not a job card
        if (updatedEquippedCards[0].type !== 'job') {
          const mainItemCard = updatedEquippedCards.shift();
          updatedEquippedCards.push(mainItemCard);
        } else {
          // Replace the existing job card
          updatedEquippedCards[0] = selectedCard;
        }
      } else {
        // No cards equipped, add job card as first card
        updatedEquippedCards.push(selectedCard);
      }
      
      // Save to localStorage
      localStorage.setItem('equippedCards', JSON.stringify(updatedEquippedCards));
      
      console.log('✅ Job card equipped successfully from encyclopedia:', selectedCard);
      console.log('✅ Updated equipped cards:', updatedEquippedCards);
      
      // Show success message
      //alert(`"${selectedCard.name}" has been equipped as your job card!`);
      
      // Clear selected card and redirect to character room
      localStorage.removeItem('selectedCard');
      navigate('/character-room');
      return;
    }
    
    // For non-job cards, check if we have space (max 5 cards)
    if (equippedCards.length >= 5) {
      //alert('You can only equip up to 5 cards!');
      return;
    }
    
    // Add the selected card to equipped cards
    const updatedEquippedCards = [...equippedCards, selectedCard];
    
    // Save to localStorage
    localStorage.setItem('equippedCards', JSON.stringify(updatedEquippedCards));
    
    console.log('✅ Card equipped successfully from encyclopedia:', selectedCard);
    console.log('✅ Updated equipped cards:', updatedEquippedCards);
    
    // Show success message
    //alert(`"${selectedCard.name}" has been equipped!`);
    
    // Clear selected card and redirect to character room
    localStorage.removeItem('selectedCard');
    navigate('/character-room');
  };

  // Function to get the correct card image based on card data
  const getCardImage = (card) => {
    if (!card) {
      console.log('getCardImage: No card provided');
      return getFallbackImageUrl();
    }
    
    console.log('getCardImage: Card data:', card);
    console.log('getCardImage: Card image key:', card.image);
    
    // Try to get the dynamic image URL for cards from /assets/cards/
    const dynamicImageUrl = getCardImageUrl(card.image);
    if (dynamicImageUrl) {
      return dynamicImageUrl;
    }
    
    // Fallback to blank card if no image found
    console.log('getCardImage: Using fallback image');
    return getFallbackImageUrl();
  };

  if (!selectedCard) {
    return <div>Loading...</div>;
  }

  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <div className='w-full h-full flex justify-center items-end opacity-50 absolute overflow-hidden'>
        <Room />
      </div>
      <div className='w-full h-full flex flex-col justify-center items-center opacity-100 relative xl:flex-row'>
        <div className='w-vw h-full flex justify-center items-start absolute top-0 left-0'>
          <img 
            src={back} 
            alt="" 
            className='w-[100px] lg:w-[200px] h-auto cursor-pointer hover:opacity-80 z-[100000]' 
            onClick={handleBackClick}
          />
        </div>
        <div className='w-8/10 lg:w-6/10 xl:w-1/2 h-auto flex justify-center items-center lg:px-6 xl:pl-[100px]'>
          <img src={getCardImage(selectedCard)} alt={selectedCard.name} className='w-full xl:w-[400px] h-full object-contain' />
        </div>
        <div className='w-full xl:w-1/2 h-auto flex justify-center xl:justify-start xl:h-[550px] items-center px-10 xl:flex-col'>
          <div className='w-full lg:w-6/10 xl:w-9/10 h-auto flex justify-center items-center xl:mr-60'>
            <img src={board_phone} alt="" className='w-full' />
          </div>
          <div className='absolute top-42 left-0 w-full h-full flex flex-col justify-center items-center gap-3 xl:top-[-120px] xl:pl-[350px]'>
            <div className='w-6/10 text-left text-[18px] lg:text-[30px] lg:w-4/10 lg:pt-100 xl:pt-0 xl:text-[25px] flex flex-col gap-2 lg:gap-7'>
              <p>{selectedCard.type}&nbsp;&nbsp;{selectedCard.name}&nbsp;&nbsp;&nbsp;{selectedCard.rarity}</p>
              {selectedCard.quantity && selectedCard.quantity > 1 && (
                <p className='text-blue-600 font-bold'>所持数: {selectedCard.quantity}枚</p>
              )}
              <p>
                {selectedCard.description}
              </p>
            </div>
          </div>
        </div>
        <div className='w-auto h-auto flex justify-center items-center block absolute top-[10px] right-[10px]'>
          <img src={possession} alt="possession" className='' />
        </div>
        <div className='w-full h-auto flex justify-center items-center gap-4 mt-5 xl:absolute xl:bottom-[200px] xl:right-[-225px]'>
          <img 
            src={use} 
            alt="" 
            className='w-[150px] cursor-pointer hover:opacity-80 z-[1000000]' 
            onClick={handleUseClick}
          />
        </div>
      </div>
    </div>
  )
}
