// take textbox name value and say hello on button click
// take textbox name value and say hello on button click
// take textbox name value and say hello on button click
// take textbox name value and say hello on button click
// take textbox name value and say hello on button click
// take textbox name value and say hello on button click
// take textbox name value and say hello on button click
// take textbox name value and say hello on button click
// take textbox name value and say hello on button click
// take textbox name value and say hello on button click
// say hello
function greet(name) {
    console.log('Hello ' + name);
}
// get name from textbox
function getName() {
    let name = (<HTMLInputElement>document.getElementById('name')).value;
    return name;
}
// button click event
const button = document.querySelector('button');

if (button) {
  button.addEventListener('click', function () {
    greet(getName());
  });
}