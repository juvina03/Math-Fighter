import Phaser from 'phaser'
 export default class MathFighterScene extends
 Phaser.Scene
 {
    constructor(){
          super('math-fighter-scene')

    }
    init(){
    this.gameHalfWidth = this.scale * 0.5;
    this.gameHalfHeight = this.scale * 0.5;
    this.player = undefined;
    this.enemy = undefined;
    this.slash = undefined;

    }
    preload(){
    this.load.image("background", "image/bg_layer1.png");
    this.load.image("fight-bg", "image/fight-bg.png");
    this.load.image("tile", "image/tile.png");
    this.load.spritesheet("player", "image/warrior1.png", {
        frameWidth : 80,
        frameHeight : 80
    });
    this.load.spritesheet("enemy", "image/warrior2.png", {
        frameWidth : 80,
        frameHeight : 80
    });
    this.load.spritesheet("slash", "image/slash.png", {
        frameWidth : 88,
        frameHeight : 42
    });
    this.load.spritesheet("numbers", "image/numbers.png", {
        frameWidth : 71.25,
        frameHeight : 131
    });

    }
    create(){
    this.add.image(240, 320, "background");
    const fight_bg = this.add.image(240, 160, "fight-bg");
    const tile = this.physics.add.staticImage(240, fight_bg.height - 40, "tile");
    this.player = this.physics.add.sprite(this.gameHalfWidth - 150, this.gameHalfHeight - 200, "player")
       .setBounce(0.2) .setOffset(-20.-10);
    this.physics.add.collider(this.player, tile);
    this.enemy = this.physics.add.sprite(this.gameHalfWidth + 150, this.gameHalfHeight - 200, "enemy")
       .setBounce(0.2) .setOffset(20.-10).setFlipX(true);
   

    }
    update(){

    }
 }