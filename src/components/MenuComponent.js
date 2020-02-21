import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';


class Menu extends Component {

    constructor(props) {
        super(props);
        this.state = {}
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
                <div>
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
        const menu = this.props.dishes.map((dish) => {
            return (
                <div className="col-12 col-md-5 m-1">
                    <Card key={dish.id} onClick={() => this.props.onClick(dish.id)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
            </div>
        );
    }
}

export default Menu;