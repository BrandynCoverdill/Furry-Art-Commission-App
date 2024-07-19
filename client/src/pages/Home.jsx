// The homepage of the app
import { Box, Container, Typography, Button } from '@mui/material';

export default function Home() {
	// Request data from the server
	const requestData = async () => {
		const data = await fetch(`http://localhost:${8080}`);
		const json = await data.json();
		console.log(json);
	};

	return (
		<Container>
			<Box>
				<Typography>Home</Typography>
				<Box
					sx={{
						width: '100%',
					}}
				>
					<Button variant='contained' fullWidth onClick={() => requestData()}>
						Get server data
					</Button>
				</Box>
			</Box>
		</Container>
	);
}
