import React from 'react'
import { useEffect, useState } from 'react'
import { TicketService } from '../../Services/Ticket-service';
import Formulaire from '../Formulaire';


export default function ListeTicket() {

  const [ticket, setTicket] = useState([]);
  useEffect(() => {
  GetListTicket();
  
},[]); 

  const GetListTicket=async()=>{
    
    TicketService.fetchTicket()
      .then((res) => {
        setTicket(res.data);
  });
  }
    return (
      <div classname = "container">
      <h1>Liste Des Tickets </h1>

      <div style ={{"display":"flex","flexWrap":"wrap","justifyContent":"left"}}>
        <table>
       <tr>
        <th>Numero Ticket</th>
        <th>Date</th>
        <th>Montant</th>
        </tr>
        {ticket.map((eca,i)=>
        <tr>           <td>{eca.NUMBL} </td>
           <td>{eca.DATEBL} </td>
           <td>{eca.MTTC} TND  </td>
           </tr>
        )}
        </table>


 </div>
      
    </div>
    )
}

