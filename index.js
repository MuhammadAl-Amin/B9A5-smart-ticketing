let clickHandler = false;
function colorAdding(elementId){
    let buttonColor = document.getElementById(elementId);
    buttonColor.classList.add('bg-[#1DD100]');
    
}

function nonBookedSeats(elementId){
    let nonBookedSeatCount = document.getElementById(elementId);
    let nonBookedSeatCountNumber = nonBookedSeatCount.innerText;
    let nonBookedSeatCountStringToNumber = parseInt(nonBookedSeatCountNumber);
    let nonBookedSeatNumber = nonBookedSeatCountStringToNumber - 1;
    nonBookedSeatCount.innerText = nonBookedSeatNumber;
    return nonBookedSeatCountNumber;
    
}

function seatDetails(elementId1, elementId2) {
    let seatDetailsId = document.getElementById(elementId1);
    let seatNumber = document.getElementById(elementId2).innerText;

    let seatNumberAdded = document.createElement('p');
    seatNumberAdded.textContent = seatNumber;
    seatDetailsId.appendChild(seatNumberAdded);

    let ticketClass = document.createElement('p');
    ticketClass.textContent = 'Economic';
    seatDetailsId.appendChild(ticketClass);

    let ticketPrice = document.createElement('p');
    ticketPrice.textContent = 550;
    seatDetailsId.appendChild(ticketPrice);

    
}

function setClick(){
   if(!clickHandler){
    colorAdding('a1');
    nonBookedSeats('non-booked');
    seatDetails('seat-details', 'a1')
   }

   clickHandler = true;
}

function setA2(){
    if(!clickHandler){
        colorAdding('a2');
        nonBookedSeats('non-booked');
        seatDetails('seat-details', 'a2')
       }
       clickHandler = true;
}