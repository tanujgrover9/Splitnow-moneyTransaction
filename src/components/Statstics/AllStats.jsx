import React from "react";
import Stats from "./Stats";
import "./allStats.css";
import icon1 from "../../assets/icon1.png";
import icon2 from "../../assets/icon2.png";
import icon3 from "../../assets/icon3.png";
import icon4 from "../../assets/icon4.png";
import icon5 from "../../assets/icon5.png";
import icon6 from "../../assets/icon6.png";
import icon7 from "../../assets/icon7.png";
import icon8 from "../../assets/icon8.png";
import icon9 from "../../assets/icon9.png";
import data from "../Statstics/StatsData";
import { Link } from "react-router-dom";

const AllStats = (props) => {
  // const statsData=data.map((item)=>{
  //   return (
  //     <Stats
  //     key={item.id}
  //      img={item.img}
  //       about={item.name}
  //       count={item.count}
  //       percent={item.percent}
  //       date={item.date}
  //     />
  //   )
  // })
  return (
    <>
      <div className="main-container">
        <div className="dashbord">
          <div className="all-stats">
            <h3>Recent Activities / app Statics</h3>
            <div className="stats-1">
              {/* {statsData} */}
              <Stats
                img={icon1}
                about="Total Active Split User"
                count="12k"
                percent="12%"
                date="july 16,2023"
              />
              <Stats
                img={icon2}
                about="Today's Total Transactions"
                count="123456.00"
                percent="12%"
                date="july 12,2023"
              />
            </div>
            <br />
            <div className="stats-1">
              <Stats
                img={icon3}
                about="Interest Given Today"
                count="8k"
                percent="12%"
                date=" july 14,2023"
              />
              <Stats
                img={icon4}
                about="Default Split User"
                count="250"
                percent="12%"
                date=" july 18,2023"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllStats;
