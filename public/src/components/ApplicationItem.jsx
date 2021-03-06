import React, { Component } from 'react';
import {Card} from 'antd';
import IconDvr from 'react-icons/lib/md/dvr';
import IconMap from 'react-icons/lib/md/map';
import IconTraffic from 'react-icons/lib/md/traffic';
import IconHighlight from 'react-icons/lib/md/highlight';
import IconStraighten from 'react-icons/lib/md/straighten';
import IconBugRport from 'react-icons/lib/md/bug-report';
import { Link } from 'react-router-dom';
import {displayDuration, stateToDisplay} from "../utils/Common";


export class ApplicationItem extends Component {

  render () {

    const {app} = this.props;

    const title = <div style={{fontWeight: 'normal', fontSize: 12, paddingLeft: 5, paddingBottom: 15, marginBottom: 10, borderBottom: '1px solid #ddd'}} >
      <div>
        <h4 style={{fontWeight: 'bold', fontSize: 16, display: 'inline'}} >{app.appName} [{stateToDisplay(app.state)}]</h4>
        <span style={{marginLeft: 10}} >At location {app.appDir}</span>
      </div>

      <div style={{marginTop: 5}} >
        <p>
          <span style={styles.titleIndicator} >
            <b>Uptime:</b> {displayDuration(app.uptime * 1000)}
          </span>
          <span style={styles.titleIndicator} >
            <b>PID:</b> {app.pids.join(', ')}
          </span>
          <span style={styles.titleIndicator} >
            <b>Restart Count:</b> {app.restartCount}
          </span>
        </p>
      </div>

    </div>;

    return <Card bodyStyle={{padding: 15}} style={{marginBottom: 30, borderColor: '#ddd', borderRadius: 0}} >
        {title}

        <div>

          <Link to={`/application/${app.appName}/stdout`} >
            <div style={styles.actionIcon} className="actionIcon" >
              <IconDvr size={32}/>
              <br/>
              <span style={styles.actionIconText} >Standard Output</span>
            </div>
          </Link>

          <Link to={`/application/${app.appName}/processStructure`} >
            <div style={styles.actionIcon} className="actionIcon" >
              <IconMap size={32}/>
              <br/>
              <span style={styles.actionIconText} >Process Structure</span>
            </div>
          </Link>

          <div style={styles.actionSplitter} ></div>

          <Link to={`/application/${app.appName}/errorInspection`} >
            <div style={styles.actionIcon} className="actionIcon" >
              <IconTraffic size={32}/>
              <br/>
              <span style={styles.actionIconText} >Error Inspection</span>
            </div>
          </Link>

          <Link to={`/application/${app.appName}/metrics`} >
            <div style={styles.actionIcon} className="actionIcon" >
              <IconStraighten size={32}/>
              <br/>
              <span style={styles.actionIconText} >Metrics</span>
            </div>
          </Link>

          <Link to={`/application/${app.appName}/trace`} >
            <div style={styles.actionIcon} className="actionIcon" >
              <IconHighlight size={32}/>
              <br/>
              <span style={styles.actionIconText} >Trace</span>
            </div>
          </Link>

          <div style={styles.actionSplitter} ></div>

          <Link to={`/application/${app.appName}/debugger`} >
            <div style={styles.actionIcon} className="actionIcon" >
              <IconBugRport size={32} />
              <br/>
              <span style={styles.actionIconText} >Debugger</span>
            </div>
          </Link>


        </div>

      </Card>

  }

}


const styles = {
  titleIndicator: {
    marginRight: 10
  },
  actionIcon: {
    cursor: "pointer",
    verticalAlign: 'top',
    width: 60,
    padding: '5px 10px',
    boxSizing: 'content-box',
    display: 'inline-block',
    textAlign: 'center',
    lineHeight: 1.2
  },
  actionIconText: {
    display: 'inline-block',
    paddingTop: 5
  },
  actionSplitter: {
    display: 'inline-block',
    height: 75,
    margin: '0 15px',
    width: 1,
    overflow: 'hidden',
    background: '#ddd'

  }
};
