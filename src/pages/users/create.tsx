import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  VStack
} from '@chakra-ui/react'
import { InputForm } from 'components/Form/Input'
import Header from 'components/Header'

import Sidebar from 'components/Sidebar'
import Link from 'next/link'

import { useForm, SubmitHandler } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

type CreateFormData = {
  email: string
  password: string
}

const createFormSchema = yup.object().shape({
  name: yup.string().required('Nome obrigatória'),
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup
    .string()
    .required('Senha obrigatória')
    .min(6, 'No mínimo 6 caracteres'),
  password_confirmation: yup
    .string()
    .oneOf([null, yup.ref('password')], 'As senhas precisam ser iguais')
})

export default function CreateUser() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(createFormSchema)
  })
  const { errors } = formState

  const handleCreateUserForm: SubmitHandler<CreateFormData> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 2000))
  }

  return (
    <Box>
      <Header />

      <Flex w="100%" maxW={1480} mx="auto" my="6" px="6">
        <Sidebar />

        <Box
          as="form"
          flex="1"
          borderRadius={8}
          bg="gray.800"
          p="8"
          onSubmit={handleSubmit(handleCreateUserForm)}
        >
          <Heading size="lg" fontWeight="normal">
            Criar usuário
          </Heading>

          <Divider my="6" borderColor="gray.700" />

          <VStack>
            <SimpleGrid w="100%" minChildWidth="240px" spacing="8">
              <InputForm
                name="name"
                label="Nome completo"
                error={errors.name}
                {...register('name')}
              />
              <InputForm
                name="email"
                type="email"
                label="E-mail"
                error={errors.email}
                {...register('email')}
              />
            </SimpleGrid>

            <SimpleGrid w="100%" minChildWidth="280px" spacing="8">
              <InputForm
                name="password"
                type="password"
                label="Senha"
                error={errors.password}
                {...register('password')}
              />
              <InputForm
                name="password_confirmation"
                type="password"
                label="Confirmar senha"
                error={errors.password_confirmation}
                {...register('password_confirmation')}
              />
            </SimpleGrid>
          </VStack>

          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Link href="/users" passHref>
                <Button as="a" colorScheme="whiteAlpha" cursor="pointer">
                  Cancelar
                </Button>
              </Link>
              <Button
                type="submit"
                colorScheme="pink"
                isLoading={formState.isSubmitting}
              >
                Salvar
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}
