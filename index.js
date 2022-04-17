const chart = document.querySelector("#chart").getContext('2d');

// create a new chart instance
new Chart(chart, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],

        datasets: [
            {
                label: 'BTC',
                data: [29374, 33537, 49631, 59094, 57828, 36684, 33572, 33985, 48847, 48116, 61004],
                borderColor: 'red',
                borderWidht: 2
            },
            {
                label: 'ETH',
                data: [31500, 41000, 35000, 88800, 26000, 46000, 32589, 50000, 3000, 18542, 24856],
                borderColor: 'blue',
                borderWidht: 2
            }
        ]
    },
    options: {
        responsive: true
    }
})





// show or hide sidebar

const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const sidebar = document.querySelector("aside");

//Show sidebar
menuBtn.addEventListener('click', () => {
    sidebar.style.display = 'block';
})

//CLose sidebar
closeBtn.addEventListener('click', () => {
    sidebar.style.display = 'none';
})








// DARK THEME - CHANGE THEME

const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener( 'click', () => {
    document.body.classList.toggle('dark-theme');

    

    themeBtn.querySelector("span:first-child").classList.toggle("active");
    themeBtn.querySelector("span:last-child").classList.toggle("active");
})