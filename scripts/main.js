let noSeatSelected = 0;
const noTotalSeat = 8

function selectedSeat(seatId) {
    console.log('pressed ', seatId);
    noSeatSelected = noSeatSelected + 1;
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
}