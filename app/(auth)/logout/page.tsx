'use client';

import Button from "@mui/material/Button";
import useLogout from "@/lib/hooks/useLogout";

export default function LogoutPage() {
  const logout = useLogout();
  const logoutHandler = () => {
    logout();
  }
  return (<div>
    <Button type={'button'} variant={'contained'} color={'primary'} onClick={logoutHandler}>Logout</Button>
  </div>)
}