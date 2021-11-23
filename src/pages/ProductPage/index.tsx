import React from 'react'
import { Card } from '../../components/Card'
import { TypographH1 } from '../../components/Typograph'
import { GlobalContext } from '../../context'
import { ProductPageContainer } from './styles'

const ProductPage = () => {
  document.title = 'Página de produtos'
  const { productList, setProductList } = React.useContext(GlobalContext)

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
                return <Card key={item.productId} product={item}/>
              })
            )
          : (
            <section>
              <TypographH1>Não há produtos em estoque</TypographH1>
            </section>
            )}
      </ProductPageContainer>
    </>
  )
}

export default ProductPage
