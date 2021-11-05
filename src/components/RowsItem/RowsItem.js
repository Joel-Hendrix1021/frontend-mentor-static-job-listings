import React from "react";
import "./styles.css";

const RowsItem = ({ data, handleSelectFilter }) => {
  const handleLenguage = (e) => {
    handleSelectFilter(e.target.textContent);
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
                  {item.new && <p className="new">new!</p>}
                  {item.featured && <p className="featured">featured</p>}
                </div>
                <div>
                  <p className="item__position">{item.position}</p>
                </div>
                <div className="item__grey">
                  <p>{item.postedAt}</p>
                  <p>
                    <span className="item__circle" />
                    {item.contract}
                  </p>
                  <p>
                    <span className="item__circle" />
                    {item.location}
                  </p>
                </div>
              </div>
            </div>
            <div className="item__left">
              <button type="button" onClick={handleLenguage}>
                {item.role}
              </button>
              <button type="button" onClick={handleLenguage}>
                {item.level}
              </button>
              {item.languages.map((lenguage) => {
                return (
                  <button type="button" onClick={handleLenguage} key={lenguage}>
                    {lenguage}
                  </button>
                );
              })}
              {item.tools.length > 0
                ? item.tools.map((tool) => {
                    return (
                      <button type="button" onClick={handleLenguage} key={tool}>
                        {tool}
                      </button>
                    );
                  })
                : null}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default RowsItem;
