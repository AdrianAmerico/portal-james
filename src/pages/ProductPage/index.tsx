import React from 'react'
import { Card } from '../../components/Card'
import { Product } from '../../global/types'
import { ProductPageContainer } from './styles'

const ProductPage = () => {
  const [productList, setProductList] = React.useState<Product[]>([])

  React.useEffect(() => {
    const productListStorage = localStorage.getItem('productList')
    if (productListStorage) {
      setProductList(JSON.parse(productListStorage))
    }
  }, [])
  return (
    <>
      BANANINHA
      <ProductPageContainer>
        {productList && productList.length
          ? (
              productList.map((item) => {
                return <Card key={item.productId} product={item} productList={productList} setProductList={setProductList}/>
                // TODO Corrigir props Drilling
              })
            )
          : (
          <div> Carregando</div>
            )}
      </ProductPageContainer>
    </>
  )
}

export default ProductPage
