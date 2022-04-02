# Pre-work - _Memory Game_

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program.

Submitted by: **Sriyans Rauniyar**

Time spent: **11** hours spent in total

Link to project: **https://glitch.com/edit/#!/lumbar-automatic-lathe**

## Required Functionality

The following **required** functionality is complete:

- [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
- [x] "Start" button toggles between "Start" and "Stop" when clicked.
- [x] Game buttons each light up and play a sound when clicked.
- [x] Computer plays back sequence of clues including sound and visual cue for each button
- [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess.
- [x] User wins the game after guessing a complete pattern
- [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

- [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
- [x] Buttons use a pitch (frequency) other than the ones in the tutorial
- [x] More than 4 functional game buttons
- [x] Playback speeds up on each turn
- [x] Computer picks a different pattern each time the game is played
- [x] Player only loses after 3 mistakes (instead of on the first mistake)
- [x] Game button appearance change goes beyond color (e.g. add an image)
- [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
- [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] Changing the alignment of the text and button on the screen
- [x] The start/end button and the game buttons have different styling


## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:


**Gif1: Game interface is exactly as asked and the Start button toggles to end when prompted**
![](https://i.imgur.com/V4AuPzx.gif)

**Gif2: THe game buttons light up and play sound when clicked i.e. all game buttons are functioning**
![](https://i.imgur.com/1LJDP3o.gif)

**Gif3: Computer plays back the sound and visual clue for each button**
![](https://i.imgur.com/YsV6rtu.gif)

**Gif4: Play progresses to next turn after a correct guess**
![](https://i.imgur.com/nlj0Vay.gif)

**Gif4: Speed increases after each progress**
![](https://i.imgur.com/Aeg5UD0.gif)

**Gif6: Player wins the game after guessing a complete pattern**
![](https://i.imgur.com/GfHspGg.gif)

**Gif7: User loses the game only after three mistakes. After each mistake, the last pattern is repeated back.**
![](https://i.imgur.com/EZO6SjD.gif)

**Gif8: When stop button is prompted in-between a running game, the game is ended, the speed is reset, and the number of mistakes is also reset.**
![](https://i.imgur.com/H4gHmvH.gif)

## Reflection Questions

1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.
   
   MDN CSS Docs - https://developer.mozilla.org/en-US/docs/Web/CSS
   MDN HTML Docs - https://developer.mozilla.org/en-US/docs/Web/HTML
   MDN JavaScript Docs - https://developer.mozilla.org/en-US/docs/Web/JavaScript
   W3Schools CSS Docs - https://www.w3schools.com/w3css/defaulT.asp

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)

   While attempting the optional features for this project, specifically implementing the randomized 
   pattern every time the game is played, my game broke completely when I implemented it the first 
   time using Random. Essentially, I wasn't randomizing the array itself but was randomizing the integers that represented the index value of the array. As I used the index values to pick elements from the array, the loop threw an error that I could not understand. I had to go back to VSCode and run debugger to understand what was going wrong and where the code broke exactly. The issue was with the integer representation of the indices. Realizing where the issue was, I went back to MDN Documentation, understood if there is a better way to implement it, and changed the approach. Rather than randomizing the indices and fetching corresponding elements from the 
   array, using the documentation, I randomized the array itself every time the game started.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)

   For me, this is the first time I tried a full-fledge interactive web development project. As much as I had fun doing it, I am even more excited to know how can I take this forward and open an entire realm of possibilities. I did some quick research on the internet and realized that there are other frameworks like JavaScript that extends the same functionality. I am curious to know which one is the best for a beginner to start learning from. What are the basic coding standards one has to adhere when working with clients? How does automation work in websites, specially automated responses and emails? How do you optimize a website/webpage for smoother and faster load-time? How can you publish games likes these on the internet and manage a dashboard of players who might be interested in playing the game for a longer time? Where do I start and how do I learn? Do I need to have a mentor or can I start on my own? 

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)

   More than a few hours to work on this project, if I had a better understanding of how JavaScript works, I would have implemented a few additional features starting from the very screen that appears as the user starts the game. The game would ask the user their name and personalize the text. Then, as the level moves forward, I would have a text printing out the level the player is currently in. As the level increase, so does the speed and the number of buttons. I would also love to add a leaderboard where we can temporarily store the highest score unless the game is closed. In terms of functionality, I would have worked to clean the code a bit and somehow learn how to module the repetitive codes. 

## Interview Recording URL Link

[My 5-minute Interview Recording](your-link-here)

## License

    Copyright [Sriyans Rauniyar]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
