# My Buddy: install on your phone

Files: index.html, sw.js, manifest.webmanifest, icon-192.png, icon-512.png, icon-maskable-512.png

## 1. Put it online (free, pick one)

### Netlify (easiest)
1. Open app.netlify.com/drop and sign in (free).
2. Drag the whole `my-buddy` folder (or its zip) onto the page.
3. You get a link like https://something.netlify.app. Rename it under Site settings if you like.

### GitHub Pages
1. Create a free GitHub account, then a new public repository named `my-buddy`.
2. Upload all the files to the repository root (Add file > Upload files).
3. Settings > Pages > Source: "Deploy from a branch", Branch: main, folder: / (root), Save.
4. After a minute your app is at https://YOUR-NAME.github.io/my-buddy/

## 2. Install on Android
1. Open the link in Chrome.
2. Menu (three dots) > Install app / Add to Home screen.
3. Open My Buddy from its home-screen icon. It runs full screen and works offline after the first load.

(iPhone: open in Safari > Share > Add to Home Screen.)

## 3. Your data
- Entries are stored on the phone only. Clearing browser/site data or changing phones erases them.
- Tap Backup (top right) > Export backup to save a .json file. Import backup restores it, including on a new phone.
- Install and use the app from the same link every time, because data belongs to that address.

## Updating later
Edit index.html, re-upload, and change VERSION in sw.js (for example to "my-buddy-v2") so phones fetch the new version.
