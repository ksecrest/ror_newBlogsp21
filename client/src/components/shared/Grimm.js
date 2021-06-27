import HomeTitle, { HomeSubTitle } from "../styledComponents/homeStyles";
import SlothBaby from "../images/SlothBaby.jpg";
import { Image } from 'semantic-ui-react';
const Grimm = () => (
    <>
    <Image src= { SlothBaby } size='massive' />
    <HomeTitle>This is Grimm's webpage</HomeTitle>
    <HomeSubTitle>I like doing origami and my favorite animal is the sloth.</HomeSubTitle>
    </>
)

export default Grimm;

{/* <Image src= { Food } size='large' /> */}