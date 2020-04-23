import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText} from 'reactstrap';

class DishDetailComponent extends Component {

    renderDish(dish) {
        return (
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>  
        );
    }

    renderComments(comments) {
        if (comments != null) {
            const commentsList = comments.map((comment) => {
                const curDate = new Date(comment.date);

                return (
                    <div key={comment.id}>
                        <p>{comment.comment}</p>
                        <p>-- {comment.author} , {curDate.toLocaleDateString()}</p>
                    </div>
                );

            });

            return (
                <div>
                    <h4>Comments</h4>
                    <br/>
                    { commentsList }
                </div>
            );
        }
        else {
            return (
                <div></div>
            );
        }
    }

    render() {
        return (
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    {this.renderDish(this.props.dish)}
                </div>
                <div className="col-12 col-md-5 m-1">
                    {this.renderComments(this.props.dish.comments)}
                </div>
            </div>
        );
    }
}


export default DishDetailComponent;