import { Box, Center, Icon } from "@chakra-ui/react";
import { Ref, forwardRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.module.css";
import CalendarIcon from "./icons/CalendarIcon";

const DateCustomInput = forwardRef(
  (
    {
      value,
      onClick,
      clearDate,
    }: { value?: string; onClick?: () => void; clearDate: () => void },
    ref: Ref<HTMLDivElement>
  ) => (
    <Center ref={ref} onClick={onClick} cursor="pointer">
      {value ? (
        <>
          {value}
          <Box
            pos="absolute"
            right={3}
            fontSize="md"
            color="red.300"
            onClick={(e) => {
              e.stopPropagation();
              clearDate && clearDate();
            }}
          >
            &times;
          </Box>
        </>
      ) : (
        <Icon as={CalendarIcon} fontSize="xl" />
      )}
    </Center>
  )
);

export default function DateCell({ getValue, row, column, table }: any) {
  const date = getValue();
  const { updateData } = table.options.meta;
  return (
    <DatePicker
      wrapperClassName="date-wrapper"
      dateFormat="MMM d"
      selected={date}
      onChange={(date) => updateData(row.index, column.id, date)}
      customInput={
        <DateCustomInput
          clearDate={() => updateData(row.index, column.id, null)}
        />
      }
    />
  );
}
