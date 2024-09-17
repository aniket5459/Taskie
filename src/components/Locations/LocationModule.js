import React, { useState } from 'react';
import LocationForm from './LocationForm';
import Table from '../Table';
import Modal from '../Modal';
import toast from 'react-hot-toast';

const LocationModule = () => {
  const [locations, setLocations] = useState([]);
  const [newLocation, setNewLocation] = useState({ name: '', address: '', capacity: '' });
  const [editingLocation, setEditingLocation] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInputChange = (e) => {
    if (editingLocation) {
      setEditingLocation({ ...editingLocation, [e.target.name]: e.target.value });
    } else {
      setNewLocation({ ...newLocation, [e.target.name]: e.target.value });
    }
  };

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
      toast.success("Location Updated Successfully !")
    } else {
      // Add new location
      setLocations([...locations, { ...newLocation, id: locations.length + 1 }]);
    }
    setNewLocation({ name: '', address: '', capacity: '' });
  };

  const columns = [
    { key: 'name', header: 'Name' },
    { key: 'address', header: 'Address' },
    { key: 'capacity', header: 'Capacity' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Locations</h1>

      <LocationForm
        newLocation={newLocation}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />

      {locations.length > 0 && (
        <Table
          columns={columns}
          rows={locations}
          onEdit={(location) => {
            setEditingLocation(location);
            setIsModalOpen(true); // Open modal for editing
          }}
          onDelete={(id) => {
            setLocations(locations.filter((location) => location.id !== id));
            toast.success("Location Deleted Successfully !")
          }}
          actions={{ edit: true, delete: true }}
        />
      )}

      {isModalOpen && (
        <Modal
          title="Edit Location"
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        >
          <LocationForm
            newLocation={editingLocation} // Pass the location to be edited
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
          />
        </Modal>
      )}
    </div>
  );
};

export default LocationModule;
