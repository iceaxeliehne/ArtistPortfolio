
class card {
    "title" = "Title";
    "description" = "Description";
    "number" = 0;
    "imageSrc" = null;
    "type" = "base";
    constructor(title,description,number,imageSrc,type) {  // Constructor
        this.title = title;
        this.description = description;
        this.number = number;
        this.imageSrc = imageSrc;
        this.type = type;
    }
}

let cardData = [
    new card("Technology Interest","You can't get enough of technology.",1,"/jar.png","personal information"),
    new card("Shopoholic","You buy lots of stuff online",2,"/jar.png","personal information"),
    new card("New Phone","This flashy phone is sure to catch you eye",3,"/jar.png","targetted ad")
];