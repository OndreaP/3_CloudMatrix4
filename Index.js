
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
    { src: 'https://th.bing.com/th/id/OIP.g8sHR7IwO0QlmL8jLshBsgHaLH?pid=ImgDet&rs=1', alt: 'Jacket 3', keywords: ['jackets', 'jacket'] },
    { src: 'https://i.pinimg.com/originals/1a/4d/6c/1a4d6cbf94bd8d6267cd02e3b50aeb8b.jpg', alt: 'Jacket 4', keywords: ['jackets', 'jacket'] },
    { src: 'https://3.bp.blogspot.com/-E0td8wIcTqs/T4f_CMwPkpI/AAAAAAAAGL0/T6w6xvwApy4/s1600/Gucci55.jpg', alt: 'Jacket 5', keywords: ['jackets', 'jacket'] },
    { src: 'https://th.bing.com/th/id/R.363a542735edcb7422e050a5620a9f81?rik=VIuydNgQLv3d4g&riu=http%3a%2f%2f1.bp.blogspot.com%2f-x9--R1h3DNs%2fT4f_A5--cOI%2fAAAAAAAAGLs%2fHQYf03VnLlM%2fs1600%2fGucci54.jpg&ehk=tFX1RYjx4UnFnn7C%2fCKDSDKDQ%2bfmOY9cYxZOQ2TA%2fF4%3d&risl=&pid=ImgRaw&r=0', alt: 'Jacket 6', keywords: ['jackets', 'jacket'] },
    { src: 'https://i.pinimg.com/originals/d9/ad/03/d9ad034110df5bf4edb33b7200bb27be.jpg', alt: 'Jacket 7', keywords: ['jackets', 'jacket'] },
    { src: 'https://i.pinimg.com/originals/4d/bd/b7/4dbdb7776a339dd61b7c0865e12c3cf0.jpg', alt: 'Jacket 8', keywords: ['jackets', 'jacket'] },
  
    { src: 'https://assets.vogue.com/photos/63fe6e5c6a5e00e784dc0bce/master/w_960,c_limit/00156-christian-dior-fall-2023-ready-to-wear-details-credit-gorunway.jpg', alt: 'Bag 2', keywords: ['bags', 'bag'] },
    { src: 'https://assets.vogue.com/photos/63fe6d724c6438b37722a60e/master/w_960,c_limit/00113-christian-dior-fall-2023-ready-to-wear-details-credit-gorunway.jpg', alt: 'Bag 1', keywords: ['bags', 'bag'] },
    { src: 'https://th.bing.com/th/id/R.b763595968e44beb1ec2dc0173eaf566?rik=aFWmvRYe7lcTGg&riu=http%3a%2f%2fwww.spottedfashion.com%2fwp-content%2fuploads%2f2015%2f03%2fLouis-Vuitton-Monogram-Canvas-Mini-Trunk-Bag-Fall-2015-Runway.jpg&ehk=k6MKIsqCPtmmIf%2f0g2XNKxdavpFz2yxxnMpEXqWAzSs%3d&risl=&pid=ImgRaw&r=0', alt: 'Bag 3', keywords: ['bags', 'bag'] },
    { src: 'https://www.spottedfashion.com/wp-content/uploads/2017/10/Louis-Vuitton-Monogram-Reverse-Top-Handle-Bag-Spring-2018.jpg', alt: 'Bag 4', keywords: ['bags', 'bag'] },
    { src: 'https://th.bing.com/th/id/OIP.arT5qkw6fTk0Wwu2GDlo0wHaHx?pid=ImgDet&rs=1', alt: 'Bag 5', keywords: ['bags', 'bag'] },
    { src: 'https://www.purseblog.com/images/2015/09/Gucci-Spring-2016-Bags-13.jpg', alt: 'Bag 6', keywords: ['bags', 'bag'] },
    { src: 'https://media.gettyimages.com/photos/model-bag-detail-walks-the-runway-during-the-chanel-show-as-part-of-picture-id1044569678', alt: 'Bag 7', keywords: ['bags', 'bag'] },
    { src: 'https://media.gettyimages.com/photos/modelbag-detail-walks-the-runway-during-the-chanel-show-as-part-of-picture-id1044474600', alt: 'Bag 8', keywords: ['bags', 'bag'] },
   
    { src: 'https://assets.vogue.com/photos/63fe6b95c20042e00306f2f3/master/w_1920,c_limit/00002-christian-dior-fall-2023-ready-to-wear-details-credit-gorunway.jpg', alt: 'Top 1', keywords: ['tops', 'shirts'] },
    { src: 'https://assets.vogue.com/photos/63fe6c34db76bdd0cf0a2757/master/w_960,c_limit/00044-christian-dior-fall-2023-ready-to-wear-details-credit-gorunway.jpg', alt: 'Top 2', keywords: ['tops', 'shirts'] },
    { src: 'https://i.pinimg.com/originals/d9/25/f2/d925f273e087ead67f90c58525a82173.jpg', alt: 'Top 3', keywords: ['tops', 'shirts'] },
    { src: 'https://fashionista.com/.image/c_limit,cs_srgb,fl_progressive,q_auto:good,w_700/MTQ3MjIyMDEzNjA0Mjc2MDE1/vuitton-rs17-0428jpg.jpg', alt: 'Top 4', keywords: ['tops', 'shirts'] },
    { src: 'https://th.bing.com/th/id/OIP.W5029LNu46NdKmHBx61gbAHaJ4?pid=ImgDet&rs=1', alt: 'Top 5', keywords: ['tops', 'shirts'] },
    { src: 'https://i.pinimg.com/736x/a4/99/22/a49922df36ee94368fdee7421aaab015.jpg', alt: 'Top 6', keywords: ['tops', 'shirts'] },
    { src: 'https://th.bing.com/th/id/R.c3c7a8f6db851cc3841249de7e573578?rik=W%2f5snQjITBUTUg&pid=ImgRaw&r=0', alt: 'Top 7', keywords: ['tops', 'shirts'] },
    { src: 'https://i.pinimg.com/originals/0d/d3/23/0dd3232dfb931ff3092952176f15dd42.jpg', alt: 'Top 8', keywords: ['tops', 'shirts'] },
    
    { src: 'https://assets.vogue.com/photos/63fe6c2247fee8ca53689060/master/w_960,c_limit/00039-christian-dior-fall-2023-ready-to-wear-details-credit-gorunway.jpg', alt: 'Shoes1', keywords: ['shoes', ''] },
    { src: 'https://assets.vogue.com/photos/63fe6e9d00e8c15bd736a6b5/master/w_960,c_limit/00166-christian-dior-fall-2023-ready-to-wear-details-credit-gorunway.jpg', alt: 'Shoes2', keywords: ['shoes', ''] },
    { src: 'https://i.pinimg.com/originals/a0/e0/b5/a0e0b56e7e645f49ef9fae2fbc4e6c6d.jpg', alt: 'Shoes3', keywords: ['shoes', ''] },
    { src: 'https://th.bing.com/th/id/R.f0ad89e882d8bec8474aa21f1f7f22ea?rik=8SGpqPUNUd3iMw&riu=http%3a%2f%2fsnobette.com%2fwp-content%2fuploads%2f2018%2f02%2flouis-vuitton-archlight-sneakers-february-2018-3.jpg&ehk=chL6DPUQm0MfGKtSpygkFDjsaLm44lMV4u9ZpuW%2bcss%3d&risl=&pid=ImgRaw&r=0', alt: 'Shoes4', keywords: ['shoes', ''] },
    { src: 'https://th.bing.com/th/id/OIP.XjLkIufJ6l8s0nine064_QHaLH?pid=ImgDet&rs=1', alt: 'Shoes5', keywords: ['shoes', ''] },
    { src: 'https://i.pinimg.com/originals/42/d5/87/42d587bab3d7fbe5c8cf276c3fcd9df7.jpg', alt: 'Shoes6', keywords: ['shoes', ''] },
    { src: 'https://i.pinimg.com/originals/f7/04/c9/f704c9d935cd44ebe9ac920bf4fcfb5a.jpg', alt: 'Shoes7', keywords: ['shoes', ''] },
    { src: 'https://th.bing.com/th/id/R.3f8586a2d5c36c3644924eb7243e243a?rik=JegsICZKxN3Q3g&riu=http%3a%2f%2fwww1.pictures.livingly.com%2fit%2fChanel%2bFall%2b2009%2bDetails%2bC_pPeau8KLqx.jpg&ehk=SVXg6CMKzRVtUnxRBceyF%2fLHGzmlSv%2bGUiHFu9kS8vk%3d&risl=&pid=ImgRaw&r=0', alt: 'Shoes8', keywords: ['shoes', ''] },
  
    { src: 'https://assets.vogue.com/photos/63fe6caddb76bdd0cf0a2759/master/w_960,c_limit/00072-christian-dior-fall-2023-ready-to-wear-details-credit-gorunway.jpg', alt: 'Dress1', keywords: ['dress', 'dresses']},
    { src: 'https://assets.vogue.com/photos/63fe6e0f513c830c38461588/master/w_960,c_limit/00142-christian-dior-fall-2023-ready-to-wear-details-credit-gorunway.jpg', alt: 'Dress2', keywords: ['dress', 'dresses']},
    { src: 'https://i.pinimg.com/originals/54/37/77/543777de0c20074a98f4ac9540500cb1.jpg', alt: 'Dress3', keywords: ['dress', 'dresses']},
    { src: 'https://akns-images.eonline.com/eol_images/Entire_Site/201491/rs_634x1024-141001092511-634.Louis-Vuitton-Best-Looks-Paris-Fashion-Week-Runway.jl.100114.jpg', alt: 'Dress4', keywords: ['dress', 'dresses']},
    { src: 'https://th.bing.com/th/id/R.733d332d795806cf13efb92058563ec3?rik=pLCG1m8DwWOduQ&riu=http%3a%2f%2ffashionbombdaily.com%2fwp-content%2fuploads%2f2016%2f06%2fGucci-Spring-2016-2.jpg&ehk=nPGyT4BFIkke0M4XpfVE9moLVDaj9kRjKAXo8K9lXT0%3d&risl=&pid=ImgRaw&r=0', alt: 'Dress5', keywords: ['dress', 'dresses']},
    { src: 'https://2.bp.blogspot.com/-4dQrsHjV5pc/Vs8VHiEXFAI/AAAAAAADu5g/CMwEH9yVvMs/s1600/30-gucci%2Bfall%2B2016%2Bready-to-wear%2Bmilan%2Bfashion%2Bweek%2B-%2Bcool%2Bchic%2Bstyle%2Bfashion.jpg', alt: 'Dress6', keywords: ['dress', 'dresses']},
    { src: 'https://i.pinimg.com/originals/47/1b/6f/471b6f6416536dbf3825d656f57c6ded.jpg', alt: 'Dress7', keywords: ['dress', 'dresses']},
    { src: 'https://i.pinimg.com/originals/8c/74/3c/8c743cc907b29cf3f38eeedcdd0f182a.jpg', alt: 'Dress8', keywords: ['dress', 'dresses']}
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
  