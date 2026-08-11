const STORAGE_KEY = 'magic-potion-profile-v1';
const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const FOOD_MAP = {
  apples: '🍎',
  banana: '🍌',
  biscuit: '🍪',
  bread: '🍞',
  butter: '🧈',
  cereal: '🥣',
  cheese: '🧀',
  chicken: '🍗',
  chips: '🍟',
  chocolate: '🍫',
  egg: '🥚',
  fish: '🐟',
  flour: '🌾',
  fruit: '🍇',
  ham: '🥩',
  lemon: '🍋',
  milk: '🥛',
  'orange juice': '🧃',
  pancakes: '🥞',
  pasta: '🍝',
  potato: '🥔',
  rice: '🍚',
  salad: '🥗',
  sandwich: '🥪',
  sausage: '🌭',
  strawberry: '🍓',
  sugar: '🍬',
  tomato: '🍅',
  water: '💧',
  yoghurt: '🥣'
};

const FOOD_ART = new Set([
  'apples', 'banana', 'biscuit', 'bread', 'butter', 'cereal', 'cheese',
  'chicken', 'chips', 'chocolate', 'egg', 'fish', 'flour', 'fruit', 'ham',
  'lemon', 'milk', 'orange juice', 'pancakes', 'pasta', 'potato', 'rice',
  'salad', 'sandwich', 'sausage'
]);

const GAMES = [
  {
    id: 'game1',
    title: "Step 1. Find frog's liquid",
    description: 'Build the food word by choosing the bottles in the right order.',
    image: 'концепт игра 1.png',
    instructions: [
      'Look at the magical food illustration and remember its name.',
      'Click potion bottles to fill the empty slots.',
      'Each selected letter moves focus to the next slot automatically.',
      'Complete the word, then continue to the next round.'
    ]
  },
  {
    id: 'game2',
    title: 'Step 2. Choose a web',
    description: 'Choose the correct word to complete each sentence.',
    image: 'концепт игра 2.png',
    instructions: [
      'Read the sentence on the enchanted panel.',
      'Choose a, an, some or any.',
      'The purple spell beam confirms your target.',
      'Complete 10 rounds and check your final score.'
    ]
  },
  {
    id: 'game3',
    title: 'Step 3. Catch a rat',
    description: 'Match each product with the basket that measures it correctly.',
    image: 'концепт игра 3.png',
    instructions: [
      'The rat shows only the product name.',
      'Choose the basket that completes the phrase.',
      'For example: a bar of chocolate.',
      'Complete 10 rounds and review your answers.'
    ]
  }
];

const WORD_BANK = [
  'apples', 'banana', 'biscuit', 'bread', 'butter', 'cereal', 'cheese', 'chocolate', 'egg',
  'fish', 'flour', 'lemon', 'milk', 'orange juice', 'rice', 'salad', 'sandwich', 'sausage',
  'strawberry', 'tomato', 'water', 'yoghurt'
];

const QUESTION_BANK = [
  { sentence: 'There is ... apple on the table.', options: ['a', 'an', 'some', 'any'], answer: 'an' },
  { sentence: 'Are there ... eggs in the fridge?', options: ['a', 'an', 'some', 'any'], answer: 'any' },
  { sentence: 'I want ... biscuit, please.', options: ['a', 'an', 'some', 'any'], answer: 'a' },
  { sentence: 'There is ... milk in the bottle.', options: ['a', 'an', 'some', 'any'], answer: 'some' },
  { sentence: 'There are ... vegetables in the salad.', options: ['a', 'an', 'some', 'any'], answer: 'some' },
  { sentence: 'Would you like ... orange?', options: ['a', 'an', 'some', 'any'], answer: 'an' },
  { sentence: 'I have ... water in my bag.', options: ['a', 'an', 'some', 'any'], answer: 'some' },
  { sentence: 'She needs ... onion for soup.', options: ['a', 'an', 'some', 'any'], answer: 'an' },
  { sentence: 'There isn\'t ... cheese left.', options: ['a', 'an', 'some', 'any'], answer: 'any' },
  { sentence: 'Can I have ... rice?', options: ['a', 'an', 'some', 'any'], answer: 'some' },
  { sentence: 'There is ... orange in the bowl.', options: ['a', 'an', 'some', 'any'], answer: 'an' },
  { sentence: 'We need ... flour for the cake.', options: ['a', 'an', 'some', 'any'], answer: 'some' },
  { sentence: 'Do you have ... bananas?', options: ['a', 'an', 'some', 'any'], answer: 'any' },
  { sentence: 'She eats ... egg for breakfast.', options: ['a', 'an', 'some', 'any'], answer: 'an' },
  { sentence: 'He has ... loaf of bread.', options: ['a', 'an', 'some', 'any'], answer: 'a' },
  { sentence: 'There are ... apples in the basket.', options: ['a', 'an', 'some', 'any'], answer: 'some' },
  { sentence: 'I cannot find ... butter.', options: ['a', 'an', 'some', 'any'], answer: 'any' },
  { sentence: 'Would you like ... biscuit?', options: ['a', 'an', 'some', 'any'], answer: 'a' },
  { sentence: 'There is ... fish on the plate.', options: ['a', 'an', 'some', 'any'], answer: 'some' },
  { sentence: 'He wants ... chocolate.', options: ['a', 'an', 'some', 'any'], answer: 'some' },
  { sentence: 'Is there ... cereal in the cupboard?', options: ['a', 'an', 'some', 'any'], answer: 'any' },
  { sentence: 'I see ... chicken leg on the tray.', options: ['a', 'an', 'some', 'any'], answer: 'a' },
  { sentence: 'She has ... yoghurt for lunch.', options: ['a', 'an', 'some', 'any'], answer: 'some' },
  { sentence: 'There isn\'t ... bread left.', options: ['a', 'an', 'some', 'any'], answer: 'any' },
  { sentence: 'Can I have ... apple?', options: ['a', 'an', 'some', 'any'], answer: 'an' },
  { sentence: 'They have ... cheese.', options: ['a', 'an', 'some', 'any'], answer: 'some' },
  { sentence: 'Are there ... lemons?', options: ['a', 'an', 'some', 'any'], answer: 'any' },
  { sentence: 'She needs ... tomato.', options: ['a', 'an', 'some', 'any'], answer: 'a' },
  { sentence: 'There is ... sausage in the pan.', options: ['a', 'an', 'some', 'any'], answer: 'a' }
];

