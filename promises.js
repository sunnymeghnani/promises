// const posts = [];
// function createPost(postTitle, postBody) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       posts.push({ title: postTitle, body: postBody });
//       resolve();
//     }, 1000);
//   });
// }
// function updateLastUserActivityTime() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       postTime = new Date().toLocaleTimeString();
//       resolve(postTime);
//     }, 1000);
//   });
// }
// function showUser() {
//   setTimeout(() => {
//     posts.forEach((post) => {
//       console.log(post.title);
//     });
//   }, 1000);
// }
// function deleteUser() {
//   return new Promise((resolve, reject) => {
//     setTimeout(function () {
//       posts.pop();
//       resolve();
//     }, 1000);
//   });
// }
// Promise.all[
//   (createPost(`post 1`, `post 1 body`), //.then(() => showUser()),
//   updateLastUserActivityTime().then((dates) => {
//     console.log(dates);
//   }))
// ];
// Promise.all[
//   (createPost(`post 2`, `post 2 body`),
//   updateLastUserActivityTime().then((dates) => {
//     console.log(dates);
//     // showUser();
//   }))
// ];
// deleteUser().then(() => showUser());
// showUser();

console.log(`person 1: shows ticket`);
console.log(`person 2: shows ticket`);
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(`ticket`);
  }, 3000);
});
const promise2 = promise1.then((t) => {
  //   console.log(`person 3: show${t}`);
  console.log(`we got ${t}`);
  console.log(`need popcorn`);
  return new Promise((resolve, reject) => {
    resolve(`${t} popcorn`);
  });
});
const promise3 = promise2.then((t) => {
  console.log(`we have ${t}`);
  return new Promise((resolve, reject) => {
    resolve(`${t} butter`);
  });
});
const promise4 = promise3.then((t) => {
  console.log(`we have ${t}`);
  return new Promise((resolve, reject) => {
    resolve(`${t} coldDrink`);
  });
});
promise4.then((t) => console.log(t));
console.log(`person 4: shows ticket`);
//////////////// using await//////////////
console.log(`person 1: shows ticket`);
console.log(`person 2: shows ticket`);
const movie = async () => {
  const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`ticket`);
    }, 3000);
  });
  let ticket = await promise1;
  console.log(`i have ${ticket}`);
  const promise2 = new Promise((resolve, reject) => {
    resolve(`popcorn`);
  });
  let popcorn = await promise2;
  console.log(`i got the ${popcorn} for the movie`);
  const promise3 = new Promise((resolve, reject) => {
    resolve(`butter`);
  });
  let butter = await promise3;
  console.log(`bring some ${butter} for the popcorn`);
  const promise4 = new Promise((resolve, reject) => {
    resolve(`cold drink`);
  });
  let bevarage = await promise4;
  console.log(`can i have ${bevarage} with ${popcorn}`);
  return ticket;
};

movie().then((m) => {
  console.log(`person3 shows ${m}`);
});
console.log(`person 4: shows ticket`);
