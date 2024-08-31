'use strict';

/**
 * navbar toggle
 */

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

const navToggleEvent = function (elem) {
  for (let i = 0; i < elem.length; i++) {
    elem[i].addEventListener("click", function () {
      navbar.classList.toggle("active");
      overlay.classList.toggle("active");
    });
  }
}


const airports = [
  // United States
  { name: 'Hartsfield-Jackson Atlanta International Airport', code: 'ATL', location: 'Atlanta, Georgia', country: 'United States' },
  { name: 'Los Angeles International Airport', code: 'LAX', location: 'Los Angeles, California', country: 'United States' },
  { name: 'O\'Hare International Airport', code: 'ORD', location: 'Chicago, Illinois', country: 'United States' },
  { name: 'Dallas/Fort Worth International Airport', code: 'DFW', location: 'Dallas/Fort Worth, Texas', country: 'United States' },
  { name: 'John F. Kennedy International Airport', code: 'JFK', location: 'New York City, New York', country: 'United States' },
  { name: 'Denver International Airport', code: 'DEN', location: 'Denver, Colorado', country: 'United States' },
  { name: 'San Francisco International Airport', code: 'SFO', location: 'San Francisco, California', country: 'United States' },
  { name: 'Seattle-Tacoma International Airport', code: 'SEA', location: 'Seattle, Washington', country: 'United States' },
  { name: 'McCarran International Airport', code: 'LAS', location: 'Las Vegas, Nevada', country: 'United States' },
  { name: 'Orlando International Airport', code: 'MCO', location: 'Orlando, Florida', country: 'United States' },
  { name: 'Miami International Airport', code: 'MIA', location: 'Miami, Florida', country: 'United States' },
  { name: 'Philadelphia International Airport', code: 'PHL', location: 'Philadelphia, Pennsylvania', country: 'United States' },
  { name: 'Charlotte Douglas International Airport', code: 'CLT', location: 'Charlotte, North Carolina', country: 'United States' },
  { name: 'Phoenix Sky Harbor International Airport', code: 'PHX', location: 'Phoenix, Arizona', country: 'United States' },
  { name: 'Boston Logan International Airport', code: 'BOS', location: 'Boston, Massachusetts', country: 'United States' },
  { name: 'LaGuardia Airport', code: 'LGA', location: 'New York City, New York', country: 'United States' },
  { name: 'Minneapolis-Saint Paul International Airport', code: 'MSP', location: 'Minneapolis/St. Paul, Minnesota', country: 'United States' },
  { name: 'Detroit Metropolitan Airport', code: 'DTW', location: 'Detroit, Michigan', country: 'United States' },
  { name: 'Houston George Bush Intercontinental Airport', code: 'IAH', location: 'Houston, Texas', country: 'United States' },

  // United Kingdom
  { name: 'Heathrow Airport', code: 'LHR', location: 'London', country: 'United Kingdom' },
  { name: 'Gatwick Airport', code: 'LGW', location: 'London', country: 'United Kingdom' },
  { name: 'Manchester Airport', code: 'MAN', location: 'Manchester', country: 'United Kingdom' },
  { name: 'Birmingham Airport', code: 'BHX', location: 'Birmingham', country: 'United Kingdom' },
  { name: 'London City Airport', code: 'LCY', location: 'London', country: 'United Kingdom' },
  { name: 'Edinburgh Airport', code: 'EDI', location: 'Edinburgh', country: 'United Kingdom' },
  { name: 'Glasgow Airport', code: 'GLA', location: 'Glasgow', country: 'United Kingdom' },

  // France
  { name: 'Paris Charles de Gaulle Airport', code: 'CDG', location: 'Paris', country: 'France' },
  { name: 'Paris Orly Airport', code: 'ORY', location: 'Paris', country: 'France' },
  { name: 'Nice Côte d\'Azur Airport', code: 'NCE', location: 'Nice', country: 'France' },
  { name: 'Lyon-Saint Exupéry Airport', code: 'LYS', location: 'Lyon', country: 'France' },

  // Netherlands
  { name: 'Amsterdam Schiphol Airport', code: 'AMS', location: 'Amsterdam', country: 'Netherlands' },
  { name: 'Rotterdam The Hague Airport', code: 'RTM', location: 'Rotterdam', country: 'Netherlands' },

  // Germany
  { name: 'Frankfurt Airport', code: 'FRA', location: 'Frankfurt', country: 'Germany' },
  { name: 'Munich Airport', code: 'MUC', location: 'Munich', country: 'Germany' },
  { name: 'Berlin Brandenburg Airport', code: 'BER', location: 'Berlin', country: 'Germany' },
  { name: 'Düsseldorf Airport', code: 'DUS', location: 'Düsseldorf', country: 'Germany' },

  // Switzerland
  { name: 'Zurich Airport', code: 'ZRH', location: 'Zurich', country: 'Switzerland' },
  { name: 'Geneva Airport', code: 'GVA', location: 'Geneva', country: 'Switzerland' },

  // Austria
  { name: 'Vienna International Airport', code: 'VIE', location: 'Vienna', country: 'Austria' },
  { name: 'Salzburg Airport', code: 'SZG', location: 'Salzburg', country: 'Austria' },

  // Italy
  { name: 'Rome Fiumicino Airport', code: 'FCO', location: 'Rome', country: 'Italy' },
  { name: 'Milan Malpensa Airport', code: 'MXP', location: 'Milan', country: 'Italy' },
  { name: 'Venice Marco Polo Airport', code: 'VCE', location: 'Venice', country: 'Italy' },
  { name: 'Naples International Airport', code: 'NAP', location: 'Naples', country: 'Italy' },

  // Spain
  { name: 'Madrid-Barajas Adolfo Suárez Airport', code: 'MAD', location: 'Madrid', country: 'Spain' },
  { name: 'Barcelona-El Prat Airport', code: 'BCN', location: 'Barcelona', country: 'Spain' },
  { name: 'Palma de Mallorca Airport', code: 'PMI', location: 'Palma de Mallorca', country: 'Spain' },
  { name: 'Seville Airport', code: 'SVQ', location: 'Seville', country: 'Spain' },

  // Turkey
  { name: 'Istanbul Airport', code: 'IST', location: 'Istanbul', country: 'Turkey' },
  { name: 'Sabiha Gökçen International Airport', code: 'SAW', location: 'Istanbul', country: 'Turkey' },
  { name: 'Ankara Esenboğa Airport', code: 'ESB', location: 'Ankara', country: 'Turkey' },
  { name: 'Antalya Airport', code: 'AYT', location: 'Antalya', country: 'Turkey' },

  // Russia
  { name: 'Moscow Sheremetyevo International Airport', code: 'SVO', location: 'Moscow', country: 'Russia' },
  { name: 'Moscow Domodedovo Airport', code: 'DME', location: 'Moscow', country: 'Russia' },
  { name: 'St. Petersburg Pulkovo Airport', code: 'LED', location: 'St. Petersburg', country: 'Russia' },
  { name: 'Novosibirsk Tolmachevo Airport', code: 'OVB', location: 'Novosibirsk', country: 'Russia' },
  { name: 'Yekaterinburg Koltsovo Airport', code: 'SVX', location: 'Yekaterinburg', country: 'Russia' },

  // Japan
  { name: 'Tokyo Haneda Airport', code: 'HND', location: 'Tokyo', country: 'Japan' },
  { name: 'Tokyo Narita Airport', code: 'NRT', location: 'Tokyo', country: 'Japan' },
  { name: 'Osaka Kansai International Airport', code: 'KIX', location: 'Osaka', country: 'Japan' },
  { name: 'Nagoya Chubu Centrair International Airport', code: 'NGO', location: 'Nagoya', country: 'Japan' },

  // South Korea
  { name: 'Incheon International Airport', code: 'ICN', location: 'Incheon', country: 'South Korea' },
  { name: 'Gimpo International Airport', code: 'GMP', location: 'Seoul', country: 'South Korea' },
  { name: 'Jeju International Airport', code: 'CJU', location: 'Jeju', country: 'South Korea' },

  // China
  { name: 'Beijing Capital International Airport', code: 'PEK', location: 'Beijing', country: 'China' },
  { name: 'Shanghai Pudong International Airport', code: 'PVG', location: 'Shanghai', country: 'China' },
  { name: 'Guangzhou Baiyun International Airport', code: 'CAN', location: 'Guangzhou', country: 'China' },
  { name: 'Shenzhen Bao\'an International Airport', code: 'SZX', location: 'Shenzhen', country: 'China' },
  { name: 'Chengdu Shuangliu International Airport', code: 'CTU', location: 'Chengdu', country: 'China' },

  // Hong Kong
  { name: 'Hong Kong International Airport', code: 'HKG', location: 'Hong Kong', country: 'Hong Kong' },

  // Singapore
  { name: 'Singapore Changi Airport', code: 'SIN', location: 'Singapore', country: 'Singapore' },

  // Australia
  { name: 'Sydney Kingsford Smith Airport', code: 'SYD', location: 'Sydney', country: 'Australia' },
  { name: 'Melbourne Airport', code: 'MEL', location: 'Melbourne', country: 'Australia' },
  { name: 'Brisbane Airport', code: 'BNE', location: 'Brisbane', country: 'Australia' },
  { name: 'Adelaide Airport', code: 'ADL', location: 'Adelaide', country: 'Australia' },
  { name: 'Perth Airport', code: 'PER', location: 'Perth', country: 'Australia' },

  // New Zealand
  { name: 'Auckland Airport', code: 'AKL', location: 'Auckland', country: 'New Zealand' },
  { name: 'Wellington Airport', code: 'WLG', location: 'Wellington', country: 'New Zealand' },
  { name: 'Christchurch Airport', code: 'CHC', location: 'Christchurch', country: 'New Zealand' },

  // Canada
  { name: 'Toronto Pearson International Airport', code: 'YYZ', location: 'Toronto', country: 'Canada' },
  { name: 'Vancouver International Airport', code: 'YVR', location: 'Vancouver', country: 'Canada' },
  { name: 'Montreal-Pierre Elliott Trudeau International Airport', code: 'YUL', location: 'Montreal', country: 'Canada' },
  { name: 'Calgary International Airport', code: 'YYC', location: 'Calgary', country: 'Canada' },
  { name: 'Edmonton International Airport', code: 'YEG', location: 'Edmonton', country: 'Canada' },

  // Brazil
  { name: 'São Paulo/Guarulhos–Governador André Franco Montoro International Airport', code: 'GRU', location: 'São Paulo', country: 'Brazil' },
  { name: 'Rio de Janeiro/Galeão – Antonio Carlos Jobim International Airport', code: 'GIG', location: 'Rio de Janeiro', country: 'Brazil' },
  { name: 'Brasília International Airport', code: 'BSB', location: 'Brasília', country: 'Brazil' },
  { name: 'Salvador Deputado Luís Eduardo Magalhães International Airport', code: 'SSA', location: 'Salvador', country: 'Brazil' },

  // Argentina
  { name: 'Buenos Aires Ministro Pistarini International Airport', code: 'EZE', location: 'Buenos Aires', country: 'Argentina' },
  { name: 'Buenos Aires Aeroparque Jorge Newbery', code: 'AEP', location: 'Buenos Aires', country: 'Argentina' },

  // Mexico
  { name: 'Mexico City International Airport', code: 'MEX', location: 'Mexico City', country: 'Mexico' },
  { name: 'Cancún International Airport', code: 'CUN', location: 'Cancún', country: 'Mexico' },
  { name: 'Guadalajara International Airport', code: 'GDL', location: 'Guadalajara', country: 'Mexico' },

  // South Africa
  { name: 'Cape Town International Airport', code: 'CPT', location: 'Cape Town', country: 'South Africa' },
  { name: 'OR Tambo International Airport', code: 'JNB', location: 'Johannesburg', country: 'South Africa' },
  { name: 'King Shaka International Airport', code: 'DUR', location: 'Durban', country: 'South Africa' },

  // Kenya
  { name: 'Jomo Kenyatta International Airport', code: 'NBO', location: 'Nairobi', country: 'Kenya' },
  { name: 'Moi International Airport', code: 'MBA', location: 'Mombasa', country: 'Kenya' },

  // India
  { name: 'Indira Gandhi International Airport', code: 'DEL', location: 'Delhi', country: 'India' },
  { name: 'Chhatrapati Shivaji Maharaj International Airport', code: 'BOM', location: 'Mumbai', country: 'India' },
  { name: 'Kempegowda International Airport', code: 'BLR', location: 'Bengaluru', country: 'India' },
  { name: 'Rajiv Gandhi International Airport', code: 'HYD', location: 'Hyderabad', country: 'India' },

  // Malaysia
  { name: 'Kuala Lumpur International Airport', code: 'KUL', location: 'Kuala Lumpur', country: 'Malaysia' },
  { name: 'Penang International Airport', code: 'PEN', location: 'Penang', country: 'Malaysia' },

  // Chile
  { name: 'Santiago Arturo Merino Benítez International Airport', code: 'SCL', location: 'Santiago', country: 'Chile' },

  // Peru
  { name: 'Lima Jorge Chávez International Airport', code: 'LIM', location: 'Lima', country: 'Peru' },

  // Qatar
  { name: 'Doha Hamad International Airport', code: 'DOH', location: 'Doha', country: 'Qatar' },

  // United Arab Emirates
  { name: 'Dubai International Airport', code: 'DXB', location: 'Dubai', country: 'United Arab Emirates' },

  // Bahrain
  { name: 'Bahrain International Airport', code: 'BAH', location: 'Manama', country: 'Bahrain' },

  // Egypt
  { name: 'Cairo International Airport', code: 'CAI', location: 'Cairo', country: 'Egypt' },

  // Saudi Arabia
  { name: 'King Abdulaziz International Airport', code: 'JED', location: 'Jeddah', country: 'Saudi Arabia' },

  // Vietnam
  { name: 'Tan Son Nhat International Airport', code: 'SGN', location: 'Ho Chi Minh City', country: 'Vietnam' },

  // Thailand
  { name: 'Suvarnabhumi Airport', code: 'BKK', location: 'Bangkok', country: 'Thailand' },

  // Philippines
  { name: 'Ninoy Aquino International Airport', code: 'MNL', location: 'Manila', country: 'Philippines' },

  // Indonesia
  { name: 'Soekarno-Hatta International Airport', code: 'CGK', location: 'Jakarta', country: 'Indonesia' },

  // Pakistan
  { name: 'Jinnah International Airport', code: 'KHI', location: 'Karachi', country: 'Pakistan' },

  // Bangladesh
  { name: 'Hazrat Shahjalal International Airport', code: 'DAC', location: 'Dhaka', country: 'Bangladesh' },

  // Sri Lanka
  { name: 'Bandaranaike International Airport', code: 'CMB', location: 'Colombo', country: 'Sri Lanka' },

  // Nepal
  { name: 'Tribhuvan International Airport', code: 'KTM', location: 'Kathmandu', country: 'Nepal' }
];


