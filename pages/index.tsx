import React, { useState } from "react";

import styles from "@/styles/Home.module.css";
import Header from "./header";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material/styles";
import { Box, Button, Typography, TextField, Stack } from "@mui/material";
import Diarymemo from "./diarymemo";
import PostAddIcon from "@mui/icons-material/PostAdd";

export type diaryType = {
  content: string;
};
const theme = createTheme({
  palette: {
    primary: {
      main: "rgba(13, 71, 161, 0.5)",
    },
  },
});
const demoData = [
  {
    content: "３月３１日　課題をやった",
  },
  {
    content: "４月１日ご飯を作った",
  },
  {
    content: "４月２日　洗濯物を取り込んだ",
  },
];

export default function Home() {
  const [inputdiary, setInputdiary] = useState("");
  const [diarys, setDiarys] = useState(demoData);
  const handleAddTodo = () => {
    if (inputdiary === "") {
      alert("空文字列は追加できません!!");
    } else {
      setDiarys([
        ...diarys,
        {
          content: inputdiary,
        },
      ]);
    }
    setInputdiary("");
  };
  return (
    <div className={styles.container}>
      <ThemeProvider theme={theme}>
        <Header theme={theme} />

        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h4" className="text-slate-100 mt-4">
            一行日記
          </Typography>
        </Box>

        <TextField
          type="text"
          value={inputdiary}
          onChange={(e) => {
            setInputdiary(e.target.value);
          }}
          className="bg-white"
        />
        <Button onClick={handleAddTodo}>
          <PostAddIcon />
        </Button>

        <ul style={{ listStyle: "none" }}>
          {diarys.map((item, index) => {
            console.log(index);
            return (
              <li key={index}>
                <Diarymemo
                  content={item.content}
                  index={index}
                  diarys={diarys}
                  setDiarys={setDiarys}
                />
              </li>
            );
          })}
        </ul>
      </ThemeProvider>
    </div>
  );
}
