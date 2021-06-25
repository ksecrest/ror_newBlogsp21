import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react'


const Navbar = () => {
  return (
    <Menu>
      <Link to='/'>
        <Menu.Item>
            Home
        </Menu.Item>
      </Link>
      <Link to='/about'>
        <Menu.Item>
            About
        </Menu.Item>
      </Link>
      <Link to='/blogs'>
        <Menu.Item>
            Blogs
        </Menu.Item>
      </Link>
    </Menu>
    

  )
}

export default Navbar;

{/* <Menu>
<Menu.Item
  name='editorials'
  active={activeItem === 'editorials'}
  onClick={this.handleItemClick}
>
  Editorials
</Menu.Item>

<Menu.Item
  name='reviews'
  active={activeItem === 'reviews'}
  onClick={this.handleItemClick}
>
  Reviews
</Menu.Item>

<Menu.Item
  name='upcomingEvents'
  active={activeItem === 'upcomingEvents'}
  onClick={this.handleItemClick}
>
  Upcoming Events
</Menu.Item>
</Menu> */}