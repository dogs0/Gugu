import { Timer } from '@mui/icons-material';
import {LinearProgress, Card, CardContent, Input, FormLabel, Button, Box} from '@mui/material'
import React from 'react';

export default function Lastone() {
    var [Status, setStatus] = React.useState(
        {
            'Score':0,
            'StartTime':0,
            'UpdateFlag':0,
            'Timer':0
        }
    );
    var timelimit = (T) => {return 7-T/10};

    const start = () => {
        var timer = setInterval(() => {
                 console.log(Status)
            setStatus((prevStatus) => ({
                ...prevStatus,
                'UpdateFlag': Date.now()
            }));
            if (Math.max(Status['Timer']-Date.now()+Status['StartTime'],0)==0) 
                {
                clearInterval(Status['Timer']);
                setStatus((prevStatus) => ({
                    ...prevStatus,
                    'StartTime': 0,
                    'Timer': 0
                }));
            }}, 100);
        setStatus(
            {
            'UpdateFlag': 0,
            'StartTime': Date.now(),
            'Score':0,
            'Timer':timer
            }
        );
    }
    function InputBox(){
    return (
        <Card>
        <CardContent>
            <LinearProgress variant="determinate" value={Math.max(100-100*(Date.now()-Status['StartTime'])/timelimit(Status['Score']),0)} />
            <h2>1+1=?</h2>
            <br/>
            {
                (Status['StartTime']==0)?
            (
            <Button variant="contained" color="primary" style={{marginLeft: '10px'}} onClick={start}>
                开始
            </Button>
            ):
            (<Box>
            <FormLabel htmlFor="input">上一个的答案是:</FormLabel>
            <Input id="input"  style={{marginLeft: '10px'}} />
            <Button variant="contained" color="primary" style={{marginLeft: '10px'}}>
            提交
            </Button>
            </Box>)
            }
        </CardContent>
        </Card>
    )
    }
    return (
        <>写不下去了qwq</>
    )
    return (
    <>
    
            <h2>上一个数字</h2>
            <InputBox />
    </>
    );
}