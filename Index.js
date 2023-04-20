
function changeText1(){
    var btn1 = document.getElementById("btn1");
    ChangeTextBtn(btn1)
    btn1.innerHTML = "(collection 1 info.)";
}

function changeText2(){
    var btn2 = document.getElementById("btn2");
    ChangeTextBtn(btn2)
    btn2.innerHTML = "(collection 2 info.)";
}

function changeText3(){
    var btn3 = document.getElementById("btn3");
    ChangeTextBtn(btn3)
    btn3.innerHTML = "(collection 3 info.)";
}

function changeText4(){
    var btn4 = document.getElementById("btn4");
    ChangeTextBtn(btn4)
    btn4.innerHTML = "(collection 4 info.)";
}

function ChangeTextBtn(num){
    num.style.backgroundImage = "none"
    num.style.boxShadow = "0 12px 16px 0 rgba(0,0,0,0.50),0 17px 50px 0 rgba(0,0,0,0.40)";

}

function changeTextBack(){
    btn1.innerHTML = "collection 1";
    btn1.style.backgroundImage = "url(https://assets.vogue.com/photos/616f075332e6aee08ea490e9/16:9/w_2580,c_limit/100_story.jpg)";
    btn1.style.boxShadow = "0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19)";

    btn2.innerHTML = "collection 2";
    btn2.style.backgroundImage = "url(https://assets.vogue.com/photos/616f075332e6aee08ea490e9/16:9/w_2580,c_limit/100_story.jpg)";
    btn2.style.boxShadow = "0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19)";

    btn3.innerHTML = "collection 3";
    btn3.style.backgroundImage = "url(https://assets.vogue.com/photos/616f075332e6aee08ea490e9/16:9/w_2580,c_limit/100_story.jpg)";
    btn3.style.boxShadow = "0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19)";

    btn4.innerHTML = "collection 4";
    btn4.style.backgroundImage = "url(https://assets.vogue.com/photos/616f075332e6aee08ea490e9/16:9/w_2580,c_limit/100_story.jpg)";
    btn4.style.boxShadow = "0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19)";

}



const images = [  
    { src: 'https://assets.vogue.com/photos/63fe6bc31ea05d5c5ec6693f/master/w_960,c_limit/00017-christian-dior-fall-2023-ready-to-wear-details-credit-gorunway.jpg', alt: 'Jacket 1', keywords: ['jackets', 'jacket'] },
    { src: 'https://assets.vogue.com/photos/63fe6f0ec20042e00306f303/master/w_960,c_limit/00183-christian-dior-fall-2023-ready-to-wear-details-credit-gorunway.jpg', alt: 'Jacket 2', keywords: ['jackets', 'jacket'] },
    { src: '', alt: 'Jacket 3', keywords: ['jackets', 'jacket'] },
    { src: '', alt: 'Jacket 4', keywords: ['jackets', 'jacket'] },
    { src: '', alt: 'Jacket 5', keywords: ['jackets', 'jacket'] },
    { src: '', alt: 'Jacket 6', keywords: ['jackets', 'jacket'] },
    { src: '', alt: 'Jacket 7', keywords: ['jackets', 'jacket'] },
    { src: '', alt: 'Jacket 8', keywords: ['jackets', 'jacket'] },
  
    { src: 'https://assets.vogue.com/photos/63fe6e5c6a5e00e784dc0bce/master/w_960,c_limit/00156-christian-dior-fall-2023-ready-to-wear-details-credit-gorunway.jpg', alt: 'Bag 2', keywords: ['bags', 'bag'] },
    { src: 'https://assets.vogue.com/photos/63fe6d724c6438b37722a60e/master/w_960,c_limit/00113-christian-dior-fall-2023-ready-to-wear-details-credit-gorunway.jpg', alt: 'Bag 1', keywords: ['bags', 'bag'] },
    { src: '', alt: 'Bag 3', keywords: ['bags', 'bag'] },
    { src: '', alt: 'Bag 4', keywords: ['bags', 'bag'] },
    { src: '', alt: 'Bag 5', keywords: ['bags', 'bag'] },
    { src: '', alt: 'Bag 6', keywords: ['bags', 'bag'] },
    { src: '', alt: 'Bag 7', keywords: ['bags', 'bag'] },
    { src: '', alt: 'Bag 8', keywords: ['bags', 'bag'] },
  ];
  
  function searchImages() {
      const searchTerm = document.getElementById('search').value.toLowerCase();
      const resultsContainer = document.getElementById('results');
      resultsContainer.innerHTML = '';
    
      images.forEach(image => {
        const keywords = image.keywords.join(' ').toLowerCase();
    
        if (keywords.includes(searchTerm)) {
          const img = document.createElement('img');
          img.src = image.src;
          img.alt = image.alt;
          resultsContainer.appendChild(img);
        }
      });
    }
  