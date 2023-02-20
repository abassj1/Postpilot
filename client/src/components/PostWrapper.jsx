import { Box } from "@mui/material";
import { styled } from "@mui/system";

const PostWrapper = styled(Box)(({ }) => ({
    padding: "1.5rem 1.5rem 0.75rem 1.5rem",
    borderRadius: "0.75rem",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundColor: "rgba(22,32,42,.5)",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.3)",
    backdropFilter: "blur(5px)",
    webkitBackdropFilter: "blur(5px)",
    border: "1px solid rgba(255, 255, 255, 0.3)",
    borderRightWidth: "0px",
    borderBottomWidth: "0px",
}));

export default PostWrapper;
