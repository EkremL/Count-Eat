import { useEffect, useState } from "react";
import FoodDetails from "../Components/FoodDetails/FoodDetails";
import { useParams } from "react-router-dom";

const SingleFoodPage = () => {
  const { id: recipeId } = useParams();
  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  const [singleRecipe, setSingleRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // FETCH SINGLE FOOD
  useEffect(() => {
    const fetchSingleRecipe = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/recipes/${recipeId}`);
        if (!response.ok) {
          throw new Error("Verileri getirme hatası");
        }
        const data = await response.json();
        setSingleRecipe(data);
      } catch (error) {
        setError("Veri çekme hatası: " + error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchSingleRecipe();
  }, [apiUrl, recipeId]);

  if (loading) {
    return <div>Yükleniyor...</div>;
  }

  if (error) {
    return <div>Hata: {error}</div>;
  }

  return (
    <>
      {singleRecipe ? (
        <FoodDetails singleRecipe={singleRecipe} />
      ) : (
        <div>Yemek tarifi bulunamadı.</div>
      )}
    </>
  );
};

export default SingleFoodPage;
