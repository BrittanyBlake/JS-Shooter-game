import Phaser from 'phaser';
import playerAttackGroup from '../src/helper/playerAttackGroup';

test('player Attack Group is a subclass of Phaser.Scene', () => {
  expect(playerAttackGroup).toBeSubclassOf(Phaser.Physics.Arcade.Group);
});
