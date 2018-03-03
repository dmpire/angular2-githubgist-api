import { GistFile } from './gist-file';
export class Gist {
    description: string;
    public_: boolean;
    files: Array<GistFile> = [];
    id: string;
}
