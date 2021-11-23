/* eslint-disable no-unused-vars */
import React from 'react'
import { ThemeContext } from '../context/toggleTheme'
import { Product } from '../global/types'

export const useAddProductCard = () => {
  const { setMessage, setType } = React.useContext(ThemeContext)
  const [productList, setProductList] = React.useState<Product[]>([])

  React.useEffect(() => {
    const localS = localStorage.getItem('productList')
    if (localS) {
      setProductList(JSON.parse(localS))
    } else {
      localStorage.setItem('productList', JSON.stringify([]))
    }
  }, [])

  const addProductItem = (body: Product, clear: () => void) => {
    const { name, category, productId, manufacturer, productPrice } = body
    if (
      !name.length ||
      !category.length ||
      !productId ||
      !manufacturer.length ||
      !productPrice
    ) {
      setType('fail')
      setMessage('Verifique os campos e tente novamente!')
      return
    }
    const productValidate = productList.find(
      (item) => item.productId === productId
    )
    if (!productValidate) {
      const productArr = [...productList, body]
      setProductList(productArr)
      localStorage.setItem('productList', JSON.stringify(productArr))
      setType('success')
      setMessage('Produto adicionado ao estoque !')
      clear()
    } else {
      setType('fail')
      setMessage('Este produto já está adicionado !')
    }
  }

  const removeProduct = (
    item: Product,
    productList: Product[],
    setProductList: React.Dispatch<React.SetStateAction<Product[]>>
  ) => {
    const updatedList = productList.filter(product => product.productId !== item.productId)
    localStorage.setItem('productList', JSON.stringify(updatedList))
    setProductList(updatedList)
    setMessage('Item removido com sucesso')
    setType('success')
  }

  const editProduct = (item: Product, setProductList: React.Dispatch<React.SetStateAction<Product[]>>) => {
    const updatedList = productList.filter(product => product.productId !== item.productId)
    updatedList.push(item)
    setProductList(updatedList)
    localStorage.setItem('productList', JSON.stringify(updatedList))
    setMessage('Item removido com sucesso')
    setType('success')
  }
  return { addProductItem, removeProduct, editProduct }
}
