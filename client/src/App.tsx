import { useState } from 'react'
import {
  Box,
  Button,
  Heading,
  VStack,
  Table,
} from "@chakra-ui/react"
import { ColorModeButton } from "./components/ui/color-mode"

export default function App() {

  type Product = {
    id: number;
    name: string;
    description: string;
  };

  const productsURL = "http://localhost:3001/api/products"
  const [products, setProducts] = useState<Product[]>([]);

  const getCurrentProducts = async (): Promise<Product[]> => {
    const res = await fetch(productsURL)
    const productsJSON: Product[] = await res.json()
    return productsJSON
  }

  const handleRefresh = async () => {
    const currProducts = await getCurrentProducts()
    setProducts(currProducts)
  }

  const productRows = products.map(product => (
    <Table.Row key={product.id}>
      <Table.Cell>{product.name}</Table.Cell>
      <Table.Cell>{product.description}</Table.Cell>
    </Table.Row>
  ));

  return (
    <Box textAlign="center" fontSize="xl" pt="30vh">
      <VStack gap="8">
        <img alt="portrait logo" src="https://www.portrait.com/wp-content/uploads/2022/07/logo-white-no-tagline.png" width="280" />
        <Heading size="2xl" letterSpacing="tight">
          Portrait Displays Product Line
        </Heading>

        <Button id="fetch-products" onClick={handleRefresh}>Refresh Products</Button>
      </VStack>
     
      <Box maxW="800px" mx="auto" mt={8}>
        <Table.Root variant="outline" size="md">
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeader>Name</Table.ColumnHeader>
              <Table.ColumnHeader>Description</Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {productRows}
          </Table.Body>
        </Table.Root>
      </Box>

      <Box pos="absolute" top="4" right="4">
        <ColorModeButton />
      </Box>
    </Box>
  )
}