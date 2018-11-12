import React, { Component } from 'react';
import './Diagrams.css'
import config from '../config';
import { PacmanLoader } from 'react-spinners';
import { load } from '../helpers/spreadsheet';
import { prepareMapVerteilung, prepareNationalitaetenVerteilung, prepareTiltLevel, prepareHackCallDaten, prepareHackCallDatenColumn } from '../helpers/prepareData';
import { Chart } from 'react-google-charts';
import { Panel } from 'react-bootstrap';

const geochart_options = {
  region: '150',
  resolution: 'countries',
  displayMode: 'auto',
  magnifyingGlass: {enable: true, zoomFactor: 7.5},
  colorAxis: {minValue: 0,  colors: ['green', 'orange', 'red']}
}

const tilt_options = {
  title: 'Durschnittliches Tilt Level mit und ohne Kevin',
  focusTarget: 'category',
  vAxis: {
    title: 'Tilt Level (1-5)',
    minValue: 1
  }
}

const hack_call_options = {
  title: 'Kevins Hack Quall Quote im Vergleich zum Team',
  focusTarget: 'category',
  vAxis: {
    title: 'Prozent (0-100)',
    minValue: 0,
    maxValue: 100
  }
}

class Diagrams extends Component {
  state = {
    loading: true,
    error: null,
    entries: [],
    results: 0
  };

  componentDidMount() {
    // 1. Load the JavaScript client library
    window.gapi.load('client', this.start);
  }

  start = () => {
    // 2. Initialize the JavaScript client library
    window.gapi.client
      .init({
        apiKey: config.apiKey,
        discoveryDocs: config.discoveryDocs
      })
      // 3. Initialize and make the API request
      .then(() => {
        load(this.onLoad);
      });
  };

  onLoad = (data, error) => {
    if (data) {
      this.setState({
        entries: data.entries,
        results: data.entries.length,
        loading: false
      })
    } else {
      this.setState({ error, loading: false });
    }
  };

  render() {
    // Show Loading
    if (this.state.loading) {
      return (
        <div className="Loading">
          <PacmanLoader color ="#6aa84f" loading={this.state.loading} />
        </div>
      )
    }

    // Display Graphs
    if (this.state.entries) {
      return (
        <div id="panels">
          <Panel className='panel-bootstrap' id="panel-map-verteilung" defaultExpanded>
          <Panel.Heading>
            <Panel.Title toggle>
              Map Verteilung
            </Panel.Title>
          </Panel.Heading>
          <Panel.Collapse>
            <Panel.Body>
              <Chart
                chartType="PieChart"
                data={prepareMapVerteilung(this.state.entries)}
                graph_id="MapVerteilung"
                width="100%"
                height="400px"
                legend_toggle={true}
              />
            </Panel.Body>
          </Panel.Collapse>
        </Panel>

        <Panel className='panel-bootstrap' id="panel-team-tilt-level" defaultExpanded>
          <Panel.Heading>
            <Panel.Title toggle>
              Tilt Level mit und ohne Kevin
            </Panel.Title>
          </Panel.Heading>
          <Panel.Collapse>
            <Panel.Body>
              <Chart
                chartType="ColumnChart"
                data={prepareTiltLevel(this.state.entries)}
                graph_id="TiltLevel"
                width="100%"
                height="100%"
                legend_toggle={true}
                options={tilt_options}
              />
            </Panel.Body>
          </Panel.Collapse>
        </Panel>

        <Panel className='panel-bootstrap' id="panel-hack-call" defaultExpanded>
          <Panel.Heading>
            <Panel.Title toggle>
              Kevins Hackcall Quote im Vegleich zum Team
            </Panel.Title>
          </Panel.Heading>
          <Panel.Collapse>
            <Panel.Body>
            <Chart
                chartType="ColumnChart"
                data={prepareHackCallDatenColumn(this.state.entries)}
                graph_id="HackCallColumn"
                width="100%"
                height="100%"
                legend_toggle={true}
                options={hack_call_options}
              />
              <Chart
                chartType="Sankey"
                data={prepareHackCallDaten(this.state.entries)}
                graph_id="HackCall"
                width="100%"
                height="100%"
                loader = {<div>Loading Chart</div>}
                legend_toggle={true}
              />
            </Panel.Body>
          </Panel.Collapse>
        </Panel>

        <Panel className='panel-bootstrap' id="panel-gegner-nationalitaeten" defaultExpanded>
          <Panel.Heading>
            <Panel.Title toggle>
              Gegner Nationalitäten
            </Panel.Title>
          </Panel.Heading>
          <Panel.Collapse>
            <Panel.Body>
              <Chart
                chartType="GeoChart"
                data={prepareNationalitaetenVerteilung(this.state.entries, false)}
                graph_id="GegnerNationalitaeten"
                width="100%"
                height="500px"
                legend_toggle={true}
                options={geochart_options}
              />
            </Panel.Body>
          </Panel.Collapse>
        </Panel>

        <Panel className='panel-bootstrap' id="panel-team-nationalitaeten" defaultExpanded>
          <Panel.Heading>
            <Panel.Title toggle>
              Team Nationalitäten
            </Panel.Title>
          </Panel.Heading>
          <Panel.Collapse>
            <Panel.Body>
              <Chart
                chartType="GeoChart"
                data={prepareNationalitaetenVerteilung(this.state.entries, true)}
                graph_id="TeamNationalitaeten"
                width="100%"
                height="500px"
                legend_toggle={true}
                options={geochart_options}
              />
            </Panel.Body>
          </Panel.Collapse>
        </Panel>
        </div>
      )
    }

    // Display Error
    return <div>{this.state.error}</div>;
  }
}

export default Diagrams;