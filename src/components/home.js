import React from 'react'
import { Button, Card, Image } from 'semantic-ui-react'

const CardExampleGroups = (props) => (
  <Card.Group>
    <Card>
      {/* put id in every card generated or frm fb */}
      <Card.Content>
        <Image floated='right' size='mini' src='/images/avatar/large/steve.jpg' />
        <Card.Header>{props.person.name}</Card.Header>
        <Card.Meta>{props.person.username} </Card.Meta>
        <Card.Description>
          Steve wants to add you to the group <strong>best friends</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Approve
          </Button>
          <Button basic color='red'>
            Decline
          </Button>
        </div>
      </Card.Content>
    </Card>
  </Card.Group>
)

export default CardExampleGroups