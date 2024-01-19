import CircularProgress from '@mui/material/CircularProgress';

export const Loader = () => (
  <div
    style={{
      display: 'flex',
      marginTop: '100px',
    }}
  >
    <div style={{ marginLeft: 'auto', marginRight: 'auto' }}>
      <CircularProgress color="success" />
    </div>
  </div>
);
