import LocalStorage from "../Objects/localStorage";
import EnemyGroup from "../helper/enemyGroup";
import EnemyAttackGroup from "../helper/enemyAttackGroup";
import LaserGroup from "../helper/playerAttackGroup";
import playerAttack from "../../assets/images/effects2.png";
import player from "../../assets/images/playerrun.png";
import test from "../../assets/images/wolf.png";
import enemy from "../../assets/images/enemy3attack.png";
import star from "../../assets/images/star.png";
import lumb from "../../assets/images/lumb.png";
import light from "../../assets/images/light.png";
import ground2 from "../../assets/images/frontgrass.png";
import flower2 from "../../assets/images/flower2.png";
import flower1 from "../../assets/images/flower1.png";
import rock3 from "../../assets/images/rock3.png";
import rock2 from "../../assets/images/rock2.png";
import rock1 from "../../assets/images/rock1.png";
import cloud4 from "../../assets/images/cloud4.png";
import cloud3 from "../../assets/images/cloud3.png";
import cloud2 from "../../assets/images/cloud2.png";
import cloud1 from "../../assets/images/cloud1.png";
import tree from "../../assets/images/tree.png";
import ground from "../../assets/images/ground.png";
import grass3 from "../../assets/images/grass3.png";
import grass2 from "../../assets/images/grass2.png";
import grass1 from "../../assets/images/grass1.png";
import mountain from "../../assets/images/mountain.png";
import sky from "../../assets/images/sky.png";

export default class GameScene extends Phaser.Scene {
  constructor() {
    super("Game");
  }

  preload() {
    this.load.image("sky", sky);
    this.load.image("mountain", mountain);
    this.load.image("grass1", grass1);
    this.load.image("grass2", grass2);
    this.load.image("grass3", grass3);
    this.load.image("ground", ground);
    this.load.image("tree", tree);
    this.load.image("cloud1", cloud1);
    this.load.image("cloud2", cloud2);
    this.load.image("cloud3", cloud3);
    this.load.image("cloud4", cloud4);
    this.load.image("rock1", rock1);
    this.load.image("rock2", rock2);
    this.load.image("rock3", rock3);
    this.load.image("light", light);
    this.load.image("lumb", lumb);
    this.load.image("flower1", flower1);
    this.load.image("flower2", flower2);
    this.load.image("ground2", ground2);
    this.load.spritesheet("star", star, { frameWidth: 70, frameHeight: 69 });
    this.load.spritesheet("enemy", enemy, {
      frameWidth: 480,
      frameHeight: 480,
    });
    this.load.spritesheet("enemyAttack", test, {
      frameWidth: 202,
      frameHeight: 142,
    });

    this.load.spritesheet("player", player, {
      frameWidth: 480,
      frameHeight: 480,
    });

    this.load.spritesheet("playerAttack", playerAttack, {
      frameWidth: 120,
      frameHeight: 105,
    });
  }

  backgroundRepeat(
    scene,
    width,
    height,
    text,
    speed,
    scale1,
    scale2,
    origin1,
    origin2,
    player
  ) {
    const count = 92 * speed;
    let screenWidth = 0;
    const platforms = scene.physics.add.staticGroup();

    for (let i = 0; i < count; i += 1) {
      const repeatImage = platforms
        .create(width + screenWidth, height, text)
        .setOrigin(origin1, origin2)
        .setScrollFactor(speed)
        .setScale(scale1, scale2);

      if (text === "ground2") {
        scene.physics.add.collider(player, repeatImage);
      }
      screenWidth += scene.scale.width;
    }
  }
  collectCoin(player, star) {
    this.score += 10;
    this.scoreText.setText(`Score: ${this.score}`);
    LocalStorage.saveLocalStorage(this.score);
    star.disableBody(true, true);
  }

  stopEnemy(player, enemy) {
    enemy.setActive(false);
    enemy.body.enable = false;
    enemy.setVisible(false);
    player.setActive(false);
    player.setVisible(false);
    player.body.enable = false;
  }

  gameOver() {
    // this.time.addEvent({
    //   delay: 60,
    //   callback: () => {
    //     if (!this.isGameOver) {
    //       this.isGameOver = true;
    //       this.scene.stop();
    //       this.scene.start("GameOverScene");
    //     }
    //   },
    // });
  }

  generateRandomNum(min, max) {
    return Math.random() * (max - min) + min;
  }

