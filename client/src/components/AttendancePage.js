import React, { useState } from 'react';
import QRCode from 'qrcode.react';

const AttendancePage = () => {
  const [attendanceCode, setAttendanceCode] = useState('');

  const handleScan = () => {
    alert('QR scanning not implemented yet!');
  };

  return (
    <div>
      <h2>Mark Attendance</h2>
      <p>Scan your QR code or enter the code manually:</p>
      <input
        type="text"
        value={attendanceCode}
        onChange={e => setAttendanceCode(e.target.value)}
        placeholder="Enter attendance code"
      />
      <button onClick={handleScan} style={{marginLeft: 10}}>Scan QR</button>

      <div style={{marginTop: 20}}>
        <h3>Your QR Code</h3>
        <QRCode value="sample-attendance-code" />
      </div>
    </div>
  );
};

export default AttendancePage;