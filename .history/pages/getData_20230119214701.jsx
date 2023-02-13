import { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';

const MyComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('/api/getData');
        setData(response.data.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  // Render the data
  return (
    <div>
      <table className="table table-bordered">
        <thead>
          <tr style={{ background: '#b5bd36' }}>
            <td colSpan="11" className="text-center text-white">
              <h2> Materials Inspected and Approved</h2>
            </td>
          </tr>
          <tr>
            <td scope="col">material</td>
            <td scope="col">Supplier</td>
            <td scope="col">method_of_inspection</td>
            <td scope="col">material_received</td>
            {/* <th scope="col">total_inspected</th> */}
            {/* <th scope="col">total_pass</th> */}
            <th scope="col">total_failure</th>
            <th scope="col">delivery_note</th>
            <th scope="col">sample_inspected</th>
            <th scope="col">inspection_date</th>
            <th scope="col">delivery_date</th>
            <th scope="col">filename</th>
            <th scope="col">remark</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.material_name}</td>
              <td>{row.supplier_name}</td>
              <td>{row.method_of_inspection}</td>
              <td>{row.material_received}</td>
              {/* <td>{row.total_inspected}</td> */}
              {/* <td>{row.total_pass}</td> */}
              <td>{row.total_failure}</td>
              <td>{row.delivery_note}</td>
              <td>{row.sample_inspected}</td>
              <td>{moment(row.delivery_date).format(' MMMM, Do hA')}</td>

              <td>{row.inspection_date}</td>
              <td>{row.filename}</td>
              <td>{row.remark}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyComponent;
