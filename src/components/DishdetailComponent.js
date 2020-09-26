import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle} from 'reactstrap';

class DishDetail extends Component{

    renderDish(dish) {
      return (
        
          <Card>
            <CardImg top src={dish.image} alt={dish.name} />
            <CardBody>
              <CardTitle>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
          </Card>
        
      );
    }

    renderComments(comments) {

      if (comments != null) {
        let options = { year: "numeric", month: "short", day: "numeric" };
        return comments.map(comment => (
            
            <ul key={comment.id} className="list-unstyled">
              <li className="mb-2">{comment.comment}</li>
              <li>
                -- {comment.author}{" ,"}
                {new Date(comment.date).toLocaleDateString("en-US", options)}
              </li>
            </ul>
         
        ));
      } else return <div />;
    }



    render(){

      if (this.props.dish != null) {
        return (
          <div className="container">
              <div className="row">
                <div className="col-12 col-md-5 m-1"> 
                  {this.renderDish(this.props.dish)}
                </div>  
                <div className="col-12 col-md-5 m-1">
                  <h4>Comments</h4>       
                  {this.renderComments(this.props.dish.comments)}
                </div>    
              </div>
          </div>
        );
      }
      else {
        return (
          <div></div>
        );
      }

    }
}
export default DishDetail;
