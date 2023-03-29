import { create } from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";
import { data } from "./data";

const useInvoicesStore = create((set, get) => {
	return {
		invoices: [...data],
		addInvoice: (invoice) => {
			set((state) => {
				return {
					invoices: [...state.invoices, invoice],
				};
			});
		},
	};
});

if (process.env.NODE_ENV === "development") {
	mountStoreDevtool("Invoices Store", useInvoicesStore);
}

export default useInvoicesStore;
