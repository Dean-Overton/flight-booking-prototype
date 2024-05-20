import { Grid, Box } from "@mui/material";
import ClassCard from "./ClassCard";

export default function ClassCards() {
  return (
    <Box mt={3} mb={3} zIndex={10} px={{ xs: 1, sm: 0 }}>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} lg={4}>
          <ClassCard
            badge={{ color: "primary", label: "Economy" }}
            specifications={[
              { label: "7 KG luggage", includes: true },
              { label: "In-flight Entertainment", includes: true },
              { label: "Lounge Access", includes: false },
            ]}
          />
        </Grid>
        <Grid item xs={12} lg={4}>
          <ClassCard
            badge={{ color: "secondary", label: "Business" }}
            specifications={[
              { label: "7 KG luggage", includes: true },
              { label: "In-flight Entertainment", includes: true },
              { label: "Lounge Access", includes: true },
            ]}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
