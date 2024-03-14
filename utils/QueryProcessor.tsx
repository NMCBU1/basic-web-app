export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }
  if (query.toLowerCase().includes("What is your name?")) {
    return (
      "Nicolas M"
    );
  }

  if (query.toLowerCase().includes("Which of the following numbers is the largest: 3, 14, 60?")) {
    const numbers = str.match(/\d+/g).map(Number);
    const largestNumber = Math.max(...numbers).toString();
    return (
      largestNumber
    );
  }
  return "";
}
