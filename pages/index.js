import { Fragment, useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";
import Head from "next/head";

// const DUMMY_MEETUPS = [
//     {
//         id: 'm1',
//         title: 'A First Meetup',
//         image: 'https://meetbosnia.com/storage/2022/04/What-to-see-in-Sarajevo.jpg',
//         address: '71000 Sarajevo',
//         description: 'This is a first meetup!',
//     },
//     {
//         id: 'm2',
//         title: 'A Second Meetup',
//         image: 'https://upload.wikimedia.org/wikipedia/commons/d/d7/Mostar_Old_Town_Panorama_2007.jpg',
//         address: '88000 Mostar',
//         description: 'This is a second meetup!',
//     },
// ];

const HomePage = (props) => {
    // const [loadedMeetups, setLoadedMeetup] = useState([]);

    // useEffect(() => {
    //     // send a http request and fetch data
    //     setLoadedMeetup(DUMMY_MEETUPS)
    // }, []); 

    return (
        // <MeetupList meetups={loadedMeetups}/>
        <Fragment>
            <Head>
                <title>NextJS Meetups</title>
                <meta name='description' content='Browse a huge list of highly active React meetups!'/>
            </Head>
            <MeetupList meetups={props.meetups}/>
        </Fragment>
   );
};

// export async function getServerSideProps(context) {
//     const request = context.request;
//     const response = context.response;
    
//     // fetch data from an API

//     return {
//         props: {
//             meetups: DUMMY_MEETUPS,
//         },
//     };
// };

export async function getStaticProps() {
    // fetch data from an API
    const client = await MongoClient.connect('mongodb+srv://imamovickerim:G5mkUZsY1CmOcOTT@cluster0.cebywgo.mongodb.net/meetups?retryWrites=true&w=majority');
    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const meetups = await meetupsCollection.find().toArray();

    client.close();

    return {
        props: {
            // meetups: DUMMY_MEETUPS,
           meetups: meetups.map(meetup => ({
                title: meetup.title,
                address: meetup.address,
                image: meetup.image,
                id: meetup._id.toString(),
           }))
        },
        revalidate: 1 // number of seconds nextjs will will wait until it regenerate this page for an incoming request
    };  
};

export default HomePage;