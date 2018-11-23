import React, { Component } from 'react';
import './Diagrams.css'
import config from '../config';
import { PacmanLoader } from 'react-spinners';
import { load } from '../helpers/spreadsheet';
import { prepareMapVerteilung, prepareNationalitaetenVerteilung, prepareTiltLevel, prepareHackCallDaten, prepareHackCallDatenColumn, prepareToxicRatingScatterchart, prepareMapAnalyseWinRate, prepareMapAnalysePrime, prepareMapAnalyseKevinHackCall, prepareMapAnalyseTeamHackCall, prepareMapAnalyseKevinToxicity, prepareMapAnalyseTeamTilt } from '../helpers/prepareData';
import { Chart } from 'react-google-charts';
import { Panel } from 'react-bootstrap';

const pie_chart_options = {
  is3D: true,
  chartArea: {
    left: 20,
    top: 20,
    right: 20,
    bottom: 20,
    width: '100%',
    height: '100%'
  },
  legend: {
    position: 'labeled',
    alignment: 'center'
  }
}

const map_analyse_win_rate = {
  title: 'Win Rate',
  isStacked: true,
  focusTarget: 'category',
  hAxis: {
    title: ''
  },
  vAxis: {
    title: 'Prozent (0-100)',
    minValue: 0,
    maxValue: 100
  },
  series: {
    0:{color:'#3e8410'},
    1:{color:'#c44129'}
  }
}

const map_analyse_prime = {
  title: 'Matches mit Prime aktiviert',
  isStacked: true,
  focusTarget: 'category',
  hAxis: {
    title: ''
  },
  vAxis: {
    title: 'Prozent (0-100)',
    minValue: 0,
    maxValue: 100
  },
  series: {
    0:{color:'#3e8410'},
    1:{color:'#c44129'}
  }
}

const map_analyse_kevin_hack_call = {
  title: 'Matches in denen Kevin Hack called',
  isStacked: true,
  focusTarget: 'category',
  hAxis: {
    title: ''
  },
  vAxis: {
    title: 'Prozent (0-100)',
    minValue: 0,
    maxValue: 100
  },
  series: {
    0:{color:'#3e8410'},
    1:{color:'#c44129'}
  }
}

const map_analyse_team_hack_call = {
  title: 'Matches in denen das Team Hack called',
  isStacked: true,
  focusTarget: 'category',
  hAxis: {
    title: ''
  },
  vAxis: {
    title: 'Prozent (0-100)',
    minValue: 0,
    maxValue: 100
  },
  series: {
    0:{color:'#3e8410'},
    1:{color:'#c44129'}
  }
}

const map_analyse_kevin_toxicity = {
  title: 'Durschnittliche Toxizität von Kevin',
  isStacked: false,
  focusTarget: 'category',
  hAxis: {
    title: ''
  },
  vAxis: {
    title: 'Toxizität (1-5)',
    minValue: 1,
    maxValue: 5
  },
  series: {
    0:{color:'#ec9332'}
  }
}

const map_analyse_team_tilt = {
  title: 'Durschnittlicher Tilt des gesamten Teams ausgenommen von Kevin',
  isStacked: false,
  focusTarget: 'category',
  hAxis: {
    title: ''
  },
  vAxis: {
    title: 'Tilt (1-5)',
    minValue: 1,
    maxValue: 5
  },
  series: {
    0:{color:'#0560bd'}
  }
}

