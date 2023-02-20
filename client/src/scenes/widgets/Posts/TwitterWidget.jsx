import {

    Divider,
    Typography,
    useTheme,
    Button,
    SvgIcon,

} from "@mui/material";

import FlexBetween from "components/FlexBetween";
import PostWrapper from "components/PostWrapper";
import TwitterIcon from "@mui/icons-material/Twitter";
import FlexCol from "components/FlexCol";
import FlexClose from "components/FlexClose";
import PostUserImage from "components/PostUserImage";
import PostImage from "components/PostImage";

const TwitterWidget = ({ buttonLink }) => {

    const { palette } = useTheme();

    return (
        <PostImage  sx={{ maxWidth: "20rem", minHeight: "16rem"}}>

        <PostWrapper sx={{ maxWidth: "20rem", minHeight: "16rem"}}>
            

            <FlexClose sx={{justifyContent: "center", alignItems: "center"}} gap="0.25rem">
                <PostUserImage image="https://pbs.twimg.com/profile_images/1601601952181362693/aiU2RPoE_400x400.jpg" />
                <FlexCol direction="column">
                    <Typography variant="h6">User Name</Typography>
                    <Typography variant="subtitle2">@userTag</Typography>
                </FlexCol>
            </FlexClose>
            
            <Divider sx={{ margin: "1.25rem 0", opacity: "0" }} />

            <Typography variant="body1" style={{ textAlign: "center" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>

            <Divider sx={{ margin: "1.25rem 0", opacity: "0" }} />

            <FlexBetween marginLeft={6} marginRight={6}>

                <SvgIcon component={TwitterIcon} inheritViewBox />

                <Button href={buttonLink}
                    variant="contained"
                    sx={{
                        color: palette.background.alt,
                        backgroundColor: palette.primary.main,
                        borderRadius: "3rem",
                    }}
                >
                VIEW
                </Button>
                    
                <Typography variant="subtitle2">1h</Typography>

            </FlexBetween>
        </PostWrapper>
        </PostImage>
    );
};

export default TwitterWidget;
