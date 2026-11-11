import {
	FormControl,
	FormErrorMessage,
	FormLabel,
	Input,
	type InputProps
} from '@chakra-ui/react'
import { forwardRef, type ForwardRefRenderFunction } from 'react'
import type { FieldError } from 'react-hook-form'

interface InputInterface extends InputProps {
	name: string
	label?: string
	error?: FieldError
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputInterface> = (
	{ name, label, error, ...rest },
	ref
) => {
	return (
		<FormControl isInvalid={!!error}>
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
				ref={ref}
				{...rest}
			/>

			{!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
		</FormControl>
	)
}

export const InputForm = forwardRef(InputBase)
