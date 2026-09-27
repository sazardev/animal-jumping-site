/* Animal Jumping - site. Everything listed here comes from the game's own data
   (assets/data/game.json, exported from src/data) and real captures. */

const COLORS = ['#FF6B35', '#FCD34D', '#38BDF8', '#FFB5C2', '#2DD4BF', '#A78BFA'];

const MODES = {
  race: { emoji: '🏁', c: '#FF6B35', d: '#D94F1E', clip: 'candy-peak', es: ['Carreras', 'Llega a la meta entre los primeros: barras, puertas, resortes y plataformas.'], en: ['Races', 'Reach the goal among the first: bars, doors, springs and moving platforms.'] },
  survival: { emoji: '🌋', c: '#14A898', d: '#0D7F73', clip: 'hex-tumble', es: ['Supervivencia', 'Aguanta de pie mientras el suelo cae, la lava sube o las paredes barren.'], en: ['Survival', 'Stay standing while tiles fall, lava rises or walls sweep.'] },
  memory: { emoji: '🧠', c: '#8B5CF6', d: '#6B3FDC', clip: 'perfect-match', es: ['Memoria', 'Memoriza el tablero y párate en el lugar correcto antes de que caiga.'], en: ['Memory', 'Memorise the board and stand in the right place before it drops.'] },
  collect: { emoji: '🪙', c: '#E0AA12', d: '#B48507', clip: null, es: ['Monedas', 'Junta más monedas que nadie antes de que suene la bocina.'], en: ['Coins', 'Grab more coins than anyone before the buzzer.'] },
  paint: { emoji: '🎨', c: '#F08AA0', d: '#D4677F', clip: 'doodle-derby', es: ['Pintura', 'Pinta el suelo de tu color y traza el dibujo dorado para puntos extra.'], en: ['Paint', 'Paint the floor your colour and trace the gold doodle for extra points.'] },
  zone: { emoji: '👑', c: '#0F95D1', d: '#0B76A6', clip: 'crown-clash', es: ['Rey de la colina', 'Quédate en la zona de la corona para sumar puntos. ¡Se mueve!'], en: ['King of the hill', 'Stay in the crown zone to score. It moves!'] },
  tag: { emoji: '💣', c: '#D94F1E', d: '#A93A12', clip: 'bomb-bash', es: ['Bomba', '¿Tienes la bomba? Pásala antes de que explote.'], en: ['Bomb tag', 'Holding the bomb? Pass it before it blows.'] }
};

const SHOTS = new Set(['candy-peak', 'door-dash', 'hex-tumble', 'bomb-bash', 'doodle-derby', 'lava-rising', 'perfect-match', 'tip-toe-trail', 'speedway', 'crown-clash', 'sweeper-showdown', 'hedge-maze']);

