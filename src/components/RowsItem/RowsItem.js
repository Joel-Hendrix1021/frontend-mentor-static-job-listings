import React from "react";
import "./styles.css";

export default function RowsItem({ data,handleSelectFilter }) {
  const handleLenguage = (e) => {
    handleSelectFilter(e.target.textContent)
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
                  {
                    item.new && <p>new</p>
                  }
                  {
                    item.featured && <p>featured</p>
                  }
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
                <p onClick={handleLenguage}>{item.role}</p>
                <p onClick={handleLenguage}>{item.level}</p>
              {item.languages.map((lenguage, index) => {
                return (
                  <p onClick={handleLenguage} key={lenguage}>
                    {lenguage}
                  </p>
                );
              })}
              {
                item.tools.length > 0 ? (
                  item.tools.map(tool => {
                    return (
                      <p onClick={handleLenguage} key={tool}>{tool}</p>
                    )
                  })
                  ): null
              }
            </div>
          </div>
        );
      })}
    </>
  );
}
