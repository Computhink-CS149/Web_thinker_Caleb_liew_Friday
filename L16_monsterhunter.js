const CANVAS_WIDTH = 960;
const CANVAS_HEIGHT = 600;
const FLOOR_Y = 560;
const PLAYER_START_X = 90;
const PLAYER_START_Y = FLOOR_Y - 70;
const PLAYER_COLORS = {
  outline: '#171329',
  body: '#31d7d1',
  highlight: '#f5f36d',
  shadow: '#168a9b'
};
const LEVELS = [
  {
    name: 'Outskirts',
    width: 2700,
    exitX: 2540,
    skyColor: '#16122c',
    skylineColor: '#29204d',
    platformColor: '#493b78',
    platforms: [
      { x: 690, y: 480, width: 180, height: 24 },
      { x: 1080, y: 445, width: 190, height: 24 },
      { x: 1480, y: 490, width: 190, height: 24 },
      { x: 1880, y: 450, width: 190, height: 24 }
    ],
    monsters: [
      { x: 300 }, { x: 460 }, { x: 620, platform: 0 }, { x: 900 },
      { x: 1010, platform: 1 }, { x: 1260 }, { x: 1430, platform: 2 },
      { x: 1600 }, { x: 1710 }, { x: 1830, platform: 3 },
      { x: 2140 }, { x: 2350 }
    ]
  },
  {
    name: 'Abandoned City',
    width: 3100,
    exitX: 2940,
    skyColor: '#29142f',
    skylineColor: '#45204c',
    platformColor: '#753c78',
    platforms: [
      { x: 570, y: 495, width: 150, height: 24 },
      { x: 910, y: 450, width: 180, height: 24 },
      { x: 1300, y: 490, width: 220, height: 24 },
      { x: 1720, y: 440, width: 170, height: 24 },
      { x: 2110, y: 500, width: 200, height: 24 },
      { x: 2500, y: 455, width: 180, height: 24 }
    ],
    monsters: [
      { x: 300 }, { x: 420 }, { x: 510, platform: 0 }, { x: 760 },
      { x: 870, platform: 1 }, { x: 1100 }, { x: 1260, platform: 2 },
      { x: 1450 }, { x: 1510 }, { x: 1680, platform: 3 }, { x: 1900 },
      { x: 2040, platform: 4 }, { x: 2220 }, { x: 2470, platform: 5 },
      { x: 2750 }
    ]
  },
  {
    name: 'The Ruins',
    width: 3500,
    exitX: 3340,
    skyColor: '#102d36',
    skylineColor: '#17424e',
    platformColor: '#23717a',
    platforms: [
      { x: 510, y: 470, width: 190, height: 24 },
      { x: 850, y: 440, width: 160, height: 24 },
      { x: 1180, y: 500, width: 220, height: 24 },
      { x: 1550, y: 465, width: 190, height: 24 },
      { x: 1900, y: 430, width: 180, height: 24 },
      { x: 2240, y: 495, width: 220, height: 24 },
      { x: 2630, y: 450, width: 170, height: 24 },
      { x: 3000, y: 490, width: 190, height: 24 }
    ],
    monsters: [
      { x: 300 }, { x: 450, platform: 0 }, { x: 650 }, { x: 790, platform: 1 },
      { x: 1000 }, { x: 1100, platform: 2 }, { x: 1340 }, { x: 1470, platform: 3 },
      { x: 1690 }, { x: 1820, platform: 4 }, { x: 2070 }, { x: 2180, platform: 5 },
      { x: 2390 }, { x: 2560, platform: 6 }, { x: 2760 }, { x: 2950, platform: 7 },
      { x: 3100 }, { x: 3210 }, { x: 3300 }
    ]
  },
  {
    name: 'Neon Grid',
    width: 3900,
    exitX: 3740,
    skyColor: '#17102c',
    skylineColor: '#30204f',
    platformColor: '#9b3478',
    platforms: [
      { x: 480, y: 485, width: 170, height: 24 },
      { x: 820, y: 445, width: 190, height: 24 },
      { x: 1160, y: 500, width: 190, height: 24 },
      { x: 1510, y: 455, width: 210, height: 24 },
      { x: 1870, y: 490, width: 190, height: 24 },
      { x: 2220, y: 440, width: 200, height: 24 },
      { x: 2580, y: 500, width: 200, height: 24 },
      { x: 2940, y: 455, width: 190, height: 24 },
      { x: 3310, y: 485, width: 210, height: 24 }
    ],
    monsters: [
      { x: 280 }, { x: 400 }, { x: 450, platform: 0 }, { x: 700 },
      { x: 790, platform: 1 }, { x: 980 }, { x: 1120, platform: 2 },
      { x: 1320 }, { x: 1490, platform: 3 }, { x: 1700 },
      { x: 1830, platform: 4 }, { x: 2050 }, { x: 2200, platform: 5 },
      { x: 2440 }, { x: 2550, platform: 6 }, { x: 2780 },
      { x: 2910, platform: 7 }, { x: 3130 }, { x: 3280, platform: 8 },
      { x: 3500 }, { x: 3590 }, { x: 3650 }
    ]
  },
  {
    name: 'Final Showdown',
    width: 4300,
    exitX: 4140,
    skyColor: '#31142b',
    skylineColor: '#542143',
    platformColor: '#b63e5d',
    platforms: [
      { x: 500, y: 490, width: 180, height: 24 },
      { x: 850, y: 450, width: 190, height: 24 },
      { x: 1200, y: 500, width: 210, height: 24 },
      { x: 1560, y: 445, width: 190, height: 24 },
      { x: 1910, y: 490, width: 210, height: 24 },
      { x: 2270, y: 445, width: 190, height: 24 },
      { x: 2630, y: 500, width: 210, height: 24 },
      { x: 2990, y: 450, width: 190, height: 24 },
      { x: 3350, y: 495, width: 210, height: 24 },
      { x: 3720, y: 450, width: 200, height: 24 }
    ],
    monsters: [
      { x: 260 }, { x: 390 }, { x: 470, platform: 0 }, { x: 680 },
      { x: 820, platform: 1 }, { x: 1040 }, { x: 1170, platform: 2 },
      { x: 1400 }, { x: 1530, platform: 3 }, { x: 1750 },
      { x: 1880, platform: 4 }, { x: 2110 }, { x: 2240, platform: 5 },
      { x: 2470 }, { x: 2600, platform: 6 }, { x: 2830 },
      { x: 2960, platform: 7 }, { x: 3180 }, { x: 3320, platform: 8 },
      { x: 3550 }, { x: 3690, platform: 9 }, { x: 3880 },
      { x: 3990 }, { x: 4050 }, { x: 4090 }
    ]
  }
];

