import "./Payout.css";

const Payout = () => {
    const users = [
        {
            name: "Kathryn Murphy",
            date: "July 02, 2024",
            time: "09:20 AM",
            balance: 2000,
            status: "Successful",
            payoutId: "100024789277",
            imgSrc: "./proimg.jpg",
        },
        {
            name: "Leslie Alexander",
            date: "July 03, 2024",
            time: "09:25 AM",
            balance: 1200,
            status: "Successful",
            payoutId: "100024797424",
            imgSrc: "./proimg.jpg",
        },
        {
            name: "Ronald Richards",
            date: "July 03, 2024",
            time: "09:25 AM",
            balance: 1200,
            status: "Successful",
            payoutId: "100024797424",
            imgSrc: "./proimg.jpg",
        },
        {
            name: "Jenny wilson",
            date: "July 03, 2024",
            time: "09:25 AM",
            balance: 1200,
            status: "Successful",
            payoutId: "100024797424",
            imgSrc: "./proimg.jpg",
        },
        {
            name: "Lease watson",
            date: "July 03, 2024",
            time: "09:25 AM",
            balance: 1200,
            status: "Successful",
            payoutId: "100024797424",
            imgSrc: "./proimg.jpg",
        },
        {
            name: "Darlene Robertson",
            date: "July 03, 2024",
            time: "09:25 AM",
            balance: 1200,
            status: "Successful",
            payoutId: "100024797424",
            imgSrc: "./proimg.jpg",
        },
    ];

    return (
        <div className="container">
            <h1>Payout To User Wallet:</h1>
            <div className="contsec">
                <table>
                    <thead>
                        <tr>
                            <th className="tableHead">User Details</th>
                            <th className="tableHead">Trxn Date</th>
                            <th className="tableHead">Time</th>
                            <th className="tableHead">Payout Balance</th>
                            <th className="tableHead">Payout Status</th>
                            <th className="tableHead">Payout Id</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={index}>
                                <td>
                                    <img src={user.imgSrc} alt={"img"} /> {user.name}
                                </td>
                                <td>{user.date}</td>
                                <td>{user.time}</td>
                                <td>{user.balance}</td>
                                <td className="status-success">{user.status}</td>
                                <td>{user.payoutId}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Payout;
