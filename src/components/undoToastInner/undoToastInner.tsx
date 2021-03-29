import { Button } from "components/button/button";
import { Label } from "components/label/label";
import { UndoToastInnerProps } from "./undoToastInner.props";
import { StyledUndoToast } from "./undoToastInner.styled";

export const UndoToastInner: React.FC<UndoToastInnerProps> = ({
  title,
  onUndo,
  closeToast,
}) => {
  return (
    <StyledUndoToast>
      <Label size="sm">{title}</Label>
      <Button
        onClick={() => {
          onUndo();
          closeToast?.();
        }}>
        UNDO
      </Button>
    </StyledUndoToast>
  );
};
