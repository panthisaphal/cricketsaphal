
const liveMatchesContainer = document.getElementById('liveMatches');
const upcomingFixturesContainer = document.getElementById('upcomingFixtures');
const playerStatsContainer = document.getElementById('playerStats');
const recentResultsContainer = document.getElementById('recentResults');

function createMatchCard(match) {
    const card = document.createElement('div');
    card.className = 'card';

    const teams = `${match.team1} vs ${match.team2}`;
    const date = new Date(match.date).toLocaleString();
    const score = match.score || 'Score not available';

    card.innerHTML = `
        <h3>${teams}</h3>
        <p><strong>Status:</strong> ${match.status}</p>
        <p><strong>Date/Time:</strong> ${date}</p>
        <p><strong>Score:</strong> ${score}</p>
    `;
    return card;
}

function createPlayerCard(player) {
    const card = document.createElement('div');
    card.className = 'card';

    card.innerHTML = `
        <h3>${player.name}</h3>
        <p><strong>Team:</strong> ${player.team}</p>
        <p><strong>Matches:</strong> ${player.matches}</p>
        <p><strong>Runs:</strong> ${player.runs}</p>
        <p><strong>Wickets:</strong> ${player.wickets}</p>
    `;
    return card;
}

function loadLiveMatches() {
    liveMatchesContainer.innerHTML = '<p class="loading">Loading live matches...</p>';

    // Simulated API response
    const liveMatches = [
        {
            team1: 'India',
            team2: 'Australia',
            date: '2025-08-08T14:00:00Z',
            score: 'India 150/3 (20 overs)',
            status: 'Live'
        },
        {
            team1: 'England',
            team2: 'South Africa',
            date: '2025-08-08T16:00:00Z',
            score: 'England 180/5 (20 overs)',
            status: 'Live'
        }
    ];

    setTimeout(() => {
        liveMatchesContainer.innerHTML = '';
        liveMatches.forEach(match => {
            liveMatchesContainer.appendChild(createMatchCard(match));
        });
    }, 1000);
}

function loadUpcomingFixtures() {
    upcomingFixturesContainer.innerHTML = '<p class="loading">Loading upcoming matches...</p>';

    const upcomingMatches = [
        {
            team1: 'Pakistan',
            team2: 'New Zealand',
            date: '2025-08-10T10:00:00Z',
            status: 'Upcoming',
            score: ''
        },
        {
            team1: 'Sri Lanka',
            team2: 'Bangladesh',
            date: '2025-08-11T14:00:00Z',
            status: 'Upcoming',
            score: ''
        }
    ];

    setTimeout(() => {
        upcomingFixturesContainer.innerHTML = '';
        upcomingMatches.forEach(match => {
            upcomingFixturesContainer.appendChild(createMatchCard(match));
        });
    }, 1200);
}

function loadRecentResults() {
    recentResultsContainer.innerHTML = '<p class="loading">Loading recent results...</p>';

    const recentResults = [
        {
            team1: 'West Indies',
            team2: 'Zimbabwe',
            date: '2025-08-05T14:00:00Z',
            score: 'West Indies won by 5 wickets',
            status: 'Finished'
        },
        {
            team1: 'Afghanistan',
            team2: 'Ireland',
            date: '2025-08-06T14:00:00Z',
            score: 'Match Drawn',
            status: 'Finished'
        }
    ];

    setTimeout(() => {
        recentResultsContainer.innerHTML = '';
        recentResults.forEach(match => {
            recentResultsContainer.appendChild(createMatchCard(match));
        });
    }, 1100);
}

function loadPlayerStats() {
    playerStatsContainer.innerHTML = '<p class="loading">Loading player stats...</p>';

    const players = [
        { name: 'Virat Kohli', team: 'India', matches: 254, runs: 12040, wickets: 4 },
        { name: 'Steve Smith', team: 'Australia', matches: 130, runs: 7200, wickets: 17 },
        { name: 'Kane Williamson', team: 'New Zealand', matches: 150, runs: 6700, wickets: 5 }
    ];

    setTimeout(() => {
        playerStatsContainer.innerHTML = '';
        players.forEach(player => {
            playerStatsContainer.appendChild(createPlayerCard(player));
        });
    }, 900);
}

function init() {
    loadLiveMatches();
    loadUpcomingFixtures();
    loadRecentResults();
    loadPlayerStats();
}

window.onload = init;