function setupAutocomplete(inputId, suggestionsId) {
  const input = document.getElementById(inputId);
  const suggestions = document.getElementById(suggestionsId);
  let debounceTimeout;

  // Debounce function to limit the rate of API calls
  function debounce(func, delay) {
    return function(...args) {
      clearTimeout(debounceTimeout);
      debounceTimeout = setTimeout(() => func.apply(this, args), delay);
    };
  }

  // Input handler
  function handleInput() {
    const query = input.value.toLowerCase();
    suggestions.innerHTML = ''; // Clear previous suggestions

    if (query) {
      const filteredAirports = airports.filter(airport =>
        airport.name.toLowerCase().includes(query) ||
        airport.code.toLowerCase().includes(query) ||
        airport.location.toLowerCase().includes(query) ||
        airport.country.toLowerCase().includes(query)
      );

      filteredAirports.forEach(airport => {
        const div = document.createElement('div');
        div.classList.add('suggestion');

        div.innerHTML = `
          <span class="airport-name">${airport.name}</span> 
          <span class="airport-code">(${airport.code})</span>
          <span class="airport-location">${airport.location}</span>
          <span class="airport-country">${airport.country}</span>
        `;

        div.addEventListener('click', function() {
          input.value = airport.name; // Set input value
          suggestions.innerHTML = ''; // Clear suggestions
        });

        suggestions.appendChild(div);
      });
    }
  }

  // Attach the debounced input handler
  input.addEventListener('input', debounce(handleInput, 300));

  // Close suggestions when clicking outside
  document.addEventListener('click', function(event) {
    if (!input.contains(event.target) && !suggestions.contains(event.target)) {
      suggestions.innerHTML = '';
    }
  });
}


