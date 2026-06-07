import {useAppDispatch} from "@/lib/hooks";
import {logout} from "@/lib/features/auth/authSlice";
import {useRouter} from "next/navigation";

export default function useLogout() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  
  return function logoutFun() {
    dispatch(logout());
    router.push('/login');
  }
}