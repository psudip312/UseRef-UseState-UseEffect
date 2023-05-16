import React, { useState } from "react";
import { useRef } from "react";
const Useref = () => {
  // current value access garna ko lagi useRef lai variable ma store garayincha
  const buttonRef = useRef();
  const [isButtonClicked,setIsButtonClicked]=useState(false);
//   isButtonClicked chai false cha hai vanna khojeko means isbuttonclick vako xaina hai vaneko 
// before we use it const[num,setnum]=useState(0) eslo matlab ahele num chai 0 cha vanna khojeko
  const handleClick = () => {
    if(isButtonClicked){
        buttonRef.current.style.backgroundColor="";
        setIsButtonClicked(false);
    }else{
        buttonRef.current.style.backgroundColor="red";
        setIsButtonClicked(true);
    }
    // buttonRef.current.style.backgroundColor = "red";
  };
  return (
    <div>
      <button ref={buttonRef} onClick={handleClick}> Click me!!</button>
    </div>
  );
};
export default Useref;
