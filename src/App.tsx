import { Fragment } from "react";
import ShelterBuddyService from "./services/ShelterBuddyService";
import { UseCasesContext } from "./useCases/UseCasesContext";
import RequestAnimalsUseCase from "./useCases/RequestAnimalsUseCase";
import RequestAnimalPhotoUseCase from "./useCases/RequestAnimalPhotoUseCase";

import Header from "./components/Header/Header";
import AnimalsListPageViewModel from "./presentation/AnimalsListPage/AnimalsListPageViewModel";

const App = ({ sbService }: { sbService: ShelterBuddyService }) => {
  return (
    <UseCasesContext.Provider
      value={{
        requestAnimalsUseCase: new RequestAnimalsUseCase(sbService),
        requestAnimalPhotoUseCase: new RequestAnimalPhotoUseCase(sbService),
      }}
    >
      <Fragment>
        <Header />
        <main id="main-content">
          <AnimalsListPageViewModel />
        </main>
      </Fragment>
    </UseCasesContext.Provider>
  );
};

export default App;
