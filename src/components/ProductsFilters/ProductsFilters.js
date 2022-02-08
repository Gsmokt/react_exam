import React from 'react';
import { Component} from 'react/cjs/react.development';
import styles from '../../common/styles/Headers.module.scss';
import log from '../../shopping-cart-check.png'
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
    handleReset = () => {
      this.setState({
        onlyProduct: false,
        name:'',
        category:'',
      },
      ()=>this.filterProducts())
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
           <label className={styles.label1}>Nazwa produktu  <input 
                                         placeholder='Nazwa produktu...'
                                         autocomplete="off" 
                                         name='name' 
                                         type="text" 
                                         value={this.state.name}  
                                         onChange={this.handleChange}/></label> 
            
            <select name='category' value={this.state.category} onChange={this.handleChange}>
                    <option key={'all'} value={''}>All types</option>
                    {getUniqueCategory.map((item) => <option key={item} value={item}>{item}</option>)}
            </select>
            <input name='onlyProduct' 
                   checked={this.state.onlyProduct} 
                   onChange={this.handleChange} 
                   type="checkbox"/>Tylko produkty spożywcze
           { /* <button onClick={this.filterProducts}>Wyszukaj</button> - do zadania 2 */}
           <button onClick={this.handleReset}>Wyczyść filtry</button>
           <img className={styles.imm} alt='Nie udało się wyświetlić' src={log}/><p className={styles.text}>{this.props.shopList.length}</p>
        </div>
      );
    };
 };

  export default ProductsFilters;