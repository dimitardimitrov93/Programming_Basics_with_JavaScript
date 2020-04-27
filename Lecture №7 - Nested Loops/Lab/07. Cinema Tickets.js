function solve(input) {
  let movieName = input.shift();
  let availableSeats = Number(input.shift());
  let ticketType = input.shift();

  let totalStudentTicketCounter = 0;
  let totalStandardTicketCounter = 0;
  let totalKidTicketCounter = 0;

  let totalTickets = 0;
  let finalNumberOfTickets = 0;

  let currentOccupationPercent = 0;

  let studentTicketsPercent = 0;
  let standardTicketsPercent = 0;
  let kidTicketsPercent = 0;

  while (movieName != "Finish") {
    while (ticketType != "End") {
      if (ticketType == "standard") {
        totalStandardTicketCounter++;
      } else if (ticketType == "student") {
        totalStudentTicketCounter++;
      } else if (ticketType == "kid") {
        totalKidTicketCounter++;
      }

      totalTickets++;
      finalNumberOfTickets++;

      if (totalTickets >= availableSeats) {
        break;
      }

      ticketType = input.shift();
    }

    currentOccupationPercent = (totalTickets / availableSeats) * 100;
    console.log(`${movieName} - ${currentOccupationPercent.toFixed(2)}% full.`);
    totalTickets = 0;

    movieName = input.shift();
    availableSeats = Number(input.shift());
    ticketType = input.shift();
  }

  studentTicketsPercent =
    (totalStudentTicketCounter / finalNumberOfTickets) * 100;
  standardTicketsPercent =
    (totalStandardTicketCounter / finalNumberOfTickets) * 100;
  kidTicketsPercent = (totalKidTicketCounter / finalNumberOfTickets) * 100;

  console.log(`Total tickets: ${finalNumberOfTickets}`);
  console.log(`${studentTicketsPercent.toFixed(2)}% student tickets.`);
  console.log(`${standardTicketsPercent.toFixed(2)}% standard tickets.`);
  console.log(`${kidTicketsPercent.toFixed(2)}% kids tickets.`);
}

solve([
  "Taxi",
  "10",
  "standard",
  "kid",
  "student",
  "student",
  "standard",
  "standard",
  "End",
  "Scary Movie",
  "6",
  "student",
  "student",
  "student",
  "student",
  "student",
  "student",
  "Finish",
]);
// solve([
//   "The Matrix",
//   "20",
//   "student",
//   "standard",
//   "kid",
//   "kid",
//   "student",
//   "student",
//   "standard",
//   "student",
//   "End",
//   "The Green Mile",
//   "17",
//   "student",
//   "standard",
//   "standard",
//   "student",
//   "standard",
//   "student",
//   "End",
//   "Amadeus",
//   "3",
//   "standard",
//   "standard",
//   "standard",
//   "Finish",
// ]);