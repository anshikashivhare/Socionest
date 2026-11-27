export const society = {
  name: 'Maple Residency',
  buildings: [
    { building_id: 'BLD001', building_name: 'Maple Residency', number_of_floors: 10 },
    { building_id: 'BLD002', building_name: 'Cedar Residency', number_of_floors: 8 }
  ],
  residents: [
    { resident_id: 'RES001', full_name: 'Aarav Sharma', flat_id: 'FLT001', status: 'active' },
    { resident_id: 'RES002', full_name: 'Diya Verma', flat_id: 'FLT002', status: 'active' }
  ],
  workers: [
    { worker_id: 'WRK001', full_name: 'Mohan Electrician', service: 'Electrical', verification_status: 'verified', rating: 4.8 },
    { worker_id: 'WRK002', full_name: 'Sana Plumbing', service: 'Plumbing', verification_status: 'pending', rating: 4.5 }
  ],
  serviceRequests: [
    { request_id: 'SRQ001', resident_id: 'RES001', service: 'Electrical', description: 'Ceiling fan not working', status: 'open', priority: 'normal' },
    { request_id: 'SRQ002', resident_id: 'RES002', service: 'Plumbing', description: 'Kitchen sink leaking', status: 'assigned', priority: 'high' }
  ],
  bills: [
    { bill_id: 'BIL001', flat_id: 'FLT001', description: 'November maintenance', amount: 2500, status: 'unpaid' },
    { bill_id: 'BIL002', flat_id: 'FLT002', description: 'November maintenance', amount: 2500, status: 'paid' }
  ],
  announcements: [
    { announcement_id: 'ANN001', title: 'Water Tank Cleaning', message: 'Water supply may be interrupted from 10 AM to 12 PM.', priority: 'high' }
  ],
  visitorLogs: [
    { visitor_log_id: 'VIS001', visitor_name: 'Kabir Singh', flat_id: 'FLT001', purpose: 'Delivery', approval_status: 'approved' }
  ],
  alerts: [
    { alert_id: 'ALT001', alert_type: 'low_water', message: 'Water level is below the configured threshold', severity: 'medium', status: 'open' }
  ]
};
