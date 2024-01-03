//  Start coding here
class User {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
}
class postList {
  constructor(posts) {
    this.posts = posts;
  }
  addPost(post) {
    this.posts.push(post);
  }
  sharePost(post) {
    console.log(`You've shared post ${post.title} to your friend.`);
  }
}
class Post {
  constructor(id, title, content, comment) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.comment = comment;
  }
  addComment(comment) {
    this.comment.push(comment);
  }
}
class Comment {
  constructor(id, content, createdBy, like) {
    this.id = id;
    this.content = content;
    this.createdBy = createdBy;
    this.like = like;
  }
  addLike() {
    this.like++;
  }
}
class Facebook {
  constructor(groupList, pageList) {
    this.groupList = groupList;
    this.pageList = pageList;
  }
  addGroup() {
    this.groupList.push(group);
  }
  addPage() {
    this.pageList.push(page);
  }
}
class FacebookPage {
  constructor(name) {
    this.name = name;
  }
}
class FacebookGroup {
  constructor(name) {
    this.name = name;
  }
}

class Notification {
  constructor(id) {
    this.id = id;
  }
  send(comment, post) {
    console.log(
      `Notification: ${comment.createdBy} has just commented on this post—"${post.title}"`
    );
  }
}

//Example
const createdPost = new postList([]);
const newPost = new Post("1", "JavaScript", "Introduction to JavaScript", []);
createdPost.sharePost(newPost);
createdPost.addPost(newPost);

const createdNotification = new Notification([]);
const newComment = new Comment("1", "JS for newbie", "TechUp Thailand", 0);
createdNotification.send(newComment, newPost);
