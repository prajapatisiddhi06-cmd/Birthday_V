// ===== INTRO SEQUENCE =====
window.addEventListener('DOMContentLoaded', () => {
  const lines = ['il1', 'il2', 'il3'];
  const delays = [600, 1800, 3200];
  lines.forEach((id, i) => {
    setTimeout(() => document.getElementById(id).classList.add('show'), delays[i]);
  });
  setTimeout(() => document.getElementById('introBtn').classList.add('show'), 5000);
  initCursorTrail();
});

// ===== CURSOR HEART TRAIL =====
function initCursorTrail() {
  const hearts = ['❤️','💕','✨','💫','🌸'];
  let last = 0;
  document.addEventListener('mousemove', e => {
    const now = Date.now();
    if (now - last < 120) return;
    last = now;
    const el = document.createElement('div');
    el.className = 'cursor-heart';
    el.textContent = hearts[Math.floor(Math.random() * hearts.length)];
    el.style.cssText = `left:${e.clientX - 8}px;top:${e.clientY - 8}px`;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 1000);
  });
}

function startJourney() {
  const intro = document.getElementById('intro');
  intro.style.opacity = '0';
  intro.style.transition = 'opacity 0.8s ease';
  setTimeout(() => {
    intro.classList.add('hidden');
    const reveal = document.getElementById('reveal');
    reveal.classList.remove('hidden');
    reveal.style.opacity = '0';
    reveal.style.transition = 'opacity 0.8s ease';
    setTimeout(() => reveal.style.opacity = '1', 50);
    launchRevealParticles();
  }, 800);
}

function enterSite() {
  const reveal = document.getElementById('reveal');
  reveal.style.opacity = '0';
  reveal.style.transition = 'opacity 0.8s ease';
  setTimeout(() => {
    reveal.classList.add('hidden');
    const main = document.getElementById('mainSite');
    main.classList.remove('hidden');
    document.getElementById('progressBar').classList.remove('hidden');
    buildSite();
    initParticles();
    initScrollReveal();
    initProgress();
  }, 800);
}

// ===== REVEAL PARTICLES =====
function launchRevealParticles() {
  const emojis = ['❤️','✨','🎂','🎉','💫','🌸'];
  const reveal = document.getElementById('reveal');
  for (let i = 0; i < 20; i++) {
    setTimeout(() => {
      const el = document.createElement('div');
      el.style.cssText = `position:fixed;font-size:${Math.random()*20+14}px;left:${Math.random()*100}vw;top:110vh;pointer-events:none;z-index:998;animation:floatParticle ${Math.random()*3+3}s linear forwards`;
      el.textContent = emojis[Math.floor(Math.random()*emojis.length)];
      document.body.appendChild(el);
      setTimeout(() => el.remove(), 6000);
    }, i * 150);
  }
}

// ===== HERO PARTICLES =====
function initParticles() {
  const container = document.getElementById('particles');
  const items = ['❤️','✨','💫','🌸','⭐','💕','🎀','💖','🌟'];
  for (let i = 0; i < 32; i++) {
    const el = document.createElement('div');
    el.className = 'particle';
    el.textContent = items[Math.floor(Math.random() * items.length)];
    el.style.cssText = `left:${Math.random()*100}%;font-size:${Math.random()*18+8}px;animation-duration:${Math.random()*12+7}s;animation-delay:${Math.random()*10}s;`;
    container.appendChild(el);
  }
  // Parallax on mouse move
  const hero = document.querySelector('.hero');
  hero.addEventListener('mousemove', e => {
    const x = (e.clientX / window.innerWidth - 0.5) * 22;
    const y = (e.clientY / window.innerHeight - 0.5) * 22;
    container.style.transform = `translate(${x}px,${y}px)`;
    container.style.transition = 'transform 0.3s ease';
  });
}

// ===== PROGRESS BAR =====
function initProgress() {
  window.addEventListener('scroll', () => {
    const doc = document.documentElement;
    const pct = (doc.scrollTop / (doc.scrollHeight - doc.clientHeight)) * 100;
    document.getElementById('progressFill').style.width = pct + '%';
  });

  // Reveal final section elements on scroll
  const finalObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.querySelectorAll('.final-lead, .final-lead2, .btn-main').forEach(el => el.classList.add('visible'));
        finalObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.3 });
  const finalSec = document.querySelector('.final-section');
  if (finalSec) finalObs.observe(finalSec);

  // Button spotlight effect
  document.querySelectorAll('.btn-main').forEach(btn => {
    btn.addEventListener('mousemove', e => {
      const r = btn.getBoundingClientRect();
      btn.style.setProperty('--mx', ((e.clientX - r.left) / r.width * 100) + '%');
      btn.style.setProperty('--my', ((e.clientY - r.top) / r.height * 100) + '%');
    });
  });
}

