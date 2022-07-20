import clsx from "clsx";
import { Skeleton } from "components/atoms";
import { Autocomplete } from "components/molecules";
import { useAppSelector } from "hooks";
import { useCallback, useState } from "react";
import { User } from "utils";

type SearhbarProps = {
  className?: string;
};
function Searchbar({ className }: SearhbarProps) {
  const [value, setValue] = useState("");
  const userState = useAppSelector((state) => state.userReducer);

  const handleChangeInput = useCallback((item: any) => {
    setValue(item);
  }, []);
  const onSelectedUser = useCallback((item: User) => {
    debugger;
  }, []);

  return userState.loading ? (
    <Skeleton></Skeleton>
  ) : (
    <Autocomplete
      className={clsx("c-search", className)}
      getItemValue={(item) => item.name}
      shouldItemRender={(item, value) =>
        item.name.toLowerCase().indexOf(value.toLowerCase()) > -1
      }
      items={userState.data}
      value={value}
      placeholder="Select a user ..."
      onChange={handleChangeInput}
      onSelect={(value: User) => {
        onSelectedUser(value);
      }}
    />
  );
}

export { Searchbar };
