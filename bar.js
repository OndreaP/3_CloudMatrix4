let names = [
    "shoes",
    "snacks",
    "bags",
    "books",
    "buttons",
    "jackets",
    "jug",
    "tops",
    "dresses",
    "dance",
    "take",
  ];
  //Sort names in ascending order
  let sortedNames = names.sort();
  //reference
  let input = document.getElementById("input");
  //Execute function on keyup
  input.addEventListener("keyup", (e) => {
    //loop through above array
    //Initially remove all elements ( so if user erases a letter or adds new letter then clean previous outputs)
    removeElements();
    for (let i of sortedNames) {
      //convert input to lowercase and compare with each string
      if (
        i.toLowerCase().startsWith(input.value.toLowerCase()) &&
        input.value != ""
      ) {
        //create li element
        let listItem = document.createElement("li");
        //One common class name
        listItem.classList.add("list-items");
        listItem.style.cursor = "pointer";
        listItem.setAttribute("onclick", "displayNames('" + i + "')");
        //Display matched part in bold
        let word = "<b>" + i.substr(0, input.value.length) + "</b>";
        word += i.substr(input.value.length);
        //display the value in array
        listItem.innerHTML = word;
        document.querySelector(".list").appendChild(listItem);
      }
    }
  });
  function displayNames(value) {
    input.value = value;
    removeElements();
  }
  function removeElements() {
    //clear all the item
    let items = document.querySelectorAll(".list-items");
    items.forEach((item) => {
      item.remove();
    });
  }


const images = [  
  { src: "/Users/Ondrea/Desktop/Chanel fall 2023/00008-chanel-fall-2023-ready-to-wear-details-credit-gorunway.jpg", alt: 'Image 1', keywords: ['jackets', 'jacket'] },
 
  { src: 'image2.jpg', alt: 'Image 2', keywords: ['pants', 'bottoms'] },
 
  { src: 'image3.jpg', alt: 'Image 3', keywords: ['tops', 'shirts'] },
  
  { src: 'image4.jpg', alt: 'Image 4', keywords: ['shoes', 'dessert'] },
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
