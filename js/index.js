let availableAmount = 5500;

function donate(cardNumber){
    const donationInput = document.getElementById(`donationInput${cardNumber}`);
    const donatedAmountByElement = document.getElementById(`donatedAmount${cardNumber}`);


    const donationAmount = parseFloat(donationInput.value);
    const donatedAmount = parseFloat(donatedAmountByElement.textContent.split(' ')[0]);


    if(isNaN(donationAmount) || donationamount <= 0){
        alert("Please enter valid donation amount");
        return;
    }

    if(donationAmount > availableAmount){
        alert("Don't enough amount your account");
        return;
    }
    donatedAmountByElement.textContent = `${donatedAmount + donationAmount} BDT`;

    availableAmount = availableAmount - donationAmount;

    document.getElementById('availableAmount').textContent = `${availableAmount} BDT`;

    donationInput.value = '';
}

const historyTab = document.getElementById('history-tab');

const donationTab = document.getElementById('donation-tab');
historyTab.addEventListener('click',function(){
    historyTab.classList.add('bg-[#B4F461]');
    historyTab.classList.remove('text-gray-600');
    donationTab.classList.remove('bg-[#B4F461]');
    donationTab.classList.add('text-gray-600');


    document.getElementById('donation-card').classList.add('hidden');
    document.getElementById('history-card').classList.remove('hidden');

});

donationTab.addEventListener('click', function(){
    donationTab.classList.add('bg-[#B4F461]');
    donationTab.classList.remove('text-gray-600');
    historyTab.classList.remove('bg-[#B4F461]');
    historyTab.classList.add('text-gray-600');


    document.getElementById('donation-card').classList.remove('hidden');
    document.getElementById('history-card').classList.add('hidden');
})

