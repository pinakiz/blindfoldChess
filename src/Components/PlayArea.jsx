import MyMoves from "./MyMoves"
import Opponent from "./Opponent"


const  PlayArea = () => {
  

  return (
    <div className="flex flex-col mt-10">
      <Opponent />
      <div className="h-[300px] flex flex-col justify-center items-center text-7xl">

        . . 
      </div>
      <MyMoves />
    </div>
  )
}

export default PlayArea
