function loadImage(src) {
    var img = new Image();
    img.src = src;
    return img;
}
function createAudio(src) {
    var audio = document.createElement('audio');
    audio.volume = 1;
    //audio.loop   = options.loop;
    audio.src = src;
    audio.playbackRate = 4;
    return audio;
}
const loadFont = () => {
    const font = new FontFace('PixelFont', 'url(./font/3-by-5-pixel-font.ttf)');
    font.load().then((loadedFont) => {
        document.fonts.add(loadedFont);
        ctx.font = "8px 'PixelFont'";
    });
};

loadFont();

function drawPixelText(text, x, y, outline, color="black") {
    ctx.imageSmoothingEnabled = false; 
    ctx.textBaseline = 'top';
    ctx.fillStyle = color; 
    
    charLength = text.toString().length;
    if (charLength == 2) {
        x -= 4
    }

    if (outline) {
        ctx.fillStyle = "#ffffff";
        ctx.lineWidth = 2;
        ctx.strokeStyle = 'black';
        ctx.strokeText(text, x, y);
    }

    ctx.fillText(text, x, y);
}

const canvas = document.getElementById('canvas');

const ctx = canvas.getContext('2d');
let scalingFactor = 4;
canvas.width =175 * scalingFactor;
canvas.height = 175 * scalingFactor;
ctx.scale(scalingFactor, scalingFactor);

let width = canvas.width / scalingFactor
let height = canvas.height / scalingFactor
const halfWidth = width / 2;
const halfHeight = height / 2;

ctx.imageSmoothingEnabled= false

function vec2(x, y) {
    return {x: x, y: y};
}

let bgTileSet = loadImage("./assets/tile atlas.png")
let bgTileSetCols = 8;
let bgTileSetRows = 3;
const tileSize = 8;

const map = [
    4,2,3,2,3,2,3,2,3,2,3,2,3,5,
    6,0,0,0,0,0,0,0,0,0,0,0,0,7,
    6,0,0,0,0,0,0,0,0,0,0,0,0,7,
    6,0,0,0,0,0,0,0,0,0,0,0,0,7,
    6,0,0,0,0,0,0,0,0,0,0,0,0,7,
    6,0,0,0,0,0,0,0,0,0,0,0,0,7,
    6,0,0,0,0,0,0,0,0,0,0,0,0,7,
    6,0,0,0,0,0,0,0,0,0,0,0,0,7,
    6,0,0,0,0,0,0,0,0,0,0,0,0,7,
    6,0,0,0,0,0,0,0,0,0,0,0,0,7,
    6,0,0,0,0,0,0,0,0,0,0,0,0,7,
    6,0,0,0,0,0,0,0,0,0,0,0,0,7,
    6,0,0,0,0,0,0,0,0,0,0,0,0,7,
    6,0,0,0,0,0,0,0,0,0,0,0,0,7,
    6,0,0,0,0,0,0,0,0,0,0,0,0,7,
    12,14,15,15,15,15,15,15,15,15,15,15,16,13,
]
const gridRows = 15;
const gridCols = 14;
function gameUpdate() {

}

function gameDraw() {
    // BG
    //ctx.drawImage(bgTileSet, 0, 0, tileSize, tileSize, 0, 0, tileSize, tileSize)
    //https://github.com/pothonprogramming/pothonprogramming.github.io/blob/master/content/rabbit-trap/03/game-03.js
    for (let index = map.length - 1; index > -1; -- index) {
        let value = map[index] - 1;
        let source_x =           (value % bgTileSetCols) * tileSize;
        let source_y = Math.floor(value / bgTileSetCols) * tileSize;
        let destination_x =           (index % gridCols) * tileSize;
        let destination_y = Math.floor(index / gridCols) * tileSize;
  
        ctx.drawImage(bgTileSet, source_x, source_y, tileSize, tileSize, destination_x, destination_y, tileSize, tileSize);
    }
}

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    window.requestAnimationFrame(gameLoop);
    
    gameUpdate();
    gameDraw()
}

gameLoop();