let player;
let platforms;
let ground;
let monsters;
let bullets = [];
let gameMode = 'title';
let levelIndex = 0;
let facing = 1;
let nextShotFrame = 0;
let invulnerableUntil = 0;
let lives = 3;
let monstersDefeated = 0;
let messageUntil = 0;

function setup() {
  const gameCanvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  gameCanvas.parent('game');
  world.gravity.y = 15;

  platforms = new Group();
  player = new Sprite(PLAYER_START_X, PLAYER_START_Y, 34, 52);
  player.arcadeFacing = 1;
  player.arcadeRecoil = 0;
  player.draw = drawArcadePlayer;
  player.rotationLock = true;
  player.bounciness = 0;
  player.friction = 0.8;

  monsters = new Group();
  loadLevel(0);
  setSceneVisible(false);
}

function createPlatform(x, y, width, height) {
  const platform = new Sprite(x, y, width, height, 'none');
  platform.color = LEVELS[levelIndex].platformColor;
  platform.stroke = '#f5f36d';
  platform.strokeWeight = 3;
  platforms.push(platform);
}

function createMonsters() {
  monsters.deleteAll();
  for (let monsterIndex = 0; monsterIndex < LEVELS[levelIndex].monsters.length; monsterIndex += 1) {
    const spawn = LEVELS[levelIndex].monsters[monsterIndex];
    const platform = spawn.platform === undefined
      ? null
      : LEVELS[levelIndex].platforms[spawn.platform];
    const spawnY = platform
      ? platform.y - platform.height / 2 - 21
      : FLOOR_Y - 21;
    const monster = new Sprite(spawn.x, spawnY, 38, 42);
    monster.arcadeFacing = -1;
    monster.arcadeColor = monsterIndex % 2 === 0 ? '#ff4f87' : '#c64dff';
    monster.arcadeNextJump = frameCount + random(35, 115);
    monster.arcadePreviousBottom = spawnY + monster.height / 2;
    monster.draw = drawArcadeMonster;
    monster.rotationLock = true;
    monster.bounciness = 0;
    monster.friction = 0.8;
    monsters.push(monster);
  }
}

