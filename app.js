const SAVE_KEY = "local-stimulation-clicker";

const NEWS = [
  "Scientists discover house parties",
  "Are news banners a thing of the past?",
  "Frogs missing worldwide",
  "Wall Street analyst says recession will happen, or maybe not, he's not really sure",
  "The frogs are back",
  "Are cold showers making you bald?",
  "My tummy hurts :(",
  "Lab rats unionize and demand fair compensation",
  "Op-ed: I've always wanted to write an op-ed",
  "Local man finally moving away",
  "Study says that you're looking super cute today :3",
  "Introverts United meetup deals with disappointing attendance",
  "Peter Piper, 63, picked up in pickled pepper ponzi plot",
  "News headline writers facing layoffs, wait does that include me? Please I need this",
  "President moves to reverse The Louisiana Purchase, It was just a bad deal",
  "Diet Coke shown to cure just about everything",
  "World's longest game of hide and seek turns into missing persons case",
  "Mystery Meat Monday causes mass casualty",
  "Hacker sets everyone's credit score to 7",
  "Hero dog becomes world's worst DJ",
  "Shrieking eldritch horror pulls ahead in mayoral race",
  "Child star steals hearts, faces prison",
  "Celebrity chef apologizes for asbestos incident",
  "Father, 34, arrested for stealing son's nose",
  "Scientists reveal something huge, probably",
  "Rain expected worldwide today",
  "Officials warn batteries still not edible",
  "Winter fashion forecast: Jorts and junderwear",
  "Orca capsizes hearts, wins Mystic Bay beauty pageant",
  "Local grandma says you're too thin",
  "Ketchup truck collision has drivers seeing red",
  "Gymnastic medalist arrested in murder plot: She's twisted",
  "Hot dog eating competition ends in tragedy",
  "Scientists invent new form of anxiety",
  "Local election ends in tie, candidates must kiss",
  "Five dead in trolley problem",
  "MPA unveils new rating system for prudes, dorks",
  "Double trouble: Another Earth is heading our way",
  "Beloved talk show host's last words revealed: oof",
  "Nine out of ten doctors agree: The other doctor is a menace",
];

const CHAT = [
  "chat: buy the shiny one",
  "viewer42: corner hit when?",
  "mod: stay hydrated",
  "clickfan: this is fine",
  "speedrun: skip ocean?",
  "lofi_lad: beat dropped",
  "financebro: leverage it",
];

const LOFI_TRACKS = ["Pinwheel", "What Next", "Counting", "Pageantry", "Retrogress", "Secret", "Tapestry", "Tokyo", "Vaquero", "Woeruny"];

const SKYWRITER_ADS = [
  "You are the 1 millionth visitor!",
  "NordVPN",
  "Cubby Seal Pillow",
];

const ASSETS = {
  dvd: "assets/openmoji/dvd.svg",
  metro: "assets/openmoji/metro.svg",
  runner: "assets/openmoji/person-running.svg",
  music: "assets/openmoji/musical-notes.svg",
  microphone: "assets/openmoji/microphone.svg",
  owl: "assets/openmoji/owl.svg",
  envelope: "assets/openmoji/envelope.svg",
  chart: "assets/openmoji/chart-increasing.svg",
  gem: "assets/openmoji/gem-stone.svg",
  chicken: "assets/openmoji/chicken.svg",
  burger: "assets/openmoji/hamburger.svg",
  bowl: "assets/openmoji/bowl-with-spoon.svg",
  soap: "assets/openmoji/soap.svg",
  bubbles: "assets/openmoji/bubbles.svg",
  weights: "assets/openmoji/person-lifting-weights.svg",
  flex: "assets/openmoji/flexed-biceps.svg",
  television: "assets/openmoji/television.svg",
  gamepad: "assets/openmoji/video-game.svg",
  gift: "assets/openmoji/wrapped-gift.svg",
  voltage: "assets/openmoji/high-voltage.svg",
  airplane: "assets/openmoji/airplane.svg",
  shoppingCart: "assets/openmoji/shopping-cart.svg",
  lotus: "assets/openmoji/person-in-lotus-position.svg",
  gear: "assets/openmoji/gear.svg",
  bell: "assets/openmoji/bell.svg",
  warning: "assets/openmoji/warning.svg",
  package: "assets/openmoji/package.svg",
  sparkles: "assets/openmoji/sparkles.svg",
  moneyBag: "assets/openmoji/money-bag.svg",
  slot: "assets/openmoji/slot-machine.svg",
  replyMail: "assets/openmoji/envelope-with-arrow.svg",
  topHat: "assets/openmoji/top-hat.svg",
  cursor: "assets/openmoji/cursor.svg",
};

function assetImg(name, className, alt = "") {
  return `<img class="${className}" src="${ASSETS[name]}" alt="${alt}" draggable="false" />`;
}

const BASE_STOCKS = [
  { symbol: "DOPA", price: 42, shares: 0, basis: 0, crypto: false },
  { symbol: "DVD", price: 88, shares: 0, basis: 0, crypto: false },
  { symbol: "RAIN", price: 24, shares: 0, basis: 0, crypto: false },
  { symbol: "GEM", price: 121, shares: 0, basis: 0, crypto: false },
];

let STOCKS = freshStocks();

function freshStocks() {
  return BASE_STOCKS.map((stock) => ({ ...stock }));
}

const DUO_QUESTIONS = [
  { prompt: "Translate: stimulation", answer: "estimulo", options: ["estimulo", "zapato", "queso"] },
  { prompt: "Translate: click", answer: "clic", options: ["clic", "nube", "mesa"] },
  { prompt: "Translate: rain", answer: "lluvia", options: ["lluvia", "pan", "raton"] },
  { prompt: "Translate: ocean", answer: "oceano", options: ["oceano", "boton", "verde"] },
  { prompt: "Translate: button", answer: "boton", options: ["gato", "boton", "luna"] },
  { prompt: "Translate: news", answer: "noticias", options: ["noticias", "silla", "flor"] },
  { prompt: "Translate: owl", answer: "buho", options: ["cafe", "buho", "tren"] },
  { prompt: "Translate: gem", answer: "gema", options: ["mesa", "gema", "zapato"] },
  { prompt: "Translate: music", answer: "musica", options: ["musica", "llave", "sol"] },
  { prompt: "Translate: chicken", answer: "pollo", options: ["nube", "pollo", "libro"] },
];

const EMAILS = [
  { from: "Grandma", subject: "are you still clicking that button?", body: "Please remember to blink and eat a vegetable.", reward: 3500 },
  { from: "Maya", subject: "wedding update", body: "You are still invited. Please do not bring the hydraulic press.", reward: 2400, requires: 0 },
  { from: "Maya", subject: "wedding canceled", body: "Bad news. We found his profile on a dating app. There will still be cake.", reward: 4200, requires: 1 },
  { from: "Targeted Ad", subject: "newly single?", body: "Meet millions of people who also ignore their screen time report.", reward: 1800, requires: 2 },
  { from: "Grandma", subject: "I heard about Maya", body: "These apps are trouble. Also, are you eating enough?", reward: 3600, requires: 3 },
];

const ACHIEVEMENTS = [
  { name: "Completionist", desc: "Unlock all achievements other than Polyglot.", done: () => hasCompletionist() },
  { name: "Tunnel Vision", desc: "Unlock the Subway Surfers Wormhole.", done: () => state.bought.includes("wormhole") },
  { name: "Polyglot", desc: "Correctly answer all Duolingo questions.", done: () => !state.duoFailed && state.duoCorrect >= DUO_QUESTIONS.length },
  { name: "Shopaholic", desc: "Purchase every cosmetic in the item shop.", done: () => state.cosmetics.length >= COSMETICS.length },
  { name: "Maxed Out", desc: "Reach level 50.", done: () => state.level >= 50 },
  { name: "iPad Kid", desc: "Generate 1,000,000 stimulation.", done: () => state.lifetime >= 1000000 },
  { name: "M'Lady", desc: "Tip your fedora.", done: () => state.cosmetics.includes("fedora") },
  { name: "Decked Out", desc: "Purchase all upgrades other than Duolingo and Go to the Ocean.", done: () => hasDeckedOut() },
  { name: "Hunter", desc: "Unlock 15 achievements.", done: () => state.achievements.length >= 15 },
  { name: "Click Commander", desc: "Click the button 1,000 times.", done: () => state.clicks >= 1000 },
  { name: "Tube Rider", desc: "Unlock fullscreen Subway Surfers.", done: () => state.bought.includes("subwayFull") },
  { name: "Corner Hunter", desc: "Have 100 DVD logos hit a corner.", done: () => state.cornerHits >= 100 },
  { name: "Loot Hoarder", desc: "Open 25 lootboxes.", done: () => state.lootOpened >= 25 },
  { name: "Roaring Kitty", desc: "Make 100,000 stimulation from stocks.", done: () => state.regularStockGain >= 100000 },
  { name: "Click Corporal", desc: "Click the button 500 times.", done: () => state.clicks >= 500 },
  { name: "Leveler", desc: "Reach level 25.", done: () => state.level >= 25 },
  { name: "Casual Shopper", desc: "Purchase a cosmetic.", done: () => state.cosmetics.length > 0 },
  { name: "Cursor Collector", desc: "Buy a custom cursor.", done: () => state.cosmetics.includes("cursor") },
  { name: "Owl Scholar", desc: "Correctly answer 10 Duolingo questions.", done: () => state.duoCorrect >= 10 },
  { name: "Day Trader", desc: "Sell a stock for more than you bought it.", done: () => state.stockProfit > 0 },
  { name: "Gambler", desc: "Sell a stock for less than you bought it.", done: () => state.stockLoss > 0 },
  { name: "Loot Finder", desc: "Open a lootbox.", done: () => state.lootOpened > 0 },
  { name: "Hoot Hoot", desc: "Buy the Duolingo upgrade.", done: () => state.bought.includes("duo") },
  { name: "Achievements", desc: "Buy the Achievements upgrade.", done: () => state.bought.includes("achievements") },
  { name: "Click Cadet", desc: "Click the button 100 times.", done: () => state.clicks >= 100 },
  { name: "Procrastinator", desc: "Generate 100,000 stimulation.", done: () => state.lifetime >= 100000 },
  { name: "Commuter", desc: "Watch 10 minutes of Subway Surfers.", done: () => state.subwayTime >= 600 },
  { name: "Fixer Upper", desc: "Purchase 15 upgrades.", done: () => state.bought.length >= 15 },
  { name: "Good Grandchild", desc: "Reply to Grandma's email.", done: () => state.emailsReplied.includes(0) },
  { name: "Kinder Surprise", desc: "Open a kinder egg dropped by Paul.", done: () => state.kinderEggs > 0 },
  { name: "Chicken Tendies", desc: "Feed Paul the chicken before he dies.", done: () => state.achievements.includes("Chicken Tendies") },
  { name: "Level Up", desc: "Reach level 10.", done: () => state.level >= 10 },
  { name: "Disc Collector", desc: "Buy 5 DVD logos.", done: () => state.dvdCount >= 5 },
  { name: "Healthy Habits", desc: "Unlock Screen Time.", done: () => state.bought.includes("screen") },
  { name: "Night Owl", desc: "Play between 8:00 PM and 6:30 AM.", done: () => isNightOwlTime() },
];

