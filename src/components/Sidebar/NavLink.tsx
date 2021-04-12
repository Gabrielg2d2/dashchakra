import { Icon, Link, Text, LinkProps } from '@chakra-ui/react'
import { ElementType } from 'react'

interface NavLinkProps extends LinkProps {
  icon: ElementType
  title: string
}

export function NavLink({ icon, title, ...rest }: NavLinkProps) {
  return (
    <Link display="flex" align="center" {...rest}>
      <Icon as={icon} fontSize={20} />
      <Text ml="4" fontWeight="medium">
        {title}
      </Text>
    </Link>
  )
}
