import { React, useState } from "react";
import UrlInput from "../Input/Input";
import axios from "axios";


export const Home = (props) => {
  const [shortenLink, setShortenLink] = useState("");

  const addUrlHandler = (URL) => {
    const urlLink = URL;
    console.log(urlLink);
    try {
      axios(`https://api.shrtco.de/v2/shorten?url=${urlLink}`).then(
        (response) => {
          console.log(response.data.result.full_short_link);
          setShortenLink(response.data.result.full_short_link);
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>

      <UrlInput onAdd={addUrlHandler} />

      {shortenLink}
    </>
  );
};

export default Home;



