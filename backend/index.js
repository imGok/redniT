const { ApolloServer, gql } = require('apollo-server');
// const db = require('./database');

const typeDefs = gql`
  type Machine {
    name: String
    imgUrl: String
    description: String
  }

  type Query {
    machines: [Machine]
  }
`;

const machines = [
  {
    name: 'Dassault Rafale',
    imgUrl: 'https://www.usinenouvelle.com/mediatheque/9/1/4/000897419_image_896x598/rafale-dassault-aviation.jpg',
    description:
      'The Dassault Rafale is a French twin-engine, canard delta wing, multirole fighter aircraft designed and built by Dassault Aviation.',
  },
  {
    name: 'Ariane 5',
    imgUrl: 'https://img.20mn.fr/oT8gAsXEQkWZ3i9JSOXGnw/768x492_decollage-fusee-ariane-5-place-deux-satellites-telecommunications-orbite-18-fevrier-2020.jpg',
    description:
      'Ariane 5 is a heavy-lift space launch vehicle developed and operated by Arianespace for the European Space Agency (ESA).',
  },
  {
    name: 'School bus',
    imgUrl: 'https://www.vmcdn.ca/f/files/moosejawtoday/images/transportation/school-bus-stock-photo.jpg;w=1000;h=662;mode=crop',
    description:
      'A school bus is a type of bus owned, leased, contracted to, or operated by a school or school district.',
  },
  {
    name: 'Motorized scooter',
    imgUrl: 'https://cdn.shopify.com/s/files/1/0030/8183/0512/products/apollo-explore-electric-scooter-665723_2048x2048.jpg?v=1596138026',
    description:
      'A motorized scooter is a powered stand-up scooter using a small utility internal combustion engine or, more commonly, an electric motor.',
  },
  {
    name: 'Garbage truck',
    imgUrl: 'https://www.revell.de/out/pictures/master/product/1/00808_mdpw_garbage_truck.jpg',
    description:
      'A garbage truck is a truck specially designed to collect municipal solid waste and transport it to a solid waste treatment facility, such as a landfill or transfer station.',
  },
];

// This doesn't need DB for now
// db.startDatabase();

const resolvers = {
  Query: {
    machines: () => machines,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  VROOOUM at ${url}`);
});
