import styled from "styled-components";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import RoomIcon from '@mui/icons-material/Room';
import {mobile} from "../responsive";

const Container = styled.div`
display: flex;
${mobile({flexDirection: "column"})}
`;

const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;
`;
const Logo = styled.h1``;

const Desc = styled.p`
margin: 20px 0px;
`;

const SocialContainer = styled.div`
display: flex;
`;

const SocialIcon = styled.h1`
width: 40px;
height: 40px;
color: white;
border-radius: 50%;
background-color: #${props => props.color};
display: flex;
align-items: center;
justify-content: center;
margin-right: 20px;
`;

const Title = styled.h3`
margin-bottom: 30px;
`;

const List = styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;
`;

const ListItem = styled.li`
width: 50%;
margin-bottom: 10px;
`;

const Center = styled.div`
flex: 1;
padding: 20px;
${mobile({display: "none"})}
`;

const Right = styled.div`
flex: 1;
padding: 20px;
${mobile({backgroundColor: "#fff8f8"})}
`;

const ContactItem = styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;
`;

const Payment = styled.img``;

export default function Footer() {
  return (
    <Container>
        <Left>
            <Logo>Rajput</Logo>
            <Desc>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
             Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book. It has survived
               not only five centuries, but </Desc>
            <SocialContainer>
                <SocialIcon color="3b5999">
                    <FacebookIcon/>
                </SocialIcon>
                <SocialIcon color="E4405F">
                    <InstagramIcon/>
                </SocialIcon>
                <SocialIcon color="55ACEE">
                    <TwitterIcon/>
                </SocialIcon>
                <SocialIcon color="E60023">
                    <PinterestIcon/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>HOME</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Men Fashion</ListItem>
                <ListItem>Woman Fashion</ListItem>
                <ListItem>Accecessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem><RoomIcon style={{marginRight: "10px"}}/>27 Kholi Vikash Nagar Bilaspur Chattisgarh, India(495001)</ContactItem>
            <ContactItem><PhoneIcon style={{marginRight: "10px"}}/>+91 9179109851</ContactItem>
            <ContactItem><EmailOutlinedIcon style={{marginRight: "10px"}}/>avi220743@gmail.com</ContactItem>
            <Payment src="https://www.transparentpng.com/thumb/payment-method/KWM0Hm-payment-method-bitcoin-photo.png" alt="payment method bitcoin photo @transparentpng.com"/>
        </Right>
    </Container>
  )
}
