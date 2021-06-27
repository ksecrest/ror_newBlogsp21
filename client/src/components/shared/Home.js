import Navbar from './Navbar';
import HomeTitle, { HomeSubTitle, MyButton } from '../styledComponents/homeStyles';
import Food from '../images/Food.jpg';



import { Header,Button, Image} from 'semantic-ui-react';

const Home = () => (
  <>
  <Image src= { Food } size='large' />
  <Header as="h1" color="blue" textAlign='center' >Welcome to the Homepage</Header>
  <Button basic color='pink'>Blogs </Button>
  <MyButton>Click Here</MyButton>
  <HomeTitle large>Basic Information</HomeTitle>
  <HomeSubTitle>Not too much though</HomeSubTitle>
  
  </>
)

export default Home;

{/* <Image src='/images/wireframe/image.png' size='small' /> */}