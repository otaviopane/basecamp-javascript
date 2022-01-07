function calculator() {
  const operation = Number(
    prompt(
      `Type the operation number: 
      \n1 - Addition (+)
      \n2 - Subtraction (-)
      \n3 - Multiplication (*)
      \n4 - Division (/)
      \n5 - Integer Division (%)
      \n6 - Potentiation (**)`
    )
  );

  if (!operation || operation >= 7) {
    alert(
      `This is not a operation
      \nTry Again`
    );
    calculator();
  } else {
    let n1 = Number(prompt("Type the first number: "));
    let n2 = Number(prompt("Type the second number: "));
    let result;

    if (!n1 || !n2) {
      alert(
        `This is not a valid parameter
            \nTry Again`
      );
      calculator();
    } else {
      function addition() {
        result = n1 + n2;
        alert(`${n1} + ${n2} = ${result}`);
        new_operation();
      }

      function subtraction() {
        result = n1 - n2;
        alert(`${n1} - ${n2} = ${result}`);
        new_operation();
      }

      function multiplication() {
        result = n1 * n2;
        alert(`${n1} * ${n2} = ${result}`);
        new_operation();
      }

      function division() {
        result = n1 / n2;
        alert(`${n1} / ${n2} = ${result}`);
        new_operation();
      }

      function integerDivision() {
        result = n1 % n2;
        alert(`The rest of Integer Division of ${n1} by ${n2} is ${result} `);
        new_operation();
      }

      function potentiation() {
        result = n1 ** n2;
        alert(`${n1} ** ${n2} = ${result}`);
        new_operation();
      }

      function new_operation() {
        let option = Number(
          prompt(
            `Would you like to do a new operation?
        \n1 - Yes
        \n2 - No`
          )
        );

        if (option == 1) {
          calculator();
        } else if (option == 2) {
          alert(`That's all Folks`);
        } else {
          alert(
            `This is not a option
            \nTry Again`
          );
          new_operation();
        }
      }
    }

    if (operation == 1) {
      addition();
    } else if (operation == 2) {
      subtraction();
    } else if (operation == 3) {
      multiplication();
    } else if (operation == 4) {
      division();
    } else if (operation == 5) {
      integerDivision();
    } else if (operation == 6) {
      potentiation();
    }
  }
}

calculator();
