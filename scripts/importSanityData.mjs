import { createClient } from '@sanity/client';
import axios from 'axios';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import path from 'path';

// Load environment variables from .env.local
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

// Create Sanity client
const client = createClient({
  projectId: 'xhyri615',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2025-01-13',
  token: 'skWe2buJmELsbIMs2PBMoJA6MVRGLnvqowwW53ofXi8gdcaM5jra7Rww6R34F1yNcyoDItYKWrgAHvgZGevayoipoMuHYWXa8mqYU2lDYAOcXo4q3Z52Vu0t3g9JGakoGwSVzR2LLUJsa7vDxxU6W8BhcgryQXuaFejGT0Y1Blv8bCulode0',
});
async function uploadImageToSanity(imageUrl) {
  try {
    console.log(`Uploading image: ${imageUrl}`);
    const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
    const buffer = Buffer.from(response.data);
    const asset = await client.assets.upload('image', buffer, {
      filename: imageUrl.split('/').pop()
    });
    console.log(`Image uploaded successfully: ${asset._id}`);
    return asset._id;
  } catch (error) {
    console.error('Failed to upload image:', imageUrl, error);
    return null;
  }
}

async function uploadProduct(product) {
  try {
    const imageId = await uploadImageToSanity(product.imageUrl);

    if (imageId) {
      const document = {
        _type: 'product',
        title: product.title,
        price: product.price,
        productImage: {
          _type: 'image',
          asset: {
            _ref: imageId,
          },
        },
        tags: product.tags,
        discountPercentage: product.discountPercentage, // Corrected typo
        description: product.description,
        isNew: product.isNew,
      };

      const createdProduct = await client.create(document);
      console.log(`Product ${product.title} uploaded successfully:`, createdProduct);
    } else {
      console.log(`Product ${product.title} skipped due to image upload failure.`);
    }
  } catch (error) {
    console.error('Error uploading product:', error);
  }
}

async function importProducts() {
  try {
    console.log('Migrating data, please wait...');

    const response = await axios.get('https://template6-six.vercel.app/api/products');

    if (response.status !== 200) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const products = response.data;

    for (const product of products) {
      await uploadProduct(product);
    }

    console.log('Data migrated successfully!');
  } catch (error) {
    console.error('Error fetching products:', error);
  }
}

importProducts();
