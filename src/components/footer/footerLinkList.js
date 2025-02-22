import React from "react";

const FooterList = () => {
  return (
    <div className="footerList">
      <div className="discoverLexus">
        <div className="listFooter__header"> Odkryj lexusa</div>
        <ul className="listFooter__list">
          <li className="listFooter__list-item"> Modele Lexus</li>
          <li className="listFooter__list-item"> Aktualnosci Lexusa</li>
          <li className="listFooter__list-item"> Osiagi</li>
          <li className="listFooter__list-item"> Wzornictwo</li>
          <li className="listFooter__list-item"> Technologia</li>
          <li className="listFooter__list-item"> Jakosc wykonania</li>
          <li className="listFooter__list-item"> Samochody koncepcyjne</li>
        </ul>
      </div>
      <div className="contactList">
        <div className="listFooter__header"> Badz w kontakcie z lexusem</div>
        <ul className="listFooter__list">
          <li className="listFooter__list-item"> Zarezerwuj jazde testowa</li>
          <li className="listFooter__list-item"> Znajdz swojego dilera</li>
          <li className="listFooter__list-item"> Skonfiguruj samochod</li>
          <li className="listFooter__list-item"> Kontakt</li>
        </ul>
      </div>

      <div className="myLexus">
          <div className='listFooter__header'> Moj lexus</div>
                <ul className="listFooter__list">
                    <li className='listFooter__list-item'> Zaloguj sie</li>
                    <li className='listFooter__list-item'> Instrukcje obslugi</li>
                    <li className='listFooter__list-item'> Lexus Care</li>
                    <li className='listFooter__list-item'> Akcesoria Lexus</li>
                </ul>
           </div>

      <div className="socialMedia">
          <div className="socialMedia-icon"><i className="fab fa-facebook-f"></i></div>
          <div className="socialMedia-icon"><i className="fab fa-twitter"></i></div>
          <div className="socialMedia-icon"><i className="fab fa-youtube"></i></div>
          </div>
    </div>
  );
};
export default FooterList;
