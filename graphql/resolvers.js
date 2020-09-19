const airus = {
  name: 'Airus',
  age: 18,
  gender: 'male',
};

const resolvers = {
  Query: {
    person: () => airus,
  },
};

export default resolvers;
