import React from 'react'
import { ABOUT_US } from '../../constants'
import { HomeContainer, SectionStyled, DivLeftSide, DivRightSide } from './styles'
import useForm from '../../hooks/useForm'
import { SnackBar } from '../../components/SnackBar'
import { GlobalContext } from '../../context'
import { Button } from '../../components/Button'
import { TextInput } from '../../components/TextInput'
import { Form } from '../../components/Form'
import { TypographH1, TypographH2, TypographP } from '../../components/Typograph'

const HomePage = () => {
  document.title = 'Página inicial'
  const { body, onChange, clear } = useForm({ name: '', business: '', email: '', cell: '' })
  const snackbarRef = React.useRef<any | null>(null)
  const { setMessage, setType } = React.useContext(GlobalContext)

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setType('success')
    setMessage('Formulário enviado com sucesso!')
    snackbarRef.current.show()
    clear()
  }
  return (
    <HomeContainer>
      <TypographH1>Muito prazer
        <br />
        somos a James Tip.
      </TypographH1>

      <SectionStyled>
        <DivLeftSide>
          <TypographH2>Inovação faz parte do nosso DNA.</TypographH2>
          <TypographP>{ABOUT_US}</TypographP>
        </DivLeftSide>

        <DivRightSide>
          <TypographH2>Deseja faturar mais ?</TypographH2>
          <Form onSubmit={(event) => onSubmit(event)}>
            <TextInput label='Nome' onChange={onChange} value={body.name} name='name' required/>
            <TextInput label='Email' onChange={onChange} value={body.email} name='email' required type='email' />
            <TextInput label='Empresa' onChange={onChange} value={body.business} name='business' />
            <Button>Quero faturar mais!</Button>
          </Form>
        </DivRightSide>
      </SectionStyled>
      <SnackBar
        ref={snackbarRef}
      />
    </HomeContainer>
  )
}

export default HomePage
