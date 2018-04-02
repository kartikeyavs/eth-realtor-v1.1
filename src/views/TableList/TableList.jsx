import React from "react";
import { Grid } from "material-ui";

import { RegularCard, Table, ItemGrid } from "components";

function TableList({ ...props }) {
	const default_  = Array.apply(null, Array(7)).map(String.prototype.valueOf,"N/A")
  return (
    <Grid container>
      <ItemGrid xs={12} sm={12} md={12}>
        <RegularCard
          cardTitle="Ingress Transactions"
          cardSubtitle="Here is a subtitle for this table"
          content={
            <Table
              tableHeaderColor="primary"
              tableHead={["From", "To", "Time", "Value", "gasPrice","gas", "blockNumber"]}
              tableData={[default_]}
            />
          }
        />
      </ItemGrid>
      <ItemGrid xs={12} sm={12} md={12}>
        <RegularCard
          //plainCard
          cardTitle="Egress Transactions"
          cardSubtitle="Here is a subtitle for this table"
          content={
            <Table
              tableHeaderColor="primary"
              tableHead={["From", "To", "Time", "Value", "gasPrice","gas", "blockNumber"]}
              tableData={[default_

              ]}
            />
          }
        />
      </ItemGrid>
    </Grid>
  );
}

export default TableList;
