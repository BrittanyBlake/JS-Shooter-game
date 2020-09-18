import "phaser";
import Button from "../objects/Button";
export default class TitleScene extends Phaser.Scene {
  constructor() {
    super("Title");
  }

  preload() {
    const width = this.scale.width * 0.5;
    const height = this.scale.height * 0.5;
    this.logo = this.add
      .sprite(width, height * 0.5, "logo", 0)
      .setScale(0.7, 0.7);

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

    this.logo.anims.play("logo");
  }

  create() {
    const height = this.scale.height * 0.5;
    const width = this.scale.width * 0.5;

    this.playButton = new Button(
      this,
      width - 200,
      height + 150,
      "blueButton1",
      "blueButton2",
      "Play",
      "InstructionScene"
    );

    this.optionsButton = new Button(
      this,
      width - 200,
      height + 50,
      "blueButton1",
      "blueButton2",
      "Options",
      "Options"
    );

    this.creditsButton = new Button(
      this,
      width + 200,
      height + 50,
      "blueButton1",
      "blueButton2",
      "Credits",
      "Credits"
    );

    this.leaderButton = new Button(
      this,
      width + 200,
      height + 150,
      "blueButton1",
      "blueButton2",
      "Leaderboard",
      "LeaderBoardScene"
    );

    this.model = this.sys.game.globals.model;
    if (this.model.musicOn === true && this.model.bgMusicPlaying === false) {
      this.bgMusic = this.sound.add("bgMusic", { volume: 0.3, loop: true });
      this.bgMusic.play();
      this.model.bgMusicPlaying = true;
      this.sys.game.globals.bgMusic = this.bgMusic;
    }
  }

  centerButton(gameObject, offset = 0) {
    Phaser.Display.Align.In.Center(
      gameObject,
      this.add.zone(width, width - offset * 100, width * 2, height * 2)
    );
  }
  
  centerButtonText(gameText, gameButton) {
    Phaser.Display.Align.In.Center(gameText, gameButton);
  }
}
