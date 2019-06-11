from __future__ import unicode_literals
from frappe import _

def get_data():
	return {
		'fieldname': 'shift',
		'transactions': [
			{
				'items': ['Attendance', 'Employee Checkin', 'Shift Request', 'Shift Assignment']
			}
		]
	}
