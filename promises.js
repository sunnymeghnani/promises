const posts = [];
function createPost(postTitle, postBody) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push({ title: postTitle, body: postBody });
      resolve();
    }, 1000);
  });
}
function updateLastUserActivityTime() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      postTime = new Date().toLocaleTimeString();
      resolve(postTime);
    }, 1000);
  });
}
function showUser() {
  setTimeout(() => {
    posts.forEach((post) => {
      console.log(post.title);
    });
  }, 1000);
}
function deleteUser() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      posts.pop();
      resolve();
    }, 1000);
  });
}
Promise.all[
  (createPost(`post 1`, `post 1 body`), //.then(() => showUser()),
  updateLastUserActivityTime().then((dates) => {
    console.log(dates);
  }))
];
Promise.all[
  (createPost(`post 2`, `post 2 body`),
  updateLastUserActivityTime().then((dates) => {
    console.log(dates);
    // showUser();
  }))
];
deleteUser().then(() => showUser());
showUser();
