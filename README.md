# Grand Ceremonial Curtain Launcher & Inauguration Portal 🎭✨

Official digital inauguration launcher and velvet curtain reveal experience created for **Sardar Vallabhbhai Patel Arts & Science College, Ainpur** (*Affiliated to KBC NMU Jalgaon, NAAC Reaccredited 'B' Grade*).

Designed for official launch ceremonies, stage presentations, and digital inauguration events.

---

## 🌟 Key Features

- **Realistic Velvet Curtains & Pelmet Valance**: Deep fabric folds, golden fringes, and realistic curtain opening animations.
- **Audio Sound Effects**: Built-in Web Audio synthesis for velvet curtain friction and celebratory fireworks fanfare.
- **Dual Canvas Celebration Engine**: Smooth particle fireworks and confetti volleys overlaid on the campus background photo.
- **Interactive Ceremonial Countdown**: Dynamic timer with manual **"Launch Website"** override button.
- **4 Luxury Velvet Color Themes**:
  - 🔴 **Regal Crimson Velvet** (Default)
  - 🔵 **Oxford Midnight Navy**
  - 🟢 **Academic Emerald**
  - ⚫ **Royal Obsidian**
- **Ceremony Controls Bar**:
  - **Replay** (Keyboard shortcut: `R`): Instantly close curtains and reset the ceremony.
  - **Curtain Palette Switcher**: Toggle theme swatches in real-time.
  - **Sound Toggle**: Mute / unmute audio effects.
  - **Direct Gateway Link**: Direct link to the live college portal.
- **Zero External Dependencies**: Pure vanilla HTML5, CSS3, and JavaScript — no build tools, npm packages, or bundlers required.

---

## 📁 Repository Structure

```
├── css/
│   └── launcher.css        # Responsive styling, velvet physics, keyframe animations
├── images/
│   ├── Clg.jpeg            # High-resolution sunny campus photograph
│   └── college-logo.png    # Official college seal & emblem medallion
├── js/
│   └── launcher.js         # Countdown logic, fireworks/confetti engine, audio synthesis
├── index.html              # Ceremonial launcher markup
└── README.md
```

---

## 🚀 Quick Start (Local Run)

Simply open `index.html` in any modern web browser:
```bash
# Using Python
python -m http.server 5500

# Using Node / npx
npx serve .
```
Then navigate to `http://localhost:5500`.

---

## ⚙️ Customization

Edit the `CONFIG` object at the top of `js/launcher.js` to modify:
- `college`: Institutional title
- `siteUrl`: Live website URL destination
- `countdownSeconds`: Countdown timer duration
- `sound`: Enable/disable audio by default
- `currentTheme`: Default velvet curtain color (`crimson`, `navy`, `emerald`, `obsidian`)

---

## 🏛️ Institution
**Ainpur Parisar Shikshan Prasarak Mandal's**  
**Sardar Vallabhbhai Patel Arts & Science College, Ainpur**  
*Tal. Raver, Dist. Jalgaon, Maharashtra - 425507*  
*॥ विद्यया विन्दते अमृतम् ॥*
