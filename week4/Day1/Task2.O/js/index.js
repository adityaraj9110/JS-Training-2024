let list;
let likedPic = [];
const navigateToLikedPage = () => {
  const likeButton = document.getElementById("like");

  likeButton.addEventListener("click", () => {
    likeButton.style.color = "#FF5C63";
    window.location.replace("http://127.0.0.1:5500/pages/like.html");
  });
};

const getData = async (loading, baseUrl, page, offset) => {
  try {
    const response = await fetch(`${baseUrl}?page=${page}&limit=${offset}`);
    const data = await response.json();
    const priceOfPhoto = [100, 500, 9000, 60, 50, 800, 450];
    const newData = data.map((item) => {
      return {
        id: item.id,
        author: item.author,
        download_url: item.download_url,
        price: priceOfPhoto[Math.floor(Math.random() * priceOfPhoto.length)],
      };
    });
    // localStorage.setItem("currentPhotos", JSON.stringify(newData));
    return newData;
  } catch (error) {
    console.log(error.message);
  }
};

likedPic = JSON.parse(localStorage.getItem("likedPic"));
const isLikedPic = (picId) => {
  return likedPic?.some((pic) => picId === pic.id);
};


const genratePhoto = (comingData) => {
  comingData.forEach((photo) => {
    const contentDiv = document.getElementById("content");
    const div = document.createElement("div");
    const uniqueId = `imageCard_${photo.id}`;

    div.classList.add("imageCard", "fade-in-delay");
    div.id = uniqueId;
    div.innerHTML = `
    <div id="image" class="show">
                    <img src=${photo.download_url}
                        alt="">
                </div>
                <div id="imageInfo">
                    <div id="infoPart1">
                        <h3>${photo.author}</h3>
                        <h3>Rs.${photo.price}</h3>
                    </div>
                    <div id="infoPart2" class="infoPart2">
                    <i class="ri-heart-3-line" style="color: ${
                      isLikedPic(photo.id) ? "#FF5C63" : ""
                    }"></i>
                    </div>
                </div>

    `;
    contentDiv.appendChild(div);
  });
};

