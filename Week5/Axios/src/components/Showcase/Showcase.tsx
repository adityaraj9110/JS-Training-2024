import { useEffect } from "react";
import { useImageDataContext } from "../../context-api/ImageDataContext";
import ImageCard from "../shared/ImageCard/ImageCard";
import "./showcase.css";
import { apiService } from "../../services/ApiSerives";
const Showcase = () => {
  const { imageItems, setImageItems } = useImageDataContext();

  const fetchData = async () => {
    try {
      const data = await apiService.getData();
      setImageItems(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="showcase-section">
      <div className="showcase-container showcase">
        {
          imageItems?.map((item)=>(
            <ImageCard key={item.id} title = {item.author} src={item.download_url}/>
          ))
        }
      </div>
    </div>
  );
};

export default Showcase;
