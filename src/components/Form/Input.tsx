import { FormControl, FormLabel, Input, InputProps } from '@chakra-ui/react'

interface InputInterface extends InputProps {
  name: string
  label?: string
}

export function InputForm({ name, label, ...rest }: InputInterface) {
  return (
    <FormControl>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}

      <Input
        id={name}
        name={name}
        focusBorderColor="pink.500"
        bg="gray.900"
        variant="filled"
        size="lg"
        _hover={{
          bg: 'gray.900'
        }}
        {...rest}
      />
    </FormControl>
  )
}
