import Main from "../../components/Main/Housing-main";
import housings from "../../accommodation.json"

function Housing() {
    return (
      <div className="housing">
        <Main housings={housings}/>
      </div>
    ) 
  }
  
  export default Housing;