// pageInfo.addEventListener("click", async (e) => {
    //   console.log(e.target);
    //   if (!isNaN(parseInt(e.target.textContent))) {
    //     pageBox.value = e.target.textContent;
    //     let prevPage = pageBox.value;
    //     pageNumber = pageBox.value;
    //     let newData = await getDataWitOffsetAndPage(pageNumber, offsetNumber);
    //     processPhotos(newData);
    //     saveCurrentPageState();
    //     // e.target.style.color = "black" ? "#FF5C63" : "black";
    //     console.log("btn lenght", buttons.length);
    //     buttons.forEach((button) => {
    //       if (button.textContent === pageNumber) {
    //         button.style.color = "#FF5C63";
    //       } else {
    //         button.style.color = "black";
    //       }
    //     });
    //     console.log("Last Child", buttonContainer.lastElementChild);
    //     if (e.target === buttonContainer.lastElementChild) {
    //       console.log("hello");
    //       buttonContainer.lastElementChild.previousElementSibling.textContent =
    //         e.target.textContent;
    //       buttonContainer.lastElementChild.previousElementSibling.style.color =
    //         "#FF5C63";
    //       e.target.textContent = parseInt(e.target.textContent) + 1;
    //       e.target.style.color = "black";
    //       // buttons.push("<button></button>")
    //     }
    //   }
    // });