export function pluralize(name, count) {
  if (count === 1) {
    return name;
  }
  return name + 's';
}

export function idbPromise(storeName, method, object) {
  return new Promise((resolve, reject) => {
    const request = window.indexedDB.open('Gamers-Wanted', 1);
    let db, tx, store;
    request.onupgradeneeded = function(event) {
      const db = request.result;
      db.createObjectStore('games', { keyPath: '_id' });
      db.createObjectStore('consoles', { keyPath: '_id' });
      db.createObjectStore('cart', { keyPath: '_id' });
    };

    request.onerror = function(event) {
      console.log('There was an error');
    };

    request.onsuccess = function(event) {
      db = request.result;
      tx = db.transaction(storeName, 'readwrite');
      store = tx.objectStore(storeName);

      db.onerror = function(event) {
        console.log('error', event);
      };

      switch (method) {
        case 'put':
          store.put(object);
          resolve(object);
          break;
        case 'get':
          const all = store.getAll();
          all.onsuccess = function() {
            resolve(all.result);
          };
          break;
        case 'delete':
          store.delete(object._id);
          break;
        default:
          console.log('No valid method');
          break;
      }

      tx.oncomplete = function() {
        db.close();
      };
    };
  });
}
