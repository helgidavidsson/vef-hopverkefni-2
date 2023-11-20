const API_URL = 'https://vef1-2023-h2-api-791d754dda5b.herokuapp.com/';

//Hér má bæta hvernig offset og limit er skilgreint
export const GetNewProducts = async () => {
  const url = new URL('products', API_URL);
  url.searchParams.set('offset', `10`);
  url.searchParams.set('limit', `51`);
  console.log(url);

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

export const GetLimitedProductsFromCategory = async (categoryID, limit) => {
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

export const GetProductsInCategory = async (categoryID) => {
  const url = new URL('products', API_URL);
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

export const GetCategoryName = async (categoryID) => {
  const url = new URL('categories', API_URL);
  url.searchParams.set('limit', '15');
  console.log('mdakjsbnfd', categoryID);

  const ID = parseInt(categoryID);

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
    const categories = json.items;

    for (const category of categories) {
      console.log(category.id);
      if (category.id === ID) {
        return category.title;
      }
    }
    return 'category not found';
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const GetCategoryID = async (categoryName) => {
  const url = new URL('categories', API_URL);

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
    const categories = json.items;

    for (const category of categories) {
      if (category.title === categoryName) {
        return category.id;
      }
    }
    return 'category not found';
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
