# skg837906-tech - Website Opener Extension

Simple and lightweight Chrome Extension to open your favorite website in one click.

![License](https://img.shields.io/badge/license-GPL--3.0-green)
![Chrome](https://img.shields.io/badge/browser-Chrome-blue)

## 📁 Files in this Repo
- `Popup.html` - Extension popup UI
- `Popup.js` - Website URL logic
- `Markdown.code` - Markdown template
- `LICENSE` - GPL-3.0 License
- `.gitignore` - Git ignore file

## 🚀 How It Works
This extension uses Manifest V3. When you click the extension icon, it opens the URL defined in `Popup.js`.

Change URL in `Popup.js`:
```javascript
chrome.tabs.create({ url: "https://www.google.com" });
