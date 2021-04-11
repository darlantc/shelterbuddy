import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { GridContainer, GridItem } from "../../components/Grid";
import CollapsibleList from "../../components/Collapse/CollapsibleList";
import RaisedButton from "../../components/Button/RaisedButton";
import Paginate from "../../components/Paginate/Paginate";
import AnimalPhoto from "../../components/Animal/AnimalPhoto";
import { ChevronRightIcon } from "../../components/Icons/Icons";

import AnimalEntity from "../../entities/AnimalEntity";

import { blackColor, darkGrayColor } from "../../assets/styles/styles";
import { dynamicSortByProperty } from "../../utils/sortUtils";
const useStyles = makeStyles({
  label: {
    fontWeight: 500,
    fontSize: 16,
    color: blackColor,
    "& span": {
      color: darkGrayColor,
    },
  },
});

interface AnimalsListAsCardProps {
  animalsList: AnimalEntity[];
  didWantToSeeDetails: (id: number) => () => void;
}
const AnimalsListAsCard: React.FC<AnimalsListAsCardProps> = ({
  animalsList,
  didWantToSeeDetails,
}) => {
  const classes = useStyles();

  const renderLabel = (key: string, value: string) => (
    <p className={classes.label}>
      <span>{key}:</span> {value}
    </p>
  );

  animalsList.sort(dynamicSortByProperty("name"));

  return (
    <div style={{ marginTop: 30 }}>
      <Paginate<AnimalEntity> itemsList={animalsList} itemsPerPage={10}>
        {({ slicedList }) => (
          <CollapsibleList
            items={slicedList.map((animal) => {
              return {
                id: animal.id,
                header: (
                  <GridContainer alignItems="center">
                    <GridItem>
                      <AnimalPhoto
                        id={animal.id}
                        alt={animal.name || animal.type}
                      />
                    </GridItem>
                    <GridItem xs>
                      <h2 className="animal-title">{animal.name || "-"}</h2>
                    </GridItem>
                  </GridContainer>
                ),
                details: (
                  <GridContainer>
                    <GridItem xs>
                      {renderLabel("Type", animal.type)}
                      {renderLabel("Breed", animal.breed)}
                      {renderLabel("Gender", animal.gender)}
                      {renderLabel("Color", animal.color)}
                      <RaisedButton
                        large
                        fullWidth
                        onClick={didWantToSeeDetails(animal.id)}
                      >
                        Details <ChevronRightIcon />
                      </RaisedButton>
                    </GridItem>
                  </GridContainer>
                ),
              };
            })}
          />
        )}
      </Paginate>
    </div>
  );
};

export default AnimalsListAsCard;
