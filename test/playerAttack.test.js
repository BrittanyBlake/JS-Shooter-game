import Phaser from 'phaser';
import playerAttack from '../src/helper/playerAttack';

test('playerAttack is a subclass of Phaser.Scene', () => {
  expect(playerAttack).toBeSubclassOf(Phaser.Physics.Arcade.Sprite);
});
