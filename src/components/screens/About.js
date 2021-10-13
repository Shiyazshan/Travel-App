import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import axios from "axios";
import { useParams } from 'react-router-dom';
import {Helmet} from "react-helmet";



export default function About() {
    const [content, setcontent] = useState({});
    const {id} = useParams();

    useEffect(()=>{
        console.log({id});
        axios.get(`https://traveller.talrop.works/api/v1/places/view/${id}`)
        .then(function (response){
            console.log("response",response.data.data)
            setcontent(response.data.data);
        })
        .catch(function (error){
            console.log("error",error)
        })
    });

    console.log("content",content)

      let rendergallery = ()=>{
          if(content.gallery){
            return content.gallery.map((item)=>(
                <Listimages>
                    <Frame><Image2 src={item.image} /></Frame>
                </Listimages>
            ))
          }
          
      }
   
    
    return (
        <>
            <Aboutsection>
                <Helmet>
                    <title>{`${content.name}`}</title>
                </Helmet>
                <Name>{content.name}</Name>
                <Location>
                    <Small>{content.location}</Small>
                    <Place>{content.place}</Place>
                </Location>
                <Gallerysection>
                    <Leftsection>
                        <Image1 src={content.image} />
                    </Leftsection>
                    <Rightsection>
                        {rendergallery()} 
                    </Rightsection>
                </Gallerysection>
                <Details>Place details</Details>
                <Content>{content.description}</Content>
            </Aboutsection> 
        </>
    )
}
const Aboutsection = styled.section`
     padding: 4% 10%;
`;
const Name = styled.h2`
    font-size: 45px;
    font-weight: 700;
    margin-bottom: 20px;
    padding-left: 8%;

`;
const Location = styled.div`
    width: 40%;
    display: flex;
    align-items:flex-start;
    margin-bottom: 20px;
`;
const Small = styled.span`
    font-weight: 500;
    font-size: 20px;
    margin-right: 20px;
    padding-left: 20%;
`;
const Place = styled.small`

`;
const Gallerysection = styled.div`
    width: 100%;
    display: flex;
    margin-bottom: 50px;
    justify-content: center;
    align-items: center;
`;
const Leftsection = styled.div`
    width: 40%;
    margin-left: -20px;
    border-top-left-radius:20px;
    overflow: hidden;
    border-bottom-left-radius:20px;

`;
const Image1 = styled.img`
    display: block;
    width: 100%;
`;
const Rightsection = styled.ul`
    display: grid;
    grid-gap: 20px 20px;
    grid-template-columns: auto auto;
    width: 40%;
    margin-left: -20px;

`;
const Listimages = styled.li`
    width:100%;
    overflow: hidden;
    &:nth-child(2){
        border-top-right-radius: 20px;
        
    }
    &:nth-child(4){
        border-bottom-right-radius: 20px;
        
    }
`;
const Frame = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
    
`;
const Image2 = styled.img`
    width: 100%;
    display: block;
`;
const Details = styled.h3`
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 20px;
    padding-left: 8%;
`;
const Content = styled.p`
    font-size: 20px;
    padding-left: 8%;

`;


