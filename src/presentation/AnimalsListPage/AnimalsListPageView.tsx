import { Hidden } from "@material-ui/core";

import { GridContainer, GridItem } from "../../components/Grid";
import { Card } from "../../components/Card";
import SearchBar from "../../components/SearchBar/SearchBar";
import AnimalsListAsTable from "./AnimalsListAsTable";

import AnimalEntity from "../../entities/AnimalEntity";

const AnimalsListPageView = ({
  isFetching,
  animalsList,
  filteredAnimalsList,
  searchString,
  setSearchString,
}: {
  isFetching: boolean;
  animalsList: AnimalEntity[];
  filteredAnimalsList: AnimalEntity[];
  searchString: string;
  setSearchString: (searchString: string) => void;
}) => {
  const didWantToSeeDetails = (id: number) => () => {
    console.log("didWantToSeeDetails", id);
  };

  if (isFetching) {
    return <h1>Loading...</h1>;
  }

  return (
    <GridContainer>
      <GridItem xs>
        <Card>
          <GridContainer alignItems="center">
            <GridItem xs>
              <div style={{ display: "flex", alignItems: "center" }}>
                <h1>Your Animals</h1>
                <span className="inline-badge">{animalsList.length}</span>
              </div>
            </GridItem>
            <GridItem xs={12} sm={6} md={5}>
              <SearchBar
                label="Search an animal by name"
                value={searchString}
                onChange={setSearchString}
              />
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs>
              <Hidden smDown>
                <AnimalsListAsTable
                  animalsList={filteredAnimalsList}
                  didWantToSeeDetails={didWantToSeeDetails}
                />
              </Hidden>
            </GridItem>
          </GridContainer>
        </Card>
      </GridItem>
    </GridContainer>
  );
};

export default AnimalsListPageView;
