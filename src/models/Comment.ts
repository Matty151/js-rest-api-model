import Model from '../Model';
import Reply from './Reply';

export default class Comment extends Model {
    replies(id?: number | string) {
        return new Reply(this, id);
    }
}
