"use client"

import Game from "./game";
import QTrebol from '../../public/img/Q-Trebol.jpg';
import KDiamond from '../../public/img/K-Diamond.jpg';
import JTrebol from '../../public/img/J-Trebol.jpg';
import { siteConfig } from "@/config/site";
import { shuffle } from 'lodash';

export default function Page() {
  const selectRandomItems = (array: any[], n: number) => {
    const shuffled = shuffle(array);
    const nItems=shuffled.slice(0, n);
    const pairs= shuffle([...nItems,...nItems]);
    const images= [];
    for(let i=0; i<pairs.length;i++){
      images.push({id:i+1, path: pairs[i]});
    }
    return images;
  };

  const memoTest = {
    id: 1,
    name: "Memory",
    images: selectRandomItems(siteConfig.stickers,15),
  }

  return (
    <div className="flex justify-around flex-wrap bg-cyan-500">
      <Game memoTest={memoTest} backImage={null}/>
    </div>
  );
}