  generateCoins() {
    for (let i = 0; i < 4; i += 1) {
      this.coins.push(
        this.physics.add.staticGroup({
          key: "star",
          repeat: 100,
          setXY: {
            x: this.width * Math.random(1),
            y: this.height * this.generateRandomNum(0.5, 0.8),
            stepX: this.generateRandomNum(200, 1000),
          },
          setScale: { x: 0.5, y: 0.5 },
        })
      );
    }
  }

  coinAnim(coins) {
    if (!this.anims.get("spin")) {
      this.anims.create({
        key: "spin",
        frames: this.anims.generateFrameNames("star", {
          frames: [0, 1, 2, 3, 4, 5, 6, 7],
        }),
        frameRate: 5,
        repeat: -1,
      });
    }

    for (let i = 0; i < coins.length; i += 1) {
      Phaser.Actions.Call(coins[i].getChildren(), (child) => {
        child.anims.play("spin");
      });
    }
  }

  create() {
    this.timer = true;
    this.add
      .image(this.width * 0.5, this.height * 0.3, "sky")
      .setScrollFactor(0)
      .setScale(0.8, 0.7);
    this.backgroundRepeat(
      this,
      0,
      this.height * 0.45,
      "cloud1",
      0.07,
      0.5,
      0.5,
      0,
      1
    );
    this.backgroundRepeat(
      this,
      0,
      this.height,
      "mountain",
      0.25,
      0.5,
      0.5,
      0,
      1
    );
    this.backgroundRepeat(
      this,
      this.width / 2,
      this.height * 0.25,
      "cloud2",
      0.15,
      0.5,
      0.5,
      0,
      1
    );

    this.backgroundRepeat(
      this,
      this.width / 2.4,
      this.height / 1.5,
      "grass2",
      0.5,
      0.4,
      0.4
    );
    this.backgroundRepeat(
      this,
      this.width / 7.5,
      this.height / 1.5,
      "grass3",
      0.5,
      0.4,
      0.4
    );
    this.backgroundRepeat(
      this,
      this.width / 1.3,
      this.height / 1.45,
      "grass1",
      0.5,
      0.4,
      0.4
    );
    this.backgroundRepeat(
      this,
      0,
      this.height / 1.1,
      "ground",
      0.75,
      0.5,
      0.5,
      0,
      1
    );
    this.backgroundRepeat(
      this,
      this.width / 5,
      this.height / 1.8,
      "tree",
      0.75,
      0.5,
      0.5
    );
    this.backgroundRepeat(
      this,
      this.width / 1.3,
      this.height / 1.6,
      "tree",
      0.75,
      0.35,
      0.35
    );
    this.backgroundRepeat(
      this,
      this.width / 1.8,
      this.height / 1.3,
      "rock2",
      0.75,
      0.4,
      0.4
    );
    this.backgroundRepeat(
      this,
      this.width / 3.5,
      this.height / 1.3,
      "rock3",
      0.75,
      0.4,
      0.4
    );

    this.backgroundRepeat(
      this,
      this.width * 0.5,
      this.height / 1.5,
      "lumb",
      0.75,
      0.5,
      0.5
    );
    this.backgroundRepeat(
      this,
      this.width * 0.501,
      this.height / 1.43,
      "light",
      0.75,
      0.5,
      0.5
    );
    this.backgroundRepeat(
      this,
      this.width / 1.1,
      this.height / 1.3,
      "rock1",
      0.75,
      0.4,
      0.4
    );
    this.backgroundRepeat(
      this,
      this.width / 2.5,
      this.height / 1.3,
      "flower2",
      0.75,
      0.4,
      0.4
    );
    this.player = this.physics.add
      .sprite(this.width * 0.1, this.height * 0.2, "player", 19)
      .setScale(0.35, 0.35);
    this.player.setBounce(0.2);
    this.player.setFlipX(true);
    this.player.body.offset.y = -80;
    this.backgroundRepeat(
      this,
      this.width / 1.7,
      this.height / 1.2,
      "flower1",
      0.75,
      0.4,
      0.4
    );
    this.backgroundRepeat(
      this,
      0,
      this.height,
      "ground2",
      1.25,
      0.45,
      0.45,
      0,
      1,
      this.player
    );
    this.coins = [];

    this.generateCoins();
    this.coinAnim(this.coins);


    this.cameras.main.setBounds(0, 0, this.width * 90, this.height);
    this.cameras.main.startFollow(this.player);
  }
  update() {}
}
