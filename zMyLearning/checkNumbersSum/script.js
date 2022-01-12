function check() {
  alert("Checking Numbers!");
  let n1 = Number(prompt("Type the first number: "));
  let n2 = Number(prompt("Type the second number: "));

  itsEqual();
  sumBetween10and20();

  function itsEqual() {
    if (n1 === n2) {
      alert(`These ${n1} & ${n2} numbers are equal.`);
    } else {
      alert(`These ${n1} & ${n2} numbers are not equal.`);
    }
  }

  function sumBetween10and20() {
    let sum = n1 + n2;

    alert(`The sum is ${sum}.`);

    if (sum > 10 && sum < 20) {
      alert(`It's between 10 & 20.`);
    } else if (sum < 10) {
      alert(`It's less than 10.`);
    } else if (sum === 10) {
      alert(`It's equal 10.`);
    } else if (sum > 20) {
      alert(`It's more than 20.`);
    } else if (sum === 20) {
      alert(`It's equal 20.`);
    }
  }
  newCheck();
}
function newCheck() {
  let choice = Number(
    prompt(
      `Type your choice's number:
          \n1 - New check
          \n2 - That's it`
    )
  );
  switch (choice) {
    case 1:
      check();
      break;
    case 1:
      alert("That's all folks");
      break;
  }
}

check();
