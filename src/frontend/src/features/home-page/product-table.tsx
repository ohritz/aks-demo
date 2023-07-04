import React, { FC } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import { ProductsByCategories } from "./use-product-query";
import { formatDateTimeString } from "../../common/date-format";

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
                    <Td>
                      <Link href={`/details/${product.id}`}>
                        {product.name}
                      </Link>{" "}
                    </Td>
                    <Td>{product.category.name}</Td>
                    <Td>{product.subCategory}</Td>
                    <Td>{formatDateTimeString(product.createdOn)}</Td>
                  </Tr>
                )
            )}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
