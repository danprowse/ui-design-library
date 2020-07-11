// Advert Class
class Advert {
    constructor(name, clicks, priority, impressions) {
        this.name = name;
        this.clicks = clicks;
        this.priority = priority;
        this.impressions = impressions;
    }
}

// UI Class
class UI {
    static displayAds() {
        const adverts = storedAds;
        adverts.forEach((ad) => UI.addAdvertToList(ad));
    }
    
    static addAdvertToList(ad) {
        
        const list = document.getElementById('ad-list');
        
        const row = document.createElement('tr');
        row.className = `priority-${ad.priority}`;
        
        row.innerHTML = `
        <td>${ad.name}</td>
        <td>${ad.clicks}</td>
        <td><i class="fas fa-circle"></i>${ad.priority}</td>
        <td>${ad.impressions}</td>
        <td><button class="delete"><i class="fas fa-trash"></i></button></td>
        `;
        
        list.appendChild(row);
    }
}

// TODO: implement search filter


// TODO: implement delete?

// Event: display books
document.addEventListener('DOMContentLoaded', UI.displayAds);
const storedAds = [
    {
        name: 'Shure SE110 in-ear headphones',
        clicks: 857,
        priority: 200,
        impressions: 190
    },
    {
        name: 'Our favourite iPhone solution',
        clicks: 620,
        priority: 600,
        impressions: 478
    },
    {
        name: 'Audio jack for connecting to your own headphones',
        clicks: 500,
        priority: 300,
        impressions: 322
    },
    {
        name: 'Memory-foam tips',
        clicks: 420,
        priority: 200,
        impressions: 197
    },
    {
        name: 'Cables over the tops',
        clicks: 170,
        priority: 300,
        impressions: 289
    }
];