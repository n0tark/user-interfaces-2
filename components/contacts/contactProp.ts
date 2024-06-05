export async function getContacts() {
    const res = await fetch('http://localhost:4000/contacts');
    const data = await res.json();
    return data.contacts;
}

export async function updateContact(id: string, data: any) {
    await fetch(`http://localhost:4000/contacts/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
}

export async function deleteContact(id: string) {
    await fetch(`http://localhost:4000/contacts/${id}`, {
        method: 'DELETE',
    });
}

export async function addContact(data: any) {
    try {
        const res = await fetch('http://localhost:4000/contacts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        if (res.ok) {
            await getContacts();
            const updatedContacts = await res.json();
            localStorage.setItem('contacts', JSON.stringify(updatedContacts));
        } else {
            console.error('Failed to add contact:', res.status);
        }
    } catch (error) {
        console.error('Error adding contact:', error);
    }
}

export async function resetContacts() {
    const res = await fetch('http://localhost:4000/contacts/reset', {
        method: 'POST',
    });
    if (!res.ok) {
        throw new Error('Failed to reset contacts');
    }
    const data = await res.json();
    return data.contacts;
}