const RAT_BANK = [
  { item: 'chocolate', label: 'a bar of' },
  { item: 'milk', label: 'a carton of' },
  { item: 'juice', label: 'a bottle of' },
  { item: 'cereal', label: 'a packet of' },
  { item: 'jam', label: 'a jar of' },
  { item: 'cola', label: 'a can of' },
  { item: 'biscuits', label: 'a packet of' },
  { item: 'water', label: 'a bottle of' },
  { item: 'sugar', label: 'a packet of' },
  { item: 'tea', label: 'a packet of' }
];

const BASKET_LABELS = ['a bar of', 'a bottle of', 'a can of', 'a carton of', 'a jar of', 'a packet of'];

let profile = loadProfile();
let currentGame = null;
let audioCtx = null;
let musicGain = null;
let musicEnabled = true;
let soundsEnabled = true;
let ambientTimer = null;
const backgroundMusic = new Audio('Potion Shelf Whispers.mp3');
backgroundMusic.loop = true;
backgroundMusic.volume = 0.16;

const refs = {
  homeScreen: document.getElementById('home-screen'),
  gameScreen: document.getElementById('game-screen'),
  gamesGrid: document.getElementById('games-grid'),
  nameModal: document.getElementById('name-modal'),
  studentNameInput: document.getElementById('student-name'),
  profileButton: document.getElementById('profile-button'),
  profileModal: document.getElementById('profile-modal'),
  rewardList: document.getElementById('reward-list'),
  sessionList: document.getElementById('session-list'),
  profileName: document.getElementById('profile-name'),
  profileAvatar: document.getElementById('profile-avatar'),
  avatarPicker: document.getElementById('avatar-picker'),
  returnToGame: document.getElementById('return-to-game'),
  instructionsModal: document.getElementById('instructions-modal'),
  instructionsText: document.getElementById('instructions-text'),
  introOverlay: document.getElementById('intro-overlay'),
  introVideo: document.getElementById('intro-video'),
  startExperience: document.getElementById('start-experience'),
  endVideoOverlay: document.getElementById('end-video-overlay'),
  endVideo: document.getElementById('end-video'),
  rewardVideoOverlay: document.getElementById('reward-video-overlay'),
  rewardVideo: document.getElementById('reward-video'),
  musicToggle: document.getElementById('music-toggle'),
  soundsToggle: document.getElementById('sounds-toggle'),
  gameHeader: document.getElementById('game-header'),
  gameContent: document.getElementById('game-content')
};

function shuffle(items) {
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function normalizeWord(value) {
  return String(value).toLowerCase().replace(/\s+/g, '');
}

function titleCasePhrase(value) {
  return String(value)
    .split(' ')
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

function showHomeScreen() {
  refs.homeScreen.classList.add('active');
  refs.gameScreen.classList.remove('active');
  document.body.classList.remove('mobile-game-active');
  delete document.body.dataset.activeGame;
  refs.gameContent.innerHTML = '';
  refs.gameHeader.innerHTML = '';
  if (musicGain && musicEnabled) musicGain.gain.value = 0.032;
}

function hideHomeScreen() {
  refs.homeScreen.classList.remove('active');
  refs.gameScreen.classList.add('active');
  document.body.classList.add('mobile-game-active');
  if (musicGain && musicEnabled) musicGain.gain.value = 0.045;
}

function loadProfile() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return { name: '', avatar: 'witch', rewards: [] };
    }
    const parsed = JSON.parse(raw);
    return {
      name: parsed.name || '',
      avatar: parsed.avatar || 'witch',
      rewards: Array.isArray(parsed.rewards) ? parsed.rewards : [],
    };
  } catch (error) {
    return { name: '', avatar: 'witch', rewards: [] };
  }
}

function saveProfile() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
}

function updateProfileInvitation() {
  refs.profileButton.classList.toggle('profile-invitation',
    ['potion', 'web', 'rat'].every((reward) => profile.rewards.includes(reward)));
}

function renderCatalog() {
  refs.gamesGrid.innerHTML = GAMES.map((game) => `
    <article class="game-card">
      <div class="card-header">
        <div class="card-title">${game.title}</div>
      </div>
      <div class="card-image" style="background-image: url('${game.image}')"></div>
      <div class="card-text">${game.description}</div>
      <div class="card-actions">
        <button class="card-button play-game-button" data-game="${game.id}">Play</button>
        <button class="card-button secondary-button show-instructions" data-game="${game.id}">How to play</button>
      </div>
    </article>
  `).join('');

  refs.gamesGrid.querySelectorAll('.play-game-button').forEach((button) => {
    button.addEventListener('click', () => startGame(button.dataset.game));
  });

  refs.gamesGrid.querySelectorAll('.show-instructions').forEach((button) => {
    button.addEventListener('click', () => openInstructions(button.dataset.game));
  });
}

function showNameModal() {
  refs.nameModal.classList.remove('hidden');
  refs.studentNameInput.focus();
}

function initializeName() {
  if (!profile.name) {
    showNameModal();
    return;
  }
  refs.nameModal.classList.add('hidden');
}

function saveStudentName() {
  const name = refs.studentNameInput.value.trim();
  if (!name) {
    refs.studentNameInput.focus();
    return;
  }

  profile.name = name;
  saveProfile();
  refs.nameModal.classList.add('hidden');
  refs.profileName.textContent = `${name} — Profile`;
}