// ===== SCROLL REVEAL =====
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(
    '.tl-item, .bf-card, .polaroid, .reason-card, .wish-item, .shayari-card, .section-title, .letter-card'
  ).forEach(el => observer.observe(el));

  // Staggered animation delays for grid children
  document.querySelectorAll('.bf-card').forEach((el, i) => { el.style.transitionDelay = `${(i % 3) * 0.1}s`; });
  document.querySelectorAll('.reason-card').forEach((el, i) => { el.style.transitionDelay = `${(i % 3) * 0.1}s`; });
  document.querySelectorAll('.polaroid').forEach((el, i) => { el.style.animationDelay = `${i * 0.09}s`; });
  document.querySelectorAll('.wish-item').forEach((el, i) => { el.style.transitionDelay = `${i * 0.1}s`; });
}

// ===== BUILD ALL SECTIONS =====
let _built = false;
function buildSite() {
  if (_built) return;
  _built = true;
  buildTimeline();
  buildBestFriend();
  buildPolaroids();
  buildReasons();
  buildGifts();
  buildPlayer();
  buildShayari();
  buildLetter();
  buildWishes();
}

// ===== TIMELINE =====
function buildTimeline() {
  const container = document.getElementById('timeline');
  container.innerHTML = '';
  CONFIG.timeline.forEach((item, i) => {
    const div = document.createElement('div');
    div.className = 'tl-item';
    div.style.transitionDelay = `${i * 0.1}s`;
    div.innerHTML = `
      <div class="tl-dot"></div>
      <div class="tl-chapter">Chapter ${item.chapter}</div>
      <div class="tl-title">${item.title}</div>
      <div class="tl-date">${item.date}</div>
      <div class="tl-story">${item.story}</div>
    `;
    container.appendChild(div);
  });
}

// ===== BEST FRIEND CARDS =====
const BF_CARDS = [
  "The person I can be completely stupid with 😂",
  "The person I can tell random things to.",
  "The person who has seen way too much of my nonsense.",
  "The person I can laugh with for absolutely no reason.",
  "The person I can actually be myself around.",
  "The person who somehow became a huge part of my life.",
];

function buildBestFriend() {
  const container = document.getElementById('bfCards');
  container.innerHTML = '';
  BF_CARDS.forEach((text, i) => {
    const div = document.createElement('div');
    div.className = 'bf-card';
    div.style.transitionDelay = `${i * 0.08}s`;
    div.innerHTML = `<p>${text}</p>`;
    container.appendChild(div);
  });
}

// ===== POLAROIDS =====
function buildPolaroids() {
  const container = document.getElementById('polaroids');
  container.innerHTML = '';
  const rotations = [-3, 2, -1.5, 3, -2, 1.5];
  CONFIG.photos.forEach((photo, i) => {
    const div = document.createElement('div');
    div.className = 'polaroid';
    div.style.transform = `rotate(${rotations[i % rotations.length]}deg)`;
    div.style.transitionDelay = `${i * 0.1}s`;

    const imgHtml = photo.src
      ? `<img src="${photo.src}" alt="memory" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
         <div class="photo-placeholder" style="display:none">📷</div>`
      : `<div class="photo-placeholder">📷</div>`;

    div.innerHTML = `
      ${imgHtml}
      <div class="polaroid-date">${photo.date}</div>
      <div class="polaroid-caption">${photo.caption}</div>
    `;

    div.addEventListener('mouseenter', () => {
      div.style.transform = `rotate(0deg) scale(1.05)`;
      div.style.zIndex = '10';
    });
    div.addEventListener('mouseleave', () => {
      div.style.transform = `rotate(${rotations[i % rotations.length]}deg) scale(1)`;
      div.style.zIndex = '';
    });

    container.appendChild(div);
  });
}

