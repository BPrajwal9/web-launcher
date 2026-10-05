/**
 * GRAND CEREMONIAL VELVET CURTAIN LAUNCHER & INAUGURATION ENGINE
 * Royalty-Free Demo Showcase Edition with 10-Second Auto-Redirect
 */

(function () {
  'use strict';

  // Support dynamic target URL via query string: ?url=https://yourwebsite.com
  var urlParams = new URLSearchParams(window.location.search);
  var customSiteUrl = urlParams.get('url') || urlParams.get('target') || urlParams.get('site');

  // =====================  CONFIGURATION  =====================
  var CONFIG = {
    title:            "Grand Website Inauguration",
    subtitle:         "Official Web Portal launching in",
    motto:            "INNOVATION  \u2022  EXCELLENCE  \u2022  VISION",
    doneTitle:        'Welcome to Our <span class="gold-accent">New Digital Experience</span>',
    welcome:          "Welcome to our official new online portal \u2014 designed for seamless accessibility, modern speed, and innovation.",

    // The countdown starts when the page opens. At 0 the curtain lifts automatically.
    countdownSeconds: 5,

    // Optional: a fixed launch time instead (e.g. "2026-10-15T11:00:00"). Leave "" to use countdownSeconds.
    launchDate:       "",

    // true = curtain lifts automatically at 0.
    autoLaunch:       true,

    // Manual "Launch Website" button available anytime
    showLaunchButton: true,

    // Live Destination Portal URL (can be overridden via ?url= parameter)
    siteUrl:          customSiteUrl || "https://stage.whitecodetech.com/",

    // Royalty-free universal portal medallion & architectural backdrop
    logoUrl:          "images/portal-logo.svg",
    photoUrl:         "images/campus-demo.jpg",

    // Remote fallbacks in case of offline cache
    remoteLogoUrl:    "images/portal-logo.svg",
    remotePhotoUrl:   "images/campus-demo.jpg",

    // Fireworks duration and celebration duration (10 seconds)
    showcaseSeconds:  10,

    // Automatically open siteUrl after exactly 10 seconds of fireworks!
    autoRedirectSeconds: 10,

    // Web Audio synthesizer sound effects enabled
    sound:            true,

    // Default curtain color palette: 'navy', 'crimson', 'emerald', 'obsidian'
    currentTheme:     'navy'
  };
  // ===========================================================

  var $ = function (id) { return document.getElementById(id); };
  var reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Initialize UI Text
  if ($("sanskritMotto")) $("sanskritMotto").textContent = CONFIG.motto;
  if ($("title")) $("title").textContent = CONFIG.title;
  if ($("sub")) $("sub").textContent = CONFIG.subtitle;
  if ($("doneTitle")) $("doneTitle").innerHTML = CONFIG.doneTitle;
  if ($("welcome")) $("welcome").textContent = CONFIG.welcome;
  if ($("enter")) $("enter").href = CONFIG.siteUrl;
  if ($("liveBtn")) $("liveBtn").href = CONFIG.siteUrl;

  // Cleanly hide any college/trust tags if they exist in DOM
  ["college", "college2", "collegeMarathi", "collegeMarathi2", "trust", "trust2"].forEach(function (id) {
    var el = $(id);
    if (el) el.style.display = "none";
  });

  // Initialize Background Campus Photo with fallback
  var photoEl = $("photo");
  if (photoEl) {
    var bgImg = new Image();
    bgImg.onload = function () {
      photoEl.style.backgroundImage = 'url("' + CONFIG.photoUrl + '")';
    };
    bgImg.onerror = function () {
      photoEl.style.backgroundImage = 'url("' + CONFIG.remotePhotoUrl + '")';
    };
    bgImg.src = CONFIG.photoUrl;
  }

  // Initialize Demo Institutional Logo with fallback
  function loadLogo() {
    var lg = new Image();
    lg.onload = function () {
      ["logo", "logo2"].forEach(function (id) {
        var el = $(id);
        if (el) {
          el.src = lg.src;
          el.hidden = false;
        }
      });
    };
    lg.onerror = function () {
      if (lg.src !== CONFIG.remoteLogoUrl) {
        lg.src = CONFIG.remoteLogoUrl;
      }
    };
    lg.src = CONFIG.logoUrl;
  }
  loadLogo();

  // ---------- CANVASES & RESIZE CONTROLLER ----------
  var W, H, dpr;
  var fc = $("fx"), fx = fc.getContext("2d");
  var cc = $("cf"), cx = cc.getContext("2d");

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = window.innerWidth;
    H = window.innerHeight;
    [fc, cc].forEach(function (c) {
      c.width = W * dpr;
      c.height = H * dpr;
    });
    [fx, cx].forEach(function (c) {
      c.setTransform(dpr, 0, 0, dpr, 0, 0);
    });
  }
  window.addEventListener("resize", resize);
  resize();

  // ---------- NATIVE WEB AUDIO SYNTHESIZER ----------
  var AC, soundOn = CONFIG.sound;
  function audio() {
    if (!AC) {
      try {
        var AudioContextClass = window.AudioContext || window.webkitAudioContext;
        if (AudioContextClass) AC = new AudioContextClass();
      } catch (e) {}
    }
    return AC;
  }

  function noise(dur, f0, f1, vol, type) {
    if (!soundOn) return;
    var a = audio();
    if (!a) return;
    var n = Math.floor(a.sampleRate * dur);
    var buf = a.createBuffer(1, n, a.sampleRate);
    var d = buf.getChannelData(0);
    for (var i = 0; i < n; i++) {
      d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / n, 2);
    }
    var s = a.createBufferSource();
    s.buffer = buf;
    var f = a.createBiquadFilter();
    f.type = type;
    f.frequency.setValueAtTime(f0, a.currentTime);
    f.frequency.exponentialRampToValueAtTime(f1, a.currentTime + dur);
    var g = a.createGain();
    g.gain.value = vol;
    s.connect(f);
    f.connect(g);
    g.connect(a.destination);
    s.start();
  }

  function thump() {
    if (!soundOn) return;
    var a = audio();
    if (!a) return;
    var o = a.createOscillator();
    var g = a.createGain();
    o.type = "sine";
    o.frequency.setValueAtTime(110, a.currentTime);
    o.frequency.exponentialRampToValueAtTime(38, a.currentTime + 0.35);
    g.gain.setValueAtTime(0.6, a.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, a.currentTime + 0.4);
    o.connect(g);
    g.connect(a.destination);
    o.start();
    o.stop(a.currentTime + 0.45);
  }

  var boom = function () {
    noise(1, 1100, 60, 0.55, "lowpass");
    thump();
  };

  var whoosh = function () {
    noise(0.55, 500, 3000, 0.1, "highpass");
  };

  function updateSoundLabel() {
    var btn = $("snd");
    if (btn) {
      btn.innerHTML = soundOn 
        ? '<i class="fas fa-volume-up"></i> Sound: ON' 
        : '<i class="fas fa-volume-mute"></i> Sound: OFF';
      btn.classList.toggle("active", soundOn);
    }
  }

  if ($("snd")) {
    $("snd").addEventListener("click", function () {
      soundOn = !soundOn;
      updateSoundLabel();
      if (soundOn) {
        var a = audio();
        if (a && a.state === "suspended") a.resume();
        boom();
      }
    });
    updateSoundLabel();
  }

  // ---------- FIREWORKS & CONFETTI ENGINE ----------
  // Tailored to daytime sunny sky: vibrant gold, rose pink, sapphire, emerald, and white
  var HUES = [45, 25, 340, 320, 205, 140, 10];
  var rockets = [], sparks = [], glows = [], confetti = [], looping = false;

  function spark(x, y, vx, vy, life, h, l, size, g, fric, crackle) {
    sparks.push({
      x: x, y: y, vx: vx, vy: vy, life: life, age: 0,
      h: h, l: l, z: size, g: g, f: fric, c: crackle
    });
  }

  function rocket(x, type) {
    var ty = H * (0.12 + Math.random() * 0.32);
    var v = Math.sqrt(2 * 0.1 * (H - ty));
    rockets.push({
      x: x,
      y: H + 8,
      vx: (Math.random() - 0.5) * 1.2,
      vy: -v,
      type: type,
      h: HUES[Math.floor(Math.random() * HUES.length)]
    });
    whoosh();
  }

  function explode(x, y, type, h) {
    var n = reduce ? 40 : 120, i, a, sp;
    if (type === "ring") {
      for (i = 0; i < n; i++) {
        a = (i / n) * 6.283;
        spark(x, y, Math.cos(a) * 4.6, Math.sin(a) * 4.6, 70, h, 55, 3, 0.04, 0.985);
      }
    } else if (type === "willow") {
      for (i = 0; i < n; i++) {
        a = Math.random() * 6.283;
        sp = 1 + Math.random() * 4;
        spark(x, y, Math.cos(a) * sp, Math.sin(a) * sp, 120 + Math.random() * 60, 42, 56, 2.4, 0.035, 0.985);
      }
    } else if (type === "crackle") {
      for (i = 0; i < n; i++) {
        a = Math.random() * 6.283;
        sp = 0.6 + Math.pow(Math.random(), 0.5) * 5.4;
        spark(x, y, Math.cos(a) * sp, Math.sin(a) * sp, 65 + Math.random() * 30, h, 55, 2.8, 0.05, 0.98, true);
      }
    } else if (type === "double") {
      for (i = 0; i < n * 0.7; i++) {
        a = (i / (n * 0.7)) * 6.283;
        spark(x, y, Math.cos(a) * 5.2, Math.sin(a) * 5.2, 75, h, 55, 3, 0.04, 0.985);
      }
      for (i = 0; i < n * 0.5; i++) {
        a = Math.random() * 6.283;
        sp = Math.random() * 2.6;
        spark(x, y, Math.cos(a) * sp, Math.sin(a) * sp, 70, 45, 60, 2.8, 0.04, 0.985);
      }
    } else {
      for (i = 0; i < n; i++) {
        a = Math.random() * 6.283;
        sp = 0.6 + Math.pow(Math.random(), 0.5) * 5.6;
        spark(x, y, Math.cos(a) * sp, Math.sin(a) * sp, 70 + Math.random() * 40, h, 55, 3, 0.045, 0.983);
      }
    }
    glows.push({ x: x, y: y, a: 0.55 });
    boom();
  }

  var TYPES = ["peony", "ring", "willow", "crackle", "double", "peony"];
  function randRocket() {
    rocket(W * (0.1 + Math.random() * 0.8), TYPES[Math.floor(Math.random() * TYPES.length)]);
  }

  function spawnConfetti(n) {
    var cols = ["#F5B754", "#FFFFFF", "#003560", "#E53B92", "#FFE3A3", "#22C55E", "#FF8A00"];
    for (var i = 0; i < n; i++) {
      confetti.push({
        x: Math.random() * W,
        y: -20 - Math.random() * H * 0.3,
        vx: (Math.random() - 0.5) * 2.4,
        vy: 1.6 + Math.random() * 3.2,
        rot: Math.random() * 6,
        vr: (Math.random() - 0.5) * 0.35,
        w: 6 + Math.random() * 7,
        h: 9 + Math.random() * 8,
        c: cols[Math.floor(Math.random() * cols.length)]
      });
    }
  }

  function renderLoop() {
    fx.globalCompositeOperation = "destination-out";
    fx.fillStyle = "rgba(0, 0, 0, 0.14)";
    fx.fillRect(0, 0, W, H);
    fx.globalCompositeOperation = "source-over";

    var i, p;
    // Soft white glow at burst center
    for (i = glows.length - 1; i >= 0; i--) {
      var g = glows[i];
      g.a -= 0.03;
      if (g.a <= 0) {
        glows.splice(i, 1);
        continue;
      }
      var gr = fx.createRadialGradient(g.x, g.y, 0, g.x, g.y, 220);
      gr.addColorStop(0, "rgba(255, 255, 255, " + g.a * 0.6 + ")");
      gr.addColorStop(1, "rgba(255, 255, 255, 0)");
      fx.fillStyle = gr;
      fx.fillRect(g.x - 220, g.y - 220, 440, 440);
    }

    // Rocket trails
    for (i = rockets.length - 1; i >= 0; i--) {
      p = rockets[i];
      p.vy += 0.1;
      p.x += p.vx;
      p.y += p.vy;
      spark(p.x, p.y, (Math.random() - 0.5) * 0.4, 0.6, 24, 32, 55, 2.2, 0.02, 0.95);
      if (p.vy >= -0.5) {
        explode(p.x, p.y, p.type, p.h);
        rockets.splice(i, 1);
      } else {
        fx.fillStyle = "#FFB703";
        fx.beginPath();
        fx.arc(p.x, p.y, 3, 0, 6.283);
        fx.fill();
      }
    }

    // Sparks
    for (i = sparks.length - 1; i >= 0; i--) {
      p = sparks[i];
      p.vx *= p.f;
      p.vy = p.vy * p.f + p.g;
      p.x += p.vx;
      p.y += p.vy;
      p.age++;
      var a = 1 - p.age / p.life;
      if (a <= 0) {
        if (p.c) {
          for (var k = 0; k < 3; k++) {
            spark(p.x, p.y, (Math.random() - 0.5) * 3, (Math.random() - 0.5) * 3, 14, 45, 90, 2, 0.03, 0.95);
          }
        }
        sparks.splice(i, 1);
        continue;
      }
      if (p.c && p.age > p.life * 0.65 && Math.random() < 0.5) a *= 0.15;
      fx.fillStyle = "hsla(" + p.h + ", 100%, " + p.l + "%, " + Math.min(1, a * 1.3) + ")";
      fx.beginPath();
      fx.arc(p.x, p.y, p.z * (0.45 + a * 0.55), 0, 6.283);
      fx.fill();
      if (a > 0.55) {
        fx.fillStyle = "rgba(255, 255, 255, " + (a - 0.4) + ")";
        fx.beginPath();
        fx.arc(p.x, p.y, p.z * 0.38, 0, 6.283);
        fx.fill();
      }
    }

    // Confetti
    cx.clearRect(0, 0, W, H);
    for (i = confetti.length - 1; i >= 0; i--) {
      p = confetti[i];
      p.x += p.vx + Math.sin(p.rot) * 0.6;
      p.y += p.vy;
      p.rot += p.vr;
      if (p.y > H + 20) {
        confetti.splice(i, 1);
        continue;
      }
      cx.save();
      cx.translate(p.x, p.y);
      cx.rotate(p.rot);
      cx.scale(1, Math.cos(p.rot * 1.7));
      cx.fillStyle = p.c;
      cx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      cx.restore();
    }

    if (looping) {
      requestAnimationFrame(renderLoop);
    }
  }

  // ---------- COUNTDOWN CONTROLLER ----------
  var launched = false;
  var hasCount = !!(CONFIG.launchDate || CONFIG.countdownSeconds > 0);
  var targetTime = CONFIG.launchDate ? new Date(CONFIG.launchDate).getTime() : Date.now() + CONFIG.countdownSeconds * 1000;
  var countdownInterval = null;

  if ($("go")) {
    $("go").hidden = !CONFIG.showLaunchButton;
  }

  function pad(n) {
    return String(n).padStart(2, "0");
  }

  function tick() {
    if (!hasCount) {
      if ($("count")) $("count").hidden = true;
      return;
    }
    var diff = targetTime - Date.now();
    if (diff <= 0) {
      if ($("count")) $("count").hidden = true;
      if ($("sub")) $("sub").textContent = "Opening Ceremonial Curtains\u2026";
      if (CONFIG.autoLaunch && !launched) {
        launch();
      }
      return;
    }
    var t = Math.ceil(diff / 1000);
    var d = Math.floor(t / 86400);
    var h = Math.floor((t % 86400) / 3600);
    var m = Math.floor((t % 3600) / 60);
    var s = t % 60;

    if ($("d")) $("d").textContent = pad(d);
    if ($("h")) $("h").textContent = pad(h);
    if ($("m")) $("m").textContent = pad(m);
    if ($("s")) $("s").textContent = pad(s);

    var hideD = d === 0;
    var hideH = hideD && h === 0;
    var hideM = hideH && m === 0;

    if ($("d") && $("d").parentNode) $("d").parentNode.hidden = hideD;
    if ($("h") && $("h").parentNode) $("h").parentNode.hidden = hideH;
    if ($("m") && $("m").parentNode) $("m").parentNode.hidden = hideM;
    if ($("s") && $("s").parentNode) $("s").parentNode.classList.toggle("solo", hideM);
  }

  // ---------- GO LIVE TO WEBSITE ----------
  var leaving = false;
  var redirectInterval = null;
  var fireworksVolleyInterval = null;

  function goLive(e) {
    if (e && e.preventDefault) e.preventDefault();
    if (leaving) return;
    leaving = true;

    if (redirectInterval) {
      clearInterval(redirectInterval);
      redirectInterval = null;
    }
    if (fireworksVolleyInterval) {
      clearInterval(fireworksVolleyInterval);
      fireworksVolleyInterval = null;
    }

    var wipe = $("wipe");
    if (wipe) wipe.classList.add("on");

    // Audio chime effect
    var a = audio();
    if (a) noise(0.6, 600, 1800, 0.15, "highpass");

    setTimeout(function () {
      try {
        (window.top !== window ? window.top : window).location.href = CONFIG.siteUrl;
      } catch (err) {
        window.location.href = CONFIG.siteUrl;
      }
    }, 750);
  }

  if ($("enter")) {
    $("enter").addEventListener("click", goLive);
  }

  // ---------- 10-SECOND CELEBRATION & AUTO-REDIRECT ENGINE ----------
  function startCelebrationRedirect() {
    var enterBox = $("enterBox");
    if (enterBox) enterBox.classList.add("show");

    var totalSeconds = CONFIG.autoRedirectSeconds || 10;
    var totalMs = totalSeconds * 1000;
    var startTime = Date.now();

    var barFill = $("redirectBarFill");
    var timerNum = $("redirectTimer");

    if (barFill) barFill.style.width = "0%";
    if (timerNum) timerNum.textContent = totalSeconds;

    if (redirectInterval) clearInterval(redirectInterval);

    redirectInterval = setInterval(function () {
      var elapsed = Date.now() - startTime;
      var remainingMs = Math.max(0, totalMs - elapsed);
      var remainingSec = Math.max(0, Math.ceil(remainingMs / 1000));
      var pct = Math.min(100, (elapsed / totalMs) * 100);

      if (barFill) barFill.style.width = pct + "%";
      if (timerNum) timerNum.textContent = remainingSec;

      if (remainingMs <= 0) {
        clearInterval(redirectInterval);
        redirectInterval = null;
        goLive();
      }
    }, 100);
  }

  function launch() {
    if (launched) return;
    launched = true;

    var a = audio();
    if (a && a.state === "suspended") a.resume();

    // Part the curtains to left and right
    document.body.classList.add("open");

    // Play velvet fabric friction sound
    noise(1.8, 250, 1400, 0.12, "bandpass");

    // Start celebratory fireworks animation
    if (!looping) {
      looping = true;
      requestAnimationFrame(renderLoop);
    }

    // Initial celebratory rocket & confetti burst
    setTimeout(function () {
      rocket(W / 2, "double");
      spawnConfetti(reduce ? 40 : 200);
    }, 500);

    // Continuous fireworks volley throughout the 10-second celebration!
    fireworksVolleyInterval = setInterval(function () {
      randRocket();
      if (Math.random() < 0.5) randRocket();
      if (Math.random() < 0.3) spawnConfetti(reduce ? 15 : 40);
    }, reduce ? 1000 : 550);

    // Reveal card & start 10-second countdown to automatic redirect
    setTimeout(function () {
      startCelebrationRedirect();
    }, 1100);
  }

  if ($("go")) {
    $("go").addEventListener("click", launch);
  }

  // Enable audio context upon any initial user interaction
  window.addEventListener("pointerdown", function () {
    var a = audio();
    if (a && a.state === "suspended") a.resume();
  }, { once: true });

  // Interactive Fireworks on Pointer Click across the sunny campus sky!
  window.addEventListener("pointerdown", function (e) {
    if (launched && !e.target.closest(".card") && !e.target.closest(".controls-bar")) {
      explode(
        e.clientX, 
        e.clientY, 
        TYPES[Math.floor(Math.random() * TYPES.length)], 
        HUES[Math.floor(Math.random() * HUES.length)]
      );
    }
  });

  // ---------- REPLAY & THEME CONTROLS ----------
  function replayCeremony() {
    if (fireworksVolleyInterval) {
      clearInterval(fireworksVolleyInterval);
      fireworksVolleyInterval = null;
    }
    if (redirectInterval) {
      clearInterval(redirectInterval);
      redirectInterval = null;
    }
    if (finaleInterval) clearInterval(finaleInterval);
    if (ongoingInterval) clearInterval(ongoingInterval);
    rockets = [];
    sparks = [];
    confetti = [];
    glows = [];
    leaving = false;
    launched = false;

    // Reset curtains and cards
    document.body.classList.remove("open");
    if ($("wipe")) $("wipe").classList.remove("on");
    if ($("enterBox")) $("enterBox").classList.remove("show");
    var barFill = $("redirectBarFill");
    if (barFill) barFill.style.width = "0%";
    var timerNum = $("redirectTimer");
    if (timerNum) timerNum.textContent = CONFIG.autoRedirectSeconds || 10;
    if ($("wait")) {
      $("wait").style.opacity = "";
      $("wait").style.pointerEvents = "";
    }
    if ($("count")) $("count").hidden = false;
    if ($("sub")) $("sub").textContent = CONFIG.subtitle;

    // Reset timer
    targetTime = Date.now() + CONFIG.countdownSeconds * 1000;
    tick();
  }

  // ---------- 4-THEME LUXURY COLOR SYSTEM ----------
  var THEMES = ['crimson', 'navy', 'emerald', 'obsidian'];
  var THEME_LABELS = {
    crimson:  'Crimson Velvet',
    navy:     'Midnight Navy',
    emerald:  'Academic Emerald',
    obsidian: 'Royal Obsidian'
  };

  function applyCurtainTheme(themeName, save) {
    if (!THEMES.includes(themeName)) themeName = 'crimson';
    CONFIG.currentTheme = themeName;

    if (themeName === 'crimson') {
      document.body.removeAttribute("data-theme");
    } else {
      document.body.setAttribute("data-theme", themeName);
    }

    // Update label text in dock
    var labelEl = $("themeLabel");
    if (labelEl) {
      labelEl.textContent = THEME_LABELS[themeName] || themeName;
    }

    // Update active swatch button
    var swatches = document.querySelectorAll(".swatch-btn");
    swatches.forEach(function (sw) {
      if (sw.getAttribute("data-theme-name") === themeName) {
        sw.classList.add("active");
      } else {
        sw.classList.remove("active");
      }
    });

    if (save) {
      try { localStorage.setItem("svp_launcher_theme", themeName); } catch (e) {}
    }
  }

  function cycleCurtainTheme() {
    var idx = THEMES.indexOf(CONFIG.currentTheme);
    var nextTheme = THEMES[(idx + 1) % THEMES.length];
    applyCurtainTheme(nextTheme, true);
  }

  // Restore saved theme or default to crimson
  try {
    var savedTheme = localStorage.getItem("svp_launcher_theme");
    if (savedTheme && THEMES.includes(savedTheme)) {
      applyCurtainTheme(savedTheme, false);
    } else {
      applyCurtainTheme('crimson', false);
    }
  } catch (e) {
    applyCurtainTheme('crimson', false);
  }

  // Bind swatch button clicks
  var swatchBtns = document.querySelectorAll(".swatch-btn");
  swatchBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var t = this.getAttribute("data-theme-name");
      if (t) applyCurtainTheme(t, true);
    });
  });

  if ($("replayBtn")) {
    $("replayBtn").addEventListener("click", replayCeremony);
  }

  if ($("themeToggle")) {
    $("themeToggle").addEventListener("click", cycleCurtainTheme);
  }

  // Keyboard shortcut: Press R to replay, Space to launch immediately
  window.addEventListener("keydown", function (e) {
    if (e.key === "r" || e.key === "R") {
      replayCeremony();
    }
    if (e.code === "Space" && !launched) {
      launch();
    }
  });

  // Start countdown clock
  tick();
  countdownInterval = setInterval(tick, 1000);

  // Expose global controller for external triggers or debugging
  window.SVPCurtainLauncher = {
    launch: launch,
    replay: replayCeremony,
    cycleTheme: cycleCurtainTheme,
    applyTheme: applyCurtainTheme,
    siteUrl: CONFIG.siteUrl
  };

})();