const ACHIEVEMENT_NAMES = ACHIEVEMENTS.map((achievement) => achievement.name);

const COSMETICS = [
  { id: "google", name: "Sign in with Google", cost: 0, icon: "sparkles" },
  { id: "cursor", name: "Custom cursor", cost: 3, icon: "gear" },
  { id: "fedora", name: "Fedora", cost: 5, icon: "topHat" },
  { id: "slinky", name: "Slinky trail", cost: 7, icon: "gift" },
];

const UPGRADE_DEFS = [
  { id: "dvd", name: "Bouncing DVD", cost: 3, repeat: true, desc: "Adds the DVD logo to bounce in the background.", action: buyDvd },
  { id: "tab", name: "Add Tab Title", cost: 5, desc: "It is good for SEO.", action: () => { document.title = "+ stimulation"; setFavicon("+"); } },
  { id: "amount", name: "Amount Animation", cost: 10, desc: "Plays an animation when clicking the button.", action: () => { state.perClick += 1; } },
  { id: "sps", name: "SPS Counter", cost: 25, desc: "See your stimulation per second.", action: () => { state.flags.sps = true; } },
  { id: "button1", name: "Button Upgrade", cost: 50, desc: "Button is a little bigger, rounder, and making sound.", action: () => { state.perClick += 1; state.flags.button1 = true; } },
  { id: "dvdSound", name: "DVD Bounce Sound", cost: 75, req: () => state.dvdCount > 0, desc: "DVDs now make sound when bouncing the wall.", action: () => { state.spb += 5; state.flags.dvdSound = true; } },
  { id: "subway", name: "Subway Surfers", cost: 100, desc: "Adds Subway Surfers into the bottom right corner.", action: () => { state.sps += 3; addWidget("subway"); } },
  { id: "news", name: "Breaking News", cost: 100, desc: "Stay up to date with the latest news.", action: () => { state.sps += 4; state.flags.news = true; } },
  { id: "critical", name: "Critical Hits", cost: 200, req: "amount", desc: "Adds critical hits when clicking the button.", action: () => { state.flags.critical = true; } },
  { id: "lofi", name: "Lofi Beats", cost: 250, desc: "Helps you study and relax.", action: () => { state.sps += 10; addWidget("lofi"); } },
  { id: "rain", name: "Rain Sounds", cost: 300, desc: "Soothing rain sounds.", action: () => { state.sps += 15; state.flags.rain = true; } },
  { id: "pinwheel", name: "Pinwheel", cost: 700, desc: "Adds pinwheel effect to the button.", action: () => { state.sps += 20; state.flags.pinwheel = true; } },
  { id: "hydraulic", name: "Hydraulic Press", cost: 1000, desc: "Squish things slowly.", action: () => { state.flags.hydraulic = true; addWidget("hydraulic"); } },
  { id: "hydraulicSpeed", name: "Hydraulic Speed", cost: 1200, repeat: true, req: "hydraulic", desc: "Hydraulic press is 15% faster.", action: () => { state.hydraulicSpeed += 1; } },
  { id: "achievements", name: "Achievements", cost: 1500, desc: "Celebrate your accomplishments.", action: () => { state.flags.achievements = true; unlockAchievement("Achievements"); } },
  { id: "thunder", name: "Thunder Sounds", cost: 2000, req: "rain", desc: "Add ambient rolling thunder.", action: () => { state.sps += 8; state.flags.thunder = true; } },
  { id: "popcorn", name: "Popcorn Animation", cost: 3500, req: "amount", desc: "Replaces boring animation into popcorn effect.", action: () => { state.perClick += 8; state.flags.popcorn = true; } },
  { id: "slime", name: "Slime", cost: 4000, desc: "Watch ASMR slime videos.", action: () => { state.sps += 35; addWidget("slime"); } },
  { id: "technicolor", name: "Technicolor", cost: 5000, desc: "DVD colors change on bounce.", action: () => { state.spb += 10; state.flags.technicolor = true; } },
  { id: "mukbang", name: "Mukbang", cost: 6000, desc: "Watch a guy eat.", action: () => { state.sps += 60; addWidget("mukbang"); } },
  { id: "screen", name: "Screen Time", cost: 7500, desc: "Manage your screen habits.", action: () => { state.flags.screen = true; unlockAchievement("Healthy Habits"); } },
  { id: "levels", name: "Levels", cost: 8000, desc: "Gain XP and level up.", action: () => { state.flags.levels = true; } },
  { id: "podcast", name: "True Crime Podcast", cost: 10000, desc: "Listen to a murder.", action: () => { state.sps += 100; addWidget("podcast"); } },
  { id: "autoHydraulic", name: "Auto Hydraulics (finally...)", cost: 15000, req: "hydraulic", desc: "Hydraulic press runs automatically.", action: () => { state.flags.autoHydraulic = true; } },
  { id: "corners", name: "Corner Hits", cost: 15000, desc: "DVD corner hits give 10x stimulation.", action: () => { state.flags.corners = true; } },
  { id: "ui", name: "UI Upgrade", cost: 15000, desc: "Bright colors. More gradients.", action: () => { state.flags.ui = true; } },
  { id: "shop", name: "Item Shop", cost: 17500, desc: "Buy cosmetic items to enhance your experience.", action: () => { state.flags.shop = true; } },
  { id: "loot", name: "Loot Boxes", cost: 20000, desc: "Surprise mechanics.", action: () => { state.flags.loot = true; } },
  { id: "button2", name: "Button Upgrade II", cost: 25000, req: "button1", desc: "Each click gives 1% of SPS.", action: () => { state.flags.button2 = true; addWidget("buttons"); } },
  { id: "stocks", name: "Stock Market", cost: 25000, desc: "Invest in your future and dopamine receptors.", action: () => { state.flags.stocks = true; addWidget("stock"); } },
  { id: "duo", name: "Duolingo", cost: 25000, desc: "Learn a new language, or else...", action: () => { state.flags.duo = true; unlockAchievement("Hoot Hoot"); addWidget("duo"); } },
  { id: "meditation", name: "Meditation", cost: 35000, desc: "Help relax your mind.", action: () => { state.sps += 120; state.flags.meditation = true; addWidget("meditation"); } },
  { id: "dvdSpeed1", name: "DVD Speed I", cost: 50000, desc: "Double DVD speed.", action: () => { state.dvdSpeed *= 2; } },
  { id: "subwaySound", name: "Subway Surfers Unmuted", cost: 50000, req: "subway", desc: "Unmute Subway Surfers.", action: () => { state.sps += 150; state.flags.subwaySound = true; } },
  { id: "email", name: "Email", cost: 60000, desc: "Take a break and check your inbox.", action: () => { state.flags.email = true; addWidget("mail"); } },
  { id: "meditation2", name: "Meditation 2x", cost: 60000, req: "meditation", desc: "Meditate twice as fast.", action: () => { state.sps += 120; state.flags.meditation2 = true; } },
  { id: "fitness", name: "Fitness Instructor", cost: 75000, desc: "Stay fit with your screen.", action: () => { state.sps += 100; addWidget("fitness"); } },
  { id: "gems", name: "In-game Currency", cost: 100000, desc: "Cleverly disguised microtransactions.", action: () => { state.flags.gems = true; state.gems += 5; addWidget("gems"); } },
  { id: "streamer", name: "Reaction Streamer", cost: 100000, desc: "A friend in the chaos.", action: () => { state.sps += 200; addWidget("streamer"); } },
  { id: "crypto", name: "Crypto", cost: 125000, req: "stocks", desc: "Add cryptocurrency to your portfolio.", action: () => { state.flags.crypto = true; addCryptoStocks(); } },
  { id: "powerups", name: "Powerups", cost: 150000, desc: "Powerup.", action: () => { state.flags.powerups = true; } },
  { id: "skywriter", name: "Skywriter", cost: 180000, desc: "Add banner ads.", action: () => { state.sps += 700; state.flags.skywriter = true; addWidget("skywriter"); } },
  { id: "narrator", name: "Voice Narrator", cost: 200000, desc: "Add a voice narrator to your experience.", action: () => { state.flags.narrator = true; announce("Great stimulation."); } },
  { id: "subwayFull", name: "Subway Surfers Fullscreen", cost: 250000, req: "subway", desc: "It's time to get serious.", action: () => { state.sps += 500; state.flags.subwayFull = true; unlockAchievement("Tube Rider"); } },
  { id: "leverage", name: "Leverage", cost: 250000, req: "stocks", desc: "Double stock gains and losses.", action: () => { state.flags.leverage = true; } },
  { id: "pet", name: "Tamagotchi", cost: 300000, desc: "Adopt a virtual pet. Don't forget to feed him.", action: () => { state.flags.pet = true; addWidget("pet"); } },
  { id: "chat", name: "Twitch Chat", cost: 500000, desc: "Start streaming.", action: () => { state.flags.chat = true; addWidget("chat"); } },
  { id: "dvdSpeed2", name: "DVD Speed II", cost: 750000, desc: "Double DVD speed.", action: () => { state.dvdSpeed *= 2; } },
  { id: "wormhole", name: "Subway Surfers Wormhole", cost: 1000000, req: "subwayFull", desc: "Subway Surfers is now...", action: () => { state.sps += 1000; state.flags.wormhole = true; } },
  { id: "ocean", name: "Go to the Ocean", cost: 2000000, desc: "Last upgrade...", action: endGame },
];

