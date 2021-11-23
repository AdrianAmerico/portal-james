import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import styled from 'styled-components'
import { Colors } from '../../../styles/styled'

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: (props: Colors) => props.text
    }
  })
)

export const DivStyled = styled.div`
  background: ${props => props.theme.colors.background_primary};
  border: 2px solid ${props => props.theme.colors.background_secundary};
  padding: 8px;
  border-radius: 8px;
`
