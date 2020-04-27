import React from 'react'
import './collection.styles.scss'
import CollectionItem from '../../components/collection-item/collection-item.component';
import { connect } from 'react-redux';
import {  selectCol } from '../../redux/shop/shop.selectors';

const Category =  ({collection}) =>{
console.log(collection)
const {title,items} = collection;
return(
    
    <div className='category'>
        <h2 className='title'>{title}</h2>
        <div className="items">
            {
                items.map(item => <CollectionItem key={item.id} item={item}  />)
            }
        </div>
    </div>
)
}
const mapStateToProps = (state,ownProps) => ({
collection: selectCol(ownProps.match.params.collectionId)(state)

})
export default connect(mapStateToProps)(Category);