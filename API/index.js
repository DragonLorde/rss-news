import Parser from "rss-parser";


class FabricNews {

    newRssParser = {};

    constructor(url) {
        
        this.newRssParser = new Parser();
    }

    getClass() {
        return this.newRssParser;
    }

}

export default FabricNews;