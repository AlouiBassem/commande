import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import { useEffect, useState } from 'react'
import { ligneticket1 } from '../../Services/Ligneticket1.service';
export default function LigneTicket1(props) {


    const [ligne, setligne] = useState([]);
  useEffect(() => {
    Getligne();
  
},[]); 
const Getligne=async(id)=>{
   // console.log(props.numligne)


    let ligne1 = props.numligne;

    ligneticket1.fetchligne1Bynum(ligne1)
      .then((res) => {
        setligne(res.data);
        //console.log(res.data)
  });
  }

  return (
    <div>
        {ligne.map((lca1,i)=>
<ListGroup variant="flush">
        <ListGroup.Item>{lca1.QteART} : {lca1.DesART}  ({lca1.QteART} * {lca1.PUART})  </ListGroup.Item>

      </ListGroup>


        )}
    </div>
  )
}
