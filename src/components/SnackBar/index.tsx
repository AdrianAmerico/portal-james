/* eslint-disable react/display-name */
import React, { useState, forwardRef, useImperativeHandle, useContext } from 'react'
import { GlobalContext } from '../../context'
import { Snack } from './styles'

export const SnackBar = forwardRef((props, ref) => {
  const [showSnackbar, setShowSnackbar] = useState(false)
  const { message, type } = useContext(GlobalContext)

  useImperativeHandle(ref, () => ({
    show () {
      setShowSnackbar(true)
      setTimeout(() => {
        setShowSnackbar(false)
      }, 1500)
    }
  }))

  return (
        <Snack showSnack={showSnackbar} type={type}>
            {type === 'success' ? <h1>&#x2713;</h1> : <h1>&#x2613;</h1>}
            <div>{message}</div>
        </Snack>
  )
})
