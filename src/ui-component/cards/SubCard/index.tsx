import * as React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
  useTheme
} from "@material-ui/core";

interface SubCardProps {
    title?: string;
    children?: React.ReactNode;
    darkTitle?: boolean;
    contentClass?: string;
    secondary?: string;
}
const SubCard = (props: SubCardProps) => {
const { title, children, darkTitle, contentClass, secondary } = props;
  const theme = useTheme();
  return (
    <Card
      sx={{
        border: "1px solid",
        borderColor: theme.palette.primary.light,
        ":hover": {
          boxShadow: "0 4px 24px 0 rgb(34 41 47 / 10%)"
        }
      }}
    >
      {!darkTitle && title && (
        <CardHeader
          title={<Typography variant="h5">{title}</Typography>}
          action={secondary}
        />
      )}
      {darkTitle && title && (
        <CardHeader title={<Typography variant="h4">{title}</Typography>} />
      )}
      {title && <Divider sx={{ borderColor: "primary.light" }} />}
      <CardContent className={contentClass}>{children}</CardContent>
    </Card>
  );
};
export default SubCard;
