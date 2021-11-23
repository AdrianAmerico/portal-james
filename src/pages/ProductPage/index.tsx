import React from 'react'
import { Card } from '../../components/Card'
import { Product } from '../../global/types'
import { TypographH1 } from '../HomePage/styles'
import { ProductPageContainer } from './styles'

const ProductPage = () => {
  document.title = 'Página de produtos'
  const [productList, setProductList] = React.useState<Product[]>([])

  React.useEffect(() => {
    const productListStorage = localStorage.getItem('productList')
    if (productListStorage) {
      setProductList(JSON.parse(productListStorage))
    }
  }, [])
  return (
    <>
      <ProductPageContainer>
        {productList && productList.length
          ? (
              productList.map((item) => {
                return <Card key={item.productId} product={item} productList={productList} setProductList={setProductList}/>
                // TODO Corrigir props Drilling
              })
            )
          : (
            <div style={{ width: '100%', textAlign: 'center' }}>
              <TypographH1>Não há produtos em estoque</TypographH1>
            </div>
            )}
      </ProductPageContainer>
    </>
  )
}

export default ProductPage
