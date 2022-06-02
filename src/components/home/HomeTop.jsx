import { SearchOutlined } from "@mui/icons-material";
import {
  Alert,
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  InputBase,
  Paper,
  Skeleton,
} from "@mui/material";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCategories } from "../../contexts/Categories";

const HomeTop = () => {
  const { categories, isError, isLoading } = useCategories();
  const navigation = useNavigate();

  const { id } = useParams();

  const redirectCategory = (category) => {
    if (category === "all") {
      navigation("/");
    } else {
      navigation(`/${category}`);
    }
  };
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: ["strech", "center"],
          gap: 2,
          mt: [3, 6],
          flexDirection: ["column", "row"],
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "stretch",
            justifyContent: "center",
            gap: [1, 2],
            flexWrap: "wrap",
          }}
        >
          {isLoading && (
            <>
              <Skeleton variant="rectangular" width={100} />
              <Skeleton variant="rectangular" width={100} />
              <Skeleton variant="rectangular" width={100} />
              <Skeleton variant="rectangular" width={100} />
            </>
          )}
          {isError && (
            <Alert
              sx={{
                p: "1px 8px",
                width: "fit-content",
              }}
              severity="error"
            >
              Error loading categories list from server :(
            </Alert>
          )}
          {!isLoading && !isError && (
            <>
              {categories.map((category, index) => (
                <Button
                  key={index}
                  onClick={() => redirectCategory(category)}
                  variant={
                      id === category
                      ? "contained"
                      : category === "all" && id === undefined
                      ? "contained"
                      : "outlined"
                  }
                  color="primary"
                  size={"small"}
                >
                  {category}
                </Button>
              ))}
            </>
          )}
        </Box>

        <Paper
          variant="outlined"
          sx={{
            p: "0 4px 0 8px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <InputBase
            placeholder="search"
            sx={{
              flex: 1,
            }}
          />
          <IconButton>
            <SearchOutlined />
          </IconButton>
        </Paper>
      </Box>
      <Divider sx={{ mt: 4 }} />
    </Container>
  );
};

export default HomeTop;
