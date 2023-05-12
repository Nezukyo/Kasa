import BannerMain from "../../components/Banner/main-banner";
import Main from "../../components/Main/Home-main";
import Infos from "../../accommodation.json";

function Home() {
  document.title = "Kasa : Accueil"
    return (
      <div className="home">
        <BannerMain />
        <Main infos={Infos} />
      </div>
    ) 
  }
  
  export default Home;