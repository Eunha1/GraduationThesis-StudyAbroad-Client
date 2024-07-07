import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

function BasePagination({ totalPage, onPageChange }) {
  const handleChange = (event, page) => {
    onPageChange(page);
  };
  return (
    <div>
      <Stack spacing={2}>
        <Pagination size='small' count={totalPage} shape="rounded" onChange={handleChange} />
      </Stack>
    </div>
  );
}

export default BasePagination;
