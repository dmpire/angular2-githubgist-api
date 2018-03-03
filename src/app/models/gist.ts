import { GistFile } from './gist-file';
export class Gist {
    description: string;
    public_: boolean;
    files: Array<GistFile>;
    _id: string;

    constructor() {
        this.files = new Array<GistFile>();
        this.files.push(new GistFile());
    }
}
