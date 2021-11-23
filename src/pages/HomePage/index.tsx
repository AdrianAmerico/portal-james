import React from 'react'
import { ABOUT_US } from '../../constants'
import { HomeContainer, SectionStyled, DivLeftSide, DivRightSide, FormStyled, TypographH1, TypographH2, TypographP } from './styles'
import useForm from '../../hooks/useForm'
import { SnackBar } from '../../components/SnackBar'
import { ThemeContext } from '../../context/toggleTheme'
import { ButtonStyled } from '../../components/Button'
import { TextInput } from '../../components/TextInput'

const HomePage = () => {
  document.title = 'Página inicial'
  const { body, onChange, clear } = useForm({ name: '', business: '', email: '', cell: '' })
  const snackbarRef = React.useRef<any | null>(null)
  const { setMessage, setType } = React.useContext(ThemeContext)

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
          <FormStyled onSubmit={(event) => onSubmit(event)}>
            <TextInput label='Nome' onChange={onChange} value={body.name} name='name' required/>
            <TextInput label='Empresa' onChange={onChange} value={body.business} name='business' />
            <TextInput label='Email' onChange={onChange} value={body.email} name='email' required/>
            <TextInput label='Telefone' onChange={onChange} value={body.cell} name='cell' />
            <ButtonStyled>Quero faturar mais!</ButtonStyled>
          </FormStyled>
        </DivRightSide>
      </SectionStyled>
      <SnackBar
        ref={snackbarRef}
      />
    </HomeContainer>
  )
}

export default HomePage
