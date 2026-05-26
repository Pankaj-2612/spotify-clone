# Spotify Clone

## Overview

Spotify Clone is a fully responsive web music player built using HTML, CSS, and JavaScript.  
It mimics core Spotify features on the client side, allowing users to play and control songs stored locally in the `songs2` folder.

The app includes:

- Playlist navigation by folder
- Play/Pause controls
- Next/Previous track buttons
- Clickable seek bar
- Responsive UI for mobile, tablet, and desktop

The footer playbar displays the current song title and elapsed time.

---

# Features

## Play / Pause
Click the Play/Pause button or a song title to start or stop playback.

## Next / Previous
Use the Next and Previous buttons to skip tracks in the current folder.

## Seek Bar
Click or drag the progress bar to jump to any point in the current track.

## Folder Navigation
Click a folder name to expand its list of songs, then select a song to play.

## Track Info
The footer shows the currently playing song name and elapsed/total time.

## Responsive Design
The interface adapts gracefully to different screen sizes and devices.

---

# Installation

## Clone the Repository

```bash
git clone https://github.com/Pankaj-2612/spotify-clone.git
```

> Replace the repository URL if needed.

## Navigate Into the Project Folder

```bash
cd spotify-clone
```

## Run Locally

Simply open `index.html` in your browser.


# Usage

## Play Music
Click on any song title to load and play it.

## Pause / Resume
Use the Play/Pause button to pause or resume the current track.

## Skip Tracks
Use the Next and Previous buttons to switch songs.

## Seek Within Song
Click or drag the progress bar to move to a specific timestamp.

---

# Adding New Songs

To add new tracks:

1. Place audio files inside a subfolder of `songs2`
2. Update the playlist array in `js2/script.js`

Example:

```js
const songs = [
  {
    songName: "New Track Title",
    filePath: "songs2/new-folder/new-track.mp3",
    coverPath: "img/new-cover.jpg"
  }
];
```

## Important Notes

- Ensure `filePath` is correct
- Supported formats:
  - MP3

---

# Project Structure

```bash
spotify-clone/
│
├── index.html        # Main HTML file
├── css/              # Stylesheets
├── img/              # Images and icons
├── js2/              # JavaScript logic
├── songs2/           # Audio files
└── README.md         # Documentation
```

---

# Feature-to-File Mapping

| Feature | Implemented In |
|--------|----------------|
| Play/Pause Controls | `js2/script.js` |
| Next/Previous Buttons | `js2/script.js` |
| Seek Bar | `js2/script.js` |
| Song/Time Display | `index.html`, `js2/` |
| Playlist UI | `index.html`, `js2/` |
| Styling/Layout | `css/` |
| Cover Art/Icons | `img/` |

---

# Troubleshooting

## Song Won’t Play

- Verify the file path in `js2/script.js`
- Ensure the audio format is supported

## Controls Not Working

- Check browser console for JavaScript errors
- Ensure all JS files are linked correctly
- Verify filenames and folder names are correct

## UI Issues

- Confirm CSS files are loading
- Refresh the page or clear cache
- Test in modern browsers like:
  - Chrome
  - Firefox
  - Edge

## No Sound

- Check system volume
- Ensure browser audio is not muted

---

# Contributing

Contributions are welcome!

## Steps to Contribute

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Submit a Pull Request

## Reporting Issues

Use GitHub Issues to:

- Report bugs
- Suggest features
- Share improvements

---

# Author

## Pankaj Swami

- GitHub: [Pankaj-2612](https://github.com/Pankaj-2612)
- Email: pankajswami81680@gmail.com

Feel free to reach out with questions or feedback.

---

# License

This project is for educational purposes only.

---

# Enjoy Using Spotify Clone 🎵
