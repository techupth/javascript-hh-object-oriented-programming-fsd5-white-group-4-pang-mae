//  Start coding here
class User {
    constructor (id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
}
class postList { 
    constructor ( ) {
       this.posts = [];
    }
    addPost (post){
        this.posts.push(post);
    }
    sharePost (postTitle) {
        console.log(`You've shared post ${postTitle} to your friend.`);
    }
}
class Post  {
    constructor (id, title, content, comment) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.comment = comment;
    }
    addComment (comment) {
        this.comment.push(comment);
    }
}
class Comment {
    constructor (id, content, cratedBy, like) {
        this.id = id;
        this.content = content;
        this.cratedBy = cratedBy ;
        this.like = like;
    }
    addLike() {
        this.like  = this.like + 1;
      }
}
class Facebook {
    constructor ( groupList, pageList) {
        this.groupList = [];
        this.pageList = [];
    }
    addGroup() {
        this.groupList.push(this.groupList);
    }
    addPage() {
        this.pageList.push(pageList);
     }
}
class FacebookPage {
    constructor (name) {
        this.name = name;
    }
}
class FacebookGroup  {
    constructor (name) {
        this.name = name;
    }
}
class  Notification {
    constructor(id) {
        this.id = id;
    }
    send() {
        console.log( `Notification: ${CommentCreatedBy} has just commented on this post—"${postTitle}”`);
      }
}
