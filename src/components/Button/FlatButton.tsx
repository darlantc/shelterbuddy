import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/styles";
import { blueColor } from "../../assets/styles/styles";

const useStyles = makeStyles({
  root: {
    fontSize: 16,
    fontWeight: 600,
    color: blueColor,

    "& svg": {
      fontSize: 22,
    },
  },
});

interface FlatButtonProps {
  color?: "primary" | "secondary";
  uppercase?: boolean;
  onClick: () => void;
}
const FlatButton: React.FC<FlatButtonProps> = ({
  color = "primary",
  uppercase = false,
  onClick,
  children,
}) => {
  const classes = useStyles();
  return (
    <Button
      color={color}
      onClick={onClick}
      classes={classes}
      style={{ textTransform: uppercase ? "uppercase" : "initial" }}
    >
      {children}
    </Button>
  );
};

export default FlatButton;
