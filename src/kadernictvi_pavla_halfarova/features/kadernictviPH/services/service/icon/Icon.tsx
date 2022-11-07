import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

interface IProps {
  icon: string;
  iconDescription: string;
  description: string;
}

const Icon = (props: IProps) => {
  // Consts
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "40px 0 20px 0",
      }}
    >
      <Box
        component='img'
        src={props.icon}
        alt={props.iconDescription}
        loading='lazy'
        sx={{
          height: "80px",
        }}
      />
      <Typography
        variant='h5'
        sx={{
          fontWeight: "bold",
          color: theme.palette.common.third.main,
          marginTop: "30px",
        }}
      >
        {props.description}
      </Typography>
    </Box>
  );
};

export default Icon;
