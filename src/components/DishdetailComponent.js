import React, { Component } from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle
} from 'reactstrap';

export default class DishDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    renderComments(cmnt) {
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

    render() {
        const cmnt = this.props.dish.comments.map((cmnt) => {
            return (this.renderComments(cmnt))

        })
        console.log(this.props);

        return (
            <div className="container">
                <div className="row col-sm">
                    <div className="col-12 col-md-5 m-1">
                        <Card >
                            <CardImg width="100%" src={this.props.dish.image} alt={this.props.dish.name} />
                            <CardBody>
                                <CardTitle>{this.props.dish.name}</CardTitle>
                                <CardText>{this.props.dish.description}</CardText>
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
}