// ===== REASONS =====
function buildReasons() {
  const container = document.getElementById('reasonsGrid');
  container.innerHTML = '';
  CONFIG.reasons.forEach((r, i) => {
    const div = document.createElement('div');
    div.className = 'reason-card';
    div.style.transitionDelay = `${i * 0.07}s`;
    div.innerHTML = `<span class="reason-num">${r.num}</span><span class="reason-text">${r.text}</span>`;
    container.appendChild(div);
  });
}

// ===== GIFTS =====
function buildGifts() {
  const container = document.getElementById('giftsGrid');
  container.innerHTML = '';
  CONFIG.gifts.forEach((gift, i) => {
    const div = document.createElement('div');
    div.className = 'gift-box';
    div.innerHTML = `<span class="gift-emoji">${gift.emoji}</span><span class="gift-label">${gift.label}</span>`;
    div.addEventListener('click', () => openGift(gift, div));
    container.appendChild(div);
  });
}

function openGift(gift, el) {
  if (gift.reveal === 'final') {
    el.classList.add('opened');
    document.querySelector('.final-section').scrollIntoView({ behavior: 'smooth' });
    return;
  }
  if (gift.reveal === 'music') {
    el.classList.add('opened');
    document.getElementById('music').scrollIntoView({ behavior: 'smooth' });
    return;
  }
  el.classList.add('opened');
  burstHearts(el);
  const overlay = document.createElement('div');
  overlay.className = 'gift-reveal';
  overlay.innerHTML = `
    <div class="gift-reveal-card">
      <button class="gift-close" onclick="this.closest('.gift-reveal').remove()">✕</button>
      <div style="font-size:3rem;margin-bottom:1rem">${gift.emoji}</div>
      <h3>${gift.label}</h3>
      <p>${gift.content}</p>
    </div>
  `;
  document.body.appendChild(overlay);
  overlay.addEventListener('click', e => { if (e.target === overlay) overlay.remove(); });
}

function burstHearts(el) {
  const rect = el.getBoundingClientRect();
  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height / 2;
  ['❤️','💕','✨','💫','🌸'].forEach((emoji, i) => {
    const h = document.createElement('div');
    h.style.cssText = `position:fixed;left:${cx}px;top:${cy}px;font-size:${Math.random()*14+12}px;pointer-events:none;z-index:600;transition:all 0.8s cubic-bezier(0.25,0.46,0.45,0.94);opacity:1;`;
    h.textContent = emoji;
    document.body.appendChild(h);
    requestAnimationFrame(() => {
      const angle = (i / 5) * Math.PI * 2;
      const dist = Math.random() * 80 + 60;
      h.style.transform = `translate(${Math.cos(angle)*dist}px,${Math.sin(angle)*dist - 40}px) scale(0)`;
      h.style.opacity = '0';
    });
    setTimeout(() => h.remove(), 900);
  });
}

// ===== MUSIC PLAYER =====
function buildPlayer() {
  const wrap = document.getElementById('playerWrap');
  const m = CONFIG.music;
  const ytUrl = 'https://www.youtube.com/watch?v=r54x6Knngqs';
  const thumbUrl = 'https://img.youtube.com/vi/r54x6Knngqs/maxresdefault.jpg';

  wrap.innerHTML = `
    <div class="player">
      <div class="yt-thumb-wrap" id="ytThumbWrap">
        <img src="${thumbUrl}" class="yt-thumb" alt="${m.title}" onerror="this.style.display='none';document.getElementById('ytThumbFallback').style.display='flex'">
        <div class="yt-thumb-fallback" id="ytThumbFallback">🎵</div>
        <button class="yt-play-btn" onclick="openSong()" aria-label="Play">
          <svg viewBox="0 0 24 24" fill="white" width="32" height="32"><path d="M8 5v14l11-7z"/></svg>
        </button>
        <div class="yt-overlay"></div>
      </div>
      <div class="player-meta">
        <div class="player-title">${m.title}</div>
        <div class="player-artist">${m.artist}</div>
        <div class="player-hint">Press play when you're ready ❤️</div>
        <button class="yt-open-btn" onclick="openSong()">
          <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M8 5v14l11-7z"/></svg>
          Play Song
        </button>
      </div>
    </div>
  `;
}

function openSong() {
  window.open('https://www.youtube.com/watch?v=r54x6Knngqs', '_blank');
}

