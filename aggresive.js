const snippets = document.getElementById('snippets');

setTimeout(() => {
  snippets.style.backgroundColor = 'red';
}, 2000);

const h2 = snippets.querySelector('h2');

h2.style.fontSize = '100px';

// setTimeout(
//   () =>
//     (snippets.innerHTML = `<p>Welcome to the snippets page yo
// </p>`)
// ),
//   2000;');
setInterval(() => {
  // create a new element
  const button = document.createElement('button');
  button.innerText = 'Answer survey';
  button.addEventListener('click', survey);
  document.body.append(button);
}, 2000);

function survey() {
  prompt('how are you enjoying your time>');
  // sends response back.
}

function aggresiveButton(button) {
  // const button = document.querySelector()
  console.log(button);
  button.innerHTML = 'Answer survey pleaseeee';
}
