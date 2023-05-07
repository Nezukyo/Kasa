import BannerMain from "../../components/Banner/main-banner";
import Main from "../../components/Main/Home-main";

function Home() {
  document.title = "Kasa : Accueil"
    return (
      <div className="home">
        <BannerMain />
        <Main />
      </div>
    ) 
  }
  
  export default Home;