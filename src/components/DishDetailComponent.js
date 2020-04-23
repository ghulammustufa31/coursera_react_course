import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText} from 'reactstrap';

class DishDetail extends Component {


    componentDidMount() {
        console.log('Dishdetail Component componentDidMount invoked');
    }

    componentDidUpdate() {
        console.log('Dishdetail Component componentDidUpdate invoked');
    }

    renderDish(dish) {
        if (dish != null) {
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
        else {
            return (
                <div></div>
            );
        }
        
    }

    renderComments(comments) {
        if (comments != null) {
            const commentsList = comments.map((comment) => {
                const curDate = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)));

                return (
                    <li key={comment.id}>
                        <p>{comment.comment}</p>
                        <p>-- {comment.author} , {curDate}</p>
                    </li>
                );

            });

            return (
                <div>
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        { commentsList }
                    </ul>
                    
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

        console.log('Dishdetail Component render invoked');

        if (this.props.dish != null) {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            {this.renderDish(this.props.dish)}
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            {this.renderComments(this.props.dish.comments)}
                        </div>
                    </div>    
                </div>
            );
        }
        else {
            return (
                <div>

                </div>
            );
        }
        
    }
}


export default DishDetail;