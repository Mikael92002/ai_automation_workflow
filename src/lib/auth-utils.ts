import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "./auth";

// if user isn't logged in and tries to access "/", redirect them to "/login"
export const requireAuth = async () => {
    const session = await auth.api.getSession({
        headers: await headers(),
    })
    if(!session){
        redirect("/login");
    }

    return session;
};

// if user IS logged in and tries to access "/login", redirect them to "/"
export const requireUnAuth = async () => {
    const session = await auth.api.getSession({
        headers: await headers(),
    })
    if(session){
        redirect("/");
    }

    return session;
};
