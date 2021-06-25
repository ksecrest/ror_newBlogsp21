import { Link } from 'react-router-dom';
import { Button, Icon, Header } from 'semantic-ui-react'


const NoMatch = () => {
  return (
    <>
    <Header as='h2' icon>
    404 Page. You are lost.  Go Home.
    <Header.Subheader>
      <Link to='/'>
          <Button icon>
            <Icon name='home' />
          </Button>
      </Link>
    </Header.Subheader>
    </Header>
    </>
  )
}

export default NoMatch;

{/* <Link to="/workers">
  <button> button </button>
</Link> */}
