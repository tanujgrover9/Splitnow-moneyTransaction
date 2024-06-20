import React, { useEffect, useState } from 'react';
import './Customers.css';




const customers = [
    { id: 1, name: 'John Doe', mobile: '123-456-7890', accountType: 'On time Payees', image: 'path/to/image1.jpg'  },
    { id: 2, name: 'Jane Smith', mobile: '234-567-8901', accountType: 'Late Payee' , image: 'path/to/image1.jpg' },
    { id: 3, name: 'Alice Johnson', mobile: '345-678-9012', accountType: 'Due pending of Payee', image: 'path/to/image1.jpg'  },
    { id: 4, name: 'John Doe', mobile: '123-456-7890', accountType: 'On time Payees' , image: 'path/to/image1.jpg' },
    { id: 5, name: 'Jane Smith', mobile: '234-567-8901', accountType: 'Late Payee' , image: 'path/to/image1.jpg' },
    { id: 6, name: 'Alice Johnson', mobile: '345-678-9012', accountType: 'Due pending of Payee' , image: 'path/to/image1.jpg' },
    { id: 7, name: 'John Doe', mobile: '123-456-7890', accountType: 'On time Payees' , image: 'path/to/image1.jpg' },
    { id: 8, name: 'Jane Smith', mobile: '234-567-8901', accountType: 'Late Payee' , image: 'path/to/image1.jpg' },
    { id: 9, name: 'Alice Johnson', mobile: '345-678-9012', accountType: 'Due pending of Payee' , image: 'path/to/image1.jpg' },
    { id: 10, name: 'John Doe', mobile: '123-456-7890', accountType: 'On time Payees', image: 'path/to/image1.jpg'  },
    { id: 11, name: 'Jane Smith', mobile: '234-567-8901', accountType: 'Late Payee' , image: 'path/to/image1.jpg' },
    { id: 12, name: 'Alice Johnson', mobile: '345-678-9012', accountType: 'Due pending of Payee' , image: 'path/to/image1.jpg' },
    { id: 13, name: 'John Doe', mobile: '123-456-7890', accountType: 'On time Payees' , image: 'path/to/image1.jpg' },
    { id: 14, name: 'Jane Smith', mobile: '234-567-8901', accountType: 'Late Payee', image: 'path/to/image1.jpg'  },
    { id: 15, name: 'Alice Johnson', mobile: '345-678-9012', accountType: 'Due pending of Payee' , image: 'path/to/image1.jpg' },
   
];

function getAccountTypeClass(accountType) {
    switch(accountType) {
      case 'On time Payees':
        return 'account-type-On-time-Payees';
      case 'Late Payee':
        return 'account-type-Late-Payee';
      case 'Due pending of Payee':
        return 'account-type-Due-pending-of-Payee';
      default:
        return '';
    }
  }

function Customers() {


    // const [customers, setCustomers] = useState([]);

    // useEffect(() => {
    //   // Fetch customer data from backend API
    //   fetch('https://api.example.com/customers')
    //     .then(response => response.json())
    //     .then(data => setCustomers(data))
    //     .catch(error => console.error('Error fetching customer data:', error));
    // }, []);

  return (
    <div className="customers">
      <h1>Customers</h1>
      <table>
        <thead>
          <tr>
            <th className="name-column">Splitter Name</th>
            <th>Mobile No.</th>
            <th>Account Type</th>
          </tr>
        </thead>
        <tbody>
          {customers.map(customer => (
            <tr key={customer.id}>
              <td className="name-column"><img src={customer.image} className="customer-photo" />{customer.name}</td>
              <td>{customer.mobile}</td>
              <td className={`right-align ${getAccountTypeClass(customer.accountType)}`}>
                {customer.accountType}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Customers;
