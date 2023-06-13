import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { Box } from "@mui/material";
import { appOrange } from "@/utils";

export default function Todo({ title, task }: { title: string; task: string }) {
  return (
    <Card
      sx={{
        maxWidth: 345,
        px: 1,
        borderRadius: "20px",
        mt: "1rem",
        backgroundColor: appOrange,
      }}
    >
      <Box display="flex" alignItems="center">
        <Image src="./checkSquare.svg" alt="done icon" width={28} height={27} />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            color="text.secondary"
          >
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {task}
          </Typography>
        </CardContent>
        <Image src="./trashCAn.svg" alt="delete icon" width={28} height={27} />
      </Box>
    </Card>
  );
}