// ===== SHAYARI =====
function buildShayari() {
  const container = document.getElementById('shayariGrid');
  container.innerHTML = '';
  CONFIG.shayari.forEach((s, i) => {
    const div = document.createElement('div');
    div.className = 'shayari-card';
    div.style.transitionDelay = `${i * 0.12}s`;
    div.innerHTML = `<div class="shayari-label">${s.label}</div><p class="shayari-text">${s.text.replace(/\n/g, '<br>')}</p>`;
    container.appendChild(div);
  });
}

// ===== LETTER =====
function buildLetter() {
  document.getElementById('letterCard').innerHTML = `<div class="letter-text">${CONFIG.letter}</div>`;
}

// ===== WISHES =====
function buildWishes() {
  const container = document.getElementById('wishesList');
  container.innerHTML = '';
  CONFIG.wishes.forEach((wish, i) => {
    const div = document.createElement('div');
    div.className = 'wish-item';
    div.style.transitionDelay = `${i * 0.1}s`;
    div.innerHTML = `<span class="wish-star">✦</span><span class="wish-text">${wish}</span>`;
    container.appendChild(div);
  });
}

// ===== FINAL GIFT =====
function openFinalGift() {
  const overlay = document.getElementById('finalOverlay');
  overlay.classList.remove('hidden');
  startConfetti();

  const fm = CONFIG.finalMessage;
  const msgDiv = document.getElementById('finalMessage');
  msgDiv.innerHTML = `
    <div class="final-msg-line big" id="fm1">${fm.line1}</div>
    <div class="final-msg-line med" id="fm2">${fm.line2}</div>
    <div class="final-msg-line med" id="fm3">${fm.line3}</div>
    <div class="final-msg-line hand" id="fm4">${fm.sign}</div>
    <button class="replay-btn" id="replayBtn" onclick="replayAll()">Replay everything ↻</button>
  `;

  const delays = [300, 1200, 2400, 3400, 4400];
  ['fm1','fm2','fm3','fm4','replayBtn'].forEach((id, i) => {
    setTimeout(() => document.getElementById(id).classList.add('show'), delays[i]);
  });
}

function replayAll() {
  location.reload();
}

// ===== CONFETTI =====
function startConfetti() {
  const canvas = document.getElementById('confettiCanvas');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const ctx = canvas.getContext('2d');
  const colors = ['#e8a0b0','#c9a84c','#6b1f2a','#fdf6f0','#f5d0da','#e8c97a','#ffffff'];
  const shapes = ['rect','circle','heart'];
  const pieces = Array.from({length: 160}, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height - canvas.height,
    w: Math.random() * 10 + 5,
    h: Math.random() * 6 + 3,
    r: Math.random() * 5 + 3,
    color: colors[Math.floor(Math.random() * colors.length)],
    shape: shapes[Math.floor(Math.random() * shapes.length)],
    vx: (Math.random() - 0.5) * 3,
    vy: Math.random() * 3 + 1,
    rot: Math.random() * 360,
    vr: (Math.random() - 0.5) * 6,
    wobble: Math.random() * Math.PI * 2,
    wobbleSpeed: Math.random() * 0.05 + 0.02,
  }));

  function drawHeart(ctx, x, y, size) {
    ctx.beginPath();
    ctx.moveTo(x, y + size / 4);
    ctx.bezierCurveTo(x, y, x - size / 2, y, x - size / 2, y + size / 4);
    ctx.bezierCurveTo(x - size / 2, y + size / 2, x, y + size * 0.75, x, y + size);
    ctx.bezierCurveTo(x, y + size * 0.75, x + size / 2, y + size / 2, x + size / 2, y + size / 4);
    ctx.bezierCurveTo(x + size / 2, y, x, y, x, y + size / 4);
    ctx.closePath();
    ctx.fill();
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pieces.forEach(p => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot * Math.PI / 180);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = 0.85;
      if (p.shape === 'rect') {
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      } else if (p.shape === 'circle') {
        ctx.beginPath(); ctx.arc(0, 0, p.r, 0, Math.PI * 2); ctx.fill();
      } else {
        drawHeart(ctx, -p.r, -p.r, p.r * 2);
      }
      ctx.restore();
      p.wobble += p.wobbleSpeed;
      p.x += p.vx + Math.sin(p.wobble) * 0.8;
      p.y += p.vy;
      p.rot += p.vr;
      if (p.y > canvas.height + 20) { p.y = -20; p.x = Math.random() * canvas.width; }
    });
    requestAnimationFrame(draw);
  }
  draw();
  window.addEventListener('resize', () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; });
}