function draw() {
  background(LEVELS[levelIndex].skyColor);

  if (gameMode === 'title') {
    drawOverlay();
    if (kb.presses('enter') || kb.presses(' ')) startGame();
    return;
  }

  if (gameMode === 'playing') {
    updateGame();
  }

  camera.x = constrain(
    player.x,
    CANVAS_WIDTH / 2,
    LEVELS[levelIndex].width - CANVAS_WIDTH / 2
  );
  camera.y = CANVAS_HEIGHT / 2;
  drawWorldDetails();

  if (gameMode === 'playing' && monsters.length === 0 &&
      player.x >= LEVELS[levelIndex].exitX) {
    gameMode = levelIndex === LEVELS.length - 1 ? 'victory' : 'levelComplete';
    player.velocity.x = 0;
    setSceneVisible(false);
  }

  drawOverlay();
}

function startGame() {
  gameMode = 'playing';
  levelIndex = 0;
  lives = 3;
  facing = 1;
  nextShotFrame = 0;
  invulnerableUntil = 0;
  messageUntil = 0;

  loadLevel(levelIndex);
  setSceneVisible(true);
}

function loadLevel(nextLevelIndex) {
  levelIndex = nextLevelIndex;
  const level = LEVELS[levelIndex];

  for (const bullet of bullets) bullet.sprite.remove();
  bullets = [];
  platforms.deleteAll();
  createPlatform(level.width / 2, FLOOR_Y + 28, level.width, 56);
  for (const platform of level.platforms) {
    createPlatform(platform.x, platform.y, platform.width, platform.height);
  }
  if (ground) ground.remove();
  ground = new Sprite(level.width / 2, FLOOR_Y + 28, level.width, 56, STATIC);
  ground.color = level.platformColor;
  ground.stroke = '#f5f36d';
  ground.strokeWeight = 3;
  createMonsters();
  monstersDefeated = 0;
  nextShotFrame = 0;
  invulnerableUntil = 0;
  player.visible = true;
  player.arcadeRecoil = 0;
  player.x = PLAYER_START_X;
  player.y = PLAYER_START_Y;
  player.velocity.x = 0;
  player.velocity.y = 0;
  player.arcadePreviousBottom = player.y + player.height / 2;
  camera.x = CANVAS_WIDTH / 2;
  camera.y = CANVAS_HEIGHT / 2;
}

