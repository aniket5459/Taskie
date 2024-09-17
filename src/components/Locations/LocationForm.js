import React from 'react';
import Button from '../Button';

const LocationForm = ({ newLocation, handleInputChange, handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit} className="mb-8">
            <div className="flex flex-wrap -mx-2 mb-4">
                <div className="w-full md:w-1/3 px-2 mb-4 md:mb-0">
                    <input
                        type="text"
                        name="name"
                        placeholder="Location name"
                        value={newLocation.name}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border rounded-md"
                        required
                    />
                </div>
                <div className="w-full md:w-1/3 px-2 mb-4 md:mb-0">
                    <input
                        type="text"
                        name="address"
                        placeholder="Address"
                        value={newLocation.address}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border rounded-md"
                        required
                    />
                </div>
                <div className="w-full md:w-1/3 px-2">
                    <input
                        type="number"
                        name="capacity"
                        placeholder="Capacity"
                        value={newLocation.capacity}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border rounded-md"
                        required
                    />
                </div>
            </div>
            <Button type="submit" variant="location">
                {newLocation.id ? "Update Location" : " Create New Location"}
            </Button>
        </form>
    );
};

export default LocationForm;
