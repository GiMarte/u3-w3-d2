import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { type detailsType } from "../types/detailsTypes";
import SingleCard from "./SingleCard";

const Details = () => {
  const params = useParams();
  const [data, setData] = useState<detailsType>();
  const API = `https://api.spaceflightnewsapi.net/v4/articles/${params.id}`;

  const getData = () => {
    fetch(API)
      .then((res) => {
        if (!res.ok) throw new Error(`Errore: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(getData, []);
  
  if (!data) return null;
  return <SingleCard detail={data} />;
};

export default Details;
