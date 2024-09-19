import React, { useState } from 'react';
import LocationForm from './LocationForm';
import Table from '../Table';
import Modal from '../Modal';
import toast from 'react-hot-toast';
import MapComponent from '../MapComponent';

const LocationModule = () => {
  const [locations, setLocations] = useState([]);
  const [newLocation, setNewLocation] = useState({ name: '', address: '', capacity: '' });
  const [editingLocation, setEditingLocation] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handle input change for both creating and editing a location
  const handleInputChange = (e) => {
    if (editingLocation) {
      setEditingLocation({ ...editingLocation, [e.target.name]: e.target.value });
    } else {
      setNewLocation({ ...newLocation, [e.target.name]: e.target.value });
    }
  };

  // Handle submission for new or edited location
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingLocation) {
      // Update existing location
      setLocations(
        locations.map((location) =>
          location.id === editingLocation.id ? editingLocation : location
        )
      );
      setEditingLocation(null); // Reset editing state
      setIsModalOpen(false);
      toast.success("Location Updated Successfully!");
    } else {
      // Add new location
      setLocations([...locations, { ...newLocation, id: locations.length + 1 }]);
    }
    setNewLocation({ name: '', address: '', capacity: '' }); // Reset form
  };

  // Function to handle location selection from MapComponent (for new location)
  const handleLocationSelect = (city, country) => {
    setNewLocation({ ...newLocation, address: `${city}, ${country}` });
  };

  // Function to handle location selection when editing from MapComponent
  const handleEditLocationSelect = (city, country) => {
    setEditingLocation({ ...editingLocation, address: `${city}, ${country}` });
  };

  const columns = [
    { key: 'name', header: 'Name' },
    { key: 'address', header: 'Address' },
    { key: 'capacity', header: 'Capacity' },
  ];

  return (
    <div>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Locations</h1>

        {/* Main form for creating a new location */}
        <LocationForm
          newLocation={newLocation}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
        />

        {/* Map Component for selecting location */}


        {/* Display the table of locations */}
        {locations.length > 0 && (
          <Table
            columns={columns}
            rows={locations}
            onEdit={(location) => {
              setEditingLocation(location); // Set location for editing
              setIsModalOpen(true); // Open modal for editing
            }}
            onDelete={(id) => {
              setLocations(locations.filter((location) => location.id !== id));
              toast.success("Location Deleted Successfully!");
            }}
            actions={{ edit: true, delete: true }}
          />
        )}
        {/* Modal for editing location */}
        {isModalOpen && (
          <Modal
            title="Edit Location"
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          >
            {/* Editing form inside modal */}
            <LocationForm
              newLocation={editingLocation} // Pass the location being edited
              handleInputChange={handleInputChange}
              handleSubmit={handleSubmit}
            />

            {/* Map Component for selecting new location while editing */}
            <MapComponent onLocationSelect={handleEditLocationSelect} />
          </Modal>
        )}
        {!isModalOpen && <div className='mt-10'>
          <MapComponent onLocationSelect={handleLocationSelect} />
        </div>}


      </div>
    </div>
  );
};

export default LocationModule;
