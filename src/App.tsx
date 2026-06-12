import { Box, Container, Text } from '@chakra-ui/react'
import './App.css'
function App() {
  return (
    <Container >
     <Text color='primary.500' fontSize={'text_xxl'} fontWeight={'bolder'}>Morent</Text>
     <Container display={'flex'}>
      <Box bg="primary.900" w="200px" h="200px" />
      <Box bg="primary.800" w="200px" h="200px" />
      <Box bg="primary.700" w="200px" h="200px" />
      <Box bg="primary.600" w="200px" h="200px" />
      <Box bg="primary.500" w="200px" h="200px" />
      <Box bg="primary.400" w="200px" h="200px" />
      <Box bg="primary.300" w="200px" h="200px" />
      <Box bg="primary.200" w="200px" h="200px" />
      <Box bg="primary.100" w="200px" h="200px" />
      <Box bg="primary.0" w="200px" h="200px" />
     </Container>
     <Container display={'block'}>
      <Text fontSize="text_xs">This is the text component</Text>
      <Text fontSize="text_sm">This is the text component</Text>
      <Text fontSize="text_base">This is the text component</Text>
      <Text fontSize="text_lg">This is the text component</Text>
      <Text fontSize="text_2lg">This is the text component</Text>
      <Text fontSize="text_xl">This is the text component</Text>
      <Text fontSize="text_xxl">This is the text component</Text>
      <Text fontSize="text_2xl">This is the text component</Text>
      <Text fontSize="text_2xxl">This is the text component</Text>
      <Text fontSize="text_3xl">This is the text component</Text>
     </Container>
    </Container>
  )
}

export default App
