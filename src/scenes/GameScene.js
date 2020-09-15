export default class GameScene extends Phaser.Scene {
  constructor() {
    super("game-scene");
  }

  preload() {
    this.load.image("sky", "assets/images/sky-BG.png");
    this.load.image("mountain", "assets/images/mountains.png");
    this.load.image("grass2", "assets/images/grass2.png");
    this.load.image("grass1", "assets/images/grass1.png");
    this.load.image("grass3", "assets/images/grass3.png");
    this.load.image("ground", "assets/images/ground.png");
    this.load.image("tree", "assets/images/tree.png");
    this.load.image("rock1", "assets/images/rock1.png");
    this.load.image("rock2", "assets/images/rock2.png");
    this.load.image("rock3", "assets/images/rock3.png");
    this.load.image("flower1", "assets/images/flower1.png");
    this.load.image("flower2", "assets/images/flower2.png");
    this.load.image("light", "assets/images/light.png");
    this.load.image("lumb", "assets/images/lumb.png");
    this.load.image("clouds", "assets/images/clouds.png");
    this.load.image("cloud1", "assets/images/cloud1.png");
    this.load.image("cloud2", "assets/images/cloud2.png");
    this.load.image("cloud3", "assets/images/cloud3.png");
    this.load.image("cloud4", "assets/images/cloud4.png");
    this.load.image("frontgrass", "assets/images/frontgrass.png");
    this.cursors = this.input.keyboard.createCursorKeys();
  }

  create() {
    const height = this.scale.height;
    const width = this.scale.width;

    this.add.image(width * 0.5, height * 0.5, "sky").setScrollFactor(0);

    // this.clouds = this.add.image(0, height * 0.35, "clouds").setOrigin(0, 1);
    // this.clouds.setScale(0.5, 0.5);

    //  this.cloud1 = this.add.image(0, height, "cloud1").setOrigin(0, 1);
    //  this.clouds1.setScale(0.5, 0.5);
    this.cloud2 = this.add
      .image(width * 0.15, height * 0.5, "cloud2")
      .setOrigin(0, 1);
    this.cloud2.setScale(0.5, 0.5).setScrollFactor(0.25);

    this.cloud3 = this.add
      .image(width / 2.5, height * 0.25, "cloud3")
      .setOrigin(0, 1);
    this.cloud3.setScale(0.5, 0.5).setScrollFactor(0.35);

    this.cloud4 = this.add.image(0, height * 0.35, "cloud4").setOrigin(0, 1);
    this.cloud4.setScale(0.5, 0.5).setScrollFactor(0.25);

    this.mountain = this.add.image(0, height, "mountain").setOrigin(0, 1);
    this.mountain.setScale(0.5, 0.5).setScrollFactor(0.45);

    this.grass3 = this.add.image(width / 2.4, height / 1.5, "grass1");
    this.grass3.setScale(0.4, 0.4).setScrollFactor(0.55);

    this.grass2 = this.add.image(width / 1.4, height / 1.5, "grass2");
    this.grass2.setScale(0.4, 0.4).setScrollFactor(0.55);

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
