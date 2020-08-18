const results = document.querySelector('#results');
const loader = document.querySelector('#loading');
document.querySelector('.calculate').addEventListener('click', function (e) {
    results.style.display = 'none';
    loader.style.display = 'block';

    setTimeout(calculate, 2000)

    e.preventDefault();
});

function calculate() {
    loader.style.display = 'none';
    results.style.display = 'block';

    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');

    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) / 100 / 12;
    const calculatedPayments = parseFloat(years.value) * 12;

    // Compute monthly payment
    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal * x * calculatedInterest) / (x - 1);

    if (isFinite(monthly)) {
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatedPayments).toFixed(2);
        totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2);
    } else {
        showError('Please check your numbers');
    }
}

function showError(error) {
    loader.style.display = 'none';
    results.style.display = 'none';

    errorAlert = document.createElement('div');
    errorAlert.className = 'alert alert-danger';
    errorAlert.role = 'alert';
    errorAlert.textContent = error;
    takeIn = document.querySelector('#alert').appendChild(errorAlert);

    setTimeout(() => {
        takeIn.style.display = 'none';
    }, 2000);

    console.log(error)
}