import React from 'react';

const Item = props => {
    const { title, author, imgage, year } = props.item;
    return (
        <div>
            <div>
                <img src={image} alt={title} />
            </div>
            <div>
                <h3>{title}</h3>
                <p>{author}, {year}.</p>
            </div>
            <button>Marcar favorito</button>

        </div>

    )
};

export default Item;