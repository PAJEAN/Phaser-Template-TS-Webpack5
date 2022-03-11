import Phaser from 'phaser';

enum IMG {
    SKY = 'sky',
    LOGO = 'logo',
    RED = 'red'
};

export default class Game extends Phaser.Scene {

	constructor() {
		super('game');
	}

	preload() {
        this.load.setBaseURL('http://labs.phaser.io');
        this.load.image(IMG.SKY, 'assets/skies/space3.png');
        this.load.image(IMG.LOGO, 'assets/sprites/phaser3-logo.png');
        this.load.image(IMG.RED, 'assets/particles/red.png');
    }

    create() {
        /* Background */
        this.add.image(400, 300, IMG.SKY);
        /* Particles */
        let particles = this.add.particles(IMG.RED);
        let emitter = particles.createEmitter({
            speed: 100,
            scale: { start: 1, end: 0 },
            blendMode: 'ADD'
        });
        /* Logo */
        let logo = this.physics.add.image(400, 100, IMG.LOGO);
        logo.setVelocity(100, 200);
        logo.setBounce(1, 1);
        logo.setCollideWorldBounds(true);
        /* Particles follow logo */
        emitter.startFollow(logo);
    }

    update (t: number, dt: number) {}
}