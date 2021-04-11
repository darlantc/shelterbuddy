import { ReactElement } from "react";

import { GridContainer, GridItem } from "../../components/Grid";
import { Card } from "../../components/Card";
import SearchBar from "../../components/SearchBar/SearchBar";
import Table from "../../components/Table/Table";
import AnimalPhoto from "../../components/Animal/AnimalPhoto";

import AnimalEntity, { AnimalProps } from "../../entities/AnimalEntity";
interface TableRowInterface extends AnimalProps {
  photo: string | ReactElement;
  name: string;
}

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
            <Table<TableRowInterface>
              columns={[
                { id: "photo" },
                { id: "name", label: "Name" },
                { id: "type", label: "Type" },
                { id: "breed", label: "Breed" },
                { id: "gender", label: "Gender" },
                { id: "color", label: "Color" },
              ]}
              rows={filteredAnimalsList.map((animal) => {
                const name = animal.name || "-";
                return {
                  id: animal.id,
                  data: {
                    photo: (
                      <AnimalPhoto
                        id={animal.id}
                        alt={animal.name || animal.type}
                      />
                    ),
                    id: animal.id,
                    name,
                    type: animal.type,
                    breed: animal.breed,
                    gender: animal.gender,
                    color: animal.color,
                  },
                };
              })}
            ></Table>
          </GridContainer>
        </Card>
      </GridItem>
    </GridContainer>
  );
};

export default AnimalsListPageView;
