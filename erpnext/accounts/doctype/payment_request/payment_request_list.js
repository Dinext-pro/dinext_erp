const INDICATORS = {
	"Partially Paid": "orange",
	Cancelled: "red",
	Draft: "gray",
	Failed: "red",
	Initiated: "green",
	Paid: "blue",
	Requested: "green",
};

frappe.listview_settings["Payment Request"] = {
	add_fields: ["status"],
	get_indicator: function (doc) {
<<<<<<< HEAD
<<<<<<< HEAD
		if (doc.status == "Draft") {
			return [__("Draft"), "gray", "status,=,Draft"];
		}
		if (doc.status == "Requested") {
			return [__("Requested"), "green", "status,=,Requested"];
		} else if (doc.status == "Initiated") {
			return [__("Initiated"), "green", "status,=,Initiated"];
		} else if (doc.status == "Partially Paid") {
			return [__("Partially Paid"), "orange", "status,=,Partially Paid"];
		} else if (doc.status == "Paid") {
			return [__("Paid"), "blue", "status,=,Paid"];
		} else if (doc.status == "Cancelled") {
			return [__("Cancelled"), "red", "status,=,Cancelled"];
		}
=======
		return [__(doc.status), INDICATORS[doc.status] || "gray", `status,=,${doc.status}`];
>>>>>>> e1c4d6e1e6 (refactor: Used object to get payment request status indicator)
=======
		if (!doc.status || !INDICATORS[doc.status]) return;

		return [__(doc.status), INDICATORS[doc.status], `status,=,${doc.status}`];
>>>>>>> 37ceb09955 (revert: remove default `Payment Request` indicator color)
	},
};
