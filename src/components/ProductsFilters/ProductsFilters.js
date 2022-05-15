import React from 'react';
import { Component } from 'react/cjs/react.development';
import styles from '../../common/styles/Headers.module.scss';
import log from '../../shopping-cart-check.png'
import {connect} from 'react-redux';
class ProductsFilters extends Component {
  state = {
    name: '',
    category: '',
    onlyProduct: false
  }

  handleChange = (e) => {
    const name = e.target.name;
    if (e.target.type === 'checkbox')
      this.setState({ [name]: e.target.checked }, () => this.props.setFilters({...this.state})); //Zadanie 2 - bez () => this.filterProducts()
    else
      this.setState({ [name]: e.target.value.trim() }, () => this.props.setFilters({...this.state}));
  }
  handleReset = () => {
    this.setState({
      onlyProduct: false,
      name: '',
      category: '',
    },
      () => this.props.setFilters({...this.state}))
  }

  render() {
    const getUniqueCategory = (() => [...new Set(this.props.products.map(item => item.kategoria))]
    )();
    return (
      <div className={styles.Wrapper}>
        <label className={styles.label1}>Nazwa produktu  <input
          placeholder='Nazwa produktu...'
          autoComplete="off"
          name='name'
          type="text"
          value={this.state.name}
          onChange={this.handleChange} /></label>

        <select name='category' value={this.state.category} onChange={this.handleChange}>
          <option key={'all'} value={''}>All types</option>
          {getUniqueCategory.map((item) => <option key={item} value={item}>{item}</option>)}
        </select>
        <input name='onlyProduct'
          checked={this.state.onlyProduct}
          onChange={this.handleChange}
          type="checkbox" />Tylko produkty spożywcze
        <button onClick={this.handleReset}>Wyczyść filtry</button>
        {/* <img className={styles.imm} alt='Nie udało się wyświetlić' src={log} /><p className={styles.text}>{this.props.shopList.length}</p> */}
      </div>
    );
  };
};

const mapStateToProps = (state) => {
  return {
    products: state.products
  }
}

export default connect(mapStateToProps)(ProductsFilters);