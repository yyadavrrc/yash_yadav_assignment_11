import React from 'react';
import styled from 'styled-components';

interface TableProps {
  backgroundColor: string;
  Disable: boolean;
  price: number;
}

const StyledTable = styled.table<{ backgroundColor: string; Disable: boolean }>`
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  font-family: 'Arial', sans-serif;

  th, td {
    padding: 12px;
    border: 1px solid #ddd;
    text-align: left;
  }

  th {
    background-color: ${(props) => props.backgroundColor};
  }

  tbody tr:hover {
    background-color: ${(props) => (props.Disable ? 'inherit' : '#f5f5f5')};
  }

  td {
    color: ${(props) => (props.Disable ? 'gray' : 'inherit')};
  }

  tfoot {
    font-weight: bold;
    td {
      border-top: 2px solid #ddd;
    }
  }
`;

const Table: React.FC<TableProps> = ({ backgroundColor, Disable, price }) => {
  return (
    <StyledTable Disable={Disable} backgroundColor={backgroundColor}>
      <thead>
        <tr>
          <th>Sr no.</th>
          <th>Product</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{Disable ? "N/A" : "1."}</td>
          <td>{Disable ? "N/A" : "Product"}</td>
          <td>{Disable ? "N/A" : `$${price}`}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colSpan={3}>{Disable ? "Table disabled" : "Table Enabled"}</td>
        </tr>
      </tfoot>
    </StyledTable>
  );
};

export default Table;
