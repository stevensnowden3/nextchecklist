import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import moment from 'moment';

import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0/client';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';
import { setActiveIndex } from '../components/setIndexSteps';
import { itemsList } from '../components/dataitems';
import { Steps } from 'primereact/steps';
import { ROLES } from '../components/dataitems';
import PermissionDeny from '../components/PermissionDeny';
import Link from 'next/link';
import { Button } from 'primereact/button';
const materialsDataTable = () => {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({});
  const [inspection_date, z] = useState('');
  const { user, isLoading } = useUser();

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
        let match = false;
        Object.keys(val).forEach(dataField => {
          if (
            val[dataField] &&
            typeof val[dataField] === 'string' &&
            val[dataField].toLowerCase().includes(filters[field].toLowerCase())
          ) {
            match = true;
          }
        });
        return match;
      });
    });

    return filteredData;
  };

  // insert steps
  const [activeIndex, setActiveStep] = useState(1);
  useEffect(() => {
    setActiveIndex(user, setActiveStep);
  }, [user]);
  const items = itemsList.map(item => item);
  const renderAction = (rowData, column) => {
    return (
      <Link href={{ pathname: '/materialView', query: { id: rowData.id } }}>
        <Button label="" icon="pi pi-eye" style={{ background: '#04392a', color: '#fff', fontSize: '12px' }} />
      </Link>
    );
  };

  return (
    <>
      {isLoading && <Loading />}
      {(user && user[ROLES].includes('TCO')) || user[ROLES].includes('QAM') || user[ROLES].includes('LWM') ? (
        <div>
          <div className="container-fluid">
            <h5 className="text-center p-2 mb-2" style={{ background: '#b5bd36', color: '#fff' }}>
              MATERIALS INSPECTED AND APPROVED
            </h5>
          </div>

          <div className="m-1" style={{ textAlign: 'right' }}>
            <InputText
              type="text"
              style={{ backgroundColor: '#fff', color: '#04392a' }}
              className="me-2"
              onInput={e => setFilters({ ...filters, filter: e.target.value })}
              placeholder="Search all fields"
            />
          </div>

          <DataTable value={filterData()} paginator rows={7} responsive>
            <Column
              field="material_name"
              header="Material&nbsp;Name"
              headerStyle={{ backgroundColor: '#04392a', color: '#fff' }}
            />
            <Column
              field="supplier_name"
              header="Supplier&nbsp;Name"
              headerStyle={{ backgroundColor: '#04392a', color: '#fff' }}
            />
            <Column
              field="method_of_inspection"
              header="Inspection&nbsp;Method"
              headerStyle={{ backgroundColor: '#04392a', color: '#fff' }}
            />
            <Column
              field="inspection_technique"
              header="Inspection&nbsp;Technique"
              headerStyle={{ backgroundColor: '#04392a', color: '#fff' }}
            />
            <Column
              field="delivery_note"
              header="Delivery&nbsp;Note"
              headerStyle={{ backgroundColor: '#04392a', color: '#fff' }}
            />
            <Column
              field="created_at"
              header="Delivery&nbsp;Date"
              headerStyle={{ backgroundColor: '#04392a', color: '#fff' }}
            />
            <Column header="Action" headerStyle={{ backgroundColor: '#04392a', color: '#fff' }} body={renderAction} />
          </DataTable>
          <div className="m-3">
            <Steps model={items} activeIndex={activeIndex} onSelect={e => setActiveIndex(e.index)} readOnly={true} />
          </div>
        </div>
      ) : (
        <PermissionDeny />
      )}
    </>
  );
};

export default withPageAuthRequired(materialsDataTable, {
  onRedirecting: () => <Loading />,
  onError: error => <ErrorMessage>{error.message}</ErrorMessage>
});
