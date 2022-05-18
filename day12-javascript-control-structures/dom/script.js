const headline = document.getElementById('main_headline');

console.log(headline);

const headline_contents = headline.innerHTML;

console.log(headline_contents);



function changeHeadline() {
    headline.innerHTML = 'Hey, I changed this!';
}