const TAGLINES_ES = {
  'paw-academy': 'Un curso de práctica: camina, salta, corre, trepa y esquiva. Sin prisa.',
  'candy-peak': 'Seis tramos, cinco checkpoints y una cima de caramelo. ¡Corre a la cima!',
  'tumble-tower': 'Encuentra el agujero de cada piso y déjate caer hasta abajo.',
  speedway: 'Carrera en la pista de playa. Usa los turbos: solo la mitad clasifica.',
  'hex-tumble': 'Las baldosas desaparecen bajo tus pies. Muévete y baja de piso en piso.',
  'perfect-match': 'Memoriza los símbolos y párate en el que muestra el cartel antes de caer.',
  'sweeper-showdown': 'Dos barras giran cada vez más rápido y el hielo se encoge. Aguanta 60 s.',
  'coin-frenzy': 'Junta 25 monedas en 60 segundos. Reaparecen; resortes y rebotadores ayudan.',
  'hedge-maze': 'Dos laberintos y una plaza de barredoras en medio. Rompe los cofres.',
  'door-dash': 'Unas puertas se abren, otras te rebotan. Elige rápido.',
  'doodle-derby': 'Corre sobre el suelo para pintarlo de tu color. Traza el dibujo dorado.',
  'tip-toe-trail': 'Solo un camino oculto de baldosas es real. Mira quién cae.',
  'crown-clash': 'Párate en la zona de la corona. Salta cada 10 s: primero a 30 gana.',
  'bomb-bash': '¿Tienes una bomba? Pásala antes de que explote. Tres mechas.',
  'lava-rising': '¡La lava sube! Salta por la escalera en espiral y aguanta en la cima.',
  'wall-rush': 'Las paredes barren la plataforma: cuélate por los huecos o te empujan.',
  'midnight-match': 'Perfect Match de noche: tablero más grande, seis rondas y casi sin tiempo.',
  'candy-factory': 'Junta 30 monedas de las cintas, los giradores y la torre de caramelo.',
  gauntlet: 'Seis estaciones de obstáculos seguidas: puertas, bolas de demolición y más.',
  'color-rush': 'Párate en el color que DICE el cartel, no en el color en que está escrito.',
  'hop-skip': 'Sin suelo, solo piedras: salta a lo largo de tres tramos.',
  'potato-party': 'Arena diminuta, cintas alrededor y bombas para casi media sala.',
  'splat-arena': 'Un lienzo más grande, dos barredoras y dos dibujos dorados.',
  'jump-club': 'Salta la barra giratoria cada vez que pase: cada vez más rápido.',
  'odd-one-out': 'Recuerda el tablero y párate donde el símbolo NO estaba.',
  'spike-sprint': 'Un pasillo de pinchos que salen del suelo. Lee el ritmo y corre.',
  'crown-tower': 'La corona salta entre tres torres y el suelo cada 8 s. Trepa y baja.',
  'sumo-smash': 'Rebotadores por todas partes y el ring se encoge. Empuja y sobrevive.',
  'tip-toe-towers': 'Tres rejillas de camino oculto, cada una más difícil.',
  'door-dash-deluxe': 'Siete filas de puertas de la suerte, hasta una puerta real de tres.'
};

const ABILITIES = {
  allRounder: ['Todoterreno', 'All-rounder'],
  springy: ['Saltarín', 'Springy'],
  floaty: ['Planeador', 'Floaty'],
  quickRecover: ['Se recupera rápido', 'Quick recovery'],
  grippy: ['Agarre', 'Grippy'],
  shover: ['Empujón', 'Shover'],
  forgiving: ['Tolerante', 'Forgiving'],
  juggernaut: ['Imparable', 'Juggernaut'],
  sprinter: ['Velocista', 'Sprinter'],
  sturdy: ['Firme', 'Sturdy'],
  magnet: ['Imán de monedas', 'Coin magnet'],
  lucky: ['Suertudo', 'Lucky']
};

const RARITY = {
  starter: ['Inicial', 'Starter'],
  common: ['Común', 'Common'],
  rare: ['Raro', 'Rare'],
  epic: ['Épico', 'Epic'],
  legendary: ['Legendario', 'Legendary']
};

const VIDEOS = [
  ['lobby', 'lobby', ['Lobby, animales y tienda', 'Lobby, animals and shop']],
  ['candy-peak', 'candy-peak-4', ['Candy Peak Rush · carrera', 'Candy Peak Rush · race']],
  ['door-dash', 'door-dash-4', ['Door Dash · puertas de la suerte', 'Door Dash · lucky doors']],
  ['hex-tumble', 'hex-tumble-4', ['Hex Tumble · supervivencia', 'Hex Tumble · survival']],
  ['bomb-bash', 'bomb-bash-4', ['Bomb Bash · bomba', 'Bomb Bash · bomb tag']],
  ['doodle-derby', 'doodle-derby-4', ['Doodle Derby · pintura', 'Doodle Derby · paint']],
  ['lava-rising', 'lava-rising-4', ['Lava Rising · lava que sube', 'Lava Rising · rising lava']],
  ['perfect-match', 'perfect-match-4', ['Perfect Match · memoria', 'Perfect Match · memory']],
  ['tip-toe-trail', 'tip-toe-trail-4', ['Tip Toe Trail · camino oculto', 'Tip Toe Trail · hidden path']],
  ['speedway', 'speedway-4', ['Speedway Scramble · turbos', 'Speedway Scramble · boost pads']],
  ['crown-clash', 'crown-clash-4', ['Crown Clash · rey de la colina', 'Crown Clash · king of the hill']],
  ['sweeper-showdown', 'sweeper-showdown-4', ['Sweeper Showdown · barredoras', 'Sweeper Showdown · sweepers']],
  ['hedge-maze', 'hedge-maze-4', ['Hedge Maze · laberinto', 'Hedge Maze · maze race']],
  ['results', 'results-1', ['Resultados, ceremonia y logros', 'Results, ceremony and achievements']]
];

