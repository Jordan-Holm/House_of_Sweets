import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { Button, Card, Image } from 'react-bootstrap';

export const MainP = styled.p`
   font-size: 13px;
`;

// LOGIN STYLING

export const imageContainer = styled.div `
   background-color: #cc5803;
`
export const imageObject = styled.image `
   padding: 0%;
   margin: -0% 0% 0% 0%;
   scale: 85%;
`

export const imageTextRow = styled.div `
   margin: -10% 5% 10% 5%;
   color: #000000;
`

export const imageTextRowRegister = styled.div `
   margin: -10% 5% 10% 5%;
   color: #ff7f11;
`

export const loginBody = styled.div `
   background-color: white;
   color: black;
`

export const loginShow = styled.div `
   text-align: right;
   padding-right: 5%;
`

export const loginForm = styled.div `
   width: 90%;
   padding: 10% 10% 10% 10%;
   border-radius: 2%;
`

export const loginEmail = styled.div `
   padding: 5% 0% 5% 0%;
`

export const loginPassword = styled.div `
   padding-bottom: 5%;
`

export const loginRemember = styled.div `
   padding-bottom: 15%;
`
export const loginButton = styled.button `
   background-color: #833FFF;
   border-color: #833FFF;
`

export const register = styled.div `
   text-align: center;
`

export const registerBody = styled.div `
   background-color: white;
   color: black;
`

export const registerName = styled.div `
   background-color: white;
   color: black;
`


export const registerOrigin = styled.div `
   background-color: white;
   color: black;
`

export const registerShow = styled.div `
   text-align: right;
   padding-right: 5%;
`

export const registerForm = styled.div `
   width: 90%;
   padding: 10% 10% 10% 10%;
   border-radius: 2%;
`

export const registerEmail = styled.div `
   padding: 5% 0% 5% 0%;
`

export const registerPassword = styled.div `
   padding-bottom: 5%;
`

export const agreementPolicy = styled.div `
   padding-bottom: 15%;
`
export const registerButton = styled.button `
   background-color: blueviolet;
   border-color: blueviolet;
`

export const login = styled.div `
   text-align: center;
   `

// TEAM STYLING

// HOUSE CARD CONTAINER
export const houseCardContainer = styled.div `
   background-color: #cc5803;
`
export const filterRow = styled.div `
   padding: 5%;
`
export const addButton = styled.div `
   text-align: right;
`
export const addButtonColor = styled.button `
   background-color: #833FFF;
`

// HOUSE CARD
export const CardLink = styled(Link) `
   text-decoration: none; !important;

   &:hover {
      color: white; !important;
   }
`
export const cardBody = styled.div `
   background-color: #cc5803;
   border: none;
   color: black;
`

export const ScoreImg = styled(Image) `
   background-color: #cc5803;
   border-color: #cc5803;
`

//CARD STYLING

export const teamCard = styled(Card) `
   width: 80%;
   background-color: #CC5803;
   border-color: black;
   border-width: 3px;
`

export const ImageStyle = styled(Image)`
   padding: 5%;
   border-radius: 15%;
   width: 100%;
   height: 100%; 
`

export const cardTitle = styled.div `
   color: black;
   text-align: center; 
   font-size: 200%;
`

export const buttonAlign = styled.div `
   text-align: center;
`

export const createdButton = styled.button `
   background-color: #833FFF;
   border-color: #833FFF;
`

export const GithubButton = styled(Button) `
   margin: 5%;
   background-color: #833FFF;
   border-color: #833FFF;
`

export const LinkedInButton = styled(Button) `
   margin: 5%;
   background-color: #833FFF;
   border-color: #833FFF;
`

//FILTER STYLE

export const FilterSpan = styled.span `
   text-decoration: underline;
`