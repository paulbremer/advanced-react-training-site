import React from 'react'
import styled from 'styled-components'

import Module from '../components/module';
import Layout from '../components/layout'
import SEO from '../components/seo'

const Container = styled.div`
  margin: 3rem auto 1rem;
  max-width: 1140px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const GridWrapper = styled.div`
    width: 100%;
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    margin-bottom: 40px;

    @media screen and (min-width: 768px) {
        grid-template-columns: minmax(100px, max-content) 1fr;
    }
`

const GroupTitle = styled.h3`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 900;
    background: #fff;
    padding: 1rem 1rem 2rem;
    width: 100%;
    min-width: 200px;
    margin: 0 0 20px;

    & em {
        position: relative;
        top: 10px;
        font-size: 0.66rem;
        color: #262626;
        background: #ffc600;
        padding: 5px;
    }
`

const VideoGroup = styled.div`
    display: grid;
    flex: 1;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;

    @media screen and (min-width: 768px) {
        grid-template-columns: repeat(4, 1fr);
        margin-left: 20px;
    }
`

const ModuleNumber = styled.span`
    font-size: 15px;
    color: #262626;
    background: #ffc600;
    padding: 2px;
    margin-bottom: 20px;
`

const ModuleTime = styled.em`
    font-size: 0.7rem;
