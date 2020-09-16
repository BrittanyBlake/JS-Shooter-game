import player from "../../assets/images/playershoot.png";
import attack from "../../assets/images/effects.png";
import enemy3 from "../../assets/images/enemy3attack.png";
import enemy2 from "../../assets/images/enemy2walk.png";
import enemy1 from "../../assets/images/enemy1attack.png";
import coin from "../../assets/images/star.png";
import frontgrass from "../../assets/images/frontgrass.png";
import cloud4 from "../../assets/images/cloud4.png";
import cloud3 from "../../assets/images/cloud3.png";
import cloud2 from "../../assets/images/cloud2.png";
import cloud1 from "../../assets/images/cloud1.png";
import clouds from "../../assets/images/clouds.png";
import lumb from "../../assets/images/lumb.png";
import light from "../../assets/images/light.png";
import flower2 from "../../assets/images/flower2.png";
import flower1 from "../../assets/images/flower1.png";
import rock3 from "../../assets/images/rock3.png"
import rock2 from "../../assets/images/rock3.png"
import rock1 from "../../assets/images/rock1.png"
import tree from "../../assets/images/tree.png"
import ground from "../../assets/images/ground.png"
import grass3 from "../../assets/images/grass3.png"
import grass2 from "../../assets/images/grass2.png"
import grass1 from "../../assets/images/grass1.png"
import mountain from "../../assets/images/mountains.png";
import sky from "../../assets/images/sky-BG.png";

export default class GameScene extends Phaser.Scene {
  constructor() {
    super("game-scene");
  }

  preload() {
    this.load.image("sky", sky);
    this.load.image("mountain", mountain);
    this.load.image("grass2", grass2);
    this.load.image("grass1", grass1);
    this.load.image("grass3", grass3);
    this.load.image("ground", ground);
    this.load.image("tree", tree);
    this.load.image("rock1", rock1);
    this.load.image("rock2", rock2);
    this.load.image("rock3", rock3);
    this.load.image("flower1", flower1);
    this.load.image("flower2", flower2);
    this.load.image("light", light);
    this.load.image("lumb", lumb);
    this.load.image("clouds", clouds);
    this.load.image("cloud1", cloud1);
    this.load.image("cloud2", cloud2);
    this.load.image("cloud3", cloud3);
    this.load.image("cloud4", cloud4);
    this.load.image("frontgrass", frontgrass);
    this.load.spritesheet("coin", coin, { frameWidth: 70, frameHeight: 69 });
    this.load.spritesheet("enemy1", enemy1, {
      frameWidth: 125,
      frameHeight: 110.33,
    });
    this.load.spritesheet("enemy2", enemy2, {
      frameWidth: 125,
      frameHeight: 110.33,
    });
    this.load.spritesheet("enemy3", enemy3, {
      frameWidth: 125,
      frameHeight: 110.33,
    });
    this.load.spritesheet("attack", attack, {
      frameWidth: 110,
      frameHeight: 160,
    });
    this.load.spritesheet("player", player, {
      frameWidth: 50.5,
      frameHeight: 52,
      margin: 2,
      spacing: 2,
    });
    this.cursors = this.input.keyboard.createCursorKeys();
  }
  

  backgroundRepeat(scene, width, height, count, imageName, scrollSpeed, origin1, origin2, scale1, scale2) {
    let x = 0;

    for (let i = 0; i < count; i++) {
      scene.add
        .image(width + x, height, imageName)
        .setOrigin(origin1, origin2)
        .setScrollFactor(scrollSpeed)
        .setScale(scale1, scale2);
      x += scene.scale.width;
    }
  }

