import { diaryType } from "./index";
import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";

type Props = {
  content: string;
  index: number;
  diarys: diaryType[];
  setDiarys: (x: diaryType[]) => void;
};

const Diarymemo = ({ content }: Props) => {
  return (
    <Card sx={{ minWidth: 275 }} className="mt-4">
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {content}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
          <DeleteIcon />
        </Button>
      </CardActions>
    </Card>
  );
};

export default Diarymemo;
