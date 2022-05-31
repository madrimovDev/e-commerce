import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

export const ProductCard = ({ product }) => {
	return (
		<Card
			variant="outlined"
			sx={{
				maxWidth: 345,
				height: '100%',
				display: 'flex',
				flexDirection: 'column',
				position: 'relative',
				transition: (theme) =>
					theme.transitions.create('all', {
						duration: theme.transitions.duration.standard,
						easing: theme.transitions.easing.easeInOut,
					}),
				':hover': {
					transform: 'scale(1.02)',
          boxShadow: theme => theme.shadows[1],
				},
			}}
		>
			<Box
				sx={{
					position: 'absolute',
					top: 10,
					right: 10,
					fontSize: 12,
					p: '1px 5px',
					background: (theme) => theme.palette.primary.main,
					color: 'white',
				}}
			>
				{product.category}
			</Box>
			<CardMedia
				component="img"
				alt="green iguana"
				height="280"
				image={product.image}
				sx={{
					objectFit: 'scale-down',
					objectPosition: 'center',
					width: '100%',
					p: 3,
				}}
			/>
			<CardContent sx={{ flex: 1 }}>
				<Typography gutterBottom variant="h6" component="div">
					{product.title.substring(0, 20)}...
				</Typography>
				<Typography variant="body2" color="text.secondary">
					{product.description.substring(0, 40)}...
				</Typography>
			</CardContent>
			<CardActions sx={{ flex: 1 }}>
				<Button size="small">Share</Button>
				<Button size="small">Learn More</Button>
			</CardActions>
		</Card>
	)
}
