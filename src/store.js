import { create } from "zustand";
import { devtools } from "zustand/middleware";

const useInvoicesStore = create(
	devtools((set) => {
		return {
			invoices: [],
			addInvoice: (invoice) => {
				set((state) => {
					return {
						invoices: [...state.invoices, invoice],
					};
				});
			},
		};
	})
);

export default useInvoicesStore;
