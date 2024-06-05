'use client';
import React, { useState, useEffect, useRef } from 'react';
import {
    addContact,
    deleteContact,
    getContacts,
    updateContact,
    resetContacts,
} from '@/components/contacts/contactProp';

export const ContactList: React.FC = () => {
    const [contacts, setContacts] = useState<any[]>([]);
    const [editContact, setEditContact] = useState<any>(null);
    const [addContactModal, setAddContactModal] = useState(false);
    const [newContact, setNewContact] = useState({ name: '', phones: '' });
    const [deleteNotification, setDeleteNotification] = useState(false);
    const [deletedContact, setDeletedContact] = useState<any>(null);
    const prevEditContact = useRef<any>(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await getContacts();
                setContacts(data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, []);

    const handleEdit = async (contact: any) => {
        setEditContact(contact);
        prevEditContact.current = { ...contact };
    };

    const handleSaveEdit = async () => {
        if (editContact) {
            await updateContact(editContact.id, editContact);
            setEditContact(null);
        }
        const updatedContacts = await getContacts();
        setContacts(updatedContacts);
    };

    const handleCancelEdit = () => {
        if (prevEditContact.current) {
            setEditContact(prevEditContact.current);
            prevEditContact.current = null;
        }
    };

    const handleDelete = async (id: string) => {
        const deletedContact = contacts.find((contact) => contact.id === id);
        await deleteContact(id);
        setContacts(contacts.filter((contact) => contact.id !== id));
        setDeletedContact(deletedContact);
        setDeleteNotification(true);
        setTimeout(() => {
            setDeleteNotification(false);
            setDeletedContact(null);
        }, 3000);
    };

    const handleAdd = async () => {
        try {
            await addContact(newContact);
            const updatedContacts = await getContacts();
            setContacts(updatedContacts);
            setNewContact({ name: '', phones: '' });
            setAddContactModal(false);
        } catch (error) {
            console.error('Error adding contact:', error);
        }
    };

    const handleReset = async () => {
        try {
            const newContacts = await resetContacts();
            setContacts(newContacts);
            console.log(newContacts);
        } catch (error) {
            console.error('Error resetting contacts:', error);
        }
    };

    return (
        <div className="container mx-auto p-4 sm:p-8">
            <h1 className="text-5xl font-black uppercase text-yellow-400 text-center mb-5 ">
                Phone Book
            </h1>
            {deleteNotification && deletedContact && (
                <div className="absolute top-24 right-4 bg-green-400 text-white px-3 py-2 rounded">
                    {deletedContact.name} deleted
                </div>
            )}
            {contacts.length === 0 ? (
                <div className="flex justify-center items-center h-64">
                    <h1 className="text-black font-bold text-3xl">
                        Oops! Seems like you have no contacts.
                    </h1>
                </div>
            ) : (
                <>
                    <div
                        className="bg-white border border-violet-500 ms-auto me-auto overflow-hidden"
                        style={{ width: '80%', borderRadius: '3rem' }}
                    >
                        <table className="ms-auto me-auto min-w-full divide-y divide-dashed divide-gray-200 text-lg">
                            <thead className="bg-gray-50 p-5 divide-x text-base">
                                <tr>
                                    <th className="px-6 ps-10 py-3 text-center font-medium text-gray-500 uppercase tracking-wider">
                                        Name
                                    </th>
                                    <th className="px-6 py-3 text-center font-medium text-gray-500 uppercase tracking-wider">
                                        Phone
                                    </th>
                                    <th className="px-6 py-3 text-center font-medium text-gray-500 uppercase tracking-wider">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white min-w-full divide-y divide-x divide-gray-200">
                                {contacts.map((contact) => (
                                    <tr key={contact.id} className="divide-x">
                                        <td className="py-4 ps-5 text-center ">
                                            {editContact?.id === contact.id ? (
                                                <input
                                                    type="text"
                                                    className="text-sm border border-gray-300 rounded px-4 py-2 mb-2"
                                                    value={
                                                        editContact?.name || ''
                                                    }
                                                    onChange={(e) =>
                                                        setEditContact(
                                                            (
                                                                prevEditContact: any
                                                            ) => ({
                                                                ...prevEditContact,
                                                                name: e.target
                                                                    .value,
                                                            })
                                                        )
                                                    }
                                                />
                                            ) : (
                                                contact.name
                                            )}
                                        </td>
                                        <td className="py-4 text-center">
                                            {editContact?.id === contact.id ? (
                                                <input
                                                    type="text"
                                                    className="text-sm border border-gray-300 rounded px-4 py-2 mb-2"
                                                    value={
                                                        editContact?.phones ||
                                                        ''
                                                    }
                                                    onChange={(e) =>
                                                        setEditContact(
                                                            (
                                                                prevEditContact: any
                                                            ) => ({
                                                                ...prevEditContact,
                                                                phones: e.target
                                                                    .value,
                                                            })
                                                        )
                                                    }
                                                />
                                            ) : (
                                                contact.phones
                                            )}
                                        </td>

                                        <td className="py-4 text-center">
                                            {editContact?.id === contact.id ? (
                                                <>
                                                    <button
                                                        className="bg-green-500 hover:bg-green-700 transition-color duration-500 text-white font-bold py-1 px-2 rounded"
                                                        onClick={handleSaveEdit}
                                                    >
                                                        Save
                                                    </button>
                                                    <button
                                                        className="bg-gray-300 hover:bg-gray-400 transition-color duration-500 text-gray-800 font-bold py-1 px-2 rounded ml-2"
                                                        onClick={
                                                            handleCancelEdit
                                                        }
                                                    >
                                                        Cancel
                                                    </button>
                                                </>
                                            ) : (
                                                <>
                                                    <button
                                                        className="bg-yellow-400 hover:bg-yellow-500 transition-color duration-500 text-white font-bold py-2 px-5 "
                                                        onClick={() =>
                                                            handleEdit(contact)
                                                        }
                                                    >
                                                        Edit
                                                    </button>
                                                    <button
                                                        className="bg-red-500 hover:bg-red-700 transition-color duration-500 text-white font-bold py-2 px-3 ml-2 text-center"
                                                        onClick={() =>
                                                            handleDelete(
                                                                contact.id
                                                            )
                                                        }
                                                    >
                                                        Delete
                                                    </button>
                                                </>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="mb-4">
                        <button
                            className="block mt-5 ms-auto me-auto bg-lime-400 hover:bg-lime-600 transition-color duration-500 text-white font-bold py-4 px-10 rounded-full"
                            onClick={() => setAddContactModal(true)}
                        >
                            Add Contact
                        </button>
                    </div>
                </>
            )}
            {addContactModal && (
                <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
                    <div className="bg-white p-4 rounded sm:w-96 sm:p-8 ">
                        <input
                            className="text-base w-full border border-indigo-300 rounded px-4 py-2 mb-2 outline-none"
                            type="text"
                            placeholder="Name"
                            value={newContact.name}
                            onChange={(e) =>
                                setNewContact({
                                    ...newContact,
                                    name: e.target.value,
                                })
                            }
                        />
                        <input
                            className="text-base w-full border border-indigo-300 rounded px-4 py-2 mb-2 outline-none"
                            type="text"
                            placeholder="Phone"
                            value={newContact.phones}
                            onChange={(e) =>
                                setNewContact({
                                    ...newContact,
                                    phones: e.target.value,
                                })
                            }
                        />
                        <div className="flex justify-center">
                            <button
                                className="bg-lime-400 hover:bg-lime-600 transition-color duration-500 text-white font-bold py-2 px-4 rounded mr-2"
                                onClick={handleAdd}
                            >
                                Add
                            </button>
                            <button
                                className="bg-black hover:bg-slate-800 transition-color duration-500 text-white font-bold py-2 px-4 rounded"
                                onClick={() => setAddContactModal(false)}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ContactList;