function updateGame() {
  let moveDirection = 0;
  if (kb.pressing('left')) moveDirection -= 1;
  if (kb.pressing('right')) moveDirection += 1;
  if (moveDirection !== 0) {
    facing = moveDirection;
    player.arcadeFacing = facing;
  }

  player.arcadeRecoil *= 0.88;
  player.velocity.x = moveDirection * 4.3 + player.arcadeRecoil;

  const playerOnPlatform = landOnPlatforms(player);
  const playerOnGround = player.colliding(ground);
  if (kb.presses('up') && (playerOnPlatform || playerOnGround)) {
    player.velocity.y = -8.5;
  }

  if (kb.pressing('space') && frameCount >= nextShotFrame) {
    fireShot();
  }

  player.collides(monsters, takeDamage);
  updateMonsters();
  updateBullets();

  const level = LEVELS[levelIndex];
  player.x = constrain(
    player.x,
    player.width / 2,
    level.width - player.width / 2
  );
  if (monsters.length > 0 && player.x > level.exitX - player.width / 2 - 12) {
    player.x = level.exitX - player.width / 2 - 12;
    player.velocity.x = 0;
    if (frameCount > messageUntil) messageUntil = frameCount + 90;
  }

  player.visible = frameCount >= invulnerableUntil || frameCount % 8 < 4;
  if (lives <= 0) {
    gameMode = 'lose';
    player.visible = true;
    player.velocity.x = 0;
    setSceneVisible(false);
  }
}

function setSceneVisible(isVisible) {
  for (const sceneSprite of allSprites) {
    sceneSprite.visible = isVisible;
  }
}

function fireShot() {
  const bulletSprite = new Sprite(
    player.x + facing * 28,
    player.y - 2,
    18,
    8,
    'none'
  );
  bulletSprite.color = '#ffe27a';
  bulletSprite.stroke = '#fff6c2';
  bullets.push({ sprite: bulletSprite, direction: facing });
  nextShotFrame = frameCount + 16;

  player.arcadeRecoil -= facing * 13;
  player.velocity.x -= facing * 13;
  player.velocity.y -= 0.7;
}

function updateMonsters() {
  for (const monster of monsters) {
    const distance = player.x - monster.x;
    monster.arcadeFacing = Math.sign(distance) || monster.arcadeFacing;
    monster.velocity.x = Math.abs(distance) < 520
      ? Math.sign(distance) * 1.35
      : 0;

    const monsterOnPlatform = landOnPlatforms(monster);
    const monsterOnGround = monster.colliding(ground);
    if (frameCount >= monster.arcadeNextJump && (monsterOnPlatform || monsterOnGround)) {
      monster.velocity.y = -7.5;
      monster.arcadeNextJump = frameCount + random(85, 155);
    }
  }
}

function landOnPlatforms(sprite) {
  const currentBottom = sprite.y + sprite.height / 2;
  const previousBottom = sprite.arcadePreviousBottom ?? currentBottom;
  let landed = false;

  if (sprite.velocity.y >= 0) {
    for (const platform of platforms) {
      const platformTop = platform.y - platform.height / 2;
      const overlapsHorizontally =
        sprite.x + sprite.width / 2 > platform.x - platform.width / 2 &&
        sprite.x - sprite.width / 2 < platform.x + platform.width / 2;
      if (overlapsHorizontally &&
          previousBottom <= platformTop + 1 &&
          currentBottom >= platformTop) {
        sprite.y = platformTop - sprite.height / 2;
        sprite.velocity.y = 0;
        landed = true;
        break;
      }
    }
  }

  sprite.arcadePreviousBottom = sprite.y + sprite.height / 2;
  return landed || isOnTopOfPlatform(sprite);
}

function isOnTopOfPlatform(sprite) {
  const bottom = sprite.y + sprite.height / 2;
  return platforms.some((platform) => {
    const platformTop = platform.y - platform.height / 2;
    const overlapsHorizontally =
      sprite.x + sprite.width / 2 > platform.x - platform.width / 2 &&
      sprite.x - sprite.width / 2 < platform.x + platform.width / 2;
    return overlapsHorizontally &&
      Math.abs(bottom - platformTop) <= 1 &&
      sprite.velocity.y >= 0;
  });
}

