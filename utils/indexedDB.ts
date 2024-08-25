// indexedDB.ts
export const setupDatabase = async () => {
    const db = await new Promise<IDBDatabase>((resolve, reject) => {
      const request = indexedDB.open('myDatabase', 1);
  
      request.onupgradeneeded = (event) => {
        const db = (event.target as IDBOpenDBRequest).result;
        if (!db.objectStoreNames.contains('models')) {
          db.createObjectStore('models', { keyPath: 'id' });
        }
      };
  
      request.onsuccess = (event) => {
        resolve((event.target as IDBOpenDBRequest).result);
      };
  
      request.onerror = (event) => {
        reject((event.target as IDBOpenDBRequest).error);
      };
    });
  
    return db;
  };
  
  export const storeModelInIndexedDB = async (modelData: any) => {
    const db = await setupDatabase();
    const transaction = db.transaction('models', 'readwrite');
    const store = transaction.objectStore('models');
    store.put({ id: 'modelId', model: modelData });
  
    return new Promise<void>((resolve, reject) => {
      transaction.oncomplete = () => resolve();
      transaction.onerror = (event) => reject((event.target as IDBTransaction).error);
    });
  };
  
  export const loadModelFromIndexedDB = async () => {
    const db = await setupDatabase();
    const transaction = db.transaction('models', 'readonly');
    const store = transaction.objectStore('models');
    const request = store.get('modelId');
  
    return new Promise<any>((resolve, reject) => {
      request.onsuccess = () => {
        resolve(request.result?.model);
      };
      request.onerror = (event) => reject((event.target as IDBRequest).error);
    });
  };
  