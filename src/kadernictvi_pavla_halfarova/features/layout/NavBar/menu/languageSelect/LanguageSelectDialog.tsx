import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';

interface IProps {
  open: boolean;
}

const LanguageSelectDialog = (props: IProps) => {
  return (
    <Dialog open={props.open}>
      <DialogTitle></DialogTitle>
    </Dialog>
  );
};

export default LanguageSelectDialog;
