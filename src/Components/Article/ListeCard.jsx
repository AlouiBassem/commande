
import React from 'react'
import { useEffect, useState } from 'react'
import { ArticleService } from '../../Services/Articles-service';
import { MdAddCircleOutline,MdEdit,MdDeleteSweep } from "react-icons/md";
import {Table,Button } from 'react-bootstrap';
import {Link} from "react-router-dom"

export default function Listearticle() {
    const [articles, setArticles] = useState([]);
    useEffect(() => {
    GetListArticles();
    });

    const GetListArticles=async()=>{
        ArticleService.fetchArticles()
        .then((res) => {
        setArticles(res.data);

    });
    }


  return (
    <div>
        <h1>Liste Des Articles </h1>
        <Button variant="success" >
             <MdAddCircleOutline  style={{margin:'3px',}} size="15px" />
                Ajouter      
         </Button>

        <Table striped bordered hover>
      <thead>
         <tr>
            <th>Code Article</th>
            <th>Libelle Article</th>
            <th>Image Article</th>
            <th> Operation </th>
        </tr>
      </thead>

      <tbody>
        {articles.map((arti,i)=>
        <tr >
            <td>{arti.CodeArt}</td>
            <td>{arti.LibArt}</td>
            <td><img src ={arti.imagepath} width ={200} height={200}  alt = {arti.imagepath} /></td>
            <td>
            { <Link to={"/article/" + arti.CodeArt}  style={{textDecoration: "none",color:"white"}}>
                
                <Button variant="warning">
             <MdEdit  style={{margin:'3px',}} size="15px" />
                Modifier  
                     
         </Button>
         </Link>}   
         { <Link to={"/article/" + arti.CodeArt}  style={{textDecoration: "none",color:"white"}}>
                
                <Button variant="danger">
             <MdDeleteSweep  style={{margin:'3px',}} size="15px" />
                Supprimer  
                     
         </Button>
         </Link>}      
            </td>
        </tr>
        )}
      </tbody>

      
      </Table>

    </div>
  )
}