const ROADMAP = [
  {
    cls: 'p-done',
    es: ['Hecho', 'El juego'],
    en: ['Done', 'The game'],
    items: [
      ['29 rondas + tutorial Paw Academy, 7 modos', '29 rounds + the Paw Academy tutorial, 7 modes'],
      ['24 animales con rasgos y habilidades', '24 animals with traits and abilities'],
      ['Bots fácil / medio / difícil que corren, empujan y recuerdan', 'Easy / medium / hard bots that race, shove and remember'],
      ['Tienda: sombreros, bailes, entradas, estelas, potenciadores, mejoras', 'Shop: hats, emotes, entrances, trails, boosts, upgrades'],
      ['Controles táctiles personalizables y mandos', 'Customisable touch controls and gamepads'],
      ['Calidad y frame rate automáticos', 'Automatic quality and frame rate']
    ]
  },
  {
    cls: 'p-done',
    es: ['Hecho', 'Jugar juntos'],
    en: ['Done', 'Playing together'],
    items: [
      ['Salas en línea P2P, anfitrión autoritativo y antitrampas', 'Online P2P rooms, host-authoritative, anti-cheat'],
      ['Salas en la misma Wi-Fi sin internet', 'Same Wi-Fi rooms, no internet needed'],
      ['Invitaciones por enlace y QR', 'Invites by link and QR'],
      ['Cuentas de Google con guardado en la nube', 'Google accounts with cloud saves'],
      ['Perfil, 20 logros, estadísticas', 'Profile, 20 achievements, stats'],
      ['Salas públicas / de amigos / privadas, expulsar, banear, bloquear', 'Public / friends / private rooms, kick, ban, block'],
      ['Amigos, presencia e invitaciones', 'Friends, presence and invites'],
      ['La sala sobrevive a su anfitrión', 'Rooms survive their host']
    ]
  },
  {
    cls: 'p-now',
    es: ['Ahora', 'Rumbo al lanzamiento'],
    en: ['Now', 'Road to launch'],
    items: [
      ['APK de prueba para Android con herramientas de desarrollador', 'Android test APK with developer tools'],
      ['Pruebas en teléfonos y redes reales', 'Testing on real phones and networks'],
      ['Servicio en línea en producción (Firebase)', 'Online service in production (Firebase)'],
      ['Prueba cerrada en Google Play', 'Google Play closed test']
    ]
  },
  {
    cls: 'p-next',
    es: ['Próximo', 'Más fiesta'],
    en: ['Next', 'More party'],
    items: [
      ['Partida rápida: entra a la sala pública más llena', 'Quick play: join the fullest public room'],
      ['Volver a una ronda en curso tras una desconexión', 'Rejoin a running round after a drop'],
      ['Reportar jugadores', 'Report players'],
      ['Versión web jugable y escritorio descargable', 'Playable web version and desktop downloads']
    ]
  },
  {
    cls: 'p-later',
    es: ['Después', 'Soñando en grande'],
    en: ['Later', 'Dreaming big'],
    items: [
      ['iOS', 'iOS'],
      ['Nuevas rondas y animales por temporada', 'New rounds and animals every season'],
      ['Eventos y desafíos semanales', 'Weekly events and challenges'],
      ['Torneos entre amigos', 'Tournaments between friends']
    ]
  }
];

