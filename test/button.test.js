import Phaser from 'phaser';
import Button from '../src/objects/Button';

test('Button is a subclass of Phaser.GameObjects.Container', () => {
  expect(Button).toBeSubclassOf(Phaser.GameObjects.Container);
});