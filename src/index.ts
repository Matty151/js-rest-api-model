import Api from './models/Api';

const api = new Api();

console.log(api.posts().get());

let comments = api.posts(1).comments().get();

console.log(comments);
console.log(comments[0].replies().get());

// console.log(api.posts(1).comments(5).get());
