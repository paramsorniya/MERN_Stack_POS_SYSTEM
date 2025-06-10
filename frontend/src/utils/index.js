export const getRandomBG =() => {
    const colors =[
        "#2e4a40",
        "#664a04",
          
    ];
    const color =  colors[Math.floor(Math.random() * colors.length)];
    return "bg-[" + color +"]"
}