function updateBullets() {
  for (let bulletIndex = bullets.length - 1; bulletIndex >= 0; bulletIndex -= 1) {
    const bullet = bullets[bulletIndex];
    bullet.sprite.x += bullet.direction * 11;

    let hitMonster = false;
    for (const monster of monsters) {
      if (!isSpriteOnScreen(monster) || !isSpriteOnScreen(bullet.sprite)) continue;
      const horizontalHit = Math.abs(bullet.sprite.x - monster.x) < 30;
      const verticalHit = Math.abs(bullet.sprite.y - monster.y) < 32;
      if (horizontalHit && verticalHit) {
        monster.remove();
        monstersDefeated += 1;
        hitMonster = true;
        break;
      }
    }

    if (hitMonster || bullet.sprite.x < 0 ||
        bullet.sprite.x > LEVELS[levelIndex].width ||
        !isSpriteOnScreen(bullet.sprite)) {
      bullet.sprite.remove();
      bullets.splice(bulletIndex, 1);
    }
  }
}

function isSpriteOnScreen(sprite) {
  return Math.abs(sprite.x - camera.x) <= CANVAS_WIDTH / 2 + sprite.width / 2 &&
    Math.abs(sprite.y - camera.y) <= CANVAS_HEIGHT / 2 + sprite.height / 2;
}

function takeDamage(playerSprite, monster) {
  if (frameCount < invulnerableUntil || gameMode !== 'playing') return;

  lives -= 1;
  invulnerableUntil = frameCount + 75;
  const knockbackDirection = playerSprite.x < monster.x ? -1 : 1;
  playerSprite.arcadeRecoil = knockbackDirection * 6;
  playerSprite.velocity.x = knockbackDirection * 6;
  playerSprite.velocity.y = -4;
}

function drawWorldDetails() {
  const level = LEVELS[levelIndex];
  push();
  noStroke();
  for (let x = 70; x < level.width; x += 170) {
    fill('#f5f36d');
    rect(x, 55 + (x % 5) * 8, 4, 4);
  }

  fill(level.skylineColor);
  for (let x = 0; x < level.width; x += 240) {
    rect(x, FLOOR_Y - 85, 100, 85);
    rect(x + 115, FLOOR_Y - 125, 80, 125);
  }

  fill('#171329');
  rect(0, FLOOR_Y + 2, level.width, 8);
  fill('#f5f36d');
  rect(0, FLOOR_Y + 10, level.width, 3);

  const portalOpen = monsters.length === 0;
  stroke(portalOpen ? '#70f0d7' : '#f0a35f');
  strokeWeight(4);
  noFill();
  rect(level.exitX - 27, FLOOR_Y - 104, 54, 104, 24);
  noStroke();
  fill(portalOpen ? '#70f0d7' : '#f0a35f');
  textAlign(CENTER, CENTER);
  textSize(12);
  text(portalOpen ? 'EXIT' : 'LOCKED', level.exitX, FLOOR_Y - 52);
  pop();
}

