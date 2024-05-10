import useSpeechRecognition from "../hooks/speechHook";


const Listen = () => {
  
const {text,isListening,startListening,stopListening,hasRecognitionSuppport} = useSpeechRecognition()
  
  return (
    <div className=" flex justify-center flex-col items-center">
      {
       
       hasRecognitionSuppport ? <div>
          <button onMouseDown={startListening} onMouseUp={stopListening} className="text-xl font-medium border-2 p-4 rounded-xl border-black hover:border-white hover:bg-black hover:text-white">Listen</button>
        </div> 
        : (<>No support</>)
      }
        <div className="text-sm">{isListening ? <>Listening</>: null}</div> 
        {text !== '' && <div className=""><p className="font-bold inline-block">Your text : </p> {text}</div>}
       
    </div>
  );
};
export default Listen;