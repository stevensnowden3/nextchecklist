import connectionPromise from '../../models/db';
import { withApiAuthRequired, getSession } from '@auth0/nextjs-auth0';

export default withApiAuthRequired(async (req, res) => {
  const session = getSession(req, res);
  try {
    let connection;
    if (!connectionPromise.connection._socket.readable) {
      connection = await connectionPromise.createConnection();
    } else {
      connection = await connectionPromise;
    }
    // Select all from the database
    const [rows] = await connection.execute(
      'SELECT id,material_name, supplier_name,method_of_inspection,material_received, total_inspected, total_pass, total_failure, delivery_note,sample_inspected, inspection_date FROM checklisttest'
    );

    // Return the rows as a JSON to the client
    res.status(200).json({ success: true, data: rows });
    connection.end();
  } catch (error) {
    res.status(500).json({ success: false, error });
    console.log(error);
  }
});
