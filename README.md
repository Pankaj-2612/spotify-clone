#Spotify Clone
##Spotify Clone is a fully responsive web music player built with HTML, CSS, and JavaScript. It mimics core Spotify features on the client side, allowing users to play and control songs stored locally in the songs2 folder. The app offers playlist navigation by folder, play/pause controls, next/previous track buttons, and a clickable seek bar. The footer playbar displays the current song title and elapsed time.

#Features
##Play/Pause: Click the Play/Pause button or a song title to start or stop playback.
##Next/Previous: Use the Next and Previous buttons to skip tracks in the current folder.
##Seek Bar: Click or drag the progress bar to jump to any point in the current track.
##Folder Navigation: Click a folder name to expand its list of songs, then select a song to play.
##Track Info: The footer shows the currently playing song’s name and elapsed/total time.
##Responsive Design: The interface adapts gracefully to different screen sizes and devices (mobile, tablet, desktop).
##Installation
##Clone the repository:

#bash
##Copy
###git clone https://github.com/Pankaj-2612/spotify-clone.git
###(If the repo URL is not yet set up, replace spotify-clone with the actual repository name.)

#Navigate into the project directory:

##bash
###Copy
###cd spotify-clone
###Run locally:

#Simply open index.html in your web browser.
##Optional: Use a local HTTP server (e.g., npx serve or python -m http.server) to host the files and open http://localhost:PORT/ in a browser.
#Usage
##Play music: Click on a song title in the list to load and play it. The Play/Pause button toggles playback of the current track.
##Pause/Resume: Clicking the Play/Pause button (or the song title) will pause or resume the song.
##Skip tracks: Click the Next arrow to play the next song, or the Previous arrow to go to the prior song in the folder.
##Seeking: Click or drag on the progress bar to move to a specific time in the song.
##Adding new songs: To include additional tracks, place the audio file (e.g. MP3) into a subfolder of songs2. Then update the JavaScript playlist array in js2/script.js. For example, add an object like:

###js
Copy
const songs = [
  {
    songName: "New Track Title",
    filePath: "songs2/new-folder/new-track.mp3",
    coverPath: "img/new-cover.jpg" // (if using cover images)
  },
  // ... other songs ...
];
Make sure the filePath correctly reflects the songs2 subfolder and filename. This approach follows the existing code structure (see js2/script.js for format). Ensure your audio files are in compatible formats (MP3, WAV, OGG).

#Project Structure
##The repository is organized as follows:

File/Folder	Description
index.html	Main HTML file with the app interface.
css/	Stylesheets for layout and design.
img/	Image assets (e.g. cover art, icons).
js2/	JavaScript files (player logic and controls).
songs2/	Audio files organized by folder.
README.md	This documentation file.

#Feature-to-File Mapping
##Feature	Implemented In
Play/Pause, Next/Prev	js2/script.js
Clickable Seek Bar	js2/script.js
Display song/time info	index.html, js2
Folder and song list UI	index.html, js2
Styling and layout	css/
Cover art and icons	img/ (if used)

#Troubleshooting
Song won’t play: Verify the file path in js2/script.js matches the location in songs2/. Ensure the audio format is supported (e.g. .mp3, .wav, .ogg).
Controls not working: Check browser console for errors in script.js. Make sure all JS files are correctly linked in index.html and that folder/file names match exactly (case-sensitive).
UI issues or layout broken: Confirm css/ files are loaded. Try refreshing the page or clearing cache. Test in a modern browser (Chrome, Firefox, Edge).
No sound but controls work: Ensure your system volume is up and browser isn’t muted for the page.

#Contributing
Contributions are welcome! To contribute:

Fork the repository and create a new branch for your changes.
Submit a Pull Request with a clear description of your changes.
Issue Tracker: Report bugs or request features via GitHub Issues.
Please follow standard GitHub workflow and coding style. You may refer to the Contributor Covenant for contributing guidelines.



#Author / Contact
##Author: Pankaj-2612
##Email: pankajswami81680@gmail.com
##Feel free to reach out with any questions or feedback. Enjoy using the Spotify Clone!
