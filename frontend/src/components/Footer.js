import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "../assets/styles/footer.css";

const CopyrightFooter = () => {
  return (
    <Box component="footer" className="footer">
      <Typography variant="body2">
        © {new Date().getFullYear()} My HealhFromHome. All rights reserved.
      </Typography>
    </Box>
  );
};

export default CopyrightFooter;
