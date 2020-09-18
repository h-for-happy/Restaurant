import React, { Component } from 'react';
import DishDetail from './DishdetailComponent';
import { Card ,CardImg ,CardImgOverlay ,CardBody ,CardTitle ,CardText } from 'reactstrap';

class Menu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedDish: null    
        };
    }

    onDishSelected(dish){
        this.setState({ selectedDish: dish });
    }

    renderDish(dish){
        if (dish != null)
            return (
                <DishDetail dish={dish} />
            );
        else return(
            <div />
        );
    }


    
    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
                <div className="col-12 col-md-5 m-1">
                    <Card key={dish.id} onClick={() => this.onDishSelected(dish)}>
                        <CardImg width="100%" object src={dish.image} alt={dish.name} />
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
                    {this.renderDish(this.state.selectedDish)}  
                </div>
            </div>
        );
    }
}


export default Menu;