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
const sr = ScrollReveal({
	origin: 'top',
	distance: '40px',
	duration: 2500,
	delay: 400,
	// reset: true, //Animations repeat
})

sr.reveal('.book-container')
sr.reveal('.book-container',{delay: 300})

/*=============== CREATE HTML ===============*/
function fileExists(url) {
	var http = new XMLHttpRequest();
	http.open('HEAD', url, false);
	http.send();
	return http.status != 404;
}

const IMG_PATH = './cover/';

const container = document.getElementById("book-container");
const detailClose = document.getElementById('detail-close')
const detailContent = document.getElementById('book-detail')
const info = document.getElementById('info')
const swiper = document.getElementById('book-swiper')

fetch('../../db/book/manga.json')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    data.forEach(element => {
      if (element.reading_status == "阅读中") {

        const div_row = document.createElement('div');
        div_row.setAttribute('class', 'row');
		div_row.setAttribute('id', 'row');

        const div_column = document.createElement('div');
        div_column.setAttribute('class', 'column');

        const div_card = document.createElement('div');
        div_card.setAttribute('class', 'book-card');
		// div_card.setAttribute('id', 'book-card');

        const center = document.createElement('center');

        const image = document.createElement('img');
        image.setAttribute('class', 'book-img');
        image.setAttribute('id', 'img');

        const title = document.createElement('h2');
        title.setAttribute('class', 'book-title');

        title.innerHTML = `${element.title}`;
        image.src = IMG_PATH + element.img_path;

        container.appendChild(div_row);
        div_row.appendChild(div_column);
        div_column.appendChild(div_card);
        div_card.appendChild(center);
        center.appendChild(image);
        div_card.appendChild(title);
		
		




		url= IMG_PATH + element.title + "1" +".jpg"
		let exists = fileExists(url);

		/* Detail show */
		if(div_card){
			div_card.addEventListener('click', () =>{
				const infotitle = document.createElement('h2');
				infotitle.setAttribute('class', 'title');
				infotitle.innerHTML = `${element.title}`;
		
				const totalvol = document.createElement('div');
				totalvol.setAttribute('class', 'total-vol');
				totalvol.innerHTML = element.total_vol;
		
				info.appendChild(infotitle);
				info.appendChild(totalvol);
				
				if(exists!= 404)
				{
					for (let i = 0; i < totalvol; i++) {
						console.log(i);
						const article = document.createElement('article');
						article.setAttribute('class','book-article');
						article.setAttribute('class','swiper-slide');
						const images = document.createElement('img');
						images.setAttribute('class', 'detail-img');
						images.src = IMG_PATH + element.title + 'i+1' + ".jpg"
						swiper.appendChild(article);
						article.appendChild(images);
					}
				}


				detailContent.classList.add('show-detail');



			})
		}

		/* Detail hidden */
		if(detailClose){
			detailClose.addEventListener('click', () =>{
				detailContent.classList.remove('show-detail');
				remove()
			})
		}
      };
	 
    });
  })

/*=============== HOME SWIPER ===============*/
let swiperdetail = new Swiper('.detail-swiper', {
	loop: true,
	spaceBetween: -24,
	grabCursor: true,
	slidesPreview: true,
	centeredSlides: true,

	autoplay: {
		delay: 2000,
		disableOnInteraction: false,
	},

	breakpoints: {
		1220: {
			spaceBetween: -32,
		}
	}
});
/*=============== SHOW DETAIL ===============*/
// const bookcard = document.getElementById('img'),
//       detailClose = document.getElementById('detail-close'),
//       detailContent = document.getElementById('book-detail')

// /* Menu show */
// if(bookcard){
// 	bookcard.addEventListener('click', () =>{
//         detailContent.classList.add('show-detail')
//     })
// }

// /* Menu hidden */
// if(detailClose){
// 	detailClose.addEventListener('click', () =>{
// 		detailContent.classList.remove('show-detail')
//     })
// }