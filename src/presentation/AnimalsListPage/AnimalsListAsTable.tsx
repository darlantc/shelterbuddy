import { ReactElement, useState } from "react";

import Table from "../../components/Table/Table";
import AnimalPhoto from "../../components/Animal/AnimalPhoto";
import FlatButton from "../../components/Button/FlatButton";
import { ChevronRightIcon } from "../../components/Icons/Icons";

import AnimalEntity, { AnimalProps } from "../../entities/AnimalEntity";
import { dynamicSortByProperty } from "../../utils/sortUtils";

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
  const [orderBy, setOrderBy] = useState("name");
  const [order, setOrder] = useState<"asc" | "desc">("asc");

  const onRequestSort = (
    event: React.MouseEvent<unknown>,
    property: string
  ) => {
    setOrderBy(property);
    setOrder(order === "asc" ? "desc" : "asc");
  };

  animalsList.sort(dynamicSortByProperty(orderBy, order === "asc"));

  return (
    <Table<TableRowInterface>
      onRequestSort={onRequestSort}
      orderBy={orderBy}
      order={order}
      columns={[
        { id: "photo" },
        { id: "name", label: "Name", isSortable: true },
        { id: "type", label: "Type", isSortable: true },
        { id: "breed", label: "Breed", isSortable: true },
        { id: "gender", label: "Gender", isSortable: true },
        { id: "color", label: "Color", isSortable: true },
        { id: "action" },
      ]}
      rows={animalsList.map((animal) => {
        const name = animal.name || "-";
        return {
          id: `${animal.id}`,
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
