// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';

// Soft UI Dashboard PRO React components
import Box from "@mui/material/Box"
import SoftTypography from "@mui/material/Typography";
import SoftBadge from "@mui/material/Badge";
import { Chip } from "@mui/material";

function DefaultPricingCard({ badge, specifications }) {
  const renderSpecifications = specifications.map(({label, includes}) => (
    <Box key={label} display="flex" alignItems="center" p={1}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="1.5rem"
        height="1.5rem"
        borderRadius="50%"
        shaodw="md"
        bgColor={includes ? "success" : "secondary"}
        variant="gradient"
        mr={2}
      >
        <SoftTypography variant="button" sx={{ lineHeight: 0 }}>
        {includes?(
            <DoneIcon sx={{ fontWeight: "bold" }}/>
        ):(
            <CloseIcon sx={{ fontWeight: "bold" }}/>
        )}
        </SoftTypography>
      </Box>
      <SoftTypography variant="body2" color="text">
        {label}
      </SoftTypography>
    </Box>
  ));

  return (
    <Card>
      <Box pt={3} pb={2} px={2} textAlign="center">
        <Chip
          color={badge.color}
          label={badge.label}
        />
      </Box>
      <Box pb={3} px={3}>
        {renderSpecifications}
      </Box>
    </Card>
  );
}

// Typechecking props for the DefaultPricingCard
DefaultPricingCard.propTypes = {
  badge: PropTypes.shape({
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "light",
      "dark",
    ]).isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
  specifications: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default DefaultPricingCard;