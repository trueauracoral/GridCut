# GridCut: THE VIDEOGAME

# TODO List
- [X] Draw BG.
- [X] Create a random line generator fpr terain
    - [X] Randomly generate line
        It is based on 4 intervals, just add and subtract from the line based on randomly generated numbers (1,2,3). It will be harder to program than just saying it.
    - [X] Draw it to screen.
    - [X] Figure out how to use tileset to work with the random line created
- [X] Make bamboo grow from the top parts of the line on grid
    - [X] Draw starting bamboo points to screen
    - [X] Ability to make specific column of bamboo grow
    - [X] Have specific speed 10%, 20% and 30% or x1,x2,x3
    - [X] Detect when bamboo reaches the top.
- [X] MANA Bar
- [ ] Create system to spawn and give the players the tools
    - [ ] Functioning mana bar that gives the player mana over time
- [ ] Create tools
    - [ ] Circle
    - [ ] Triangle
    - [ ] Square
    - [ ] Line
    - [ ] Ability to move tools.
    - [ ] Make scaling and rotating
# Wishes
- [ ] Create programatic stage based on variable width and height

# Devlog
## 6/26/25
Came up with the idea for this game while lying in bed. I hope it is going ot be as fun as I imagine gameplay wise. It would be a bummer if it isn't
## 6/27/25
Thought more about game and how it would work and started drawing assets
## 6/28/25 
Drew a significant amount of assets for the game
## 6/29/25
Wrote up a pitch/game design document for this game and showed it to people. And decided on a fix for how you could just constantly cut from the bottom. SO the terrain will need to be randomly generated with a curve and a low point or something. made easy tileset for that. Programming that would be the hard part.
## 6/30/25
Created a tileset that should supposedly work for the random terrain generation I thought of yesterday and created TODO list.
## 7/2/25
Made boiler plate code by deleting a bunch of stuff from the previous project (golf solitaire). Hopefuly I will use that boilerplate in the future. I also exported into an image file the main tiles i need to complete the first thing on my todo list which is the generatable width and height arena for the game. I have an idea of how to make code to read the tileset. Ideally name to index.
I also setup github pages.
## 7/5/25
Drew background tiles to the js canvas using tile atlas referenced this code:
https://github.com/pothonprogramming/pothonprogramming.github.io/blob/master/content/rabbit-trap/03/game-03.js

It's not dynamic enough if I want to be able to change size. I guess that's not feasable at my skill level. I will just need to fiddle with it till I find a size that works well enough.
The drawing of the dirt blocks will need to use some other technique.
## 7/6/25 
Figured out line generation and drew temporary boxes to the screen. Implemented automatic tiling.
## 7/7/25
Cleaned out my tilemap to not have the blocks with outline. ALso drew elixer bar to the screen (functionality not implemented). I think this game should not try to be perfection I cannot invest too much time into this if it's not actually going to be fun.
The grid is my guide and will lead me in the development of this game. If gridcut is fun then gridcut 2 will need to make less heavy use of grid. The grid and this game is a tribute to other puzzle games I like, like wario's woods, yoshi's cookie, dr. mario, puyo puyo, puzzle challenge, gunpey. Through hardware restrictions come ease of code.
## 7/10/25
Finished all bamboo stuff. I can set growth rate they don't all grow at the same rate. The issue is framerate and all that.


# Inspiration
- Wario's Woods
- Yoshi's Cookie
- Dr. mario
- Tetris
- Puyo Puyo
- Puzzle Challenge
- Gunpey