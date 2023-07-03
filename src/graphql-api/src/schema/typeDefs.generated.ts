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
            value: "products",
            loc: { start: 160, end: 168 },
          },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Product",
                loc: { start: 171, end: 178 },
              },
              loc: { start: 171, end: 178 },
            },
            loc: { start: 170, end: 179 },
          },
          directives: [],
          loc: { start: 160, end: 179 },
        },
      ],
      loc: { start: 138, end: 181 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Product", loc: { start: 188, end: 195 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 200, end: 202 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 204, end: 206 },
              },
              loc: { start: 204, end: 206 },
            },
            loc: { start: 204, end: 207 },
          },
          directives: [],
          loc: { start: 200, end: 207 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "name", loc: { start: 210, end: 214 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 216, end: 222 },
              },
              loc: { start: 216, end: 222 },
            },
            loc: { start: 216, end: 223 },
          },
          directives: [],
          loc: { start: 210, end: 223 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "category",
            loc: { start: 226, end: 234 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 236, end: 242 },
              },
              loc: { start: 236, end: 242 },
            },
            loc: { start: 236, end: 243 },
          },
          directives: [],
          loc: { start: 226, end: 243 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "subCategory",
            loc: { start: 246, end: 257 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 259, end: 265 },
              },
              loc: { start: 259, end: 265 },
            },
            loc: { start: 259, end: 266 },
          },
          directives: [],
          loc: { start: 246, end: 266 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createdOn",
            loc: { start: 269, end: 278 },
          },
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
          loc: { start: 269, end: 287 },
        },
      ],
      loc: { start: 183, end: 289 },
    },
  ],
  loc: { start: 0, end: 290 },
} as unknown as DocumentNode;
