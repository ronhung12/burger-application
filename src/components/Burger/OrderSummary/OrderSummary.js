import React from 'react';
import Auxillary from '../../../hoc/Auxillary/Auxillary';
import Button from '../../UI/Button/Button';

class OrderSummary extends React.Component {
//can be functional component, does not need to be class component
    componentDidUpdate() {
        console.log('[OrderSummary] didUpdate')
    }

    render()  {
        const ingredientSummary = Object.keys(this.props.ingredients)
            .map(igKey => {
                return <li key={igKey}>
                    <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
                </li>
            });

        return(
            <Auxillary>
                <h3>Your Order</h3>
                <p>Your Ingredients: </p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price:  {this.props.price.toFixed(2)}</strong></p>
                <p>Continue to Checkout?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCanceled}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
            </Auxillary>
        );
    }
}

export default OrderSummary;
