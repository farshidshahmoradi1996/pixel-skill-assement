export interface UndoToastInnerProps {
  title?: string;
  onUndo(): void;
  closeToast?(): void;
}
