"use client"

import { useState } from "react";
import CardFlip from "@/components/CardFlip";

interface MemoTest {
  id: number;
  name: string;
  images: any[];
}

export default function Game({memoTest,backImage}:{memoTest : MemoTest, backImage : any}) {
  const items: number[] = [];
  const width: number = 94;
  const height: number = 125;

  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [matchedCards, setMatchedCards] = useState<number[]>([]);
  const [matchedPairs, setMatchedPairs] = useState(0);
  const [retries, setRetries] = useState(0);

  const handleCardClick = (index: number) => {
    if (flippedCards.includes(index+1)) return;
    setFlippedCards((prevFlippedCards) => [...prevFlippedCards, index+1]);

    if (flippedCards.length === 1) {
      const firstCard = memoTest.images[flippedCards[0]-1];
      const secondCard = memoTest.images[index];

      if (firstCard.path === secondCard.path) {
        setMatchedPairs((prevMatchedPairs) => prevMatchedPairs + 1);
        setMatchedCards((prevMatchedCards) => [...prevMatchedCards, firstCard.id, secondCard.id]);
        setFlippedCards([]);
      } else {
        setTimeout(() => {
          setRetries((prevRetries) => prevRetries + 1);
          setFlippedCards([]);
        }, 2000);
      }
    }
  };

  return (
    <div className="memo-test-container">
        <div className="h-[60px] w-[100%] bg-gray-600 flex justify-center items-center">
            <p>Retries: {retries}  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </p>
            <p> MatchedPairs:  {matchedPairs}</p>
          </div>

      <div className="flex justify-around flex-wrap memo-test-board">
        {memoTest.images.map((image, index) => (
          <CardFlip
            key={index+1}
            item={image}
            width={width}
            height={height}
            backImage={backImage}
            onClick={() => handleCardClick(index)} 
            flippedCards={flippedCards}
            matchedCards={matchedCards}
          />
        ))}
      </div>
      {matchedPairs === memoTest.images.length / 2 && (
        <div className="game-over text-center">
          <p>Congratulations! You've completed the memo test.</p>

        </div>
      )}
    </div>
  );
};