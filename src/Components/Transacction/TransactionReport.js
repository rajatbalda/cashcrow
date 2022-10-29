import { Button, Container } from '@mui/material'
import React from 'react'
import Paper from '@mui/material/Paper';
import { Table } from 'react-bootstrap';
import { ExportCSV } from './ExportCsv';
import { useEffect } from 'react';
import axios from 'axios';
import { CircularProgress } from '@mui/material';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-left:auto;
  margin-right:37px;
  margin-top:25px;
  margin-bottom:20px;
  width:fit-content;
  display:${window.outerWidth > 450 ? "flex" : "" };
`;
function TransactionReport() {
  const [dataStore, setdataStore] = React.useState([]);
  const [isLoading, setisLoading] = React.useState(true);
  const [option, setoption] = React.useState([]);
  const [optionSelect, setoptionSelect] = React.useState([]);
  const [inputSearch, setinputSearch] = React.useState("");

  const fetch = async () => {
    await axios.get('https://api.cashcrow.in/transaction_report').then(data => {
      setoptionSelect(Object.keys(data.data.result.data[0]))
      console.log(Object.keys(data.data.result.data[0]))
      setisLoading(false)
      if (inputSearch == "" || option == "") {
        setdataStore(data.data.result.data)
      }
      else{
        var data1 = data.data.result.data;
        data1 = data1.filter(item => {
          return (item[option].toString().match(inputSearch))
        })
        console.log(data1)
        if (data1.length === 0) {
          setisLoading(false);
          setdataStore([])
        }
        else {
          setisLoading(false);
          setdataStore(data1);
        }
      }
    })
  }

  useEffect(() => {
    fetch();
  }, [])

  const onSearch = async () => {
    var data = dataStore;
    setisLoading(true);
    fetch();
  }
  return (<>
    <Wrapper>
      <input type="text" style={{ width: "250px",margin:"7px" }} onChange={(e) => { setinputSearch(e.target.value); }} />
      <select onChange={(e) => { setoption(e.target.value); }} style={{margin:"7px"}}>
        <option value="">Select</option>
        {
          optionSelect.map(optionItem => {
            return (
              <option value={optionItem}>{optionItem}</option>
            )
          })
        }
      </select>
      <Button variant='contained' onClick={() => onSearch()} style={{margin:"7px"}}>Filter</Button>
      <ExportCSV csvData={dataStore} fileName="newFile" style={{margin:"7px"}} />
    </Wrapper>
    {
      isLoading ?
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '200px' }}>
          <CircularProgress size={'70px'} /> </div>
        : dataStore.length == 0 ? <>Data not found</> :
        <Container className='mt-4'>
          <h4>Transaction Report</h4>
          <Paper>
            <Table responsive bordered>
              <thead>
                <tr key={"header"}>
                  {Object.keys(dataStore[0]).map((key) => (
                    <th>{key}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {dataStore.reverse().map((item) => (
                  <tr key={item.id}>
                    {Object.values(item).map((val) => (
                      <td>{val}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </Table>
          </Paper>
        </Container>

    }</>
  )
}

export default TransactionReport;