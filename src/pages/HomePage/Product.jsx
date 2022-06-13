import { Box, Button, Container, Rating, Typography } from "@mui/material"
import React from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { SkeletonProduct } from "../../components/SkeletonProduct"
import { useProduct } from "../../contexts/Product"

import { LocalMallSharp, ShoppingCartRounded } from "@mui/icons-material"
import { useCart } from "../../contexts/Cart"

export const Product = () => {
	const { product, getProductById } = useProduct()
	const { addToCart } = useCart()
	const { id } = useParams()

	useEffect(() => {
		getProductById(id)
	}, [id])


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
							alignItems: "flex-start",
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
						<Box
							sx={{
								display: "flex",
								gap: 2,
							}}
						>
							<Button
								variant="outlined"
								color="warning"
								size="large"
								startIcon={<LocalMallSharp />}
							>
								Buy Now
							</Button>
							<Button
								variant="contained"
								color="warning"
								size="large"
								onClick={() => {
									addToCart(product.product)
								}}
								startIcon={<ShoppingCartRounded />}
							>
								Add to Cart
							</Button>
						</Box>
					</Box>
				</Box>
			)}
		</Container>
	)
}
