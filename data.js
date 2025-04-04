const cardsData = [
    {
        title: 'SpotyMatch',
        image: 'match.png',
        lien: 'https://spotymatch.gatienh.fr/',
        available: true,
    },
    {
        title: 'Quizz Drapeaux',
        image: 'drapeaux.png',
        lien: 'https://drapeaux.gatienh.fr/',
        available: true,
    },
    {
        title: 'SpotyCharts',
        image: 'charts.png',
        lien: 'https://spotycharts.gatienh.fr/',
        available: true,
    },
    {
        title: 'Whozdat',
        image: 'whozdat.png',
        lien: 'https://whozdat.gatienh.fr/',
        available: true,
    },
    {
        title: 'Billions Charts',
        image: 'billions.png',
        lien: 'https://billions-charts.gatienh.fr/',
        available: true,
    },
]

const container = document.getElementById('cards-container');

cardsData.forEach(data => {
    const card = createCard(data);
    container.appendChild(card);
});