function openProfile() {
  refs.profileName.textContent = `${profile.name || 'Student'} — Profile`;
  renderRewards();
  renderAvatarPicker();
  refs.profileModal.classList.remove('hidden');
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.add('hidden');
}

function renderRewards() {
  const rewardMap = {
    potion: { image: 'зелье.png', label: 'Green Potion' },
    web: { image: 'паутина.png', label: 'Spell Web' },
    rat: { image: 'крыса.png', label: 'Magic Rat' }
  };

  refs.rewardList.innerHTML = Object.entries(rewardMap)
    .filter(([key]) => profile.rewards.includes(key))
    .map(([, reward]) => `
      <div class="reward-item">
        <img src="${reward.image}" alt="${reward.label}" />
        <span>${reward.label}</span>
      </div>
    `).join('');

  if (profile.rewards.includes('potion') && profile.rewards.includes('web') && profile.rewards.includes('rat')) {
    const existing = document.getElementById('create-portion-btn');
    if (!existing) {
      const button = document.createElement('button');
      button.id = 'create-portion-btn';
      button.className = 'primary-button';
      button.textContent = 'Create the potion';
      button.addEventListener('click', playEndingVideo);
      refs.rewardList.appendChild(button);
    }
  }
}

function renderSessions() {
  if (!profile.sessions.length) {
    refs.sessionList.innerHTML = '<div class="session-entry"><strong>No sessions yet.</strong></div>';
    return;
  }

  refs.sessionList.innerHTML = profile.sessions
    .slice()
    .reverse()
    .map((session) => `
      <div class="session-entry">
        <strong>${session.game}</strong>
        <small>${session.result} · ${session.date}</small>
        <small>Score: ${session.score}/${session.total}</small>
      </div>
    `).join('');
}

function openInstructions(gameId) {
  const game = GAMES.find((item) => item.id === gameId);
  if (!game) return;
  const russian = {
    game1: ['Посмотри на картинку и вспомни название продукта.', 'Нажимай на бутылочки, чтобы заполнить пустые клетки нужными буквами.', 'Собери слово и нажми «Next».'],
    game2: ['Прочитай предложение на волшебной панели.', 'Выбери правильный вариант: a, an, some или any.', 'После выбора девочка выстрелит фиолетовым лучом в цель.', 'Пройди 10 раундов и посмотри результат.'],
    game3: ['На крысе написано только название продукта.', 'Выбери корзину, которая подходит для этого продукта.', 'Например: milk → a carton of milk.', 'Заверши 10 раундов и проверь ошибки.']
  };
  refs.instructionsText.innerHTML = `<ul>${russian[gameId].map((line) => `<li>${line}</li>`).join('')}</ul>`;
  refs.instructionsModal.classList.remove('hidden');
}

function ensureAudio() {
  const AudioCtor = window.AudioContext || window.webkitAudioContext;
  if (!AudioCtor) return null;

  if (!audioCtx) {
    audioCtx = new AudioCtor();
    musicGain = audioCtx.createGain();
    musicGain.gain.value = 0.06;
    musicGain.connect(audioCtx.destination);
  }

  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }

  return audioCtx;
}

function renderAvatarPicker() {
  const avatars = ['witch', 'wizard', 'fairy', 'cat-mage', 'dragon', 'owl'];
  refs.profileAvatar.innerHTML = `<img src="assets/avatars/${profile.avatar || 'witch'}.png" alt="Selected avatar">`;
  refs.avatarPicker.innerHTML = avatars.map((avatar) => `
    <button class="avatar-option ${profile.avatar === avatar ? 'selected' : ''}" data-avatar="${avatar}" type="button">
      <img src="assets/avatars/${avatar}.png" alt="${avatar}">
    </button>
  `).join('');
  refs.avatarPicker.querySelectorAll('.avatar-option').forEach((button) => {
    button.addEventListener('click', () => {
      profile.avatar = button.dataset.avatar;
      saveProfile();
      renderAvatarPicker();
    });
  });
}

function startMediaAudio() {
  refs.introVideo.muted = false;
  refs.introVideo.volume = 0.72;
  refs.introVideo.play().catch(() => {});
  setMusicState(true);
}

function startIntroVideo() {
  refs.introVideo.pause();
  refs.introVideo.currentTime = 0;
}

function startExperience() {
  refs.startExperience.classList.add('started');
  refs.startExperience.disabled = true;
  refs.introOverlay.classList.add('video-started');
  refs.introVideo.muted = false;
  refs.introVideo.volume = 0.78;
  ensureAudio();
  setMusicState(true);
  backgroundMusic.pause();
  refs.introVideo.play().catch(() => {
    refs.introVideo.muted = true;
    refs.introVideo.play().catch(() => {});
  });
}

function playTone(freq = 440, duration = 0.18, type = 'sine', volume = 0.05) {
  const ctx = ensureAudio();
  if (!ctx || !musicGain) return;

  const oscillator = ctx.createOscillator();
  const gainNode = ctx.createGain();
  oscillator.type = type;
  oscillator.frequency.value = freq;
  gainNode.gain.value = volume;
  oscillator.connect(gainNode);
  gainNode.connect(musicGain);

  const startedAt = ctx.currentTime;
  oscillator.start(startedAt);
  oscillator.stop(startedAt + duration);
  gainNode.gain.exponentialRampToValueAtTime(0.0001, startedAt + duration);
}

function setMusicState(enabled) {
  musicEnabled = enabled;
  refs.musicToggle.textContent = `Music: ${enabled ? 'On' : 'Off'}`;
  ensureAudio();

  if (!audioCtx || !musicGain) return;

  if (enabled) {
    backgroundMusic.play().catch(() => {});
    musicGain.gain.value = refs.homeScreen.classList.contains('active') ? 0.032 : 0.045;
    if (!ambientTimer) {
      startAmbientLoop();
    }
  } else {
    backgroundMusic.pause();
    musicGain.gain.value = 0;
  }
}

