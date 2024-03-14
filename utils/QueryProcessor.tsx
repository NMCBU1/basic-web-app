export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }
  if (query.toLowerCase().includes("what is your name")) {
    return "Nicolas M";
  }

  if (query.toLowerCase().includes("which of the following numbers is the largest")) {
    const matches = query.match(/\d+/g);
    if (matches) {
      const numbers = matches.map(Number);
      const largestNumber = Math.max(...numbers);
      return `${largestNumber}`;
    }
  }

  if (query.toLowerCase().includes("multiplied")) {
    const matches = query.match(/\d+/g);
    if (matches) {
      const numbers = matches.map(Number);
      const product = numbers.reduce((acc, number) => acc * number, 1); // Start the accumulator at 1 for multiplication
      return `${product}`;
    }
  }

  if (query.toLowerCase().includes("plus")) {
    const matches = query.match(/\d+/g);
    if (matches) {
      const numbers = matches.map(Number);
      const product = numbers.reduce((acc, number) => acc + number, 0); // Start the accumulator at 1 for multiplication
      return `${product}`;
    }
  }
  
  if (query.toLowerCase().includes("which of the following numbers is both a square and a cube")) {
    const matches = query.match(/\d+/g);
    if (matches) {
      const numbers = matches.map(Number);
      const perfectSixthPowers = numbers.filter(number => {
        const sixthRoot = Math.pow(number, 1/6);
        return sixthRoot === Math.floor(sixthRoot);
      });

      if (perfectSixthPowers.length > 0) {
        return `${perfectSixthPowers.join(', ')}`;
      } else {
        return "None";
      }
    }
  }
  if (query.toLowerCase().includes("what is") && query.includes("minus")) {
    const matches = query.match(/-?\d+/g); // This regex matches integers, including negative numbers
    if (matches && matches.length >= 2) { // Ensure there are at least two numbers to perform subtraction
      // Assuming the format "What is X minus Y?"
      const result = Number(matches[0]) - Number(matches[1]);
      return `${result}`;
    }
  }

  if (query.toLowerCase().includes("which of the following numbers are primes")) {
    const matches = query.match(/\d+/g);
    if (matches) {
      const numbers = matches.map(Number);
      const primes = numbers.filter(isPrime);

      if (primes.length > 0) {
        return `T${primes.join(', ')}`;
      } else {
        return "None of the numbers are prime.";
      }
    }
  }

  if (query.toLowerCase().includes("what is") && query.toLowerCase().includes("to the power of")) {
    const matches = query.match(/\d+/g); // This regex matches positive integers
    if (matches && matches.length >= 2) { // Ensure there are at least two numbers for base and exponent
      // Assuming the format "What is X to the power of Y?"
      const base = Number(matches[0]);
      const exponent = Number(matches[1]);
      const result = Math.pow(base, exponent);
      return `${result}`;
    }
  }
  return "";
}

// Helper function to check if a number is prime
function isPrime(number) {
  if (number <= 1) return false; // 0 and 1 are not prime numbers
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
}
