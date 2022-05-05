import React, { useEffect } from "react";
import NavBar from "../../components/NavBar/NavBar";
import Banner from "../../components/Banner/Banner";
import ContributeCTA from "../../components/ContributeCTA/ContributeCTA";
import Footer from "../../components/Footer/Footer";
import ContributeDescription from "../../components/ContributeDescription/ContributeDescription";
import NavSpace from "../../components/NavBar/NavSpace";

const ContributePage = () => {
  const title = "";
  const quote =
    '"Alone we can do so little; together we can do so much." – Helen Keller';
  const image =
    "https://i.ibb.co/6ZPmt50/randy-fath-ymf4-9-Y9-S-A-unsplash-1.jpg";

  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div className="contribute-page">
      <NavSpace />
      <NavBar />
      <Banner title={title} quote={quote} image={image} />
      <main>
        <ContributeDescription />
      </main>
      <ContributeCTA />
      <Footer />
    </div>
  );
};

export default ContributePage;