function drawOverlay() {
  camera.off();
  push();
  noStroke();
  textFont('monospace');

  if (gameMode === 'title') {
    fill('#100d23');
    rect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    stroke('#f5f36d');
    strokeWeight(4);
    noFill();
    rect(12, 12, CANVAS_WIDTH - 24, CANVAS_HEIGHT - 24);
    noStroke();
    fill('#ff4f87');
    textAlign(CENTER, CENTER);
    textSize(42);
    text('MONSTER HUNTER', CANVAS_WIDTH / 2, 190);
    fill('#f5f36d');
    textSize(18);
    text('★  ARCADE EDITION  ★', CANVAS_WIDTH / 2, 236);
    fill('#f8ebff');
    textSize(17);
    text('Clear the monsters and reach the exit.', CANVAS_WIDTH / 2, 285);
    text('← / → MOVE    ↑ JUMP    HOLD SPACE TO FIRE', CANVAS_WIDTH / 2, 330);
    fill('#31d7d1');
    text('PRESS ENTER OR SPACE TO START', CANVAS_WIDTH / 2, 395);
  } else {
    fill('#100d23');
    rect(18, 18, 500, 104);
    noFill();
    stroke('#f5f36d');
    strokeWeight(3);
    rect(18, 18, 500, 104);
    noStroke();
    fill('#f8ebff');
    textAlign(LEFT, TOP);
    textSize(16);
    text(`STAGE ${levelIndex + 1}/${LEVELS.length}  ${LEVELS[levelIndex].name.toUpperCase()}`, 36, 30);
    text(`LIVES  ${'♥ '.repeat(lives)}`, 36, 56);
    text(`TARGETS  ${monstersDefeated}/${LEVELS[levelIndex].monsters.length}`, 36, 82);

    if (frameCount < messageUntil && monsters.length > 0 && gameMode === 'playing') {
      fill('#ffe27a');
      textAlign(CENTER, TOP);
      text('Defeat every monster to unlock the exit!', CANVAS_WIDTH / 2, 30);
    }

    if (gameMode === 'levelComplete' || gameMode === 'victory' || gameMode === 'lose') {
      fill('#07101de8');
      rect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
      fill(gameMode === 'lose' ? '#ff8090' : '#73e5d4');
      textAlign(CENTER, CENTER);
      textSize(54);
      const heading = gameMode === 'lose'
        ? 'GAME OVER'
        : gameMode === 'victory'
          ? 'YOU WIN!'
          : `LEVEL ${levelIndex + 1} CLEARED!`;
      text(heading, CANVAS_WIDTH / 2, 235);
      fill('#edf5ff');
      textSize(20);
      const detail = gameMode === 'lose'
        ? 'The monsters got you this time.'
        : gameMode === 'victory'
          ? 'You cleared every level!'
          : `Get ready for ${LEVELS[levelIndex + 1].name}.`;
      text(detail, CANVAS_WIDTH / 2, 295);
      fill('#ffe27a');
      const instruction = gameMode === 'levelComplete'
        ? 'Press ENTER for the next level'
        : 'Press R or ENTER to play again';
      text(instruction, CANVAS_WIDTH / 2, 360);
    }
  }

  pop();
  camera.on();
}

function drawArcadePlayer() {
  push();
  rectMode(CENTER);
  noStroke();
  fill(PLAYER_COLORS.outline);
  rect(0, 2, 30, 42);
  fill(PLAYER_COLORS.body);
  rect(0, -4, 24, 25);
  rect(0, -15, 20, 10);
  fill(PLAYER_COLORS.highlight);
  rect(0, -17, 12, 4);
  rect(this.arcadeFacing * 8, -5, 6, 5);
  fill(PLAYER_COLORS.shadow);
  rect(-7, 17, 8, 8);
  rect(7, 17, 8, 8);
  fill(PLAYER_COLORS.outline);
  rect(this.arcadeFacing * 17, 1, 15, 6);
  fill('#f5f36d');
  rect(this.arcadeFacing * 25, 1, 5, 4);
  pop();
}

function drawArcadeMonster() {
  push();
  rectMode(CENTER);
  noStroke();
  fill('#171329');
  rect(0, 2, 34, 34);
  fill(this.arcadeColor);
  rect(0, 0, 28, 27);
  rect(0, -15, 20, 7);
  rect(-12, -9, 6, 12);
  rect(12, -9, 6, 12);
  fill('#f5f36d');
  rect(this.arcadeFacing * 7, -3, 5, 5);
  rect(-this.arcadeFacing * 7, -3, 5, 5);
  fill('#171329');
  rect(-8, 19, 8, 7);
  rect(8, 19, 8, 7);
  pop();
}

function keyPressed() {
  if (gameMode === 'levelComplete' && keyCode === ENTER) {
    gameMode = 'playing';
    loadLevel(levelIndex + 1);
    setSceneVisible(true);
    return false;
  }

  if ((gameMode === 'victory' || gameMode === 'lose') &&
      (key === 'r' || key === 'R' || keyCode === ENTER)) {
    startGame();
    return false;
  }
}
