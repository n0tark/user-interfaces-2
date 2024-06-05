const express = require('express');
const fs = require('fs');
const app = express();
const port = 4000;

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use(express.json());

app.get('/contacts', (req, res) => {
    fs.readFile('contacts.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading contacts file:', err);
            res.status(500).send('Internal Server Error');
            return;
        }
        const contacts = JSON.parse(data);
        res.json(contacts);
    });
});

app.delete('/contacts/:id', (req, res) => {
    fs.readFile('contacts.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading contacts file:', err);
            return res.status(500).send('Internal Server Error');
        }

        let contacts = [];
        try {
            const jsonData = JSON.parse(data);
            contacts = jsonData.contacts;
        } catch (error) {
            console.error('Error parsing contacts JSON:', error);
            return res.status(500).send('Internal Server Error');
        }

        const id = req.params.id;
        contacts = contacts.filter((contact) => contact.id !== id);

        fs.writeFile(
            'contacts.json',
            JSON.stringify({ contacts }, null, 2),
            (err) => {
                if (err) {
                    console.error('Error writing to contacts file:', err);
                    return res.status(500).send('Internal Server Error');
                }
                res.status(204).end();
            }
        );
    });
});

app.post('/contacts', (req, res) => {
    fs.readFile('contacts.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading contacts file:', err);
            return res.status(500).send('Internal Server Error');
        }

        let contacts = [];
        try {
            const jsonData = JSON.parse(data);
            contacts = jsonData.contacts;
        } catch (error) {
            console.error('Error parsing contacts JSON:', error);
            return res.status(500).send('Internal Server Error');
        }

        const newContact = req.body;

        console.log('Received new contact:', newContact);

        if (!newContact.name || !newContact.phones) {
            return res.status(400).send('Name and phones are required');
        }

        newContact.id =
            contacts.length > 0
                ? (parseInt(contacts[contacts.length - 1].id) + 1).toString()
                : '1';

        contacts.push(newContact);

        fs.writeFile(
            'contacts.json',
            JSON.stringify({ contacts }, null, 2),
            (err) => {
                if (err) {
                    console.error('Error writing to contacts file:', err);
                    return res.status(500).send('Internal Server Error');
                }
                res.status(201).json(newContact);
            }
        );
    });
});

app.post('/contacts/reset', (req, res) => {
    fs.readFile('contacts.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading contacts file:', err);
            res.status(500).send('Internal Server Error');
            return;
        }
        let contacts = [];
        try {
            const jsonData = JSON.parse(data);
            contacts = jsonData.contacts;
        } catch (error) {
            console.error('Error parsing contacts JSON:', error);
            return res.status(500).send('Internal Server Error');
        }
        fs.writeFile(
            'contacts.json',
            JSON.stringify({ contacts }, null, 2),
            (err) => {
                if (err) {
                    console.error('Error writing to contacts file:', err);
                    return res.status(500).send('Internal Server Error');
                }
                res.json({ contacts });
            }
        );
    });
});

app.put('/contacts/:id', (req, res) => {
    const id = req.params.id;
    const updatedContact = req.body;

    fs.readFile('contacts.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading contacts file:', err);
            return res.status(500).send('Internal Server Error');
        }

        let contacts = [];
        try {
            const jsonData = JSON.parse(data);
            contacts = jsonData.contacts;
        } catch (error) {
            console.error('Error parsing contacts JSON:', error);
            return res.status(500).send('Internal Server Error');
        }

        const index = contacts.findIndex((contact) => contact.id === id);

        if (index === -1) {
            return res.status(404).send('Contact not found');
        }

        contacts[index] = { ...contacts[index], ...updatedContact };

        fs.writeFile(
            'contacts.json',
            JSON.stringify({ contacts }, null, 2),
            'utf8',
            (err) => {
                if (err) {
                    console.error('Error writing contacts file:', err);
                    return res.status(500).send('Internal Server Error');
                }
                res.json(contacts[index]);
            }
        );
    });
});

app.get('/contacts', (req, res) => {
    fs.readFile('contacts.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading contacts file:', err);
            res.status(500).send('Internal Server Error');
            return;
        }
        const contacts = JSON.parse(data);
        console.log(data);
        res.json(contacts);
    });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
