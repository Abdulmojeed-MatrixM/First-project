function outerFunction() {
  const secret = "This message";

  function innerFunction() {
    console.log(secret);
  }

  return innerFunction;
}
const closure = outerFunction();
closure();
