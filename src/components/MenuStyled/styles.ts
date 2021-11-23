import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import { Colors } from '../../styles/styled'

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > div': {
        background: (props: Colors) => props.background_primary,
        color: (props: Colors) => props.text
      }
    }
  })
)