let state = freshState();
let lastTime = performance.now();
let lootTimer = 0;
let powerTimer = 0;
let stockTimer = 0;
let hydraulicTimer = 0;
let chatTimer = 0;
let newsTimer = 0;
let adTimer = 0;
let notificationTimer = 0;
let musicTimer = 0;
let lofiTrackTimer = 0;
let passiveSaveTimer = 0;
let saveTimeout = 0;
let soundReady = false;
let audioContext = null;
let orientationLockAttempted = false;

const el = {
  app: document.getElementById("app"),
  clickButton: document.getElementById("clickButton"),
  stimCount: document.getElementById("stimCount"),
  spsCount: document.getElementById("spsCount"),
  levelBox: document.getElementById("levelBox"),
  levelText: document.getElementById("levelText"),
  xpFill: document.getElementById("xpFill"),
  upgradeList: document.getElementById("upgradeList"),
  dvdLayer: document.getElementById("dvdLayer"),
  floatLayer: document.getElementById("floatLayer"),
  widgetLayer: document.getElementById("widgetLayer"),
  customCursor: document.getElementById("customCursor"),
  landscapePrompt: document.getElementById("landscapePrompt"),
  landscapeBtn: document.getElementById("landscapeBtn"),
  news: document.getElementById("news"),
  newsText: document.getElementById("newsText"),
  rain: document.getElementById("rain"),
  toolbar: document.getElementById("toolbar"),
  achievementsBtn: document.getElementById("achievementsBtn"),
  screenTimeBtn: document.getElementById("screenTimeBtn"),
  shopBtn: document.getElementById("shopBtn"),
  stockBtn: document.getElementById("stockBtn"),
  emailBtn: document.getElementById("emailBtn"),
  resetBtn: document.getElementById("resetBtn"),
  modal: document.getElementById("modal"),
  modalTitle: document.getElementById("modalTitle"),
  modalBody: document.getElementById("modalBody"),
  modalClose: document.getElementById("modalClose"),
  ocean: document.getElementById("ocean"),
  playAgain: document.getElementById("playAgain"),
};

load();
bindEvents();
rebuildAll();
requestAnimationFrame(loop);

function gameSize() {
  return {
    w: el.app.clientWidth || window.innerWidth,
    h: el.app.clientHeight || window.innerHeight,
  };
}

function freshState() {
  return {
    stim: 0,
    lifetime: 0,
    clicks: 0,
    sps: 0,
    perClick: 1,
    spb: 1,
    dvdCount: 0,
    dvdSpeed: 1,
    level: 1,
    xp: 0,
    gems: 0,
    stockGain: 0,
    regularStockGain: 0,
    cryptoGain: 0,
    lootOpened: 0,
    duoIndex: 0,
    duoCorrect: 0,
    duoFailed: false,
    duoTimeLeft: 30,
    emailsReplied: [],
    cosmetics: [],
    stockProfit: 0,
    stockLoss: 0,
    hydraulicSpeed: 0,
    hydraulicPresses: 0,
    petHunger: 100,
    petAlive: true,
    fitnessReps: 0,
    streamerHype: 0,
    chatDonations: 0,
    chatDonationGain: 0,
    lofiTrack: 0,
    kinderEggs: 0,
    subwayTime: 0,
    cornerHits: 0,
    skywriterAdIndex: 0,
    powerModes: { critical: 0, severe: 0, dvd: 0, serene: 0 },
    bought: [],
    flags: {},
    widgets: [],
    dvds: [],
    achievements: [],
    ended: false,
  };
}

function bindEvents() {
  el.clickButton.addEventListener("click", handleClick);
  el.achievementsBtn.addEventListener("click", () => openAchievements());
  el.screenTimeBtn.addEventListener("click", () => openInfo("Screen Time", screenTimeHtml()));
  el.shopBtn.addEventListener("click", () => {
    openInfo("Item Shop", shopHtml());
    bindShopButtons();
  });
  el.stockBtn.addEventListener("click", () => {
    openInfo("Stocks", stocksHtml());
    bindStockButtons(el.modalBody);
  });
  el.emailBtn.addEventListener("click", () => {
    openInfo("Inbox", inboxHtml());
    el.modalBody.querySelectorAll("button").forEach((button) => {
      button.addEventListener("click", () => replyEmail(Number(button.dataset.index)));
    });
  });
  el.resetBtn.addEventListener("click", resetGame);
  el.modalClose.addEventListener("click", closeModal);
  el.modal.addEventListener("click", (event) => {
    if (event.target === el.modal) closeModal();
  });
  el.playAgain.addEventListener("click", resetGame);
  el.landscapeBtn.addEventListener("click", requestMobileLandscapeLock);
  document.addEventListener("pointerdown", requestMobileLandscapeLock, { capture: true, once: true });
  window.addEventListener("resize", updateLandscapePrompt);
  screen.orientation?.addEventListener?.("change", updateLandscapePrompt);
  document.addEventListener("keydown", (event) => {
    if (event.key.toLowerCase() === "f") toggleFullscreen();
    if (event.key === "Escape") closeModal();
  });
  document.addEventListener("mousemove", moveCustomCursor);
  updateLandscapePrompt();
}

async function requestMobileLandscapeLock() {
  if (!isLikelyPhone()) return;
  if (orientationLockAttempted && window.innerWidth > window.innerHeight) return;
  orientationLockAttempted = true;
  try {
    if (!document.fullscreenElement && document.documentElement.requestFullscreen) {
      await document.documentElement.requestFullscreen();
    }
    await screen.orientation?.lock?.("landscape");
  } catch {
    // Some mobile browsers do not allow programmatic orientation locking.
    // The compact mobile layout remains usable without forcing CSS rotation.
  }
  updateLandscapePrompt();
}

function isLikelyPhone() {
  const coarsePointer = window.matchMedia?.("(pointer: coarse)")?.matches;
  const narrowScreen = Math.min(window.innerWidth, window.innerHeight) <= 820;
  return !!coarsePointer && narrowScreen;
}

function updateLandscapePrompt() {
  if (!el.landscapePrompt) return;
  const showPrompt = isLikelyPhone() && window.innerHeight > window.innerWidth && !state.ended;
  el.landscapePrompt.classList.toggle("hidden", !showPrompt);
}

function moveCustomCursor(event) {
  if (!state.cosmetics.includes("cursor")) return;
  el.customCursor.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
}

function handleClick(event) {
  if (state.ended) return;
  primeSound();
  let gain = state.perClick * (state.powerModes.severe > 0 ? 2 : 1);
  if (state.flags.button2) gain += Math.max(1, state.sps * 0.01);
  let crit = false;
  const criticalChance = state.powerModes.critical > 0 ? 1 : 0.05;
  if (state.flags.critical && Math.random() < criticalChance) {
    gain *= state.powerModes.critical > 0 ? 10 : 6 + Math.floor(Math.random() * 4);
    crit = true;
    if (state.flags.narrator) announce("Critical Hit!");
  }
  addStim(gain);
  state.clicks += 1;
  addXp(gain);
  spawnClickPop(event.clientX, event.clientY, gain, crit);
  spawnTrail(event.clientX, event.clientY);
  if (state.flags.button1) playTone(420, 0.035, "square", 0.035);
  el.clickButton.classList.add("pressed");
  window.setTimeout(() => el.clickButton.classList.remove("pressed"), 90);
  checkAchievements();
  render();
  requestSave();
}

function addStim(amount) {
  if (!Number.isFinite(amount)) return;
  state.stim += amount;
  state.lifetime += amount;
}

function addXp(amount) {
  if (!state.flags.levels) return;
  state.xp += amount;
  while (state.xp >= state.level * 120) {
    const needed = state.level * 120;
    state.xp -= needed;
    state.level += 1;
    addStim(state.level * 100);
    if (state.level >= 10) unlockAchievement("Level Up");
  }
}

function buyUpgrade(id) {
  const def = getVisibleUpgrades().find((item) => item.id === id);
  if (!def || state.stim < getCost(def)) return;
  state.stim -= getCost(def);
  primeSound();
  if (!def.repeat) state.bought.push(def.id);
  def.action();
  if (state.ended) {
    save();
    return;
  }
  checkAchievements();
  render();
  save();
}

function buyDvd() {
  state.dvdCount += 1;
  state.spb += state.dvdCount === 1 ? 0 : 1;
  const rect = gameSize();
  const dvd = {
    x: Math.random() * Math.max(100, rect.w - 130),
    y: Math.random() * Math.max(100, rect.h - 90),
    vx: (Math.random() > 0.5 ? 1 : -1) * (90 + Math.random() * 80),
    vy: (Math.random() > 0.5 ? 1 : -1) * (80 + Math.random() * 70),
    color: randomColor(),
  };
  state.dvds.push(dvd);
  renderDvds();
}

function getCost(def) {
  if (def.id === "dvd") return Math.round(def.cost * Math.pow(1.52, state.dvdCount));
  if (def.id === "hydraulicSpeed") return Math.round(def.cost * Math.pow(1.55, state.hydraulicSpeed));
  return def.cost;
}

function canShow(def) {
  if (!def.repeat && state.bought.includes(def.id)) return false;
  if (typeof def.req === "string" && !state.bought.includes(def.req)) return false;
  if (typeof def.req === "function" && !def.req()) return false;
  return state.lifetime >= Math.max(2, def.cost * 0.45) || state.lifetime >= 50;
}