const debouncing = (func, delay) => {
  let timer;
  return function (...args) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

const searchPhoto = (name, newData) => {
  return newData.filter((photo, i) => {
    return photo.author.toLowerCase().includes(name.toLowerCase());
  });
};

const handlePagination = async () => {
  let loading;
  let baseUrl = "https://picsum.photos/v2/list";
  const photoContainer = document.getElementById("content");
  let pageBox = document.getElementById("pageNumber");
  let offsetBox = document.getElementById("offset");
  let pageNumber = pageBox.value;
  let offsetNumber = offsetBox.value;
  let totalData = 1085;
  let nextButton = document.getElementById("next");
  let prevButton = document.getElementById("previous");

  const getDataWitOffsetAndPage = async (pageNumber, offsetNumber) => {
    const photos = await getData(loading, baseUrl, pageNumber, offsetNumber);
    return photos;
  };

  

  const saveCurrentPageState = () => {
    const currentPageState = {
      pageNumber,
      offsetNumber,
    };
    localStorage.setItem("currentPageState", JSON.stringify(currentPageState));
  };

  const loadCurrentPageState = () => {
    const currentPageState = JSON.parse(
      localStorage.getItem("currentPageState")
    );
    if (currentPageState) {
      pageNumber = currentPageState.pageNumber;
      offsetNumber = currentPageState.offsetNumber;
      pageBox.value = pageNumber;
      offsetBox.value = offsetNumber;
    }
  };

  // Load current page state when the page loads
  loadCurrentPageState();

  const processPhotos = (photos) => {
    photoContainer.innerHTML = "";
    list = [...photos];
    genratePhoto(list);
  };

  const processPhotosBasedOnSearching = (photos) => {
    photoContainer.innerHTML = "";
    let searchedData = [...photos];
    genratePhoto(searchedData);
  };
  // initital redering
  const photos = await getDataWitOffsetAndPage(pageNumber, offsetNumber);
  processPhotos(photos);

  const debouncedFetchedData = debouncing(async () => {
    const newData = await getDataWitOffsetAndPage(pageNumber, offsetNumber);
    processPhotos(newData);
  }, 800);

  const calculateMaxPageNumber = (limit, total) => {
    return Math.ceil(total / limit);
  };

  offsetBox.addEventListener("input", async (e) => {
    let currentValue = e.target.value;

    if (!isNaN(currentValue)) {
      if (currentValue > 0 && currentValue < 1085) {
        offsetNumber = currentValue;
        saveCurrentPageState();
        debouncedFetchedData();
      }
    } else {
      alert("Wrong input");
    }
  });

  pageBox.addEventListener("input", async (e) => {
    let currentValue = e.target.value;

    if (!isNaN(currentValue)) {
      if (
        currentValue > 0 &&
        currentValue <= calculateMaxPageNumber(offsetNumber, totalData)
      ) {
        pageNumber = currentValue;
        saveCurrentPageState();
        debouncedFetchedData();
      }
    } else {
      alert("Wrong input");
    }
  });

  nextButton.addEventListener("click", (e) => {
    pageNumber = parseInt(pageNumber) + 1;

    if (pageNumber <= calculateMaxPageNumber(offsetNumber, totalData)) {
      debouncedFetchedData();
      saveCurrentPageState();
      setTimeout(() => {
        pageBox.value = pageNumber;
      }, 800);
    } else {
      alert("You have exceed the page limit");
    }
  });

  prevButton.addEventListener("click", () => {
    if (pageNumber > 1) {
      pageNumber = parseInt(pageNumber) - 1;
      debouncedFetchedData();
      saveCurrentPageState();
      setTimeout(() => {
        pageBox.value = pageNumber;
      }, 800);
    }
  });

  const handleFilter = async () => {
    let optionBox = document.getElementById("filterBook");

    optionBox.addEventListener("change", (e) => {
      let value = e.currentTarget.value;
      // processPhotos
      if (value === "Asc") {
        console.log(list);
        const sortInAscendingOrder = list.sort((photo1, photo2) => {
          return photo1.price - photo2.price;
        });
        processPhotos(sortInAscendingOrder);
        optionBox.value = "Pick a choice!";
      }
      if (value === "Dsc") {
        console.log(list);
        const sortInAscendingOrder = list.sort((photo1, photo2) => {
          return photo2.price - photo1.price;
        });
        processPhotos(sortInAscendingOrder);
        optionBox.value = "Pick a choice!";
      }
    });
  };
  const handleSearch = () => {
    const search = document.getElementById("searchImage");
    search.addEventListener("input", (e) => {
      let name = e.target.value.trim().toLowerCase(); // Convert the search query to lowercase
      console.log(name);
      const newData = [...list];
      if (name.length > 0) {
        const searchedData = searchPhoto(name, newData);
        console.log(searchedData, "this is searched data");
        processPhotosBasedOnSearching(searchedData);
      } else {
        // If the search query is empty, display all photos
        console.log(newData, "this is new data");
        console.log(list, "this is list");
        processPhotos(list);
      }
    });
  };
  
  handleFilter();
  handleSearch();
};

const loadLikedPicFromLocalStorage = () => {
  const savedLikedPic = localStorage.getItem("likedPic");
  return savedLikedPic ? JSON.parse(savedLikedPic) : [];
};

// Function to save likedPic to localStorage
const saveLikedPicToLocalStorage = (likedPic) => {
  localStorage.setItem("likedPic", JSON.stringify(likedPic));
};

// Load likedPic from localStorage when the page loads
likedPic = loadLikedPicFromLocalStorage();
const handleLike = () => {
  const contentContainer = document.getElementById("content");
  contentContainer.addEventListener("click", (e) => {
    if (
      e.target.className === "infoPart2" ||
      e.target.className === "ri-heart-3-line"
    ) {
      let likeBtn = e.target;
      const imageCard = likeBtn.closest(".imageCard");
      const photoId = imageCard.id.split("_")[1];

      const likedIndex = likedPic.findIndex((item) => item.id === photoId);
      console.log(likedIndex);
      if (likedIndex != -1) {
        // this means user has already liked that pic and now he want to unlike import PropTypes from 'prop-types'
        likedPic.splice(likedIndex, 1);
        likeBtn.style.color = "";
      } else {
        // this is executed when user click it for the first time
        const likedPhotoByUser = list.find((photo) => photo.id === photoId);
        if (likedPhotoByUser) {
          likedPic.push(likedPhotoByUser);
          likeBtn.style.color = "#FF5C63";
        }
      }
    }
    saveLikedPicToLocalStorage(likedPic);
  });
};
handleLike();
handlePagination();
navigateToLikedPage();

export default likedPic;
