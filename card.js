function createCard(data) {
    const card = document.createElement('div');
    card.className = 'card';
    
    const cardLink = document.createElement('a');
    if (data.available) {
        card.classList.add('card-available');
        cardLink.href = data.lien;
        cardLink.target = '_blank';

        const indicationText = document.createElement('div');
        indicationText.className = 'indication-text';
        indicationText.textContent = data.title;
        card.appendChild(indicationText);
    } 
    else {
        card.classList.add('card-disabled');
        cardLink.style.pointerEvents = 'none';

        const constructionText = document.createElement('div');
        constructionText.className = 'construction-text';
        constructionText.textContent = 'Bientot disponible';
        card.appendChild(constructionText);
    }
    cardLink.className = 'card-link';
    card.appendChild(cardLink);

    const img = document.createElement('img');
    img.className = 'card-img';
    img.src = "jeux/" + data.image;
    img.alt = data.title;
    cardLink.appendChild(img);

    return card;
}