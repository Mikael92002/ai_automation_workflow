// (auth) means that url won't be affected, so this
// page will be at localhost:3000/login
// good for organization ^
import { requireUnAuth } from "@/lib/auth-utils";
import { LoginForm } from "@/features/auth/components/login-form";

const Page = async () => {
  await requireUnAuth();
  return <LoginForm></LoginForm>;
};

export default Page;
