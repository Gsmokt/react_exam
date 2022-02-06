import React from 'react';
import { Component} from 'react/cjs/react.development';
import styles from '../../common/styles/Headers.module.scss';

class ProductsFilters extends Component{
  state = {
    onlyProduct: false,
    name:'',
    category:''
  }
   
    handleChange = (e) => {
      this.setState({ name: e.target.value }, () => this.filterProducts()); //Zadanie 2 - bez () => this.filterProducts()
    }
    handleSelect = (e) => {
      this.setState({ category: e.target.value }, () => this.filterProducts());  //Zadanie 2 - bez () => this.filterProducts()
    }
    handleValueChange = e => {
      this.setState({ onlyProduct: e.target.checked }, () => this.filterProducts());  //Zadanie 2 - bez () => this.filterProducts()
    }
    filterProducts = () => {
      const {products} = this.props;
      const {onlyProduct, name, category} = this.state;
      let filterProduct = products.filter(item =>  item.nazwa.includes(name.toLowerCase()))
                                  .filter(item => item.kategoria.includes(category));                  //Zadanie 2 - bez toLowerCase()
      filterProduct = onlyProduct ? filterProduct.filter(item => item.produktSpozywczy === true): filterProduct;
      this.props.filtetList([...filterProduct]);
    }
    render(){
      const getUniqueCategory = (() => [...new Set(this.props.products.map(item => item.kategoria))]
      )();
   return (
        <div className={styles.Wrapper}>
           <label>Nazwa produktu  <input type="text"  onChange={this.handleChange}/></label> 
            
            <select onChange={this.handleSelect}>
                    <option key={'all'} value={''}>All types</option>
                    {getUniqueCategory.map((item) => <option key={item} value={item}>{item}</option>)}
            </select>
            <input value={this.onlyProduct} onChange={this.handleValueChange} type="checkbox"/>Tylko produkty spożywcze
           { /* <button onClick={this.filterProducts}>Wyszukaj</button> - do zadania 2 */}
        </div>
      );
      
    }
 
  };

  export default ProductsFilters;