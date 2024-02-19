const allBtn = document.getElementsByClassName('add-btn');
let availableSeat = 40;
let seat = 0;

for (const btn of allBtn){
    btn.addEventListener('click', function(e) {
        
        availableSeat = availableSeat - 1;
        seat = seat + 1;
        const seatNumber = e.target.innerText;

        const mainContainer = document.getElementById('seat-details');
        const li = document.createElement('li');
        li.style.display = 'flex';
        li.style.justifyContent = "space-around"
        const p = document.createElement('p');
        p.innerText = seatNumber;
        const p1 = document.createElement('p');
        p1.innerText = 'Economic';
        const p2 = document.createElement('p');
        p2.innerText = 550;

        e.target.setAttribute("disabled","true");

        li.appendChild(p);
        li.appendChild(p1);
        li.appendChild(p2);


        let costAmount = parseInt(document.getElementById('cost').innerText);
        let totalCost = parseInt(p2.innerText);
        
        const sum = costAmount + totalCost;

        if(sum > 2200){
            alert('Maximum booked 4.');
            return;
        }
        btn.style.backgroundColor = "#1DD100";
        mainContainer.appendChild(li);

        addInnerText('cost', sum);
        addInnerText('non-booked', availableSeat);
        addInnerText('seat-badge',seat)
        grandTotal('cost', sum)
        
    })
    
}


function addInnerText(id, value){
    document.getElementById(id).innerText = value;
}

function grandTotal(){
    let grandTotalAmount = document.getElementById('cost').innerText;
    

    let couponValue = document.getElementById('coupon-value').value;
    if(couponValue === 'NEW15'){
        let newOffer = .15 * grandTotalAmount;
        let newOfferTotal = grandTotalAmount - newOffer;
        addInnerText('grand-total', newOfferTotal);
    }
    else if(couponValue === 'couple 20'){
        let coupleOffer = .20 * grandTotalAmount;
        let coupleOfferTotal = grandTotalAmount - coupleOffer;
        addInnerText('grand-total', coupleOfferTotal);
    }
    else{
        console.log('Please take a valid coupon.')
        addInnerText('grand-total', grandTotalAmount);
    }
}
