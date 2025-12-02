import { useEffect, useState } from "react";
import { type MainPageTypes } from "../types/MainPageTypes";
import SingleCard from "./SingleCard";

const MainPage = () => {
  const [data, setData] = useState<MainPageTypes[]>();

  const API = `https://api.spaceflightnewsapi.net/v4/articles`;
  const getData = () => {
    fetch(API)
      .then((res) => {
        if (!res.ok) throw new Error(`Errore: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        console.log(data.results);
        setData(data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(getData, []);

  return (
    <div className="container">
      <div className="row">
        {data?.map((art) => {
          return <SingleCard article={art} key={art.id} />;
        })}
      </div>
    </div>
  );
};

export default MainPage;
