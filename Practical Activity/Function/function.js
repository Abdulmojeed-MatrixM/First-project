function outerFunction() {
  const secret = "This message";

  function innerFunction() {
    console.log(secret);
  }

  return innerFunction;
}
const closure = outerFunction();
closure();



// fucntion parameters
const bestColors = ["Coral", "Blue", "DeepPink"];

function updateMyBestColors(previousColors, newColor) {
   const mybestColors = [...previousColors, newColor];
   return mybestColors;
}

updateMyBestColors(bestColors, "GreenYellow");