function slotCount() {
  if (state.lifetime >= 50) return 5;
  if (state.lifetime >= 25) return 4;
  if (state.lifetime >= 10) return 3;
  if (state.lifetime >= 5) return 2;
  if (state.lifetime >= 2) return 1;
  return 0;
}

function getVisibleUpgrades() {
  const slots = slotCount();
  return UPGRADE_DEFS.filter(canShow).slice(0, slots);
}

function render() {
  const stim = Math.max(0, state.stim);
  el.stimCount.textContent = `${format(stim)} stimulation`;
  el.spsCount.textContent = `${format(state.sps)} stimulation/sec`;
  el.spsCount.classList.toggle("hidden", !state.flags.sps);
  el.levelBox.classList.toggle("hidden", !state.flags.levels);
  el.levelText.textContent = `Level ${state.level}`;
  el.xpFill.style.width = `${Math.min(100, (state.xp / Math.max(1, state.level * 120)) * 100)}%`;
  el.news.classList.toggle("hidden", !state.flags.news);
  el.rain.classList.toggle("active", !!state.flags.rain);
  el.app.classList.toggle("thunder", !!state.flags.thunder);
  el.app.classList.toggle("ui-upgrade", !!state.flags.ui);
  el.app.classList.toggle("serene-mode", state.powerModes.serene > 0 && !state.ended);
  el.toolbar.classList.toggle("hidden", !state.flags.achievements && state.bought.length < 8);
  el.screenTimeBtn.classList.toggle("hidden", !state.flags.screen);
  el.shopBtn.classList.toggle("hidden", !state.flags.shop);
  el.stockBtn.classList.toggle("hidden", !state.flags.stocks);
  el.emailBtn.classList.toggle("hidden", !state.flags.email);
  el.clickButton.classList.toggle("upgraded", !!state.flags.button1);
  el.clickButton.classList.toggle("super", !!state.flags.button2 || !!state.flags.ui);
  el.clickButton.classList.toggle("pinwheel", !!state.flags.pinwheel);
  el.clickButton.classList.toggle("fedora-button", state.cosmetics.includes("fedora"));
  document.body.classList.toggle("custom-cursor", state.cosmetics.includes("cursor"));
  el.customCursor.classList.toggle("hidden", !state.cosmetics.includes("cursor") || state.ended);
  updateLandscapePrompt();
  renderUpgrades();
  updateWidgetClasses();
}

function renderUpgrades() {
  const visible = getVisibleUpgrades();
  el.upgradeList.replaceChildren(...visible.map((def) => {
    const button = document.createElement("button");
    button.className = "upgrade-card";
    button.type = "button";
    button.disabled = state.stim < getCost(def);
    button.addEventListener("click", () => buyUpgrade(def.id));
    button.innerHTML = `
      <div class="upgrade-name"><span>${def.name}</span><span class="upgrade-cost">${format(getCost(def))}</span></div>
      <div class="upgrade-desc">${def.desc}</div>
    `;
    return button;
  }));
}

function renderDvds() {
  el.dvdLayer.replaceChildren(...state.dvds.map((dvd) => {
    const node = document.createElement("div");
    node.className = "dvd";
    node.innerHTML = assetImg("dvd", "asset-dvd", "DVD");
    node.style.color = dvd.color;
    node.style.transform = `translate(${dvd.x}px, ${dvd.y}px)`;
    return node;
  }));
}

function addWidget(type) {
  if (!state.widgets.includes(type)) state.widgets.push(type);
  rebuildWidgets();
}

function rebuildWidgets() {
  const nodes = state.widgets.map((type) => {
    const node = document.createElement("div");
    node.dataset.type = type;
    if (type === "subway") {
      node.className = "widget video-card subway";
      node.innerHTML = `<div class="subway-road"></div>${assetImg("metro", "asset-metro", "subway")}${assetImg("runner", "asset-runner", "runner")}<span>SUBWAY<br />SURFERS</span><em class="volume-badge">${state.flags.subwaySound ? "VOL" : "MUTE"}</em>`;
    } else if (type === "lofi") {
      node.className = "widget lofi";
      node.innerHTML = `<h3>Lofi Beats</h3><div class="lofi-girl">${assetImg("music", "asset-music", "music")}</div><button type="button">${LOFI_TRACKS[state.lofiTrack % LOFI_TRACKS.length]}</button>`;
      node.querySelector("button").addEventListener("click", () => {
        cycleLofiTrack();
        addStim(350);
        render();
      });
    } else if (type === "slime") {
      node.className = "widget video-card slime";
      node.innerHTML = `<div class="asset-pair">${assetImg("soap", "asset-small", "soap")}${assetImg("bubbles", "asset-small", "bubbles")}</div><span>SLIME<br />ASMR</span>`;
    } else if (type === "mukbang") {
      node.className = "widget video-card mukbang";
      node.innerHTML = `<div class="asset-pair">${assetImg("burger", "asset-small", "food")}${assetImg("bowl", "asset-small", "bowl")}</div><span>MUKBANG<br />LIVE</span>`;
    } else if (type === "podcast") {
      node.className = "widget podcast";
      node.innerHTML = `<h3>True Crime Podcast</h3>${assetImg("microphone", "asset-podcast", "microphone")}<div class="podcast-wave"></div><p>Episode 87: the missing cursor.</p>`;
    } else if (type === "meditation") {
      node.className = "widget meditation";
      node.innerHTML = `<h3>${assetImg("lotus", "asset-title", "meditation")} Meditation</h3><div class="mandala">${assetImg("lotus", "asset-lotus", "meditation")}</div><button class="breathe" type="button">breathe</button>`;
      node.querySelector("button").addEventListener("click", () => {
        addStim(state.flags.meditation2 ? 2400 : 1200);
        spawnTrail(210, 420);
        render();
      });
    } else if (type === "hydraulic") {
      node.className = "widget hydraulic";
      node.innerHTML = `<div class="press-rod"></div><div class="press-head">${assetImg("gear", "asset-press-gear", "gear")}</div><div class="press-target">${assetImg("package", "asset-press-package", "package")}</div><div class="press-base"></div><button class="squish" type="button">squish</button><small>${state.hydraulicPresses} squishes</small>`;
      node.querySelector("button").addEventListener("click", () => {
        triggerHydraulicSquish();
        render();
      });
    } else if (type === "stock") {
      node.className = "widget stock";
      node.innerHTML = stocksHtml();
      bindStockButtons(node);
    } else if (type === "duo") {
      node.className = "widget duo";
      node.innerHTML = duoHtml();
      node.querySelectorAll("button").forEach((button) => {
        button.addEventListener("click", () => answerDuo(button.dataset.answer));
      });
    } else if (type === "mail") {
      node.className = "widget mail";
      node.innerHTML = inboxHtml();
      node.querySelectorAll("button").forEach((button) => {
        button.addEventListener("click", () => replyEmail(Number(button.dataset.index)));
      });
    } else if (type === "fitness") {
      node.className = "widget fitness";
      node.innerHTML = `<h3>Fitness Instructor</h3><div class="trainer">${assetImg("weights", "asset-trainer", "fitness")}<span></span></div><button type="button">rep ${state.fitnessReps}</button>`;
      node.querySelector("button").addEventListener("click", () => {
        state.fitnessReps += 1;
        addStim(900 + state.fitnessReps * 30);
        render();
        rebuildWidgets();
      });
    } else if (type === "gems") {
      node.className = "widget gems";
      node.innerHTML = `<h3>Gems</h3>${assetImg("gem", "asset-gem", "gem")}<div class="gem-count">${state.gems}</div><small>premium sparkle currency</small>`;
    } else if (type === "streamer") {
      node.className = "widget streamer";
      node.innerHTML = `<h3>Reaction Streamer</h3><div class="stream-face">${assetImg("television", "asset-streamer", "stream")}</div><button type="button">donate</button><small>hype ${state.streamerHype}</small>`;
      node.querySelector("button").addEventListener("click", () => {
        if (state.stim < 1000) return;
        state.stim -= 1000;
        state.streamerHype += 1;
        addStim(1500 + state.streamerHype * 250);
        render();
        rebuildWidgets();
      });
    } else if (type === "skywriter") {
      node.className = "skywriter";
      node.innerHTML = `${assetImg("airplane", "asset-plane", "plane")}<div class="banner">${SKYWRITER_ADS[state.skywriterAdIndex % SKYWRITER_ADS.length]}</div>`;
    } else if (type === "buttons") {
      node.className = "widget button-stack";
      node.innerHTML = `
        <button type="button">Like</button>
        <button type="button">Subscribe</button>
        <button type="button">Share</button>
        <button type="button">Skip Ad</button>
      `;
      node.querySelectorAll("button").forEach((button, index) => {
        button.addEventListener("click", () => {
          addStim(250 + index * 120);
          spawnTrail(430 + index * 18, 430);
          render();
        });
      });
    } else if (type === "pet") {
      node.className = "widget pet";
      node.innerHTML = `<h3>Paul</h3><div class="pet-body ${!state.petAlive ? "fainted" : ""} ${state.cosmetics.includes("fedora") ? "wearing-fedora" : ""}">${assetImg("chicken", "asset-paul", "Paul")}</div><div class="pet-hunger"><span style="width: ${Math.max(0, state.petHunger)}%"></span></div><button class="feed" type="button" ${state.petAlive ? "" : "disabled"}>feed</button>`;
      node.querySelector("button").addEventListener("click", () => {
        if (!state.petAlive) return;
        state.petHunger = 100;
        state.gems += 1;
        addStim(2500);
        unlockAchievement("Chicken Tendies");
        spawnKinderEgg();
        render();
        rebuildWidgets();
      });
    } else if (type === "chat") {
      node.className = "widget chat";
      node.innerHTML = `<h3>Twitch Chat</h3><div id="chatLines"></div>`;
    }
    return node;
  });
  el.widgetLayer.replaceChildren(...nodes);
  updateWidgetClasses();
}