function startAmbientLoop() {
  if (!audioCtx || !musicGain || ambientTimer) return;

  const notes = [220, 261.63, 293.66, 330, 392];
  let index = 0;

  const tick = () => {
    if (!musicEnabled || !audioCtx) {
      ambientTimer = null;
      return;
    }
    playTone(notes[index % notes.length], 0.7, 'triangle', 0.024);
    index += 1;
    ambientTimer = setTimeout(tick, 1400);
  };

  tick();
}

function playSuccessSound() {
  if (!soundsEnabled) return;
  playTone(523.25, 0.15, 'triangle', 0.08);
  setTimeout(() => playTone(659.25, 0.18, 'triangle', 0.07), 120);
}

function playErrorSound() {
  if (!soundsEnabled) return;
  playTone(220, 0.18, 'sawtooth', 0.07);
  setTimeout(() => playTone(160, 0.22, 'sawtooth', 0.06), 120);
}

function playShelfPlacementSound() {
  if (!soundsEnabled) return;
  const ctx = ensureAudio();
  if (!ctx) return;
  const tap = ctx.createOscillator();
  const tapGain = ctx.createGain();
  tap.type = 'triangle';
  tap.frequency.setValueAtTime(185, ctx.currentTime);
  tap.frequency.exponentialRampToValueAtTime(105, ctx.currentTime + 0.09);
  tapGain.gain.setValueAtTime(0.16, ctx.currentTime);
  tapGain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.1);
  tap.connect(tapGain);
  tapGain.connect(ctx.destination);
  tap.start();
  tap.stop(ctx.currentTime + 0.11);

  setTimeout(() => {
    const settle = ctx.createOscillator();
    const settleGain = ctx.createGain();
    settle.type = 'sine';
    settle.frequency.value = 294;
    settleGain.gain.setValueAtTime(0.08, ctx.currentTime);
    settleGain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.14);
    settle.connect(settleGain);
    settleGain.connect(ctx.destination);
    settle.start();
    settle.stop(ctx.currentTime + 0.15);
  }, 60);
}

function playLaserShotSound() {
  if (!soundsEnabled) return;
  const ctx = ensureAudio();
  if (!ctx) return;
  const now = ctx.currentTime;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = 'sawtooth';
  osc.frequency.setValueAtTime(980, now);
  osc.frequency.exponentialRampToValueAtTime(180, now + 0.24);
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(0.18, now + 0.018);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.28);
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start(now);
  osc.stop(now + 0.3);

  const shimmer = ctx.createOscillator();
  const shimmerGain = ctx.createGain();
  shimmer.type = 'sine';
  shimmer.frequency.setValueAtTime(1460, now);
  shimmer.frequency.exponentialRampToValueAtTime(520, now + 0.18);
  shimmerGain.gain.setValueAtTime(0.0001, now);
  shimmerGain.gain.exponentialRampToValueAtTime(0.1, now + 0.02);
  shimmerGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.2);
  shimmer.connect(shimmerGain);
  shimmerGain.connect(ctx.destination);
  shimmer.start(now);
  shimmer.stop(now + 0.22);
}

function playRatSqueakSound() {
  if (!soundsEnabled) return;
  const ctx = ensureAudio();
  if (!ctx) return;
  const now = ctx.currentTime;
  const squeak = ctx.createOscillator();
  const gain = ctx.createGain();
  squeak.type = 'triangle';
  squeak.frequency.setValueAtTime(900, now);
  squeak.frequency.linearRampToValueAtTime(1650, now + 0.045);
  squeak.frequency.linearRampToValueAtTime(1050, now + 0.13);
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(0.16, now + 0.008);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.15);
  squeak.connect(gain);
  gain.connect(ctx.destination);
  squeak.start(now);
  squeak.stop(now + 0.16);

  setTimeout(() => {
    const chirp = ctx.createOscillator();
    const chirpGain = ctx.createGain();
    chirp.type = 'triangle';
    chirp.frequency.setValueAtTime(1250, ctx.currentTime);
    chirp.frequency.linearRampToValueAtTime(900, ctx.currentTime + 0.08);
    chirpGain.gain.setValueAtTime(0.0001, ctx.currentTime);
    chirpGain.gain.exponentialRampToValueAtTime(0.07, ctx.currentTime + 0.008);
    chirpGain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.1);
    chirp.connect(chirpGain);
    chirpGain.connect(ctx.destination);
    chirp.start();
    chirp.stop(ctx.currentTime + 0.11);
  }, 95);
}

function addSessionRecord(gameName, result, score, total) {
  // Session history is intentionally disabled; profile stores only identity and rewards.
}

function addReward(rewardId, label) {
  if (!profile.rewards.includes(rewardId)) {
    profile.rewards.push(rewardId);
    saveProfile();
    if (label) {
      window.alert(`${label} unlocked!`);
    }
  }
}

function updateResultView(resultText, score, total, rewardId, rewardLabel, summary) {
  if (score === total && rewardId) {
    playRewardVideo(() => {
      if (!profile.rewards.includes(rewardId)) {
        profile.rewards.push(rewardId);
        saveProfile();
      }
      updateProfileInvitation();
      renderResultView(resultText, score, total, rewardId, rewardLabel, summary);
    }, currentGame?.id);
    return;
  }
  renderResultView(resultText, score, total, rewardId, rewardLabel, summary);
}

