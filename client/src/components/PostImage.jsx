import { styled } from "@mui/system";

const PostImage = styled("div")(({ }) => ({
    backgroundImage: "url('https://pbs.twimg.com/media/FjTY2rEWYAITzqr?format=jpg&name=4096x4096')",
    borderRadius: "0.75rem",
    backgroundSize: "cover",
    backgroundPosition: "center",
}));

export default PostImage;