const I18N_EN = {
  'nav.modes': 'Modes',
  'nav.rounds': 'Rounds',
  'nav.animals': 'Animals',
  'nav.videos': 'Videos',
  'nav.roadmap': 'Roadmap',
  'hero.kicker': '3D party royale · Android · PC · Web',
  'hero.lede': 'Pick your animal, join a lobby of up to 25 and survive round after round of wild races, vanishing floors, bombs and rising lava. Only the best qualify. Will you take the crown?',
  'hero.watch': '▶ Watch gameplay',
  'hero.roadmap': 'See the roadmap',
  'hero.note': 'Everything here is the real game: screenshots and video recorded in play.',
  'stats.rounds': 'rounds',
  'stats.modes': 'modes',
  'stats.animals': 'animals',
  'stats.players': 'per lobby',
  'stats.achievements': 'achievements',
  'stats.ads': 'ads',
  'what.title': 'What is Animal Jumping?',
  'what.p1.t': 'Short, wild rounds',
  'what.p1.d': '1-2 minutes a round: race, dodge, shove, remember, paint or pass the bomb. Every round is different and there is always a rematch.',
  'what.p2.t': 'Animals with personality',
  'what.p2.d': 'Heavy ones shrug off shoves, light ones float further, fast ones win races. Each has its own ability.',
  'what.p3.t': 'Always a game on',
  'what.p3.d': 'Bots that race, shove, dodge and remember fill the lobby instantly: easy, medium or hard. Or play with friends online.',
  'what.p4.t': 'Fair and friendly',
  'what.p4.d': 'No ads, no purchases. Everything is earned by playing. Plays offline and runs on modest phones.',
  'modes.title': '7 party modes',
  'modes.lede': 'Hover (or tap) to see them in action.',
  'rounds.title': '30 rounds',
  'videos.title': 'Real gameplay',
  'videos.lede': 'Recorded in the game, no editing tricks: 16 animals a lobby, medium bots.',
  'animals.title': '24 animals, each one different',
  'features.title': 'Everything inside',
  'f.online.t': 'Online rooms',
  'f.online.d': 'Host a room and share the code, a link or a QR. Public, friends-only or private rooms, even on the same Wi-Fi without internet. If the host leaves, the room goes on.',
  'f.friends.t': 'Friends',
  'f.friends.d': "Friend codes, who's online and in which room, and invites that pop up instantly. Kick, ban and block so nobody ruins the party.",
  'f.profile.t': 'Profile and 20 achievements',
  'f.profile.d': 'Your name, your stats and 20 achievements that pay coins: first win, streaks, the full zoo...',
  'f.shop.t': 'Style shop',
  'f.shop.d': '10 hats, 8 victory emotes, 7 entrances, 7 trails, 5 boosts and 4 upgrades. All with in-game coins.',
  'f.cloud.t': 'Your progress anywhere',
  'f.cloud.d': 'Play as a guest on your device, or sign in with Google and take coins, animals and achievements to your phone, PC and browser.',
  'f.platforms.t': 'Wherever you play',
  'f.platforms.d': 'Android (touch and controller), Windows, macOS, Linux and the browser. Touch controls you arrange your way, and Bluetooth / USB controllers.',
  'road.title': 'Roadmap',
  'road.lede': "What's done, what's next and what we dream of.",
  'tech.title': 'Behind the scenes',
  'tech.stack.t': 'Made with',
  'tech.qa.t': 'Tested hard',
  'tech.qa.1': 'All 29 rounds played start to finish against 12 bots',
  'tech.qa.2': '6-player rooms with identical standings on every machine',
  'tech.qa.3': 'Speed hacks, impersonation and floods: kicked',
  'tech.qa.4': 'An online room costs under a cent an hour',
  'tech.fair.t': 'Made for you',
  'tech.fair.1': 'No ads, no purchases, no tracking',
  'tech.fair.2': 'Automatic quality: smooth on modest phones',
  'tech.fair.3': 'A 2-minute tutorial: Paw Academy',
  'tech.fair.4': '3D models by Kenney (CC0)',
  'faq.title': 'Questions',
  'faq.q1': 'When is it out?',
  'faq.a1': "It's in testing. The Android version comes to Google Play after the closed test - see the roadmap for where it stands.",
  'faq.q2': 'Is it free? Any purchases?',
  'faq.a2': 'No ads and no in-app purchases. Everything unlocks by playing.',
  'faq.q3': 'Do I need internet?',
  'faq.a3': 'No: against bots it plays offline, and same Wi-Fi rooms need no internet. Internet rooms and cloud saves are optional.',
  'faq.q4': 'Can I play with my friends?',
  'faq.a4': 'Yes: host a room and share the code, link or QR, or invite them from your friends list. Up to 25 animals a lobby; bots fill the gaps.',
  'faq.q5': 'Is it kid-friendly?',
  'faq.a5': 'Yes: cartoon bumps and falls only, no chat, no ads, no purchases.',
  'footer.line': 'Grab your favourite animal and start jumping!',
  'footer.credits': 'Animal Jumping · 3D models by Kenney (CC0) · Made with love and lots of jumps.'
};

