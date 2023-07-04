import type { DocumentNode } from "graphql";
export const typeDefs = {
  kind: "Document",
  definitions: [
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Query", loc: { start: 5, end: 10 } },
      interfaces: [],
      directives: [],
      fields: [],
      loc: { start: 0, end: 10 },
    },
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Query", loc: { start: 24, end: 29 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "categories",
            loc: { start: 34, end: 44 },
          },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Category",
                loc: { start: 47, end: 55 },
              },
              loc: { start: 47, end: 55 },
            },
            loc: { start: 46, end: 56 },
          },
          directives: [],
          loc: { start: 34, end: 56 },
        },
      ],
      loc: { start: 12, end: 58 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Category", loc: { start: 65, end: 73 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 78, end: 80 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "ID", loc: { start: 82, end: 84 } },
              loc: { start: 82, end: 84 },
            },
            loc: { start: 82, end: 85 },
          },
          directives: [],
          loc: { start: 78, end: 85 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "name", loc: { start: 88, end: 92 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 94, end: 100 },
              },
              loc: { start: 94, end: 100 },
            },
            loc: { start: 94, end: 101 },
          },
          directives: [],
          loc: { start: 88, end: 101 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "products",
            loc: { start: 104, end: 112 },
          },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Product",
                loc: { start: 115, end: 122 },
              },
              loc: { start: 115, end: 122 },
            },
            loc: { start: 114, end: 123 },
          },
          directives: [],
          loc: { start: 104, end: 123 },
        },
      ],
      loc: { start: 60, end: 125 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Query", loc: { start: 131, end: 136 } },
      interfaces: [],
      directives: [],
      fields: [],
      loc: { start: 126, end: 136 },
    },
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Query", loc: { start: 150, end: 155 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "product",
            loc: { start: 160, end: 167 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 168, end: 170 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 172, end: 174 },
                  },
                  loc: { start: 172, end: 174 },
                },
                loc: { start: 172, end: 175 },
              },
              directives: [],
              loc: { start: 168, end: 175 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Product",
              loc: { start: 178, end: 185 },
            },
            loc: { start: 178, end: 185 },
          },
          directives: [],
          loc: { start: 160, end: 185 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "productsByCategories",
            loc: { start: 188, end: 208 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "categories",
                loc: { start: 209, end: 219 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "ListType",
                  type: {
                    kind: "NonNullType",
                    type: {
                      kind: "NamedType",
                      name: {
                        kind: "Name",
                        value: "String",
                        loc: { start: 222, end: 228 },
                      },
                      loc: { start: 222, end: 228 },
                    },
                    loc: { start: 222, end: 229 },
                  },
                  loc: { start: 221, end: 230 },
                },
                loc: { start: 221, end: 231 },
              },
              directives: [],
              loc: { start: 209, end: 231 },
            },
          ],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Product",
                loc: { start: 235, end: 242 },
              },
              loc: { start: 235, end: 242 },
            },
            loc: { start: 234, end: 243 },
          },
          directives: [],
          loc: { start: 188, end: 243 },
        },
      ],
      loc: { start: 138, end: 245 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Product", loc: { start: 252, end: 259 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 264, end: 266 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 268, end: 270 },
              },
              loc: { start: 268, end: 270 },
            },
            loc: { start: 268, end: 271 },
          },
          directives: [],
          loc: { start: 264, end: 271 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "name", loc: { start: 274, end: 278 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 280, end: 286 },
              },
              loc: { start: 280, end: 286 },
            },
            loc: { start: 280, end: 287 },
          },
          directives: [],
          loc: { start: 274, end: 287 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "category",
            loc: { start: 290, end: 298 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Category",
                loc: { start: 300, end: 308 },
              },
              loc: { start: 300, end: 308 },
            },
            loc: { start: 300, end: 309 },
          },
          directives: [],
          loc: { start: 290, end: 309 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "subCategory",
            loc: { start: 312, end: 323 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 325, end: 331 },
              },
              loc: { start: 325, end: 331 },
            },
            loc: { start: 325, end: 332 },
          },
          directives: [],
          loc: { start: 312, end: 332 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createdOn",
            loc: { start: 335, end: 344 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 346, end: 352 },
              },
              loc: { start: 346, end: 352 },
            },
            loc: { start: 346, end: 353 },
          },
          directives: [],
          loc: { start: 335, end: 353 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "price", loc: { start: 356, end: 361 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Price",
                loc: { start: 363, end: 368 },
              },
              loc: { start: 363, end: 368 },
            },
            loc: { start: 363, end: 369 },
          },
          directives: [],
          loc: { start: 356, end: 369 },
        },
      ],
      loc: { start: 247, end: 371 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Price", loc: { start: 378, end: 383 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 388, end: 390 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 392, end: 394 },
              },
              loc: { start: 392, end: 394 },
            },
            loc: { start: 392, end: 395 },
          },
          directives: [],
          loc: { start: 388, end: 395 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "price", loc: { start: 398, end: 403 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Float",
                loc: { start: 405, end: 410 },
              },
              loc: { start: 405, end: 410 },
            },
            loc: { start: 405, end: 411 },
          },
          directives: [],
          loc: { start: 398, end: 411 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "currency",
            loc: { start: 414, end: 422 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 424, end: 430 },
              },
              loc: { start: 424, end: 430 },
            },
            loc: { start: 424, end: 431 },
          },
          directives: [],
          loc: { start: 414, end: 431 },
        },
      ],
      loc: { start: 373, end: 433 },
    },
  ],
  loc: { start: 0, end: 434 },
} as unknown as DocumentNode;
