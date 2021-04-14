import { Avatar, Box, Flex, Text } from '@chakra-ui/react'

interface ProfileProps {
  showProfileData?: boolean
}

export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align="center" ml="4">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Gabriel</Text>
          <Text color="gray.300" fontSize="small">
            gabriel@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Gabriel F"
        src="https://github.com/GabrielBritoAlmeida.png"
      />
    </Flex>
  )
}
