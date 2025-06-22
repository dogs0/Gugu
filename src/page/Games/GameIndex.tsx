import { Card, CardContent, Box } from '@mui/material'
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
export default function Home(){
  const TCard = styled(Card)(({ theme }) => ({
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'top',
    justifyContent: 'center',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[3],
  }));
  // return (<>还没写,Bug还没改完qwq</>);
  return (
            <Box>
              <Link to="/games/">
            <TCard>
                <CardContent>
                  <h3>什么都没写</h3>
                </CardContent>
            </TCard>
            </Link>
            </Box>
            
    );
}