const geochart_options = {
  keepAspecRatio: true,
  region: '150',
  resolution: 'countries',
  displayMode: 'regions',
  domain: 'DE',
  enableRegionInteractivity: true,
  magnifyingGlass: {enable: true, zoomFactor: 7.5},
  colorAxis: {minValue: 0,  colors: ['green', 'orange', 'red']},
  legend: {
    numberFormat: '.##'
  }
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

const trendline_options = {
  hAxis: { 
    title: 'Toxizität',
    minValue: 1,
    maxValue: 5,
    viewWindowMode: 'maximized'
  },
  vAxis: { 
    title: 'HLTV Rating 1.0'
  },
  legend: 'none',
  trendlines: { 0: {
      type: 'exponential',
      lineWidth: 10,
      opacity: 0.2
    } 
  }
}

class Diagrams extends Component {
  state = {
    loading: true,
    error: null,
    entries: [],
    results: 0,
    width: window.innerWidth
  };

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  componentDidMount() {
    // 1. Load the JavaScript client library
    window.gapi.load('client', this.start);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

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
    const { width } = this.state;
    const isMobile = width <= 500;

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
                height="300px"
                loader={<div>Loading Chart</div>}
                legend_toggle={true}
                options={pie_chart_options}
              />
            </Panel.Body>
          </Panel.Collapse>
        </Panel>

        <Panel className='panel-bootstrap' id="panel-map-analyse" defaultExpanded>
          <Panel.Heading>
            <Panel.Title toggle>
              Map Analyse
            </Panel.Title>
          </Panel.Heading>
          <Panel.Collapse>
            <Panel.Body>
              <Chart
                chartType="ColumnChart"
                data={prepareMapAnalyseWinRate(this.state.entries)}
                graph_id="MapAnalyseWinRate"
                width="100%"
                height="100%"
                loader={<div>Loading Chart</div>}
                legend_toggle={true}
                options={map_analyse_win_rate}
              />
              <Chart
                chartType="ColumnChart"
                data={prepareMapAnalysePrime(this.state.entries)}
                graph_id="MapAnalysePrime"
                width="100%"
                height="100%"
                loader={<div>Loading Chart</div>}
                legend_toggle={true}
                options={map_analyse_prime}
              />
              <Chart
                chartType="ColumnChart"
                data={prepareMapAnalyseKevinHackCall(this.state.entries)}
                graph_id="MapAnalyseKevinHackCall"
                width="100%"
                height="100%"
                loader={<div>Loading Chart</div>}
                legend_toggle={true}
                options={map_analyse_kevin_hack_call}
              />
              <Chart
                chartType="ColumnChart"
                data={prepareMapAnalyseTeamHackCall(this.state.entries)}
                graph_id="MapAnalyseTeamHackCall"
                width="100%"
                height="100%"
                loader={<div>Loading Chart</div>}
                legend_toggle={true}
                options={map_analyse_team_hack_call}
              />
              <Chart
                chartType="ColumnChart"
                data={prepareMapAnalyseKevinToxicity(this.state.entries)}
                graph_id="MapAnalyseKevinToxicity"
                width="100%"
                height="100%"
                loader={<div>Loading Chart</div>}
                legend_toggle={true}
                options={map_analyse_kevin_toxicity}
              />
              <Chart
                chartType="ColumnChart"
                data={prepareMapAnalyseTeamTilt(this.state.entries)}
                graph_id="MapAnalyseTeamTilt"
                width="100%"
                height="100%"
                loader={<div>Loading Chart</div>}
                legend_toggle={true}
                options={map_analyse_team_tilt}
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
                loader={<div>Loading Chart</div>}
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
                loader={<div>Loading Chart</div>}
                legend_toggle={true}
                options={hack_call_options}
              />
              <Chart
                chartType="Sankey"
                data={prepareHackCallDaten(this.state.entries)}
                graph_id="HackCall"
                width="100%"
                height="100%"
                loader={<div>Loading Chart</div>}
                legend_toggle={true}
              />
            </Panel.Body>
          </Panel.Collapse>
        </Panel>

        <Panel className='panel-bootstrap' id="panel-kevin-toxic-hltv-rating-correlation" defaultExpanded>
          <Panel.Heading>
            <Panel.Title toggle>
              Kevins Toxizität im Kontext seiner Leistung
            </Panel.Title>
          </Panel.Heading>
          <Panel.Collapse>
            <Panel.Body>
              <Chart
                chartType="ScatterChart"
                data={prepareToxicRatingScatterchart(this.state.entries)}
                graph_id="KevinToxicRatingScatterChart"
                width="100%"
                height="100%"
                loader={<div>Loading Chart</div>}
                legend_toggle={true}
                options={trendline_options}
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
              {isMobile ? (
                <Chart
                  chartType="GeoChart"
                  data={prepareNationalitaetenVerteilung(this.state.entries, false)}
                  graph_id="GegnerNationalitaeten"
                  width="100%"
                  height="100%"
                  loader={<div>Loading Chart</div>}
                  legend_toggle={true}
                  options={geochart_options}
                  mapsApiKey={config.apiKey}
                />
              ) : (
                <Chart
                  chartType="GeoChart"
                  data={prepareNationalitaetenVerteilung(this.state.entries, false)}
                  graph_id="GegnerNationalitaeten"
                  width="100%"
                  height="500px"
                  loader={<div>Loading Chart</div>}
                  legend_toggle={true}
                  options={geochart_options}
                  mapsApiKey={config.apiKey}
                />
              )}
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
            {isMobile ? (
                <Chart
                  chartType="GeoChart"
                  data={prepareNationalitaetenVerteilung(this.state.entries, true)}
                  graph_id="TeamNationalitaeten"
                  width="100%"
                  height="100%"
                  loader={<div>Loading Chart</div>}
                  legend_toggle={true}
                  options={geochart_options}
                  mapsApiKey={config.apiKey}
                />
              ) : (
                <Chart
                  chartType="GeoChart"
                  data={prepareNationalitaetenVerteilung(this.state.entries, true)}
                  graph_id="TeamNationalitaeten"
                  width="100%"
                  height="500px"
                  loader={<div>Loading Chart</div>}
                  legend_toggle={true}
                  options={geochart_options}
                  mapsApiKey={config.apiKey}
                />
              )}
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