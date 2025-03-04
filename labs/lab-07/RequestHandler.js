// RequestHandler.js
const Post = require("./Post");

class RequestHandler {
    async printTargetPost(URL, userId, postId) {
        // Construct the returned data as a Post data model from class Post
        let allPosts = await this._getAllPosts(URL);
        const allPostByUserId = allPosts.filter(post => post.userId === userId);
        if (allPostByUserId.length > 0) {
            const targetPost = allPostByUserId.filter(post => post.id === postId);
            if (targetPost.length > 0) {
                console.log(targetPost);
            } else {
                console.log('No post found with postId: ' + postId);

            }
        } else {
            console.log('No post found with userId: ' + userId);
        }
    }


    async printAllPosts(URL, userId) {
        // Construct the returned data as a [ Post data model ] from class Post
        let allPosts = [];
        const posts = await this._getAllPosts(URL);
        for (const post of posts) {
            if (post.userId === userId) {
                allPosts.push(new Post(post.userId, post.id, post.title, post.completed));
            }
        }
        if (allPosts.length > 0) {
            console.log(allPosts);
        }else {
            console.log('No post found with userId: ' + userId);
        }
    }

    async _getAllPosts(URL) {
        const allPosts = [];
        const response = await fetch(URL);
        const posts = await response.json();
        for (const post of posts) {
            allPosts.push(new Post(post.userId, post.id, post.title, post.completed));
        }
        return allPosts;
    }

}

module.exports = RequestHandler;