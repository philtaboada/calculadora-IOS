import { useEffect, useRef, useState } from "react"

enum Operator {
  add = "+",
  subtract = "-",
  multiply = "X",
  divide = "÷",
}

export const useCalculator = () => {

  const [formula, setFormula] = useState("0");

  const [number, setNumber] = useState("0");
  const [prevNumber, setPrevNumber] = useState("0");

  const lastOperation = useRef<Operator>();

  useEffect(() => {


    setFormula(number);
  }, [number])

  const clean = () => {
    setNumber("0");
    setPrevNumber("0");
    setFormula("0");

    lastOperation.current = undefined;
  }

  const toggleSign = () => {
    if(number.includes('-')) {
      return setNumber(number.replace('-', ''));
    }

    setNumber('-' + number);
  }

  const deleteLast = () => {
    let currentSign = '';
    let temporalNumber = number

    if(number.includes('-')) {
      currentSign = '-';
      temporalNumber = number.substring(1)
    }

    if(temporalNumber.length > 1 ) {
      return setNumber(currentSign + temporalNumber.slice(0, -1));
    }

    setNumber('0')
  }

  const buildNumber = (numberString: string) => {
    if (number.includes('.') && numberString === '.') return;

    if (number.startsWith('0') || number.startsWith('-0')) {
      if (numberString === '.') {
        return setNumber(number + numberString);
      }

      if (numberString === '0' && number.includes('.')) {
        return setNumber(number + numberString);
      }

      if (numberString != '0' && !number.includes('.')) {
        return setNumber(numberString);
      }

      if (numberString === '0' && !number.includes('.')) {
        return;
      };
    }

    setNumber(number + numberString);
  }

  return {
    // props
    formula,
    number,
    prevNumber,

    // methods
    buildNumber,
    clean,
    toggleSign,
    deleteLast
  }
}