
import { Dropdown } from "flowbite-react";

export function UserDropDown({logoutHandler}) {
  return (
    <Dropdown label="User" dismissOnClick={false} >
      <Dropdown.Item>Profile</Dropdown.Item>
      <Dropdown.Item onClick={logoutHandler}>Sign out</Dropdown.Item>
    </Dropdown>
  );
}
