import React from 'react';
import Button from 'material-ui/Button';
import Dialog, {
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from 'material-ui/Dialog';
import Table from 'material-ui/Table/Table';
import TableBody from 'material-ui/Table/TableBody';
import TableCell from 'material-ui/Table/TableCell';
import TableHead from 'material-ui/Table/TableHead';
import TableRow from 'material-ui/Table/TableRow';

import { isString } from 'util';

const Details =(props)=>{
    console.log("pashu details data"+ props.data)

    const get = (p, o) =>p.reduce((xs, x) => (xs && xs[x]) ? xs[x] : null, o);
    const getpro = (p, o) =>p.reduce((xs, x) => (xs && xs[x]) ? (xs[x] + " ") : null, o); 
    const fun = (p, o) => {
        let farray=[];
        let arr = get(p,o);
        if(arr!==null){
        for(let i=0; i< arr.length;i++){
            if(arr[i].value===''&& arr[i].time===''){
               farray.push(<div key={i+Math.random()*100}>{arr[i].value + arr[i].time}</div>)
            }else farray.push(<div key={i+Math.random()*100}>{arr[i].value + ' on ' + arr[i].time}</div>)
        }
        return farray
        }
        else return null
    }
    let det=[];
    for(let key in props.data){
        //let label = key.replace(/_/g, " ");
        if(key==='_id' || key==='handoff_time'){}else{
        if(key==='product'){
		console.log("i am here a")
            det.push(
                <TableRow><TableCell style={{fontSize:"14px",maxWidth:"300px"}}> {key} </TableCell><TableCell style={{fontSize:"14px",maxWidth:"300px"}}>{getpro([key],props.data)}</TableCell></TableRow>
            )
        }
        else if(isString(props.data[key]) || key ==='ci_log'){
		console.log("i am there")
        det.push(
            <TableRow><TableCell style={{fontSize:"14px",maxWidth:"300px"}}> {key} </TableCell><TableCell style={{fontSize:"14px",maxWidth:"300px"}}>{get([key],props.data)}</TableCell></TableRow>
        )
       }else{
		console.log("i am here")
        det.push(
            <TableRow><TableCell style={{fontSize:"14px",maxWidth:"300px"}}> {key} </TableCell><TableCell style={{fontSize:"14px",maxWidth:"300px"}}>{fun([key],props.data)}</TableCell></TableRow>
        )
       }
    }
    }
    const ma=<TableBody>
        {det}


    </TableBody>
    return (
        <div>
            <Dialog
            fullWidth={true}
            maxWidth = {'md'}
            open={props.state}
            onClose={props.close}
            aria-labelledby="responsive-dialog-title"
            >
            <DialogTitle><div style={{textAlign:"center",fontSize:"30px",color:"#174972"}}>{"Task Details"}</div></DialogTitle>
            <DialogContent>
                <div className="well" style={{background:"white"}}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell style={{color:"#174972",fontSize:"18px"}}>Properties</TableCell>
                                <TableCell style={{color:"#174972",fontSize:"18px"}}>Values</TableCell>
                            </TableRow>
                        </TableHead>
                            {ma}
                    </Table>
                </div>
            </DialogContent>
            <DialogActions>
            <Button onClick={props.close} color="secondary" autoFocus>
            Close
            </Button>
            {/* <Button onClick={props.refresh} color="primary" autoFocus>
            Refresh
            </Button> */}
            </DialogActions>
            </Dialog>

        </div>
    )
}
export default Details
 /* <TableRow><TableCell style={{fontSize:"14px",maxWidth:"300px"}}> Task Type </TableCell><TableCell style={{fontSize:"14px",maxWidth:"300px"}}>{get(["task_type"],props.data)}</TableCell></TableRow>
                        <TableRow><TableCell style={{fontSize:"14px",maxWidth:"300px"}}> Task ID </TableCell><TableCell style={{fontSize:"14px",maxWidth:"300px"}}>{get(["task_id"],props.data)}</TableCell></TableRow>
                        <TableRow><TableCell style={{fontSize:"14px",maxWidth:"300px"}}> Submitter</TableCell><TableCell style={{fontSize:"14px",maxWidth:"300px"}}>{get(["submitter"],props.data)}</TableCell></TableRow>
                        <TableRow><TableCell style={{fontSize:"14px",maxWidth:"300px"}}> manager </TableCell><TableCell style={{fontSize:"14px",maxWidth:"300px"}}>{get(["manager"],props.data)}</TableCell></TableRow>
                        <TableRow><TableCell style={{fontSize:"14px",maxWidth:"300px"}}> Submit Time </TableCell><TableCell style={{fontSize:"14px",maxWidth:"300px"}}>{get(["submit_time"],props.data)}</TableCell></TableRow>
                        <TableRow><TableCell style={{fontSize:"14px",maxWidth:"300px"}}> Start Time </TableCell><TableCell style={{fontSize:"14px",maxWidth:"300px"}}>{get(["start_time"],props.data)}</TableCell></TableRow>
                        <TableRow><TableCell style={{fontSize:"14px",maxWidth:"300px"}}> End Time </TableCell><TableCell style={{fontSize:"14px",maxWidth:"300px"}}>{get(["end_time"],props.data)}</TableCell></TableRow>
                        <TableRow><TableCell style={{fontSize:"14px",maxWidth:"300px"}}> Release </TableCell><TableCell style={{fontSize:"14px",maxWidth:"300px"}}>{get(["release"],props.data)}</TableCell></TableRow>
                        <TableRow><TableCell style={{fontSize:"14px",maxWidth:"300px"}}> Patch Set </TableCell><TableCell style={{fontSize:"14px",maxWidth:"300px"}}>{get(["patchset"],props.data)}</TableCell></TableRow>
                        <TableRow><TableCell style={{fontSize:"14px",maxWidth:"300px"}}> Project </TableCell><TableCell style={{fontSize:"14px",maxWidth:"300px"}}>{get(["project"],props.data)}</TableCell></TableRow>
                        <TableRow><TableCell style={{fontSize:"14px",maxWidth:"300px"}}> Product </TableCell><TableCell style={{fontSize:"14px",maxWidth:"300px"}}>{get(["product"],props.data)}</TableCell></TableRow>

                        <TableRow><TableCell style={{fontSize:"14px",maxWidth:"300px"}}> Title </TableCell><TableCell style={{fontSize:"14px",maxWidth:"300px"}}>{get(["title"],props.data)}</TableCell></TableRow>
                        <TableRow><TableCell style={{fontSize:"14px",maxWidth:"300px"}}> Site </TableCell><TableCell style={{fontSize:"14px",maxWidth:"300px"}}>{get(["site"],props.data)}</TableCell></TableRow>
                        <TableRow><TableCell style={{fontSize:"14px",maxWidth:"300px"}}> Drop Date </TableCell><TableCell style={{fontSize:"14px",maxWidth:"300px"}}>{get(["drop_date"],props.data)}</TableCell></TableRow>
                        <TableRow><TableCell style={{fontSize:"14px",maxWidth:"300px"}}> Software Drop File Name </TableCell><TableCell style={{fontSize:"14px",maxWidth:"300px"}}>{get(["software_drop_file_name"],props.data)}</TableCell></TableRow>
                        <TableRow><TableCell style={{fontSize:"14px",maxWidth:"300px"}}> Related Patches</TableCell><TableCell style={{fontSize:"14px",maxWidth:"300px"}}>{get(["related_patches"],props.data)}</TableCell></TableRow>

                        <TableRow><TableCell style={{fontSize:"14px",maxWidth:"300px"}}>Advantage Repository</TableCell><TableCell style={{fontSize:"14px",maxWidth:"300px"}}>{get(["advantage_repository"],props.data)}</TableCell></TableRow>
                        <TableRow><TableCell style={{fontSize:"14px",maxWidth:"300px"}}>Client App Rebuild Compile Needed</TableCell><TableCell style={{fontSize:"14px",maxWidth:"300px"}}>{get(["client_app_rebuild_compile_needed"],props.data)}</TableCell></TableRow>
                        <TableRow><TableCell style={{fontSize:"14px",maxWidth:"300px"}}>Business Logic Rebuild Compile Needed</TableCell><TableCell style={{fontSize:"14px",maxWidth:"300px"}}>{get(["business_logic_rebuild_compile_needed"],props.data)}</TableCell></TableRow>

                        <TableRow><TableCell style={{fontSize:"14px",maxWidth:"300px"}}>Issue ID</TableCell><TableCell style={{fontSize:"14px",maxWidth:"300px"}}>{get(["issue_id"],props.data)}</TableCell></TableRow>
                        <TableRow><TableCell style={{fontSize:"14px",maxWidth:"300px"}}>CGI defect number</TableCell><TableCell style={{fontSize:"14px",maxWidth:"300px"}}>{get(["cgi_defect_number"],props.data)}</TableCell></TableRow>
                        <TableRow><TableCell style={{fontSize:"14px",maxWidth:"300px"}}>CGI issue number</TableCell><TableCell style={{fontSize:"14px",maxWidth:"300px"}}>{get(["cgi_issue_number"],props.data)}</TableCell></TableRow>
                        <TableRow><TableCell style={{fontSize:"14px",maxWidth:"300px"}}>Severity</TableCell><TableCell style={{fontSize:"14px",maxWidth:"300px"}}>{get(["severity"],props.data)}</TableCell></TableRow>
                        <TableRow><TableCell style={{fontSize:"14px",maxWidth:"300px"}}>Subsystem </TableCell><TableCell style={{fontSize:"14px",maxWidth:"300px"}}>{get(["subsystem"],props.data)}</TableCell></TableRow>
                        <TableRow><TableCell style={{fontSize:"14px",maxWidth:"300px"}}>Functional Area</TableCell><TableCell style={{fontSize:"14px",maxWidth:"300px"}}>{get(["functional_area"],props.data)}</TableCell></TableRow>
                        <TableRow><TableCell style={{fontSize:"14px",maxWidth:"300px"}}>Defect number</TableCell><TableCell style={{fontSize:"14px",maxWidth:"300px"}}>{get(["defect_number"],props.data)}</TableCell></TableRow>
                        <TableRow><TableCell style={{fontSize:"14px",maxWidth:"300px"}}>Baseline defect number</TableCell><TableCell style={{fontSize:"14px",maxWidth:"300px"}}>{get(["baseline_defect_number"],props.data)}</TableCell></TableRow>
                        <TableRow><TableCell style={{fontSize:"14px",maxWidth:"300px"}}>Description</TableCell><TableCell style={{fontSize:"14px",maxWidth:"300px"}}>{get(["description"],props.data)}</TableCell></TableRow>

                        <TableRow><TableCell style={{fontSize:"14px",maxWidth:"300px"}}> CB Log </TableCell><TableCell style={{fontSize:"14px",maxWidth:"300px"}}><a href={get(["cb_log"],props.data)} target="_blank">{get(["cb_log"],props.data)}</a></TableCell></TableRow>
                        <TableRow><TableCell style={{fontSize:"14px",maxWidth:"300px"}}> CI Log</TableCell><TableCell style={{fontSize:"14px",maxWidth:"300px"}}><a href={get(["ci_log"],props.data)} target="_blank">{get(["ci_log"],props.data)}</a></TableCell></TableRow>
                        <TableRow><TableCell style={{fontSize:"14px",maxWidth:"300px"}}> CD Log</TableCell><TableCell style={{fontSize:"14px",maxWidth:"300px"}}><a href={get(["cd_log"],props.data)} target="_blank">{get(["cd_log"],props.data)}</a></TableCell></TableRow>
                        <TableRow><TableCell style={{fontSize:"14px",maxWidth:"300px"}}> CT Log </TableCell><TableCell style={{fontSize:"14px",maxWidth:"300px"}}><a href={get(["ct_log"],props.data)} target="_blank">{get(["ct_log"],props.data)}</a></TableCell></TableRow>
                        <TableRow><TableCell style={{fontSize:"14px",maxWidth:"300px"}}> DBCM Log </TableCell><TableCell style={{fontSize:"14px",maxWidth:"300px"}}>{get(["dbcm_log"],props.data)}</TableCell></TableRow>
                        <TableRow><TableCell style={{fontSize:"14px",maxWidth:"300px"}}> DBCM Status </TableCell><TableCell style={{fontSize:"14px",maxWidth:"300px"}}>{fun(["dbcm_status"],props.data)}</TableCell></TableRow>
                        <TableRow><TableCell style={{fontSize:"14px",maxWidth:"300px"}}> CB Status </TableCell><TableCell style={{fontSize:"14px",maxWidth:"300px"}}>{fun(["cb_status"],props.data)}</TableCell></TableRow>
                        <TableRow><TableCell style={{fontSize:"14px",maxWidth:"300px"}}> CI Status </TableCell><TableCell style={{fontSize:"14px",maxWidth:"300px"}}>{fun(["ci_status"],props.data)}</TableCell></TableRow>
                        <TableRow><TableCell style={{fontSize:"14px",maxWidth:"300px"}}> CD Status </TableCell><TableCell style={{fontSize:"14px",maxWidth:"300px"}}>{fun(["cd_status"],props.data)}</TableCell></TableRow>
                        <TableRow><TableCell style={{fontSize:"14px",maxWidth:"300px"}}> CT Status </TableCell><TableCell style={{fontSize:"14px",maxWidth:"300px"}}>{fun(["ct_status"],props.data)}</TableCell></TableRow>
                        <TableRow><TableCell style={{fontSize:"14px",maxWidth:"300px"}}> Status </TableCell><TableCell style={{fontSize:"14px",maxWidth:"300px"}}>{fun(["status"],props.data)}</TableCell></TableRow> */