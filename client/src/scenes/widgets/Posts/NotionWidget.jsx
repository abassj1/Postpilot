import {

    Divider,
    Typography,
    useTheme,
    Button,

} from "@mui/material";

import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";
import NotionLogo from "./NotionLogo.svg";

const NotionWidget = ({ buttonLink }) => {

    const { palette } = useTheme();

    return (
        <WidgetWrapper sx={{maxWidth: "20rem", minHeight: "16rem"}}>

            <Typography variant="h6" style={{ textAlign: "center" }}>Title Example</Typography>
            
            <Divider sx={{ margin: "1.25rem 0", opacity: "0" }} />

            <Typography variant="body1" style={{ textAlign: "center" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>

            <Divider sx={{ margin: "1.25rem 0", opacity: "0" }} />

            <FlexBetween marginLeft={6} marginRight={6}>

                <img src={NotionLogo}/>

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

export default NotionWidget;
