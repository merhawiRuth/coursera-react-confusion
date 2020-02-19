import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';


class DishDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            prevProps: [
                {
                    detail:
                        [
                            { comments: null }
                        ]
                }]
        }
    }
    // componentDidUpdate(prevProps) {
    //     if (prevProps !== this.props) {
    //         this.setState({ prevProps: this.props })
    //     }
    // }

    renderDish(dish) {
        if (dish != null) {
            return (
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>
                                <strong>{dish.name}</strong>
                            </CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            );
        } else {
            return (
                <div></div>
            );
        }
    }
    renderComments(detail) {
        if (detail != null) {
            const commentItems = detail.comments.map((comment) => {
                return (
                    <div>
                        <li className="mb-2">{comment.comment}</li>
                        <li className="mb-4">{`--${comment.author} ${new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}`}</li>
                    </div>
                );
            });
            return (
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {commentItems}
                    </ul>
                </div>
            );
        } else {
            return (
                <div></div>
            );
        }
    }
    render() {
        return (
            <div className="row">
                {this.renderDish(this.state.prevProps.detail)}
                {this.renderComments(this.state.prevProps.detail)}
            </div>
        );
    }
}
export default DishDetail;