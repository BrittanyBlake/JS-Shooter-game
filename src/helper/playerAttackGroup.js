import PlayerAttack from './playerAttack';
export default class PlayerAttackGroup extends Phaser.Physics.Arcade.Group {
  constructor(scene) {
    super(scene.physics.world, scene);

    this.createMultiple({
      frameQuantity: 1,
      key: 'playerAttack',
      active: false,
      visible: false,
      classType: PlayerAttack,
    });
  }

  shoot(x, y) {
    const attack = this.getFirstDead(false);

    if (attack) {
      attack.fire(x, y);
    }
  }
}