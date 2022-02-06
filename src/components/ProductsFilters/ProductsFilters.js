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
      const name = e.target.name;
      if(e.target.type === 'checkbox')
      this.setState({ [name]: e.target.checked }, () => this.filterProducts()); //Zadanie 2 - bez () => this.filterProducts()
      else 
      this.setState({ [name]: e.target.value }, () => this.filterProducts());
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
           <label>Nazwa produktu  <input name='name' type="text"  onChange={this.handleChange}/></label> 
            
            <select name='category' onChange={this.handleChange}>
                    <option key={'all'} value={''}>All types</option>
                    {getUniqueCategory.map((item) => <option key={item} value={item}>{item}</option>)}
            </select>
            <input name='onlyProduct' value={this.onlyProduct} onChange={this.handleChange} type="checkbox"/>Tylko produkty spożywcze
           { /* <button onClick={this.filterProducts}>Wyszukaj</button> - do zadania 2 */}
        </div>
      );
      
    }
 
  };

  export default ProductsFilters;