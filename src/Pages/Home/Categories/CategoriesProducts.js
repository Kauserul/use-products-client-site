import React from 'react';
import { Link } from 'react-router-dom';

const CategoriesProducts = ({ product }) => {
    const { name, img, category } = product

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure>
                <img style={{height: '300px'}} src={img} alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-center">{name}</h2>

                <div className="card-actions justify-end">
                    <Link to={`/products/${category}`}><button className="btn btn-primary">More</button></Link>
                </div>
            </div>
        </div>
    );
};

export default CategoriesProducts;