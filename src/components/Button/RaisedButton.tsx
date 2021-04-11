import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/styles";
import { blueColor } from "../../assets/styles/styles";

const useStyles = makeStyles({
  root: {
    fontSize: 16,
    fontWeight: 600,
    backgroundColor: blueColor,
    borderRadius: 8,
  },
});

interface RaisedButtonProps {
  color?: "primary" | "secondary";
  uppercase?: boolean;
  onClick: () => void;
  large?: boolean;
  fullWidth?: boolean;
}
const RaisedButton: React.FC<RaisedButtonProps> = ({
  color = "primary",
  uppercase = false,
  onClick,
  children,
  large,
  fullWidth,
}) => {
  const classes = useStyles();
  return (
    <Button
      color={color}
      variant="contained"
      fullWidth={fullWidth}
      onClick={onClick}
      classes={classes}
      size={large ? "large" : "medium"}
      style={{ textTransform: uppercase ? "uppercase" : "initial" }}
    >
      {children}
    </Button>
  );
};

export default RaisedButton;
