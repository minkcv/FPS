function changeControls(index) {
    if (index == 0) {
        keys = { up: 38, down: 40, right: 39, left: 37, a: 65, s: 83, d: 68, w: 87, shift: 16, r: 82, f: 70 };
    }
    else if (index == 1) {
        keys = { up: 87, down: 83, right: 68, left: 65, a: 37, s: 40, d: 39, w: 38, shift: 16, r: 82, f: 70 };
    }
    document.getElementById('controls').blur();
}

function createPlayer(x, z, angle) {
    MA.createPlayer(x, z, angle);
    TH.camera.position.set(MA.player.position.x, 0, MA.player.position.y);
    TH.camera.rotation.y = -MA.player.angle + (3 * Math.PI / 2);
}

function addWall(x, z, width, height, depth) {
    TH.addWall(x, z, width, height, depth);
    MA.addBox(x, z, width, depth);
}

function addSprite(x, y, z, width, height, scale, textureName, tilesX, tilesY, tilesTotal, duration, body, creature) {
    var sprite = TH.addSprite(x, y, z, width, height, scale, textureName, tilesX, tilesY, tilesTotal, duration);
    if (creature)
        MA.addCircle(x, z, 10, sprite);
    else if (body)
        MA.addCircle(x, z, width * 8);
}
function addTorch (x, z) { addSprite(x, -8, z, 1, 2, 1, 'torch.png', 4, 1, 4, 200, true)}
function addSlug (x, y, z) { addSprite(x, y, z, 2, 1, 0.4, 'slug.png', 4, 1, 4, 200, true, true)}
function addLadder (x, z) { addSprite(x, 0, z, 2, 4, 0.6, 'ladder.png', true)}
function addEKG (x, z) { addSprite(x, -10, z, 2, 4, 0.4, 'ekg.png', 4, 1, 4, 200, true)}
function addGenerator (x, z) { addSprite(x, -14, z, 2, 4, 0.4, 'generator.png', 2, 1, 2, 300, true)}
function addStalagtite (x, y, z) { addSprite(x, y, z, 1, 2, 0.5, 'stalagtite' + (Math.floor(Math.random() * 4) + 1) + '.png')}
function addLamp (x, z) { addSprite(x, -18, z, 1, 2, 0.5, 'lamp.png', 2, 1, 2, 800, true)}
function addScrap (x, z) { addSprite(x, -20, z, 1, 2, 0.5, 'scrap' + (Math.floor(Math.random() * 2) + 1) + '.png', 0, 0, 0, 0, true)}
function addPipe (x, z) { addSprite(x, 0, z, 0.75, 3, 1, 'pipe' + (Math.floor(Math.random() * 4) + 1) + '.png', 0, 0, 0, 0, true)}
function addPebble(x, z) { addSprite(x, -30, z, 1, 1, 1, 'pebble.png')}
function addStruggler(x, z) { addSprite(x, -18, z, 4, 2, 0.5, 'corpse2.png', 2, 1, 2, 800, true)}
function addScaffoldWire(x, z) { addSprite(x, -TH.floorY, z, 0.75, 5, 1, 'wire.png', 0, 0, 0, 0)}
function addTube(x, z) { addSprite(x, 0, z, 4, 8, 0.6, 'tube.png', 2, 1, 2, 800, true)}
function addEmptyTube(x, z) { addSprite(x, 0, z, 4, 8, 0.6, 'empty_tube.png', 0, 0, 0, 0, true)}
function addComputer(x, z) { addSprite(x, -10, z, 4, 4, 0.4, 'computer.png', 2, 1, 2, 400, true)}
function addChair(x, z) { addSprite(x, -10, z, 1, 4, 0.4, 'chair.png', 0, 0, 0, 0, true)}
function addFileCabinet(x, z) { addSprite(x, -16, z, 2, 4, 0.4, 'file_cabinet.png', 0, 0, 0, 0, true)}
function addHiveMind(x, z) { addSprite(x, 0, z, 8, 16, 0.5, 'hivemind.png')}
function addHiveMindInner(x, z) { addSprite(x, 0, z, 4, 4, 0.5, 'hivemind_inner.png', 4, 1, 4, 300)}
function addTentacle(x, y, z) { addSprite(x, y, z, 1, 4, 0.5, 'tentacle.png', 4, 1, 4, 400, true)}
function addTentacle2(x, y, z) { addSprite(x, y, z, 1, 4, 0.5, 'tentacle2.png', 4, 1, 4, 400, true)}
function addHangingScrap(x, y, z) { addSprite(x, y, z, 1, 4, 0.5, 'scrap' + (Math.floor(Math.random() * 3) + 1) + 'hang.png')}
function addOrgan(x, z) { addSprite(x, 0, z, 2, 4, 0.5, 'organ1.png', 4, 1, 4, 300, true)}
function addWart(x, y, z) { addSprite(x, y, z, 1, 1, 0.5, 'wart.png', 4, 1, 4, 300)}
function addArtery(x, z) { addSprite(x, 0, z, 2, 8, 0.5, 'artery.png', 4, 1, 4, 300, true)}
function addEye(x, y, z) { addSprite(x, y, z, 1, 1, 0.5, 'eye.png')}

