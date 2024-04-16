import { useContext } from "react";
import { createContext } from "react";

const ProfileCardContext = createContext(null)


export function useProfileCardContext(){
    const context = useContext(ProfileCardContext);

    if(!context){
        throw new Error(
            "Product card shold be child "
        );
        return context;
    }
}

export default ProfileCardContext;