import { Autocomplete } from "components/molecules";
import { useCallback, useState } from "react";

type SearhbarProps = {
  className?: string;
};
function Searchbar({ className }: SearhbarProps) {
  const [value, setValue] = useState("");
  const tokens = ["A", "B", "C"];

  const handleChangeInput = useCallback((item: any) => {
    setValue(item);
  }, []);
  const onSelectedToken = useCallback((item: any) => {}, []);

  return (
    <Autocomplete
      className="c-search"
      getItemValue={(item) =>
        tokens.find((c) => c.toLowerCase() === item.toLowerCase())
      }
      shouldItemRender={(item, value) =>
        item.toLowerCase().indexOf(value.toLowerCase()) > -1
      }
      items={tokens}
      value={value}
      placeholder="Select a token ..."
      onChange={handleChangeInput}
      onSelect={(value: any) => {
        onSelectedToken(value);
      }}
    />
  );
}

export { Searchbar };
