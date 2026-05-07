# Princess Adventure

A romantic mini-game website built with React + Vite.

## How to run it

1. Open this folder in Visual Studio Code.
2. Open the terminal inside VS Code.
3. Run:

```bash
npm install
npm run dev
```

4. Open the local URL that Vite shows you.

## Replace your assets

Put your real images in:

```txt
public/images/
```

Use these exact file names or update the names inside the components:

```txt
welcome1.jpg
welcome2.jpg
welcome3.jpg
boots.jpg
song1.jpg
song2.jpg
my-cheek.jpg
me-happy.jpg
```

Put the song in:

```txt
public/music/song.mp3
```

## Customize the song answer

Open:

```txt
src/components/GuessSong.jsx
```

Change this list:

```js
const ACCEPTED_ANSWERS = [
  "song name",
  "nombre de la cancion",
  "nombre de la canción"
];
```

Add the real song name and any alternative spellings you want to accept.

## Notes

The puzzle uses 20 pieces. You tap one piece and then another piece to swap them. This works better than drag-and-drop on phones.
