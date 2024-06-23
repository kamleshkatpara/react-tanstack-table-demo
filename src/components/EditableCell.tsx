import { Input } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

export default function EditableCell({ getValue, row, column, table }: any) {
  const initialValue = getValue();
  const [value, setValue] = useState(initialValue);

  const onBlur = () => {
    table.options.meta?.updateData(row.index, column.id, value);
  };

  useEffect(() => {
    setValue(initialValue);
    return () => {};
  }, [initialValue]);

  return (
    <Input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onBlur={onBlur}
      variant={"filled"}
      size={"sm"}
      w={"85%"}
      overflow={"hidden"}
      textOverflow={"ellipsis"}
      whiteSpace={"nowrap"}
    />
  );
}
