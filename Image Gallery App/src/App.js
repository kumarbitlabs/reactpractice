import "./styles.css";
import { useState } from "react";
import axios from "axios";
import Gallery from "./Gallery";

const apiKey = "8bb32993cf93df6168df711706c05cac";
function App() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .get(
        `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${search}&per_page=24&format=json&nojsoncallback=1`
      )
      .then((response) => {
        setData(response.data.photos.photo);
      });
    console.log(search);
  }

  return (
    <div className="App">
      <center>
        <h2>Gallery Snapshot</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" value={search} onChange={handleSearch} />
          <br /> <br />
          <input type="submit" value="submit" />
        </form>
        <br /> <br />
        {data.length >= 1 ? <Gallery data={data} /> : <h4>No Image Loaded</h4>}
      </center>
    </div>
  );
}

export default App;
