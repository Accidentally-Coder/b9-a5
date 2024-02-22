let noSeatSelected = 0;
const noTotalSeat = 8

function selectedSeat(seatId) {
    console.log('pressed ', seatId);
    noSeatSelected = noSeatSelected + 1;
    console.log(noSeatSelected);
    seatLeftId = document.getElementById("seatLeftId");
    seatLeftId.innerHTML = (noTotalSeat - noSeatSelected) + " Seats Left"
}