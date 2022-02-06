console.log("try");

// var arr = [{
//     id = "1",
//     title = "",
//     desc = ""
// }];

// function submit() {

let movies = [];

const addMovie = (ev) => {
    ev.preventDefault();
    let movie = {
        id: Date.now(),
        title: document.getElementById("title").value,
        content: document.getElementById("desc").value

    }



    movies.push(movie);
    console.log(movie);
    document.forms[0].reset();

    console.warn('added', { movies });

    let pre = document.querySelector('#msg pre');
    pre.textContent = '\n' + JSON.stringify(movies, '\t', 2);





    // var title = document.getElementById("title").value;
    // var content = document.getElementById("content").value;

    temp = document.getElementById('show_card');

    for (let i = 0; i < movies.length; i++) {
        x = '';
        console.log('hi');
        x += `<div class="main"><h1 id="show_card_title">${movies[i].title}</h1><p id="show_card_paragraph">${movies[i].content} <br/><input type="button" id="edit" value="EDIT" />
        <input type="button" id="delete" value="DELETE" />`;
        temp.innerHTML += x;

    }

    var show_card_title = document.getElementById("show_card_title");
    var show_card_paragraph = document.getElementById("show_card_paragraph");

    // console.log(title);
    // console.log(content);
    console.log(movies[0]);

    // show_card_title.innerHTML = movies[0].title;

    // show_card_paragraph.innerHTML = movies[0].content;


    // console.log(typeof arr);


}
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("btn").addEventListener('click', addMovie);
});