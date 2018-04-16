import axios from 'axios';

export async function getArticlesApi() {
  let response;
  try {
    response = await axios.get('https://conduit.productionready.io/api/articles');
  } catch (error) {
    console.error(error);
  }
  return response;
}
