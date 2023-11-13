// uploadDataToStorage.tsx

import * as admin from 'firebase-admin';
import * as fs from 'fs';

// Replace with your actual service account key path
const serviceAccountPath = '/Users/jeremydelorme/Documents/WEBSITES/react-ts-mui-website/my-ts-react-website-firebase-adminsdk-2yd50-a6a01391c6.json';
const serviceAccount = require(serviceAccountPath);

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: 'my-ts-react-website.appspot.com',
});

const bucket = admin.storage().bucket();

const uploadJSONToStorage = async (fileName: string, jsonData: any) => {
    const jsonString = JSON.stringify(jsonData);

    const file = bucket.file(fileName);

    await file.save(jsonString, {
        metadata: {
            contentType: 'application/json',
        },
    });

    console.log(`JSON data uploaded to storage as ${fileName}`);
};

// Example usage
const jsonData = { key: 'value' };
const fileName = 'example.json';

uploadJSONToStorage(fileName, jsonData);
