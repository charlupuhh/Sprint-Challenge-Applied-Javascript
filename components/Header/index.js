// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header(day, titleName, temp) {
    let head = document.createElement('header');
    head.classList.add('header');

    let date = document.createElement('span');
    date.classList.add('date');
    date.textContent = day;
    head.appendChild(date);

    let title = document.createElement('h1');
    title.textContent = titleName;
    head.appendChild(title)

    let temperature = document.createElement('span');
    temperature.textContent = temp;
    head.appendChild(temperature);

    return head;
}

document.querySelector('.header-container').append(Header('SMARCH 28, 2019', 'Lambda Times', '98°'));

