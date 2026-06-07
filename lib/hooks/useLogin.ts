import {useAppDispatch} from "@/lib/hooks";
import {AuthUser, loginAsync} from "@/lib/features/auth/authSlice";
import {useRouter} from "next/navigation";

export default function useLogin() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  
  return function login(user: AuthUser) {
    dispatch(loginAsync(user))
      .unwrap()
      .then(() => {
        router.push("/home");
      })
      .catch((error) => {
        // console.log('Error: ', error.message);
      });
  }
}