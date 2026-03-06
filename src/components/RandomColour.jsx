import { useState, useEffect } from "react"

function RandomColour() {
  
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [Color, setColor] = useState("");

  useEffect(() => {
    document.body.style.backgroundColor = Color;
  }, [Color]);


  const handleCreateColor=(length)=>{
          return Math.floor(Math.random()*length)
  }

  const handleCreateHexColor=()=>{
    const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
    let hexColor = "#";
    for(let i=0; i<6;i++){
      hexColor += hex[handleCreateColor(hex.length)]
    }

    console.log(hexColor);
    setColor(hexColor);
  }

  const handleCreateRgbColor=()=>{
    const r = handleCreateColor(256);
    const g = handleCreateColor(256);
    const b = handleCreateColor(256);
  
    setColor(`rgb(${r},${g},${b})`);
  }

  return (
     <div>
      <h1 className="text-xl text-white font-bold">{Color}</h1>
        <div className="flex gap-3 p-6 justify-center">
        <button onClick={()=>setTypeOfColor("hex")} className="bg-zinc-100 rounded-md p-2 cursor-pointer" >Create Hex Color</button>
        <button onClick={()=>setTypeOfColor("rgb")} className="bg-zinc-100 rounded-md p-2 cursor-pointer" >Create RGB Color</button>
        <button onClick={typeOfColor === 'hex' ? handleCreateHexColor : handleCreateRgbColor} className="bg-zinc-100 rounded-md p-2 cursor-pointer" >Generate Random Color</button>
    </div>
      </div>
  )
}

export default RandomColour