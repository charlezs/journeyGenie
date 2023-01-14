import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Icon,
  IconProps,
  Center,
  FormControl,
  Input,
  HStack,
  Select,
} from '@chakra-ui/react';
import { TypeAnimation } from 'react-type-animation';

export default function CallToActionWithIllustration() {
  return (
    <Container maxW={'6xl'} minHeight={{ base: '90vh', sm: '90vh', md: '95.5vh' }}>
      <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 30, md: 38 }}>
        <Heading
          fontWeight={600}
          fontSize={{ base: '5xl', sm: '4xl', md: '8xl' }}
          lineHeight={'110%'}>
          Journey
          <Text as={'span'} color={'green.400'}>
            Genie
          </Text>
        </Heading>
  <Center>
        <TypeAnimation
    sequence={[
    'Let us help you plan your itinerary',
    1000,
    'Let us help you plan your travel plans',
    1000,
    'Let us help you plan what luggage to bring',
    1000,
    'Let us help you plan destinations to go to',
    1000,
    ]}
    speed={50}
    deletionSpeed={70}
    style={{ fontSize: '2em' }}
    wrapper="span" 
    repeat={Infinity}
  />
  
    </Center>
    <Center>
    <FormControl id="promt" borderColor={'black'} fontSize={'2xl'} pt='10'>
      <HStack>
        <Text>I am going to </Text>

          <Input
            placeholder="Mexico"
            _placeholder={{ color: 'gray.500' }}
            type="text"
            textAlign='match-parent'
            width={'36'}
          />
        <Text>what are</Text>
            <Select 
            placeholder='select an option'
            _placeholder={{ color: 'gray.500' }}
            textAlign='match-parent'
            width={'50'}
            >
                <option>the best places to go?</option>
                <option>the best things to do?</option>
                <option>the best travel tips?</option>
                <option>the clothes to bring?</option>
                <option>the best times to go?</option>
            </Select>

      </HStack>
    </FormControl>
    </Center>
        <Stack spacing={6}>
          <Button
            bg={'green.400'}
            size='lg'
            color={'white'}
            _hover={{
              bg: 'green.500',
            }}>
            Find Out ✨✈️
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
}

