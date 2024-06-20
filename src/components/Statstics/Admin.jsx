import React from "react";
import "./admin.css";
import icon from "../../assets/user.png";

const Admin = () => {
  return (
    <div className="admin-container">
      <div className="admin">
        <div>
          <h1>Hello Admin 👋</h1>
          <p>Good Morning</p>
        </div>
     

          <div className="user">
          
          <i class="fa-regular fa-bell fa-2xl"></i>

          <img src={icon} alt="icon" />
          <div className="user-info">
        
         <i class="fa-solid fa-caret-down fa-lg" ></i>
          <h3>Prakash</h3>
            <p >Admin</p>
          </div>
           
        
          </div>
          
            
          
            
          
        
      </div>
    </div>
  );
};

export default Admin;
