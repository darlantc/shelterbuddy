import AnimalEntity from "../../entities/AnimalEntity";

import { GridContainer, GridItem } from "../../components/Grid";
import { Card } from "../../components/Card";
import SearchBar from "../../components/SearchBar/SearchBar";

const AnimalsListPageView = ({
  isFetching,
  animalsList,
  searchString,
  setSearchString,
}: {
  isFetching: boolean;
  animalsList: AnimalEntity[];
  searchString: string;
  setSearchString: (searchString: string) => void;
}) => {
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
        </Card>
      </GridItem>
    </GridContainer>
  );
};

export default AnimalsListPageView;