const I18N_ES = {};
let lang = 'es';
try {
  lang = localStorage.getItem('aj-site-lang') === 'en' ? 'en' : 'es';
} catch {
  lang = 'es';
}
const L = (pair) => (lang === 'en' ? pair[1] : pair[0]);

/* --- the title's letters: game-logo colours, staggered bounce --- */
document.querySelectorAll('.title b').forEach((b, i) => {
  b.style.setProperty('--c', COLORS[i % COLORS.length]);
  b.style.setProperty('--i', i);
  b.style.setProperty('--r', `${i % 2 ? -3 : 3}deg`);
});

function reveal(el, delay = 0) {
  el.classList.add('reveal');
  el.style.setProperty('--d', `${delay}s`);
  observer.observe(el);
}

const observer = new IntersectionObserver(
  (entries) => {
    for (const e of entries) {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        observer.unobserve(e.target);
      }
    }
  },
  { threshold: 0.12 }
);

/* a clip plays only while hovered / touched, and loads only then */
function hoverVideo(card, src) {
  if (!src) return;
  let video = null;
  const start = () => {
    if (!video) {
      video = document.createElement('video');
      video.muted = true;
      video.loop = true;
      video.playsInline = true;
      video.preload = 'none';
      video.src = src;
      card.prepend(video);
    }
    card.classList.add('playing');
    video.play().catch(() => {});
  };
  const stop = () => {
    card.classList.remove('playing');
    video?.pause();
  };
  card.addEventListener('mouseenter', start);
  card.addEventListener('mouseleave', stop);
  card.addEventListener('touchstart', start, { passive: true });
}

let data = null;
let filter = 'all';

function renderModes() {
  const counts = {};
  for (const l of data.levels) counts[l.mode] = (counts[l.mode] ?? 0) + 1;
  const grid = document.getElementById('modes');
  grid.innerHTML = '';
  Object.entries(MODES).forEach(([id, m], i) => {
    const el = document.createElement('article');
    el.className = 'mode';
    el.style.setProperty('--mc', m.c);
    el.style.setProperty('--md', m.d);
    const [name, desc] = L([m.es, m.en]);
    el.innerHTML = `<span class="count">${counts[id] ?? 0} ${lang === 'en' ? 'rounds' : 'rondas'}</span><div class="mode-emoji">${m.emoji}</div><h3>${name}</h3><p>${desc}</p>`;
    hoverVideo(el, m.clip ? `assets/video/${m.clip}.mp4` : null);
    grid.append(el);
    reveal(el, i * 0.06);
  });
}

function renderFilters() {
  const bar = document.getElementById('filters');
  bar.innerHTML = '';
  const options = [['all', lang === 'en' ? 'All' : 'Todas'], ...Object.entries(MODES).map(([id, m]) => [id, `${m.emoji} ${L([m.es, m.en])[0]}`])];
  for (const [id, label] of options) {
    const b = document.createElement('button');
    b.type = 'button';
    b.role = 'tab';
    b.textContent = label;
    b.setAttribute('aria-selected', String(filter === id));
    b.addEventListener('click', () => {
      filter = id;
      renderFilters();
      renderRounds();
    });
    bar.append(b);
  }
}

