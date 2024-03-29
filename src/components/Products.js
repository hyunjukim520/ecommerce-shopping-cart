import React, { Component } from "react";
import util from "../util";
import { connect } from "react-redux";
import { fetchProducts } from "../actions/productActions";
import { addToCart } from "../actions/cartActions";

class Products extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }
  render() {
    const productItems = this.props.products.map(product => (
      <div key={product.id} className="col-md-4">
        <div className="thumbnamil text-center">
          <a
            href={`#${product.id}`}
            onClick={() => this.props.addToCart(this.props.cartItems, product)}
          >
            <img src={`/products/${product.sku}_2.jpg`} alt={product.title} />
            <p>{product.title}</p>
          </a>
          <div>
            <b>{util.formatCurrency(product.price)}</b>
            <button
              className="btn btn-primary"
              onClick={() =>
                this.props.addToCart(this.props.cartItems, product)
              }
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    ));
    return <div className="row">{productItems}</div>;
  }
}

const mapStateToProps = state => ({
  products: state.products.filteredItems,
  cartItems: state.cart.items
});

export default connect(
  mapStateToProps,
  { fetchProducts, addToCart }
)(Products);
