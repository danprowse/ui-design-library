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
function findMatches(wordToMatch, storedAds) {
    return storedAds.filter(ad => {
      //if city of state matches what was searched.
      const reg = new RegExp(wordToMatch, 'gi');
      return ad.name.match(reg);
    });
  }
  
  function displayMatches() {
    const matchArray = findMatches(this.value, storedAds);
    const tbody = document.getElementById('ad-list');
    const html = matchArray.map(ad => {
        return `
        <tr class="priority-${ad.priority}">
            <td>${ad.name}</td>
            <td>${ad.clicks}</td>
            <td><i class="fas fa-circle"></i>${ad.priority}</td>
            <td>${ad.impressions}</td>
            <td><button class="delete"><i class="fas fa-trash"></i></button></td>
        </tr>
        `;
    }).join('');
    tbody.innerHTML = html;
  }

// Event: display books
document.addEventListener('DOMContentLoaded', UI.displayAds);
const searchInput = document.getElementById('search');
searchInput.addEventListener('keyup', displayMatches);

const storedAds = [
    {
        name: 'Turtle Beach Headset',
        clicks: 857,
        priority: 200,
        impressions: 190
    },
    {
        name: 'Xbox Charging Docking Station',
        clicks: 620,
        priority: 600,
        impressions: 478
    },
    {
        name: 'Keyboard + Mouse + Headphones Combo Set',
        clicks: 500,
        priority: 300,
        impressions: 322
    },
    {
        name: 'Zoostorm Gaming Chair',
        clicks: 420,
        priority: 200,
        impressions: 197
    },
    {
        name: 'PS4 Controller',
        clicks: 170,
        priority: 300,
        impressions: 289
    },
    {
        name: '24" LG Monitor',
        clicks: 743,
        priority: 600,
        impressions: 412
    },
    {
        name: 'PC Cleaning Kit',
        clicks: 89,
        priority: 300,
        impressions: 119
    },
    {
        name: 'XPS 15 9th Generation - Core i7',
        clicks: 388,
        priority: 200,
        impressions: 293
    }
];