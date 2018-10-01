document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJSON);
document.getElementById('button3').addEventListener('click', getExternal);

function getText() {
  fetch('data.txt')
    .then(function(res) {
    return res.text();
    })
    .then(function(data) {
      document.getElementById('output').innerHTML = data;
    })
    .catch(function(err) {
      console.log(err);
    });
    }

// get json file
function getJSON() {
  fetch('customers.json')
    .then(function(res) {
      console.log(res);
    return res.json();
    })
    .then(function(data) {
      let output = '';
      data.forEach(function(post) {
        output += `<li>${post.name}</li>`;
        });
      document.getElementById('output').innerHTML = output;
    })
    .catch(function(err) {
      console.log(err);
    });
    }

    //get getExternal

    // get json file
    function getExternal() {
      fetch('https://api.github.com/users')
        .then(function(res) {
        return res.json();
        })
        .then(function(data) {
          let output = '';
          data.forEach(function(post) {
            output += `<li>${post.login}</li>`;
            });
          document.getElementById('output').innerHTML = output;
        })
        .catch(function(err) {
          console.log(err);
        });
        }
