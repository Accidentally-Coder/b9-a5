let noSeatSelected = 0;
const noTotalSeat = 8
let totalPrice = 0;
let grandTotalPrice = 0;

function selectedSeat(seatId) {
    console.log('pressed ', seatId);
    // if more than 4 seats selected
    if (noSeatSelected >= 4) {
        console.log("You cannot select more than 4");
        moreSeatModal.showModal();
    } else {
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
        // appending new row
        seatName = seatSelected.innerHTML;
        var tableBody = document.getElementById("price-table").getElementsByTagName("tbody")[0];
        var newRow = tableBody.insertRow(tableBody.rows.length);

        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(2);

        cell1.innerHTML = seatName;
        cell2.innerHTML = "Economy";
        cell3.innerHTML = "550";
    }
}

function applyCoupon() {
    console.log('Applied coupon');
    const couponElement = document.getElementById("coupon-field");
    const couponValue = couponElement.value;
    console.log(couponValue);
    if (couponValue === "NEW15") {
        let discountPrice = 0.15 * totalPrice;
        grandTotalPrice -= discountPrice;
        // appending new row
        var tableBody = document.getElementById("coupon-table").getElementsByTagName("tbody")[0];
        var newRow = tableBody.insertRow(tableBody.rows.length);

        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);

        cell1.innerHTML = "Discount Price";
        cell2.innerHTML = "" + discountPrice;
        // updating grand Total
        const grandTotalElement = document.getElementById("grand-total");
        grandTotalElement.innerHTML = grandTotalPrice;

    } else if (couponValue === "Couple 20") {

    } else {
        console.log('wrong coupon');
    }

}