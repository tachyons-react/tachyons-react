import React, { PropTypes } from 'react'

const ProductCard = ({ title, description, price, imgSrc }) => {
  return (
		<div className="br2 ba dark-gray b--black-10">
			<img src={imgSrc} className="db w-100 br2 br--top" />
			<div className="pa2 ph3-ns pb3-ns">
				<div className="dt w-100 mt1">
					<div className="dtc">
						<h1 className="f5 f4-ns mv0">{title}</h1>
					</div>
					<div className="dtc tr">
						<h2 className="f5 mv0">{price}</h2>
					</div>
				</div>
				<p className="f6 lh-copy measure mt2 mid-gray">
					{description}
				</p>
			</div>
		</div>
  )
}

ProductCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.string,
	imgSrc: PropTypes.string
}

export default ProductCard
