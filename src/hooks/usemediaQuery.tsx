import { useEffect, useState } from "react";



const useMediaQuery = () => {
    const [matches, setMatches] = useState(false);
  
    useEffect(() => {

    const listener = () => {
        // eslint-disable-next-line no-restricted-globals
        setMatches(screen.width / 2 > window.innerWidth)
    };
    
    window.addEventListener("resize", listener);
    console.log(matches, listener);
    return () => window.removeEventListener("resize", listener);
  }, [matches]);


  // returns true, when resize matches screen width devided by 2 
  return matches;
}



export default useMediaQuery;