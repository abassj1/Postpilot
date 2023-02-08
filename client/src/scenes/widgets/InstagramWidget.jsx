import {

    Divider,
    Typography,
    useTheme,
    Button,
    SvgIcon,

} from "@mui/material";

import FlexBetween from "components/FlexBetween";
import PostImage from "components/PostImage";
import WidgetWrapper from "components/WidgetWrapper";
import InstagramIcon from "@mui/icons-material/Instagram";
import FlexCol from "components/FlexCol";
import FlexClose from "components/FlexClose";

const InstagramWidget = ({ buttonLink }) => {

    const { palette } = useTheme();

    return (
        <WidgetWrapper sx={{ maxWidth: "20rem", minHeight: "16rem"}}>

            <FlexClose gap="0.25rem">
                <PostImage image="https://pbs.twimg.com/profile_images/1601601952181362693/aiU2RPoE_400x400.jpg" />
                <FlexCol direction="column">
                    <Typography variant="h6">User Name</Typography>
                    <Typography variant="subtitle2">@userTag</Typography>
                </FlexCol>
            </FlexClose>
            
            <Divider sx={{ margin: "1.25rem 0", opacity: "0" }} />

            <Typography variant="body1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>

            <Divider sx={{ margin: "1.25rem 0", opacity: "0" }} />

            <FlexBetween marginLeft={6} marginRight={6}>

                <SvgIcon component={InstagramIcon} inheritViewBox />

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

        </WidgetWrapper>
    );
};

export default InstagramWidget;
