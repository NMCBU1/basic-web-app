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
        return `The numbers that are both a square and a cube: ${perfectSixthPowers.join(', ')}.`;
      } else {
        return "None of the numbers are both a square and a cube.";
      }
    }
  }

  return "";
}
