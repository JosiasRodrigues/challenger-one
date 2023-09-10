
document.addEventListener("DOMContentLoaded", async () => {
    const response = await fetch("repositories/data.json"); //http://url.com/api/
    const data = await response.json()
    const cardContent = document.querySelector('#card-content');

    const header = document.createElement('h2');
    const description = document.createElement('p');

    const imgCoin = document.createElement('img');
    const imgDate = document.createElement('img');
    const imgAvatar = document.createElement('img');

    const pCoin = document.createElement('p');
    const pDate = document.createElement('p');
    const pAvatar = document.createElement('p');

    const hr = document.createElement('hr');
    hr.style.borderColor = 'var(--blue)';
    

    pAvatar.textContent = 'Creation of'
    pAvatar.innerHTML = `${pAvatar.textContent} <span> ${data.authorName}</span>`;
    header.textContent = data.header;
    description.textContent = data.description;

    
    const extraContent = document.createElement('div')
    extraContent.setAttribute('class', 'extra-content');
    const date = document.createElement('span');
    const coin = document.createElement('span');
    const avatarWrapper = document.createElement('span');

    imgCoin.src= '/public/assets/icons/icon-ethereum.svg';
    imgCoin.setAttribute('alt', 'icon-etherium')
    pCoin.textContent = `${data.value} ${data.coin}`



    imgDate.src= '/public/assets/icons/icon-clock.svg';
    imgDate.setAttribute('alt', 'icon-date')
    pDate.textContent = `${data.date}`;

    imgAvatar.src = 'public/assets/images/image-avatar.png';
    imgAvatar.setAttribute('alt', 'author')


    coin.appendChild(imgCoin);
    coin.appendChild(pCoin);

    date.appendChild(imgDate);
    date.appendChild(pDate);

    extraContent.appendChild(coin);
    extraContent.appendChild(date);

    avatarWrapper.setAttribute('class','avatar-wrapper')
    avatarWrapper.appendChild(imgAvatar);
    avatarWrapper.appendChild(pAvatar);

    cardContent.appendChild(header);
    cardContent.appendChild(description);
    cardContent.appendChild(extraContent)
    cardContent.appendChild(hr);
    cardContent.appendChild(avatarWrapper);
  
});




/**/




