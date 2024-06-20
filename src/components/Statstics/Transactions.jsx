import React from "react";
import "./Transactions.css";

const Transactions = () => {
  const trxnData = [
    {
      uName: "Kathryn Murphy",
      trxnDate: "July 02, 2024",
      time: "09:20 AM",
      addAmount: 2000,
      paymentStatus: "Successful",
      trxnId: 100024789277,
    },
    {
      uName: "Kathryn Murphy",
      trxnDate: "July 02, 2024",
      time: "09:20 AM",
      addAmount: 2000,
      paymentStatus: "Failed",
      trxnId: 100024789277,
    },
    {
      uName: "Kathryn Murphy",
      trxnDate: "July 02, 2024",
      time: "09:20 AM",
      addAmount: 2000,
      paymentStatus: "Successful",
      trxnId: 100024789277,
    },
    {
      uName: "Kathryn Murphy",
      trxnDate: "July 02, 2024",
      time: "09:20 AM",
      addAmount: 2000,
      paymentStatus: "Successful",
      trxnId: 100024789277,
    },
    {
      uName: "Kathryn Murphy",
      trxnDate: "July 02, 2024",
      time: "09:20 AM",
      addAmount: 2000,
      paymentStatus: "Successful",
      trxnId: 100024789277,
    },
    {
      uName: "Kathryn Murphy",
      trxnDate: "July 02, 2024",
      time: "09:20 AM",
      addAmount: 2000,
      paymentStatus: "Successful",
      trxnId: 100024789277,
    },
    {
      uName: "Kathryn Murphy",
      trxnDate: "July 02, 2024",
      time: "09:20 AM",
      addAmount: 2000,
      paymentStatus: "Successful",
      trxnId: 100024789277,
    },
    {
      uName: "Kathryn Murphy",
      trxnDate: "July 02, 2024",
      time: "09:20 AM",
      addAmount: 2000,
      paymentStatus: "Successful",
      trxnId: 100024789277,
    },
    {
      uName: "Kathryn Murphy",
      trxnDate: "July 02, 2024",
      time: "09:20 AM",
      addAmount: 2000,
      paymentStatus: "Successful",
      trxnId: 100024789277,
    },
    {
      uName: "Kathryn Murphy",
      trxnDate: "July 02, 2024",
      time: "09:20 AM",
      addAmount: 2000,
      paymentStatus: "Successful",
      trxnId: 100024789277,
    },
    {
      uName: "Kathryn Murphy",
      trxnDate: "July 02, 2024",
      time: "09:20 AM",
      addAmount: 2000,
      paymentStatus: "Successful",
      trxnId: 100024789277,
    },
    {
      uName: "Kathryn Murphy",
      trxnDate: "July 02, 2024",
      time: "09:20 AM",
      addAmount: 2000,
      paymentStatus: "Successful",
      trxnId: 100024789277,
    },
    {
      uName: "Kathryn Murphy",
      trxnDate: "July 02, 2024",
      time: "09:20 AM",
      addAmount: 2000,
      paymentStatus: "Successful",
      trxnId: 100024789277,
    },
    {
      uName: "Kathryn Murphy",
      trxnDate: "July 02, 2024",
      time: "09:20 AM",
      addAmount: 2000,
      paymentStatus: "Successful",
      trxnId: 100024789277,
    },
    {
      uName: "Kathryn Murphy",
      trxnDate: "July 02, 2024",
      time: "09:20 AM",
      addAmount: 2000,
      paymentStatus: "Successful",
      trxnId: 100024789277,
    },
    {
      uName: "Kathryn Murphy",
      trxnDate: "July 02, 2024",
      time: "09:20 AM",
      addAmount: 2000,
      paymentStatus: "Successful",
      trxnId: 100024789277,
    },
    {
      uName: "Kathryn Murphy",
      trxnDate: "July 02, 2024",
      time: "09:20 AM",
      addAmount: 2000,
      paymentStatus: "Successful",
      trxnId: 100024789277,
    },
    {
      uName: "Kathryn Murphy",
      trxnDate: "July 02, 2024",
      time: "09:20 AM",
      addAmount: 2000,
      paymentStatus: "Successful",
      trxnId: 100024789277,
    },
    {
      uName: "Kathryn Murphy",
      trxnDate: "July 02, 2024",
      time: "09:20 AM",
      addAmount: 2000,
      paymentStatus: "Successful",
      trxnId: 100024789277,
    },
  ];

  return (
    <>
    
      <div className="transactionDetails">
        <div className="trxnTop">
          <h3>Transactions List</h3>
          <button>View All</button>
        </div>
        <table className="tblTrxn">
          <thead>
            <tr class="tblTrxn">
              <th>User Name</th>
              <th>Trxn Date</th>
              <th>Time</th>
              <th>Add Amount</th>
              <th>Payment Status</th>
              <th>Transaction Id</th>
            </tr>
            <tr className="separator-row">
              <td colSpan="6"></td>
            </tr>
          </thead>

          <tbody>
            {trxnData.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.uName}</td>
                  <td>{item.trxnDate}</td>
                  <td>{item.time}</td>
                  <td>{item.addAmount}</td>
                  <td
                    className={
                      item.paymentStatus === "Successful" ? "success" : "fail"
                    }
                  >
                    {item.paymentStatus}
                  </td>
                  <td>{item.trxnId}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    
    </>
  );
};

export default Transactions;
