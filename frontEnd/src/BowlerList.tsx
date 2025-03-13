import { useEffect, useState } from 'react';
import {team, Bowler} from './types/Bowler.ts'

function BowlerList() {

    const [bowlers, setBowlers] = useState<Bowler[]>([]);

    useEffect(() => {
            const fetchBowler = async () => {
        const response = await fetch('https://localhost:5000/api/Bowler');
        const data = await response.json();
        console.log("API Data:", data);

        setBowlers(data);
    };    
    fetchBowler();

},[]);

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <td>Bowler Name:</td>
                        <td>Team Name:</td>
                        <td>Address:</td>
                        <td>City:</td>
                        <td>State:</td>
                        <td>Zip:</td>
                        <td>Phone Number:</td>
                    </tr>
                </thead>
                <tbody>
    {bowlers.map((b) => (
        <tr key={b.bowlerID}>
            <td>  {`${b.bowlerFirstName} ${b.bowlerMiddleInit ? `${b.bowlerMiddleInit} ` : ''}${b.bowlerLastName}`}            </td>
            <td>{b.team.teamName || "No Team"}</td>
            <td>{b.bowlerState}</td>
            <td>{b.bowlerCity}</td>
            <td>{b.bowlerState}</td>
            <td>{b.bowlerZip}</td>
            <td>{b.bowlerPhoneNumber}</td>
        </tr>
    ))}
</tbody>

            </table>
        </>
    )
}

export default BowlerList;