import Phaser from 'phaser';
/* Scenes */
import Game from './scenes/Game';

export default new Phaser.Game({
	title: 'Boilerplate (Phaser 3 & Webpack 5)',
	type: Phaser.AUTO, // Render type, can be CANVAS, WEBGL, or AUTO.
	parent: 'game', // DOM element id on the HTML page where we’ll add the Game.
	width: 800,
	height: 600,
	physics: { // Setting the game physics.
		default: 'arcade',
		arcade: {
			gravity: { y: 200 }
		}
	},
	scene: [ Game ],
    scale: {
		autoCenter: Phaser.Scale.CENTER_BOTH
    }
});