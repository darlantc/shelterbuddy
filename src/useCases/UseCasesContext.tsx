import { createContext, useContext } from "react";
import RequestAnimalPhotoUseCase from "./RequestAnimalPhotoUseCase";
import RequestAnimalsUseCase from "./RequestAnimalsUseCase";

type UseCasesContextType = {
  requestAnimalsUseCase: RequestAnimalsUseCase;
  requestAnimalPhotoUseCase: RequestAnimalPhotoUseCase;
};

export const UseCasesContext = createContext<UseCasesContextType | null>(null);
export const useUseCasesContext = () => useContext(UseCasesContext);
