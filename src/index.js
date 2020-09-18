import Phaser from 'phaser';
import './styles/style.css';
import config from './config/config';
import GameScene from './scenes/GameScene';
import BootScene from './scenes/BootScene';
import PreloaderScene from './scenes/PreloaderScene';
import TitleScene from './scenes/TitleScene';
import OptionsScene from './scenes/OptionsScene';
import CreditsScene from './scenes/CreditsScene';
import SceneGameOver from './scenes/GameOverScene';
import LeaderBoard from './scenes/LeaderBoard';
import InstructionScene from './scenes/InstructionScene';
import Sound from './objects/sound';


class Game extends Phaser.Game {
  constructor() {
    super(config);
    const model = new Sound();
    this.globals = { model, bgMusic: null };
    this.scene.add('Boot', BootScene);
    this.scene.add('Preloader', PreloaderScene);
    this.scene.add('Title', TitleScene);
    this.scene.add('Options', OptionsScene);
    this.scene.add('Credits', CreditsScene);
    this.scene.add('LeaderBoardScene', LeaderBoard);
    this.scene.add('Game', GameScene);
    this.scene.add('SceneGameOver', SceneGameOver);
    this.scene.add('InstructionScene', InstructionScene);
    this.scene.start('Boot');
  }
}

window.game = new Game();