const posts = [
  {title: 'Post one', body: 'This is post 1'},
  {title: 'Post two', body: 'This is post 2'}
];


function createPost(post) {
  return new Promise(function(resolve, reject) {
      setTimeout(function() {
        posts.push(post);
        const err = true;
        if(!err) {
          resolve();
        } else {
          reject('Error ocured');
        }
      }, 2000);
    });
}

//function onRegect()

function getPost() {
  setTimeout(function() {
    let output = '';
    posts.forEach(function(post){
      output += `<li>${post.title}</li>`;
      });
    document.body.innerHTML = output;
    }, 1000);
}

createPost({title: 'Post three', body: 'This is post 3'})
.then(getPost).catch(function(e){console.log(e);});
