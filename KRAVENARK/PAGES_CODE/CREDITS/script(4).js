

// Data arrays
const backgroundImages = [
  'https://pbs.twimg.com/media/EtVymCwXAAI6K21.jpg',
  'https://media.mpcvfx.com/app/uploads/2022/05/Amsterdam_dtlr2_4k_txtls_r709_still.088762-H-2022.webp',
  'https://i.imgur.com/tLUlJda.jpeg',
  'https://media-www.sheridancollege.ca/-/media/project/sheridan/shared/images/campuses/trafalgar/trafalgar-road-campus-sheridan-college_2.jpg?h=1238&iar=0&w=2200&rev=a8e86f904ba54f3d8b656af949ebc04b&hash=2345BDEC43B5707F7AF21CD7CEF6BC2B',
  'https://a.storyblok.com/f/122726/1200x630/932cd97ea1/default-og-image.jpg',
  'https://static.sites.cgmasteracademy.com/imgproxy/Z3t2Uazwt9tydnuGtsEfJW24yKrsX0VH7qgxwnTWROo/resize:fit:0:640/gravity:sm/quality:85/aHR0cHM6Ly9zdGF0aWMuc2l0ZXMuY2dtYXN0ZXJhY2FkZW15LmNvbS9zaXRlcy82Mzc0Zjg2NTllNDNhNjA1MzI4N2VlYjAvY29udGVudF9lbnRyeTYzN2RjNjE3YjFjMTM1MDAwMWNkNTNkNy82MzdkZTI5NjU2ZjQyZTAwMDEzYzFmOTMvZmlsZXMvQ29uY2VwdF9hcnRfc2Nob29sLnBuZw.png',
  'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1103960/capsule_616x353.jpg?t=1604052321',
  'https://media.alienwarearena.com/media/668e6235621d6fefc6f7bf8bffc30c59.png',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF2XngPtlqsKa-EawN8QQYeEa9_RptrQHQ0I76jL0JgYAQh085e1MPSjQ9dD5-s1GJGnk&usqp=CAU'
];

const backgroundBrightness = [
  0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5
];

const resumeData = [
  {
    year: "2023",
    studio: "Stellar Creative Lab",
    title: "3D Asset Generalist",
    bullets: [
      "QA for environment and character assets",
      "Collaborated with environment lead",
      "Automated QA workflow processes"
    ],
    link: "https://www.stellarcreativelab.com/"
  },
  {
    year: "2022",
    studio: "MPC (Mr.X)",
    title: "Asset Artist",
    bullets: [
      "Created assets for AAA episodic titles",
      "Built tools to streamline pipelines",
      "Produced high‑quality renders for clients"
    ],
    link: "https://www.mpcvfx.com/"
  },
  {
    year: "2021",
    studio: "World For Story",
    title: "Environment Artist",
    bullets: [
      "Worked on VR/AR concept game across multiple disciplines",
      "Developed custom VR tools in Unity",
      "Created shaders and procedural materials"
    ],
    link: "#"
  },
  {
    year: "2020",
    studio: "Sheridan College",
    title: "Game/Software Design",
    bullets: [
      "Comprehensive game development curriculum",
      "Team-based project development experience",
      "Portfolio development for industry readiness"
    ],
    link: "https://www.sheridancollege.ca/programs/bachelor-of-game-design"
  },
  {
    year: "2019",
    studio: "Gnomon Online",
    title: "Hard Surface Modelling",
    bullets: [
      "Advanced techniques for mechanical and architectural models",
      "Precision modeling for film and game pipelines",
      "Industry‑standard workflows for complex surfaces"
    ],
    link: "https://www.gnomon.edu/online"
  },
  {
    year: "2019",
    studio: "CGMA Online",
    title: "Weapons and Props for Games",
    bullets: [
      "Mastered hard‑surface modeling techniques for game assets",
      "Developed professional workflow for game‑ready assets",
      "Created portfolio pieces demonstrating weapon and prop design"
    ],
    link: "https://www.cgmasteracademy.com/"
  },
  {
    year: "2018",
    studio: "The Missing Few",
    title: "Environment Artist",
    bullets: [
      "Designed UI concepts for website and game",
      "Developed user‑friendly features with programmers",
      "Built foundational UI framework"
    ],
    link: "https://store.steampowered.com/app/1103960/The_Missing_Few/"
  },
  {
    year: "2017",
    studio: "Ray of Hope",
    title: "3D Clothing Animator",
    bullets: [
      "Collaborated with team to modernize game engine",
      "Designed and refined characters and environments",
      "Contributed to technical revitalization of classic title"
    ],
    link: "https://www.roh-online.com/"
  },
  {
    year: "2016",
    studio: "CounterCurrent Games",
    title: "Prop Artist",
    bullets: [
      "Created detailed interior assets to populate and enhance in-game levels",
      "Collaborated with the art director to align designs with the game's theme",
      "Translated concept art into cohesive game assets"
    ],
    link: "#"
  }
];

// DOM Elements
const elements = {
  year: document.querySelector('.year'),
  studio: document.querySelector('.studio-name'),
  title: document.querySelector('.job-title'),
  bullets: document.querySelector('.skills-list'),
  link: document.querySelector('.see-more-btn'),
  arrowUp: document.querySelector('.arrow-up'),
  arrowDown: document.querySelector('.arrow-down'),
  timelineCircles: document.querySelectorAll('.timeline-circle'),
  centerColumn: document.getElementById('center-column')
};

let currentIndex = 0;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  updateContent();
});

// Update all content
function updateContent() {
  const data = resumeData[currentIndex];

  elements.year.textContent = data.year;
  elements.studio.textContent = data.studio;
  elements.title.textContent = data.title;
  elements.link.href = data.link;
  elements.bullets.innerHTML = data.bullets.map(bullet => `<li>${bullet}</li>`).join('');

  updateCircles();
  updateBackground();
}

// Update timeline circles
function updateCircles() {
  elements.timelineCircles.forEach((circle, index) => {
    circle.classList.remove('active', 'filled');

    if (index === currentIndex) {
      circle.classList.add('active');
    } else if (index < currentIndex) {
      circle.classList.add('filled');
    }
  });
}

// Update background image + opacity
function updateBackground() {
  const bgImage = backgroundImages[currentIndex] || 'none';
  const opacity = backgroundBrightness[currentIndex] ?? 1;

  elements.centerColumn.style.setProperty('--bg-image', `url('${bgImage}')`);
  elements.centerColumn.style.setProperty('--bg-opacity', opacity);
}

// Navigation function
function goToIndex(index) {
  if (index < 0 || index >= resumeData.length) return;
  currentIndex = index;
  updateContent();
}

// Arrow button listeners
elements.arrowUp.addEventListener('click', () => goToIndex(currentIndex - 1));
elements.arrowDown.addEventListener('click', () => goToIndex(currentIndex + 1));

// Timeline circle listeners
elements.timelineCircles.forEach(circle => {
  circle.addEventListener('click', () => {
    const index = parseInt(circle.getAttribute('data-index'), 10);
    goToIndex(index);
  });
});

// Keyboard navigation
document.addEventListener('keydown', e => {
  if (e.key === 'ArrowUp') goToIndex(currentIndex - 1);
  if (e.key === 'ArrowDown') goToIndex(currentIndex + 1);
});