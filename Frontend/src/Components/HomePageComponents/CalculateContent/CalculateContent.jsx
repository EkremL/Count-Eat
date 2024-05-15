import Arrow from "../../../Assets/HomePageImages/CalculateImg/greenuparrow.png";
import CalculateForm from "./CalculateItem/CalculateForm";
import "./CalculateContent.css";

const CalculateContent = () => {
  return (
    <>
      <div className="calculate-section">
        <div className="calculate-main-div">
          <p className="calculate-title">
            Mutlu bir hayat, sağlıklı beslenme <br /> ile mümkün.
          </p>
          <p className="description">
            Count&Eat tercihlerinize göre kişiselleştirilmiş günlük yemek
            planları sunar. Kalori hesaplayıcıyımız ile beslenme hedeflerinize
            ulaşabilir, haftalık programlar oluşturabilirsiniz.
            <b>Saniyeler içinde planınızı oluşturun!</b>
          </p>
          <div className="Calculate-Form">
            <CalculateForm />
          </div>
          <div className="arrow-desc">
            <div className="arrow-div">
              <img className="arrow" alt="Isolated arrow down" src={Arrow} />
            </div>
            <p>
              Sizin için ideal olan kalori miktarını ilk bölüme girin. Ardından
              tercih ettiğiniz öğün sayısını belirleyin ve “Oluştur” butonuna
              tıklayın. Eğer ideal kalorinizi bilmiyorsanız “Hesaplayıcı”
              butonunu kullanabilirsiniz.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CalculateContent;