function renderResultView(resultText, score, total, rewardId, rewardLabel, summary) {
  refs.gameContent.innerHTML = `
    <div class="result-panel active">
      <div class="result-card">
        ${rewardId ? `<div class="celebration-burst">✦ ✧ ✦</div><img class="earned-reward" src="${({ potion: 'зелье.png', web: 'паутина.png', rat: 'крыса.png' }[rewardId])}" alt="${rewardLabel}">` : ''}
        <h3>${resultText}</h3>
        <div class="result-summary">${summary}</div>
        <div class="result-actions">
          <button class="action-button" id="result-try-again">Try again</button>
          <button class="secondary-button action-button" id="result-home">Home</button>
          ${rewardId ? '<button class="secondary-button action-button" id="result-profile">View progress in profile</button>' : ''}
          ${score < total ? '<button class="secondary-button action-button" id="result-check">Review answers</button>' : ''}
        </div>
      </div>
    </div>
  `;

  document.getElementById('result-try-again').addEventListener('click', () => startGame(currentGame.id));
  document.getElementById('result-home').addEventListener('click', () => {
    showHomeScreen();
    currentGame = null;
  });

  const profileButton = document.getElementById('result-profile');
  if (profileButton) profileButton.addEventListener('click', openProfile);

  const checkButton = document.getElementById('result-check');
  if (checkButton) {
    checkButton.addEventListener('click', () => showDetailedReview(currentGame.history, resultText, score, total));
  }
}

function showDetailedReview(history, resultText, score, total) {
  const list = history.map((item, index) => {
    const phrase = item.phrase || item.word || item.sentence || item.label || 'Answer';
    const correct = item.answer || item.correctAnswer || '—';
    const chosen = item.user || item.chosen || '—';

    return `
      <div class="review-row ${item.correct ? 'review-correct' : 'review-incorrect'}">
        <strong>Round ${index + 1}</strong>
        <span class="review-phrase">${phrase}</span>
        ${item.correct
          ? '<span class="review-status">✓ Correct</span>'
          : `<span class="review-status">✕ Incorrect</span><span class="review-answer review-user-answer">Your answer: <b>${chosen}</b></span><span class="review-answer review-correction">Correction: <b>${correct}</b></span>`}
      </div>
    `;
  }).join('');

  refs.gameContent.innerHTML = `
    <div class="result-panel active">
      <div class="result-card">
        <h3>${resultText}</h3>
        <div class="result-summary">
          <p>Score: ${score}/${total}</p>
          ${list}
        </div>
        <div class="result-actions">
          <button class="action-button" id="review-try-again">Try again</button>
          <button class="secondary-button action-button" id="review-back">Return to game</button>
          <button class="secondary-button action-button" id="review-home">Home</button>
        </div>
      </div>
    </div>
  `;

  document.getElementById('review-try-again').addEventListener('click', () => startGame(currentGame.id));
  document.getElementById('review-back').addEventListener('click', () => startGame(currentGame.id));
  document.getElementById('review-home').addEventListener('click', () => {
    showHomeScreen();
    currentGame = null;
  });
}

function startGame(gameId) {
  const game = GAMES.find((item) => item.id === gameId);
  if (!game) return;

  hideHomeScreen();
  document.body.dataset.activeGame = gameId;
  refs.gameHeader.innerHTML = `
    <button class="back-button" id="game-back-button">Back</button>
    <h2>${game.title}</h2>
  `;

  document.getElementById('game-back-button').addEventListener('click', () => {
    showHomeScreen();
    currentGame = null;
  });

  if (gameId === 'game1') startGame1();
  if (gameId === 'game2') startGame2();
  if (gameId === 'game3') startGame3();
  window.requestAnimationFrame(fitMobileGameStage);
}

function fitMobileGameStage() {
  if (window.innerWidth >= 1024) return;
  const screen = document.getElementById('game-screen');
  const stage = document.getElementById('game-stage');
  const topbar = document.querySelector('.topbar');
  if (!screen || !stage || !screen.classList.contains('active')) return;

  const topbarHeight = document.body.classList.contains('mobile-game-active') ? 0 : (topbar ? topbar.getBoundingClientRect().height : 0);
  document.documentElement.style.setProperty('--mobile-topbar-height', `${topbarHeight}px`);
  stage.style.transform = 'none';
  const viewport = window.visualViewport;
  const viewportWidth = viewport ? viewport.width : window.innerWidth;
  const viewportHeight = viewport ? viewport.height : window.innerHeight;
  const safeWidth = Math.max(1, viewportWidth - 16);
  const safeHeight = Math.max(1, viewportHeight - topbarHeight - 16);
  const sourceWidth = stage.offsetWidth || 1380;
  const sourceHeight = stage.scrollHeight || stage.offsetHeight || 1;
  const scale = Math.min(safeWidth / sourceWidth, safeHeight / sourceHeight);
  document.documentElement.style.setProperty('--mobile-game-scale', String(Math.max(0.01, scale)));
  stage.style.transform = '';
}

function showGameHint() {
  if (!currentGame) return;

  if (currentGame.type === 'game1') {
    const clue = currentGame.currentWord
      ? `Hint: ${titleCasePhrase(currentGame.currentWordDisplay || currentGame.currentWord)}.`
      : 'Look at the picture and build the word.';
    window.alert(clue);
  }

  if (currentGame.type === 'game2') {
    const clue = currentGame.question ? `Hint: ${currentGame.question.answer}.` : 'Choose the right word.';
    window.alert(clue);
  }

  if (currentGame.type === 'game3') {
    const phrase = currentGame.currentRat ? `${currentGame.currentRat.label} ${currentGame.currentRat.item}` : 'the right basket';
    window.alert(`Hint: the answer is ${phrase}.`);
  }
}

function buildLetterBank(word) {
  const cleaned = normalizeWord(word).toUpperCase();
  const bank = [...cleaned];
  while (bank.length < 18) {
    bank.push(ALPHABET[Math.floor(Math.random() * ALPHABET.length)]);
  }
  return shuffle(bank);
}

function focusNextSlot(currentIndex) {
  const nextIndex = currentGame.slots.findIndex((value, index) => index > currentIndex && value === '');
  const targetIndex = nextIndex >= 0 ? nextIndex : currentGame.slots.findIndex((value) => value === '');
  const target = document.querySelector(`.slot[data-slot-index="${targetIndex}"]`);
  if (target) target.focus();
}

