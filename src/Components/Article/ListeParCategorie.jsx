
import React from 'react'
import { useEffect, useState } from 'react'
import { CategorieService } from '../../Services/Categories-service';
import Accordion from 'react-bootstrap/Accordion';
import AccordionArticle from './AccordionArticle';

export default function ListeParCategorie() {

    const[categorie,setcategorie] = useState([]);
    useEffect(() => {

    GetCategorie();
  },[]); 

  
    const GetCategorie=async()=>{
      CategorieService.fetchCategorie()
      .then((res) => {
        setcategorie(res.data);
  });
  }
 
    
  return (



  <div classname = "container">

{categorie.map((cat,i)=>
 <Accordion defaultActiveKey="1" >
 <Accordion.Item eventKey="0">
   {/*<Accordion.Header as={Link} to = {"/article/" + cat.CodeCat}  onClick={()=>{GetListArticles(cat.CodeCat)}} >{cat.DesCat} */}
   <Accordion.Header >{cat.CodeCat}-{cat.DesCat} </Accordion.Header>
   <Accordion.Body >
    

   <AccordionArticle categ ={cat.CodeCat}/>



 </Accordion.Body>
      </Accordion.Item>

    </Accordion>
)}
 </div>



  )
}