`

const IndexPage = () => (
    <Layout>
        <SEO title="🎉 Advanced React Training" description="Advanced React Training" keywords={[`gatsby`, `application`, `react`]} />
        <Container>
            <GridWrapper>
                <Grid>
                    <GroupTitle>Week 1 <br /><em>21 januari - 27 januari</em></GroupTitle>
                    <VideoGroup>
                        <Module data-id="1"><ModuleNumber>Module 1</ModuleNumber><br /><br />#1 — Editor Setup and Starter Files Installation <ModuleTime>(08:29)</ModuleTime></Module>
                        <Module data-id="2"><ModuleNumber>Module 1</ModuleNumber><br /><br />#2 — Sick Fits and the Tech Stack Behind It <ModuleTime>(10:30)</ModuleTime></Module>
                        <Module data-id="3"><ModuleNumber>Module 1</ModuleNumber><br /><br />#3 — An Intro to Next.js, Tooling and Routing <ModuleTime>(08:50)</ModuleTime></Module>
                        <Module data-id="4"><ModuleNumber>Module 1</ModuleNumber><br /><br />#4 — Custom _app.js Layout <ModuleTime>(12:25)</ModuleTime></Module>
                        <Module data-id="5"><ModuleNumber>Module 2</ModuleNumber><br /><br />#5 — An Intro to Styled Components <ModuleTime>(11:19)</ModuleTime></Module>
                        <Module data-id="6"><ModuleNumber>Module 2</ModuleNumber><br /><br />#6 — Themes and Layout with Styled Components <ModuleTime>(18:51)</ModuleTime></Module>
                        <Module data-id="7"><ModuleNumber>Module 2</ModuleNumber><br /><br />#7 — Global Styling and Typography with Styled Components <ModuleTime>(10:50)</ModuleTime></Module>
                        <Module data-id="8"><ModuleNumber>Module 2</ModuleNumber><br /><br />#8 — Visualizing Route Changes <ModuleTime>(06:44)</ModuleTime></Module>
                        <Module data-id="9"><ModuleNumber>Module 2</ModuleNumber><br /><br />#9 — Fixing Styled Components Flicker on Server Render <ModuleTime>(04:18)</ModuleTime></Module>
                    </VideoGroup>
                </Grid>
                <Grid>
                    <GroupTitle>Week 2 <br /><em>28 januari - 3 februari</em></GroupTitle>
                    <VideoGroup>
                        <Module data-id="10"><ModuleNumber>Module 3</ModuleNumber><br /><br />#10 — An intro to GraphQL <ModuleTime>(14:13)</ModuleTime></Module>
                        <Module data-id="11"><ModuleNumber>Module 3</ModuleNumber><br /><br />#11 — Getting Setup with Prisma <ModuleTime>(22:55)</ModuleTime></Module>
                        <Module data-id="12"><ModuleNumber>Module 3</ModuleNumber><br /><br />#12 — Getting our GraphQL Yoga Server Running <ModuleTime>(22:32)</ModuleTime></Module>
                        <Module data-id="13"><ModuleNumber>Module 3</ModuleNumber><br /><br />#13 — Our first Query and Mutation <ModuleTime>(11:40)</ModuleTime></Module>
                        <Module data-id="14"><ModuleNumber>Module 3</ModuleNumber><br /><br />#14 — Items Creation and Prisma Yoga Flow <ModuleTime>(26:07)</ModuleTime></Module>
                        <Module data-id="15"><ModuleNumber>Module 4</ModuleNumber><br /><br />#15 — Setting Up Apollo Client with React <ModuleTime>(11:24)</ModuleTime></Module>
                        <Module data-id="16"><ModuleNumber>Module 4</ModuleNumber><br /><br />#16 — React Meets GraphQL <ModuleTime>(25:54)</ModuleTime></Module>
                    </VideoGroup>
                </Grid>
                <Grid>
                    <GroupTitle>Week 3 <br /><em>4 februari - 10 februari</em></GroupTitle>
                    <VideoGroup>
                        <Module data-id="17"><ModuleNumber>Module 4</ModuleNumber><br /><br />#17 — Creating Items with Mutations <ModuleTime>(29:50)</ModuleTime></Module>
                        <Module data-id="18"><ModuleNumber>Module 4</ModuleNumber><br /><br />#18 — Uploading Images <ModuleTime>(11:46)</ModuleTime></Module>
                        <Module data-id="19"><ModuleNumber>Module 4</ModuleNumber><br /><br />#19 — Updating Items with Queries and Mutations <ModuleTime>(25:42)</ModuleTime></Module>
                        <Module data-id="20"><ModuleNumber>Module 4</ModuleNumber><br /><br />#20 — Deleting Items <ModuleTime>(13:04)</ModuleTime></Module>
                        <Module data-id="21"><ModuleNumber>Module 4</ModuleNumber><br /><br />#21 — Displaying Single Items <ModuleTime>(12:33)</ModuleTime></Module>
                        <Module data-id="22"><ModuleNumber>Module 4</ModuleNumber><br /><br />#22 — Pagination <ModuleTime>(15:12)</ModuleTime></Module>
                        <Module data-id="23"><ModuleNumber>Module 4</ModuleNumber><br /><br />#23 — Pagination and Cache Invalidation <ModuleTime>(09:37)</ModuleTime></Module>
                    </VideoGroup>
                </Grid>
                <Grid>
                    <GroupTitle>Week 4 <br /><em>11 februari - 17 februari</em></GroupTitle>
                    <VideoGroup>
                        <Module data-id="24"><ModuleNumber>Module 5</ModuleNumber><br /><br />#24 — User Signup and Permission Flow <ModuleTime>(23:07)</ModuleTime></Module>
                        <Module data-id="25"><ModuleNumber>Module 5</ModuleNumber><br /><br />#25 — User Signup in React <ModuleTime>(12:13)</ModuleTime></Module>
                        <Module data-id="26"><ModuleNumber>Module 5</ModuleNumber><br /><br />#26 — Currently Logged In User with Middleware and Render Props <ModuleTime>(18:44)</ModuleTime></Module>
                        <Module data-id="27"><ModuleNumber>Module 5</ModuleNumber><br /><br />#27 — Sign in Form and Custom Error Handling <ModuleTime>(16:56)</ModuleTime></Module>
                        <Module data-id="28"><ModuleNumber>Module 5</ModuleNumber><br /><br />#28 — Sign Out Button <ModuleTime>(06:21)</ModuleTime></Module>
                        <Module data-id="29"><ModuleNumber>Module 5</ModuleNumber><br /><br />#29 — Backend Password Reset Flow <ModuleTime>(19:59)</ModuleTime></Module>
                        <Module data-id="30"><ModuleNumber>Module 5</ModuleNumber><br /><br />#30 — Frontend Password Reset Flow <ModuleTime>(14:56)</ModuleTime></Module>
                    </VideoGroup>
                </Grid>
                <Grid>
                    <GroupTitle>Week 5 <br /><em>18 februari - 24 februari</em></GroupTitle>
                    <VideoGroup>
                        <Module data-id="31"><ModuleNumber>Module 5</ModuleNumber><br /><br />#31 — Sending email <ModuleTime>(12:13)</ModuleTime></Module>
                        <Module data-id="32"><ModuleNumber>Module 5</ModuleNumber><br /><br />#32 — Data Relationships <ModuleTime>(05:47)</ModuleTime></Module>
                        <Module data-id="33"><ModuleNumber>Module 5</ModuleNumber><br /><br />#33 — Creating a Gated Sign In Component <ModuleTime>(05:17)</ModuleTime></Module>
                        <Module data-id="34"><ModuleNumber>Module 5</ModuleNumber><br /><br />#34 — Permissions Management <ModuleTime>(22:34)</ModuleTime></Module>
                        <Module data-id="35"><ModuleNumber>Module 5</ModuleNumber><br /><br />#35 — Updating Permissions in Local State <ModuleTime>(12:44)</ModuleTime></Module>
                        <Module data-id="36"><ModuleNumber>Module 5</ModuleNumber><br /><br />#36 — Updating Permissions on the Server <ModuleTime>(17:30)</ModuleTime></Module>
                        <Module data-id="37"><ModuleNumber>Module 5</ModuleNumber><br /><br />#37 — Locking Down DeleteItem Permissions <ModuleTime>(06:38)</ModuleTime></Module>
                        <Module data-id="38"><ModuleNumber>Module 6</ModuleNumber><br /><br />#38 — Creating our cart in React <ModuleTime>(05:29)</ModuleTime></Module>
                        <Module data-id="39"><ModuleNumber>Module 6</ModuleNumber><br /><br />#39 — Apollo Local State Queries and Mutations <ModuleTime>(12:30)</ModuleTime></Module>
                        <Module data-id="40"><ModuleNumber>Module 6</ModuleNumber><br /><br />#40 — Server Side Add To Cart <ModuleTime>(17:04)</ModuleTime></Module>
                    </VideoGroup>
                </Grid>
                <Grid>
                    <GroupTitle>Week 6 <br /><em>25 februari - 3 maart</em></GroupTitle>
                    <VideoGroup>
                        <Module data-id="41"><ModuleNumber>Module 6</ModuleNumber><br /><br />#41 — Displaying Cart Items and Totals <ModuleTime>(20:00)</ModuleTime></Module>
                        <Module data-id="42"><ModuleNumber>Module 6</ModuleNumber><br /><br />#42 — Removing Cart Items <ModuleTime>(10:45)</ModuleTime></Module>
                        <Module data-id="43"><ModuleNumber>Module 6</ModuleNumber><br /><br />#43 — Optimistic Response &amp;&amp; Cache Updates with Apollo <ModuleTime>(07:55)</ModuleTime></Module>
                        <Module data-id="44"><ModuleNumber>Module 6</ModuleNumber><br /><br />#44 — Animating our Cart Count Component <ModuleTime>(13:20)</ModuleTime></Module>
                        <Module data-id="45"><ModuleNumber>Module 6</ModuleNumber><br /><br />#45 — Dealing with Deleted Items in CartItems <ModuleTime>(03:01)</ModuleTime></Module>
                        <Module data-id="46"><ModuleNumber>Module 7</ModuleNumber><br /><br />#46 — Cleaning Up This Render Prop Mess <ModuleTime>(06:20)</ModuleTime></Module>
                        <Module data-id="47"><ModuleNumber>Module 7</ModuleNumber><br /><br />#47 — Search Dropdown Autocomplete <ModuleTime>(18:13)</ModuleTime></Module>
                        <Module data-id="48"><ModuleNumber>Module 7</ModuleNumber><br /><br />#48 — Autocomplete with Downshift <ModuleTime>(13:08)</ModuleTime></Module>
                    </VideoGroup>
                </Grid>
                <Grid>
                    <GroupTitle>Week 7 <br /><em>4 maart - 10 maart</em></GroupTitle>
                    <VideoGroup>
                        <Module data-id="49"><ModuleNumber>Module 8</ModuleNumber><br /><br />#49 — Credit Card Processing with Stripe Checkout <ModuleTime>(16:45)</ModuleTime></Module>
                        <Module data-id="50"><ModuleNumber>Module 8</ModuleNumber><br /><br />#50 — Charging Cards on the Server Side <ModuleTime>(17:50)</ModuleTime></Module>
                        <Module data-id="51"><ModuleNumber>Module 8</ModuleNumber><br /><br />#51 — Saving Orders to the Database <ModuleTime>(13:14)</ModuleTime></Module>
                        <Module data-id="52"><ModuleNumber>Module 8</ModuleNumber><br /><br />#52 — Displaying Single Orders <ModuleTime>(17:57)</ModuleTime></Module>
                        <Module data-id="53"><ModuleNumber>Module 8</ModuleNumber><br /><br />#53 — Orders Page <ModuleTime>(14:19)</ModuleTime></Module>
                        <Module data-id="54"><ModuleNumber>Module 9</ModuleNumber><br /><br />#54 — Testing with Jest and Enzyme Introduction <ModuleTime>(07:44)</ModuleTime></Module>
                        <Module data-id="55"><ModuleNumber>Module 9</ModuleNumber><br /><br />#55 — Unit Testing 101 <ModuleTime>(16:30)</ModuleTime></Module>
                    </VideoGroup>
                </Grid>
                <Grid>
                    <GroupTitle>Week 8 <br /><em>11 maart - 17 maart</em></GroupTitle>
                    <VideoGroup>
                        <Module data-id="56"><ModuleNumber>Module 9</ModuleNumber><br /><br />#56 — Mocking 101 <ModuleTime>(09:47)</ModuleTime></Module>
                        <Module data-id="57"><ModuleNumber>Module 9</ModuleNumber><br /><br />#57 — First Tests and Shallow Rendering <ModuleTime>(14:38)</ModuleTime></Module>
                        <Module data-id="58"><ModuleNumber>Module 9</ModuleNumber><br /><br />#58 — Snapshot Testing <ModuleTime>(15:18)</ModuleTime></Module>
                        <Module data-id="59"><ModuleNumber>Module 9</ModuleNumber><br /><br />#59 — Testing and Mocking Apollo Queries <ModuleTime>(19:40)</ModuleTime></Module>
                        <Module data-id="60"><ModuleNumber>Module 9</ModuleNumber><br /><br />#60 — More Apollo Query Testing <ModuleTime>(20:55)</ModuleTime></Module>
                        <Module data-id="61"><ModuleNumber>Module 9</ModuleNumber><br /><br />#61 — Testing Pagination <ModuleTime>(15:18)</ModuleTime></Module>
                        <Module data-id="62"><ModuleNumber>Module 9</ModuleNumber><br /><br />#62 — Testing Mutations <ModuleTime>(25:47)</ModuleTime></Module>
                    </VideoGroup>
                </Grid>
                <Grid>
                    <GroupTitle>Week 9 <br /><em>18 maart - 24 maart</em></GroupTitle>
                    <VideoGroup>
                        <Module data-id="63"><ModuleNumber>Module 9</ModuleNumber><br /><br />#63 — More Apollo Client Mutation Testing <ModuleTime>(15:21)</ModuleTime></Module>
                        <Module data-id="64"><ModuleNumber>Module 9</ModuleNumber><br /><br />#64 — Testing our Cart <ModuleTime>(25:22)</ModuleTime></Module>
                        <Module data-id="65"><ModuleNumber>Module 9</ModuleNumber><br /><br />#65 — Testing Order Components <ModuleTime>(15:31)</ModuleTime></Module>
                        <Module data-id="66"><ModuleNumber>Module 10</ModuleNumber><br /><br />#66 — Deploying a Prisma Server to Heroku <ModuleTime>(06:49)</ModuleTime></Module>
                        <Module data-id="67"><ModuleNumber>Module 10</ModuleNumber><br /><br />#67 — Deploying Yoga Server to Heroku or Now <ModuleTime>(11:47)</ModuleTime></Module>
                        <Module data-id="68"><ModuleNumber>Module 10</ModuleNumber><br /><br />#68 — Deploying Frontend to Heroku and Now <ModuleTime>(09:43)</ModuleTime></Module>
                    </VideoGroup>
                </Grid>
            </GridWrapper>
        </Container>
    </Layout>
)

export default IndexPage
