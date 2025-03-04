class Post {
    constructor(userId, id, title, completed) {
        this._userId = userId;
        this._id = id;
        this._title = title;
        this._completed = completed;
    }

    get userId() {
        return this._userId;
    }

    get id() {
        return this._id;
    }

    get title() {
        return this._title;
    }

    get completed() {
        return this._completed;
    }

    set userId(userId) {
        this._userId = userId;
    }

    set id(id) {
        this._id = id;
    }

    set title(title) {
        this._title = title;
    }

    set completed(completed) {
        this._completed = completed;
    }
}
module.exports = Post;