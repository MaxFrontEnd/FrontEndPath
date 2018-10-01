const posts = [
  {title: 'Post one', body: 'This is post 1'},
  {title: 'Post two', body: 'This is post 2'}
];

// function createPost(post) {
//   setTimeout(function() {
//     posts.push(post)
//   }, 2000);
// }
//
// function getPost() {
//   setTimeout(function() {
//     let output = '';
//     posts.forEach(function(post){
//       output += `<li>${post.title}</li>`;
//       });
//     document.body.innerHTML = output;
//     }, 1000);
// }
//
// createPost({title: 'Post three', body: 'This is post 3'});
// getPost();


function createPost(post, callback) {
  setTimeout(function() {
    posts.push(post)
    callback();
  }, 2000);
}

function getPost() {
  setTimeout(function() {
    let output = '';
    posts.forEach(function(post){
      output += `<li>${post.title}</li>`;
      });
    document.body.innerHTML = output;
    }, 1000);
}

createPost({title: 'Post three', body: 'This is post 3'}, getPost);
