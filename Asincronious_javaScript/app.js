<<<<<<< HEAD
//xhr plain data

// document.getElementById('button').addEventListener('click', loadData);
//
// function loadData() {
//   // Create an XHR object
//   const xhr = new XMLHttpRequest();
//
//   // Open
//   xhr.open('GET', 'data.txt', true);
//
//   xhr.onload = function() {
//     if(this.status === 200) {
//       console.log(this.responseText);
//     }
//   }
//
//   xhr.send();
// }
=======
// document.getElementById('button').addEventListener('click', loadData);
//
// function loadData() {
//   // Create an XHR object
//   const xhr = new XMLHttpRequest();
//
//   // Open
//   xhr.open('GET', 'data.txt', true);
//
//   xhr.onload = function() {
//     if(this.status === 200) {
//       console.log(this.responseText);
//     }
//   }
//
//   xhr.send();
// }

const button1 = document.getElementById('button1');

button1.addEventListener('click', getJSONData);
const button2 = document.getElementById('button2');

button2.addEventListener('click', loadCustomers);

function getJSONData(e) {
  //Create XHR object
  const xhr = new XMLHttpRequest();
    // Open
    xhr.open('GET', 'customer.json', true);

    xhr.onload = function() {
      if(this.status === 200) {
        const customer = JSON.parse(this.responseText);

        const output = `
        <ul>
          <li>
            ID: ${customer.id}
          </li>
          <li>
            Name: ${customer.name}
          </li>
          <li>
            Company: ${customer.company}
          </li>
          <li>
            Phone: ${customer.phone}
          </li>
        </ul>`

        const outputCustomer = document.getElementById('customer');
        outputCustomer.innerHTML = output;

      }
    }
    xhr.send();
  }

  // Load loadCustomers
  function loadCustomers(e) {
    //Create XHR object
    const xhr = new XMLHttpRequest();
      // Open
      xhr.open('GET', 'customers.json', true);

      xhr.onload = function() {
        if(this.status === 200) {
          const customers = JSON.parse(this.responseText);
          let output = '';
          customers.forEach(function(customer){
            output += `
            <ul>
              <li>
                ID: ${customer.id}
              </li>
              <li>
                Name: ${customer.name}
              </li>
              <li>
                Company: ${customer.company}
              </li>
              <li>
                Phone: ${customer.phone}
              </li>
            </ul>`
          });
          const outputCustomer = document.getElementById('customer2');
          outputCustomer.innerHTML = output;
        }
      }
      xhr.send();
    }
>>>>>>> 2feaf0115e25e1b7df1dbbee76c27ce36e1079d7
