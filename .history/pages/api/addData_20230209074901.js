import connectionPromise from '../../models/db';
import { withApiAuthRequired, getSession } from '@auth0/nextjs-auth0';

export default withApiAuthRequired(async (req, res) => {
  const session = getSession(req, res);
  try {
    const connection = await connectionPromise;
    await connection.connect();

    // Insert data into the database
    try {
      console.log(req.body.delivery_date);
      // console.log(req.body.inspection_technique.name);

      const [result] = await connection.execute(
        'INSERT INTO checklisttest (material_name,supplier_name,method_of_inspection,inspection_technique,location,material_received, total_inspected, total_pass, total_failure, delivery_note,sample_inspected, inspection_date, delivery_date, remark,created_by) VALUES (?, ?,?,?,?,?,?,?,?,?,?,?,?,?,? )',
        [
          req.body.material_name.name,
          req.body.supplier_name,
          req.body.method_of_inspection.name,
          req.body.inspection_technique.name,
          req.body.location,
          req.body.material_received,
          req.body.total_inspected,
          req.body.total_pass,
          req.body.total_failure,
          req.body.delivery_note,
          req.body.sample_inspected, //formally invoiceNo
          req.body.inspection_date,
          req.body.delivery_date,
          req.body.remark,
          req.body.created_by
        ]
      );
      if (result) {
        res.status(200).json({ success: true, message: 'Checklist Saved!', result });
        return;
      } else {
        res.status(500).json({ success: false, message: 'Error adding data to the database' });
      }
    } catch (err) {
      console.log(delivery_date);
      console.log('trying to connect');
      res.status(500).json({ success: false, error: 'Failed to execute query' });
      console.log(err);
      return;
    }
    res.status(200).json({ success: true, message: 'Checklist Saved!', result });
    console.log('Success');
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error });
  }
  setTimeout(() => {
    connection.end();
  }, 3000);
});
