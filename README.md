# Grand Ceremonial Velvet Curtain Launcher & Inauguration Portal 🎭✨

A royalty-free, universal digital inauguration launcher and velvet curtain reveal experience designed for stage presentations, digital ceremonies, and website launches.

---

## 🌟 Key Features

- **Realistic Velvet Curtains & Pelmet Valance**: Deep fabric folds, golden fringes, and realistic physics-based curtain opening animations.
- **Continuous 10-Second Fireworks Celebration**: Multi-stage rocket volleys, peony blossoms, crackles, and confetti showers burst continuously across the campus backdrop.
- **Hands-Free 10-Second Auto-Redirect**:
  - After curtains part and celebration begins, a live progress meter counts down: `Redirecting to official website in 10 seconds...`
  - **Zero clicks needed**: Smooth radial flash wipe automatically transitions the browser to the destination website after exactly 10 seconds.
  - Manual **"Enter Website Now"** button is also available for instant navigation without waiting.
- **Audio Sound Effects**: Built-in Web Audio synthesis for velvet curtain friction, celebratory fanfare, and chime effects (no external audio files needed).
- **100% Royalty-Free & Copyright-Free Assets**:
  - Vector SVG institutional crest medallion (`images/institute-logo.svg`).
  - High-resolution demo campus architecture photograph (`images/campus-demo.jpg`).
- **Dynamic URL Redirection via Query String**:
  - Pass any target URL directly in the browser address bar:  
    `index.html?url=https://your-custom-website.com`
- **4 Luxury Velvet Color Themes**:
  - 🔴 **Regal Crimson Velvet** (Default)
  - 🔵 **Oxford Midnight Navy**
  - 🟢 **Academic Emerald**
  - ⚫ **Royal Obsidian**
- **Ceremony Controls Bar**:
  - **Replay** (Keyboard shortcut: `R`): Instantly close curtains and reset the ceremony.
  - **Curtain Palette Switcher**: Toggle theme swatches in real-time.
  - **Sound Toggle**: Mute / unmute audio effects.
  - **Live Site Button**: Direct gateway to destination URL.
- **Zero External Dependencies**: Pure vanilla HTML5, CSS3, and JavaScript — no build tools or package managers required.

---

## 📁 Repository Structure

```
├── css/
│   └── launcher.css        # Responsive styling, velvet physics, progress meters
├── images/
│   ├── campus-demo.jpg     # Royalty-free campus architecture photo
│   └── institute-logo.svg  # High-definition vector emblem medallion
├── js/
│   └── launcher.js         # Countdown, 10s auto-redirect, fireworks, Web Audio
├── index.html              # Ceremonial launcher markup
├── .gitignore
└── README.md
```

---

## 🚀 Quick Start (Local Run)

Simply open `index.html` in any web browser or run a lightweight local server:
```bash
# Python
python -m http.server 5500

# Node.js
npx serve .
```
Navigate to `http://localhost:5500`.

To launch directly to any website:
```
http://localhost:5500/?url=https://example.com
```

---

## ⚙️ Customization

Edit the `CONFIG` object in `js/launcher.js`:
- `college`: Institutional title
- `siteUrl`: Target website URL
- `countdownSeconds`: Pre-launch timer duration
- `autoRedirectSeconds`: Fireworks celebration duration before auto-redirect (default: `10`)
- `sound`: Default audio state (`true`/`false`)
- `currentTheme`: Default velvet curtain color (`crimson`, `navy`, `emerald`, `obsidian`)