function updateWidgetClasses() {
  const subway = el.widgetLayer.querySelector('[data-type="subway"]');
  if (subway) {
    subway.classList.toggle("fullscreen", !!state.flags.subwayFull);
    subway.classList.toggle("wormhole", !!state.flags.wormhole);
    subway.classList.toggle("unmuted", !!state.flags.subwaySound);
    const badge = subway.querySelector(".volume-badge");
    if (badge) badge.textContent = state.flags.subwaySound ? "VOL" : "MUTE";
    subway.style.filter = state.flags.wormhole ? "hue-rotate(180deg) saturate(2) blur(1px)" : "";
  }
  const press = el.widgetLayer.querySelector(".press-head");
  if (press) {
    const duration = Math.max(0.9, 4 / Math.pow(1.15, state.hydraulicSpeed));
    press.style.animationDuration = `${duration}s`;
  }
}

function spawnClickPop(x, y, amount, crit) {
  if (!state.flags.amount && !state.flags.popcorn && !crit) return;
  const count = state.flags.popcorn ? 8 : 1;
  for (let i = 0; i < count; i += 1) {
    const node = document.createElement("div");
    node.className = state.flags.popcorn ? "float-pop popcorn" : `float-pop ${crit ? "crit" : ""}`;
    node.textContent = state.flags.popcorn ? "" : `+${format(amount)}`;
    node.style.left = `${x + (Math.random() - 0.5) * 90}px`;
    node.style.top = `${y + (Math.random() - 0.5) * 50}px`;
    el.floatLayer.appendChild(node);
    window.setTimeout(() => node.remove(), 950);
  }
}

function spawnLoot() {
  if (!state.flags.loot || el.floatLayer.querySelector(".lootbox")) return;
  const rect = gameSize();
  const node = document.createElement("button");
  node.className = "lootbox";
  node.type = "button";
  node.innerHTML = `${assetImg("gift", "asset-loot", "loot")}<span>?</span>`;
  node.style.left = `${80 + Math.random() * Math.max(120, rect.w - 210)}px`;
  node.style.top = `${80 + Math.random() * Math.max(120, rect.h - 240)}px`;
  node.addEventListener("click", () => {
    const reward = 2500 + Math.random() * Math.max(1000, state.sps * 10);
    state.lootOpened += 1;
    addStim(reward);
    unlockAchievement("Loot Finder");
    node.remove();
    render();
    save();
  });
  el.floatLayer.appendChild(node);
  window.setTimeout(() => node.remove(), 5500);
}

function spawnPowerup() {
  if (!state.flags.powerups || el.floatLayer.querySelector(".powerup")) return;
  const rect = gameSize();
  const types = [
    { id: "serene", label: "OCEAN", className: "powerup-serene" },
    { id: "critical", label: "CRIT", className: "powerup-critical" },
    { id: "severe", label: "SEV", className: "powerup-severe" },
    { id: "dvd", label: "DVDx2", className: "powerup-dvd" },
    { id: "gem", label: "+1G", className: "powerup-gem" },
  ];
  const type = types[Math.floor(Math.random() * (state.flags.gems ? types.length : types.length - 1))];
  const node = document.createElement("button");
  node.className = `powerup ${type.className}`;
  node.type = "button";
  node.innerHTML = `${assetImg(type.id === "gem" ? "gem" : type.id === "dvd" ? "dvd" : type.id === "serene" ? "bubbles" : "voltage", "asset-powerup", type.label)}<span>${type.label}</span>`;
  node.style.left = `${90 + Math.random() * Math.max(120, rect.w - 210)}px`;
  node.style.top = `${90 + Math.random() * Math.max(120, rect.h - 240)}px`;
  const lootbox = el.floatLayer.querySelector(".lootbox");
  if (lootbox) {
    const lootTop = parseFloat(lootbox.style.top) || 90;
    const shiftedTop = lootTop + 76 < rect.h - 120 ? lootTop + 76 : Math.max(70, lootTop - 76);
    node.style.top = `${shiftedTop}px`;
  }
  node.addEventListener("click", () => {
    activatePowerup(type.id);
    node.remove();
    render();
    save();
  });
  el.floatLayer.appendChild(node);
  window.setTimeout(() => node.remove(), 5200);
}

function activatePowerup(type) {
  if (type === "critical") {
    state.flags.critical = true;
    state.powerModes.critical = 8;
    announce("Critical powerup");
  } else if (type === "severe") {
    state.powerModes.severe = 10;
    announce("Severe clicks");
  } else if (type === "dvd") {
    state.powerModes.dvd = 12;
    addStim(Math.max(1000, state.sps * 4));
    announce("DVD speed");
  } else if (type === "gem") {
    state.gems += 1;
    addStim(Math.max(1000, state.sps * 6));
  } else if (type === "serene") {
    state.powerModes.serene = 8;
    announce("Serene mode");
  }
  el.app.classList.toggle("serene-mode", state.powerModes.serene > 0 && !state.ended);
  requestSave();
}

function spawnAd() {
  if (!state.flags.skywriter && !state.flags.ui) return;
  const rect = gameSize();
  const node = document.createElement("button");
  node.className = "popup-ad";
  node.type = "button";
  node.innerHTML = `${assetImg("slot", "asset-ad", "ad")}<strong>CONGRATULATIONS</strong><span>You won more stimulation</span>`;
  node.style.left = `${60 + Math.random() * Math.max(120, rect.w - 300)}px`;
  node.style.top = `${70 + Math.random() * Math.max(120, rect.h - 270)}px`;
  node.addEventListener("click", () => {
    addStim(7777);
    node.remove();
    render();
  });
  el.floatLayer.appendChild(node);
  window.setTimeout(() => node.remove(), 6500);
}

function spawnNotification() {
  if (!state.flags.email && !state.flags.duo && !state.flags.gems) return;
  if (el.floatLayer.querySelector(".notification-bubble")) return;
  const rect = gameSize();
  const labels = ["1", "!", "99+", "new", "reply"];
  const icons = ["bell", "warning", "envelope", "replyMail", "moneyBag"];
  const index = Math.floor(Math.random() * labels.length);
  const node = document.createElement("button");
  node.className = "notification-bubble";
  node.type = "button";
  node.innerHTML = `${assetImg(icons[index], "asset-notification", labels[index])}<span>${labels[index]}</span>`;
  node.style.left = `${70 + Math.random() * Math.max(120, rect.w - 180)}px`;
  node.style.top = `${60 + Math.random() * Math.max(120, rect.h - 190)}px`;
  node.addEventListener("click", () => {
    addStim(900 + Math.random() * 1800);
    node.remove();
    render();
  });
  el.floatLayer.appendChild(node);
  window.setTimeout(() => node.remove(), 6000);
}

function spawnTrail(x, y) {
  if (!state.cosmetics.includes("slinky") && !state.flags.ui) return;
  const node = document.createElement("div");
  node.className = "cursor-trail";
  node.style.left = `${x}px`;
  node.style.top = `${y}px`;
  node.style.borderColor = randomColor();
  el.floatLayer.appendChild(node);
  window.setTimeout(() => node.remove(), 700);
}

function spawnMusicNote() {
  if (!state.widgets.includes("lofi")) return;
  const lofi = el.widgetLayer.querySelector('[data-type="lofi"]');
  const box = lofi?.getBoundingClientRect();
  if (!box) return;
  const node = document.createElement("div");
  node.className = "music-note";
  node.textContent = Math.random() > 0.5 ? "♪" : "♫";
  node.style.left = `${box.left + 30 + Math.random() * 140}px`;
  node.style.top = `${box.top + 30 + Math.random() * 60}px`;
  el.floatLayer.appendChild(node);
  window.setTimeout(() => node.remove(), 1400);
}

function cycleLofiTrack() {
  state.lofiTrack = (state.lofiTrack + 1) % LOFI_TRACKS.length;
  lofiTrackTimer = 0;
  const button = el.widgetLayer.querySelector('[data-type="lofi"] button');
  if (button) button.textContent = LOFI_TRACKS[state.lofiTrack];
}

function spawnKinderEgg() {
  if (!state.flags.pet || el.floatLayer.querySelector(".kinder-egg")) return;
  const rect = gameSize();
  const node = document.createElement("button");
  node.className = "kinder-egg";
  node.type = "button";
  node.innerHTML = `${assetImg("sparkles", "asset-kinder", "surprise")}<span>?</span>`;
  node.style.left = `${60 + Math.random() * Math.max(120, rect.w - 170)}px`;
  node.style.top = `${rect.h - 96}px`;
  node.addEventListener("click", () => {
    state.kinderEggs += 1;
    addStim(3200 + state.kinderEggs * 700);
    unlockAchievement("Kinder Surprise");
    node.remove();
    render();
  });
  el.floatLayer.appendChild(node);
  window.setTimeout(() => node.remove(), 9000);
}

function loop(now) {
  const dt = Math.min(0.08, (now - lastTime) / 1000);
  lastTime = now;
  step(dt);
  requestAnimationFrame(loop);
}

function step(dt) {
  if (state.ended) return;
  addStim(state.sps * dt);
  if (state.widgets.includes("subway")) {
    state.subwayTime += dt;
    if (state.subwayTime >= 600) unlockAchievement("Commuter");
  }
  if (state.flags.pet && state.petAlive) {
    state.petHunger = Math.max(0, state.petHunger - dt * 1.8);
    if (state.petHunger <= 0) state.petAlive = false;
  }
  decayPowerModes(dt);
  moveDvds(dt);
  runTimers(dt);
  renderPassive();
}

