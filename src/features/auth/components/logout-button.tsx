"use client";
import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export const LogoutButton = () => {
    const router = useRouter();

  const handleLogout = async () => {
    await authClient.signOut(
      {},
      {
        onSuccess: (ctx) => {
            router.push("/login");
        },
        onError: (ctx) => {
          toast.error(ctx.error.message);
        },
      },
    );
  };

  return (
    <Button
      onClick={() => handleLogout()}
    >
      Log out
    </Button>
  );
};
