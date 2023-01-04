import { DEFAULT_CAKES } from '$lib/constants/default-cakes';
import type { CakeDTO } from '$lib/models/cake';
import { openDB, type DBSchema } from 'idb';

export const DB_NAME = 'byMona';

export interface byMonaSchema extends DBSchema {
	cakes: {
		key: number;
		value: CakeDTO;
		indexes: { byName: string; byPrintOrder: number };
	};
}

export async function connect() {
	return await openDB<byMonaSchema>(DB_NAME, 1, {
		upgrade(db) {
			// Create a store of objects
			const store = db.createObjectStore('cakes', {
				// The 'id' property of the object will be the key.
				keyPath: 'id',
				// If it isn't explicitly set, create a value by auto incrementing.
				autoIncrement: true
			});
			// Create an index on the 'date' property of the objects.
			store.createIndex('byName', 'name');
			store.createIndex('byPrintOrder', 'printOrder');
			DEFAULT_CAKES.map((cake) => store.add(cake));
		}
	});
}
