import React from 'react'
import { TextField } from '@material-ui/core'
import { useStyles } from './styles'
export const TextInput = (props: any) => {
  const classes = useStyles()
  return (
    <TextField
      variant="outlined"
      label="Nome"
      {...props}
      className={classes.root}
    />
  )
}
