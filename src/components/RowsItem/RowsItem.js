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
              <img className="item__img" src={item.logo} alt={item.company} />
              <div className="item__info">
                <div>
                  <p className="item__company">{item.company}</p>
                  {
                    item.new && <p className="new">new!</p>
                  }
                  {
                    item.featured && <p className="featured">featured</p>
                  }
                </div>
                <div>
                  <p className="item__position">{item.position}</p>
                </div>
                <div className="item__grey">
                  <p>{item.postedAt}</p>
                  <p><span className="item__circle"></span>{item.contract}</p>
                  <p><span className="item__circle"></span>{item.location}</p>
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
