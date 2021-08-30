import React from "react";
import "./styles.css";

export default function RowsItem({ data }) {
  const handleLenguage = () => {
    console.log("hola");
  };

  return (
    <>
      {data.map((item) => {
        return (
          <div className="container__rows" key={item.id}>
            <div className="item__rigth">
              <img className="item__img" src={item.logo} alt="" />
              <div className="item__info">
                <div>
                  <p>{item.company}</p>
                  <p>New</p>
                  <p>Featured</p>
                </div>
                <div>
                  <p>{item.position}</p>
                </div>
                <div>
                  <p>{item.postedAt}</p>
                  <p>{item.contract}</p>
                  <p>{item.location}</p>
                </div>
              </div>
            </div>
            <div className="item__left">
              {item.languages.map((lenguage, index) => {
                return (
                  <p onClick={handleLenguage} key={lenguage}>
                    {lenguage}
                  </p>
                );
              })}
            </div>
          </div>
        );
      })}
    </>
  );
}
