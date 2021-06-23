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
    variance_wavelet_transformed_image: 3.2414,
    skewness_wavelet_transformed_image: 0.40971,
    curtosis_wavelet_transformed_image: 1.4015,
    entropy_image: 1.1952,
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
      `/predict?variance_wavelet_transformed_image=${inputs.variance_wavelet_transformed_image}&skewness_wavelet_transformed_image=${inputs.skewness_wavelet_transformed_image}&curtosis_wavelet_transformed_image=${inputs.curtosis_wavelet_transformed_image}&entropy_image=${inputs.entropy_image}`
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
        <Heading as="h1">Welcome to Frontend</Heading>
        {/* ['variance_wavelet_transformed_image', 'skewness_wavelet_transformed_image', 'curtosis_wavelet_transformed_image', 'entropy_image', 'class'] */}
        <form onSubmit={onSubmit}>
          <FormControl id="variance_wavelet_transformed_image" isRequired>
            <Input
              onChange={handleOnChange}
              type="number"
              step="any"
              value={inputs.variance_wavelet_transformed_image}
            />
            <FormLabel fontWeight="bold">
              variance_wavelet_transformed_image
            </FormLabel>
          </FormControl>
          <FormControl id="skewness_wavelet_transformed_image" isRequired>
            <Input
              onChange={handleOnChange}
              type="number"
              step="any"
              value={inputs.skewness_wavelet_transformed_image}
            />
            <FormLabel fontWeight="bold">
              skewness_wavelet_transformed_image
            </FormLabel>
          </FormControl>
          <FormControl id="curtosis_wavelet_transformed_image" isRequired>
            <Input
              onChange={handleOnChange}
              type="number"
              step="any"
              value={inputs.curtosis_wavelet_transformed_image}
            />
            <FormLabel fontWeight="bold">
              curtosis_wavelet_transformed_image
            </FormLabel>
          </FormControl>
          <FormControl id="entropy_image" isRequired>
            <Input
              onChange={handleOnChange}
              type="number"
              step="any"
              value={inputs.entropy_image}
            />
            <FormLabel fontWeight="bold">entropy_image</FormLabel>
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
