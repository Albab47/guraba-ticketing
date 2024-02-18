// initial numeric values
let availableSeats = 40;
let numberOfTicket = 0;
let totalPrice = 0;
let grandTotal = 0;
const ticketPrice = 550;
let selectedSeat = 0;

// get ref from element
const orderItems = document.getElementById("orderItems");
const seats = document.querySelectorAll(".seat");

// iterate through all seat to add click event
for (const seat of seats) {
  seat.addEventListener("click", (event) => {
    selectedSeat++;
    if (selectedSeat <= 4) {
      seat.style.backgroundColor = "#1DD100";
      seat.style.color = "#fff";
      const seatName = event.target.innerText;
      const li = document.createElement("li");
      const h6 = document.createElement("h6");
      const p = document.createElement("p");
      const span = document.createElement("span");
      h6.textContent = seatName;
      p.textContent = "Economy";
      span.textContent = ticketPrice;
      li.appendChild(h6);
      li.appendChild(p);
      li.appendChild(span);
      li.classList.add("flex", "justify-between");
      orderItems.appendChild(li);
      availableSeats--;
      numberOfTicket++;
      totalPrice += ticketPrice;
      grandTotal += ticketPrice;
      setElementTextById('availableSeats', availableSeats);
      setElementTextById('numberOfTicket', numberOfTicket);
      setElementTextById('totalPrice', totalPrice);
      setElementTextById('grandTotal', grandTotal);
    }
  });
}
