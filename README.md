# Dress-Up Game
## About
This is a game where you can choose the outfit and customize the appearance of your character. Currently, there is only a female option for customization.

## Important Information
### URL to webpage (for those who don't want to download packages)

### Applications Needed
- Node.js
- VSCode (or any IDE)
- Google Chrome (or any browser)

### Packages Needed
- Express.js (The libraries and dependencies can be found in package-lock.json)

- To install Express.js, navigate to the project directory, and run the following command prompts (for Windows, use npm.cmd instead of npm)
    - npm init -y
    - npm install express

- More command prompts if necessary
    - npm install ejs

### How to run webpage (if you're using Node.js)
- Navigate the project directory
- Type "node server.js" if you are only interacting
- Type "npm run dev" if you want to continuously edit this webpage (for Windows, use npm.cmd instead of npm)
- Go on your browser and type "localhost:3000" in the search bar

### Compatability/Accessibility
- I have only tested this webpage on a Google Chrome Browser. It is possible that it won't be compatible with other browsers

### Image Attributions
- All images are drawn by me on [Pixlart](https://www.pixilart.com/)

### Audio Attributions
- [Loop003-pop.wav (Background music)](https://freesound.org/s/18974/) by bebeto
- [Button-Click-2.wav (Button SFX)](https://freesound.org/s/506053/) by Mellau

### Font Attributions
- [Minecraft.ttf](https://www.dafont.com/minecraft.font) by Crafton Gaming

## File Overview
&larr; README.md
- This file currently, shows details about how this webpage works

&larr; index.ejs
- HTML file that shows content of the webpage

&larr; style.css
- CSS file that customizes that content of the webpage

&larr; script.js
- Javascript file that adds interaction to the webpage and listens for events

&larr; server.js
- Javascript file that connects the code to server

&larr; package.json, package-lock.json
- Shows the necessary libraries/packages/dependencies for Node.js to run Express.js