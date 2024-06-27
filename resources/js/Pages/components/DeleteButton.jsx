import React from 'react';
import { Inertia } from '@inertiajs/inertia';

function DeleteButton({ deleteUrl }) {
    const handleDelete = (e) => {
        e.preventDefault();
        if (window.confirm('Are you sure you want to delete this post?')) {
            Inertia.delete(deleteUrl);
        }
    };

    return (
        <button onClick={handleDelete} className='btn btn-danger py-0'>
            Delete
        </button>
    );
}

export default DeleteButton;
