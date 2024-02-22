let noSeatSelected = 0;
const noTotalSeat = 8
let totalPrice = 0;
let grandTotalPrice = 0;

function selectedSeat(seatId) {
    console.log('pressed ', seatId);
    // if more than 4 seats selected
    if (noSeatSelected > 4) {
        console.log("You cannot select more than 4");
    }
    noSeatSelected = noSeatSelected + 1;

    totalPrice = totalPrice + 550;
    grandTotalPrice = grandTotalPrice + 550;

    console.log(noSeatSelected);
    // changinn "n Seats Left" text
    seatLeftId = document.getElementById("seatLeftId");
    seatLeftId.innerHTML = (noTotalSeat - noSeatSelected) + " Seats Left";
    // changing button color to green
    const seatSelected = document.getElementById(seatId);
    seatSelected.classList.add('bg-[#1DD100]')
    seatSelected.classList.replace('text-gray-400', 'text-white');
    console.log(seatSelected.classList);
    // changing table "selected-seat-id" number
    const tableBubble = document.getElementById("selected-seat-id");
    tableBubble.innerHTML = noSeatSelected;
    // increase total price "total-price"
    const totalPriceElement = document.getElementById("total-price");
    totalPriceElement.innerHTML = totalPrice;
    // increase grand total "grand-total"
    const grandTotalElement = document.getElementById("grand-total");
    grandTotalElement.innerHTML = grandTotalPrice;

}