document.addEventListener('DOMContentLoaded', function() {
  setupAutocomplete('departure', 'departure-suggestions');
  setupAutocomplete('arrival', 'arrival-suggestions');
});


document.addEventListener('DOMContentLoaded', function() {
  setupAutocomplete('departure', 'departure-suggestions');
  setupAutocomplete('arrival', 'arrival-suggestions');
});

function swapFields() {
  const departureInput = document.getElementById('departure');
  const arrivalInput = document.getElementById('arrival');
  
  const tempValue = departureInput.value;
  departureInput.value = arrivalInput.value;
  arrivalInput.value = tempValue;
}

document.addEventListener('DOMContentLoaded', function() {
    const returnButton = document.getElementById('return');
    const oneWayButton = document.getElementById('one-way');
    const multiCityButton = document.getElementById('multi-city');
    const departureSection = document.getElementById('departure-section');
    const datesSection = document.getElementById('dates-section');

    returnButton.addEventListener('click', function() {
        setActiveButton(returnButton);
        showSection(departureSection);
        showSection(datesSection);
    });

    oneWayButton.addEventListener('click', function() {
        setActiveButton(oneWayButton);
        showSection(departureSection);
        hideSection(datesSection);
    });

    multiCityButton.addEventListener('click', function() {
        setActiveButton(multiCityButton);
        showSection(departureSection);
        showSection(datesSection);
    });

    function setActiveButton(button) {
        document.querySelectorAll('.trip-type-button').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    }

    function showSection(section) {
        section.classList.remove('hidden');
        section.classList.add('visible');
    }

    function hideSection(section) {
        section.classList.remove('visible');
        section.classList.add('hidden');
    }
});

