type CustomConfig = {
  body?: string;
  headers?: { 'Content-Type': string };
  [k: string]: any;
};

export async function client(
  endpoint: string,
  { body, ...customConfig }: CustomConfig = {},
) {
  const headers = {
    'Content-Type': 'application/json',
  };

  const config: CustomConfig = {
    method: body ? 'POST' : 'GET',
    credentials: 'include',
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig?.headers,
    },
  };

  if (body) {
    config.body = JSON.stringify(body);
  }

  return window
    .fetch(`${process.env.REACT_APP_AUTH_URL}/${endpoint}`, config)
    .then(async (response) => {
      if (response.ok) {
        const finalResponse = await response.json();
        console.log(finalResponse);
        return finalResponse;
      } else {
        const errorMessage = await response.text();
        return Promise.reject(new Error(errorMessage));
      }
    });
}
