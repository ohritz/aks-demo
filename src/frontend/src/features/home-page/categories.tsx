import { Table, Tbody, Tr, Td, TableContainer } from "@chakra-ui/react";
import { Checkbox, CheckboxGroup } from "@chakra-ui/react";
import { useSelectedCategories } from "../../client/selected-categories";

export type Category = {
  id: string;
  name: string;
};
interface Props {
  categories: Category[];
}

export const Categories: React.FC<Props> = ({ categories }) => {
  const { currentSelection, onChangeHandler } = useSelectedCategories();

  return (
    <CheckboxGroup defaultValue={currentSelection}>
      <TableContainer>
        <Table variant="simple">
          <Tbody>
            {categories.map((category) => {
              return (
                <Tr key={category.id}>
                  <Td>
                    <Checkbox
                      value={category.id}
                      onChange={onChangeHandler}
                      colorScheme="teal"
                      size="lg"
                    >
                      {category.name}
                    </Checkbox>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </CheckboxGroup>
  );
};
