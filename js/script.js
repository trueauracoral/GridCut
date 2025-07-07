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
//https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
function generateRandomInteger(min, max) {
    return Math.floor(min + Math.random()*(max - min + 1))
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
    [ 4, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 5 ],
    [ 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7 ],
    [ 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7 ],
    [ 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7 ],
    [ 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7 ],
    [ 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7 ],
    [ 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7 ],
    [ 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7 ],
    [ 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7 ],
    [ 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7 ],
    [ 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7 ],
    [ 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7 ],
    [ 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7 ],
    [ 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7 ],
    [ 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7 ],
    [12,14,15,15,15,15,15,15,15,15,15,15,16,13],
];

const gridRows = map.length;
const gridCols = map[0].length;
let hills = gridCols - 2;

// I think at this point it has to be hardcoded
// the random terrain generation because I don't
// know how to make random hills regardless of size.
// It's very unfortunate but it will have to do.
let hillNums = []
let sections = {
    0: [0,5],
    1: [-3,-2],
    2: [-1,2],
    3: [0,1],
}
for (let section = 0; section < Object.keys(sections).length; section++) {
    let range = sections[section];
    for (var column = 0; column < 3; column++) {
        hillNums.push(generateRandomInteger(range[0], range[1]));
    }
}
if (generateRandomInteger(1,2) == 1) {
    hillNums = hillNums.reverse();
}
console.log(hillNums);

let hillY = 14;
map[hillY][1] = 23;

for (let column = 1; column <= hillNums.length; column++) {
    let hillLength = hillNums[column - 1];
    console.log(`HillLength: ${hillLength}`);
    console.log(`Column: ${column}`);
    console.log(`Current: ${hillY}, ${column}`);

    if (hillLength == 0) {
        map[hillY][column] = 23;
        console.log(hillY + " " + column);
    } else if (hillLength > 0) {
        for (let height = 0; height < hillLength; height++) {
            if (hillY > 10) {
                hillY -= 1;
            }
            map[hillY][column] = 23;
            console.log(hillY + " " + column);
        }
    } else if (hillLength < 0) {
        for (let height = 0; height > hillLength; height--) {
            if (hillY < 14) {
                hillY += 1;
            }
            map[hillY][column] = 23;
            console.log(hillY + " " + column);
        }
    }
}

function gameUpdate() {

}

function gameDraw() {
    for (let row = 0; row < gridRows; row++) {
        for (let col = 0; col < gridCols; col++) {
            let value = map[row][col] - 1;
            let source_x = (value % bgTileSetCols) * tileSize;
            let source_y = Math.floor(value / bgTileSetCols) * tileSize;
            let destination_x = col * tileSize;
            let destination_y = row * tileSize;

            ctx.drawImage(
                bgTileSet,
                source_x, source_y,
                tileSize, tileSize,
                destination_x, destination_y,
                tileSize, tileSize
            );
        }
    }
}

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    window.requestAnimationFrame(gameLoop);
    
    gameUpdate();
    gameDraw()
}

gameLoop();