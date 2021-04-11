import MaterialCard from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    borderRadius: 12,
  },
  content: {
    padding: "32px!important",
  },
});

interface CardProps {
  elevation?: number;
}
const Card: React.FC<CardProps> = ({ elevation = 0, children }) => {
  const classes = useStyles();
  return (
    <MaterialCard elevation={elevation} className={classes.root}>
      <CardContent
        classes={{
          root: classes.content,
        }}
      >
        {children}
      </CardContent>
    </MaterialCard>
  );
};

export default Card;
