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
  

function handlePagination(){
    let buttons = document.querySelectorAll("button");
    let initialRender = buttons[0].textContent;
    
}


handlePagination();