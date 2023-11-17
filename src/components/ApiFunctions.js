const API_URL = 'https://vef1-2023-h2-api-791d754dda5b.herokuapp.com/';

export const GetLimitedProducts = async (limit) => {
  const url = new URL('products', API_URL);
  url.searchParams.set('limit', `${limit}`);

  try {
    const response = await fetch(url);
    if (!response.ok) {
      console.error(
        'Error fetching data:',
        response.status,
        response.statusText
      );
      return;
    }

    const json = await response.json();
    return json.items;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const GetIndividualProduct = async (productID) => {
  const url = new URL('products', API_URL);
  url.searchParams.set('id', `${productID}`);
  const urlString = url.toString();
  const newUrl = urlString.replace('?id=', '/');

  try {
    const response = await fetch(newUrl);
    if (!response.ok) {
      console.error(
        'Error fetching data:',
        response.status,
        response.statusText
      );
      return;
    }

    const json = await response.json();
    return json;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const GetProductsFromCategory = async (categoryID, limit) => {
  const url = new URL('products', API_URL);
  url.searchParams.set('limit', `${limit}`);
  url.searchParams.set('category', `${categoryID}`);

  try {
    const response = await fetch(url);
    if (!response.ok) {
      console.error(
        'Error fetching data:',
        response.status,
        response.statusText
      );
      return;
    }

    const json = await response.json();
    return json.items;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
