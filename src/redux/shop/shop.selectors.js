import { createSelector } from "reselect";

const selectShop = state => state.shop


export const selectCollection = createSelector(
    [selectShop],
    shop => shop.collections 
)

export const  selectCollectionsForPreview = createSelector(
[selectCollection],
collections => Object.keys(collections).map(key => collections[key])

)
export const selectCol = urlParam => createSelector(
    [selectCollection],
    collections => collections[urlParam]
)