function renderRounds() {
  const grid = document.getElementById('rounds');
  grid.innerHTML = '';
  data.levels
    .filter((l) => filter === 'all' || l.mode === filter)
    .forEach((l, i) => {
      const m = MODES[l.mode];
      const el = document.createElement('article');
      el.className = 'round';
      el.style.setProperty('--mc', m.c);
      el.style.setProperty('--md', m.d);
      const thumb = SHOTS.has(l.id)
        ? `<img loading="lazy" src="assets/img/${l.id}-9.webp" alt="${l.name}" />`
        : `<span aria-hidden="true">${m.emoji}</span>`;
      const tag = l.tutorial ? (lang === 'en' ? 'Tutorial' : 'Tutorial') : L([m.es, m.en])[0];
      const tagline = lang === 'en' ? l.tagline : (TAGLINES_ES[l.id] ?? l.tagline);
      el.innerHTML = `<div class="round-thumb">${thumb}<span class="round-tag">${tag}</span></div><div class="round-body"><h3>${l.name}</h3><p>${tagline}</p></div>`;
      if (SHOTS.has(l.id)) {
        el.querySelector('.round-thumb').addEventListener('click', () => openVideo(`assets/video/${l.id}.mp4`, l.name));
        el.style.cursor = 'pointer';
      }
      grid.append(el);
      reveal(el, (i % 8) * 0.04);
    });
}

function renderVideos() {
  const grid = document.getElementById('videoGrid');
  grid.innerHTML = '';
  VIDEOS.forEach(([clip, poster, label], i) => {
    const el = document.createElement('button');
    el.type = 'button';
    el.className = 'vid';
    el.innerHTML = `<img loading="lazy" src="assets/img/${poster}.webp" alt="" /><span class="vid-label">${L(label)}</span><span class="vid-play" aria-hidden="true">▶</span>`;
    el.setAttribute('aria-label', L(label));
    hoverVideo(el, `assets/video/${clip}.mp4`);
    el.addEventListener('click', () => openVideo(`assets/video/${clip}.mp4`, L(label)));
    grid.append(el);
    reveal(el, (i % 3) * 0.08);
  });
}

function renderAnimals() {
  const grid = document.getElementById('animals');
  grid.innerHTML = '';
  data.animals.forEach((a, i) => {
    const el = document.createElement('article');
    el.className = 'animal';
    const price = a.price === 0 ? (lang === 'en' ? 'Free' : 'Gratis') : `🪙 ${a.price}`;
    el.innerHTML = `<span class="rarity r-${a.rarity}">${L(RARITY[a.rarity] ?? [a.rarity, a.rarity])}</span><img loading="lazy" src="assets/img/animal-${a.id}.webp" alt="${a.name}" /><h3>${a.name}</h3><div class="title-line">${a.title}</div><span class="ability">${L(ABILITIES[a.ability] ?? [a.ability, a.ability])}</span><span class="price">${price}</span>`;
    grid.append(el);
    reveal(el, (i % 6) * 0.04);
  });
}

function renderBadges() {
  const box = document.getElementById('badges');
  box.innerHTML = '';
  for (const a of data.achievements) {
    const s = document.createElement('span');
    s.textContent = a.icon;
    s.title = `${a.title} - ${a.description} (+${a.reward})`;
    box.append(s);
  }
}

function renderRoadmap() {
  const list = document.getElementById('timeline');
  list.innerHTML = '';
  ROADMAP.forEach((p, i) => {
    const li = document.createElement('li');
    li.className = `phase ${p.cls}`;
    const [pill, title] = L([p.es, p.en]);
    li.innerHTML = `<div class="phase-head"><span class="phase-pill">${pill}</span><h3>${title}</h3></div><ul>${p.items.map((it) => `<li>${L(it)}</li>`).join('')}</ul>`;
    list.append(li);
    reveal(li, i * 0.08);
  });
}

function renderMarquee() {
  const track = document.getElementById('marquee');
  const one = data.animals
    .map((a) => `<figure><img src="assets/img/animal-${a.id}.webp" alt="" loading="lazy" />${a.name}</figure>`)
    .join('');
  track.innerHTML = one + one;
}

