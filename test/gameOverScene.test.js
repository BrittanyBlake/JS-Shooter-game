import Phaser from 'phaser';
import GameOverScene from '../src/scenes/GameOverScene';

test('GameOverScene is a subclass of Phaser.Scene', () => {
  expect(GameOverScene).toBeSubclassOf(Phaser.Scene);
});