import React, { Component } from 'react';
import { Media, Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import DishDetail from './DishdetailComponent';
class Menu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null
        }
    }

    onDishSelect(dish) {
        this.setState({ selectedDish: dish });
    }

    renderDish(dish) {
        if (dish != null)
            return <DishDetail dish={dish} />
        else
            return (
                <div></div>
            );
    }
    renderComments(dish) {

        if (dish != null) {
            console.log(dish);
            return <div>
                <h4 style={{ marginLeft: '35px' }}>Comments</h4>
                <ol>
                    {dish.comments ? dish.comments.map(e => {
                        let newDate = e.date.split('').splice(0, 10).join('');
                        let month = newDate.split('').slice(5, 7).join('');
                        let b = '';
                        switch (month) {
                            case '01': b = "Jan";
                                break;
                            case '02': b = "Feb";
                                break;
                            case '03': b = "Mar";
                                break;
                            case '04': b = "Apr";
                                break;
                            case '05': b = "May";
                                break;
                            case '06': b = "Jun";
                                break;
                            case '07': b = "Jul";
                                break;
                            case '08': b = "Aug";
                                break;
                            case '09': b = "Sep";
                                break;
                            case '10': b = "Oct";
                                break;
                            case '11': b = "Nov";
                                break;
                            case '12': b = "Dec";
                                break;
                        }
                        return < div >
                            <li className="list-unstyled">{e.comment}</li>
                            <li className="list-unstyled">---   {e.author}, {b} {newDate.slice(8, 10)}, {newDate.slice(0, 4)}</li>
                        </div>
                    }) : <div></div>}
                </ol>
            </div>
        }
        else
            return (
                <div></div>
            )
    }

    render() {

        const menu = this.props.dishes.map((dish) => {
            return (
                <div className="col-12 col-md-5 m-1">
                    <Card key={dish.id}
                        onClick={() => this.onDishSelect(dish)}>
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
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(this.state.selectedDish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComments(this.state.selectedDish)}
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu;