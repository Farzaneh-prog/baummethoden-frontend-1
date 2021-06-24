import Head from "next/head";
import {
  Container,
  Heading,
  Button,
  FormControl,
  Input,
  FormLabel,
  Box,
} from "@chakra-ui/react";
import { FormEvent, useState } from "react";
import useFetch from "use-http";
export default function Home() {
  const [inputs, setInputs] = useState({
    zylinder: 6,
    ps: 133,
    gewicht: 3410,
    beschleunigung: 15.8,
    baujahr: 78,
  });

  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const { get, loading, data } = useFetch(
    process.env.NEXT_PUBLIC_PREDICTION_API
  );

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    console.log("\x1b[33m%s\x1b[0m", "%c >> event.", event);
    console.log("\x1b[33m%s\x1b[0m", "%c >> inputs", inputs);
    get(
      `/predict?zylinder=${inputs.zylinder}&ps=${inputs.ps}&gewicht=${inputs.gewicht}&beschleunigung=${inputs.beschleunigung}&baujahr=${inputs.baujahr}`
    );
  };
  return (
    <Container>
      <Head>
        <title>Baummethoden Frontend</title>
        <meta name="description" content="Frontend" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Heading as="h1" marginBottom="5">Predict miles per gallon</Heading>
        <form onSubmit={onSubmit}>
          <FormControl id="EQW" isRequired>
            <Input
              onChange={handleOnChange}
              type="number"
              step="any"
              value={inputs.EQW}
            /> <FormLabel fontWeight="bold">EQW</FormLabel>
          </FormControl>

          <FormControl id="SBI" isRequired>               
            <Input onChange={handleOnChange} type="number" step="any" value={inputs.SBI} /> <FormLabel fontWeight="bold">SBI</FormLabel> </FormControl>

          <FormControl id="PJF" isRequired>
            <Input onChange={handleOnChange} type="number" step="any" value={inputs.PJF} /> <FormLabel fontWeight="bold">PJF</FormLabel> </FormControl>

          <FormControl id="HQE" isRequired>
            <Input onChange={handleOnChange} type="number" step="any" value={inputs.HQE} /> <FormLabel fontWeight="bold">PJF</FormLabel> </FormControl>

          <FormControl id="NXJ" isRequired> 
            <Input onChange={handleOnChange} type="number" step="any" value={inputs.NXJ} /> <FormLabel fontWeight="bold">PJF</FormLabel> </FormControl>
          
          <FormControl id="WTT" isRequired> 
            <Input onChange={handleOnChange} type="number" step="any" value={inputs.WTT} /> <FormLabel fontWeight="bold">WTT</FormLabel> </FormControl> 
          
          <FormControl id="PTI" isRequired> 
            <Input onChange={handleOnChange} type="number" step="any" value={inputs.PTI} /> <FormLabel fontWeight="bold">PTI</FormLabel> </FormControl> 
          
          <FormControl id="FDJ" isRequired>
            <Input onChange={handleOnChange} type="number" step="any" value={inputs.PJF} /> <FormLabel fontWeight="bold">FDJ</FormLabel> </FormControl> 
          
          <FormControl id="QWG" isRequired> 
            <Input onChange={handleOnChange} type="number" step="any" value={inputs.PJF} /> <FormLabel fontWeight="bold">QWG</FormLabel> </FormControl> 
          
          <FormControl id="LQE" isRequired>
            <Input onChange={handleOnChange} type="number" step="any" value={inputs.PJF} /> <FormLabel fontWeight="bold">LQE</FormLabel> </FormControl> 
          
          <FormControl id="ps" isRequired>
            <Input
              onChange={handleOnChange}
              type="number"
              step="any"
              value={inputs.ps}
            />
            <FormLabel fontWeight="bold">ps</FormLabel>
          </FormControl>
          <FormControl id="gewicht" isRequired>
            <Input
              onChange={handleOnChange}
              type="number"
              step="any"
              value={inputs.gewicht}
            />
            <FormLabel fontWeight="bold">gewicht</FormLabel>
          </FormControl>
          <FormControl id="beschleunigung" isRequired>
            <Input
              onChange={handleOnChange}
              type="number"
              step="any"
              value={inputs.beschleunigung}
            />
            <FormLabel fontWeight="bold">beschleunigung</FormLabel>
          </FormControl>
          <FormControl id="baujahr" isRequired>
            <Input
              onChange={handleOnChange}
              type="number"
              step="any"
              value={inputs.baujahr}
            />
            <FormLabel fontWeight="bold">baujahr</FormLabel>
          </FormControl>
          <Button
            colorScheme="blue"
            type="submit"
            isLoading={loading}
            loadingText="Predicting..."
          >
            Get Prediction
          </Button>
        </form>

        <Box>Prediction result: {data ? data.result : "None"}</Box>
      </main>

      <footer></footer>
    </Container>
  );
}
