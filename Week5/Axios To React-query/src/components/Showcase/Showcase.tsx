import "./showcase.css";
import { apiService } from "../../services/ApiSerives";
import { useQuery } from "@tanstack/react-query";
import { Suspense, lazy } from "react";

const LazyImageCard = lazy(() => import("../shared/ImageCard/ImageCard"));

const Showcase = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["get"],
    queryFn: apiService.getData,
  });

  return (
    <div className="showcase-section">
      <div className="showcase-container showcase">
        {isLoading
          ? "loading..."
          : data?.map((item) => (
              <Suspense fallback={<h1>Loading....</h1>} key={item.id}>
                <LazyImageCard
                  key={item.id}
                  title={item.author}
                  src={item.download_url}
                />
              </Suspense>
            ))}
      </div>
    </div>
  );
};

export default Showcase;
