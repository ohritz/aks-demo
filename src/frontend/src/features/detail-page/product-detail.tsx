import {
  Card,
  CardHeader,
  CardBody,
  Stat,
  StatLabel,
  StatGroup,
  Heading,
  IconButton,
} from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import { FaArrowLeft } from "react-icons/fa";
import { ProductQuery } from "../../gql/graphql";
import React, { FC } from "react";
import { formatDateTimeString } from "../../common/date-format";
import { roundWithDecimals } from "../../common/number-format";

type Props = {
  product: ProductQuery["product"];
};

export const ProductDetail: FC<Props> = ({ product }) => {
  if (!product) return null;

  return (
    <Card>
      <CardHeader>
        <Link href={"/"}>
          <IconButton aria-label={"Back"} icon={<FaArrowLeft />} />
        </Link>
      </CardHeader>
      <CardHeader>
        <Heading size={"md"}>Product:</Heading> {product.name}
      </CardHeader>
      <CardBody>
        <StatGroup>
          <Stat>
            <StatLabel>Category</StatLabel>
            <StatLabel>{product.category.name}</StatLabel>
          </Stat>
          <Stat>
            <StatLabel>Subcategory</StatLabel>
            <StatLabel>{product.subCategory}</StatLabel>
          </Stat>
          <Stat>
            <StatLabel>Price</StatLabel>
            <StatLabel>{`${roundWithDecimals(product.price.price, 2)} ${
              product.price.currency
            }`}</StatLabel>
          </Stat>
          <Stat>
            <StatLabel>Created On</StatLabel>
            <StatLabel>{formatDateTimeString(product.createdOn)}</StatLabel>
          </Stat>
        </StatGroup>
      </CardBody>
    </Card>
  );
};
