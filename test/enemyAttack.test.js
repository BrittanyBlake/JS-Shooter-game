import Phaser from 'phaser';
import EnemyAttack from '../src/helper/enemyAttack';

test('Enemy Attack is a subclass of Phaser.Scene', () => {
  expect(EnemyAttack).toBeSubclassOf(Phaser.Physics.Arcade.Sprite);
});
