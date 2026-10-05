# Grand Ceremonial Velvet Curtain Launcher & Inauguration Portal 🎭✨

A universal, 100% generic digital inauguration launcher and velvet curtain reveal experience designed for stage presentations, ceremonies, and website inaugurations.

---

## 🌟 Key Features

- **Theatrical Curtain Opening (From Below)**: The grand velvet curtain rises smoothly upwards from the bottom into the top pelmet valance (classic stage fly-curtain reveal).
- **Continuous 10-Second Fireworks Celebration**: Multi-stage rocket volleys, peony blossoms, crackles, and confetti showers burst continuously across the backdrop.
- **Hands-Free 10-Second Auto-Redirect**:
  - Live progress meter counts down: `Redirecting to official website in 10 seconds...`
  - **Zero clicks needed**: Smooth radial flash wipe automatically transitions the browser to the destination website after exactly 10 seconds.
  - Manual **"Enter Website Now"** button is also available for instant navigation without waiting.
- **Audio Sound Effects**: Built-in Web Audio synthesis for velvet curtain friction, celebratory fanfare, and chime effects (zero external audio files).
- **100% Generic & Royalty-Free Assets**:
  - Royal golden universal digital portal medallion (`images/portal-logo.svg`).
  - High-resolution architectural campus photograph (`images/campus-demo.jpg`).
- **Dynamic URL Redirection via Query String**:
  - Pass any target URL directly in the browser address bar:  
    `index.html?url=https://your-custom-website.com`
- **4 Luxury Velvet Color Themes**:
  - 🔵 **Oxford Midnight Navy** (Default)
  - 🔴 **Regal Crimson Velvet**
  - 🟢 **Academic Emerald**
  - ⚫ **Royal Obsidian**
- **Ceremony Controls Bar**:
  - **Replay** (Keyboard shortcut: `R`): Instantly drops curtain and resets the ceremony.
  - **Curtain Palette Switcher**: Toggle theme swatches in real-time.
  - **Sound Toggle**: Mute / unmute audio effects.
  - **Live Site Button**: Direct gateway to destination URL.
- **Zero External Dependencies**: Pure vanilla HTML5, CSS3, and JavaScript — no build tools or package managers required.

---

## 📁 Repository Structure

```
├── css/
│   └── launcher.css        # Responsive styling, upward curtain physics, progress meters
├── images/
│   ├── campus-demo.jpg     # Royalty-free campus architecture photo
│   └── portal-logo.svg     # Universal 24K gold digital portal medallion
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
http://localhost:5500/?url=https://stage.whitecodetech.com/
```

---

## ⚙️ Customization

Edit the `CONFIG` object in `js/launcher.js`:
- `siteUrl`: Target website URL (default: `https://stage.whitecodetech.com/`)
- `countdownSeconds`: Pre-launch timer duration (default: `5`)
- `autoRedirectSeconds`: Fireworks celebration duration before auto-redirect (default: `10`)
- `sound`: Default audio state (`true`/`false`)
- `currentTheme`: Default velvet curtain color (`navy`, `crimson`, `emerald`, `obsidian`)
