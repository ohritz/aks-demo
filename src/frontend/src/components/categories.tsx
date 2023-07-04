import { Table, Tbody, Tr, Td, TableContainer } from "@chakra-ui/react";
import { Checkbox } from "@chakra-ui/react";

export type Category = {
  id: string;
  name: string;
};

interface Props {
  categories: Category[];
}

export const Categories: React.FC<Props> = ({ categories }) => (
  <TableContainer>
    <Table variant="simple">
      <Tbody>
        {categories.map((category) => {
          return (
            <Tr key={category.id}>
              <Td>
                <Checkbox colorScheme="teal" size="lg">
                  {category.name}
                </Checkbox>
              </Td>
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  </TableContainer>
);
