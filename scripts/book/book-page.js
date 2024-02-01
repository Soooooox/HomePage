/*=============== SHOW MENU ===============*/
const searchButton = document.getElementById('search-button'),
      searchClose = document.getElementById('search-close'),
      searchContent = document.getElementById('search-content')

/* Menu show */
if(searchButton){
  searchButton.addEventListener('click', () =>{
        searchContent.classList.add('show-search')
    })
}

/* Menu hidden */
if(searchClose){
  searchClose.addEventListener('click', () =>{
    searchContent.classList.remove('show-search')
    })
}
/*=============== ADD SHADOW HEADER ===============*/
const shadowHeader = () =>{
  const header = document.getElementById('header')
  // Add a class if the bottom offset is greater than 50 of the viewport
  this.scrollY >= 50 ? header.classList.add('shadow-header') 
                     : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)

/*=============== HOME SWIPER ===============*/

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav-menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

/*=============== DARK LIGHT THEME ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/

// const IMG_PATH = './cover/';

// const main = document.getElementById("content-box");
// const form = document.getElementById("form");
// const search = document.getElementById("query");

// fetch('../../db/book/manga.json')
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//     data.forEach(element => {
//       if (element.reading_status == "阅读中") {

//         const div_row = document.createElement('div');
//         div_row.setAttribute('class', 'row');

//         const div_column = document.createElement('div');
//         div_column.setAttribute('class', 'column');

//         const div_card = document.createElement('div');
//         div_card.setAttribute('class', 'card');

//         const center = document.createElement('center');

//         const image = document.createElement('img');
//         image.setAttribute('class', 'thumbnail');
//         image.setAttribute('id', 'image');

//         const title = document.createElement('div');
//         title.setAttribute('id', 'title');

//         title.innerHTML = `${element.title}`;
//         image.src = IMG_PATH + element.img_path;

//         main.appendChild(div_row);
//         div_row.appendChild(div_column);
//         div_column.appendChild(div_card);
//         div_card.appendChild(center);
//         center.appendChild(image);
//         div_card.appendChild(title);
//       };

//     });
//   })