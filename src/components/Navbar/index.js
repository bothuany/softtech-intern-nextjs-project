import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AdbIcon from "@mui/icons-material/Adb";
import {
  Grid,
  IconButton,
  Paper,
  Popper,
  Grow,
  ClickAwayListener,
  MenuList,
  MenuItem,
  Stack,
  Tooltip,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Button } from "@mui/material";
import dir from "@/config/dir.json";
import { useRouter } from "next/router";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);
  const anchorRef = React.useRef(null);
  const router = useRouter();

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch(dir.api + "products/categories/");
      const categoryData = await response.json();
      setData(categoryData);
    };
    fetchCategories();
  }, []);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  const handleMouseLeave = () => {
    setOpen(false);
  };

  return (
     <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Stack spacing={2} direction="row">
            <AdbIcon sx={{ display: { xs: "flex" }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
                display: { xs: "none", sm: "block"}
              }}
            >
              Softtech Market
            </Typography>

            <Box>
              <Button variant="outlined" color="inherit" onClick={()=>router.push("/products")}>
                Products
              </Button>
            </Box>
            <Box>
              <div onMouseLeave={handleMouseLeave}>

                <Button
                  variant="outlined"
                  color="inherit"
                  sx={{ marginBottom: { xs: 1, sm: 0 }, marginRight: 1 }}
                  onClick={() => router.push("/products")}
                >
                  Products
                </Button>
                <div onMouseLeave={handleMouseLeave}>
                  <Button
                    ref={anchorRef}
                    aria-controls={open ? "menu-list-grow" : undefined}
                    aria-haspopup="true"
                    onClick={handleToggle}
                    variant="outlined"
                    color="inherit"
                  >
                    Categories
                  </Button>
                  <Popper
                    open={open}
                    anchorEl={anchorRef.current}
                    role={undefined}
                    transition
                    disablePortal
                    sx={{ zIndex: 2000 }}
                  >
                    {({ TransitionProps, placement }) => (
                      <Grow
                        {...TransitionProps}
                        style={{
                          transformOrigin:
                            placement === "bottom"
                              ? "center top"
                              : "center bottom",
                        }}
                      >
                        <Paper>
                          <ClickAwayListener onClickAway={handleClose}>
                            <MenuList autoFocusItem={open} id="menu-list-grow">
                              {data?.map((category, index) => (
                                <MenuItem
                                  key={index}
                                  onClick={(event) => {
                                    handleClose(event);
                                    router.push(
                                      `/products/category/${category}`
                                    );
                                  }}
                                >
                                  {category}
                                </MenuItem>
                              ))}
                            </MenuList>
                          </ClickAwayListener>
                        </Paper>
                      </Grow>
                    )}
                  </Popper>
                </div>
                <Tooltip title="Go Cart" placement="right">
                  <IconButton
                    size="small"
                    aria-label="display more actions"
                    edge="end"
                    color="inherit"
                    onClick={() => router.push("/cart")}
                  >
                    <ShoppingCartIcon />
                  </IconButton>
                </Tooltip>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
