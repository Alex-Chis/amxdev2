import "./views.css";
import { useEffect, useState } from "react";

export default function Views() {
  const [data, setData] = useState({ views: 0, requestCount: 0 });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/handler");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="views-container">
      <p>Total Page Views: {data.views}</p>
    </div>
  );
}
