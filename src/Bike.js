import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export const Bike = (props) => {
    console.log(props)

    return (
        <div onClick={props.deleteItem}>
            <Card style={ {maxWidth: '400px' }}>
                <Card.Img style={ {maxWidth: '400px' }} variant="top" src={props.image} />
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button id={props.id} variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    )
}