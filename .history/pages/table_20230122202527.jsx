import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';

const DataTableExample = () => {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/getData');
        const json = await response.json();
        setData(json.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const filterData = e => {
    let filteredData = data;
    Object.keys(filters).forEach(field => {
      filteredData = filteredData.filter(val => {
        if (val[field]) {
          return val[field].toString().toLowerCase().indexOf(filters[field].toLowerCase()) !== -1;
        }
      });
    });
    return filteredData;
  };

  return (
    <div>
      <div className="p-grid mb-2 ">
        <div className="p-col-12">
          <div className="p-grid">
            <div className="p-col-6" style={{ textAlign: 'right' }}>
              <InputText
                type="text"
                style={{ backgroundColor: '#b5bd36', color: '#b5bd36' }}
                className="me-2"
                onInput={e => setFilters({ ...filters, material_name: e.target.value })}
                placeholder="Search by material name"
              />

              <InputText
                type="text"
                onInput={e => setFilters({ ...filters, supplier_name: e.target.value })}
                placeholder="Search by supplier name"
              />
            </div>
          </div>
        </div>
      </div>
      <DataTable value={filterData()} paginator rows={4}>
        <Column field="material_name" header="Material Name" headerStyle={{ backgroundColor: '#b5bd36' }} />
        <Column field="supplier_name" header="Supplier Name" headerStyle={{ backgroundColor: '#b5bd36' }} />
        <Column
          field="method_of_inspection"
          header="Method of Inspection"
          headerStyle={{ backgroundColor: '#b5bd36' }}
        />
        <Column field="material_received" header="Contact Number" headerStyle={{ backgroundColor: '#b5bd36' }} />
        <Column field="total_inspected" header="Total Inpected" headerStyle={{ backgroundColor: '#b5bd36' }} />
        <Column field="total_pass" header="Total Pass" headerStyle={{ backgroundColor: '#b5bd36' }} />
        <Column field="total_failure" header="Total Failure" headerStyle={{ backgroundColor: '#b5bd36' }} />
        <Column field="delivery_note" header="Delivery Note" headerStyle={{ backgroundColor: '#b5bd36' }} />
        <Column field="sample_inspected" header="Sample Inspected" headerStyle={{ backgroundColor: '#b5bd36' }} />
        {/* <Column field="delivery_date" header="Delivery Date" headerStyle={{ backgroundColor: '#b5bd36' }} /> */}
        {/* <Column field="inspection_date" header="Inspection Date" headerStyle={{ backgroundColor: '#b5bd36' }} /> */}
        <Column field="filename" header="File Name" headerStyle={{ backgroundColor: '#b5bd36' }} />
        <Column field="remark" header="Remark" headerStyle={{ backgroundColor: '#b5bd36' }} />
        {/* <Column headerStyle={{ backgroundColor: 'yellow !important' }} /> */}
      </DataTable>
    </div>
  );
};

export default DataTableExample;
