import { Container } from '@chakra-ui/react'
import './App.css'
import { PrimaryButton } from './components/Button/PrimaryButton'
import { Wechat } from './assets/wechat'
function App() {
  return (
    <Container display={'flex'} marginTop={'9'}>
      <Container >
        <Container marginBottom={'2'}>
          <PrimaryButton label={'Button'} aria-label="botao" size={"sm"} />
        </Container>
        <Container marginBottom={'2'}>
          <PrimaryButton label={'Button'} aria-label="botao" size={"md"} />
        </Container>
        <Container marginBottom={'2'}>
          <PrimaryButton label={'Button'} aria-label="botao" size={"lg"} />
        </Container>
     </Container>
     <Container >
        <Container marginBottom={'2'}>
          <PrimaryButton leftIcon={<Wechat/>} label={'Button'} aria-label="botao" size={"sm"} />
        </Container>
        <Container marginBottom={'2'}>
          <PrimaryButton leftIcon={<Wechat/>} label={'Button'} aria-label="botao" size={"md"} />
        </Container>
        <Container marginBottom={'2'}>
          <PrimaryButton leftIcon={<Wechat/>} label={'Button'} aria-label="botao" size={"lg"} />
        </Container>
     </Container>
     <Container >
        <Container marginBottom={'2'}>
          <PrimaryButton rightIcon={<Wechat/>} label={'Button'} aria-label="botao" size={"sm"} />
        </Container>
        <Container marginBottom={'2'}>
          <PrimaryButton rightIcon={<Wechat/>} label={'Button'} aria-label="botao" size={"md"} />
        </Container>
        <Container marginBottom={'2'}>
          <PrimaryButton rightIcon={<Wechat/>} label={'Button'} aria-label="botao" size={"lg"} />
        </Container>
     </Container>
     <Container >
        <Container marginBottom={'2'}>
          <PrimaryButton iconOnly icon={<Wechat/>} label={'Button'} aria-label="botao" size={"sm"} />
        </Container>
        <Container marginBottom={'2'}>
          <PrimaryButton iconOnly icon={<Wechat/>} label={'Button'} aria-label="botao" size={"md"} />
        </Container>
        <Container marginBottom={'2'}>
          <PrimaryButton iconOnly icon={<Wechat/>} label={'Button'} aria-label="botao" size={"lg"} />
        </Container>
     </Container>
     
    </Container>
  )
}

export default App
