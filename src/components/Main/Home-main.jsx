import infos from "../../accommodation.json";
import Card from "../Card";
import "../Main/Home-main-style.css";

function Main() {
  return (
    <div className="Main">
      {/*Same as for each, you take one element from the tab and you look for its id, title and cover and once it reviewed everything it stops */}
      {infos.map((info) => {
        return (
          <Card
            key={info.id}
            id={info.id}
            title={info.title}
            cover={info.cover}
          />
        );
      })}
    </div>
  );
}

export default Main;
