import React, { ReactElement } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";

import { ExpandMoreIcon } from "../Icons/Icons";

import { blueColor, lightGrayColor } from "../../assets/styles/styles";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
    },
    accordionRoot: {
      margin: "12px 0",
      backgroundColor: lightGrayColor,
      borderRadius: "12px !important",
      "&:before": {
        display: "none",
      },
    },
    summary: {
      margin: "16px 0!important",
    },
    summaryExpanded: {
      marginBottom: "0!important",
    },
    summaryExpandIcon: {
      backgroundColor: blueColor,
      color: "#fff",
      borderRadius: 100,
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      flexBasis: "33.33%",
      flexShrink: 0,
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
    },
    details: {
      padding: 16,
      paddingTop: 0,
    },
  })
);

export type CollapsibleListItem = {
  id: string | number;
  header: string | ReactElement;
  details: ReactElement;
};

interface CollapsibleListProps {
  items: CollapsibleListItem[];
}

const CollapsibleList: React.FC<CollapsibleListProps> = ({ items }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState<number | string | null>(null);

  const handleChange = (index: number | string) => (
    event: React.ChangeEvent<{}>,
    isExpanded: boolean
  ) => {
    setExpanded(isExpanded ? index : null);
  };

  return (
    <div className={classes.root}>
      {items.map(({ id, header, details }) => (
        <Accordion
          key={id}
          expanded={expanded === id}
          onChange={handleChange(id)}
          classes={{ root: classes.accordionRoot }}
          elevation={0}
        >
          <AccordionSummary
            classes={{
              content: classes.summary,
              expanded: classes.summaryExpanded,
            }}
            expandIcon={
              <ExpandMoreIcon className={classes.summaryExpandIcon} />
            }
            aria-controls={`${id}-content`}
            id={`${id}-header`}
          >
            {header}
          </AccordionSummary>
          <AccordionDetails classes={{ root: classes.details }}>
            {details}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default CollapsibleList;
