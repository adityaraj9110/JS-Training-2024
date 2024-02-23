import "./addProduct.css";
const AddProduct = () => {
  return (
    <div className="addProduct">
      <div className="container">
        <input name="title" type="text" placeholder="Title" required />

        <input name="price" type="number" placeholder="Price" required />

        <select name="category" id="category">
          <option value="laptop">Laptop</option>
          <option value="phone">Phone</option>
        </select>

        <input name="thumbnail" type="url" placeholder="Thumbnail" required />

        <input type="url" placeholder="Image Link" />

        <textarea
          name="description"
          id="description"
          cols={30}
          rows={20}
        ></textarea>
      </div>
    </div>
  );
};

export default AddProduct;