function moveDvds(dt) {
  if (!state.dvds.length) return;
  const speedBoost = state.powerModes.dvd > 0 ? 2 : 1;
  const nodes = el.dvdLayer.children;
  const rect = gameSize();
  const maxX = Math.max(30, rect.w - 100);
  const maxY = Math.max(30, rect.h - 68);
  state.dvds.forEach((dvd, index) => {
    dvd.x += dvd.vx * dt * state.dvdSpeed * speedBoost;
    dvd.y += dvd.vy * dt * state.dvdSpeed * speedBoost;
    let bouncedX = false;
    let bouncedY = false;
    if (dvd.x < 0 || dvd.x > maxX) {
      dvd.vx *= -1;
      dvd.x = Math.max(0, Math.min(maxX, dvd.x));
      bouncedX = true;
    }
    if (dvd.y < 36 || dvd.y > maxY) {
      dvd.vy *= -1;
      dvd.y = Math.max(36, Math.min(maxY, dvd.y));
      bouncedY = true;
    }
    if (bouncedX || bouncedY) {
      const corner = bouncedX && bouncedY;
      addStim(state.spb * (corner && state.flags.corners ? 10 : 1));
      if (corner) {
        state.cornerHits += 1;
        if (state.cornerHits >= 100) unlockAchievement("Corner Hunter");
        if (state.flags.narrator) announce("Corner Hit!");
      }
      if (state.flags.technicolor) dvd.color = randomColor();
      if (state.flags.dvdSound) {
        el.app.classList.add("screen-shake");
        playTone(corner ? 720 : 520, 0.04, "triangle", 0.025);
      }
      window.setTimeout(() => el.app.classList.remove("screen-shake"), 170);
    }
    const node = nodes[index];
    if (node) {
      node.style.color = dvd.color;
      node.style.transform = `translate(${dvd.x}px, ${dvd.y}px)`;
    }
  });
}

function decayPowerModes(dt) {
  Object.keys(state.powerModes).forEach((key) => {
    state.powerModes[key] = Math.max(0, state.powerModes[key] - dt);
  });
  el.app.classList.toggle("serene-mode", state.powerModes.serene > 0 && !state.ended);
}

function cycleSkywriterAd() {
  state.skywriterAdIndex = (state.skywriterAdIndex + 1) % SKYWRITER_ADS.length;
  const banner = el.widgetLayer.querySelector(".skywriter .banner");
  if (banner) banner.textContent = SKYWRITER_ADS[state.skywriterAdIndex];
}

function updateDuoTimer(dt) {
  if (!state.flags.duo || state.duoFailed || !DUO_QUESTIONS[state.duoIndex]) return;
  state.duoTimeLeft = Math.max(0, state.duoTimeLeft - dt);
  const duoNode = el.widgetLayer.querySelector('[data-type="duo"]');
  const timeNode = duoNode?.querySelector(".duo-time");
  const fillNode = duoNode?.querySelector(".duo-time-fill");
  if (timeNode) timeNode.textContent = `${Math.ceil(state.duoTimeLeft)}s`;
  if (fillNode) fillNode.style.width = `${Math.max(0, Math.min(100, (state.duoTimeLeft / 30) * 100))}%`;
  if (state.duoTimeLeft > 0) return;
  failDuoLesson("Time's up.");
}

function runTimers(dt) {
  updateDuoTimer(dt);
  lootTimer += dt;
  powerTimer += dt;
  stockTimer += dt;
  hydraulicTimer += dt;
  chatTimer += dt;
  newsTimer += dt;
  adTimer += dt;
  notificationTimer += dt;
  musicTimer += dt;
  passiveSaveTimer += dt;
  if (passiveSaveTimer > 5 && state.sps > 0) {
    passiveSaveTimer = 0;
    requestSave();
  }
  if (state.widgets.includes("lofi")) lofiTrackTimer += dt;
  if (lootTimer > 9) {
    lootTimer = 0;
    spawnLoot();
  }
  if (powerTimer > 12) {
    powerTimer = 0;
    spawnPowerup();
  }
  if (stockTimer > 2.2) {
    stockTimer = 0;
    updateStocks();
  }
  if (hydraulicTimer > hydraulicInterval() && state.flags.autoHydraulic) {
    hydraulicTimer = 0;
    triggerHydraulicSquish();
  }
  if (chatTimer > 1.3 && state.flags.chat) {
    chatTimer = 0;
    addChatLine();
  }
  if (newsTimer > 8 && state.flags.news) {
    newsTimer = 0;
    el.newsText.textContent = NEWS[Math.floor(Math.random() * NEWS.length)];
  }
  if (adTimer > 14) {
    adTimer = 0;
    if (state.flags.skywriter) cycleSkywriterAd();
    spawnAd();
  }
  if (notificationTimer > 7) {
    notificationTimer = 0;
    spawnNotification();
  }
  if (musicTimer > (state.flags.meditation2 ? 1.2 : 2.2)) {
    musicTimer = 0;
    spawnMusicNote();
  }
  if (lofiTrackTimer > 12 && state.widgets.includes("lofi")) {
    cycleLofiTrack();
  }
  if (state.flags.subwaySound && state.widgets.includes("subway") && Math.random() < dt * 0.7) {
    playTone(260 + Math.random() * 220, 0.025, "square", 0.012);
  }
  if (state.flags.pet) {
    const petNode = el.widgetLayer.querySelector('[data-type="pet"]');
    const hungerFill = petNode?.querySelector(".pet-hunger span");
    const petBody = petNode?.querySelector(".pet-body");
    const feedButton = petNode?.querySelector(".feed");
    if (hungerFill && petBody) {
      hungerFill.style.width = `${Math.max(0, state.petHunger)}%`;
      petBody.classList.toggle("fainted", !state.petAlive);
      if (feedButton) feedButton.disabled = !state.petAlive;
    }
  }
}

function hydraulicInterval() {
  const base = state.flags.autoHydraulic ? 3.5 : 7;
  return Math.max(0.85, base / Math.pow(1.15, state.hydraulicSpeed));
}

function triggerHydraulicSquish() {
  if (!state.flags.hydraulic) return;
  state.hydraulicPresses += 1;
  addStim(1000);
  const press = el.widgetLayer.querySelector('[data-type="hydraulic"]');
  press?.classList.add("squishing");
  const count = press?.querySelector("small");
  if (count) count.textContent = `${state.hydraulicPresses} squishes`;
  playTone(80, 0.07, "sawtooth", 0.08);
  window.setTimeout(() => press?.classList.remove("squishing"), 420);
}

function renderPassive() {
  el.stimCount.textContent = `${format(state.stim)} stimulation`;
  if (state.flags.sps) el.spsCount.textContent = `${format(state.sps)} stimulation/sec`;
}

function updateStocks() {
  if (!state.flags.stocks) return;
  if (state.flags.crypto) addCryptoStocks();
  STOCKS.forEach((stock) => {
    const swing = (Math.random() - 0.45) * (state.flags.leverage ? 18 : 9);
    stock.price = Math.max(1, stock.price + swing);
    if (swing > 0 && stock.shares > 0) {
      const gain = swing * stock.shares * (stock.crypto ? 22 : 8);
      state.stockGain += gain;
      if (stock.crypto) {
        state.cryptoGain += gain;
      } else {
        state.regularStockGain += gain;
      }
      addStim(gain);
    }
  });
  const stockNode = el.widgetLayer.querySelector('[data-type="stock"]');
  if (stockNode) {
    stockNode.innerHTML = stocksHtml();
    bindStockButtons(stockNode);
  }
  save();
}

function addCryptoStocks() {
  const btc = STOCKS.find((stock) => stock.symbol === "BTC");
  const doge = STOCKS.find((stock) => stock.symbol === "DOGE");
  if (btc) btc.crypto = true;
  if (doge) doge.crypto = true;
  if (!btc) STOCKS.push({ symbol: "BTC", price: 420, shares: 0, basis: 0, crypto: true });
  if (!doge) STOCKS.push({ symbol: "DOGE", price: 69, shares: 0, basis: 0, crypto: true });
}

function bindStockButtons(root) {
  root.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => tradeStock(Number(button.dataset.stock), button.dataset.action));
  });
}

function tradeStock(index, action) {
  const stock = STOCKS[index];
  if (!stock) return;
  let traded = false;
  if (action === "buy" && state.stim >= stock.price) {
    state.stim -= stock.price;
    stock.basis = ((stock.basis * stock.shares) + stock.price) / (stock.shares + 1);
    stock.shares += 1;
    traded = true;
  }
  if (action === "sell" && stock.shares > 0) {
    stock.shares -= 1;
    addStim(stock.price);
    traded = true;
    const result = stock.price - stock.basis;
    if (result >= 0) {
      state.stockProfit += result;
      unlockAchievement("Day Trader");
    } else {
      state.stockLoss += Math.abs(result);
      unlockAchievement("Gambler");
    }
  }
  checkAchievements();
  render();
  const stockNode = el.widgetLayer.querySelector('[data-type="stock"]');
  if (stockNode) {
    stockNode.innerHTML = stocksHtml();
    bindStockButtons(stockNode);
  }
  if (traded) save();
}

function duoHtml() {
  const question = DUO_QUESTIONS[state.duoIndex];
  if (!question || state.duoFailed) {
    return `
      <h3>${assetImg("owl", "asset-title", "owl")} Language Lesson</h3>
      <p>${state.duoFailed ? "The lesson is over." : "All lessons complete."}</p>
      <small>${state.duoCorrect} correct</small>
    `;
  }
  return `
    <h3>${assetImg("owl", "asset-title", "owl")} Language Lesson</h3>
    <div class="duo-timer">
      <span class="duo-time">${Math.ceil(state.duoTimeLeft)}s</span>
      <i class="duo-time-fill" style="width:${Math.max(0, Math.min(100, (state.duoTimeLeft / 30) * 100))}%"></i>
    </div>
    <p>${question.prompt}</p>
    <div class="duo-options">
      ${question.options.map((option) => `<button class="duo-answer" data-answer="${option}" type="button">${option}</button>`).join("")}
    </div>
    <small>${state.duoCorrect} correct</small>
  `;
}