function BottleLetter(letter, index) {
  const colors = ['red', 'blue', 'green', 'purple', 'orange'];
  const color = colors[index % colors.length];
  return `<button class="bottle-letter bottle-letter-${color}" data-letter-index="${index}" data-letter="${letter}" type="button" aria-label="Letter ${letter}"><img class="bottle-letter__image" src="assets/bottles/bottle-${color}.png" alt="" aria-hidden="true" /><span class="bottle-letter__label">${letter}</span></button>`;
}

function startGame1() {
  currentGame = {
    id: 'game1',
    type: 'game1',
    round: 1,
    totalRounds: 10,
    words: shuffle([...WORD_BANK]).slice(0, 10),
    correct: 0,
    history: []
  };

  refs.gameContent.innerHTML = `
    <div class="game-1-scene">
      <div class="word-art">
        <div id="word-emoji" class="answer-emoji" aria-live="polite"></div>
      </div>
      <div id="word-slots" class="letter-slot-row"></div>
      <div id="letter-bank" class="letters-panel"></div>
      <div class="game-controls">
        <button class="action-button" id="clear-slot-button" type="button">Clear</button>
        <button class="action-button disabled" id="next-round-button" type="button">Next</button>
      </div>
    </div>
  `;

  prepareRound1();
}

function prepareRound1() {
  const word = currentGame.words[currentGame.round - 1];
  currentGame.currentWordDisplay = word;
  currentGame.currentWord = normalizeWord(word);
  currentGame.slots = Array(currentGame.currentWord.length).fill('');
  currentGame.letters = buildLetterBank(word);
  renderGame1Round();
}

function renderGame1Round() {
  const slots = document.getElementById('word-slots');
  const bank = document.getElementById('letter-bank');
  const emoji = document.getElementById('word-emoji');
  const key = normalizeWord(currentGame.currentWordDisplay || currentGame.currentWord);
  const foodFile = String(currentGame.currentWordDisplay).toLowerCase().replace(/\s+/g, '-');
  emoji.className = 'answer-emoji';
  emoji.innerHTML = `<img src="assets/food/${foodFile}.png" alt="${currentGame.currentWordDisplay}" />`;

  const words = String(currentGame.currentWordDisplay || '').trim().split(/\s+/).filter(Boolean);
  const wordBreaks = new Set();
  let wordOffset = 0;
  words.forEach((word, wordIndex) => {
    wordOffset += word.length;
    if (wordIndex < words.length - 1) wordBreaks.add(wordOffset);
  });

  slots.innerHTML = currentGame.slots.map((letter, index) => `
    ${wordBreaks.has(index) ? '<span class="slot-word-gap" aria-hidden="true"></span>' : ''}
    <button class="slot ${letter ? '' : 'empty'}" data-slot-index="${index}" type="button">${letter || ''}</button>
  `).join('');

  bank.innerHTML = currentGame.letters.map(BottleLetter).join('');

  slots.querySelectorAll('.slot').forEach((slot) => {
    slot.addEventListener('click', () => {
      const index = Number(slot.dataset.slotIndex);
      const letter = currentGame.slots[index];
      if (!letter) return;
      currentGame.slots[index] = '';
      currentGame.letters.push(letter);
      renderGame1Round();
    });
  });

  bank.querySelectorAll('.bottle-letter').forEach((button) => {
    button.addEventListener('click', () => {
      if (button.disabled) return;
      const letterIndex = Number(button.dataset.letterIndex);
      const chosen = currentGame.letters[letterIndex];
      const emptyIndex = currentGame.slots.findIndex((slot) => slot === '');
      if (emptyIndex === -1 || chosen === undefined) return;

      playShelfPlacementSound();
      currentGame.letters.splice(letterIndex, 1);

      currentGame.slots[emptyIndex] = chosen;
      renderGame1Round();
      focusNextSlot(emptyIndex);
    });
  });

  const nextButton = document.getElementById('next-round-button');
  const clearButton = document.getElementById('clear-slot-button');
  const isFilled = currentGame.slots.every(Boolean);

  nextButton.disabled = !isFilled;
  nextButton.classList.toggle('disabled', !isFilled);
  nextButton.textContent = currentGame.round === currentGame.totalRounds ? 'Finish' : 'Next';
  nextButton.onclick = submitGame1Round;

  clearButton.onclick = () => {
    currentGame.slots = Array(currentGame.currentWord.length).fill('');
    currentGame.letters = buildLetterBank(currentGame.currentWordDisplay);
    renderGame1Round();
  };
}

function submitGame1Round() {
  const answer = currentGame.slots.join('').toLowerCase();
  const target = normalizeWord(currentGame.currentWordDisplay || currentGame.currentWord);
  const isCorrect = answer === target;
  currentGame.correct += isCorrect ? 1 : 0;
  currentGame.history.push({
    phrase: titleCasePhrase(currentGame.currentWordDisplay),
    answer: titleCasePhrase(currentGame.currentWordDisplay),
    user: answer,
    correct: isCorrect,
    correctAnswer: titleCasePhrase(currentGame.currentWordDisplay)
  });

  if (isCorrect) {
    playSuccessSound();
  } else {
    playErrorSound();
  }

  if (currentGame.round < currentGame.totalRounds) {
    currentGame.round += 1;
    prepareRound1();
    return;
  }

  const finalScore = currentGame.correct;
  const resultText = finalScore === currentGame.totalRounds ? 'Perfect potion!' : 'Almost there';
  const summary = `You built ${finalScore} of ${currentGame.totalRounds}.<br>${finalScore === currentGame.totalRounds ? 'The potion glows with brilliant magic.' : 'A little more practice and the potion will be ready.'}`;

  addSessionRecord('Step 1. Frog Potion', resultText, finalScore, currentGame.totalRounds);
  updateResultView(resultText, finalScore, currentGame.totalRounds,
    finalScore === currentGame.totalRounds ? 'potion' : null,
    'Green Potion',
    summary
  );
}

