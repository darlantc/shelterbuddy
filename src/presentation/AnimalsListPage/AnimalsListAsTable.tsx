import { ReactElement } from "react";
import Table from "../../components/Table/Table";
import AnimalPhoto from "../../components/Animal/AnimalPhoto";
import FlatButton from "../../components/Button/FlatButton";
import { ChevronRightIcon } from "../../components/Icons/Icons";

import AnimalEntity, { AnimalProps } from "../../entities/AnimalEntity";

interface TableRowInterface extends AnimalProps {
  photo: ReactElement;
  name: string;
  action: ReactElement;
}

interface AnimalsListAsTableProps {
  animalsList: AnimalEntity[];
  didWantToSeeDetails: (id: number) => () => void;
}
const AnimalsListAsTable: React.FC<AnimalsListAsTableProps> = ({
  animalsList,
  didWantToSeeDetails,
}) => {
  return (
    <Table<TableRowInterface>
      columns={[
        { id: "photo" },
        { id: "name", label: "Name" },
        { id: "type", label: "Type" },
        { id: "breed", label: "Breed" },
        { id: "gender", label: "Gender" },
        { id: "color", label: "Color" },
        { id: "action" },
      ]}
      rows={animalsList.map((animal) => {
        const name = animal.name || "-";
        return {
          id: animal.id,
          data: {
            photo: (
              <AnimalPhoto id={animal.id} alt={animal.name || animal.type} />
            ),
            id: animal.id,
            name,
            type: animal.type,
            breed: animal.breed,
            gender: animal.gender,
            color: animal.color,
            action: (
              <FlatButton onClick={didWantToSeeDetails(animal.id)}>
                Details <ChevronRightIcon />
              </FlatButton>
            ),
          },
        };
      })}
    />
  );
};

export default AnimalsListAsTable;
