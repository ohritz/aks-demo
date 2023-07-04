import React, { FC } from "react";
import { Skeleton, Box } from "@chakra-ui/react";
import { useProductByCategoriesQuery } from "./use-product-query";
import { useSelectedCategories } from "../../client/selected-categories";
import { FetchError } from "../global/fetch-error";
import { ProductTable } from "./product-table";

type Props = {};

export const ProductTableFetcher: FC<Props> = () => {
  const { currentSelection } = useSelectedCategories();
  const { data, error, loading } =
    useProductByCategoriesQuery(currentSelection);

  if (error) return <FetchError error={error.message} />;

  return (
    <Box w={"100%"} h={"100%"}>
      <Skeleton isLoaded={!loading}>
        <ProductTable products={data} />
      </Skeleton>
    </Box>
  );
};