function answerDuo(answer) {
  const question = DUO_QUESTIONS[state.duoIndex];
  if (!question || state.duoFailed) return;
  if (answer === question.answer) {
    state.duoCorrect += 1;
    addStim(1200 + state.duoCorrect * 250 + state.level * 50);
    if (state.duoCorrect >= 10) unlockAchievement("Owl Scholar");
  } else {
    failDuoLesson("Wrong answer.");
    return;
  }
  state.duoIndex += 1;
  state.duoTimeLeft = 30;
  if (!state.duoFailed && state.duoCorrect >= DUO_QUESTIONS.length) unlockAchievement("Polyglot");
  checkAchievements();
  const duoNode = el.widgetLayer.querySelector('[data-type="duo"]');
  if (duoNode) {
    duoNode.innerHTML = duoHtml();
    duoNode.querySelectorAll("button").forEach((button) => {
      button.addEventListener("click", () => answerDuo(button.dataset.answer));
    });
  }
  render();
  save();
}

function failDuoLesson(message) {
  state.duoFailed = true;
  state.duoTimeLeft = 0;
  addStim(100);
  announce(message);
  const duoNode = el.widgetLayer.querySelector('[data-type="duo"]');
  if (duoNode) {
    duoNode.innerHTML = duoHtml();
  }
  checkAchievements();
  render();
  save();
}

function replyEmail(index) {
  const email = EMAILS[index];
  if (!email || state.emailsReplied.includes(index)) return;
  state.emailsReplied.push(index);
  addStim(email.reward);
  if (index === 0) unlockAchievement("Good Grandchild");
  const mailNode = el.widgetLayer.querySelector('[data-type="mail"]');
  if (mailNode) {
    mailNode.innerHTML = inboxHtml();
    mailNode.querySelectorAll("button").forEach((button) => {
      button.addEventListener("click", () => replyEmail(Number(button.dataset.index)));
    });
  }
  render();
  save();
}

function canBuyCosmetic(item) {
  return !state.cosmetics.includes(item.id) && state.flags.shop && state.gems >= item.cost;
}

function buyCosmetic(id) {
  const item = COSMETICS.find((candidate) => candidate.id === id);
  if (!item || !canBuyCosmetic(item)) return;
  state.gems -= item.cost;
  state.cosmetics.push(id);
  unlockAchievement("Casual Shopper");
  if (id === "cursor") unlockAchievement("Cursor Collector");
  if (id === "fedora") unlockAchievement("M'Lady");
  checkAchievements();
  openInfo("Item Shop", shopHtml());
  bindShopButtons();
  render();
  save();
}

function addChatLine() {
  const lines = document.getElementById("chatLines");
  if (!lines) return;
  const node = document.createElement("div");
  const isDonation = Math.random() < 0.33;
  node.className = `chat-line ${isDonation ? "chat-donation" : ""}`;
  if (isDonation) {
    const amount = Math.round(500 + Math.random() * 1700);
    state.chatDonations += 1;
    state.chatDonationGain += amount;
    node.innerHTML = `<strong>donation</strong><span>+$${Math.ceil(amount / 100)}</span><em>thanks for the stimulation</em>`;
    addStim(amount);
    requestSave();
  } else {
    node.textContent = CHAT[Math.floor(Math.random() * CHAT.length)];
  }
  lines.appendChild(node);
  while (lines.children.length > 8) lines.firstChild.remove();
}

function openAchievements() {
  checkAchievements();
  const html = ACHIEVEMENTS.map((achievement, index) => (
    `<div class="achievement-row ${achievement.done() ? "is-unlocked" : ""}">
      <span class="achievement-number">${index + 1}</span>
      <span class="achievement-copy">
        <strong>${achievement.name}</strong>
        <small>${achievement.desc}</small>
      </span>
      <em>${achievement.done() ? "unlocked" : "locked"}</em>
    </div>`
  )).join("");
  openInfo("Achievements", html);
}

function checkAchievements() {
  if (state.clicks >= 100) unlockAchievement("Click Cadet");
  if (state.clicks >= 500) unlockAchievement("Click Corporal");
  if (state.clicks >= 1000) unlockAchievement("Click Commander");
  if (state.dvdCount >= 5) unlockAchievement("Disc Collector");
  if (state.bought.length >= 15) unlockAchievement("Fixer Upper");
  if (state.lifetime >= 100000) unlockAchievement("Procrastinator");
  if (state.lifetime >= 1000000) unlockAchievement("iPad Kid");
  if (!state.duoFailed && state.duoCorrect >= DUO_QUESTIONS.length) unlockAchievement("Polyglot");
  if (state.cornerHits >= 100) unlockAchievement("Corner Hunter");
  if (state.lootOpened >= 25) unlockAchievement("Loot Hoarder");
  if (state.regularStockGain >= 100000) unlockAchievement("Roaring Kitty");
  if (state.cosmetics.length >= COSMETICS.length) unlockAchievement("Shopaholic");
  if (state.cosmetics.length > 0) unlockAchievement("Casual Shopper");
  if (state.cosmetics.includes("cursor")) unlockAchievement("Cursor Collector");
  if (state.cosmetics.includes("fedora")) unlockAchievement("M'Lady");
  if (state.bought.includes("wormhole")) unlockAchievement("Tunnel Vision");
  if (state.bought.includes("subwayFull")) unlockAchievement("Tube Rider");
  if (state.bought.includes("achievements")) unlockAchievement("Achievements");
  if (state.bought.includes("screen")) unlockAchievement("Healthy Habits");
  if (state.bought.includes("duo")) unlockAchievement("Hoot Hoot");
  if (state.subwayTime >= 600) unlockAchievement("Commuter");
  if (state.stockProfit > 0) unlockAchievement("Day Trader");
  if (state.stockLoss > 0) unlockAchievement("Gambler");
  if (state.lootOpened > 0) unlockAchievement("Loot Finder");
  if (state.emailsReplied.includes(0)) unlockAchievement("Good Grandchild");
  if (state.kinderEggs > 0) unlockAchievement("Kinder Surprise");
  if (state.level >= 50) unlockAchievement("Maxed Out");
  if (state.level >= 25) unlockAchievement("Leveler");
  if (state.level >= 10) unlockAchievement("Level Up");
  if (isNightOwlTime()) unlockAchievement("Night Owl");
  if (hasDeckedOut()) unlockAchievement("Decked Out");
  if (state.achievements.length >= 15) unlockAchievement("Hunter");
  if (hasCompletionist()) unlockAchievement("Completionist");
}

function hasDeckedOut() {
  return UPGRADE_DEFS.every((upgrade) => (
    upgrade.repeat ||
    upgrade.id === "duo" ||
    upgrade.id === "ocean" ||
    state.bought.includes(upgrade.id)
  ));
}

function hasCompletionist() {
  return ACHIEVEMENT_NAMES.every((name) => (
    name === "Completionist" ||
    name === "Polyglot" ||
    state.achievements.includes(name)
  ));
}

function isNightOwlTime(date = new Date()) {
  const minutes = date.getHours() * 60 + date.getMinutes();
  return minutes >= 20 * 60 || minutes < 6 * 60 + 30;
}

function unlockAchievement(name) {
  if (state.achievements.includes(name)) return;
  state.achievements.push(name);
  showAchievementToast(name);
  if (state.flags.narrator) speak(`${name} unlocked.`);
  if (state.flags.achievements) addStim(250 + state.achievements.length * 100);
}

function showAchievementToast(name) {
  const node = document.createElement("div");
  node.className = "achievement-toast";
  node.innerHTML = `${assetImg("sparkles", "asset-toast", "achievement")}<strong>Achievement unlocked</strong><span>${name}</span>`;
  const stack = el.floatLayer.querySelectorAll(".achievement-toast").length;
  node.style.top = `${48 + stack * 86}px`;
  el.floatLayer.appendChild(node);
  window.setTimeout(() => node.remove(), 3200);
}

function openInfo(title, html) {
  el.modalTitle.textContent = title;
  el.modalBody.innerHTML = html;
  el.modal.classList.remove("hidden");
}

function closeModal() {
  el.modal.classList.add("hidden");
}

function screenTimeHtml() {
  const rows = screenTimeRows();
  const minutes = rows.reduce((sum, row) => sum + row.minutes, 0);
  return `
    <div class="screen-summary">
      <strong>${minutes} min</strong>
      <span>today</span>
    </div>
    <div class="screen-bars">
      ${rows.map((row) => `
        <label>
          <span>${row.name}</span>
          <em>${row.minutes}m</em>
          <div><i style="width:${row.percent}%"></i></div>
        </label>
      `).join("")}
    </div>
    <p>You have clicked ${format(state.clicks)} times and generated ${format(state.lifetime)} stimulation.</p>
    <p>Recommendation: absolutely do not buy more upgrades.</p>
  `;
}

function screenTimeRows() {
  const raw = [
    ["Clicking", Math.max(1, Math.round(state.clicks / 180))],
    ["Videos", Math.max(0, Math.round((state.subwayTime / 60) + (state.widgets.filter((name) => ["subway", "lofi", "slime", "mukbang", "streamer"].includes(name)).length * 3)))],
    ["Markets", state.flags.stocks ? Math.max(1, Math.round((state.regularStockGain + state.cryptoGain) / 50000)) : 0],
    ["Notifications", Math.max(0, state.emailsReplied.length + state.duoCorrect + state.lootOpened + state.kinderEggs)],
    ["Upgrades", Math.max(1, Math.round(state.bought.length * 0.4))],
  ];
  const totalMinutes = raw.reduce((sum, [, minutes]) => sum + minutes, 0);
  return raw.map(([name, minutes]) => ({
    name,
    minutes,
    percent: Math.max(6, Math.min(100, Math.round((minutes / totalMinutes) * 100))),
  }));
}

function shopHtml() {
  return `
    ${COSMETICS.map((item) => `
      <div class="shop-row">
        <span>${assetImg(item.icon, "asset-shop", item.name)} ${item.name}</span>
        <button data-cosmetic="${item.id}" ${!canBuyCosmetic(item) ? "disabled" : ""} type="button">
          ${state.cosmetics.includes(item.id) ? "owned" : item.cost ? `${item.cost} gems` : "free"}
        </button>
      </div>
    `).join("")}
    <p>Gems: ${state.gems}</p>
  `;
}