document.addEventListener('DOMContentLoaded', () => {
  const dropdownFace = document.querySelector('.dropdown__face');
  const dropdownItems = document.querySelector('.dropdown__items');
  const selectedClass = document.getElementById('selected-class');
  const dropdown = document.querySelector('.dropdown');

  dropdownFace.addEventListener('click', () => {
    dropdown.classList.toggle('show');
  });

  dropdownItems.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
      const classValue = event.target.getAttribute('data-value');
      selectedClass.textContent = classValue;
      dropdown.classList.remove('show');
    }
  });

  // Close dropdown if clicked outside
  window.addEventListener('click', (event) => {
    if (!dropdown.contains(event.target)) {
      dropdown.classList.remove('show');
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const tripTypeButtons = document.querySelectorAll('.trip-type-button');
  const returnDateGroup = document.getElementById('return-date-group');

  tripTypeButtons.forEach(button => {
    button.addEventListener('click', function () {
      tripTypeButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      const tripType = this.getAttribute('data-trip-type');
      if (tripType === 'round-trip') {
        returnDateGroup.style.display = 'block';
      } else {
        returnDateGroup.style.display = 'none';
      }
    });
  });

  const passengerButtons = document.querySelectorAll('.passenger-button');
  passengerButtons.forEach(button => {
    button.addEventListener('click', function () {
      passengerButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
    });
  });

  const classButtons = document.querySelectorAll('.class-button');
  classButtons.forEach(button => {
    button.addEventListener('click', function () {
      classButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
    });
  });

  // Set default state
  document.querySelector('.trip-type-button.active').click();
});

document.addEventListener('DOMContentLoaded', function() {
  // Function to handle increment and decrement for passenger count
  function setupPassengerControls() {
    // Select all passenger buttons and input fields
    const incrementButtons = document.querySelectorAll('.Passengers_button--increment__NaOnP');
    const decrementButtons = document.querySelectorAll('.Passengers_button--decrement__EEmwZ');

    incrementButtons.forEach(button => {
      button.addEventListener('click', function() {
        const input = this.previousElementSibling;
        const currentValue = parseInt(input.value, 10);
        input.value = currentValue + 1;
        updateControls(input);
      });
    });

    decrementButtons.forEach(button => {
      button.addEventListener('click', function() {
        const input = this.nextElementSibling;
        const currentValue = parseInt(input.value, 10);
        if (currentValue > 0) {
          input.value = currentValue - 1;
          updateControls(input);
        }
      });
    });

    // Function to enable/disable buttons based on value
    function updateControls(input) {
      const value = parseInt(input.value, 10);
      const decrementButton = input.previousElementSibling;
      const incrementButton = input.nextElementSibling;
      decrementButton.disabled = value <= 0;
      incrementButton.disabled = value >= 10; // Change the maximum value as needed
    }

    // Initialize controls
    document.querySelectorAll('.Passengers_input__PbNMU').forEach(input => {
      updateControls(input);
    });
  }

  setupPassengerControls();
});

navToggleEvent(navElemArr);
navToggleEvent(navLinks);



/**
 * header sticky & go to top
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 200) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }

});