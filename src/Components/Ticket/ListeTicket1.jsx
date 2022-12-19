import React from 'react'
import { useEffect, useState } from 'react'
import { TicketService } from '../../Services/Ticket1.service';
import Ligneticket1 from './LigneTicket1'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


export default function ListeTicket1() {

  const [ticket, setTicket] = useState([]);
  useEffect(() => {
  GetListTicket();
  
},[]); 

  const GetListTicket=async()=>{
    
    TicketService.fetchTicket1()
      .then((res) => {
        setTicket(res.data);
  });
  }
    return (
      <div classname = "container">
      <h1>Liste Des Tickets  En cours</h1>
        {ticket.map((eca,i)=>

        <Card style={{ width: '30rem' }}>
      <Card.Header>Ticket :{eca.NUMBL} Date {eca.DATEBL} Montant {eca.MTTC} TND</Card.Header>
      <ListGroup variant="flush">
       
        <Ligneticket1 numligne={eca.NUMBL}/> 
           

     

      </ListGroup>
    </Card>
)}
    </div>
    )
}

