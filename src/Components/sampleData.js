
const doctorNames = ['Dr. Smith' , 'Dr. Johnson' , 'Dr. Brown' , 'Dr. Wilson' , 'Dr. Taylor' , 'Dr. White' , 'Dr. Harris' , 'Dr. Lewis' , 'Dr. Clark' , 'Dr. Hall']

const sampleData = [
    {
      "orderNo": "ORD001",
      "date": "19/07/2024",
      "patientName": "John Doe",
      "hospitalId": "H123",
      "testName": "Blood Test",
      "doctorName": "Dr. Smith",
      "eta": "21/07/2024",
      "status": "Ready",
      "action": "View"
    },
    {
      "orderNo": "ORD002",
      "date": "18/07/2024",
      "patientName": "Jane Roe",
      "hospitalId": "H124",
      "testName": "X-Ray",
      "doctorName": "Dr. Johnson",
      "eta": "20/07/2024",
      "status": "Pending",
      "action": "View"
    },
    {
      "orderNo": "ORD003",
      "date": "17/07/2024",
      "patientName": "Alice Williams",
      "hospitalId": "H125",
      "testName": "MRI Scan",
      "doctorName": "Dr. Brown",
      "eta": "22/07/2024",
      "status": "Cancelled",
      "action": "View"
    },
    {
      "orderNo": "ORD004",
      "date": "16/07/2024",
      "patientName": "Bob Smith",
      "hospitalId": "H126",
      "testName": "CT Scan",
      "doctorName": "Dr. Wilson",
      "eta": "23/07/2024",
      "status": "Ready",
      "action": "View"
    },
    {
      "orderNo": "ORD005",
      "date": "15/07/2024",
      "patientName": "Carol Jones",
      "hospitalId": "H127",
      "testName": "Ultrasound",
      "doctorName": "Dr. Taylor",
      "eta": "24/07/2024",
      "status": "Pending",
      "action": "View"
    },
    {
      "orderNo": "ORD006",
      "date": "14/07/2024",
      "patientName": "David Lee",
      "hospitalId": "H128",
      "testName": "EKG",
      "doctorName": "Dr. White",
      "eta": "25/07/2024",
      "status": "Ready",
      "action": "View"
    },
    {
      "orderNo": "ORD007",
      "date": "13/07/2024",
      "patientName": "Eva Green",
      "hospitalId": "H129",
      "testName": "Hematology",
      "doctorName": "Dr. Harris",
      "eta": "26/07/2024",
      "status": "Cancelled",
      "action": "View"
    },
    {
      "orderNo": "ORD008",
      "date": "12/07/2024",
      "patientName": "Frank White",
      "hospitalId": "H130",
      "testName": "Blood Culture",
      "doctorName": "Dr. Lewis",
      "eta": "27/07/2024",
      "status": "Pending",
      "action": "View"
    },
    {
      "orderNo": "ORD009",
      "date": "11/07/2024",
      "patientName": "Grace Adams",
      "hospitalId": "H131",
      "testName": "Serology",
      "doctorName": "Dr. Clark",
      "eta": "28/07/2024",
      "status": "Ready",
      "action": "View"
    },
    {
      "orderNo": "ORD010",
      "date": "10/07/2024",
      "patientName": "Henry Scott",
      "hospitalId": "H132",
      "testName": "Biopsy",
      "doctorName": "Dr. Hall",
      "eta": "29/07/2024",
      "status": "Pending",
      "action": "View"
    }
  ]

  
//   const map = Array(...new Set(sampleData.map(obj => obj.status))) 
//   console.log(map)

export {sampleData , doctorNames}
  