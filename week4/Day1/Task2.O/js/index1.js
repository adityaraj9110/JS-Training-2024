let list;
let likedPic = [];
const navigateToLikedPage = () => {
  const likeButton = document.getElementsByClassName("like")[0];

  likeButton.addEventListener("click", () => {
    likeButton.style.color = "#FF5C63";
    window.location.replace("http://127.0.0.1:5501/pages/like.html");
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
  const contentDiv = document.getElementsByClassName("content")[0];
  if (comingData.length === 0) {
    contentDiv.innerHTML = "No Data Available For This Query!!!";
  } else {
    comingData.forEach((photo) => {
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
  }
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
  const photoContainer = document.getElementsByClassName("content")[0];
  let pageBox = document.getElementsByClassName("pageNumber")[0];
  let offsetBox = document.getElementsByClassName("offset")[0];
  let pageNumber = pageBox.value;
  let offsetNumber = offsetBox.value;
  let totalData = 1085;
  let nextButton = document.getElementById("next");
  let prevButton = document.getElementById("previous");
  const buttonFamily = document.querySelector(".buttonFamily");
  let fetchedData = new Map();

  function updateButtonStyles() {
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
      console.log(typeof pageNumber.toString());
      if (parseInt(button.textContent) === parseInt(pageNumber)) {
        console.log("hellop");
        button.style.color = "#FF5C63";
      } else {
        button.style.color = "black";
      }
    });
  }
  function addNewButton() {
    const newButton = document.createElement("button");
    newButton.textContent = buttonFamily.children.length + 1;
    buttonFamily.appendChild(newButton);
    return newButton;
  }

  const handleButtonPagination = () => {
    document.addEventListener("DOMContentLoaded", async function () {
      // Function to generate and append new button
      // function addNewButton() {
      //   const newButton = document.createElement("button");
      //   newButton.textContent = buttonFamily.children.length + 1;
      //   buttonFamily.appendChild(newButton);
      //   return newButton;
      // }

      // Function to update button styles

      // Function to handle button click
      async function handleButtonClick(event) {
        if (
          event.target.tagName === "BUTTON" &&
          event.target === buttonFamily.lastElementChild
        ) {
          pageBox.value = event.target.textContent;
          pageNumber = pageBox.value;
          if (fetchedData[pageNumber] === undefined) {
            let newData = await getDataWitOffsetAndPage(
              pageNumber,
              offsetNumber
            );
            fetchedData[pageNumber] = newData;
            processPhotos(newData);
          } else {
            processPhotos(fetchedData[pageNumber]);
          }

          saveCurrentPageState();
          addNewButton();
          updateButtonStyles();
          // Scroll to the right to show the newly added button
          buttonFamily.scrollTo({
            left: buttonFamily.scrollWidth,
            behavior: "smooth",
          });
        } else if (event.target.tagName === "BUTTON") {
          pageBox.value = event.target.textContent;
          pageNumber = pageBox.value;
          if (fetchedData[pageNumber] === undefined) {
            let newData = await getDataWitOffsetAndPage(
              pageNumber,
              offsetNumber
            );
            fetchedData[pageNumber] = newData;
            processPhotos(newData);
          } else {
            processPhotos(fetchedData[pageNumber]);
          }
          saveCurrentPageState();
          updateButtonStyles();
        }
      }

      // Restore button state and page color
      function restoreState() {
        const storedPageNumber = localStorage.getItem("currentPage");
        if (storedPageNumber) {
          pageNumber = parseInt(storedPageNumber);
        }
        updateButtonStyles();
      }

      buttonFamily.addEventListener("click", handleButtonClick);

      // Restore state on page load
      restoreState();
    });
  };
  handleButtonPagination();
  // console.log("pagenUmber", pageNumber);
  // main funtion which is calling to render the data on scrren
  const getDataWitOffsetAndPage = async (pageNumber, offsetNumber) => {
    const photos = await getData(loading, baseUrl, pageNumber, offsetNumber);
    return photos;
  };
  const genrateNextPhtoto = (newData) => {
    list = [...list, ...newData];
    genratePhoto(list);
  };
  //   this is to show data after every scroll
  const showData = () => {
    setTimeout(async () => {
      pageNumber = parseInt(pageNumber) + 1;
      pageBox.value = pageNumber;
      saveCurrentPageState();
      const newData = await getData(loading, baseUrl, pageNumber, offsetNumber);
      genrateNextPhtoto(newData);
    }, 300);
  };
  //   this is for the infinite scrooling
  const infiniteScroll = () => {
    photoContainer.addEventListener("scroll", () => {
      const { scrollHeight, scrollTop, clientHeight } = photoContainer;
      if (scrollTop + clientHeight >= scrollHeight) {
        showData();
      }
    });
  };
  infiniteScroll();
  // this is used to save the current state of page i.e, pagenumber and offset value
  const saveCurrentPageState = () => {
    const currentPageState = {
      pageNumber,
      offsetNumber,
    };

    localStorage.setItem("currentPageState", JSON.stringify(currentPageState));
  };

  //   from here we get the pageNumber and offseet value from localStorage
  const loadCurrentPageState = () => {
    const currentPageState = JSON.parse(
      localStorage.getItem("currentPageState")
    );
    if (currentPageState) {
      pageNumber = currentPageState.pageNumber;
      offsetNumber = currentPageState.offsetNumber;
      //   this is done here so that when page render then it will have previous state
      pageBox.value = pageNumber;
      offsetBox.value = offsetNumber;
    }
  };

  // Load current page state when the page loads
  loadCurrentPageState();
  // this is to rendder the original list or data
  const processPhotos = (photos) => {
    photoContainer.innerHTML = "";
    list = [...photos];
    genratePhoto(list);
  };

  //   this is created so that after every search we can render the result
  const processPhotosBasedOnSearching = (photos) => {
    photoContainer.innerHTML = "";
    let searchedData = [...photos];
    genratePhoto(searchedData);
  };
  // initital redering
  const photos = await getDataWitOffsetAndPage(pageNumber, offsetNumber);
  processPhotos(photos);

  // this is decorator funtion which uses deboucing funtion to optimize the original funtion
  const debouncedFetchedData = debouncing(async () => {
    const newData = await getDataWitOffsetAndPage(pageNumber, offsetNumber);
    fetchedData[pageNumber] = newData;
    processPhotos(newData);
  }, 800);

  //  this funtion is used to check the maxPage number according to offset
  const calculateMaxPageNumber = (limit, total) => {
    return Math.ceil(total / limit);
  };

  offsetBox.addEventListener("input", async (e) => {
    let currentValue = e.target.value;

    if (!isNaN(currentValue)) {
      if (currentValue > 0 && currentValue < 1085) {
        offsetNumber = currentValue;
        saveCurrentPageState();
        // this is also to save the current state of offset
        debouncedFetchedData();
      } else {
        genratePhoto([]);
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
        // this is to store the current state of page i.e,page number and offset
        saveCurrentPageState();
        // this is debouncing
        debouncedFetchedData();
      } else {
        genratePhoto([]);
      }
    } else {
      alert("Wrong input");
    }
  });
  // handling next button

  nextButton.addEventListener("click", (e) => {
    pageNumber = parseInt(pageNumber) + 1;
    let buttons = document.querySelectorAll("button");
    if (pageNumber <= calculateMaxPageNumber(offsetNumber, totalData)) {
      console.log("page:", pageNumber, "len:", buttons.length);
      if (pageNumber > buttons.length) {
        let temp = pageNumber - buttons.length;
        while (temp) {
          addNewButton();
          temp--;
        }
        buttonFamily.scrollTo({
          left: buttonFamily.scrollWidth,
          behavior: "smooth",
        });
      }
      if (fetchedData[pageNumber] === undefined) {
        debouncedFetchedData();
      } else {
        processPhotos(fetchedData[pageNumber]);
      }
      saveCurrentPageState();
      setTimeout(() => {
        pageBox.value = pageNumber;
        updateButtonStyles();
      }, 600);
    } else {
      alert("You have exceed the page limit");
    }
  });

  //   handling previou button
  prevButton.addEventListener("click", () => {
    if (pageNumber > 1) {
      pageNumber = parseInt(pageNumber) - 1;
      if (fetchedData[pageNumber] === undefined) {
        debouncedFetchedData();
      } else {
        processPhotos(fetchedData[pageNumber]);
        
      }
      saveCurrentPageState();
      setTimeout(() => {
        pageBox.value = pageNumber;
        updateButtonStyles();
        
      }, 600);
      
    }
  });

  const handleFilter = async () => {
    let optionBox = document.getElementsByClassName("filterBook");

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
      // we are doing deep coling
      if (name.length > 0) {
        const searchedData = searchPhoto(name, list);
        processPhotosBasedOnSearching(searchedData);
        // we need to devlop new funtion so that we can render data based on search input
      } else {
        // If the search query is empty, display all photos
        processPhotos(list);
      }
    });
  };

  handleFilter();
  handleSearch();
};
// get the localstorageitem
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
// event bubbling is used here since the content is created at run time or dynamically that's why we ca't directly select that element
const handleLike = () => {
  const contentContainer = document.getElementsByClassName("content")[0];

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

likedPic;
