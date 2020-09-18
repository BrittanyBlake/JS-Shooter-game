import EnemyAttackGroup from "../src/helper/enemyAttackGroup";

test("Enemy Attack Group is a subclass of Phaser.Scene", () => {
  expect(EnemyAttackGroup).toBeSubclassOf(Phaser.Physics.Arcade.Group);
});