function applyText() {
  document.documentElement.lang = lang;
  document.getElementById('lang').textContent = lang === 'en' ? 'ES' : 'EN';
  for (const el of document.querySelectorAll('[data-i18n]')) {
    const key = el.dataset.i18n;
    if (!(key in I18N_ES)) I18N_ES[key] = el.innerHTML;
    el.innerHTML = lang === 'en' ? (I18N_EN[key] ?? I18N_ES[key]) : I18N_ES[key];
  }
}

function renderAll() {
  applyText();
  if (!data) return;
  renderModes();
  renderFilters();
  renderRounds();
  renderVideos();
  renderAnimals();
  renderBadges();
  renderRoadmap();
}

document.getElementById('lang').addEventListener('click', () => {
  lang = lang === 'en' ? 'es' : 'en';
  try {
    localStorage.setItem('aj-site-lang', lang);
  } catch {
    /* private mode: the toggle still works for this visit */
  }
  renderAll();
});

/* --- lightbox --- */
const box = document.getElementById('lightbox');
const boxVideo = document.getElementById('lightboxVideo');
function openVideo(src, caption) {
  boxVideo.src = src;
  document.getElementById('lightboxCaption').textContent = caption;
  box.hidden = false;
  boxVideo.play().catch(() => {});
}
function closeVideo() {
  box.hidden = true;
  boxVideo.pause();
  boxVideo.removeAttribute('src');
  boxVideo.load();
}
document.getElementById('lightboxClose').addEventListener('click', closeVideo);
box.addEventListener('click', (e) => e.target === box && closeVideo());
document.addEventListener('keydown', (e) => e.key === 'Escape' && !box.hidden && closeVideo());

/* --- confetti on every click, paw prints behind the cursor --- */
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
document.addEventListener('pointerdown', (e) => {
  if (reduce) return;
  for (let i = 0; i < 14; i++) {
    const c = document.createElement('span');
    c.className = 'confetti';
    c.style.left = `${e.clientX}px`;
    c.style.top = `${e.clientY}px`;
    c.style.background = COLORS[i % COLORS.length];
    const angle = Math.random() * Math.PI * 2;
    const dist = 60 + Math.random() * 110;
    c.style.setProperty('--x', `${Math.cos(angle) * dist}px`);
    c.style.setProperty('--y', `${Math.sin(angle) * dist + 80}px`);
    c.style.setProperty('--r', `${Math.random() * 720 - 360}deg`);
    document.body.append(c);
    setTimeout(() => c.remove(), 1200);
  }
});
let lastPaw = 0;
document.addEventListener('pointermove', (e) => {
  if (reduce || e.pointerType !== 'mouse') return;
  const now = performance.now();
  if (now - lastPaw < 90) return;
  lastPaw = now;
  const p = document.createElement('span');
  p.className = 'paw';
  p.textContent = '🐾';
  p.style.left = `${e.clientX - 8}px`;
  p.style.top = `${e.clientY - 8}px`;
  document.body.append(p);
  setTimeout(() => p.remove(), 1000);
});

/* --- the numbers count up when they come into view --- */
const counter = new IntersectionObserver((entries) => {
  for (const e of entries) {
    if (!e.isIntersecting) continue;
    counter.unobserve(e.target);
    const end = Number(e.target.dataset.count);
    const t0 = performance.now();
    const tick = (t) => {
      const k = Math.min(1, (t - t0) / 900);
      e.target.textContent = String(Math.round(end * (1 - (1 - k) ** 3)));
      if (k < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }
});
document.querySelectorAll('[data-count]').forEach((el) => counter.observe(el));

document.querySelectorAll('.pillar, .feature, .tech-card, .faq details, .stat').forEach((el, i) => reveal(el, (i % 4) * 0.07));

fetch('assets/data/game.json')
  .then((r) => r.json())
  .then((json) => {
    data = json;
    renderMarquee();
    renderAll();
  })
  .catch(() => applyText());
applyText();
