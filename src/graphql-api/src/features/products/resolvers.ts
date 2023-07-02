const products = [
  {
    _id: "a2a38e2c-50a8-48ba-aa81-b7228c5445a3",
    category: "Entertainment",
    subcategory: "Music",
    name: "Music Gizmo",
    createdOn: "2021-02-26T23:59:57.937+01:00",
  },
  {
    _id: "65699cd3-d847-4048-a7c4-47ffd9ba9f58",
    category: "Electronics",
    subcategory: "Computer",
    name: "Computer Attachment",
    createdOn: "2021-02-25T07:38:55.046+01:00",
  },
  {
    _id: "58659cba-0234-44d2-a20e-90294d50e0ad",
    category: "Pets",
    subcategory: "Cat",
    name: "Cat Thingamajig",
    createdOn: "2022-07-23T09:43:49.303+02:00",
  },
];

export const productsResolver = {
  Query: {
    products: () => products.map(mapper),
  },
};

const mapper = (product: any) => ({ id: product._id, ...product });
