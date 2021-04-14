import { Flex, Button, Stack } from '@chakra-ui/react'
import { InputForm } from 'components/Form/Input'
import { useForm } from 'react-hook-form'

export default function SignIn() {
  const { register, handleSubmit } = useForm()

  function handleSign() {}

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        w="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
      >
        <Stack spacing="4">
          <InputForm
            name="email"
            type="email"
            label="E-mail"
            {...register('email')}
          />
          <InputForm
            name="password"
            type="password"
            label="Senha"
            {...register('password')}
          />
        </Stack>

        <Button type="submit" mt="6" colorScheme="pink" size="lg">
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
