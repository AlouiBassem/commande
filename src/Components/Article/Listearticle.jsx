
import React from 'react'
import { useEffect, useState } from 'react'
import { ArticleService } from '../../Services/Articles-service';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export default function Listearticle() {
    const [articles, setArticles] = useState([]);
    useEffect(() => {
    GetListArticles();
    
  },[]); 

    const GetListArticles=async()=>{
        ArticleService.fetchArticles()
        .then((res) => {
        setArticles(res.data);

        
    });
    }
    
  return (



    <div classname = "container">
      <h1>Liste Des Articles </h1>

      <div style ={{"display":"flex","flexWrap":"wrap","justifyContent":"center"}}>
        
       

        {articles.map((arti,i)=>
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={arti.imagepath} />
      <Card.Body>
        <Card.Title> {arti.LibArt}</Card.Title>
        <Card.Text>
          
        </Card.Text>
        <Button variant="primary">Ajouter  </Button>
        
       
        <input type={Text}/> 
        <Button variant="warning">+ </Button>
        <Button variant="danger">- </Button>
      </Card.Body>
    </Card>
        )}
 </div>
      
    </div>
  )
}
