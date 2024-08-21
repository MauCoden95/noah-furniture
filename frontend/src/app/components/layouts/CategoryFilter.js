import React from 'react';

export const CategoryFilter = ({ changeCategory }) => {
    const categories = ['Todos', 'Sillas', 'Almacenamiento', 'Camas', 'Accesorios', 'Sofas', 'Oficinas'];

    return (
        <div className="w-auto flex flex-wrap items-center mt-5 md:mt-0">
            {categories.map((cat) => (
                <button
                    key={cat}
                    onClick={() => changeCategory(cat === 'Todos' ? '' : cat)}
                    className="mx-2 md:mx-3 text-sm md:text-base hover:text-orange-500 duration-300"
                >
                    {cat}
                </button>
            ))}
        </div>
    );
};
