import "phaser";
import Button from "../Objects/Button";

export default class OptionsScene extends Phaser.Scene {
  constructor() {
    super("Options");
  }

  create() {
    let height = this.scale.height * 0.5;
    let width = this.scale.width * 0.5;

    this.model = this.sys.game.globals.model;
    width = this.scale.width * 0.3;
    height = this.scale.height;

    this.text = this.add.text(width + 58, 100, "Options", { fontSize: 40 });
    this.musicToggle = this.add.image(width, 270, "checkedBox");
    this.musicText = this.add.text(width + 50, 260, "Music Enabled", {
      fontSize: 24,
    });
    this.musicToggle.setInteractive();

    this.musicToggle.on("pointerdown", () => {
      this.model.musicOn = !this.model.musicOn;
      this.toggleAudio();
    });

    this.menuButton = new Button(
      this,
      width + 140,
      height * 0.7,
      "blueButton1",
      "blueButton2",
      "Back",
      "Title"
    );

    this.toggleAudio();
  }

  toggleAudio() {
    if (this.model.musicOn === false) {
      this.musicToggle.setTexture("box");
      this.sys.game.globals.bgMusic.stop();
      this.model.bgMusicPlaying = false;
    } else {
      this.musicToggle.setTexture("checkedBox");
      if (this.model.bgMusicPlaying === false) {
        this.sys.game.globals.bgMusic.play();
        this.model.bgMusicPlaying = true;
      }
    }
  }
}
