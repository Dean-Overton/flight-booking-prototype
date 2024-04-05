import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

export default function FlightSkeleton() {
  return (
    <>
      <Skeleton variant="text" width={300} sx={{ fontSize: '1rem' }} />
      <Stack direction={'row'} spacing={1}>
        <Skeleton variant="rounded" width={60} height={60} />
        <Skeleton variant="rounded" width={400} height={60} />
      </Stack>
    </>
  );
}
