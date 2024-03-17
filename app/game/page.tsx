"use client"

import Game from "./game";
import QTrebol from '../../public/img/Q-Trebol.jpg';
import KDiamond from '../../public/img/K-Diamond.jpg';
import JTrebol from '../../public/img/J-Trebol.jpg';

export default function Page() {
  const memoTest = {
    id: 1,
    name: "Memory",
    images: [
      {id:1, path:KDiamond.src},
      {id:2, path:QTrebol.src},
      {id:3, path:KDiamond.src},
      {id:4, path:QTrebol.src},
      {id:5, path:JTrebol.src},
      {id:6, path:JTrebol.src},
      {id:7, path:KDiamond.src},
      {id:8, path:KDiamond.src},
      {id:9, path:QTrebol.src},
      {id:10, path:QTrebol.src},    
      {id:11, path:JTrebol.src},
      {id:12, path:JTrebol.src},
      {id:13, path:QTrebol.src},
      {id:14, path:KDiamond.src},
      {id:15, path:JTrebol.src},
      {id:16, path:JTrebol.src},
      {id:17, path:QTrebol.src},
      {id:18, path:KDiamond.src},
      {id:19, path:QTrebol.src},
      {id:20, path:KDiamond.src},
      {id:21, path:QTrebol.src},
      {id:22, path:KDiamond.src},
      {id:23, path:JTrebol.src},
      {id:24, path:KDiamond.src},
      {id:25, path:JTrebol.src},
      {id:26, path:QTrebol.src},
      {id:27, path:JTrebol.src},
      {id:28, path:JTrebol.src},
      {id:29, path:KDiamond.src},
      {id:30, path:QTrebol.src},
    ]
  }

  return (
    <div className="flex justify-around flex-wrap bg-cyan-500">
      <Game memoTest={memoTest} backImage={null}/>
    </div>
  );
}

