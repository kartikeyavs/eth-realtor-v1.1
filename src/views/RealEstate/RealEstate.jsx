import React from "react";
import { Grid } from "material-ui";

import {
  RegularCard,
  Button,
  CustomInput,
  ItemGrid
} from "components";

function RealEstate({ ...props }) {
  return (
    <div>
      <Grid container>
        <ItemGrid xs={12} sm={12} md={10}>
          <RegularCard
            headerColor= "blue"
            cardTitle="Digitize Property"
            cardSubtitle="Powered by Smart Contracts"
            content={
              <div>
                <Grid container>
                  <ItemGrid xs={12} sm={12} md={10}>
                    <CustomInput
                      labelText="Street"
                      id="staddr"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </ItemGrid>
                </Grid>
                <Grid container>
                  <ItemGrid xs={12} sm={12} md={3}>
                    <CustomInput
                      labelText="City"
                      id="city"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </ItemGrid>
                  <ItemGrid xs={12} sm={12} md={3}>
                    <CustomInput
                      labelText="State"
                      id="state"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </ItemGrid>
                  <ItemGrid xs={12} sm={12} md={3}>
                    <CustomInput
                      labelText="ZIP"
                      id="zip"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </ItemGrid>
                </Grid>
                 <Grid container>
                  <ItemGrid xs={12} sm={12} md={1}>
                    <CustomInput
                      labelText="Beds"
                      id="beds"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </ItemGrid>
                  <ItemGrid xs={12} sm={12} md={1}>
                    <CustomInput
                      labelText="Baths"
                      id="baths"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </ItemGrid>
                  <ItemGrid xs={12} sm={12} md={1}>
                    <CustomInput
                      labelText="Type"
                      id="type"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </ItemGrid>
                </Grid>
                <Grid container>
                  <ItemGrid xs={12} sm={12} md={1}>
                    <CustomInput
                      labelText="Lot"
                      id="lot"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </ItemGrid>
                  <ItemGrid xs={12} sm={12} md={1}>
                    <CustomInput
                      labelText="Sqft"
                      id="squareft"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </ItemGrid>
                  <ItemGrid xs={12} sm={12} md={1}>
                    <CustomInput
                      labelText="Price/Sqft"
                      id="pricesft"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </ItemGrid>
                </Grid>
                <Grid container>
                  <ItemGrid xs={12} sm={12} md={12}>
                    <CustomInput
                      labelText="Additonal Description"
                      id="about-property"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        multiline: true,
                        rows: 5
                      }}
                    />
                  </ItemGrid>
                </Grid>
              </div>
            }
            footer={<Button color="info">DIGITIZE</Button>}
          />
        </ItemGrid>
      </Grid>
    </div>
  );
}

export default RealEstate;
