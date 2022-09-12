export const getOrdersList = async (token:string):Promise<any> => {
  const response = await fetch('http://localhost:3000/orders', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .catch((error) => console.log(error));
  return response;
};

export const getProductForCart = async (id:number):Promise<any> => {
  const response = await fetch(`http://localhost:3000/product?id=${id}`)
    .then((res) => res.json())
    .catch((error) => console.log(error));
  return response;
};
