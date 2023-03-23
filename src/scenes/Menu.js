class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }
    preload(){
        this.load.audio('sfx_dice', './assets/Dice.wav');
    }
    create(){
        this.keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        this.textConfig = {
            fontSize: '28px',
            color: '#eb2525',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            
            }
        this.Text = this.add.text(game.config.width/2, game.config.height/2 - 80, 'Press SPACE to roll dice', this.textConfig).setOrigin(0.5);
        this.teexxt = this.add.text(game.config.width/2, game.config.height/2-110, 'Press up to start', this.textConfig).setOrigin(0.5);
    }
    update(){
        if(Phaser.Input.Keyboard.JustDown(this.keyUP)){
            this.scene.start("playScene");
        }
    }
}