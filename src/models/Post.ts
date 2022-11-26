import Model from '../Model';
import Comment from './Comment';

export default class Post extends Model {
    comments(id?: number) {
        return new Comment(this, id);
    }
}
