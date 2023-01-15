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
  Box,

} from "@chakra-ui/react";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Spinner } from "react-bootstrap";

export default function CallToActionWithIllustration() {
  const [destination, setDestination] = useState("Mexico");
  const [filter, setFilter] = useState("the best places to go?"); // ['best places to go', 'best things to do', 'best travel tips', 'clothes to bring', 'best times to go'
  const [data, setData] = useState("");
  const [startedReq, setStartedRequest] = useState(false);

  const handleInputFormChange = (event: any) => {
    setDestination(event.target.value);
  };

  const handleDropDownChange = (event: any) => {
    setFilter(event.target.value);
  };

  // useEffect(() => {
  //   getWeatherData("Mexico");
  // }, []);

  const getWeatherData = async (city: string) => {
    try {
      const url = `http://api.weatherapi.com/v1/current.json?key=${process.env.NEXT_PUBLIC_WEATHERAPI_KEY}&q=${city}}`;
      const response = await axios.get(url);
    } catch (error) {
      console.log(error);
    }
  };

  const gpt3PostClient = axios.create({
    baseURL: "https://api.openai.com/v1/completions",
  });

  const returnAPIResults = async () => {
    setData("");
    setStartedRequest(true);
    const promptVal = "I am going to " + destination + " what are " + filter;
    gpt3PostClient
      .post(
        "",
        {
          model: "text-davinci-003",
          prompt: promptVal,
          max_tokens: 1000,
          temperature: 0,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + process.env.NEXT_PUBLIC_OPENAI_API_KEY,
          },
        }
      )
      .then((resp) => {
        setStartedRequest(false);
        console.log(resp.data.choices[0].text);
        setData(resp.data.choices[0].text);
      });
  };

  return (
    <Container
      maxW={"6xl"}
      minHeight={{ base: "90vh", sm: "90vh", md: "95.5vh" }}
    >
      <Stack
        textAlign={"center"}
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 30, md: 38 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: "5xl", sm: "4xl", md: "8xl" }}
          lineHeight={"110%"}
        >
          Journey
          <Text as={"span"} color={"green.400"}>
            Genie
          </Text>
        </Heading>
        <Center>
          <TypeAnimation
            sequence={[
              "Let us help you plan your itinerary",
              1000,
              "Let us help you plan your travel plans",
              1000,
              "Let us help you plan what luggage to bring",
              1000,
              "Let us help you plan destinations to go to",
              1000,
            ]}
            speed={50}
            deletionSpeed={70}
            style={{ fontSize: "2em" }}
            wrapper="span"
            repeat={Infinity}
          />
        </Center>
        <Center>
          <FormControl
            id="promt"
            borderColor={"black"}
            fontSize={"2xl"}
            pt="10"
          >
            <HStack>
              <Text>I am going to </Text>

              <Input
                placeholder="Mexico"
                _placeholder={{ color: "gray.500" }}
                type="text"
                textAlign="match-parent"
                width={"36"}
                id="destination"
                name="destination"
                onChange={handleInputFormChange}
                value={destination}
              />
              <Text>what are</Text>
              <Select
                placeholder="select an option"
                _placeholder={{ color: "gray.500" }}
                textAlign="match-parent"
                width={"50"}
                onChange={handleDropDownChange}
              >
                <option>the best places to go?</option>
                <option>the best things to do?</option>
                <option>the best travel tips?</option>
                <option>the best clothes to bring?</option>
                <option>the best times to go?</option>
              </Select>
            </HStack>
          </FormControl>
        </Center>
        <Stack spacing={6}>
          <Button
            bg={"green.400"}
            size="lg"
            color={"white"}
            _hover={{
              bg: "green.500",
            }}
            onClick={returnAPIResults}
          >
            Find Out ✨✈️
          </Button>
        </Stack>
        <Stack w="100%">
          <Text fontSize={"2xl"}>Genies Response 🪄</Text>
          <Box
            padding="6"
            boxShadow="lg"
            bg="white"
            borderRadius="lg"
            borderColor={"black"}
            borderWidth="1px"
          >
            {!data && startedReq ? (
              <Spinner style={{ marginBottom: 27 }} animation="border" />
            ) : (
              data
            )}
          </Box>
        </Stack>
      </Stack>
    </Container>
  );
}
