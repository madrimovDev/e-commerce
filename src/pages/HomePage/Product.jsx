import { Box, Button, Container, Rating, Typography } from "@mui/material"
import React from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { SkeletonProduct } from "../../components/SkeletonProduct"
import { useProduct } from "../../contexts/Product"

import { LocalMallSharp } from "@mui/icons-material"

export const Product = () => {
	const { product, getProductById } = useProduct()
	const { id } = useParams()

	useEffect(() => {
		getProductById(id)
	}, [id])

	console.log(product.product)

	return (
		<Container
			maxWidth="xl"
			sx={{
				mt: 10,
			}}
		>
			{product.isLoading && <SkeletonProduct />}

			{product.product && !product.isLoading && (
				<Box
					sx={{
						display: "flex",
						alignItems: "stretch",
						gap: 10,
					}}
				>
					<Box
						sx={{
							width: 400,
						}}
						component="img"
						src={product.product.image}
					/>

					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							gap: 3,
						}}
					>
						<Typography variant="h5">{product.product.title}</Typography>
						<Typography variant="body1">
							{product.product.description}
						</Typography>
						<Typography variant="h4" color="green">
							${product.product.price}
						</Typography>
						<Box
							sx={{
								display: "flex",
								alignItems: "center",
								gap: 1,
							}}
						>
							<Rating
								name="read-only"
								value={product.product.rating?.rate}
								readOnly
							/>
							-<Typography>{product.product.rating?.count}</Typography>
						</Box>
						<Button variant="contained" color="warning" size="large" startIcon={<LocalMallSharp />}>Buy</Button>
					</Box>
				</Box>
			)}
		</Container>
	)
}
