import React, { FC } from "react";
import { format } from "date-fns";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import { ProductsByCategories } from "./use-product-query";

type Props = {
  products: ProductsByCategories;
};

export const ProductTable: FC<Props> = ({ products }) => {
  return (
    <TableContainer>
      <Table size="sm">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Category</Th>
            <Th>Subcategory</Th>
            <Th>Created on</Th>
          </Tr>
        </Thead>
        <Tbody>
          {products &&
            products.map(
              (product) =>
                product && (
                  <Tr key={product.id}>
                    <Td>{product.name}</Td>
                    <Td>{product.category.name}</Td>
                    <Td>{product.subCategory}</Td>
                    <Td>
                      {format(
                        new Date(product.createdOn),
                        "yyyy/mm/dd (HH:MM)"
                      )}
                    </Td>
                  </Tr>
                )
            )}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
