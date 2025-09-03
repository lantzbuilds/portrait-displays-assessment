import express from 'express';
import cors from 'cors';
import { Request, Response } from 'express';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Mock data
const products = [
  { id: 1, name: 'CalMAN Ultimate', description: 'Comprehensive calibration software for professionals.' },
  { id: 2, name: 'CalMAN Home', description: 'Easy-to-use calibration for home theater enthusiasts.' },
  { id: 3, name: 'VideoForge PRO', description: 'Advanced pattern generator for display calibration.' },
  { id: 4, name: 'SpectraCal C6 HDR2000', description: 'High-precision colorimeter for HDR displays.' },
  { id: 5, name: 'CalMAN ColorMatch', description: 'Quick color matching for monitors and laptops.' }
];

// GET endpoint to fetch products
app.get('/api/products', (req: Request, res: Response) => {
  const { sort } = req.query;
  let result = [...products];
  if (sort === 'name') {
    result.sort((a, b) => a.name.localeCompare(b.name));
  }
  res.json(result);
});

// Root endpoint
app.get('/', (req: Request, res: Response) => {
  res.send('Express server is running!');
});


if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
}

export default app;
