import {useState, useEffect} from "react"
import {motion} from "framer-motion"

export default function CardFlip(
  {item, width,  height, backImage, onClick, flippedCards, matchedCards}:
  { item: any,
    width: number, 
    height: number,
    backImage: any,
    onClick: () => void,
    flippedCards: number[],
    matchedCards: number[],  
  }) {

  const [isFlipped, setIsFlipped] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
        if(!matchedCards.includes(item.id) && !flippedCards.includes(item.id) && isFlipped){ 
          setIsFlipped(false);
        }    
  }, [flippedCards]);

  const handleFlip = () => {  
    if (flippedCards.length === 2) return;

    if(!isFlipped && !isAnimating) {
      setIsFlipped(!isFlipped)
      setIsAnimating(true)
      onClick();
    }
  }

  return (
    <div className={`flex items-center justify-center w-[${width+20}px] h-[${height+20}px] cursor-pointer`}>
      <div className={`flip-card w-[${width}px] h-[${height}px] rounded-md`} onClick={handleFlip}>
        <motion.div
        className="flip-card-inner w-[100%] h-[100%]"
        initial={false}
        animate={{rotateY: isFlipped ? 180 : 360}}
        transition={{duration: 0.6, animationDirection: "normal"}}
        onAnimationComplete={()=> setIsAnimating(false)}
        >
          <div className="flip-card-back w-[100%] h-[100%] bg-cover border-[1px] text-green-700 rounded-lg p-4 flex items-center justify-center bg-slate-800"
          style={backImage?{backgroundImage:`url(${backImage})`}:{backgroundColor:"coral"}}
          >
            <h1 className="text-5xl font-bold self-center">{item.id}</h1>
          </div>
          <div className="flip-card-front w-[100%] h-[100%] bg-cover border-[1px] text text-green-700 rounded-lg p-4"
          style={{backgroundImage:`url(${item.path})`}}
          >
          </div>
        </motion.div>
      </div>  
    </div>
  )
}
