import { useContext, useEffect } from "react";
import LayoutContext from "../Context/LayoutContext";
import Verify from "../Components/Verify/Verify";

const VerificationPage = () => {
  const { setShowHeaderFooter } = useContext(LayoutContext);

  useEffect(() => {
    setShowHeaderFooter(false);

    return () => {
      setShowHeaderFooter(true);
    };
  }, [setShowHeaderFooter]);

  return (
    <>
      <Verify />
    </>
  );
};

export default VerificationPage;
