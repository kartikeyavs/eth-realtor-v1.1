import React from "react";
import PropTypes from "prop-types";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
import {
  ContentCopy,
  Home,
  Warning,
  DateRange,
  LocalOffer,
  AccountBalanceWallet,
  //Update,
  ArrowUpward,
  AccessTime
  //Accessibility
} from "material-ui-icons";
import { withStyles, Grid } from "material-ui";

import {
  StatsCard,
  ChartCard,
  //TasksCard,
  RegularCard,
  Table,
  ItemGrid
} from "components";

import {
  dailySalesChart
  //emailsSubscriptionChart,
  //completedTasksChart
} from "variables/charts";

import dashboardStyle from "variables/styles/dashboardStyle";

class Dashboard extends React.Component {
  state = {
    value: 0
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };
  render() {
    return (
      <div>
        <Grid container>

          <ItemGrid xs={12} sm={6} md={6}>
            <StatsCard
              icon={AccountBalanceWallet}
              iconColor="blue"
              title="wallet"
              description="0xd8fc2b"
              statIcon={LocalOffer}
              statText=""
            />
          </ItemGrid>
          <ItemGrid xs={12} sm={6} md={2}>
            <StatsCard
              icon={Home}
              iconColor="green"
              title="RT"
              description="200000"
              statIcon={DateRange}
              statText=""
            />
          </ItemGrid>
          <ItemGrid xs={12} sm={6} md={2}>
            <StatsCard
              icon={ContentCopy}
              iconColor="red"
              title="Eth"
              description="400"
              small="ether"
              statIcon={Warning}
              statIconColor="danger"
              statLink={{ text: "", href: "" }}
            />
          </ItemGrid>
        </Grid>
        <Grid container>
          <ItemGrid xs={12} sm={12} md={10}>
            <ChartCard
              chart={
                <ChartistGraph
                  className="ct-chart"
                  data={dailySalesChart.data}
                  type="Line"
                  options={dailySalesChart.options}
                  listener={dailySalesChart.animation}
                />
              }
              chartColor="green"
              title="Ethereum (ETH) Price"
              text={
                <span>
                  <span className={this.props.classes.successText}>Gained 
                    <ArrowUpward
                      className={this.props.classes.upArrowCardCategory}
                    />{" "}
                    5 Points
                  </span>{" "}
                  at opening today.
                </span>
              }
              statIcon={AccessTime}
              statText="updated 4 minutes ago"
            />
          </ItemGrid>
          </Grid>
          <Grid container>
          <ItemGrid xs={12} sm={12} md={10}>
            <RegularCard
              headerColor="orange"
              cardTitle="Bookmarked Property"
              cardSubtitle="Update Available"
              content={
                <Table
                  tableHeaderColor="warning"
                  tableHead={["ID", "Title", "City", "State", " Market Price", "Your Offer"]}
                  tableData={[
                    ["0x1", "Dakota Rice","Boston","MA", "ETH 36,738", "N/A"],
                    ["0x2", "Minerva Hooper","Chicago","IL", "ETH $23,789", "ETH 23,500"],
                    ["0x3", "Sage Rodriguez","Boston","MA", "ETH 56,142", "N/A"],
                    ["0x4", "Philip Chaney", "Albany","NY","ETH 38,735", "ETH 30,222"]
                  ]}
                />
              }
            />
          </ItemGrid>
        </Grid>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Dashboard);
