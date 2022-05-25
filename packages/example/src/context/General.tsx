import { useDisclosure } from "@chakra-ui/react";
import { Context, ReactNode, useContext, createContext } from "react";

export const GeneralContext: Context<any | undefined> = createContext(undefined);


export const GeneralProvider = ({ children }: { children: ReactNode }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const value = {
        isOpen,
        onOpen,
        onClose
    }

    return <GeneralContext.Provider value={value}>{children}</GeneralContext.Provider>
}

export function useGeneral() {
    const context: any = useContext(GeneralContext);
    return context
}