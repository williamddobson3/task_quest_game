import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Room from './room';
import card from '../../assets/card.png';
import use from '../../assets/use.png';
import remove from '../../assets/remove.png';
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
    console.log('Room-ticket: Loading card data:', cardData);
    
    if (cardData) {
      try {
        const parsedCard = JSON.parse(cardData);
        console.log('Room-ticket: Parsed card:', parsedCard);
        setSelectedCard(parsedCard);
      } catch (error) {
        console.error('Room-ticket: Error parsing card data:', error);
        localStorage.removeItem('selectedCard');
        navigate('/character-room');
      }
    } else {
      console.log('Room-ticket: No card data found, redirecting to character room');
      // If no card data, redirect back to character room
      navigate('/character-room');
    }
  }, [navigate]);

  // Cleanup effect to clear selectedCard when component unmounts
  useEffect(() => {
    return () => {
      // Don't clear selectedCard here as it might be needed for navigation
      console.log('Room-ticket: Component unmounting');
    };
  }, []);

  const handleBackClick = () => {
    // Clear the selected card when going back
    localStorage.removeItem('selectedCard');
    console.log('Room-ticket: Cleared selectedCard on back navigation');
    navigate('/character-room');
  };

  const handleUseClick = () => {
    if (!selectedCard) return;
    
    console.log('Using card:', selectedCard);
    
    // Get current equipped cards from localStorage
    const equippedCards = JSON.parse(localStorage.getItem('equippedCards') || '[]');
    console.log('Current equipped cards:', equippedCards);
    
    // Check if card is already equipped
    const isAlreadyEquipped = equippedCards.some(card => card.id === selectedCard.id);
    if (isAlreadyEquipped) {
      //alert('This card is already equipped!');
      return;
    }
    
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
      
      console.log('✅ Job card equipped successfully:', selectedCard);
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
    
    console.log('✅ Card equipped successfully:', selectedCard);
    console.log('✅ Updated equipped cards:', updatedEquippedCards);
    
    // Show success message
    //alert(`"${selectedCard.name}" has been equipped!`);
    
    // Clear selected card and redirect to character room
    localStorage.removeItem('selectedCard');
    navigate('/character-room');
  };

  const handleRemoveClick = () => {
    if (!selectedCard) return;
    
    // Show confirmation dialog
    const confirmRemove = window.confirm(`Are you sure you want to unequip "${selectedCard.name}" from your equipment slots?`);
    if (!confirmRemove) return;
    
    console.log('Starting equipment removal process for:', selectedCard);
    
    // Remove from equipped cards
    const currentEquippedCards = JSON.parse(localStorage.getItem('equippedCards') || '[]');
    console.log('Current equipped cards before removal:', currentEquippedCards);
    
    // Remove the selected card from equipped cards
    const updatedEquippedCards = currentEquippedCards.filter(card => card.id !== selectedCard.id);
    
    // Update localStorage with the filtered equipped cards
    localStorage.setItem('equippedCards', JSON.stringify(updatedEquippedCards));
    console.log('✅ Removed from equipped cards:', updatedEquippedCards);
    
    // Add the card back to player collection (item-box)
    const currentPlayerCards = JSON.parse(localStorage.getItem('playerCards') || '[]');
    console.log('Current player cards before adding back:', currentPlayerCards);
    
    // Check if the card already exists in the collection
    const existingCardIndex = currentPlayerCards.findIndex(card => {
      const key = card.id || card.name || card.image;
      const selectedKey = selectedCard.id || selectedCard.name || selectedCard.image;
      return key === selectedKey;
    });
    
    if (existingCardIndex !== -1) {
      // If card exists, increase its quantity
      currentPlayerCards[existingCardIndex].quantity = (currentPlayerCards[existingCardIndex].quantity || 1) + 1;
      console.log('✅ Increased quantity for existing card:', currentPlayerCards[existingCardIndex]);
    } else {
      // If card doesn't exist, add it with quantity 1
      const cardToAdd = { ...selectedCard, quantity: 1 };
      currentPlayerCards.push(cardToAdd);
      console.log('✅ Added new card to collection:', cardToAdd);
    }
    
    // Save updated player cards
    localStorage.setItem('playerCards', JSON.stringify(currentPlayerCards));
    console.log('✅ Updated player cards:', currentPlayerCards);
    
    // Clear the selected card from localStorage
    localStorage.removeItem('selectedCard');
    console.log('✅ Cleared selectedCard from localStorage');
    
    // Show success message
    //alert(`"${selectedCard.name}" has been unequipped and returned to your item-box!`);
    
    // Redirect to character room
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
      <div className='w-full h-full flex justify-center items-start opacity-50 absolute overflow-hidden'>
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
        <div className='w-auto h-auto flex justify-center items-center hidden xl:block absolute bottom-[300px] right-[350px]'>
          <img src={possession} alt="possession" className='' />
        </div>
        <div className='w-full h-auto flex justify-center items-center gap-4 mt-5 xl:absolute xl:bottom-[200px] xl:right-[-225px] z-[1000000]'>
          <img 
            src={remove} 
            alt="" 
            className='w-[150px] cursor-pointer hover:opacity-80' 
            onClick={handleRemoveClick}
          />
          <img 
            src={use} 
            alt="" 
            className='w-[150px] cursor-pointer hover:opacity-80' 
            onClick={handleUseClick}
          />
        </div>
      </div>
    </div>
  )
}
