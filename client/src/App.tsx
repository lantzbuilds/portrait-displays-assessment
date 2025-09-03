import { useState } from 'react'
import {
  Box,
  Button,
  Heading,
  VStack,
  Table,
  Image
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

  const getSortedProducts = async (): Promise<Product[]> => {
      const res = await fetch(productsURL + '?sort=name');
      const sortedProducts: Product[] = await res.json();
      return sortedProducts
  }

  const handleRefresh = async () => {
    const currProducts = await getCurrentProducts()
    setProducts(currProducts)
  }

  const handleSort = async () => {
    const sortedProducts = await getSortedProducts()
    setProducts(sortedProducts)
  }

  const productRows = products.map(product => (
    <Table.Row key={product.id}>
      <Table.Cell>{product.name}</Table.Cell>
      <Table.Cell>{product.description}</Table.Cell>
    </Table.Row>
  ));

  return (
    <Box
      textAlign="center"
      fontSize={['md', 'lg', 'xl']}
      pt={['10vh', '20vh', '30vh']}
      px={[2, 4, 8]}
    >
      <VStack gap={[4, 6, 8]}>
        <Image
          alt="portrait logo"
          src="https://www.portrait.com/wp-content/uploads/2022/07/logo-white-no-tagline.png"
          maxW={["120px", "180px", "280px"]}
          mx="auto"
          width="100%"
        />
        <Heading size={['lg', 'xl', '2xl']} letterSpacing="tight">
          Portrait Displays Product Line
        </Heading>

        <Box display="flex" gap={2} justifyContent="center">
          <Button
            id="fetch-products"
            onClick={handleRefresh}
            size={['sm', 'md', 'lg']}
            aria-label="Refresh product list"
          >
            Refresh Products
          </Button>
          <Button
            id="sort-products"
            onClick={handleSort}
            size={['sm', 'md', 'lg']}
            aria-label="Sort products by name"
          >
            Sort by Name
          </Button>
        </Box>
      </VStack>

      <Box maxW={['100%', '600px', '800px']} mx="auto" mt={[4, 6, 8]} px={[0, 2, 4]}>
        {products.length === 0 ? (
          <Box py={8} color="gray.500" fontSize={['md', 'lg', 'xl']}>
            Click "Refresh Products" to load the product list.
          </Box>
        ) : (
          <Table.Root variant="outline" size={['sm', 'md', 'md']} aria-label="Product list table">
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeader aria-label="Product Name">Name</Table.ColumnHeader>
                <Table.ColumnHeader aria-label="Product Description">Description</Table.ColumnHeader>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {productRows}
            </Table.Body>
          </Table.Root>
        )}
      </Box>

      <Box pos="absolute" top={[2, 4, 4]} right={[2, 4, 4]}>
        <ColorModeButton />
      </Box>
    </Box>
  )
}