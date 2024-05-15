import "./FoodRecipeArticle.css";

const FoodRecipeArticle = () => {
  return (
    <div className="main-foodarticle flex flex-col mt-6 items-center">
      <div>
        <p className="text-5xl text-green-700">Besin & Tarif Arama</p>
      </div>
      <div className="food-info mt-6 mb-10 max-w-4xl bg-green-700 text-slate-100 p-6 rounded-xl">
        <p>
          Beslenme rutininizde monotonluktan sıkıldıysanız ve diyetinizi daha
          renkli ve eğlenceli bir hale getirmek istiyorsanız, Besin Arama
          hizmetimiz tam size göre! Count&Eat olarak, çeşit çeşit besinler ve
          onlara ait nefis tarifler sunuyoruz. İstediğiniz zaman besinlerin
          mikro ve makro besin değerlerini inceleyebilir, birbirinden farklı
          yemek tariflerine göz atabilir ve böylece diyetinizi daha bilinçli ve
          kontrollü bir şekilde yönetebilirsiniz. Count&Eat ile yemeklerinizi
          keşfetmenin keyfini çıkarın!
        </p>
      </div>
    </div>
  );
};

export default FoodRecipeArticle;
