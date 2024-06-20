import React from 'react'
import "./allStats.css";
import icon1 from '../../assets/icon1.png'
import icon2 from '../../assets/icon2.png'
import icon3 from '../../assets/icon3.png'
import icon4 from '../../assets/icon4.png'
import icon5 from '../../assets/icon5.png'
import icon6 from '../../assets/icon6.png'
import icon7 from '../../assets/icon7.png'
import icon8 from '../../assets/icon8.png'
import icon9 from '../../assets/icon9.png'
import { Link } from 'react-router-dom';
function Sidebar() {
   return (
        <>
            <div className="side-bar">
                <Link to="/">
                    <img src={icon5}></img> Dashbord
                </Link>
                <Link to="/Customers">
                    <img src={icon6}></img> Customer
                </Link>
                <Link to="/Transactions">
                    {" "}
                    <img src={icon7}></img> Transactions
                </Link>
                <Link to="/Payout">
                    {" "}
                    <img src={icon8}></img> Payout
                </Link>
                <Link to="/">
                    {" "}
                    <img src={icon9}></img> Log-Out
                </Link>
            </div>
        </>
   )
}

export default Sidebar