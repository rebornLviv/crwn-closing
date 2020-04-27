import React from 'react';
import './shop.styles.scss';
import CollectionsOverview from '../../components/collcetions-overview/collections-overview.component';
import { Route } from 'react-router-dom';
import Collection from '../collection/collection.component';


const ShopPage = ({match}) =>  (
    <div className='collection-page'>

< Route exact path={`${match.path}/`} component ={CollectionsOverview} />
<Route exact path={`${match.path}/:collectionId`} component= {Collection}  />

    </div>
        
        
        
        )


export default ShopPage;