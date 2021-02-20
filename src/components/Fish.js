import { Sprite, Texture } from 'pixi.js';
import gsap from 'gsap/all';
import { PixiPlugin } from 'gsap/all';

export default class Fish extends Sprite{
    constructor(texture){
        super(texture);
        this.name = 'fish';

        this.interactive = true;
        this.buttonMode = true;

        this.anchor.set(0.5);

    }

    expand(){
        this.texture = Texture.from('bigFish');
        gsap.to(this.scale, {x: 1.5, y: 1.5, duration: 1});

        setTimeout(() => this.contract(), 5000);
    }

    contract(){
        gsap.to(this.scale, {x: 1, y: 1, duration: 1});
        this.texture = Texture.from('smallFish');
    }

}