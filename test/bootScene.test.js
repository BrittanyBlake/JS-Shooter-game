import BootScene from '../src/scenes/BootScene'
test("Bootscene is a subclass of Phaser.SCENE", () => {
  expect(BootScene).toBeSubclassOf(Phaser.Scene);
});