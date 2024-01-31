const IMG_PATH = './cover/';

const main = document.getElementById("content-box");
const form = document.getElementById("form");
const search = document.getElementById("query");

fetch('../../db/game/game.json')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    data.forEach(element => {

        const div_row = document.createElement('div');
        div_row.setAttribute('class', 'row');

        const div_column = document.createElement('div');
        div_column.setAttribute('class', 'column');

        const div_card = document.createElement('div');
        div_card.setAttribute('class', 'card');

        const center = document.createElement('center');

        const image = document.createElement('img');
        image.setAttribute('class', 'thumbnail');
        image.setAttribute('id', 'image');

        const title = document.createElement('div');
        title.setAttribute('id', 'title');

        title.innerHTML = `${element.title}`;
        image.src = IMG_PATH + element.img_path;

        main.appendChild(div_row);
        div_row.appendChild(div_column);
        div_column.appendChild(div_card);
        div_card.appendChild(center);
        center.appendChild(image);
        div_card.appendChild(title);
        
    });
  })