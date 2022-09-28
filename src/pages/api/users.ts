import { NextApiRequest, NextApiResponse } from 'next';

const apiUsers = (request: NextApiRequest, response: NextApiResponse) => {
  const users = [
    { id: 1, name: 'João Marcos' },
    { id: 2, name: 'João Marcos 2' },
    { id: 3, name: 'João Marcos 3' },
  ];

  return response.json(users);
};

export default apiUsers;
