// (auth) means that url won't be affected, so this
// page will be at localhost:3000/register
// good for organization ^
import { RegisterForm } from "@/features/auth/components/register-form";
import { requireUnAuth } from "@/lib/auth-utils";
const Page = async () => {
    await requireUnAuth();
    return (
        <div>
            <RegisterForm></RegisterForm>
        </div>
    )
}

export default Page;