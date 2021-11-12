
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Ourdoctor = ({doctor}) => {
    
    const { id, img , name ,  dgree, medical , time} = doctor;
    return (
        <div>
        
        <Col className=" shadow-lg p-3 mb-5 bg-body rounded shadow-none h-100 rounded">
          <Card className="shadow h-100">
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title> <b>{name}</b> </Card.Title>
                 <p>{dgree}</p>
                 <p>{medical}</p>
                 <p>{time}</p>
                 <button className="btn btn-outline-success">more Details</button>
            </Card.Body>
          </Card>
        </Col>
      </div>
    );
};

export default Ourdoctor;