  create() {
    const height = this.scale.height;
    const width = this.scale.width;

    this.add.image(width * 0.5, height * 0.5, "sky").setScrollFactor(0);

    this.backgroundRepeat(
      this,
      width * 0.15,
      height * 0.5,
      1,
      "cloud2",
      0.25,
      0,
      1,
      0.5,
      0.5
    );

    this.backgroundRepeat(
      this,
      width / 2.5,
      height * 0.25,
      1,
      "cloud3",
      0.35,
      0,
      1,
      0.5,
      0.5
    );

    this.backgroundRepeat(
      this,
      0,
      height * 0.35,
      1,
      "cloud4",
      0.25,
      0,
      1,
      0.5,
      0.5
    );

    this.backgroundRepeat(this, 0, height, 1, "mountain", 0.45, 0, 1, 0.5, 0.5);
    this.backgroundRepeat(
      this,
      width / 2.4,
      height / 1.5,
      1,
      "grass1",
      0.55,
      0.4,0.4,
      0.4,
      0.4
    );
     this.backgroundRepeat(
       this,
       width / 1.4,
       height / 1.5,
       1,
       "grass2",
       0.55,
       0.4,
       0.4,
       0.4,
       0.4
     );
    //  this.backgroundRepeat(this, width / 7.5, height / 1.5, 1, );
    // this.backgroundRepeat(this,)
    // this.backgroundRepeat(this,)
    // this.backgroundRepeat(this,)
    // this.backgroundRepeat(this,)
    // this.backgroundRepeat(this,)
    // this.backgroundRepeat(this,)
    // this.backgroundRepeat(this,)
    // this.backgroundRepeat(this,)
    // this.backgroundRepeat(this,)
    // this.backgroundRepeat(this,)
    // this.backgroundRepeat(this,)
    // this.backgroundRepeat(this,)
  

    //this.backgroundRepeat(this, width, height, count, imagename, scrollSpeed, origin1, origin2, scale1, scale2)


    // this.cloud3 = this.add
    //   .image(width / 2.5, height * 0.25, "cloud3")
    //   .setOrigin(0, 1);
    // this.cloud3.setScale(0.5, 0.5).setScrollFactor(0.35);

    // this.cloud4 = this.add.image(0, height * 0.35, "cloud4").setOrigin(0, 1);
    // this.cloud4.setScale(0.5, 0.5).setScrollFactor(0.25);

    // this.mountain = this.add.image(0, height, "mountain").setOrigin(0, 1);
    // this.mountain.setScale(0.5, 0.5).setScrollFactor(0.45);

    // this.grass3 = this.add.image(width / 2.4, height / 1.5, "grass1");
    // this.grass3.setScale(0.4, 0.4).setScrollFactor(0.55);

    // this.grass2 = this.add.image(width / 1.4, height / 1.5, "grass2");
    // this.grass2.setScale(0.4, 0.4).setScrollFactor(0.55);

    this.grass1 = this.add.image(width / 7.5, height / 1.5, "grass3");
    this.grass1.setScale(0.4, 0.4).setScrollFactor(0.55);

    this.ground = this.add.image(0, height / 1.1, "ground").setOrigin(0, 1);
    this.ground.setScale(0.5, 0.5).setScrollFactor(0.55);

    this.frontgrass = this.add
      .image(0, height / 1, "frontgrass")
      .setOrigin(0, 1);
    this.frontgrass.setScale(0.5, 0.5).setScrollFactor(0.55);

    this.tree1 = this.add.image(width / 5, height / 1.6, "tree");
    this.tree1.setScale(0.35, 0.35).setScrollFactor(0.55);

    this.tree2 = this.add.image(width / 1.3, height / 1.8, "tree");
    this.tree2.setScale(0.5, 0.5).setScrollFactor(0.55);

    this.rock1 = this.add.image(width / 1.8, height / 1.3, "rock2");
    this.rock1.setScale(0.4, 0.4).setScrollFactor(0.55);

    this.rock2 = this.add.image(width / 3.5, height / 1.3, "rock1");
    this.rock2.setScale(0.4, 0.4).setScrollFactor(0.55);

    this.rock3 = this.add.image(width / 1.1, height / 1.3, "rock3");
    this.rock3.setScale(0.4, 0.4).setScrollFactor(0.55);

    this.flower1 = this.add.image(width / 1.7, height / 1.25, "flower1");
    this.flower1.setScale(0.4, 0.4).setScrollFactor(0.55);

    this.flower2 = this.add.image(width / 2.5, height / 1.3, "flower2");
    this.flower2.setScale(0.4, 0.4).setScrollFactor(0.55);

    this.lumb = this.add
      .image(width / 2.5, height / 1.25, "lumb")
      .setOrigin(0, 1);
    this.lumb.setScale(0.5, 0.5).setScrollFactor(0.55);

    this.light = this.add
      .image(width / 2.86, height / 1.2, "light")
      .setOrigin(0, 1);
    this.light.setScale(0.5, 0.5).setScrollFactor(0.55);

    this.cameras.main.setBounds(0, 0, width * 10, height);
  }

  update() {
    const cam = this.cameras.main;
    const speed = 3;
    if (this.cursors.left.isDown) {
      cam.scrollX -= speed;
    } else if (this.cursors.right.isDown) {
      cam.scrollX += speed;
    }
  }
}
