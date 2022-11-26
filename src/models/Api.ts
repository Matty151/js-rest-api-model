import Model from '../Model';
import Post from './Post';

export default class Api extends Model {
    posts(id?: number) {
        return new Post(this, id);
    }

    getName(): string {
        return 'api';
    }
}
