import "phaser";
import Button from "../objects/Button";
export default class InstructionScene extends Phaser.Scene {
  constructor() {
    super("InstructionScene");
  }

  create() {
    const height = this.scale.height * 0.5;
    const width = this.scale.width * 0.5;

    this.text = this.add.text(150, 40, "Game Play Instructions", {
      fontSize: 40,
    });

    this.leftButton = new Button(
      this,
      150,
      120,
      "blueButton1",
      "blueButton2",
      "⬅️"
    );
    this.leftText = this.add.text(300, 100, "Move the player to the left", {
      fontSize: 24,
    });

    this.rightButton = new Button(
      this,
      150,
      180,
      "blueButton1",
      "blueButton2",
      "➡️"
    );
    this.rightText = this.add.text(300, 160, "Move the player to the right", {
      fontSize: 24,
    });

    this.upButton = new Button(
      this,
      150,
      240,
      "blueButton1",
      "blueButton2",
      "⬆️"
    );
    this.upText = this.add.text(300, 215, "Make the player jump,", {
      fontSize: 24,
    });
    this.jumpText = this.add.text(300, 240, "You can also use the spacebar.", {
      fontSize: 24,
    });

    this.shootButton = new Button(
      this,
      150,
      300,
      "blueButton1",
      "blueButton2",
      "✖"
    );
    this.shootText = this.add.text(300, 280, "Shoot the enemies", {
      fontSize: 24,
    });

    this.readyText = this.add.text(width * 0.65, 380, "Ready to Play?", {
      fontSize: 30,
    });

    this.menuButton = new Button(
      this,
      200,
      height + 200,
      "blueButton1",
      "blueButton2",
      "Back",
      "Title"
    );

    this.playButton = new Button(
      this,
      600,
      height + 200,
      "blueButton1",
      "blueButton2",
      "Play",
      "Game"
    );
  }
}
