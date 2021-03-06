import Phaser from 'phaser';
import blueButton1 from '../../assets/ui/blue_button02.png';
import blueButton2 from '../../assets/ui/blue_button03.png';
import box from '../../assets/ui/grey_box.png';
import checkedBox from '../../assets/ui/blue_boxCheckmark.png';
import bgMusic from '../../assets/titleTheme.mp3';

export default class PreloaderScene extends Phaser.Scene {
  constructor() {
    super('Preloader');
  }

  init() {
    this.readyCount = 0;
  }

  preload() {
    const width = this.scale.width * 0.5;
    const height = this.scale.height * 0.5;
    this.logo = this.add
      .sprite(width, height * 0.5, 'logo', 0)
      .setScale(0.7, 0.7);
    this.load.image('blueButton1', blueButton1);
    this.load.image('blueButton2', blueButton2);
    this.load.image('box', box);
    this.load.image('checkedBox', checkedBox);
    this.load.audio('bgMusic', bgMusic);

    if (!this.anims.get('logo')) {
      this.anims.create({
        key: 'logo',
        frames: this.anims.generateFrameNames('logo', {
          frames: [18, 19, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
        }),
        frameRate: 7.5,
        repeat: -1,
      });
    }

    this.logo.anims.play('logo');

    const progressBar = this.add.graphics();
    const progressBox = this.add.graphics();
    progressBox.fillStyle(0x222222, 0.8);
    progressBox.fillRect(width / 1.78, 270, 320, 50);
    const loadingText = this.make.text({
      x: width,
      y: height - 50,
      text: 'Loading...',
      style: {
        font: '20px monospace',
        fill: 'white',
      },
    });
    loadingText.setOrigin(0.5, 0.5);

    const percentText = this.make.text({
      x: width - 25,
      y: height - 5,
      text: '0%',
      style: {
        font: '18px monospace',
        fill: 'white',
      },
    });
    percentText.setOrigin(0.5, 0.5);

    const assetText = this.make.text({
      x: width,
      y: height + 50,
      text: '',
      style: {
        font: '18px monospace',
        fill: 'white',
      },
    });
    assetText.setOrigin(0.5, 0.5);

    this.load.on('progress', (value) => {
      percentText.setText(`${parseInt(value * 100, 10)}%`);
      progressBar.clear();
      progressBar.fillStyle(0xffffff, 1);
      progressBar.fillRect(width / 1.7, 280, 300 * value, 30);
    });

    this.load.on('fileprogress', (file) => {
      assetText.setText(`Loading asset: ${file.key}`);
    });

    this.load.on('complete', () => {
      progressBar.destroy();
      progressBox.destroy();
      loadingText.destroy();
      percentText.destroy();
      assetText.destroy();
      this.ready();
    });

    this.timedEvent = this.time.delayedCall(2850, this.ready, [], this);
  }

  ready() {
    this.readyCount += 1;
    if (this.readyCount === 2) {
      this.scene.start('Title');
    }
  }
}
