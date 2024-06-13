
import { useEffect, useState } from "react"
import ProgressBar from "./ProgressBar"

function App() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    
    let time;
    if (progress < 100) {
      time = setInterval(() => {
    setProgress((prev)=>prev+1)  
      }, 25)
      console.log(time);
  }

    return ()=> clearInterval(time);

  }, [progress])


  return (
    <>
      <ProgressBar progress={progress} color={"lightGreen"} />
    </>
  )
}

export default App
