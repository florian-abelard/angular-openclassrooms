export class Post {

    '@type' = 'Post';
    private title: string;
    private content: string;
    private loveIts: number;
    private createdAt: Date;

    constructor(title: string, content: string) {
        this.title = title;
        this.content = content;
        this.loveIts = 0;
        this.createdAt = new Date();
    }
}