function startGame2() {
  currentGame = {
    id: 'game2',
    type: 'game2',
    round: 1,
    totalRounds: 10,
    questions: shuffle([...QUESTION_BANK]).slice(0, 10),
    correct: 0,
    history: []
  };

  refs.gameContent.innerHTML = `
    <div class="game-2-scene">
      <div class="girl-character">
        <img class="game2-girl-corner" src="assets/game2/girl-with-gun.png" alt="">
        <span class="muzzle-anchor" id="muzzle-anchor" aria-hidden="true"></span>
      </div>
      <img class="game2-cat-corner" src="assets/game2/cat-corner-realistic.png?v=20260809-tail-gap" alt="" aria-hidden="true">
      <span class="candle-flame-magic" aria-hidden="true"></span>
      <div class="sentence-plaque">
        <img class="sentence-plaque__image" src="assets/game2/sentence-plaque-transparent.png" alt="">
        <p id="game-2-question" class="sentence-plaque__text"></p>
      </div>
      <div class="laser-beam" id="laser-beam" aria-hidden="true"></div>
      <div id="web-wrap" class="web-wrap"></div>
    </div>
  `;

  prepareRound2();
}

function prepareRound2() {
  const question = currentGame.questions[currentGame.round - 1];
  currentGame.question = question;
  const wrap = document.getElementById('web-wrap');
  const banner = document.getElementById('game-2-question');
  banner.textContent = question.sentence;

  wrap.innerHTML = question.options.map((option) => `
    <button class="web-choice" data-answer="${option}" type="button">
      <span class="choice-label">${option}</span>
    </button>
  `).join('');

  wrap.querySelectorAll('.web-choice').forEach((button) => {
    button.addEventListener('click', () => {
      if (currentGame.answerLocked) return;
      currentGame.answerLocked = true;
      const chosen = button.dataset.answer;
      fireLaser(button);
      const isCorrect = chosen === currentGame.question.answer;
      currentGame.correct += isCorrect ? 1 : 0;
      currentGame.history.push({
        sentence: currentGame.question.sentence,
        phrase: currentGame.question.sentence,
        answer: currentGame.question.answer,
        user: chosen,
        chosen,
        correct: isCorrect,
        correctAnswer: currentGame.question.answer
      });

      button.classList.add(isCorrect ? 'web-correct' : 'web-wrong');
      if (isCorrect) {
        playSuccessSound();
      } else {
        playErrorSound();
      }

      setTimeout(() => {
        if (currentGame.round < currentGame.totalRounds) {
          currentGame.answerLocked = false;
          currentGame.round += 1;
          prepareRound2();
          return;
        }

        const finalScore = currentGame.correct;
        const resultText = finalScore === currentGame.totalRounds ? 'Perfect spell!' : 'Almost there';
        const summary = `You chose ${finalScore} of ${currentGame.totalRounds}.<br>${finalScore === currentGame.totalRounds ? 'The purple beam found every target.' : 'A little more magic and focus will do it.'}`;

        addSessionRecord('Step 2. Spell Web', resultText, finalScore, currentGame.totalRounds);
        updateResultView(resultText, finalScore, currentGame.totalRounds,
          finalScore === currentGame.totalRounds ? 'web' : null,
          'Spell Web',
          summary
        );
      }, 220);
    });
  });
}

function fireLaser(target) {
  const scene = document.querySelector('.game-2-scene');
  const beam = document.getElementById('laser-beam');
  if (!scene || !beam) return;
  playLaserShotSound();
  const sceneRect = scene.getBoundingClientRect();
  const targetRect = target.getBoundingClientRect();
  const muzzleAnchor = scene.querySelector('.muzzle-anchor');
  if (!muzzleAnchor) return;
  const muzzleRect = muzzleAnchor.getBoundingClientRect();
  const sceneScale = scene.offsetWidth ? sceneRect.width / scene.offsetWidth : 1;
  const startX = (muzzleRect.left + muzzleRect.width / 2 - sceneRect.left) / sceneScale;
  const startY = (muzzleRect.top + muzzleRect.height / 2 - sceneRect.top) / sceneScale;
  const endX = (targetRect.left - sceneRect.left + targetRect.width / 2) / sceneScale;
  const endY = (targetRect.top - sceneRect.top + targetRect.height / 2) / sceneScale;
  const dx = endX - startX;
  const dy = endY - startY;
  beam.style.left = `${startX}px`;
  beam.style.top = `${startY}px`;
  beam.style.width = `${Math.hypot(dx, dy)}px`;
  beam.style.transform = `rotate(${Math.atan2(dy, dx)}rad)`;
  beam.classList.remove('firing');
  void beam.offsetWidth;
  beam.classList.add('firing');
}

function startGame3() {
  currentGame = {
    id: 'game3',
    type: 'game3',
    round: 1,
    totalRounds: 10,
    rats: shuffle([...RAT_BANK]).slice(0, 10),
    correct: 0,
    history: []
  };

  refs.gameContent.innerHTML = `
    <div class="game-3-scene">
      <div class="rat-stage">
        <div id="rat-display" class="rat-display">
          <img class="rat-display__image" src="rat-game-cropped.png" alt="Magic rat">
          <span class="rat-word"></span>
        </div>
      </div>
      <div id="basket-grid" class="basket-grid"></div>
    </div>
  `;

  prepareRound3();
}

