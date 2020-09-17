import "phaser";
import logo from "../../assets/images/playervictory.png";
export default class BootScene extends Phaser.Scene {
  constructor() {
    super("Boot");
  }

  preload() {
    this.load.spritesheet("logo", logo, { frameWidth: 480, frameHeight: 480 });
  }

  create() {
    this.scene.start("Preloader");
  }
}
