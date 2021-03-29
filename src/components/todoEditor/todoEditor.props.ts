export interface TodoEditorProps {
  name: string;
  onChange?(newName: string): void;
}