function prepareRound3() {
  const rat = currentGame.rats[currentGame.round - 1];
  currentGame.currentRat = rat;
  const basketGrid = document.getElementById('basket-grid');
  const ratDisplay = document.getElementById('rat-display');
  ratDisplay.querySelector('.rat-word').textContent = rat.item;

  basketGrid.innerHTML = BASKET_LABELS.map((label) => `
    <button class="basket-button" data-basket-label="${label}" type="button">
      <img class="basket-button__image" src="basket-game-cropped.png" alt="">
      <span>${label}</span>
    </button>
  `).join('');

  basketGrid.querySelectorAll('.basket-button').forEach((button) => {
    button.addEventListener('click', () => {
      if (currentGame.answerLocked) return;
      playRatSqueakSound();
      currentGame.answerLocked = true;
      const chosen = button.dataset.basketLabel;
      const correctPhrase = `${currentGame.currentRat.label} ${currentGame.currentRat.item}`;
      const isCorrect = chosen === currentGame.currentRat.label;
      currentGame.correct += isCorrect ? 1 : 0;
      currentGame.history.push({
        phrase: correctPhrase,
        answer: correctPhrase,
        user: `${chosen} ${currentGame.currentRat.item}`,
        chosen,
        correct: isCorrect,
        correctAnswer: correctPhrase
      });

      if (isCorrect) {
        playSuccessSound();
      } else {
        playErrorSound();
      }

      setTimeout(() => {
        if (currentGame.round < currentGame.totalRounds) {
          currentGame.answerLocked = false;
          currentGame.round += 1;
          prepareRound3();
          return;
        }

        const finalScore = currentGame.correct;
        const resultText = finalScore === currentGame.totalRounds ? 'Perfect sorting!' : 'Almost there';
        const summary = `You sorted ${finalScore} of ${currentGame.totalRounds}.<br>${finalScore === currentGame.totalRounds ? 'Every rat found the right basket.' : 'Watch the product names a little more closely.'}`;

        addSessionRecord('Step 3. Catch a rat', resultText, finalScore, currentGame.totalRounds);
        updateResultView(resultText, finalScore, currentGame.totalRounds,
          finalScore === currentGame.totalRounds ? 'rat' : null,
          'Magic Rat',
          summary
        );
      }, 220);
    });
  });
}

function playEndingVideo() {
  backgroundMusic.pause();
  refs.endVideo.controls = false;
  refs.endVideoOverlay.classList.add('video-loading');
  refs.endVideoOverlay.classList.remove('hidden');
  refs.endVideo.currentTime = 0;
  const reveal = () => {
    refs.endVideoOverlay.classList.remove('video-loading');
    refs.endVideo.play().catch(() => {});
  };
  if (refs.endVideo.readyState >= 3) reveal();
  else refs.endVideo.addEventListener('canplay', reveal, { once: true });
  refs.endVideo.onended = () => {
    refs.endVideoOverlay.classList.add('hidden');
    if (musicEnabled) backgroundMusic.play().catch(() => {});
  };
}

function playRewardVideo(onComplete, gameId = 'game1') {
  backgroundMusic.pause();
  refs.rewardVideo.src = gameId === 'game2'
    ? 'web.mp4'
    : gameId === 'game3'
      ? 'rat.mp4'
      : 'frogs liquid.mp4';
  refs.rewardVideo.load();
  refs.rewardVideo.controls = false;
  refs.rewardVideoOverlay.classList.add('video-loading');
  refs.rewardVideoOverlay.classList.remove('hidden');
  refs.rewardVideo.currentTime = 0;
  const finish = () => {
    refs.rewardVideoOverlay.classList.add('hidden');
    if (musicEnabled) backgroundMusic.play().catch(() => {});
    onComplete();
  };
  refs.rewardVideo.onended = finish;
  refs.rewardVideo.onerror = finish;
  const reveal = () => {
    refs.rewardVideoOverlay.classList.remove('video-loading');
    refs.rewardVideo.play().catch(() => {
      refs.rewardVideo.muted = true;
      refs.rewardVideo.play().catch(finish);
    });
  };
  if (refs.rewardVideo.readyState >= 3) reveal();
  else refs.rewardVideo.addEventListener('canplay', reveal, { once: true });
}

function attachGlobalEvents() {
  refs.profileButton.addEventListener('click', openProfile);
  refs.musicToggle.addEventListener('click', () => setMusicState(!musicEnabled));
  refs.soundsToggle.addEventListener('click', () => {
    soundsEnabled = !soundsEnabled;
    refs.soundsToggle.textContent = `Sounds: ${soundsEnabled ? 'On' : 'Off'}`;
  });
  refs.studentNameInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') saveStudentName();
  });
  document.getElementById('save-name').addEventListener('click', saveStudentName);
  refs.returnToGame.addEventListener('click', () => closeModal('profile-modal'));

  document.querySelectorAll('.close-modal').forEach((button) => {
    button.addEventListener('click', () => closeModal(button.dataset.close));
  });

  refs.introVideo.addEventListener('ended', () => {
    refs.introOverlay.classList.add('fading');
    window.setTimeout(() => {
      refs.introOverlay.classList.add('hidden');
      refs.introOverlay.classList.remove('fading');
    }, 720);
    setMusicState(true);
  });

  refs.introVideo.addEventListener('playing', () => {
    refs.introOverlay.classList.add('video-ready');
  }, { once: true });

  refs.introOverlay.addEventListener('click', () => {
    if (!refs.startExperience.classList.contains('started')) {
      refs.startExperience.focus();
    }
  });

  refs.startExperience.addEventListener('click', (event) => {
    event.stopPropagation();
    startExperience();
  });

  refs.endVideo.addEventListener('error', () => {
    refs.endVideoOverlay.classList.add('hidden');
  });

  refs.rewardVideoOverlay.addEventListener('click', () => refs.rewardVideo.play().catch(() => {}));

  window.addEventListener('resize', fitMobileGameStage, { passive: true });
  window.addEventListener('orientationchange', () => window.setTimeout(fitMobileGameStage, 120), { passive: true });
  if (window.visualViewport) {
    window.visualViewport.addEventListener('resize', fitMobileGameStage, { passive: true });
  }

}

function init() {
  renderCatalog();
  initializeName();
  attachGlobalEvents();
  updateProfileInvitation();
  startIntroVideo();
  refs.musicToggle.textContent = 'Music: On';
  refs.soundsToggle.textContent = 'Sounds: On';
  refs.profileName.textContent = `${profile.name || 'Student'} — Profile`;
  setMusicState(true);
}

init();
