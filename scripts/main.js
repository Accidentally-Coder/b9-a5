let noSeatSelected = 0;
const noTotalSeat = 8
let totalPrice = 0;
let grandTotalPrice = 0;
let selectedSeatArray = new Array();
// const phoneElement = document.getElementById("phone");

// // Add an event listener for the input event on the phone element
// phoneElement.addEventListener("input", onSelectionChange);

function selectedSeat(seatId) {
    // if more than 4 seats selected
    if (noSeatSelected >= 4) {
        // check if already selected
        if (selectedSeatArray.includes(seatId)) {
            return;
        }
        moreSeatModal.showModal();
    } else {
        // checking if selected seat is already included or not
        if (selectedSeatArray.includes(seatId)) {
            return;
        }

        const seatSelected = document.getElementById(seatId);
        // add to array
        selectedSeatArray.push(seatId);
        // changing button color to green
        seatSelected.classList.add('bg-[#1DD100]')
        seatSelected.classList.replace('text-gray-400', 'text-white');

        // maths
        noSeatSelected = noSeatSelected + 1;
        if (noSeatSelected > 0) {
            nextButtonElement = document.getElementById("next-button");
            nextButtonElement.classList.replace('btn-disabled', 'btn-enabled');
        }

        if (noSeatSelected == 4) {
            applyCouponButtonElement = document.getElementById("apply-btn");
            applyCouponButtonElement.classList.replace('btn-disabled', 'btn-enabled');
        }
        totalPrice = totalPrice + 550;
        grandTotalPrice = grandTotalPrice + 550;

        // changing "n Seats Left" text
        seatLeftId = document.getElementById("seatLeftId");
        seatLeftId.innerHTML = (noTotalSeat - noSeatSelected) + " Seats Left";

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
    const couponElement = document.getElementById("coupon-field");
    const couponValue = couponElement.value;
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

        // hiding coupon-section
        const couponSectionElement = document.getElementById("coupon-section");
        couponSectionElement.classList.add('hidden');

    } else if (couponValue === "Couple 20") {
        let discountPrice = 0.20 * totalPrice;
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

        // hiding coupon-section
        const couponSectionElement = document.getElementById("coupon-section");
        couponSectionElement.classList.add('hidden');

    } else {
        invalidCouponModal.showModal();
    }

}
