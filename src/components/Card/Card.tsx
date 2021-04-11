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
  withMargin?: boolean;
  onClick?: () => void;
}
const Card: React.FC<CardProps> = ({
  elevation = 0,
  withMargin,
  onClick,
  children,
}) => {
  const classes = useStyles();
  return (
    <MaterialCard
      elevation={elevation}
      className={classes.root}
      onClick={onClick}
      style={{ margin: withMargin ? 16 : "inherit" }}
    >
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
