import { useState } from 'react'

const useForm = (initialState: any) => {
  const [body, setBody] = useState(initialState)

  const onChange = (event: {
    target: { name: string; value?: string };
  }): void => {
    const { name } = event.target
    const { value } = event.target
    setBody({ ...body, [name]: value })
  }

  const clear = (): void => {
    setBody(initialState)
  }
  return { body, onChange, clear }
}

export default useForm
