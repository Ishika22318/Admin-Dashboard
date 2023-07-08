import Accordion  from "@mui/material/Accordion";
import AccordionSummary  from "@mui/material/AccordionSummary";
import AccordionDetails  from "@mui/material/AccordionDetails";
import { Box, useTheme, Typography } from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"

const FAQ = () =>{
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return ( <Box className = "page-content">
        <Header
            title="FAQ"
            subtitle="Frequently Asked Question Page"
        />

        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
            <Typography color = {colors.greenAccent[500]} variant= "h5">
                An Important Question
            </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis eaque accusamus aut debitis, consectetur laborum, maxime dolore nobis consequuntur, nemo asperiores enim explicabo commodi. Ipsum, odio doloribus. Eligendi cumque beatae deleniti veritatis consequatur magni. Aspernatur corporis deserunt minima perspiciatis. Omnis.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
            <Typography color = {colors.greenAccent[500]} variant= "h5">
                An another Important Question
            </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis eaque accusamus aut debitis, consectetur laborum, maxime dolore nobis consequuntur, nemo asperiores enim explicabo commodi. Ipsum, odio doloribus. Eligendi cumque beatae deleniti veritatis consequatur magni. Aspernatur corporis deserunt minima perspiciatis. Omnis.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
            <Typography color = {colors.greenAccent[500]} variant= "h5">
                Favourite Question
            </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis eaque accusamus aut debitis, consectetur laborum, maxime dolore nobis consequuntur, nemo asperiores enim explicabo commodi. Ipsum, odio doloribus. Eligendi cumque beatae deleniti veritatis consequatur magni. Aspernatur corporis deserunt minima perspiciatis. Omnis.
                </Typography>
            </AccordionDetails>
        </Accordion >
        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
            <Typography color = {colors.greenAccent[500]} variant= "h5">
                Random Question
            </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis eaque accusamus aut debitis, consectetur laborum, maxime dolore nobis consequuntur, nemo asperiores enim explicabo commodi. Ipsum, odio doloribus. Eligendi cumque beatae deleniti veritatis consequatur magni. Aspernatur corporis deserunt minima perspiciatis. Omnis.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
            <Typography color = {colors.greenAccent[500]} variant= "h5">
                Final Question
            </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis eaque accusamus aut debitis, consectetur laborum, maxime dolore nobis consequuntur, nemo asperiores enim explicabo commodi. Ipsum, odio doloribus. Eligendi cumque beatae deleniti veritatis consequatur magni. Aspernatur corporis deserunt minima perspiciatis. Omnis.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
            <Typography color = {colors.greenAccent[500]} variant= "h5">
                Timepass Question
            </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis eaque accusamus aut debitis, consectetur laborum, maxime dolore nobis consequuntur, nemo asperiores enim explicabo commodi. Ipsum, odio doloribus. Eligendi cumque beatae deleniti veritatis consequatur magni. Aspernatur corporis deserunt minima perspiciatis. Omnis.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
            <Typography color = {colors.greenAccent[500]} variant= "h5">
                Last Question
            </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis eaque accusamus aut debitis, consectetur laborum, maxime dolore nobis consequuntur, nemo asperiores enim explicabo commodi. Ipsum, odio doloribus. Eligendi cumque beatae deleniti veritatis consequatur magni. Aspernatur corporis deserunt minima perspiciatis. Omnis.
                </Typography>
            </AccordionDetails>
        </Accordion>
    </Box>);
};

export default FAQ;