import PropTypes from "prop-types";
import "./FoodDetails.css";

const FoodDetails = ({ singleRecipe }) => {
  if (!singleRecipe) {
    return <div>Yemek tarifi yüklenemedi.</div>;
  }

  return (
    <div>
      <h1>{singleRecipe.Turkish_Name}</h1>
      <p>{singleRecipe.ShortDescription}</p>
    </div>
  );
};

export default FoodDetails;

FoodDetails.propTypes = {
  singleRecipe: PropTypes.object,
};
