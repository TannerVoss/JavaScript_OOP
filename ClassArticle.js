class Article {
    constructor(title, text, author) {
        this.title = title;
        this.text = text;
        this.author = author;
        this.date = new Date();
    }
    read() {
        console.log(this.text);

    }
}

class Blog extends article {
    constructor(title, text, author, tags) {
        super(title, text, author, tags);
        this.tags = tags;
    }
    share(shareType) {
        if (shareType) {
            console.log(`sharing on ${shareType}...`);
        } else {
            console.log("no share type selected")
        }

    }
    let blog = new blog("Best Halloween Costumes 2021", "Streets cones are IN!", "Ben Bryant", ["halloween"], ["trick or treat"]);

    console.log(blog);
    blog.read();
    blog.share("twitter");