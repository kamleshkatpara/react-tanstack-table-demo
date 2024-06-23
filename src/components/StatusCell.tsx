import { Box, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { STATUSES } from "../data";

export const ColorIcon = ({
  color,
  ...props
}: {
  color: string;
  mr: number;
}) => <Box w={"12px"} h={"12px"} bg={color} borderRadius={"3px"} {...props} />;

export default function StatusCell({ getValue, row, column, table }: any) {
  const { name, color } = getValue() || {};
  const { updateData } = table.options.meta;
  return (
    <Menu isLazy offset={[0, 0]} flip={false} autoSelect={false}>
      <MenuButton
        h="100%"
        w="100%"
        textAlign={"left"}
        p={1.5}
        bg={color || "transparent"}
        color={"gray:900"}
      >
        {name}
      </MenuButton>
      <MenuList>
        {STATUSES.map((status) => (
          <MenuItem
            onClick={() => updateData(row.index, column.id, status)}
            key={status.id}
          >
            <ColorIcon color={status.color} mr={3} /> {status.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}