function addWallShape(x, y, z, width, height, points, textureNames, addBodies, transparent) {
    for (key in points) {
        var point = points[key];
        if (point.next < 0)
            continue;
        var next = points[points[key].next];
        var p1 = {x: point.x + x, y: point.y + z};
        var p2 = {x: next.x + x, y: next.y + z};
        var textureName = textureNames[Math.floor(Math.random() * textureNames.length)];
        TH.addWallPlane(p1, p2, width, height, textureName, y, transparent);
        if (addBodies)
            MA.addWall(p1, p2);
    }
}
function addAnimatedWall(p1, p2, y, height, textureName, tilesX, tilesY, totalTiles, delay, addBody) {
    if (addBody)
        MA.addWall(p1, p2);
    TH.addAnimatedPlane(p1, p2, y, height, textureName, tilesX, tilesY, totalTiles, delay);
}

function rotatePlayer(angle) {
    MA.rotatePlayer(-angle);
    TH.camera.rotation.y = -MA.player.angle + (3 * Math.PI / 2);
}

function moveForward(moveSpeed) {
    var xv = Math.cos(MA.player.angle) * moveSpeed;
    var yv = Math.sin(MA.player.angle) * moveSpeed;
    Matter.Body.applyForce(MA.player, MA.player.position, {x: xv, y: yv});
}
function moveLeft(moveSpeed) {
    var xv = Math.cos(MA.player.angle - Math.PI / 2) * moveSpeed;
    var yv = Math.sin(MA.player.angle - Math.PI / 2) * moveSpeed;
    Matter.Body.applyForce(MA.player, MA.player.position, {x: xv, y: yv});
}
function moveRight(moveSpeed) {
    var xv = Math.cos(MA.player.angle + Math.PI / 2) * moveSpeed;
    var yv = Math.sin(MA.player.angle + Math.PI / 2) * moveSpeed;
    Matter.Body.applyForce(MA.player, MA.player.position, {x: xv, y: yv});
}

function moveBackward(moveSpeed) {
    var xv = -Math.cos(MA.player.angle) * moveSpeed;
    var yv = -Math.sin(MA.player.angle) * moveSpeed;
    Matter.Body.applyForce(MA.player, MA.player.position, {x: xv, y: yv});
}

function update() {
    var moveSpeed = 1;
    if (debug && keys.shift in keysDown)
        moveSpeed = 8;

    TH.camera.position.set(MA.player.position.x, 0, MA.player.position.y);
    if (keys.left in keysDown)
        rotatePlayer(0.03);
    else if (keys.right in keysDown)
        rotatePlayer(-0.03);

    if (keys.w in keysDown)
        moveForward(moveSpeed);
    else if (keys.s in keysDown)
        moveBackward(moveSpeed);

    if (keys.a in keysDown)
        moveLeft(moveSpeed);
    else if (keys.d in keysDown)
        moveRight(moveSpeed);

    if (debug) {
        MA.updateView();
        updateDebug();
    }

    TH.update();
}

function init() {
    MA.init();
    TH.init();
    //loadLevel1();
    //TH.clearScene();
    //MA.clearWorld();
    loadLevel2();
    loadLevel3();
    loadLevel4();
    loadLevel5();
    loadLevel6();
}
init();

MA.run();
TH.run(update);
