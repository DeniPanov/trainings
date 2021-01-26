export class Recipe {
    public name: string;
    public description: string;
    public imagePath: string;

    constructor(name: string,descriptopn: string, image: string) {
        this.name = name,
        this.description = descriptopn,
        this.imagePath = image
    }
}