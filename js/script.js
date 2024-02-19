// initial numeric values
let availableSeats = 40;
let numberOfTicket = 0;
let totalPrice = 0;
let grandTotal = 0;
let ticketCount = 0;

const ticketPrice = 550;
const couponNew = "NEW15";
const couponCouple = "Couple 20";
const selectedSeats = [];

// get ref from element
const orderItems = document.getElementById("orderItems");
const seats = document.querySelectorAll(".seat");
const applyCouponBtn = document.getElementById("applyCouponBtn");
const couponField = document.getElementById("coupon");
const discountAmount = document.getElementById("discountAmount");
const nextBtn = document.getElementById("nextBtn");
const passengerNumber = document.getElementById("passengerNumber");

function enableNextBtn(numberOfTicket, passengerNumber) {
  const numberLen = passengerNumber.length;
  if (numberOfTicket > 0 && numberLen > 0) {
    nextBtn.removeAttribute("disabled");
  }
}

// iterate through all seat to add click event
for (const seat of seats) {
  seat.addEventListener("click", (event) => {
    const seatName = event.target.innerText;

    if (ticketCount < 4 && !selectedSeats.includes(seatName)) {
      ticketCount++;
      seat.style.backgroundColor = "#1DD100";
      seat.style.color = "#fff";
      selectedSeats.push(seatName);
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
      setElementTextById("availableSeats", availableSeats);
      setElementTextById("numberOfTicket", numberOfTicket);
      setElementTextById("totalPrice", totalPrice);
      setElementTextById("grandTotal", grandTotal);

      if (numberOfTicket === 4) {
        applyCouponBtn.removeAttribute("disabled");
      }
    } else if (ticketCount === 4) {
      alert("You can't book more then 4 ticket");
    }
  });
}

// button event to calculate discount amount
applyCouponBtn.addEventListener("click", (e) => {
  const CouponInput = getInputValueById("coupon");
  clearInputValueById("coupon");

  switch (CouponInput) {
    case couponNew:
      const discount15 = (totalPrice * 15) / 100;
      grandTotal -= discount15;
      console.log(grandTotal);
      showElementById("discountAmount");
      setElementTextById("discount", `BDT ${discount15}`);
      setElementTextById("grandTotal", grandTotal);
      hideElementById("couponArea");
      break;
    case couponCouple:
      const discount20 = (totalPrice * 20) / 100;
      grandTotal -= discount20;
      console.log(grandTotal);
      showElementById("discountAmount");
      setElementTextById("discount", `BDT ${discount20}`);
      setElementTextById("grandTotal", grandTotal);
      hideElementById("couponArea");
      break;
    default:
      alert("Enter a valid coupon code");
  }
});

// event handler to enable next btn
passengerNumber.addEventListener("change", (e) => {
  const passengerNumber = e.target.value;
  enableNextBtn(numberOfTicket, passengerNumber);
});

// show modal on click
nextBtn.addEventListener("click", () => {
  my_modal_1.showModal();
  clearInputValueById('passengerNumber');
  for (const seat of seats) {
    seat.style.backgroundColor = "#F7F8F8";
    seat.style.color = "#03071280";
  }
});