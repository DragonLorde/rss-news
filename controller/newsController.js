import FabricNews from "../API/index.js";

const fabric = new FabricNews();
const Parser = fabric.getClass();

class News {
    rssUrl = '';
    constructor(url) {
        this.rssUrl = url;
    }

    getData() {
        return new Promise(async(resolve, reject) => {
            let arrFeed = []
            let feed = await Parser.parseURL(this.rssUrl);
            feed.items.forEach(item => {
                arrFeed.push({...item});
            });
            if(arrFeed.length != 0) {
                resolve(arrFeed);
            }
            reject();
        });
    }
}

export default News;