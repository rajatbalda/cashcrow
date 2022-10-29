import { Divider, Paper, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import styled from 'styled-components';
import CountUp from 'react-countup';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import {CategoryScale} from 'chart.js'; 
Chart.register(CategoryScale);

const Wrapper = styled.div`
width:auto;
height:10px;
background-color:#e6e1f5;
margin:20px;
`;

const WrapperContainer = styled.div`
    min-width:fit-content;
    text-align:center;
    margin:${window.outerWidth > "450" ? "20" : "" }px;
`;

const WrapperContainerDashboard = styled.div`
    ${window.outerWidth > "450" ? "width:100%;" : "" }
    min-height:330px;
    text-align:center;
    margin:20px;
`;

const WrapperGrid = styled.div`
    display:${window.outerWidth > "450" ? "flex" : "" };
`;

const WrapperGridContainer = styled.div`
    min-width:${window.outerWidth > "450" ? "30rem" : "fit-content" };
    margin:${window.outerWidth > "450" ? "20px" : "0px ; margin-top : 7px" };
    padding-top:50px;
    min-height:200px;
    border: 2px solid black;
    border-radius:20px;
    background-color:#e6e1f5;
`;

const WrapperGridContainerAnalysis = styled.div`
    margin:${window.outerWidth > "450" ? "20px" : "0px ; margin-top : 7px" };
    padding-top:50px;
    width:${window.outerWidth > "450" ? "44.4%" : "100%" };
    border: 2px solid black;
    border-radius:20px;
`;

const WrapperGridContainerHeading = styled.div`
    font-family:sans-serif;
`;

const WrapperGridContainervalue = styled.div`
    font-family:sans-serif;
    font-size:50px;
    color:${(props)=>{return props.backgroundColor}};
`;

let datalabel = [];
let datalabel1 = [];
let datalabel2 = [];

for(let i = 1;i<=30;i++){
    datalabel.push(i);
    datalabel1.push(Math.random()*100);
    datalabel2.push(Math.random()*100);
}

const data = {
    labels: datalabel,
    datasets: [
      {
        label: "This Month",
        data: datalabel1,
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)"
      },
      {
        label: "Previous Month",
        data: datalabel2,
        fill: false,
        borderColor: "#742774"
      }
    ]
  };

function Dashboard() {
  return (
    <WrapperContainer>
        <Container>
            <Paper>
                Dashboard
                <Divider />
                <Wrapper />
                <WrapperContainerDashboard>
                    <WrapperGrid>
                        <div>
                        <WrapperGridContainer>
                            <WrapperGridContainerHeading>
                                Earning This Month. <i class="fa fa-inr" aria-hidden="true"></i>
                            </WrapperGridContainerHeading>
                            <WrapperGridContainervalue backgroundColor="green">
                                ₹<CountUp 
                                end={2000}
                                duration={2.75}
                                useEasing={true}
                                useGrouping={true}
                                />
                            </WrapperGridContainervalue>
                        </WrapperGridContainer>
                        <WrapperGridContainer>
                            <WrapperGridContainerHeading>
                                Earning Today. <i class="fa fa-inr" aria-hidden="true"></i>
                            </WrapperGridContainerHeading>
                            <WrapperGridContainervalue backgroundColor="green">
                                ₹<CountUp 
                                end={100}
                                duration={2.75}
                                useEasing={true}
                                useGrouping={true}
                                />
                            </WrapperGridContainervalue>
                        </WrapperGridContainer>
                        </div>
                        <WrapperGridContainerAnalysis>                        
                            <Line data={data} />
                        </WrapperGridContainerAnalysis>
                    </WrapperGrid>
                    <Wrapper />
                    <WrapperGrid>
                        <div>
                        <WrapperGridContainer>
                            <WrapperGridContainerHeading>
                                Click's This Month
                            </WrapperGridContainerHeading>
                            <WrapperGridContainervalue backgroundColor="blue">
                                0
                            </WrapperGridContainervalue>
                        </WrapperGridContainer>
                        <WrapperGridContainer>
                            <WrapperGridContainerHeading>
                                Click's Today
                            </WrapperGridContainerHeading>
                            <WrapperGridContainervalue backgroundColor="red">
                                0
                            </WrapperGridContainervalue>
                        </WrapperGridContainer>
                        </div>
                        <WrapperGridContainerAnalysis>
                            <Line data={data} />
                        </WrapperGridContainerAnalysis>
                    </WrapperGrid>
                </WrapperContainerDashboard>
            </Paper>
        </Container>
    </WrapperContainer>
  )
}

export default Dashboard