function bindShopButtons() {
  el.modalBody.querySelectorAll("[data-cosmetic]").forEach((button) => {
    button.addEventListener("click", () => buyCosmetic(button.dataset.cosmetic));
  });
}

function stocksHtml() {
  return `
    <h3>${assetImg("chart", "asset-title", "chart")} Stock Market</h3>
    ${STOCKS.map((stock, index) => `
      <div class="ticker">
        <span>${stock.symbol}</span>
        <strong>${stock.price.toFixed(2)}</strong>
        <small>${stock.shares} owned</small>
        <button data-stock="${index}" data-action="buy" ${state.stim < stock.price ? "disabled" : ""} type="button">Buy</button>
        <button data-stock="${index}" data-action="sell" ${stock.shares <= 0 ? "disabled" : ""} type="button">Sell</button>
      </div>
    `).join("")}
    <p>Stock gains: ${format(state.regularStockGain)}</p>
    <p>Crypto gains: ${format(state.cryptoGain)}</p>
  `;
}

function inboxHtml() {
  const emails = inboxEmails();
  return `
    <h3>${assetImg("envelope", "asset-title", "mail")} Inbox</h3>
    ${emails.map(({ email, index }) => `
      <div class="email-row ${state.emailsReplied.includes(index) ? "is-replied" : "is-unread"}">
        <p><strong>${email.from}:</strong> ${email.subject}</p>
        <small>${email.body}</small>
        <button data-index="${index}" ${state.emailsReplied.includes(index) ? "disabled" : ""} type="button">
          ${state.emailsReplied.includes(index) ? "replied" : "reply"}
        </button>
      </div>
    `).join("")}
  `;
}

function visibleEmails() {
  return EMAILS
    .map((email, index) => ({ email, index }))
    .filter(({ email }) => email.requires === undefined || state.emailsReplied.includes(email.requires));
}

function inboxEmails() {
  return visibleEmails().sort((a, b) => {
    const aReplied = state.emailsReplied.includes(a.index);
    const bReplied = state.emailsReplied.includes(b.index);
    if (aReplied !== bReplied) return aReplied ? 1 : -1;
    return b.index - a.index;
  });
}

function endGame() {
  state.ended = true;
  closeModal();
  clearStimulusLayers();
  el.app.classList.add("ended");
  el.ocean.classList.remove("hidden");
  playTone(196, 0.6, "sine", 0.035);
  window.setTimeout(() => playTone(247, 0.7, "sine", 0.025), 220);
  save();
}

function clearStimulusLayers() {
  el.dvdLayer.replaceChildren();
  el.floatLayer.replaceChildren();
  el.widgetLayer.replaceChildren();
}

function resetGame() {
  state = freshState();
  STOCKS = freshStocks();
  localStorage.removeItem(SAVE_KEY);
  document.title = "stimulation";
  setFavicon("");
  el.ocean.classList.add("hidden");
  el.app.classList.remove("ended");
  closeModal();
  clearStimulusLayers();
  rebuildAll();
}

function rebuildAll() {
  el.app.classList.toggle("ended", !!state.ended);
  el.ocean.classList.toggle("hidden", !state.ended);
  el.newsText.textContent = NEWS[0];
  if (state.ended) {
    clearStimulusLayers();
  } else {
    rebuildWidgets();
    renderDvds();
  }
  render();
}

function save() {
  if (saveTimeout) {
    window.clearTimeout(saveTimeout);
    saveTimeout = 0;
  }
  localStorage.removeItem(SAVE_KEY);
}

function requestSave() {
  save();
}

function load() {
  localStorage.removeItem(SAVE_KEY);
}

function restoreStocks(savedStocks, hasCrypto) {
  const stocks = freshStocks();
  if (hasCrypto) {
    stocks.push({ symbol: "BTC", price: 420, shares: 0, basis: 0, crypto: true });
    stocks.push({ symbol: "DOGE", price: 69, shares: 0, basis: 0, crypto: true });
  }
  if (!Array.isArray(savedStocks)) return stocks;
  savedStocks.forEach((savedStock) => {
    const stock = stocks.find((item) => item.symbol === savedStock.symbol);
    if (!stock) return;
    stock.price = Number.isFinite(savedStock.price) ? savedStock.price : stock.price;
    stock.shares = Number.isFinite(savedStock.shares) ? savedStock.shares : stock.shares;
    stock.basis = Number.isFinite(savedStock.basis) ? savedStock.basis : stock.basis;
    stock.crypto = !!savedStock.crypto;
  });
  return stocks;
}

function format(value) {
  const num = Math.max(0, value);
  if (num < 1000) return Math.floor(num).toString();
  if (num < 1000000) return `${trim(num / 1000)}K`;
  if (num < 1000000000) return `${trim(num / 1000000)}M`;
  return `${trim(num / 1000000000)}B`;
}

function trim(value) {
  return value.toFixed(value >= 100 ? 0 : value >= 10 ? 1 : 2).replace(/\.0+$|(\.\d*[1-9])0+$/, "$1");
}

function randomColor() {
  const colors = ["#6b47ff", "#ff3e63", "#00a651", "#00a0ff", "#ff9d00", "#cf38ff"];
  return colors[Math.floor(Math.random() * colors.length)];
}

function setFavicon(label) {
  const link = document.querySelector('link[rel="icon"]');
  if (!link || !label) {
    if (link) link.href = "data:,";
    return;
  }
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="12" fill="%23ffe86c"/><text x="32" y="44" text-anchor="middle" font-size="42" font-family="Arial" font-weight="700" fill="%23171717">${label}</text></svg>`;
  link.href = `data:image/svg+xml,${svg}`;
}

function primeSound() {
  if (soundReady) return;
  const Ctx = window.AudioContext || window.webkitAudioContext;
  if (!Ctx) return;
  audioContext = new Ctx();
  soundReady = true;
}

function playTone(frequency, duration, type = "sine", gain = 0.025) {
  if (!audioContext || audioContext.state === "suspended") return;
  const oscillator = audioContext.createOscillator();
  const volume = audioContext.createGain();
  oscillator.type = type;
  oscillator.frequency.value = frequency;
  volume.gain.value = gain;
  oscillator.connect(volume);
  volume.connect(audioContext.destination);
  oscillator.start();
  volume.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + duration);
  oscillator.stop(audioContext.currentTime + duration);
}

function announce(text) {
  const rect = gameSize();
  const node = document.createElement("div");
  node.className = "float-pop crit";
  node.textContent = text;
  node.style.left = `${rect.w / 2 - 90}px`;
  node.style.top = "120px";
  el.floatLayer.appendChild(node);
  if (state.flags.narrator) speak(text);
  window.setTimeout(() => node.remove(), 1000);
}

function speak(text) {
  if (!("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 1.1;
  utterance.pitch = 1;
  utterance.volume = 0.8;
  window.speechSynthesis.speak(utterance);
}

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen?.();
  } else {
    document.exitFullscreen?.();
  }
}

window.advanceTime = (ms) => {
  const steps = Math.max(1, Math.round(ms / (1000 / 60)));
  for (let i = 0; i < steps; i += 1) step(1 / 60);
  render();
};

window.render_game_to_text = () => JSON.stringify({
  coordinateSystem: "DOM viewport pixels, origin top-left, x right, y down",
  stimulation: Math.floor(state.stim),
  lifetime: Math.floor(state.lifetime),
  clicks: state.clicks,
  sps: state.sps,
  perClick: state.perClick,
  visibleUpgrades: getVisibleUpgrades().map((upgrade) => ({
    id: upgrade.id,
    name: upgrade.name,
    cost: getCost(upgrade),
    affordable: state.stim >= getCost(upgrade),
  })),
  activeWidgets: state.widgets,
  dvdCount: state.dvdCount,
  hydraulicSpeed: state.hydraulicSpeed,
  hydraulicPresses: state.hydraulicPresses,
  achievementsUnlocked: state.achievements.length,
  achievementNames: state.achievements,
  duoCorrect: state.duoCorrect,
  duoFailed: state.duoFailed,
  duoTimeLeft: Number(state.duoTimeLeft.toFixed(2)),
  emailsReplied: state.emailsReplied.length,
  visibleEmailSubjects: visibleEmails().map(({ email }) => email.subject),
  cosmetics: state.cosmetics,
  lootOpened: state.lootOpened,
  stockGain: Math.floor(state.stockGain),
  regularStockGain: Math.floor(state.regularStockGain),
  cryptoGain: Math.floor(state.cryptoGain),
  stockHoldings: STOCKS.map((stock) => ({
    symbol: stock.symbol,
    shares: stock.shares,
    price: Number(stock.price.toFixed(2)),
    crypto: !!stock.crypto,
  })),
  gems: state.gems,
  powerModes: {
    critical: Number(state.powerModes.critical.toFixed(2)),
    severe: Number(state.powerModes.severe.toFixed(2)),
    dvd: Number(state.powerModes.dvd.toFixed(2)),
    serene: Number(state.powerModes.serene.toFixed(2)),
  },
  petHunger: Math.floor(state.petHunger),
  petAlive: state.petAlive,
  fitnessReps: state.fitnessReps,
  streamerHype: state.streamerHype,
  chatDonations: state.chatDonations,
  chatDonationGain: Math.floor(state.chatDonationGain),
  lofiTrackIndex: state.lofiTrack,
  lofiTrack: LOFI_TRACKS[state.lofiTrack % LOFI_TRACKS.length],
  kinderEggs: state.kinderEggs,
  subwayTime: Math.floor(state.subwayTime),
  cornerHits: state.cornerHits,
  skywriterAd: SKYWRITER_ADS[state.skywriterAdIndex % SKYWRITER_ADS.length],
  newsHeadline: el.newsText.textContent,
  crypto: state.flags.crypto,
  ended: state.ended,
});
