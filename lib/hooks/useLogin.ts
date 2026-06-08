import {useAppDispatch} from "@/lib/hooks";
import {AuthUser, loginAsync} from "@/lib/features/auth/authSlice";
import {useRouter, useSearchParams} from "next/navigation";

export default function useLogin() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectUrl = searchParams.get('redirectUrl');
  
  return function login(user: AuthUser) {
    dispatch(loginAsync(user))
      .unwrap()
      .then(() => {
        if (redirectUrl) {
          router.push(redirectUrl);
        } else {
          router.push('/home');
        }
      })
      .catch((error) => {
        // console.log('Error: ', error.message);
      });
  }
}