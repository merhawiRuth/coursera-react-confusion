import React from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


const renderComments = (cmnt) => {
    if (cmnt) {
        return (
            <div key={cmnt.author}>
                <CardBody >
                    <li className="list-unstyled">
                        <CardText>{cmnt.comment}</CardText>
                        <CardText>{`--${cmnt.author}, ${new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(cmnt.date)))}`}</CardText>
                    </li>
                </CardBody>
            </div>
        )
    }
    else {
        return <div></div>
    }
}


const DishDetail = (props) => {

    const cmnt = props.dish.comments.map((cmnt) => {
        return (renderComments(cmnt))

    })
    return (
        <div className="container">
            <div className="row col-sm">
                <div className="col-12 col-md-5 m-1">
                    <Card >
                        <CardImg width="100%" src={props.dish.image} alt={props.dish.name} />
                        <CardBody>
                            <CardTitle>{props.dish.name}</CardTitle>
                            <CardText>{props.dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    {cmnt}
                </div>
            </div>
        </div>
    )
}

export default DishDetail;