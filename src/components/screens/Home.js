import React, { useState, useEffect} from 'react';
import styled from "styled-components";
import axios from "axios";
import { Link } from 'react-router-dom';

export default function Home() {
    const [places, setplaces] = useState([]);
    useEffect(()=>{
        axios.get("https://traveller.talrop.works/api/v1/places/")
        .then(function (response){
            console.log(response.data.data)
            setplaces(response.data.data);
        })
        .catch(function (error){
            console.log(error)
        })
    },[])
    let renderplaces =()=>{
        return places.map((place)=>(
            <List>
                <ListContainer to={`/about/${place.id}`}>
                    <Imagecontainer>
                        <Image src={place.image} alt={place.name} />
                    </Imagecontainer>
                    <Name>{place.name}</Name>
                    <Place><Locimage src={require("../../assets/images/place.svg").default} alt={place.location} />
                    {place.location}</Place>
                </ListContainer>
            </List>
        ))
    }
    return (
        <>
            <Gallery>
                <Heading>Welcome</Heading>
                <Note>Explore the world around you</Note>
                <Container>
                    {renderplaces()}
                </Container>
            </Gallery>
            
        </>
    )
}
const ListContainer = styled(Link)`
    text-decoration: none;
`
const Gallery = styled.section`
    padding: 10px 60px;
`;
const Heading = styled.h2`
    font-size: 36px;
    font-weight: 700;
    margin-bottom: 20px;
`;
const Note = styled.p`
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 20px;
    color: grey;
`;
const Container = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    list-style: none;
    padding-left: 0;

`;
const List = styled.li`
    width: 24%;
    margin-bottom: 50px;
    

`;
const Imagecontainer = styled.div`
    border-radius: 10px;
    overflow: hidden;
`;
const Image = styled.img`
    display: block;
    width: 100%;
    transition-duration: .8s;
    &:hover{
    transform: scale(1.2);
    transition: .8s;
    }
    

`;
const Name = styled.h2`
    font-size: 18px;
    font-weight: 700;
    border: none;
    color: #000;

`;
const Place = styled.small`
    display: flex;
    align-items: center;
    font-weight: 500;
    font-size: 16px;
    color: #000;

`;
const Locimage = styled.img`
    display: block;
    margin-right: 10px;
`;

