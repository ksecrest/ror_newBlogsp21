import Navbar from '../../components/shared/Navbar';
import { Container} from 'semantic-ui-react';
import HomeTitle from '../styledComponents/homeStyles';
import { useState,useEffect } from 'react';
import axios from 'axios';

// const styles = {
//   titleHeader: {
//     color: "Red",
//     fontSize: "2rem",
//   }
// }
const Blogs = () => {
  const [blogs, setBlogs] = useState ([])

  useEffect( () => {
    axios.get("/api/blogs")
      .then( res => {
        setBlogs(res.data)
      })
      .catch( err => console.log(err))

  }, [])

  const addBlog = (blog) => {
    axios.post("/api/blogs", { blog })
    .then( res => {
      setBlogs([...blogs, res.data])
    })
    .catch( err => console.log(err))

  }






  return (
    <>
    <Container>
      <HomeTitle large> Blog Page </HomeTitle>
      <p>
        { blogs.map( b => 
      <>
      <h1>{b.title} </h1>
      </>
      )}
      </p>
      </Container>
  </>
  )
}

export default Blogs;