getCalculate = () => {
  const [input1, input2] = getInput("input1", "input2");
  console.log(input1 + input2);
};

getInput = (data1, data2) => {
  const input1 = parseFloat(document.getElementById(data1).value);
  const input2 = parseFloat(document.getElementById(data2).value);
  return [input1, input2];
};
