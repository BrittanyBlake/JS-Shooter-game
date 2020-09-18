
import Button from "../Objects/Button";
import API from "../Objects/api";
import Dom from "../Objects/dom";
import LocalStorage from "../Objects/localStorage";
import logoBg from "../../assets/images/logo-bg.png";
import enemyImg from "../../assets/images/wolf.png";
import enemyImg2 from "../../assets/images/enemy3attack.png";
export default class GameOverScene extends Phaser.Scene {
  constructor() {
    super({ key: "GameOverScene" });
  }

  preload() {
    this.load.image("logoBg", logoBg);
    this.load.image("enemyImg", enemyImg);
    this.load.image("enemyImg2", enemyImg2);
    API;
  }

  create() {
    this.input.keyboard.enabled = false;
    this.input.keyboard.preventDefault = false;

    const height = this.scale.height * 0.5;
    const width = this.scale.width * 0.5;
    this.logo = this.add
      .sprite(width * 0.3, height, "logoBg")
      .setScale(0.7, 0.7);
    this.add.image(width * 1, height * 0.2, "enemyImg").setScale(0.33, 0.5);
    this.enemy = this.add
      .sprite(width * 1.7, height, "enemyImg2")
      .setScale(0.7, 0.7);
    this.enemy.flipX = true;

    const score = LocalStorage.readLocalStorage();
    LocalStorage.clearLocalStorage();

    if (!this.anims.get("logo")) {
      this.anims.create({
        key: "logo",
        frames: this.anims.generateFrameNames("logo", {
          frames: [18, 19, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0],

        }),
        frameRate: 7.5,
        repeat: -1,
      });
    }

    if (!this.anims.get("enemy")) {
      this.anims.create({
        key: "enemy",
        frames: this.anims.generateFrameNames("enemy", {
          frames: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
        }),
        frameRate: 8,
        repeat: -1,
      });
    }

    this.logo.anims.play("logo");
    this.enemy.anims.play("enemy");

    this.title = this.add.text(width, 128, "GAME OVER", {
      fontSize: 47,
      fontStyle: "bold",
      color: "white",
      align: "center",
    });
    this.title.setOrigin(0.5);

    this.title = this.add.text(width, 200, `Your score is: ${score}`, {
      fontSize: 32,
      fontStyle: "bold",
      color: "white",
      align: "center",
    });
    this.title.setOrigin(0.5);

    this.playAgainButton = new Button(
      this,
      width * 0.35,
      height * 1.7,
      "blueButton1",
      "blueButton2",
      "Play Again",
      "Game"
    );

    this.creditButton = new Button(
      this,
      width * 1,
      height * 1.7,
      "blueButton1",
      "blueButton2",
      "Credits",
      "Credits"
    );

    this.scoresButton = new Button(
      this,
      width * 1.65,
      height * 1.7,
      "blueButton1",
      "blueButton2",
      "Top Scores",
      "Leaderboard"
    );

    Dom.form();
    Dom.addButtonFunctionality(score);
  }
}
