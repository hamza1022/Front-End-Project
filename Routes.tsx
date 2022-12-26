import { useRouter } from "next/router";
// import {getCookie} from "cookies-next";

import  {parseCookies} from 'nookies'





const Routes = (WrappedComponent:any) => {
    // eslint-disable-next-line react/display-name
    return (props: any) => {
        // checks whether we are on client / browser or server.
        if (typeof window !== "undefined") {
            const router = useRouter();
            const {token} = parseCookies();


            const accessToken = token

            // If there is no access token we redirect to "/" page.
            if (!accessToken) {
                router.push("/login");
                return null;
            }

            // If this is an accessToken we just render the component that was passed with all its props

            return <WrappedComponent {...props} />
        }

        // If we are on server, return null
        return null;
    };
};

export default Routes;