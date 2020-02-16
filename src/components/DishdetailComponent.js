import React, { Component } from 'react'
import { Media, Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';



export default class DishDetail extends Component {


    render() {
        const { dish } = this.props;
        return <Card>
            <CardImg top src={this.props.dish.image} alt={dish.name} />
            <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
            </CardBody>
        </Card>
    }
}
