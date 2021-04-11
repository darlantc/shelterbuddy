import { Fragment } from "react";
import { HttpService } from "./services/HttpService";
import { UseCasesContext } from "./useCases/UseCasesContext";
import RequestAnimalsUseCase from "./useCases/RequestAnimalsUseCase";
import RequestAnimalPhotoUseCase from "./useCases/RequestAnimalPhotoUseCase";

import Header from "./components/Header/Header";
import AnimalsListPageViewModel from "./presentation/AnimalsListPage/AnimalsListPageViewModel";

const App = ({ httpService }: { httpService: HttpService }) => {
  return (
    <UseCasesContext.Provider
      value={{
        requestAnimalsUseCase: new RequestAnimalsUseCase(httpService),
        requestAnimalPhotoUseCase: new RequestAnimalPhotoUseCase(httpService),
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
